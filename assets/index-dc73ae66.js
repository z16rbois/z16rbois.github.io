(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Fh(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Pe={},ws=[],en=()=>{},tw=()=>!1,nw=/^on[^a-z]/,Mc=t=>nw.test(t),Uh=t=>t.startsWith("onUpdate:"),at=Object.assign,zh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},iw=Object.prototype.hasOwnProperty,de=(t,e)=>iw.call(t,e),$=Array.isArray,bs=t=>No(t)==="[object Map]",tr=t=>No(t)==="[object Set]",Qf=t=>No(t)==="[object Date]",Z=t=>typeof t=="function",He=t=>typeof t=="string",Ls=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",n_=t=>(Ae(t)||Z(t))&&Z(t.then)&&Z(t.catch),i_=Object.prototype.toString,No=t=>i_.call(t),sw=t=>No(t).slice(8,-1),s_=t=>No(t)==="[object Object]",jh=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ca=Fh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},rw=/-(\w)/g,bn=qc(t=>t.replace(rw,(e,n)=>n?n.toUpperCase():"")),ow=/\B([A-Z])/g,nr=qc(t=>t.replace(ow,"-$1").toLowerCase()),Vc=qc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Vl=qc(t=>t?`on${Vc(t)}`:""),Ki=(t,e)=>!Object.is(t,e),Sa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ba=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},r_=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Yf;const Au=()=>Yf||(Yf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function eo(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=He(i)?uw(i):eo(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(He(t)||Ae(t))return t}const aw=/;(?![^(]*\))/g,cw=/:([^]+)/,lw=/\/\*[^]*?\*\//g;function uw(t){const e={};return t.replace(lw,"").split(aw).forEach(n=>{if(n){const i=n.split(cw);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Fc(t){let e="";if(He(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const i=Fc(t[n]);i&&(e+=i+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const hw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dw=Fh(hw);function o_(t){return!!t||t===""}function fw(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=xo(t[i],e[i]);return n}function xo(t,e){if(t===e)return!0;let n=Qf(t),i=Qf(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Ls(t),i=Ls(e),n||i)return t===e;if(n=$(t),i=$(e),n||i)return n&&i?fw(t,e):!1;if(n=Ae(t),i=Ae(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!xo(t[o],e[o]))return!1}}return String(t)===String(e)}function Bh(t,e){return t.findIndex(n=>xo(n,e))}const Rt=t=>He(t)?t:t==null?"":$(t)||Ae(t)&&(t.toString===i_||!Z(t.toString))?JSON.stringify(t,a_,2):String(t),a_=(t,e)=>e&&e.__v_isRef?a_(t,e.value):bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:tr(e)?{[`Set(${e.size})`]:[...e.values()]}:Ae(e)&&!$(e)&&!s_(e)?String(e):e;let Nt;class c_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}}on(){Nt=this}off(){Nt=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Uc(t){return new c_(t)}function pw(t,e=Nt){e&&e.active&&e.effects.push(t)}function $h(){return Nt}function l_(t){Nt&&Nt.cleanups.push(t)}const Wh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},u_=t=>(t.w&vi)>0,h_=t=>(t.n&vi)>0,mw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=vi},gw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];u_(s)&&!h_(s)?s.delete(t):e[n++]=s,s.w&=~vi,s.n&=~vi}e.length=n}},$a=new WeakMap;let Pr=0,vi=1;const Cu=30;let Kt;const Ui=Symbol(""),Su=Symbol("");class Hh{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,pw(this,i)}run(){if(!this.active)return this.fn();let e=Kt,n=li;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Kt,Kt=this,li=!0,vi=1<<++Pr,Pr<=Cu?mw(this):Xf(this),this.fn()}finally{Pr<=Cu&&gw(this),vi=1<<--Pr,Kt=this.parent,li=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Kt===this?this.deferStop=!0:this.active&&(Xf(this),this.onStop&&this.onStop(),this.active=!1)}}function Xf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let li=!0;const d_=[];function ir(){d_.push(li),li=!1}function sr(){const t=d_.pop();li=t===void 0?!0:t}function St(t,e,n){if(li&&Kt){let i=$a.get(t);i||$a.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Wh()),f_(s)}}function f_(t,e){let n=!1;Pr<=Cu?h_(t)||(t.n|=vi,n=!u_(t)):n=!t.has(Kt),n&&(t.add(Kt),Kt.deps.push(t))}function jn(t,e,n,i,s,r){const o=$a.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const c=Number(i);o.forEach((l,u)=>{(u==="length"||!Ls(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?jh(n)&&a.push(o.get("length")):(a.push(o.get(Ui)),bs(t)&&a.push(o.get(Su)));break;case"delete":$(t)||(a.push(o.get(Ui)),bs(t)&&a.push(o.get(Su)));break;case"set":bs(t)&&a.push(o.get(Ui));break}if(a.length===1)a[0]&&Pu(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Pu(Wh(c))}}function Pu(t,e){const n=$(t)?t:[...t];for(const i of n)i.computed&&Jf(i);for(const i of n)i.computed||Jf(i)}function Jf(t,e){(t!==Kt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function _w(t,e){var n;return(n=$a.get(t))==null?void 0:n.get(e)}const vw=Fh("__proto__,__v_isRef,__isVue"),p_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ls)),Zf=yw();function yw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=fe(this);for(let r=0,o=this.length;r<o;r++)St(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(fe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ir();const i=fe(this)[e].apply(this,n);return sr(),i}}),t}function Ew(t){const e=fe(this);return St(e,"has",t),e.hasOwnProperty(t)}class m_{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,i){const s=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw"&&i===(s?r?Ow:y_:r?v_:__).get(e))return e;const o=$(e);if(!s){if(o&&de(Zf,n))return Reflect.get(Zf,n,i);if(n==="hasOwnProperty")return Ew}const a=Reflect.get(e,n,i);return(Ls(n)?p_.has(n):vw(n))||(s||St(e,"get",n),r)?a:Me(a)?o&&jh(n)?a:a.value:Ae(a)?s?T_(a):Oo(a):a}}class g_ extends m_{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(Ms(r)&&Me(r)&&!Me(i))return!1;if(!this._shallow&&(!Wa(i)&&!Ms(i)&&(r=fe(r),i=fe(i)),!$(e)&&Me(r)&&!Me(i)))return r.value=i,!0;const o=$(e)&&jh(n)?Number(n)<e.length:de(e,n),a=Reflect.set(e,n,i,s);return e===fe(s)&&(o?Ki(i,r)&&jn(e,"set",n,i):jn(e,"add",n,i)),a}deleteProperty(e,n){const i=de(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&jn(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Ls(n)||!p_.has(n))&&St(e,"has",n),i}ownKeys(e){return St(e,"iterate",$(e)?"length":Ui),Reflect.ownKeys(e)}}class Tw extends m_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Iw=new g_,ww=new Tw,bw=new g_(!0),Kh=t=>t,zc=t=>Reflect.getPrototypeOf(t);function oa(t,e,n=!1,i=!1){t=t.__v_raw;const s=fe(t),r=fe(e);n||(Ki(e,r)&&St(s,"get",e),St(s,"get",r));const{has:o}=zc(s),a=i?Kh:n?Yh:to;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function aa(t,e=!1){const n=this.__v_raw,i=fe(n),s=fe(t);return e||(Ki(t,s)&&St(i,"has",t),St(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ca(t,e=!1){return t=t.__v_raw,!e&&St(fe(t),"iterate",Ui),Reflect.get(t,"size",t)}function ep(t){t=fe(t);const e=fe(this);return zc(e).has.call(e,t)||(e.add(t),jn(e,"add",t,t)),this}function tp(t,e){e=fe(e);const n=fe(this),{has:i,get:s}=zc(n);let r=i.call(n,t);r||(t=fe(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?Ki(e,o)&&jn(n,"set",t,e):jn(n,"add",t,e),this}function np(t){const e=fe(this),{has:n,get:i}=zc(e);let s=n.call(e,t);s||(t=fe(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&jn(e,"delete",t,void 0),r}function ip(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&jn(t,"clear",void 0,void 0),n}function la(t,e){return function(i,s){const r=this,o=r.__v_raw,a=fe(o),c=e?Kh:t?Yh:to;return!t&&St(a,"iterate",Ui),o.forEach((l,u)=>i.call(s,c(l),c(u),r))}}function ua(t,e,n){return function(...i){const s=this.__v_raw,r=fe(s),o=bs(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...i),u=n?Kh:e?Yh:to;return!e&&St(r,"iterate",c?Su:Ui),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Zn(t){return function(...e){return t==="delete"?!1:this}}function Rw(){const t={get(r){return oa(this,r)},get size(){return ca(this)},has:aa,add:ep,set:tp,delete:np,clear:ip,forEach:la(!1,!1)},e={get(r){return oa(this,r,!1,!0)},get size(){return ca(this)},has:aa,add:ep,set:tp,delete:np,clear:ip,forEach:la(!1,!0)},n={get(r){return oa(this,r,!0)},get size(){return ca(this,!0)},has(r){return aa.call(this,r,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:la(!0,!1)},i={get(r){return oa(this,r,!0,!0)},get size(){return ca(this,!0)},has(r){return aa.call(this,r,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:la(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ua(r,!1,!1),n[r]=ua(r,!0,!1),e[r]=ua(r,!1,!0),i[r]=ua(r,!0,!0)}),[t,n,e,i]}const[Aw,Cw,Sw,Pw]=Rw();function Gh(t,e){const n=e?t?Pw:Sw:t?Cw:Aw;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(de(n,s)&&s in i?n:i,s,r)}const kw={get:Gh(!1,!1)},Nw={get:Gh(!1,!0)},xw={get:Gh(!0,!1)},__=new WeakMap,v_=new WeakMap,y_=new WeakMap,Ow=new WeakMap;function Dw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lw(t){return t.__v_skip||!Object.isExtensible(t)?0:Dw(sw(t))}function Oo(t){return Ms(t)?t:Qh(t,!1,Iw,kw,__)}function E_(t){return Qh(t,!1,bw,Nw,v_)}function T_(t){return Qh(t,!0,ww,xw,y_)}function Qh(t,e,n,i,s){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=Lw(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function ui(t){return Ms(t)?ui(t.__v_raw):!!(t&&t.__v_isReactive)}function Ms(t){return!!(t&&t.__v_isReadonly)}function Wa(t){return!!(t&&t.__v_isShallow)}function I_(t){return ui(t)||Ms(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function jc(t){return Ba(t,"__v_skip",!0),t}const to=t=>Ae(t)?Oo(t):t,Yh=t=>Ae(t)?T_(t):t;function w_(t){li&&Kt&&(t=fe(t),f_(t.dep||(t.dep=Wh())))}function b_(t,e){t=fe(t);const n=t.dep;n&&Pu(n)}function Me(t){return!!(t&&t.__v_isRef===!0)}function hi(t){return A_(t,!1)}function R_(t){return A_(t,!0)}function A_(t,e){return Me(t)?t:new Mw(t,e)}class Mw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:to(e)}get value(){return w_(this),this._value}set value(e){const n=this.__v_isShallow||Wa(e)||Ms(e);e=n?e:fe(e),Ki(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:to(e),b_(this))}}function zi(t){return Me(t)?t.value:t}function Ln(t){return Z(t)?t():zi(t)}const qw={get:(t,e,n)=>zi(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Me(s)&&!Me(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function C_(t){return ui(t)?t:new Proxy(t,qw)}function Vw(t){const e=$(t)?new Array(t.length):{};for(const n in t)e[n]=S_(t,n);return e}class Fw{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return _w(fe(this._object),this._key)}}class Uw{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function zw(t,e,n){return Me(t)?t:Z(t)?new Uw(t):Ae(t)&&arguments.length>1?S_(t,e,n):hi(t)}function S_(t,e,n){const i=t[e];return Me(i)?i:new Fw(t,e,n)}class jw{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Hh(e,()=>{this._dirty||(this._dirty=!0,b_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=fe(this);return w_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Bw(t,e,n=!1){let i,s;const r=Z(t);return r?(i=t,s=en):(i=t.get,s=t.set),new jw(i,s,r||!s,n)}function di(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){Bc(r,e,n)}return s}function tn(t,e,n,i){if(Z(t)){const r=di(t,e,n,i);return r&&n_(r)&&r.catch(o=>{Bc(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(tn(t[r],e,n,i));return s}function Bc(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){di(c,null,10,[t,o,a]);return}}$w(t,n,s,i)}function $w(t,e,n,i=!0){console.error(t)}let no=!1,ku=!1;const mt=[];let dn=0;const Rs=[];let Mn=null,xi=0;const P_=Promise.resolve();let Xh=null;function Jh(t){const e=Xh||P_;return t?e.then(this?t.bind(this):t):e}function Ww(t){let e=dn+1,n=mt.length;for(;e<n;){const i=e+n>>>1,s=mt[i],r=io(s);r<t||r===t&&s.pre?e=i+1:n=i}return e}function Zh(t){(!mt.length||!mt.includes(t,no&&t.allowRecurse?dn+1:dn))&&(t.id==null?mt.push(t):mt.splice(Ww(t.id),0,t),k_())}function k_(){!no&&!ku&&(ku=!0,Xh=P_.then(x_))}function Hw(t){const e=mt.indexOf(t);e>dn&&mt.splice(e,1)}function Kw(t){$(t)?Rs.push(...t):(!Mn||!Mn.includes(t,t.allowRecurse?xi+1:xi))&&Rs.push(t),k_()}function sp(t,e=no?dn+1:0){for(;e<mt.length;e++){const n=mt[e];n&&n.pre&&(mt.splice(e,1),e--,n())}}function N_(t){if(Rs.length){const e=[...new Set(Rs)];if(Rs.length=0,Mn){Mn.push(...e);return}for(Mn=e,Mn.sort((n,i)=>io(n)-io(i)),xi=0;xi<Mn.length;xi++)Mn[xi]();Mn=null,xi=0}}const io=t=>t.id==null?1/0:t.id,Gw=(t,e)=>{const n=io(t)-io(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function x_(t){ku=!1,no=!0,mt.sort(Gw);const e=en;try{for(dn=0;dn<mt.length;dn++){const n=mt[dn];n&&n.active!==!1&&di(n,null,14)}}finally{dn=0,mt.length=0,N_(),no=!1,Xh=null,(mt.length||Rs.length)&&x_()}}function Qw(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Pe;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||Pe;d&&(s=n.map(f=>He(f)?f.trim():f)),h&&(s=n.map(r_))}let a,c=i[a=Vl(e)]||i[a=Vl(bn(e))];!c&&r&&(c=i[a=Vl(nr(e))]),c&&tn(c,t,6,s);const l=i[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,tn(l,t,6,s)}}function O_(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Z(t)){const c=l=>{const u=O_(l,e,!0);u&&(a=!0,at(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(Ae(t)&&i.set(t,null),null):($(r)?r.forEach(c=>o[c]=null):at(o,r),Ae(t)&&i.set(t,o),o)}function $c(t,e){return!t||!Mc(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,nr(e))||de(t,e))}let Ye=null,D_=null;function Ha(t){const e=Ye;return Ye=t,D_=t&&t.type.__scopeId||null,e}function Pa(t,e=Ye,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&mp(-1);const r=Ha(e);let o;try{o=t(...s)}finally{Ha(r),i._d&&mp(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Fl(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:v}=t;let y,I;const P=Ha(t);try{if(n.shapeFlag&4){const R=s||i;y=hn(u.call(R,R,h,r,f,d,g)),I=c}else{const R=e;y=hn(R.length>1?R(r,{attrs:c,slots:a,emit:l}):R(r,null)),I=e.props?c:Yw(c)}}catch(R){Ur.length=0,Bc(R,t,1),y=je(yi)}let k=y;if(I&&v!==!1){const R=Object.keys(I),{shapeFlag:H}=k;R.length&&H&7&&(o&&R.some(Uh)&&(I=Xw(I,o)),k=Vs(k,I))}return n.dirs&&(k=Vs(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),y=k,Ha(P),y}const Yw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Mc(n))&&((e||(e={}))[n]=t[n]);return e},Xw=(t,e)=>{const n={};for(const i in t)(!Uh(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Jw(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?rp(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!$c(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?rp(i,o,l):!0:!!o;return!1}function rp(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!$c(n,r))return!0}return!1}function Zw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const L_="components";function fi(t,e){return t0(L_,t,!0,e)||t}const e0=Symbol.for("v-ndc");function t0(t,e,n=!0,i=!1){const s=Ye||$e;if(s){const r=s.type;if(t===L_){const a=K0(r,!1);if(a&&(a===e||a===bn(e)||a===Vc(bn(e))))return r}const o=op(s[t]||r[t],e)||op(s.appContext[t],e);return!o&&i?r:o}}function op(t,e){return t&&(t[e]||t[bn(e)]||t[Vc(bn(e))])}const n0=t=>t.__isSuspense;function i0(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):Kw(t)}const ha={};function As(t,e,n){return M_(t,e,n)}function M_(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=Pe){var a;const c=$h()===((a=$e)==null?void 0:a.scope)?$e:null;let l,u=!1,h=!1;if(Me(t)?(l=()=>t.value,u=Wa(t)):ui(t)?(l=()=>t,i=!0):$(t)?(h=!0,u=t.some(R=>ui(R)||Wa(R)),l=()=>t.map(R=>{if(Me(R))return R.value;if(ui(R))return Di(R);if(Z(R))return di(R,c,2)})):Z(t)?e?l=()=>di(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),tn(t,c,3,[f])}:l=en,e&&i){const R=l;l=()=>Di(R())}let d,f=R=>{d=P.onStop=()=>{di(R,c,4)}},g;if(oo)if(f=en,e?n&&tn(e,c,3,[l(),h?[]:void 0,f]):l(),s==="sync"){const R=Y0();g=R.__watcherHandles||(R.__watcherHandles=[])}else return en;let v=h?new Array(t.length).fill(ha):ha;const y=()=>{if(P.active)if(e){const R=P.run();(i||u||(h?R.some((H,ie)=>Ki(H,v[ie])):Ki(R,v)))&&(d&&d(),tn(e,c,3,[R,v===ha?void 0:h&&v[0]===ha?[]:v,f]),v=R)}else P.run()};y.allowRecurse=!!e;let I;s==="sync"?I=y:s==="post"?I=()=>bt(y,c&&c.suspense):(y.pre=!0,c&&(y.id=c.uid),I=()=>Zh(y));const P=new Hh(l,I);e?n?y():v=P.run():s==="post"?bt(P.run.bind(P),c&&c.suspense):P.run();const k=()=>{P.stop(),c&&c.scope&&zh(c.scope.effects,P)};return g&&g.push(k),k}function s0(t,e,n){const i=this.proxy,s=He(t)?t.includes(".")?q_(i,t):()=>i[t]:t.bind(i,i);let r;Z(e)?r=e:(r=e.handler,n=e);const o=$e;Fs(this);const a=M_(s,r.bind(i),n);return o?Fs(o):Bi(),a}function q_(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function Di(t,e){if(!Ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Me(t))Di(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Di(t[n],e);else if(tr(t)||bs(t))t.forEach(n=>{Di(n,e)});else if(s_(t))for(const n in t)Di(t[n],e);return t}function V_(t,e){const n=Ye;if(n===null)return t;const i=Gc(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,l=Pe]=e[r];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&Di(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Si(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(ir(),tn(c,n,8,[t.el,a,t,e]),sr())}}/*! #__NO_SIDE_EFFECTS__ */function F_(t,e){return Z(t)?(()=>at({name:t.name},e,{setup:t}))():t}const Vr=t=>!!t.type.__asyncLoader,U_=t=>t.type.__isKeepAlive;function r0(t,e){z_(t,"a",e)}function o0(t,e){z_(t,"da",e)}function z_(t,e,n=$e){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Wc(e,i,n),n){let s=n.parent;for(;s&&s.parent;)U_(s.parent.vnode)&&a0(i,e,n,s),s=s.parent}}function a0(t,e,n,i){const s=Wc(e,t,i,!0);j_(()=>{zh(i[e],s)},n)}function Wc(t,e,n=$e,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ir(),Fs(n);const a=tn(e,n,t,o);return Bi(),sr(),a});return i?s.unshift(r):s.push(r),r}}const Yn=t=>(e,n=$e)=>(!oo||t==="sp")&&Wc(t,(...i)=>e(...i),n),c0=Yn("bm"),l0=Yn("m"),u0=Yn("bu"),h0=Yn("u"),d0=Yn("bum"),j_=Yn("um"),B_=Yn("sp"),f0=Yn("rtg"),p0=Yn("rtc");function m0(t,e=$e){Wc("ec",t,e)}function Ka(t,e,n,i){let s;const r=n&&n[i];if($(t)||He(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(Ae(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}function g0(t,e,n={},i,s){if(Ye.isCE||Ye.parent&&Vr(Ye.parent)&&Ye.parent.isCE)return e!=="default"&&(n.name=e),je("slot",n,i&&i());let r=t[e];r&&r._c&&(r._d=!1),ge();const o=r&&$_(r(n)),a=qs(tt,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function $_(t){return t.some(e=>Qa(e)?!(e.type===yi||e.type===tt&&!$_(e.children)):!0)?t:null}const Nu=t=>t?nv(t)?Gc(t)||t.proxy:Nu(t.parent):null,Fr=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Nu(t.parent),$root:t=>Nu(t.root),$emit:t=>t.emit,$options:t=>ed(t),$forceUpdate:t=>t.f||(t.f=()=>Zh(t.update)),$nextTick:t=>t.n||(t.n=Jh.bind(t.proxy)),$watch:t=>s0.bind(t)}),Ul=(t,e)=>t!==Pe&&!t.__isScriptSetup&&de(t,e),_0={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Ul(i,e))return o[e]=1,i[e];if(s!==Pe&&de(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&de(l,e))return o[e]=3,r[e];if(n!==Pe&&de(n,e))return o[e]=4,n[e];xu&&(o[e]=0)}}const u=Fr[e];let h,d;if(u)return e==="$attrs"&&St(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Pe&&de(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,de(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Ul(s,e)?(s[e]=n,!0):i!==Pe&&de(i,e)?(i[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==Pe&&de(t,o)||Ul(e,o)||(a=r[0])&&de(a,o)||de(i,o)||de(Fr,o)||de(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ap(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let xu=!0;function v0(t){const e=ed(t),n=t.proxy,i=t.ctx;xu=!1,e.beforeCreate&&cp(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:v,deactivated:y,beforeDestroy:I,beforeUnmount:P,destroyed:k,unmounted:R,render:H,renderTracked:ie,renderTriggered:he,errorCaptured:G,serverPrefetch:ne,expose:Ie,inheritAttrs:ct,components:Pt,directives:qt,filters:Ci}=e;if(l&&y0(l,i,null),o)for(const Re in o){const _e=o[Re];Z(_e)&&(i[Re]=_e.bind(n))}if(s){const Re=s.call(n,n);Ae(Re)&&(t.data=Oo(Re))}if(xu=!0,r)for(const Re in r){const _e=r[Re],On=Z(_e)?_e.bind(n,n):Z(_e.get)?_e.get.bind(n,n):en,Jn=!Z(_e)&&Z(_e.set)?_e.set.bind(n):en,cn=Ft({get:On,set:Jn});Object.defineProperty(i,Re,{enumerable:!0,configurable:!0,get:()=>cn.value,set:wt=>cn.value=wt})}if(a)for(const Re in a)W_(a[Re],i,n,Re);if(c){const Re=Z(c)?c.call(n):c;Reflect.ownKeys(Re).forEach(_e=>{ka(_e,Re[_e])})}u&&cp(u,t,"c");function pe(Re,_e){$(_e)?_e.forEach(On=>Re(On.bind(n))):_e&&Re(_e.bind(n))}if(pe(c0,h),pe(l0,d),pe(u0,f),pe(h0,g),pe(r0,v),pe(o0,y),pe(m0,G),pe(p0,ie),pe(f0,he),pe(d0,P),pe(j_,R),pe(B_,ne),$(Ie))if(Ie.length){const Re=t.exposed||(t.exposed={});Ie.forEach(_e=>{Object.defineProperty(Re,_e,{get:()=>n[_e],set:On=>n[_e]=On})})}else t.exposed||(t.exposed={});H&&t.render===en&&(t.render=H),ct!=null&&(t.inheritAttrs=ct),Pt&&(t.components=Pt),qt&&(t.directives=qt)}function y0(t,e,n=en){$(t)&&(t=Ou(t));for(const i in t){const s=t[i];let r;Ae(s)?"default"in s?r=$t(s.from||i,s.default,!0):r=$t(s.from||i):r=$t(s),Me(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function cp(t,e,n){tn($(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function W_(t,e,n,i){const s=i.includes(".")?q_(n,i):()=>n[i];if(He(t)){const r=e[t];Z(r)&&As(s,r)}else if(Z(t))As(s,t.bind(n));else if(Ae(t))if($(t))t.forEach(r=>W_(r,e,n,i));else{const r=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(r)&&As(s,r,t)}}function ed(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!n&&!i?c=e:(c={},s.length&&s.forEach(l=>Ga(c,l,o,!0)),Ga(c,e,o)),Ae(e)&&r.set(e,c),c}function Ga(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Ga(t,r,n,!0),s&&s.forEach(o=>Ga(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=E0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const E0={data:lp,props:up,emits:up,methods:kr,computed:kr,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:kr,directives:kr,watch:I0,provide:lp,inject:T0};function lp(t,e){return e?t?function(){return at(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function T0(t,e){return kr(Ou(t),Ou(e))}function Ou(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function kr(t,e){return t?at(Object.create(null),t,e):e}function up(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:at(Object.create(null),ap(t),ap(e??{})):e}function I0(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const i in e)n[i]=Tt(t[i],e[i]);return n}function H_(){return{app:null,config:{isNativeTag:tw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let w0=0;function b0(t,e){return function(i,s=null){Z(i)||(i=at({},i)),s!=null&&!Ae(s)&&(s=null);const r=H_(),o=new WeakSet;let a=!1;const c=r.app={_uid:w0++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:X0,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&Z(l.install)?(o.add(l),l.install(c,...u)):Z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const d=je(i,s);return d.appContext=r,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Gc(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c},runWithContext(l){so=c;try{return l()}finally{so=null}}};return c}}let so=null;function ka(t,e){if($e){let n=$e.provides;const i=$e.parent&&$e.parent.provides;i===n&&(n=$e.provides=Object.create(i)),n[t]=e}}function $t(t,e,n=!1){const i=$e||Ye;if(i||so){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:so._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Z(e)?e.call(i&&i.proxy):e}}function R0(){return!!($e||Ye||so)}function A0(t,e,n,i=!1){const s={},r={};Ba(r,Kc,1),t.propsDefaults=Object.create(null),K_(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:E_(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function C0(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=fe(s),[c]=t.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if($c(t.emitsOptions,d))continue;const f=e[d];if(c)if(de(r,d))f!==r[d]&&(r[d]=f,l=!0);else{const g=bn(d);s[g]=Du(c,a,g,f,t,!1)}else f!==r[d]&&(r[d]=f,l=!0)}}}else{K_(t,e,s,r)&&(l=!0);let u;for(const h in a)(!e||!de(e,h)&&((u=nr(h))===h||!de(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Du(c,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!de(e,h))&&(delete r[h],l=!0)}l&&jn(t,"set","$attrs")}function K_(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ca(c))continue;const l=e[c];let u;s&&de(s,u=bn(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:$c(t.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=fe(n),l=a||Pe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Du(s,c,h,l[h],t,!de(l,h))}}return o}function Du(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Z(c)){const{propsDefaults:l}=s;n in l?i=l[n]:(Fs(s),i=l[n]=c.call(null,e),Bi())}else i=c}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===nr(n))&&(i=!0))}return i}function G_(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let c=!1;if(!Z(t)){const u=h=>{c=!0;const[d,f]=G_(h,e,!0);at(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return Ae(t)&&i.set(t,ws),ws;if($(r))for(let u=0;u<r.length;u++){const h=bn(r[u]);hp(h)&&(o[h]=Pe)}else if(r)for(const u in r){const h=bn(u);if(hp(h)){const d=r[u],f=o[h]=$(d)||Z(d)?{type:d}:at({},d);if(f){const g=pp(Boolean,f.type),v=pp(String,f.type);f[0]=g>-1,f[1]=v<0||g<v,(g>-1||de(f,"default"))&&a.push(h)}}}const l=[o,a];return Ae(t)&&i.set(t,l),l}function hp(t){return t[0]!=="$"}function dp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function fp(t,e){return dp(t)===dp(e)}function pp(t,e){return $(e)?e.findIndex(n=>fp(n,t)):Z(e)&&fp(e,t)?0:-1}const Q_=t=>t[0]==="_"||t==="$stable",td=t=>$(t)?t.map(hn):[hn(t)],S0=(t,e,n)=>{if(e._n)return e;const i=Pa((...s)=>td(e(...s)),n);return i._c=!1,i},Y_=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Q_(s))continue;const r=t[s];if(Z(r))e[s]=S0(s,r,i);else if(r!=null){const o=td(r);e[s]=()=>o}}},X_=(t,e)=>{const n=td(e);t.slots.default=()=>n},P0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),Ba(e,"_",n)):Y_(e,t.slots={})}else t.slots={},e&&X_(t,e);Ba(t.slots,Kc,1)},k0=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Pe;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(at(s,e),!n&&a===1&&delete s._):(r=!e.$stable,Y_(e,s)),o=e}else e&&(X_(t,e),o={default:1});if(r)for(const a in s)!Q_(a)&&o[a]==null&&delete s[a]};function Lu(t,e,n,i,s=!1){if($(t)){t.forEach((d,f)=>Lu(d,e&&($(e)?e[f]:e),n,i,s));return}if(Vr(i)&&!s)return;const r=i.shapeFlag&4?Gc(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Pe?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(He(l)?(u[l]=null,de(h,l)&&(h[l]=null)):Me(l)&&(l.value=null)),Z(c))di(c,a,12,[o,u]);else{const d=He(c),f=Me(c);if(d||f){const g=()=>{if(t.f){const v=d?de(h,c)?h[c]:u[c]:c.value;s?$(v)&&zh(v,r):$(v)?v.includes(r)||v.push(r):d?(u[c]=[r],de(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,de(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,bt(g,n)):g()}}}const bt=i0;function N0(t){return x0(t)}function x0(t,e){const n=Au();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=en,insertStaticContent:g}=t,v=(p,m,_,E=null,w=null,A=null,M=!1,N=null,x=!!m.dynamicChildren)=>{if(p===m)return;p&&!yr(p,m)&&(E=T(p),wt(p,w,A,!0),p=null),m.patchFlag===-2&&(x=!1,m.dynamicChildren=null);const{type:S,ref:j,shapeFlag:F}=m;switch(S){case Hc:y(p,m,_,E);break;case yi:I(p,m,_,E);break;case zl:p==null&&P(m,_,E,M);break;case tt:Pt(p,m,_,E,w,A,M,N,x);break;default:F&1?H(p,m,_,E,w,A,M,N,x):F&6?qt(p,m,_,E,w,A,M,N,x):(F&64||F&128)&&S.process(p,m,_,E,w,A,M,N,x,O)}j!=null&&w&&Lu(j,p&&p.ref,A,m||p,!m)},y=(p,m,_,E)=>{if(p==null)i(m.el=a(m.children),_,E);else{const w=m.el=p.el;m.children!==p.children&&l(w,m.children)}},I=(p,m,_,E)=>{p==null?i(m.el=c(m.children||""),_,E):m.el=p.el},P=(p,m,_,E)=>{[p.el,p.anchor]=g(p.children,m,_,E,p.el,p.anchor)},k=({el:p,anchor:m},_,E)=>{let w;for(;p&&p!==m;)w=d(p),i(p,_,E),p=w;i(m,_,E)},R=({el:p,anchor:m})=>{let _;for(;p&&p!==m;)_=d(p),s(p),p=_;s(m)},H=(p,m,_,E,w,A,M,N,x)=>{M=M||m.type==="svg",p==null?ie(m,_,E,w,A,M,N,x):ne(p,m,w,A,M,N,x)},ie=(p,m,_,E,w,A,M,N)=>{let x,S;const{type:j,props:F,shapeFlag:B,transition:ee,dirs:se}=p;if(x=p.el=o(p.type,A,F&&F.is,F),B&8?u(x,p.children):B&16&&G(p.children,x,null,E,w,A&&j!=="foreignObject",M,N),se&&Si(p,null,E,"created"),he(x,p,p.scopeId,M,E),F){for(const we in F)we!=="value"&&!Ca(we)&&r(x,we,null,F[we],A,p.children,E,w,lt);"value"in F&&r(x,"value",null,F.value),(S=F.onVnodeBeforeMount)&&un(S,E,p)}se&&Si(p,null,E,"beforeMount");const Ce=O0(w,ee);Ce&&ee.beforeEnter(x),i(x,m,_),((S=F&&F.onVnodeMounted)||Ce||se)&&bt(()=>{S&&un(S,E,p),Ce&&ee.enter(x),se&&Si(p,null,E,"mounted")},w)},he=(p,m,_,E,w)=>{if(_&&f(p,_),E)for(let A=0;A<E.length;A++)f(p,E[A]);if(w){let A=w.subTree;if(m===A){const M=w.vnode;he(p,M,M.scopeId,M.slotScopeIds,w.parent)}}},G=(p,m,_,E,w,A,M,N,x=0)=>{for(let S=x;S<p.length;S++){const j=p[S]=N?ii(p[S]):hn(p[S]);v(null,j,m,_,E,w,A,M,N)}},ne=(p,m,_,E,w,A,M)=>{const N=m.el=p.el;let{patchFlag:x,dynamicChildren:S,dirs:j}=m;x|=p.patchFlag&16;const F=p.props||Pe,B=m.props||Pe;let ee;_&&Pi(_,!1),(ee=B.onVnodeBeforeUpdate)&&un(ee,_,m,p),j&&Si(m,p,_,"beforeUpdate"),_&&Pi(_,!0);const se=w&&m.type!=="foreignObject";if(S?Ie(p.dynamicChildren,S,N,_,E,se,A):M||_e(p,m,N,null,_,E,se,A,!1),x>0){if(x&16)ct(N,m,F,B,_,E,w);else if(x&2&&F.class!==B.class&&r(N,"class",null,B.class,w),x&4&&r(N,"style",F.style,B.style,w),x&8){const Ce=m.dynamicProps;for(let we=0;we<Ce.length;we++){const Fe=Ce[we],Ht=F[Fe],hs=B[Fe];(hs!==Ht||Fe==="value")&&r(N,Fe,Ht,hs,w,p.children,_,E,lt)}}x&1&&p.children!==m.children&&u(N,m.children)}else!M&&S==null&&ct(N,m,F,B,_,E,w);((ee=B.onVnodeUpdated)||j)&&bt(()=>{ee&&un(ee,_,m,p),j&&Si(m,p,_,"updated")},E)},Ie=(p,m,_,E,w,A,M)=>{for(let N=0;N<m.length;N++){const x=p[N],S=m[N],j=x.el&&(x.type===tt||!yr(x,S)||x.shapeFlag&70)?h(x.el):_;v(x,S,j,null,E,w,A,M,!0)}},ct=(p,m,_,E,w,A,M)=>{if(_!==E){if(_!==Pe)for(const N in _)!Ca(N)&&!(N in E)&&r(p,N,_[N],null,M,m.children,w,A,lt);for(const N in E){if(Ca(N))continue;const x=E[N],S=_[N];x!==S&&N!=="value"&&r(p,N,S,x,M,m.children,w,A,lt)}"value"in E&&r(p,"value",_.value,E.value)}},Pt=(p,m,_,E,w,A,M,N,x)=>{const S=m.el=p?p.el:a(""),j=m.anchor=p?p.anchor:a("");let{patchFlag:F,dynamicChildren:B,slotScopeIds:ee}=m;ee&&(N=N?N.concat(ee):ee),p==null?(i(S,_,E),i(j,_,E),G(m.children,_,j,w,A,M,N,x)):F>0&&F&64&&B&&p.dynamicChildren?(Ie(p.dynamicChildren,B,_,w,A,M,N),(m.key!=null||w&&m===w.subTree)&&J_(p,m,!0)):_e(p,m,_,j,w,A,M,N,x)},qt=(p,m,_,E,w,A,M,N,x)=>{m.slotScopeIds=N,p==null?m.shapeFlag&512?w.ctx.activate(m,_,E,M,x):Ci(m,_,E,w,A,M,x):Vt(p,m,x)},Ci=(p,m,_,E,w,A,M)=>{const N=p.component=j0(p,E,w);if(U_(p)&&(N.ctx.renderer=O),B0(N),N.asyncDep){if(w&&w.registerDep(N,pe),!p.el){const x=N.subTree=je(yi);I(null,x,m,_)}return}pe(N,p,m,_,w,A,M)},Vt=(p,m,_)=>{const E=m.component=p.component;if(Jw(p,m,_))if(E.asyncDep&&!E.asyncResolved){Re(E,m,_);return}else E.next=m,Hw(E.update),E.update();else m.el=p.el,E.vnode=m},pe=(p,m,_,E,w,A,M)=>{const N=()=>{if(p.isMounted){let{next:j,bu:F,u:B,parent:ee,vnode:se}=p,Ce=j,we;Pi(p,!1),j?(j.el=se.el,Re(p,j,M)):j=se,F&&Sa(F),(we=j.props&&j.props.onVnodeBeforeUpdate)&&un(we,ee,j,se),Pi(p,!0);const Fe=Fl(p),Ht=p.subTree;p.subTree=Fe,v(Ht,Fe,h(Ht.el),T(Ht),p,w,A),j.el=Fe.el,Ce===null&&Zw(p,Fe.el),B&&bt(B,w),(we=j.props&&j.props.onVnodeUpdated)&&bt(()=>un(we,ee,j,se),w)}else{let j;const{el:F,props:B}=m,{bm:ee,m:se,parent:Ce}=p,we=Vr(m);if(Pi(p,!1),ee&&Sa(ee),!we&&(j=B&&B.onVnodeBeforeMount)&&un(j,Ce,m),Pi(p,!0),F&&ve){const Fe=()=>{p.subTree=Fl(p),ve(F,p.subTree,p,w,null)};we?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Fe()):Fe()}else{const Fe=p.subTree=Fl(p);v(null,Fe,_,E,p,w,A),m.el=Fe.el}if(se&&bt(se,w),!we&&(j=B&&B.onVnodeMounted)){const Fe=m;bt(()=>un(j,Ce,Fe),w)}(m.shapeFlag&256||Ce&&Vr(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&p.a&&bt(p.a,w),p.isMounted=!0,m=_=E=null}},x=p.effect=new Hh(N,()=>Zh(S),p.scope),S=p.update=()=>x.run();S.id=p.uid,Pi(p,!0),S()},Re=(p,m,_)=>{m.component=p;const E=p.vnode.props;p.vnode=m,p.next=null,C0(p,m.props,E,_),k0(p,m.children,_),ir(),sp(),sr()},_e=(p,m,_,E,w,A,M,N,x=!1)=>{const S=p&&p.children,j=p?p.shapeFlag:0,F=m.children,{patchFlag:B,shapeFlag:ee}=m;if(B>0){if(B&128){Jn(S,F,_,E,w,A,M,N,x);return}else if(B&256){On(S,F,_,E,w,A,M,N,x);return}}ee&8?(j&16&&lt(S,w,A),F!==S&&u(_,F)):j&16?ee&16?Jn(S,F,_,E,w,A,M,N,x):lt(S,w,A,!0):(j&8&&u(_,""),ee&16&&G(F,_,E,w,A,M,N,x))},On=(p,m,_,E,w,A,M,N,x)=>{p=p||ws,m=m||ws;const S=p.length,j=m.length,F=Math.min(S,j);let B;for(B=0;B<F;B++){const ee=m[B]=x?ii(m[B]):hn(m[B]);v(p[B],ee,_,null,w,A,M,N,x)}S>j?lt(p,w,A,!0,!1,F):G(m,_,E,w,A,M,N,x,F)},Jn=(p,m,_,E,w,A,M,N,x)=>{let S=0;const j=m.length;let F=p.length-1,B=j-1;for(;S<=F&&S<=B;){const ee=p[S],se=m[S]=x?ii(m[S]):hn(m[S]);if(yr(ee,se))v(ee,se,_,null,w,A,M,N,x);else break;S++}for(;S<=F&&S<=B;){const ee=p[F],se=m[B]=x?ii(m[B]):hn(m[B]);if(yr(ee,se))v(ee,se,_,null,w,A,M,N,x);else break;F--,B--}if(S>F){if(S<=B){const ee=B+1,se=ee<j?m[ee].el:E;for(;S<=B;)v(null,m[S]=x?ii(m[S]):hn(m[S]),_,se,w,A,M,N,x),S++}}else if(S>B)for(;S<=F;)wt(p[S],w,A,!0),S++;else{const ee=S,se=S,Ce=new Map;for(S=se;S<=B;S++){const kt=m[S]=x?ii(m[S]):hn(m[S]);kt.key!=null&&Ce.set(kt.key,S)}let we,Fe=0;const Ht=B-se+1;let hs=!1,Hf=0;const vr=new Array(Ht);for(S=0;S<Ht;S++)vr[S]=0;for(S=ee;S<=F;S++){const kt=p[S];if(Fe>=Ht){wt(kt,w,A,!0);continue}let ln;if(kt.key!=null)ln=Ce.get(kt.key);else for(we=se;we<=B;we++)if(vr[we-se]===0&&yr(kt,m[we])){ln=we;break}ln===void 0?wt(kt,w,A,!0):(vr[ln-se]=S+1,ln>=Hf?Hf=ln:hs=!0,v(kt,m[ln],_,null,w,A,M,N,x),Fe++)}const Kf=hs?D0(vr):ws;for(we=Kf.length-1,S=Ht-1;S>=0;S--){const kt=se+S,ln=m[kt],Gf=kt+1<j?m[kt+1].el:E;vr[S]===0?v(null,ln,_,Gf,w,A,M,N,x):hs&&(we<0||S!==Kf[we]?cn(ln,_,Gf,2):we--)}}},cn=(p,m,_,E,w=null)=>{const{el:A,type:M,transition:N,children:x,shapeFlag:S}=p;if(S&6){cn(p.component.subTree,m,_,E);return}if(S&128){p.suspense.move(m,_,E);return}if(S&64){M.move(p,m,_,O);return}if(M===tt){i(A,m,_);for(let F=0;F<x.length;F++)cn(x[F],m,_,E);i(p.anchor,m,_);return}if(M===zl){k(p,m,_);return}if(E!==2&&S&1&&N)if(E===0)N.beforeEnter(A),i(A,m,_),bt(()=>N.enter(A),w);else{const{leave:F,delayLeave:B,afterLeave:ee}=N,se=()=>i(A,m,_),Ce=()=>{F(A,()=>{se(),ee&&ee()})};B?B(A,se,Ce):Ce()}else i(A,m,_)},wt=(p,m,_,E=!1,w=!1)=>{const{type:A,props:M,ref:N,children:x,dynamicChildren:S,shapeFlag:j,patchFlag:F,dirs:B}=p;if(N!=null&&Lu(N,null,_,p,!0),j&256){m.ctx.deactivate(p);return}const ee=j&1&&B,se=!Vr(p);let Ce;if(se&&(Ce=M&&M.onVnodeBeforeUnmount)&&un(Ce,m,p),j&6)ra(p.component,_,E);else{if(j&128){p.suspense.unmount(_,E);return}ee&&Si(p,null,m,"beforeUnmount"),j&64?p.type.remove(p,m,_,w,O,E):S&&(A!==tt||F>0&&F&64)?lt(S,m,_,!1,!0):(A===tt&&F&384||!w&&j&16)&&lt(x,m,_),E&&ls(p)}(se&&(Ce=M&&M.onVnodeUnmounted)||ee)&&bt(()=>{Ce&&un(Ce,m,p),ee&&Si(p,null,m,"unmounted")},_)},ls=p=>{const{type:m,el:_,anchor:E,transition:w}=p;if(m===tt){us(_,E);return}if(m===zl){R(p);return}const A=()=>{s(_),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(p.shapeFlag&1&&w&&!w.persisted){const{leave:M,delayLeave:N}=w,x=()=>M(_,A);N?N(p.el,A,x):x()}else A()},us=(p,m)=>{let _;for(;p!==m;)_=d(p),s(p),p=_;s(m)},ra=(p,m,_)=>{const{bum:E,scope:w,update:A,subTree:M,um:N}=p;E&&Sa(E),w.stop(),A&&(A.active=!1,wt(M,p,m,_)),N&&bt(N,m),bt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},lt=(p,m,_,E=!1,w=!1,A=0)=>{for(let M=A;M<p.length;M++)wt(p[M],m,_,E,w)},T=p=>p.shapeFlag&6?T(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),q=(p,m,_)=>{p==null?m._vnode&&wt(m._vnode,null,null,!0):v(m._vnode||null,p,m,null,null,null,_),sp(),N_(),m._vnode=p},O={p:v,um:wt,m:cn,r:ls,mt:Ci,mc:G,pc:_e,pbc:Ie,n:T,o:t};let U,ve;return e&&([U,ve]=e(O)),{render:q,hydrate:U,createApp:b0(q,U)}}function Pi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function O0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function J_(t,e,n=!1){const i=t.children,s=e.children;if($(i)&&$(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ii(s[r]),a.el=o.el),n||J_(o,a)),a.type===Hc&&(a.el=o.el)}}function D0(t){const e=t.slice(),n=[0];let i,s,r,o,a;const c=t.length;for(i=0;i<c;i++){const l=t[i];if(l!==0){if(s=n[n.length-1],t[s]<l){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const L0=t=>t.__isTeleport,tt=Symbol.for("v-fgt"),Hc=Symbol.for("v-txt"),yi=Symbol.for("v-cmt"),zl=Symbol.for("v-stc"),Ur=[];let Yt=null;function ge(t=!1){Ur.push(Yt=t?null:[])}function M0(){Ur.pop(),Yt=Ur[Ur.length-1]||null}let ro=1;function mp(t){ro+=t}function Z_(t){return t.dynamicChildren=ro>0?Yt||ws:null,M0(),ro>0&&Yt&&Yt.push(t),t}function ke(t,e,n,i,s,r){return Z_(K(t,e,n,i,s,r,!0))}function qs(t,e,n,i,s){return Z_(je(t,e,n,i,s,!0))}function Qa(t){return t?t.__v_isVNode===!0:!1}function yr(t,e){return t.type===e.type&&t.key===e.key}const Kc="__vInternal",ev=({key:t})=>t??null,Na=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||Me(t)||Z(t)?{i:Ye,r:t,k:e,f:!!n}:t:null);function K(t,e=null,n=null,i=0,s=null,r=t===tt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ev(e),ref:e&&Na(e),scopeId:D_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ye};return a?(nd(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),ro>0&&!o&&Yt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Yt.push(c),c}const je=q0;function q0(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===e0)&&(t=yi),Qa(t)){const a=Vs(t,e,!0);return n&&nd(a,n),ro>0&&!r&&Yt&&(a.shapeFlag&6?Yt[Yt.indexOf(t)]=a:Yt.push(a)),a.patchFlag|=-2,a}if(G0(t)&&(t=t.__vccOpts),e){e=V0(e);let{class:a,style:c}=e;a&&!He(a)&&(e.class=Fc(a)),Ae(c)&&(I_(c)&&!$(c)&&(c=at({},c)),e.style=eo(c))}const o=He(t)?1:n0(t)?128:L0(t)?64:Ae(t)?4:Z(t)?2:0;return K(t,e,n,i,s,o,r,!0)}function V0(t){return t?I_(t)||Kc in t?at({},t):t:null}function Vs(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?F0(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ev(a),ref:e&&e.ref?n&&s?$(s)?s.concat(Na(e)):[s,Na(e)]:Na(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Vs(t.ssContent),ssFallback:t.ssFallback&&Vs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ji(t=" ",e=0){return je(Hc,null,t,e)}function Gt(t="",e=!1){return e?(ge(),qs(yi,null,t)):je(yi,null,t)}function hn(t){return t==null||typeof t=="boolean"?je(yi):$(t)?je(tt,null,t.slice()):typeof t=="object"?ii(t):je(Hc,null,String(t))}function ii(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Vs(t)}function nd(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),nd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Kc in e)?e._ctx=Ye:s===3&&Ye&&(Ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:Ye},n=32):(e=String(e),i&64?(n=16,e=[ji(e)]):n=8);t.children=e,t.shapeFlag|=n}function F0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Fc([e.class,i.class]));else if(s==="style")e.style=eo([e.style,i.style]);else if(Mc(s)){const r=e[s],o=i[s];o&&r!==o&&!($(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function un(t,e,n,i=null){tn(t,e,7,[n,i])}const U0=H_();let z0=0;function j0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||U0,r={uid:z0++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new c_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:G_(i,s),emitsOptions:O_(i,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:i.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Qw.bind(null,r),t.ce&&t.ce(r),r}let $e=null;const tv=()=>$e||Ye;let id,ds,gp="__VUE_INSTANCE_SETTERS__";(ds=Au()[gp])||(ds=Au()[gp]=[]),ds.push(t=>$e=t),id=t=>{ds.length>1?ds.forEach(e=>e(t)):ds[0](t)};const Fs=t=>{id(t),t.scope.on()},Bi=()=>{$e&&$e.scope.off(),id(null)};function nv(t){return t.vnode.shapeFlag&4}let oo=!1;function B0(t,e=!1){oo=e;const{props:n,children:i}=t.vnode,s=nv(t);A0(t,n,s,e),P0(t,i);const r=s?$0(t,e):void 0;return oo=!1,r}function $0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=jc(new Proxy(t.ctx,_0));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?H0(t):null;Fs(t),ir();const r=di(i,t,0,[t.props,s]);if(sr(),Bi(),n_(r)){if(r.then(Bi,Bi),e)return r.then(o=>{_p(t,o,e)}).catch(o=>{Bc(o,t,0)});t.asyncDep=r}else _p(t,r,e)}else iv(t,e)}function _p(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=C_(e)),iv(t,n)}let vp;function iv(t,e,n){const i=t.type;if(!t.render){if(!e&&vp&&!i.render){const s=i.template||ed(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=i,l=at(at({isCustomElement:r,delimiters:a},o),c);i.render=vp(s,l)}}t.render=i.render||en}{Fs(t),ir();try{v0(t)}finally{sr(),Bi()}}}function W0(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return St(t,"get","$attrs"),e[n]}}))}function H0(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return W0(t)},slots:t.slots,emit:t.emit,expose:e}}function Gc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(C_(jc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fr)return Fr[n](t)},has(e,n){return n in e||n in Fr}}))}function K0(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function G0(t){return Z(t)&&"__vccOpts"in t}const Ft=(t,e)=>Bw(t,e,oo);function sv(t,e,n){const i=arguments.length;return i===2?Ae(e)&&!$(e)?Qa(e)?je(t,null,[e]):je(t,e):je(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Qa(n)&&(n=[n]),je(t,e,n))}const Q0=Symbol.for("v-scx"),Y0=()=>$t(Q0),X0="3.3.8",J0="http://www.w3.org/2000/svg",Oi=typeof document<"u"?document:null,yp=Oi&&Oi.createElement("template"),Z0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?Oi.createElementNS(J0,t):Oi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Oi.createTextNode(t),createComment:t=>Oi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Oi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{yp.innerHTML=i?`<svg>${t}</svg>`:t;const a=yp.content;if(i){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},eb=Symbol("_vtc");function tb(t,e,n){const i=t[eb];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const nb=Symbol("_vod");function ib(t,e,n){const i=t.style,s=He(n);if(n&&!s){if(e&&!He(e))for(const r in e)n[r]==null&&Mu(i,r,"");for(const r in n)Mu(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),nb in t&&(i.display=r)}}const Ep=/\s*!important$/;function Mu(t,e,n){if($(n))n.forEach(i=>Mu(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=sb(t,e);Ep.test(n)?t.setProperty(nr(i),n.replace(Ep,""),"important"):t[i]=n}}const Tp=["Webkit","Moz","ms"],jl={};function sb(t,e){const n=jl[e];if(n)return n;let i=bn(e);if(i!=="filter"&&i in t)return jl[e]=i;i=Vc(i);for(let s=0;s<Tp.length;s++){const r=Tp[s]+i;if(r in t)return jl[e]=r}return e}const Ip="http://www.w3.org/1999/xlink";function rb(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ip,e.slice(6,e.length)):t.setAttributeNS(Ip,e,n);else{const r=dw(e);n==null||r&&!o_(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function ob(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=o_(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function sd(t,e,n,i){t.addEventListener(e,n,i)}function ab(t,e,n,i){t.removeEventListener(e,n,i)}const wp=Symbol("_vei");function cb(t,e,n,i,s=null){const r=t[wp]||(t[wp]={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=lb(e);if(i){const l=r[e]=db(i,s);sd(t,a,l,c)}else o&&(ab(t,a,o,c),r[e]=void 0)}}const bp=/(?:Once|Passive|Capture)$/;function lb(t){let e;if(bp.test(t)){e={};let i;for(;i=t.match(bp);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):nr(t.slice(2)),e]}let Bl=0;const ub=Promise.resolve(),hb=()=>Bl||(ub.then(()=>Bl=0),Bl=Date.now());function db(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;tn(fb(i,n.value),e,5,[i])};return n.value=t,n.attached=hb(),n}function fb(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Rp=/^on[a-z]/,pb=(t,e,n,i,s=!1,r,o,a,c)=>{e==="class"?tb(t,i,s):e==="style"?ib(t,n,i):Mc(e)?Uh(e)||cb(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mb(t,e,i,s))?ob(t,e,i,r,o,a,c):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),rb(t,e,i,s))};function mb(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Rp.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Rp.test(e)&&He(n)?!1:e in t}const Ya=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>Sa(e,n):e},Cs=Symbol("_assign"),gb={deep:!0,created(t,e,n){t[Cs]=Ya(n),sd(t,"change",()=>{const i=t._modelValue,s=ao(t),r=t.checked,o=t[Cs];if($(i)){const a=Bh(i,s),c=a!==-1;if(r&&!c)o(i.concat(s));else if(!r&&c){const l=[...i];l.splice(a,1),o(l)}}else if(tr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(rv(t,r))})},mounted:Ap,beforeUpdate(t,e,n){t[Cs]=Ya(n),Ap(t,e,n)}};function Ap(t,{value:e,oldValue:n},i){t._modelValue=e,$(e)?t.checked=Bh(e,i.props.value)>-1:tr(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=xo(e,rv(t,!0)))}const _b={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=tr(e);sd(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?r_(ao(o)):ao(o));t[Cs](t.multiple?s?new Set(r):r:r[0])}),t[Cs]=Ya(i)},mounted(t,{value:e}){Cp(t,e)},beforeUpdate(t,e,n){t[Cs]=Ya(n)},updated(t,{value:e}){Cp(t,e)}};function Cp(t,e){const n=t.multiple;if(!(n&&!$(e)&&!tr(e))){for(let i=0,s=t.options.length;i<s;i++){const r=t.options[i],o=ao(r);if(n)$(e)?r.selected=Bh(e,o)>-1:r.selected=e.has(o);else if(xo(ao(r),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ao(t){return"_value"in t?t._value:t.value}function rv(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const vb=at({patchProp:pb},Z0);let Sp;function yb(){return Sp||(Sp=N0(vb))}const Eb=(...t)=>{const e=yb().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Tb(i);if(!s)return;const r=e._component;!Z(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Tb(t){return He(t)?document.querySelector(t):t}var Ib=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let ov;const Qc=t=>ov=t,av=Symbol();function qu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var zr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(zr||(zr={}));function wb(){const t=Uc(!0),e=t.run(()=>hi({}));let n=[],i=[];const s=jc({install(r){Qc(s),s._a=r,r.provide(av,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!Ib?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const cv=()=>{};function Pp(t,e,n,i=cv){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&$h()&&l_(s),s}function fs(t,...e){t.slice().forEach(n=>{n(...e)})}const bb=t=>t();function Vu(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];qu(s)&&qu(i)&&t.hasOwnProperty(n)&&!Me(i)&&!ui(i)?t[n]=Vu(s,i):t[n]=i}return t}const Rb=Symbol();function Ab(t){return!qu(t)||!t.hasOwnProperty(Rb)}const{assign:ni}=Object;function Cb(t){return!!(Me(t)&&t.effect)}function Sb(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=Vw(n.state.value[t]);return ni(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=jc(Ft(()=>{Qc(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return c=lv(t,l,e,n,i,!0),c}function lv(t,e,n={},i,s,r){let o;const a=ni({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],f;const g=i.state.value[t];!r&&!g&&(i.state.value[t]={}),hi({});let v;function y(G){let ne;l=u=!1,typeof G=="function"?(G(i.state.value[t]),ne={type:zr.patchFunction,storeId:t,events:f}):(Vu(i.state.value[t],G),ne={type:zr.patchObject,payload:G,storeId:t,events:f});const Ie=v=Symbol();Jh().then(()=>{v===Ie&&(l=!0)}),u=!0,fs(h,ne,i.state.value[t])}const I=r?function(){const{state:ne}=n,Ie=ne?ne():{};this.$patch(ct=>{ni(ct,Ie)})}:cv;function P(){o.stop(),h=[],d=[],i._s.delete(t)}function k(G,ne){return function(){Qc(i);const Ie=Array.from(arguments),ct=[],Pt=[];function qt(pe){ct.push(pe)}function Ci(pe){Pt.push(pe)}fs(d,{args:Ie,name:G,store:H,after:qt,onError:Ci});let Vt;try{Vt=ne.apply(this&&this.$id===t?this:H,Ie)}catch(pe){throw fs(Pt,pe),pe}return Vt instanceof Promise?Vt.then(pe=>(fs(ct,pe),pe)).catch(pe=>(fs(Pt,pe),Promise.reject(pe))):(fs(ct,Vt),Vt)}}const R={_p:i,$id:t,$onAction:Pp.bind(null,d),$patch:y,$reset:I,$subscribe(G,ne={}){const Ie=Pp(h,G,ne.detached,()=>ct()),ct=o.run(()=>As(()=>i.state.value[t],Pt=>{(ne.flush==="sync"?u:l)&&G({storeId:t,type:zr.direct,events:f},Pt)},ni({},c,ne)));return Ie},$dispose:P},H=Oo(R);i._s.set(t,H);const he=(i._a&&i._a.runWithContext||bb)(()=>i._e.run(()=>(o=Uc()).run(e)));for(const G in he){const ne=he[G];if(Me(ne)&&!Cb(ne)||ui(ne))r||(g&&Ab(ne)&&(Me(ne)?ne.value=g[G]:Vu(ne,g[G])),i.state.value[t][G]=ne);else if(typeof ne=="function"){const Ie=k(G,ne);he[G]=Ie,a.actions[G]=ne}}return ni(H,he),ni(fe(H),he),Object.defineProperty(H,"$state",{get:()=>i.state.value[t],set:G=>{y(ne=>{ni(ne,G)})}}),i._p.forEach(G=>{ni(H,o.run(()=>G({store:H,app:i._a,pinia:i,options:a})))}),g&&r&&n.hydrate&&n.hydrate(H.$state,g),l=!0,u=!0,H}function uv(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,c){const l=R0();return a=a||(l?$t(av,null):null),a&&Qc(a),a=ov,a._s.has(i)||(r?lv(i,e,s,a):Sb(i,s,a)),a._s.get(i)}return o.$id=i,o}const kn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},Pb={};function kb(t,e){const n=fi("router-view");return ge(),qs(n)}const Nb=kn(Pb,[["render",kb]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(t,e){if(!t)throw rr(e)},rr=function(t){return new Error("Firebase Database ("+hv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xb=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Yc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),i.push(n[u],n[h],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||l==null||h==null)throw new Ob;const d=r<<2|a>>4;if(i.push(d),l!==64){const f=a<<4&240|l>>2;if(i.push(f),h!==64){const g=l<<6&192|h;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ob extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fv=function(t){const e=dv(t);return Yc.encodeByteArray(e,!0)},Xa=function(t){return fv(t).replace(/\./g,"")},Ja=function(t){try{return Yc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(t){return pv(void 0,t)}function pv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Lb(n)||(t[n]=pv(t[n],e[n]));return t}function Lb(t){return t!=="__proto__"}/**
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
 */function Mb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qb=()=>Mb().__FIREBASE_DEFAULTS__,Vb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Fb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ja(t[1]);return e&&JSON.parse(e)},rd=()=>{try{return qb()||Vb()||Fb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mv=t=>{var e,n;return(n=(e=rd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ub=t=>{const e=mv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},gv=()=>{var t;return(t=rd())===null||t===void 0?void 0:t.config},_v=t=>{var e;return(e=rd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function zb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Xa(JSON.stringify(n)),Xa(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function od(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function jb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bb(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yv(){return hv.NODE_ADMIN===!0}function Ev(){try{return typeof indexedDB=="object"}catch{return!1}}function $b(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="FirebaseError";class Nn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Wb,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,or.prototype.create)}}class or{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Hb(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Nn(s,a,i)}}function Hb(t,e){return t.replace(Kb,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Kb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t){return JSON.parse(t)}function it(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=lo(Ja(r[0])||""),n=lo(Ja(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Gb=function(t){const e=Tv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Qb=function(t){const e=Tv(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Us(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Fu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Za(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function ec(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(kp(r)&&kp(o)){if(!ec(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function kp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+l+c+u+i[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Xb(t,e){const n=new Jb(t,e);return n.subscribe.bind(n)}class Jb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Zb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=$l),s.error===void 0&&(s.error=$l),s.complete===void 0&&(s.complete=$l);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $l(){}function eR(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,D(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Xc=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Lt(t){return t&&t._delegate?t._delegate:t}class sn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ki="[DEFAULT]";/**
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
 */class nR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new co;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sR(e))try{this.getOrInitializeService({instanceIdentifier:ki})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ki){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ki){return this.instances.has(e)}getOptions(e=ki){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:iR(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ki){return this.component?this.component.multipleInstances?e:ki:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iR(t){return t===ki?void 0:t}function sR(t){return t.instantiationMode==="EAGER"}/**
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
 */class rR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const oR={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},aR=re.INFO,cR={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},lR=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=cR[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Do{constructor(e){this.name=e,this._logLevel=aR,this._logHandler=lR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const uR=(t,e)=>e.some(n=>t instanceof n);let Np,xp;function hR(){return Np||(Np=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dR(){return xp||(xp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Iv=new WeakMap,Uu=new WeakMap,wv=new WeakMap,Wl=new WeakMap,ad=new WeakMap;function fR(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(pi(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Iv.set(n,t)}).catch(()=>{}),ad.set(e,t),e}function pR(t){if(Uu.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Uu.set(t,e)}let zu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Uu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mR(t){zu=t(zu)}function gR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Hl(this),e,...n);return wv.set(i,e.sort?e.sort():[e]),pi(i)}:dR().includes(t)?function(...e){return t.apply(Hl(this),e),pi(Iv.get(this))}:function(...e){return pi(t.apply(Hl(this),e))}}function _R(t){return typeof t=="function"?gR(t):(t instanceof IDBTransaction&&pR(t),uR(t,hR())?new Proxy(t,zu):t)}function pi(t){if(t instanceof IDBRequest)return fR(t);if(Wl.has(t))return Wl.get(t);const e=_R(t);return e!==t&&(Wl.set(t,e),ad.set(e,t)),e}const Hl=t=>ad.get(t);function vR(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=pi(o);return i&&o.addEventListener("upgradeneeded",c=>{i(pi(o.result),c.oldVersion,c.newVersion,pi(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const yR=["get","getKey","getAll","getAllKeys","count"],ER=["put","add","delete","clear"],Kl=new Map;function Op(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kl.get(e))return Kl.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=ER.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||yR.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Kl.set(e,r),r}mR(t=>({...t,get:(e,n,i)=>Op(e,n)||t.get(e,n,i),has:(e,n)=>!!Op(e,n)||t.has(e,n)}));/**
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
 */class TR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(IR(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function IR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ju="@firebase/app",Dp="0.9.23";/**
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
 */const Gi=new Do("@firebase/app"),wR="@firebase/app-compat",bR="@firebase/analytics-compat",RR="@firebase/analytics",AR="@firebase/app-check-compat",CR="@firebase/app-check",SR="@firebase/auth",PR="@firebase/auth-compat",kR="@firebase/database",NR="@firebase/database-compat",xR="@firebase/functions",OR="@firebase/functions-compat",DR="@firebase/installations",LR="@firebase/installations-compat",MR="@firebase/messaging",qR="@firebase/messaging-compat",VR="@firebase/performance",FR="@firebase/performance-compat",UR="@firebase/remote-config",zR="@firebase/remote-config-compat",jR="@firebase/storage",BR="@firebase/storage-compat",$R="@firebase/firestore",WR="@firebase/firestore-compat",HR="firebase",KR="10.6.0";/**
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
 */const Bu="[DEFAULT]",GR={[ju]:"fire-core",[wR]:"fire-core-compat",[RR]:"fire-analytics",[bR]:"fire-analytics-compat",[CR]:"fire-app-check",[AR]:"fire-app-check-compat",[SR]:"fire-auth",[PR]:"fire-auth-compat",[kR]:"fire-rtdb",[NR]:"fire-rtdb-compat",[xR]:"fire-fn",[OR]:"fire-fn-compat",[DR]:"fire-iid",[LR]:"fire-iid-compat",[MR]:"fire-fcm",[qR]:"fire-fcm-compat",[VR]:"fire-perf",[FR]:"fire-perf-compat",[UR]:"fire-rc",[zR]:"fire-rc-compat",[jR]:"fire-gcs",[BR]:"fire-gcs-compat",[$R]:"fire-fst",[WR]:"fire-fst-compat","fire-js":"fire-js",[HR]:"fire-js-all"};/**
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
 */const tc=new Map,$u=new Map;function QR(t,e){try{t.container.addComponent(e)}catch(n){Gi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rn(t){const e=t.name;if($u.has(e))return Gi.debug(`There were multiple attempts to register component ${e}.`),!1;$u.set(e,t);for(const n of tc.values())QR(n,t);return!0}function cd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const YR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mi=new or("app","Firebase",YR);/**
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
 */class XR{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mi.create("app-deleted",{appName:this._name})}}/**
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
 */const bi=KR;function bv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Bu,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw mi.create("bad-app-name",{appName:String(s)});if(n||(n=gv()),!n)throw mi.create("no-options");const r=tc.get(s);if(r){if(ec(n,r.options)&&ec(i,r.config))return r;throw mi.create("duplicate-app",{appName:s})}const o=new rR(s);for(const c of $u.values())o.addComponent(c);const a=new XR(n,i,o);return tc.set(s,a),a}function ld(t=Bu){const e=tc.get(t);if(!e&&t===Bu&&gv())return bv();if(!e)throw mi.create("no-app",{appName:t});return e}function Ot(t,e,n){var i;let s=(i=GR[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gi.warn(a.join(" "));return}Rn(new sn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const JR="firebase-heartbeat-database",ZR=1,uo="firebase-heartbeat-store";let Gl=null;function Rv(){return Gl||(Gl=vR(JR,ZR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(uo)}}}).catch(t=>{throw mi.create("idb-open",{originalErrorMessage:t.message})})),Gl}async function eA(t){try{return await(await Rv()).transaction(uo).objectStore(uo).get(Av(t))}catch(e){if(e instanceof Nn)Gi.warn(e.message);else{const n=mi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gi.warn(n.message)}}}async function Lp(t,e){try{const i=(await Rv()).transaction(uo,"readwrite");await i.objectStore(uo).put(e,Av(t)),await i.done}catch(n){if(n instanceof Nn)Gi.warn(n.message);else{const i=mi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gi.warn(i.message)}}}function Av(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tA=1024,nA=30*24*60*60*1e3;class iA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rA(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Mp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=nA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Mp(),{heartbeatsToSend:i,unsentEntries:s}=sA(this._heartbeatsCache.heartbeats),r=Xa(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Mp(){return new Date().toISOString().substring(0,10)}function sA(t,e=tA){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),qp(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),qp(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class rA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ev()?$b().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await eA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qp(t){return Xa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function oA(t){Rn(new sn("platform-logger",e=>new TR(e),"PRIVATE")),Rn(new sn("heartbeat",e=>new iA(e),"PRIVATE")),Ot(ju,Dp,t),Ot(ju,Dp,"esm2017"),Ot("fire-js","")}oA("");function ud(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Cv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aA=Cv,Sv=new or("auth","Firebase",Cv());/**
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
 */const nc=new Do("@firebase/auth");function cA(t,...e){nc.logLevel<=re.WARN&&nc.warn(`Auth (${bi}): ${t}`,...e)}function xa(t,...e){nc.logLevel<=re.ERROR&&nc.error(`Auth (${bi}): ${t}`,...e)}/**
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
 */function An(t,...e){throw hd(t,...e)}function yn(t,...e){return hd(t,...e)}function Pv(t,e,n){const i=Object.assign(Object.assign({},aA()),{[e]:n});return new or("auth","Firebase",i).create(e,{appName:t.name})}function lA(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&An(t,"argument-error"),Pv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hd(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Sv.create(t,...e)}function J(t,e,...n){if(!t)throw hd(e,...n)}function Vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xa(e),new Error(e)}function Hn(t,e){t||Vn(e)}/**
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
 */function Wu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function uA(){return Vp()==="http:"||Vp()==="https:"}function Vp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function hA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uA()||jb()||"connection"in navigator)?navigator.onLine:!0}function dA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Lo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=od()||vv()}get(){return hA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function dd(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class kv{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const pA=new Lo(3e4,6e4);function fd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function cr(t,e,n,i,s={}){return Nv(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=ar(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),kv.fetch()(xv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Nv(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},fA),e);try{const s=new gA(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw da(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw da(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw da(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw da(t,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Pv(t,u,l);An(t,u)}}catch(s){if(s instanceof Nn)throw s;An(t,"network-request-failed",{message:String(s)})}}async function mA(t,e,n,i,s={}){const r=await cr(t,e,n,i,s);return"mfaPendingCredential"in r&&An(t,"multi-factor-auth-required",{_serverResponse:r}),r}function xv(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?dd(t.config,s):`${t.config.apiScheme}://${s}`}class gA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(yn(this.auth,"network-request-failed")),pA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function da(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=yn(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function _A(t,e){return cr(t,"POST","/v1/accounts:delete",e)}async function vA(t,e){return cr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function jr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yA(t,e=!1){const n=Lt(t),i=await n.getIdToken(e),s=pd(i);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:jr(Ql(s.auth_time)),issuedAtTime:jr(Ql(s.iat)),expirationTime:jr(Ql(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ql(t){return Number(t)*1e3}function pd(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return xa("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ja(n);return s?JSON.parse(s):(xa("Failed to decode base64 JWT payload"),null)}catch(s){return xa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function EA(t){const e=pd(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ho(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Nn&&TA(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function TA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class IA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ov{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jr(this.lastLoginAt),this.creationTime=jr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ic(t){var e;const n=t.auth,i=await t.getIdToken(),s=await ho(t,vA(n,{idToken:i}));J(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?RA(r.providerUserInfo):[],a=bA(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ov(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function wA(t){const e=Lt(t);await ic(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bA(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function RA(t){return t.map(e=>{var{providerId:n}=e,i=ud(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function AA(t,e){const n=await Nv(t,{},async()=>{const i=ar({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=xv(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",kv.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function CA(t,e){return cr(t,"POST","/v2/accounts:revokeToken",fd(t,e))}/**
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
 */class fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):EA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await AA(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new fo;return i&&(J(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(J(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fo,this.toJSON())}_performRefresh(){return Vn("not implemented")}}/**
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
 */function ei(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $i{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=ud(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ov(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ho(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yA(this,e)}reload(){return wA(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $i(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ic(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ho(this,_A(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,c,l,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,I=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:R,isAnonymous:H,providerData:ie,stsTokenManager:he}=n;J(k&&he,e,"internal-error");const G=fo.fromJSON(this.name,he);J(typeof k=="string",e,"internal-error"),ei(h,e.name),ei(d,e.name),J(typeof R=="boolean",e,"internal-error"),J(typeof H=="boolean",e,"internal-error"),ei(f,e.name),ei(g,e.name),ei(v,e.name),ei(y,e.name),ei(I,e.name),ei(P,e.name);const ne=new $i({uid:k,auth:e,email:d,emailVerified:R,displayName:h,isAnonymous:H,photoURL:g,phoneNumber:f,tenantId:v,stsTokenManager:G,createdAt:I,lastLoginAt:P});return ie&&Array.isArray(ie)&&(ne.providerData=ie.map(Ie=>Object.assign({},Ie))),y&&(ne._redirectEventId=y),ne}static async _fromIdTokenResponse(e,n,i=!1){const s=new fo;s.updateFromServerResponse(n);const r=new $i({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ic(r),r}}/**
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
 */const Fp=new Map;function Fn(t){Hn(t instanceof Function,"Expected a class definition");let e=Fp.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fp.set(t,e),e)}/**
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
 */class Dv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dv.type="NONE";const Up=Dv;/**
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
 */function Oa(t,e,n){return`firebase:${t}:${e}:${n}`}class Ss{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Oa(this.userKey,s.apiKey,r),this.fullPersistenceKey=Oa("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$i._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Ss(Fn(Up),e,i);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||Fn(Up);const o=Oa(i,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=$i._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Ss(r,e,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Ss(r,e,i))}}/**
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
 */function zp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fv(e))return"Blackberry";if(Uv(e))return"Webos";if(md(e))return"Safari";if((e.includes("chrome/")||Mv(e))&&!e.includes("edge/"))return"Chrome";if(Vv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Lv(t=yt()){return/firefox\//i.test(t)}function md(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mv(t=yt()){return/crios\//i.test(t)}function qv(t=yt()){return/iemobile/i.test(t)}function Vv(t=yt()){return/android/i.test(t)}function Fv(t=yt()){return/blackberry/i.test(t)}function Uv(t=yt()){return/webos/i.test(t)}function Jc(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function SA(t=yt()){var e;return Jc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PA(){return Bb()&&document.documentMode===10}function zv(t=yt()){return Jc(t)||Vv(t)||Uv(t)||Fv(t)||/windows phone/i.test(t)||qv(t)}function kA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function jv(t,e=[]){let n;switch(t){case"Browser":n=zp(yt());break;case"Worker":n=`${zp(yt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bi}/${i}`}/**
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
 */class NA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function xA(t,e={}){return cr(t,"GET","/v2/passwordPolicy",fd(t,e))}/**
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
 */const OA=6;class DA{constructor(e){var n,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:OA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class LA{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jp(this),this.idTokenSubscription=new jp(this),this.beforeStateQueue=new NA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Ss.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ic(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Lt(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xA(this),n=new DA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new or("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await CA(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Ss.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,i,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&cA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zc(t){return Lt(t)}class jp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xb(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function MA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function qA(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=yn("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",MA().appendChild(i)})}function VA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function FA(t,e){const n=cd(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(ec(r,e??{}))return s;An(s,"already-initialized")}return n.initialize({options:e})}function UA(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function zA(t,e,n){const i=Zc(t);J(i._canInitEmulator,i,"emulator-config-failed"),J(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=Bv(e),{host:o,port:a}=jA(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||BA()}function Bv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jA(t){const e=Bv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Bp(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Bp(o)}}}function Bp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function BA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class $v{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vn("not implemented")}_getIdTokenResponse(e){return Vn("not implemented")}_linkToIdToken(e,n){return Vn("not implemented")}_getReauthenticationResolver(e){return Vn("not implemented")}}/**
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
 */async function Ps(t,e){return mA(t,"POST","/v1/accounts:signInWithIdp",fd(t,e))}/**
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
 */const $A="http://localhost";class Qi extends $v{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=ud(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Qi(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ps(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Ps(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ps(e,n)}buildRequest(){const e={requestUri:$A,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ar(n)}return e}}/**
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
 */class gd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mo extends gd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ri extends Mo{constructor(){super("facebook.com")}static credential(e){return Qi._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.FACEBOOK_SIGN_IN_METHOD="facebook.com";ri.PROVIDER_ID="facebook.com";/**
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
 */class qn extends Mo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qi._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return qn.credential(n,i)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
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
 */class oi extends Mo{constructor(){super("github.com")}static credential(e){return Qi._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch{return null}}}oi.GITHUB_SIGN_IN_METHOD="github.com";oi.PROVIDER_ID="github.com";/**
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
 */class ai extends Mo{constructor(){super("twitter.com")}static credential(e,n){return Qi._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ai.credential(n,i)}catch{return null}}}ai.TWITTER_SIGN_IN_METHOD="twitter.com";ai.PROVIDER_ID="twitter.com";/**
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
 */class zs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await $i._fromIdTokenResponse(e,i,s),o=$p(i);return new zs({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=$p(i);return new zs({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function $p(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class sc extends Nn{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,sc.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new sc(e,n,i,s)}}function Wv(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?sc._fromErrorAndOperation(t,r,e,i):r})}async function WA(t,e,n=!1){const i=await ho(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zs._forOperation(t,"link",i)}/**
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
 */async function HA(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await ho(t,Wv(i,s,e,t),n);J(r.idToken,i,"internal-error");const o=pd(r.idToken);J(o,i,"internal-error");const{sub:a}=o;return J(t.uid===a,i,"user-mismatch"),zs._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&An(i,"user-mismatch"),r}}/**
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
 */async function KA(t,e,n=!1){const i="signIn",s=await Wv(t,i,e),r=await zs._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function GA(t,e,n,i){return Lt(t).onIdTokenChanged(e,n,i)}function QA(t,e,n){return Lt(t).beforeAuthStateChanged(e,n)}const rc="__sak";/**
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
 */class Hv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rc,"1"),this.storage.removeItem(rc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function YA(){const t=yt();return md(t)||Jc(t)}const XA=1e3,JA=10;class Kv extends Hv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=YA()&&kA(),this.fallbackToPolling=zv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);PA()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,JA):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},XA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kv.type="LOCAL";const ZA=Kv;/**
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
 */class Gv extends Hv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gv.type="SESSION";const Qv=Gv;/**
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
 */function eC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class el{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new el(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await eC(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}el.receivers=[];/**
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
 */function _d(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=_d("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function En(){return window}function nC(t){En().location.href=t}/**
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
 */function Yv(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function iC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rC(){return Yv()?self:null}/**
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
 */const Xv="firebaseLocalStorageDb",oC=1,oc="firebaseLocalStorage",Jv="fbase_key";class qo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tl(t,e){return t.transaction([oc],e?"readwrite":"readonly").objectStore(oc)}function aC(){const t=indexedDB.deleteDatabase(Xv);return new qo(t).toPromise()}function Hu(){const t=indexedDB.open(Xv,oC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(oc,{keyPath:Jv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(oc)?e(i):(i.close(),await aC(),e(await Hu()))})})}async function Wp(t,e,n){const i=tl(t,!0).put({[Jv]:e,value:n});return new qo(i).toPromise()}async function cC(t,e){const n=tl(t,!1).get(e),i=await new qo(n).toPromise();return i===void 0?null:i.value}function Hp(t,e){const n=tl(t,!0).delete(e);return new qo(n).toPromise()}const lC=800,uC=3;class Zv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>uC)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=el._getInstance(rC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await iC(),!this.activeServiceWorker)return;this.sender=new tC(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hu();return await Wp(e,rc,"1"),await Hp(e,rc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Wp(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>cC(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=tl(s,!1).getAll();return new qo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zv.type="LOCAL";const hC=Zv;new Lo(3e4,6e4);/**
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
 */function ey(t,e){return e?Fn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class vd extends $v{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dC(t){return KA(t.auth,new vd(t),t.bypassAuthState)}function fC(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),HA(n,new vd(t),t.bypassAuthState)}async function pC(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),WA(n,new vd(t),t.bypassAuthState)}/**
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
 */class ty{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dC;case"linkViaPopup":case"linkViaRedirect":return pC;case"reauthViaPopup":case"reauthViaRedirect":return fC;default:An(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mC=new Lo(2e3,1e4);async function gC(t,e,n){const i=Zc(t);lA(t,e,gd);const s=ey(i,n);return new Li(i,"signInViaPopup",e,s).executeNotNull()}class Li extends ty{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Li.currentPopupAction&&Li.currentPopupAction.cancel(),Li.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=_d();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Li.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mC.get())};e()}}Li.currentPopupAction=null;/**
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
 */const _C="pendingRedirect",Da=new Map;class vC extends ty{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Da.get(this.auth._key());if(!e){try{const i=await yC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Da.set(this.auth._key(),e)}return this.bypassAuthState||Da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yC(t,e){const n=IC(e),i=TC(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function EC(t,e){Da.set(t._key(),e)}function TC(t){return Fn(t._redirectPersistence)}function IC(t){return Oa(_C,t.config.apiKey,t.name)}async function wC(t,e,n=!1){const i=Zc(t),s=ey(i,e),o=await new vC(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const bC=10*60*1e3;class RC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!ny(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kp(e))}saveEventToCache(e){this.cachedEventUids.add(Kp(e)),this.lastProcessedEventTime=Date.now()}}function Kp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ny({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function AC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ny(t);default:return!1}}/**
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
 */async function CC(t,e={}){return cr(t,"GET","/v1/projects",e)}/**
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
 */const SC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PC=/^https?/;async function kC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CC(t);for(const n of e)try{if(NC(n))return}catch{}An(t,"unauthorized-domain")}function NC(t){const e=Wu(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!PC.test(n))return!1;if(SC.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const xC=new Lo(3e4,6e4);function Gp(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OC(t){return new Promise((e,n)=>{var i,s,r;function o(){Gp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gp(),n(yn(t,"network-request-failed"))},timeout:xC.get()})}if(!((s=(i=En().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=En().gapi)===null||r===void 0)&&r.load)o();else{const a=VA("iframefcb");return En()[a]=()=>{gapi.load?o():n(yn(t,"network-request-failed"))},qA(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw La=null,e})}let La=null;function DC(t){return La=La||OC(t),La}/**
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
 */const LC=new Lo(5e3,15e3),MC="__/auth/iframe",qC="emulator/auth/iframe",VC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UC(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?dd(e,qC):`https://${t.config.authDomain}/${MC}`,i={apiKey:e.apiKey,appName:t.name,v:bi},s=FC.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${ar(i).slice(1)}`}async function zC(t){const e=await DC(t),n=En().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:UC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VC,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),a=En().setTimeout(()=>{r(o)},LC.get());function c(){En().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const jC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BC=500,$C=600,WC="_blank",HC="http://localhost";class Qp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KC(t,e,n,i=BC,s=$C){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},jC),{width:i.toString(),height:s.toString(),top:r,left:o}),l=yt().toLowerCase();n&&(a=Mv(l)?WC:n),Lv(l)&&(e=e||HC,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(SA(l)&&a!=="_self")return GC(e||"",a),new Qp(null);const h=window.open(e||"",a,u);J(h,t,"popup-blocked");try{h.focus()}catch{}return new Qp(h)}function GC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const QC="__/auth/handler",YC="emulator/auth/handler",XC=encodeURIComponent("fac");async function Yp(t,e,n,i,s,r){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:bi,eventId:s};if(e instanceof gd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Fu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Mo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${XC}=${encodeURIComponent(c)}`:"";return`${JC(t)}?${ar(a).slice(1)}${l}`}function JC({config:t}){return t.emulator?dd(t,YC):`https://${t.authDomain}/${QC}`}/**
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
 */const Yl="webStorageSupport";class ZC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qv,this._completeRedirectFn=wC,this._overrideRedirectResult=EC}async _openPopup(e,n,i,s){var r;Hn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Yp(e,n,i,Wu(),s);return KC(e,o,_d())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Yp(e,n,i,Wu(),s);return nC(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Hn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await zC(e),i=new RC(e);return n.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yl,{type:Yl},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Yl];o!==void 0&&n(!!o),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zv()||md()||Jc()}}const eS=ZC;var Xp="@firebase/auth",Jp="1.4.0";/**
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
 */class tS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function iS(t){Rn(new sn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jv(t)},l=new LA(i,s,r,c);return UA(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Rn(new sn("auth-internal",e=>{const n=Zc(e.getProvider("auth").getImmediate());return(i=>new tS(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Xp,Jp,nS(t)),Ot(Xp,Jp,"esm2017")}/**
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
 */const sS=5*60,rS=_v("authIdTokenMaxAge")||sS;let Zp=null;const oS=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>rS)return;const s=n==null?void 0:n.token;Zp!==s&&(Zp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function iy(t=ld()){const e=cd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=FA(t,{popupRedirectResolver:eS,persistence:[hC,ZA,Qv]}),i=_v("authTokenSyncURL");if(i){const r=oS(i);QA(n,r,()=>r(n.currentUser)),GA(n,o=>r(o))}const s=mv("auth");return s&&zA(n,`http://${s}`),n}iS("Browser");/**
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
 */const aS=new Map,cS={activated:!1,tokenObservers:[]};function rn(t){return aS.get(t)||Object.assign({},cS)}const em={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class lS{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new co,await uS(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new co,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function uS(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const hS={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},ac=new or("appCheck","AppCheck",hS);function sy(t){if(!rn(t).activated)throw ac.create("use-before-activation",{appName:t.name})}/**
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
 */const dS="firebase-app-check-database",fS=1,Ku="firebase-app-check-store";let fa=null;function pS(){return fa||(fa=new Promise((t,e)=>{try{const n=indexedDB.open(dS,fS);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(ac.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(Ku,{keyPath:"compositeKey"})}}}catch(n){e(ac.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),fa)}function mS(t,e){return gS(_S(t),e)}async function gS(t,e){const i=(await pS()).transaction(Ku,"readwrite"),r=i.objectStore(Ku).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=c=>{o()},i.onerror=c=>{var l;a(ac.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function _S(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Gu=new Do("@firebase/app-check");function tm(t,e){return Ev()?mS(t,e).catch(n=>{Gu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const vS={error:"UNKNOWN_ERROR"};function yS(t){return Yc.encodeString(JSON.stringify(t),!1)}async function Qu(t,e=!1){const n=t.app;sy(n);const i=rn(n);let s=i.token,r;if(s&&!Nr(s)&&(i.token=void 0,s=void 0),!s){const c=await i.cachedTokenPromise;c&&(Nr(c)?s=c:await tm(n,void 0))}if(!e&&s&&Nr(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await rn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Gu.warn(c.message):Gu.error(c),r=c}let a;return s?r?Nr(s)?a={token:s.token,internalError:r}:a=im(r):(a={token:s.token},i.token=s,await tm(n,s)):a=im(r),o&&wS(n,a),a}async function ES(t){const e=t.app;sy(e);const{provider:n}=rn(e);{const{token:i}=await n.getToken();return{token:i}}}function TS(t,e,n,i){const{app:s}=t,r=rn(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Nr(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),nm(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>nm(t))}function ry(t,e){const n=rn(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function nm(t){const{app:e}=t,n=rn(e);let i=n.tokenRefresher;i||(i=IS(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function IS(t){const{app:e}=t;return new lS(async()=>{const n=rn(e);let i;if(n.token?i=await Qu(t,!0):i=await Qu(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=rn(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},em.RETRIAL_MIN_WAIT,em.RETRIAL_MAX_WAIT)}function wS(t,e){const n=rn(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Nr(t){return t.expireTimeMillis-Date.now()>0}function im(t){return{token:yS(vS),error:t}}/**
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
 */class bS{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=rn(this.app);for(const n of e)ry(this.app,n.next);return Promise.resolve()}}function RS(t,e){return new bS(t,e)}function AS(t){return{getToken:e=>Qu(t,e),getLimitedUseToken:()=>ES(t),addTokenListener:e=>TS(t,"INTERNAL",e),removeTokenListener:e=>ry(t.app,e)}}const CS="@firebase/app-check",SS="0.8.0",PS="app-check",sm="app-check-internal";function kS(){Rn(new sn(PS,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return RS(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(sm).initialize()})),Rn(new sn(sm,t=>{const e=t.getProvider("app-check").getImmediate();return AS(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ot(CS,SS)}kS();var NS="firebase",xS="10.6.0";/**
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
 */Ot(NS,xS,"app");const oy=Symbol("firebaseApp");function yd(t){return tv()&&$t(oy,null)||ld(t)}const pn=()=>{};function Ed(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function OS(t,e,n){const i=(""+e).split("."),s=i.pop(),r=i.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(s),1,n):r[s]=n}function is(t){return!!t&&typeof t=="object"}const DS=Object.prototype;function LS(t){return is(t)&&Object.getPrototypeOf(t)===DS}function Td(t){return is(t)&&t.type==="document"}function MS(t){return is(t)&&t.type==="collection"}function qS(t){return Td(t)||MS(t)}function VS(t){return is(t)&&t.type==="query"}function FS(t){return is(t)&&"ref"in t}function US(t){return is(t)&&typeof t.bucket=="string"}function zS(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const jS=Symbol.for("v-scx");function BS(){return!!$t(jS,0)}const pa=new WeakMap;function $S(t,e){if(!pa.has(t)){const n=Uc(!0);pa.set(t,n);const{unmount:i}=e;e.unmount=()=>{i.call(e),n.stop(),pa.delete(t)}}return pa.get(t)}const rm="@firebase/database",om="1.0.1";/**
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
 */let ay="";function WS(t){ay=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),it(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:lo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Xn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new HS(e)}}catch{}return new KS},Mi=cy("localStorage"),Yu=cy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new Do("@firebase/database"),GS=function(){let t=1;return function(){return t++}}(),ly=function(t){const e=tR(t),n=new Yb;n.update(e);const i=n.digest();return Yc.encodeByteArray(i)},Vo=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Vo.apply(null,i):typeof i=="object"?e+=it(i):e+=i,e+=" "}return e};let Wi=null,am=!0;const QS=function(t,e){D(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ks.logLevel=re.VERBOSE,Wi=ks.log.bind(ks),e&&Yu.set("logging_enabled",!0)):typeof t=="function"?Wi=t:(Wi=null,Yu.remove("logging_enabled"))},dt=function(...t){if(am===!0&&(am=!1,Wi===null&&Yu.get("logging_enabled")===!0&&QS(!0)),Wi){const e=Vo.apply(null,t);Wi(e)}},Fo=function(t){return function(...e){dt(t,...e)}},Xu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Vo(...t);ks.error(e)},Yi=function(...t){const e=`FIREBASE FATAL ERROR: ${Vo(...t)}`;throw ks.error(e),new Error(e)},Dt=function(...t){const e="FIREBASE WARNING: "+Vo(...t);ks.warn(e)},YS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},uy=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},XS=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},js="[MIN_NAME]",Xi="[MAX_NAME]",lr=function(t,e){if(t===e)return 0;if(t===js||e===Xi)return-1;if(e===js||t===Xi)return 1;{const n=cm(t),i=cm(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},JS=function(t,e){return t===e?0:t<e?-1:1},Er=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+it(e))},Id=function(t){if(typeof t!="object"||t===null)return it(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=it(e[i]),n+=":",n+=Id(t[e[i]]);return n+="}",n},hy=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Wt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const dy=function(t){D(!uy(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,c;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},ZS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},tP=new RegExp("^-?(0*)\\d{1,10}$"),nP=-2147483648,iP=2147483647,cm=function(t){if(tP.test(t)){const e=Number(t);if(e>=nP&&e<=iP)return e}return null},Uo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},sP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Br=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class rP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Dt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(dt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Dt(e)}}class Ju{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ju.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="5",fy="v",py="s",my="r",gy="f",_y=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,vy="ls",yy="p",Zu="ac",Ey="websocket",Ty="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,n,i,s,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Mi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Mi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function cP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Iy(t,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let i;if(e===Ey)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ty)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);cP(t)&&(n.ns=t.namespace);const s=[];return Wt(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(){this.counters_={}}incrementCounter(e,n=1){Xn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Db(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl={},Jl={};function bd(t){const e=t.toString();return Xl[e]||(Xl[e]=new lP),Xl[e]}function uP(t,e){const n=t.toString();return Jl[n]||(Jl[n]=e()),Jl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Uo(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="start",dP="close",fP="pLPCommand",pP="pRTLPCB",wy="id",by="pw",Ry="ser",mP="cb",gP="seg",_P="ts",vP="d",yP="dframe",Ay=1870,Cy=30,EP=Ay-Cy,TP=25e3,IP=3e4;class Es{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fo(e),this.stats_=bd(n),this.urlFn=c=>(this.appCheckToken&&(c[Zu]=this.appCheckToken),Iy(n,Ty,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new hP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(IP)),XS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Rd((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===lm)this.id=a,this.password=c;else if(o===dP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[lm]="t",i[Ry]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[mP]=this.scriptTagHolder.uniqueCallbackIdentifier),i[fy]=wd,this.transportSessionId&&(i[py]=this.transportSessionId),this.lastSessionId&&(i[vy]=this.lastSessionId),this.applicationId&&(i[yy]=this.applicationId),this.appCheckToken&&(i[Zu]=this.appCheckToken),typeof location<"u"&&location.hostname&&_y.test(location.hostname)&&(i[my]=gy);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Es.forceAllow_=!0}static forceDisallow(){Es.forceDisallow_=!0}static isAvailable(){return Es.forceAllow_?!0:!Es.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ZS()&&!eP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=fv(n),s=hy(i,EP);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[yP]="t",i[wy]=e,i[by]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=it(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Rd{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=GS(),window[fP+this.uniqueCallbackIdentifier]=e,window[pP+this.uniqueCallbackIdentifier]=n,this.myIFrame=Rd.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){dt("frame writing exception"),a.stack&&dt(a.stack),dt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||dt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[wy]=this.myID,e[by]=this.myPW,e[Ry]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Cy+i.length<=Ay;){const o=this.pendingSegs.shift();i=i+"&"+gP+s+"="+o.seg+"&"+_P+s+"="+o.ts+"&"+vP+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(TP)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{dt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP=16384,bP=45e3;let cc=null;typeof MozWebSocket<"u"?cc=MozWebSocket:typeof WebSocket<"u"&&(cc=WebSocket);class Qt{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fo(this.connId),this.stats_=bd(n),this.connURL=Qt.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[fy]=wd,typeof location<"u"&&location.hostname&&_y.test(location.hostname)&&(o[my]=gy),n&&(o[py]=n),i&&(o[vy]=i),s&&(o[Zu]=s),r&&(o[yy]=r),Iy(e,Ey,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Mi.set("previous_websocket_failure",!0);try{let i;yv(),this.mySock=new cc(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&cc!==null&&!Qt.forceDisallow_}static previouslyFailed(){return Mi.isInMemoryStorage||Mi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Mi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=lo(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=hy(n,wP);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qt.responsesRequiredToBeHealthy=2;Qt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Es,Qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Qt&&Qt.isAvailable();let i=n&&!Qt.previouslyFailed();if(e.webSocketOnly&&(n||Dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Qt];else{const s=this.transports_=[];for(const r of po.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);po.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}po.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=6e4,AP=5e3,CP=10*1024,SP=100*1024,Zl="t",um="d",PP="s",hm="r",kP="e",dm="o",fm="a",pm="n",mm="p",NP="h";class xP{constructor(e,n,i,s,r,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fo("c:"+this.id+":"),this.transportManager_=new po(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Br(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>SP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>CP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zl in e){const n=e[Zl];n===fm?this.upgradeIfSecondaryHealthy_():n===hm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===dm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Er("t",e),i=Er("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:mm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:fm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:pm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Er("t",e),i=Er("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Er(Zl,e);if(um in e){const i=e[um];if(n===NP){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===pm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===PP?this.onConnectionShutdown_(i):n===hm?this.onReset_(i):n===kP?Xu("Server Error: "+i):n===dm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),wd!==i&&Dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Br(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(RP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Br(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(AP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:mm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Mi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc extends Py{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!od()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new lc}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm=32,_m=768;class De{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function be(){return new De("")}function le(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ei(t){return t.pieces_.length-t.pieceNum_}function Ne(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new De(t.pieces_,e)}function ky(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function OP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ny(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function xy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new De(e,0)}function Qe(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof De)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new De(n,0)}function ae(t){return t.pieceNum_>=t.pieces_.length}function Bt(t,e){const n=le(t),i=le(e);if(n===null)return e;if(n===i)return Bt(Ne(t),Ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Oy(t,e){if(Ei(t)!==Ei(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Xt(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Ei(t)>Ei(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class DP{constructor(e,n){this.errorPrefix_=n,this.parts_=Ny(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Xc(this.parts_[i]);Dy(this)}}function LP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Xc(e),Dy(t)}function MP(t){const e=t.parts_.pop();t.byteLength_-=Xc(e),t.parts_.length>0&&(t.byteLength_-=1)}function Dy(t){if(t.byteLength_>_m)throw new Error(t.errorPrefix_+"has a key path longer than "+_m+" bytes ("+t.byteLength_+").");if(t.parts_.length>gm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+gm+") or object contains a cycle "+Ni(t))}function Ni(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad extends Py{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Ad}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=1e3,qP=60*5*1e3,vm=30*1e3,VP=1.3,FP=3e4,UP="server_kill",ym=3;class Bn extends Sy{constructor(e,n,i,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Bn.nextPersistentConnectionId_++,this.log_=Fo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Tr,this.maxReconnectDelay_=qP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!yv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ad.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&lc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(it(r)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new co,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Bn.warnOnListenWarnings_(c,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Xn(e,"w")){const i=Us(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Qb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Gb(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+it(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Xu("Unrecognized action received from server: "+it(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Tr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Tr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>FP&&(this.reconnectDelay_=Tr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*VP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Bn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(h){D(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?dt("getToken() completed but was canceled"):(dt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new xP(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{Dt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(UP)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Dt(h),c())}}}interrupt(e){dt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){dt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Fu(this.interruptReasons_)&&(this.reconnectDelay_=Tr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Id(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new De(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){dt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ym&&(this.reconnectDelay_=vm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){dt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ym&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ay.replace(/\./g,"-")]=1,od()?e["framework.cordova"]=1:vv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=lc.getInstance().currentlyOnline();return Fu(this.interruptReasons_)&&e}}Bn.nextPersistentConnectionId_=0;Bn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ue(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new ue(js,e),s=new ue(js,n);return this.compare(i,s)!==0}minPost(){return ue.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ma;class Ly extends nl{static get __EMPTY_NODE(){return ma}static set __EMPTY_NODE(e){ma=e}compare(e,n){return lr(e.name,n.name)}isDefinedOn(e){throw rr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ue.MIN}maxPost(){return new ue(Xi,ma)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new ue(e,ma)}toString(){return".key"}}const Ns=new Ly;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ga=class{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},xt=class xr{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??xr.RED,this.left=s??mn.EMPTY_NODE,this.right=r??mn.EMPTY_NODE}copy(e,n,i,s,r){return new xr(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return mn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return mn.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};xt.RED=!0;xt.BLACK=!1;class zP{copy(e,n,i,s,r){return this}insert(e,n,i){return new xt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let mn=class Ma{constructor(e,n=Ma.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ma(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,xt.BLACK,null,null))}remove(e){return new Ma(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xt.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ga(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ga(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ga(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ga(this.root_,null,this.comparator_,!0,e)}};mn.EMPTY_NODE=new zP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(t,e){return lr(t.name,e.name)}function Cd(t,e){return lr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eh;function BP(t){eh=t}const My=function(t){return typeof t=="number"?"number:"+dy(t):"string:"+t},qy=function(t){if(t.isLeafNode()){const e=t.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xn(e,".sv"),"Priority must be a string or number.")}else D(t===eh||t.isEmpty(),"priority of unexpected type.");D(t===eh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Em;class Ke{constructor(e,n=Ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),qy(this.priorityNode_)}static set __childrenNodeConstructor(e){Em=e}static get __childrenNodeConstructor(){return Em}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:le(e)===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=le(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(D(i!==".priority"||Ei(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+My(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=dy(this.value_):e+=this.value_,this.lazyHash_=ly(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ke.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Ke.VALUE_TYPE_ORDER.indexOf(n),r=Ke.VALUE_TYPE_ORDER.indexOf(i);return D(s>=0,"Unknown leaf type: "+n),D(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vy,Fy;function $P(t){Vy=t}function WP(t){Fy=t}class HP extends nl{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?lr(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ue.MIN}maxPost(){return new ue(Xi,new Ke("[PRIORITY-POST]",Fy))}makePost(e,n){const i=Vy(e);return new ue(n,new Ke("[PRIORITY-POST]",i))}toString(){return".priority"}}const gt=new HP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP=Math.log(2);class GP{constructor(e){const n=r=>parseInt(Math.log(r)/KP,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const uc=function(t,e,n,i){t.sort(e);const s=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=t[c],d=n?n(h):h,new xt(d,h.node,xt.BLACK,null,null);{const f=parseInt(u/2,10)+c,g=s(c,f),v=s(f+1,l);return h=t[f],d=n?n(h):h,new xt(d,h.node,xt.BLACK,g,v)}},r=function(c){let l=null,u=null,h=t.length;const d=function(g,v){const y=h-g,I=h;h-=g;const P=s(y+1,I),k=t[y],R=n?n(k):k;f(new xt(R,k.node,v,null,P))},f=function(g){l?(l.left=g,l=g):(u=g,l=g)};for(let g=0;g<c.count;++g){const v=c.nextBitIsOne(),y=Math.pow(2,c.count-(g+1));v?d(y,xt.BLACK):(d(y,xt.BLACK),d(y,xt.RED))}return u},o=new GP(t.length),a=r(o);return new mn(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu;const ps={};class Un{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return D(ps&&gt,"ChildrenNode.ts has not been loaded"),eu=eu||new Un({".priority":ps},{".priority":gt}),eu}get(e){const n=Us(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof mn?n:null}hasIndex(e){return Xn(this.indexSet_,e.toString())}addIndex(e,n){D(e!==Ns,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(ue.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=uc(i,e.getCompare()):a=ps;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Un(u,l)}addToIndexes(e,n){const i=Za(this.indexes_,(s,r)=>{const o=Us(this.indexSet_,r);if(D(o,"Missing index implementation for "+r),s===ps)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(ue.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),uc(a,o.getCompare())}else return ps;else{const a=n.get(e.name);let c=s;return a&&(c=c.remove(new ue(e.name,a))),c.insert(e,e.node)}});return new Un(i,this.indexSet_)}removeFromIndexes(e,n){const i=Za(this.indexes_,s=>{if(s===ps)return s;{const r=n.get(e.name);return r?s.remove(new ue(e.name,r)):s}});return new Un(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ir;class ye{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&qy(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ir||(Ir=new ye(new mn(Cd),null,Un.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ir}updatePriority(e){return this.children_.isEmpty()?this:new ye(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ir:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(Ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new ue(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Ir:this.priorityNode_;return new ye(s,o,r)}}updateChild(e,n){const i=le(e);if(i===null)return n;{D(le(e)!==".priority"||Ei(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Ne(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(gt,(o,a)=>{n[o]=a.val(e),i++,r&&ye.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+My(this.getPriority().val())+":"),this.forEachChild(gt,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":ly(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new ue(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ue(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ue(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ue.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ue.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zo?-1:0}withIndex(e){if(e===Ns||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ye(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ns||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(gt),s=n.getIterator(gt);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ns?null:this.indexMap_.get(e.toString())}}ye.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class QP extends ye{constructor(){super(new mn(Cd),ye.EMPTY_NODE,Un.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ye.EMPTY_NODE}isEmpty(){return!1}}const zo=new QP;Object.defineProperties(ue,{MIN:{value:new ue(js,ye.EMPTY_NODE)},MAX:{value:new ue(Xi,zo)}});Ly.__EMPTY_NODE=ye.EMPTY_NODE;Ke.__childrenNodeConstructor=ye;BP(zo);WP(zo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=!0;function ft(t,e=null){if(t===null)return ye.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ke(n,ft(e))}if(!(t instanceof Array)&&YP){const n=[];let i=!1;if(Wt(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=ft(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),n.push(new ue(o,c)))}}),n.length===0)return ye.EMPTY_NODE;const r=uc(n,jP,o=>o.name,Cd);if(i){const o=uc(n,gt.getCompare());return new ye(r,ft(e),new Un({".priority":o},{".priority":gt}))}else return new ye(r,ft(e),Un.Default)}else{let n=ye.EMPTY_NODE;return Wt(t,(i,s)=>{if(Xn(t,i)&&i.substring(0,1)!=="."){const r=ft(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(ft(e))}}$P(ft);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP extends nl{constructor(e){super(),this.indexPath_=e,D(!ae(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?lr(e.name,n.name):r}makePost(e,n){const i=ft(e),s=ye.EMPTY_NODE.updateChild(this.indexPath_,i);return new ue(n,s)}maxPost(){const e=ye.EMPTY_NODE.updateChild(this.indexPath_,zo);return new ue(Xi,e)}toString(){return Ny(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP extends nl{compare(e,n){const i=e.node.compareTo(n.node);return i===0?lr(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ue.MIN}maxPost(){return ue.MAX}makePost(e,n){const i=ft(e);return new ue(n,i)}toString(){return".value"}}const ZP=new JP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t){return{type:"value",snapshotNode:t}}function tk(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function nk(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Tm(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ik(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=gt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:js}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===gt}copy(){const e=new Sd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Im(t){const e={};if(t.isDefault())return e;let n;if(t.index_===gt?n="$priority":t.index_===ZP?n="$value":t.index_===Ns?n="$key":(D(t.index_ instanceof XP,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=it(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=it(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+it(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=it(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+it(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function wm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==gt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends Sy{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Fo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=hc.getListenId_(e,i),a={};this.listens_[o]=a;const c=Im(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,i),Us(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",s(d,null)}})}unlisten(e,n){const i=hc.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Im(e._queryParams),i=e._path.toString(),s=new co;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ar(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=lo(a.responseText)}catch{Dt("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&Dt("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(){this.rootNode_=ye.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(){return{value:null,children:new Map}}function Uy(t,e,n){if(ae(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=le(e);t.children.has(i)||t.children.set(i,dc());const s=t.children.get(i);e=Ne(e),Uy(s,e,n)}}function th(t,e,n){t.value!==null?n(e,t.value):rk(t,(i,s)=>{const r=new De(e.toString()+"/"+i);th(s,r,n)})}function rk(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Wt(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=10*1e3,ak=30*1e3,ck=5*60*1e3;class lk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ok(e);const i=bm+(ak-bm)*Math.random();Br(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Wt(e,(s,r)=>{r>0&&Xn(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Br(this.reportStats_.bind(this),Math.floor(Math.random()*2*ck))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(gn||(gn={}));function zy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function jy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function By(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=gn.ACK_USER_WRITE,this.source=zy()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new De(e));return new fc(be(),n,this.revert)}}else return D(le(this.path)===e,"operationForChild called for unrelated child."),new fc(Ne(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=gn.OVERWRITE}operationForChild(e){return ae(this.path)?new Ji(this.source,be(),this.snap.getImmediateChild(e)):new Ji(this.source,Ne(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=gn.MERGE}operationForChild(e){if(ae(this.path)){const n=this.children.subtree(new De(e));return n.isEmpty()?null:n.value?new Ji(this.source,be(),n.value):new mo(this.source,be(),n)}else return D(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new mo(this.source,Ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function uk(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(ik(o.childName,o.snapshotNode))}),wr(t,s,"child_removed",e,i,n),wr(t,s,"child_added",e,i,n),wr(t,s,"child_moved",r,i,n),wr(t,s,"child_changed",e,i,n),wr(t,s,"value",e,i,n),s}function wr(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,c)=>dk(t,a,c)),o.forEach(a=>{const c=hk(t,a,r);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function hk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function dk(t,e,n){if(e.childName==null||n.childName==null)throw rr("Should only compare child_ events.");const i=new ue(e.childName,e.snapshotNode),s=new ue(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(t,e){return{eventCache:t,serverCache:e}}function $r(t,e,n,i){return $y(new Pd(e,n,i),t.serverCache)}function Wy(t,e,n,i){return $y(t.eventCache,new Pd(e,n,i))}function nh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tu;const fk=()=>(tu||(tu=new mn(JS)),tu);class Se{constructor(e,n=fk()){this.value=e,this.children=n}static fromObject(e){let n=new Se(null);return Wt(e,(i,s)=>{n=n.set(new De(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:be(),value:this.value};if(ae(e))return null;{const i=le(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Ne(e),n);return r!=null?{path:Qe(new De(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const n=le(e),i=this.children.get(n);return i!==null?i.subtree(Ne(e)):new Se(null)}}set(e,n){if(ae(e))return new Se(n,this.children);{const i=le(e),r=(this.children.get(i)||new Se(null)).set(Ne(e),n),o=this.children.insert(i,r);return new Se(this.value,o)}}remove(e){if(ae(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const n=le(e),i=this.children.get(n);if(i){const s=i.remove(Ne(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new Se(null):new Se(this.value,r)}else return this}}get(e){if(ae(e))return this.value;{const n=le(e),i=this.children.get(n);return i?i.get(Ne(e)):null}}setTree(e,n){if(ae(e))return n;{const i=le(e),r=(this.children.get(i)||new Se(null)).setTree(Ne(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Se(this.value,o)}}fold(e){return this.fold_(be(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Qe(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,be(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(ae(e))return null;{const r=le(e),o=this.children.get(r);return o?o.findOnPath_(Ne(e),Qe(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,be(),n)}foreachOnPath_(e,n,i){if(ae(e))return this;{this.value&&i(n,this.value);const s=le(e),r=this.children.get(s);return r?r.foreachOnPath_(Ne(e),Qe(n,s),i):new Se(null)}}foreach(e){this.foreach_(be(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Qe(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.writeTree_=e}static empty(){return new nn(new Se(null))}}function Wr(t,e,n){if(ae(e))return new nn(new Se(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Bt(s,e);return r=r.updateChild(o,n),new nn(t.writeTree_.set(s,r))}else{const s=new Se(n),r=t.writeTree_.setTree(e,s);return new nn(r)}}}function Rm(t,e,n){let i=t;return Wt(n,(s,r)=>{i=Wr(i,Qe(e,s),r)}),i}function Am(t,e){if(ae(e))return nn.empty();{const n=t.writeTree_.setTree(e,new Se(null));return new nn(n)}}function ih(t,e){return ss(t,e)!=null}function ss(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Bt(n.path,e)):null}function Cm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(gt,(i,s)=>{e.push(new ue(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new ue(i,s.value))}),e}function gi(t,e){if(ae(e))return t;{const n=ss(t,e);return n!=null?new nn(new Se(n)):new nn(t.writeTree_.subtree(e))}}function sh(t){return t.writeTree_.isEmpty()}function Bs(t,e){return Hy(be(),t.writeTree_,e)}function Hy(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(D(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Hy(Qe(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Qe(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(t,e){return Jy(e,t)}function pk(t,e,n,i,s){D(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Wr(t.visibleWrites,e,n)),t.lastWriteId=i}function mk(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function gk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&_k(a,i.path)?s=!1:Xt(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return vk(t),!0;if(i.snap)t.visibleWrites=Am(t.visibleWrites,i.path);else{const a=i.children;Wt(a,c=>{t.visibleWrites=Am(t.visibleWrites,Qe(i.path,c))})}return!0}else return!1}function _k(t,e){if(t.snap)return Xt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Xt(Qe(t.path,n),e))return!0;return!1}function vk(t){t.visibleWrites=Gy(t.allWrites,yk,be()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function yk(t){return t.visible}function Gy(t,e,n){let i=nn.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)Xt(n,o)?(a=Bt(n,o),i=Wr(i,a,r.snap)):Xt(o,n)&&(a=Bt(o,n),i=Wr(i,be(),r.snap.getChild(a)));else if(r.children){if(Xt(n,o))a=Bt(n,o),i=Rm(i,a,r.children);else if(Xt(o,n))if(a=Bt(o,n),ae(a))i=Rm(i,be(),r.children);else{const c=Us(r.children,le(a));if(c){const l=c.getChild(Ne(a));i=Wr(i,be(),l)}}}else throw rr("WriteRecord should have .snap or .children")}}return i}function Qy(t,e,n,i,s){if(!i&&!s){const r=ss(t.visibleWrites,e);if(r!=null)return r;{const o=gi(t.visibleWrites,e);if(sh(o))return n;if(n==null&&!ih(o,be()))return null;{const a=n||ye.EMPTY_NODE;return Bs(o,a)}}}else{const r=gi(t.visibleWrites,e);if(!s&&sh(r))return n;if(!s&&n==null&&!ih(r,be()))return null;{const o=function(l){return(l.visible||s)&&(!i||!~i.indexOf(l.writeId))&&(Xt(l.path,e)||Xt(e,l.path))},a=Gy(t.allWrites,o,e),c=n||ye.EMPTY_NODE;return Bs(a,c)}}}function Ek(t,e,n){let i=ye.EMPTY_NODE;const s=ss(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(gt,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=gi(t.visibleWrites,e);return n.forEachChild(gt,(o,a)=>{const c=Bs(gi(r,new De(o)),a);i=i.updateImmediateChild(o,c)}),Cm(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=gi(t.visibleWrites,e);return Cm(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Tk(t,e,n,i,s){D(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Qe(e,n);if(ih(t.visibleWrites,r))return null;{const o=gi(t.visibleWrites,r);return sh(o)?s.getChild(n):Bs(o,s.getChild(n))}}function Ik(t,e,n,i){const s=Qe(e,n),r=ss(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=gi(t.visibleWrites,s);return Bs(o,i.getNode().getImmediateChild(n))}else return null}function wk(t,e){return ss(t.visibleWrites,e)}function bk(t,e,n,i,s,r,o){let a;const c=gi(t.visibleWrites,e),l=ss(c,be());if(l!=null)a=l;else if(n!=null)a=Bs(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<s;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function Rk(){return{visibleWrites:nn.empty(),allWrites:[],lastWriteId:-1}}function rh(t,e,n,i){return Qy(t.writeTree,t.treePath,e,n,i)}function Yy(t,e){return Ek(t.writeTree,t.treePath,e)}function Sm(t,e,n,i){return Tk(t.writeTree,t.treePath,e,n,i)}function pc(t,e){return wk(t.writeTree,Qe(t.treePath,e))}function Ak(t,e,n,i,s,r){return bk(t.writeTree,t.treePath,e,n,i,s,r)}function kd(t,e,n){return Ik(t.writeTree,t.treePath,e,n)}function Xy(t,e){return Jy(Qe(t.treePath,e),t.writeTree)}function Jy(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Tm(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,nk(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,tk(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Tm(i,e.snapshotNode,s.oldSnap));else throw rr("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Zy=new Sk;class Nd{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Pd(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return kd(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zi(this.viewCache_),r=Ak(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function Pk(t,e){D(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function kk(t,e,n,i,s){const r=new Ck;let o,a;if(n.type===gn.OVERWRITE){const l=n;l.source.fromUser?o=oh(t,e,l.path,l.snap,i,s,r):(D(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!ae(l.path),o=mc(t,e,l.path,l.snap,i,s,a,r))}else if(n.type===gn.MERGE){const l=n;l.source.fromUser?o=xk(t,e,l.path,l.children,i,s,r):(D(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=ah(t,e,l.path,l.children,i,s,a,r))}else if(n.type===gn.ACK_USER_WRITE){const l=n;l.revert?o=Lk(t,e,l.path,i,s,r):o=Ok(t,e,l.path,l.affectedTree,i,s,r)}else if(n.type===gn.LISTEN_COMPLETE)o=Dk(t,e,n.path,i,r);else throw rr("Unknown operation type: "+n.type);const c=r.getChanges();return Nk(e,o,c),{viewCache:o,changes:c}}function Nk(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=nh(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(ek(nh(e)))}}function eE(t,e,n,i,s,r){const o=e.eventCache;if(pc(i,n)!=null)return e;{let a,c;if(ae(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Zi(e),u=l instanceof ye?l:ye.EMPTY_NODE,h=Yy(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=rh(i,Zi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=le(n);if(l===".priority"){D(Ei(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Sm(i,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ne(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=Sm(i,n,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=kd(i,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,s,r):a=o.getNode()}}return $r(e,a,o.isFullyInitialized()||ae(n),t.filter.filtersNodes())}}function mc(t,e,n,i,s,r,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(ae(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),f,null)}else{const f=le(n);if(!c.isCompleteForPath(n)&&Ei(n)>1)return e;const g=Ne(n),y=c.getNode().getImmediateChild(f).updateChild(g,i);f===".priority"?l=u.updatePriority(c.getNode(),y):l=u.updateChild(c.getNode(),f,y,g,Zy,null)}const h=Wy(e,l,c.isFullyInitialized()||ae(n),u.filtersNodes()),d=new Nd(s,h,r);return eE(t,h,n,s,d,a)}function oh(t,e,n,i,s,r,o){const a=e.eventCache;let c,l;const u=new Nd(s,e,r);if(ae(n))l=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=$r(e,l,!0,t.filter.filtersNodes());else{const h=le(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),i),c=$r(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=Ne(n),f=a.getNode().getImmediateChild(h);let g;if(ae(d))g=i;else{const v=u.getCompleteChild(h);v!=null?ky(d)===".priority"&&v.getChild(xy(d)).isEmpty()?g=v:g=v.updateChild(d,i):g=ye.EMPTY_NODE}if(f.equals(g))c=e;else{const v=t.filter.updateChild(a.getNode(),h,g,d,u,o);c=$r(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Pm(t,e){return t.eventCache.isCompleteForChild(e)}function xk(t,e,n,i,s,r,o){let a=e;return i.foreach((c,l)=>{const u=Qe(n,c);Pm(e,le(u))&&(a=oh(t,a,u,l,s,r,o))}),i.foreach((c,l)=>{const u=Qe(n,c);Pm(e,le(u))||(a=oh(t,a,u,l,s,r,o))}),a}function km(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ah(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;ae(n)?l=i:l=new Se(null).setTree(n,i);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),g=km(t,f,d);c=mc(t,c,new De(h),g,s,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const g=e.serverCache.getNode().getImmediateChild(h),v=km(t,g,d);c=mc(t,c,new De(h),v,s,r,o,a)}}),c}function Ok(t,e,n,i,s,r,o){if(pc(s,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(ae(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return mc(t,e,n,c.getNode().getChild(n),s,r,a,o);if(ae(n)){let l=new Se(null);return c.getNode().forEachChild(Ns,(u,h)=>{l=l.set(new De(u),h)}),ah(t,e,n,l,s,r,a,o)}else return e}else{let l=new Se(null);return i.foreach((u,h)=>{const d=Qe(n,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),ah(t,e,n,l,s,r,a,o)}}function Dk(t,e,n,i,s){const r=e.serverCache,o=Wy(e,r.getNode(),r.isFullyInitialized()||ae(n),r.isFiltered());return eE(t,o,n,i,Zy,s)}function Lk(t,e,n,i,s,r){let o;if(pc(i,n)!=null)return e;{const a=new Nd(i,e,s),c=e.eventCache.getNode();let l;if(ae(n)||le(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=rh(i,Zi(e));else{const h=e.serverCache.getNode();D(h instanceof ye,"serverChildren would be complete if leaf node"),u=Yy(i,h)}u=u,l=t.filter.updateFullNode(c,u,r)}else{const u=le(n);let h=kd(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,Ne(n),a,r):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,ye.EMPTY_NODE,Ne(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=rh(i,Zi(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||pc(i,be())!=null,$r(e,l,o,t.filter.filtersNodes())}}function Mk(t,e){const n=Zi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ae(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function Nm(t,e,n,i){e.type===gn.MERGE&&e.source.queryId!==null&&(D(Zi(t.viewCache_),"We should always have a full cache before handling merges"),D(nh(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=kk(t.processor_,s,e,n,i);return Pk(t.processor_,r.viewCache),D(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,qk(t,r.changes,r.viewCache.eventCache.getNode(),null)}function qk(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return uk(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xm;function Vk(t){D(!xm,"__referenceConstructor has already been defined"),xm=t}function xd(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return D(r!=null,"SyncTree gave us an op for an invalid query."),Nm(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Nm(o,e,n,i));return r}}function Od(t,e){let n=null;for(const i of t.views.values())n=n||Mk(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Om;function Fk(t){D(!Om,"__referenceConstructor has already been defined"),Om=t}class Dm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=Rk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Uk(t,e,n,i,s){return pk(t.pendingWriteTree_,e,n,i,s),s?sl(t,new Ji(zy(),e,n)):[]}function Ts(t,e,n=!1){const i=mk(t.pendingWriteTree_,e);if(gk(t.pendingWriteTree_,e)){let r=new Se(null);return i.snap!=null?r=r.set(be(),!0):Wt(i.children,o=>{r=r.set(new De(o),!0)}),sl(t,new fc(i.path,r,n))}else return[]}function il(t,e,n){return sl(t,new Ji(jy(),e,n))}function zk(t,e,n){const i=Se.fromObject(n);return sl(t,new mo(jy(),e,i))}function jk(t,e,n,i){const s=sE(t,i);if(s!=null){const r=rE(s),o=r.path,a=r.queryId,c=Bt(o,e),l=new Ji(By(a),c,n);return oE(t,o,l)}else return[]}function Bk(t,e,n,i){const s=sE(t,i);if(s){const r=rE(s),o=r.path,a=r.queryId,c=Bt(o,e),l=Se.fromObject(n),u=new mo(By(a),c,l);return oE(t,o,u)}else return[]}function tE(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Bt(o,e),l=Od(a,c);if(l)return l});return Qy(s,e,r,n,!0)}function sl(t,e){return nE(e,t.syncPointTree_,null,Ky(t.pendingWriteTree_,be()))}function nE(t,e,n,i){if(ae(t.path))return iE(t,e,n,i);{const s=e.get(be());n==null&&s!=null&&(n=Od(s,be()));let r=[];const o=le(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=Xy(i,o);r=r.concat(nE(a,c,l,u))}return s&&(r=r.concat(xd(s,t,i,n))),r}}function iE(t,e,n,i){const s=e.get(be());n==null&&s!=null&&(n=Od(s,be()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=Xy(i,o),u=t.operationForChild(o);u&&(r=r.concat(iE(u,a,c,l)))}),s&&(r=r.concat(xd(s,t,i,n))),r}function sE(t,e){return t.tagToQueryMap.get(e)}function rE(t){const e=t.indexOf("$");return D(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new De(t.substr(0,e))}}function oE(t,e,n){const i=t.syncPointTree_.get(e);D(i,"Missing sync point for query tag that we're tracking");const s=Ky(t.pendingWriteTree_,e);return xd(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Dd(n)}node(){return this.node_}}class Ld{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Qe(this.path_,e);return new Ld(this.syncTree_,n)}node(){return tE(this.syncTree_,this.path_)}}const $k=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Lm=function(t,e,n){if(!t||typeof t!="object")return t;if(D(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Wk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Hk(t[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Wk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+t)}},Hk=function(t,e,n){t.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&D(!1,"Unexpected increment value: "+i);const s=e.node();if(D(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Kk=function(t,e,n,i){return Md(e,new Ld(n,t),i)},Gk=function(t,e,n){return Md(t,new Dd(e),n)};function Md(t,e,n){const i=t.getPriority().val(),s=Lm(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Lm(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Ke(a,ft(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Ke(s))),o.forEachChild(gt,(a,c)=>{const l=Md(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Vd(t,e){let n=e instanceof De?e:new De(e),i=t,s=le(n);for(;s!==null;){const r=Us(i.node.children,s)||{children:{},childCount:0};i=new qd(s,i,r),n=Ne(n),s=le(n)}return i}function ur(t){return t.node.value}function aE(t,e){t.node.value=e,ch(t)}function cE(t){return t.node.childCount>0}function Qk(t){return ur(t)===void 0&&!cE(t)}function rl(t,e){Wt(t.node.children,(n,i)=>{e(new qd(n,t,i))})}function lE(t,e,n,i){n&&!i&&e(t),rl(t,s=>{lE(s,e,!0,i)}),n&&i&&e(t)}function Yk(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function jo(t){return new De(t.parent===null?t.name:jo(t.parent)+"/"+t.name)}function ch(t){t.parent!==null&&Xk(t.parent,t.name,t)}function Xk(t,e,n){const i=Qk(n),s=Xn(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,ch(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,ch(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=/[\[\].#$\/\u0000-\u001F\u007F]/,Zk=/[\[\].#$\u0000-\u001F\u007F]/,nu=10*1024*1024,uE=function(t){return typeof t=="string"&&t.length!==0&&!Jk.test(t)},e1=function(t){return typeof t=="string"&&t.length!==0&&!Zk.test(t)},t1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),e1(t)},hE=function(t,e,n){const i=n instanceof De?new DP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ni(i));if(typeof e=="function")throw new Error(t+"contains a function "+Ni(i)+" with contents = "+e.toString());if(uy(e))throw new Error(t+"contains "+e.toString()+" "+Ni(i));if(typeof e=="string"&&e.length>nu/3&&Xc(e)>nu)throw new Error(t+"contains a string greater than "+nu+" utf8 bytes "+Ni(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Wt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!uE(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ni(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);LP(i,o),hE(t,a,i),MP(i)}),s&&r)throw new Error(t+' contains ".value" child '+Ni(i)+" in addition to actual children.")}},n1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!uE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!t1(n))throw new Error(eR(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function s1(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Oy(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function rs(t,e,n){s1(t,n),r1(t,i=>Xt(i,e)||Xt(e,i))}function r1(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(o1(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function o1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Wi&&dt("event: "+n.toString()),Uo(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1="repo_interrupt",c1=25;class l1{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new i1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=dc(),this.transactionQueueTree_=new qd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function u1(t,e,n){if(t.stats_=bd(t.repoInfo_),t.forceRestClient_||sP())t.server_=new hc(t.repoInfo_,(i,s,r,o)=>{Mm(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>qm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{it(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Bn(t.repoInfo_,e,(i,s,r,o)=>{Mm(t,i,s,r,o)},i=>{qm(t,i)},i=>{d1(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=uP(t.repoInfo_,()=>new lk(t.stats_,t.server_)),t.infoData_=new sk,t.infoSyncTree_=new Dm({startListening:(i,s,r,o)=>{let a=[];const c=t.infoData_.getNode(i._path);return c.isEmpty()||(a=il(t.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Fd(t,"connected",!1),t.serverSyncTree_=new Dm({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,c)=>{const l=o(a,c);rs(t.eventQueue_,i._path,l)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function h1(t){const n=t.infoData_.getNode(new De(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function dE(t){return $k({timestamp:h1(t)})}function Mm(t,e,n,i,s){t.dataUpdateCount++;const r=new De(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const c=Za(n,l=>ft(l));o=Bk(t.serverSyncTree_,r,c,s)}else{const c=ft(n);o=jk(t.serverSyncTree_,r,c,s)}else if(i){const c=Za(n,l=>ft(l));o=zk(t.serverSyncTree_,r,c)}else{const c=ft(n);o=il(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=zd(t,r)),rs(t.eventQueue_,a,o)}function qm(t,e){Fd(t,"connected",e),e===!1&&p1(t)}function d1(t,e){Wt(e,(n,i)=>{Fd(t,n,i)})}function Fd(t,e,n){const i=new De("/.info/"+e),s=ft(n);t.infoData_.updateSnapshot(i,s);const r=il(t.infoSyncTree_,i,s);rs(t.eventQueue_,i,r)}function f1(t){return t.nextWriteId_++}function p1(t){fE(t,"onDisconnectEvents");const e=dE(t),n=dc();th(t.onDisconnect_,be(),(s,r)=>{const o=Kk(s,r,t.serverSyncTree_,e);Uy(n,s,o)});let i=[];th(n,be(),(s,r)=>{i=i.concat(il(t.serverSyncTree_,s,r));const o=v1(t,s);zd(t,o)}),t.onDisconnect_=dc(),rs(t.eventQueue_,be(),i)}function m1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(a1)}function fE(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),dt(n,...e)}function pE(t,e,n){return tE(t.serverSyncTree_,e,n)||ye.EMPTY_NODE}function Ud(t,e=t.transactionQueueTree_){if(e||ol(t,e),ur(e)){const n=gE(t,e);D(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&g1(t,jo(e),n)}else cE(e)&&rl(e,n=>{Ud(t,n)})}function g1(t,e,n){const i=n.map(l=>l.currentWriteId),s=pE(t,e,i);let r=s;const o=s.hash();for(let l=0;l<n.length;l++){const u=n[l];D(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Bt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{fE(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Ts(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ol(t,Vd(t.transactionQueueTree_,e)),Ud(t,t.transactionQueueTree_),rs(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Uo(h[d])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Dt("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}zd(t,e)}},o)}function zd(t,e){const n=mE(t,e),i=jo(n),s=gE(t,n);return _1(t,s,i),i}function _1(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Bt(n,c.path);let u=!1,h;if(D(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,s=s.concat(Ts(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=c1)u=!0,h="maxretry",s=s.concat(Ts(t.serverSyncTree_,c.currentWriteId,!0));else{const d=pE(t,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){hE("transaction failed: Data returned ",f,c.path);let g=ft(f);typeof f=="object"&&f!=null&&Xn(f,".priority")||(g=g.updatePriority(d.getPriority()));const y=c.currentWriteId,I=dE(t),P=Gk(g,d,I);c.currentOutputSnapshotRaw=g,c.currentOutputSnapshotResolved=P,c.currentWriteId=f1(t),o.splice(o.indexOf(y),1),s=s.concat(Uk(t.serverSyncTree_,c.path,P,c.currentWriteId,c.applyLocally)),s=s.concat(Ts(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",s=s.concat(Ts(t.serverSyncTree_,c.currentWriteId,!0))}rs(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}ol(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Uo(i[a]);Ud(t,t.transactionQueueTree_)}function mE(t,e){let n,i=t.transactionQueueTree_;for(n=le(e);n!==null&&ur(i)===void 0;)i=Vd(i,n),e=Ne(e),n=le(e);return i}function gE(t,e){const n=[];return _E(t,e,n),n.sort((i,s)=>i.order-s.order),n}function _E(t,e,n){const i=ur(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);rl(e,s=>{_E(t,s,n)})}function ol(t,e){const n=ur(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,aE(e,n.length>0?n:void 0)}rl(e,i=>{ol(t,i)})}function v1(t,e){const n=jo(mE(t,e)),i=Vd(t.transactionQueueTree_,e);return Yk(i,s=>{iu(t,s)}),iu(t,i),lE(i,s=>{iu(t,s)}),n}function iu(t,e){const n=ur(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(D(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(D(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Ts(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?aE(e,void 0):n.length=r+1,rs(t.eventQueue_,jo(e),s);for(let o=0;o<i.length;o++)Uo(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function E1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Dt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Vm=function(t,e){const n=T1(t),i=n.namespace;n.domain==="firebase.com"&&Yi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Yi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||YS();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new aP(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new De(n.pathString)}},T1=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=y1(t.substring(u,h)));const d=E1(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class jd{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return ae(this._path)?null:ky(this._path)}get ref(){return new hr(this._repo,this._path)}get _queryIdentifier(){const e=wm(this._queryParams),n=Id(e);return n==="{}"?"default":n}get _queryObject(){return wm(this._queryParams)}isEqual(e){if(e=Lt(e),!(e instanceof jd))return!1;const n=this._repo===e._repo,i=Oy(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+OP(this._path)}}class hr extends jd{constructor(e,n){super(e,n,new Sd,!1)}get parent(){const e=xy(this._path);return e===null?null:new hr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Vk(hr);Fk(hr);/**
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
 */const I1="FIREBASE_DATABASE_EMULATOR_HOST",lh={};let w1=!1;function b1(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Yi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),dt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Vm(r,s),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[I1]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=Vm(r,s),a=o.repoInfo):c=!o.repoInfo.secure;const u=s&&c?new Ju(Ju.OWNER):new oP(t.name,t.options,e);n1("Invalid Firebase Database URL",o),ae(o.path)||Yi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=A1(a,t,u,new rP(t.name,n));return new C1(h,t)}function R1(t,e){const n=lh[e];(!n||n[t.key]!==t)&&Yi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),m1(t),delete n[t.key]}function A1(t,e,n,i){let s=lh[e.name];s||(s={},lh[e.name]=s);let r=s[t.toURLString()];return r&&Yi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new l1(t,w1,n,i),s[t.toURLString()]=r,r}class C1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(u1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new hr(this._repo,be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(R1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Yi("Cannot call "+e+" on a deleted database.")}}/**
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
 */function S1(t){WS(bi),Rn(new sn("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return b1(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Ot(rm,om,t),Ot(rm,om,"esm2017")}Bn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Bn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};S1();var P1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,Bd=Bd||{},Y=P1||self;function al(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Bo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function k1(t){return Object.prototype.hasOwnProperty.call(t,su)&&t[su]||(t[su]=++N1)}var su="closure_uid_"+(1e9*Math.random()>>>0),N1=0;function x1(t,e,n){return t.call.apply(t.bind,arguments)}function O1(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function _t(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_t=x1:_t=O1,_t.apply(null,arguments)}function _a(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Je(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Ri(){this.s=this.s,this.o=this.o}var D1=0;Ri.prototype.s=!1;Ri.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),D1!=0)&&k1(this)};Ri.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const vE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function $d(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Fm(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(al(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function vt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}vt.prototype.h=function(){this.defaultPrevented=!0};var L1=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",()=>{},e),Y.removeEventListener("test",()=>{},e)}catch{}return t}();function go(t){return/^[\s\xa0]*$/.test(t)}function cl(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function fn(t){return cl().indexOf(t)!=-1}function Wd(t){return Wd[" "](t),t}Wd[" "]=function(){};function M1(t,e){var n=SN;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var q1=fn("Opera"),$s=fn("Trident")||fn("MSIE"),yE=fn("Edge"),uh=yE||$s,EE=fn("Gecko")&&!(cl().toLowerCase().indexOf("webkit")!=-1&&!fn("Edge"))&&!(fn("Trident")||fn("MSIE"))&&!fn("Edge"),V1=cl().toLowerCase().indexOf("webkit")!=-1&&!fn("Edge");function TE(){var t=Y.document;return t?t.documentMode:void 0}var hh;e:{var ru="",ou=function(){var t=cl();if(EE)return/rv:([^\);]+)(\)|;)/.exec(t);if(yE)return/Edge\/([\d\.]+)/.exec(t);if($s)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(V1)return/WebKit\/(\S+)/.exec(t);if(q1)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ou&&(ru=ou?ou[1]:""),$s){var au=TE();if(au!=null&&au>parseFloat(ru)){hh=String(au);break e}}hh=ru}var dh;if(Y.document&&$s){var Um=TE();dh=Um||parseInt(hh,10)||void 0}else dh=void 0;var F1=dh;function _o(t,e){if(vt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(EE){e:{try{Wd(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:U1[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_o.$.h.call(this)}}Je(_o,vt);var U1={2:"touch",3:"pen",4:"mouse"};_o.prototype.h=function(){_o.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $o="closure_listenable_"+(1e6*Math.random()|0),z1=0;function j1(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++z1,this.fa=this.ia=!1}function ll(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Hd(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function B1(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function IE(t){const e={};for(const n in t)e[n]=t[n];return e}const zm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wE(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<zm.length;r++)n=zm[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ul(t){this.src=t,this.g={},this.h=0}ul.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ph(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new j1(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function fh(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=vE(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ll(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ph(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var Kd="closure_lm_"+(1e6*Math.random()|0),cu={};function bE(t,e,n,i,s){if(i&&i.once)return AE(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)bE(t,e[r],n,i,s);return null}return n=Yd(n),t&&t[$o]?t.O(e,n,Bo(i)?!!i.capture:!!i,s):RE(t,e,n,!1,i,s)}function RE(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Bo(s)?!!s.capture:!!s,a=Qd(t);if(a||(t[Kd]=a=new ul(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=$1(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)L1||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(SE(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function $1(){function t(n){return e.call(t.src,t.listener,n)}const e=W1;return t}function AE(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)AE(t,e[r],n,i,s);return null}return n=Yd(n),t&&t[$o]?t.P(e,n,Bo(i)?!!i.capture:!!i,s):RE(t,e,n,!0,i,s)}function CE(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)CE(t,e[r],n,i,s);else i=Bo(i)?!!i.capture:!!i,n=Yd(n),t&&t[$o]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ph(r,n,i,s),-1<n&&(ll(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Qd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ph(e,n,i,s)),(n=-1<t?e[t]:null)&&Gd(n))}function Gd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[$o])fh(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(SE(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Qd(e))?(fh(n,t),n.h==0&&(n.src=null,e[Kd]=null)):ll(t)}}}function SE(t){return t in cu?cu[t]:cu[t]="on"+t}function W1(t,e){if(t.fa)t=!0;else{e=new _o(e,this);var n=t.listener,i=t.la||t.src;t.ia&&Gd(t),t=n.call(i,e)}return t}function Qd(t){return t=t[Kd],t instanceof ul?t:null}var lu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yd(t){return typeof t=="function"?t:(t[lu]||(t[lu]=function(e){return t.handleEvent(e)}),t[lu])}function Xe(){Ri.call(this),this.i=new ul(this),this.S=this,this.J=null}Je(Xe,Ri);Xe.prototype[$o]=!0;Xe.prototype.removeEventListener=function(t,e,n,i){CE(this,t,e,n,i)};function rt(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new vt(e,t);else if(e instanceof vt)e.target=e.target||t;else{var s=e;e=new vt(i,t),wE(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=va(o,i,!0,e)&&s}if(o=e.g=t,s=va(o,i,!0,e)&&s,s=va(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=va(o,i,!1,e)&&s}Xe.prototype.N=function(){if(Xe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)ll(n[i]);delete t.g[e],t.h--}}this.J=null};Xe.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Xe.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function va(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&fh(t.i,o),s=a.call(c,i)!==!1&&s}}return s&&!i.defaultPrevented}var Xd=Y.JSON.stringify;class H1{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function K1(){var t=Jd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class G1{constructor(){this.h=this.g=null}add(e,n){const i=PE.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var PE=new H1(()=>new Q1,t=>t.reset());class Q1{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Y1(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function X1(t){Y.setTimeout(()=>{throw t},0)}let vo,yo=!1,Jd=new G1,kE=()=>{const t=Y.Promise.resolve(void 0);vo=()=>{t.then(J1)}};var J1=()=>{for(var t;t=K1();){try{t.h.call(t.g)}catch(n){X1(n)}var e=PE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}yo=!1};function hl(t,e){Xe.call(this),this.h=t||1,this.g=e||Y,this.j=_t(this.qb,this),this.l=Date.now()}Je(hl,Xe);L=hl.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),rt(this,"tick"),this.ga&&(Zd(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Zd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){hl.$.N.call(this),Zd(this),delete this.g};function ef(t,e,n){if(typeof t=="function")n&&(t=_t(t,n));else if(t&&typeof t.handleEvent=="function")t=_t(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function NE(t){t.g=ef(()=>{t.g=null,t.i&&(t.i=!1,NE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Z1 extends Ri{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:NE(this)}N(){super.N(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Eo(t){Ri.call(this),this.h=t,this.g={}}Je(Eo,Ri);var jm=[];function xE(t,e,n,i){Array.isArray(n)||(n&&(jm[0]=n.toString()),n=jm);for(var s=0;s<n.length;s++){var r=bE(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function OE(t){Hd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Gd(e)},t),t.g={}}Eo.prototype.N=function(){Eo.$.N.call(this),OE(this)};Eo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function dl(){this.g=!0}dl.prototype.Ea=function(){this.g=!1};function eN(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function tN(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Is(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+iN(t,n)+(i?" "+i:"")})}function nN(t,e){t.info(function(){return"TIMEOUT: "+e})}dl.prototype.info=function(){};function iN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Xd(n)}catch{return e}}var os={},Bm=null;function fl(){return Bm=Bm||new Xe}os.Ta="serverreachability";function DE(t){vt.call(this,os.Ta,t)}Je(DE,vt);function To(t){const e=fl();rt(e,new DE(e))}os.STAT_EVENT="statevent";function LE(t,e){vt.call(this,os.STAT_EVENT,t),this.stat=e}Je(LE,vt);function It(t){const e=fl();rt(e,new LE(e,t))}os.Ua="timingevent";function ME(t,e){vt.call(this,os.Ua,t),this.size=e}Je(ME,vt);function Wo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var pl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},qE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function tf(){}tf.prototype.h=null;function $m(t){return t.h||(t.h=t.i())}function VE(){}var Ho={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function nf(){vt.call(this,"d")}Je(nf,vt);function sf(){vt.call(this,"c")}Je(sf,vt);var mh;function ml(){}Je(ml,tf);ml.prototype.g=function(){return new XMLHttpRequest};ml.prototype.i=function(){return{}};mh=new ml;function Ko(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Eo(this),this.P=sN,t=uh?125:void 0,this.V=new hl(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new FE}function FE(){this.i=null,this.g="",this.h=!1}var sN=45e3,gh={},gc={};L=Ko.prototype;L.setTimeout=function(t){this.P=t};function _h(t,e,n){t.L=1,t.v=_l(Kn(e)),t.s=n,t.S=!0,UE(t,null)}function UE(t,e){t.G=Date.now(),Go(t),t.A=Kn(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),GE(n.i,"t",i),t.C=0,n=t.l.J,t.h=new FE,t.g=mT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Z1(_t(t.Pa,t,t.g),t.O)),xE(t.U,t.g,"readystatechange",t.nb),e=t.I?IE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),To(),eN(t.j,t.u,t.A,t.m,t.W,t.s)}L.nb=function(t){t=t.target;const e=this.M;e&&_n(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const u=_n(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||uh||this.g&&(this.h.h||this.g.ja()||Gm(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?To(3):To(2)),gl(this);var n=this.g.da();this.ca=n;t:if(zE(this)){var i=Gm(this.g);t="";var s=i.length,r=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qi(this),Hr(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,tN(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!go(a)){var l=a;break t}}l=null}if(n=l)Is(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vh(this,n);else{this.i=!1,this.o=3,It(12),qi(this),Hr(this);break e}}this.S?(jE(this,u,o),uh&&this.i&&u==3&&(xE(this.U,this.V,"tick",this.mb),this.V.start())):(Is(this.j,this.m,o,null),vh(this,o)),u==4&&qi(this),this.i&&!this.J&&(u==4?hT(this.l,this):(this.i=!1,Go(this)))}else RN(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,It(12)):(this.o=0,It(13)),qi(this),Hr(this)}}}catch{}finally{}};function zE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function jE(t,e,n){let i=!0,s;for(;!t.J&&t.C<n.length;)if(s=rN(t,n),s==gc){e==4&&(t.o=4,It(14),i=!1),Is(t.j,t.m,null,"[Incomplete Response]");break}else if(s==gh){t.o=4,It(15),Is(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Is(t.j,t.m,s,null),vh(t,s);zE(t)&&s!=gc&&s!=gh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,It(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),uf(e),e.M=!0,It(11))):(Is(t.j,t.m,n,"[Invalid Chunked Response]"),qi(t),Hr(t))}L.mb=function(){if(this.g){var t=_n(this.g),e=this.g.ja();this.C<e.length&&(gl(this),jE(this,t,e),this.i&&t!=4&&Go(this))}};function rN(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?gc:(n=Number(e.substring(n,i)),isNaN(n)?gh:(i+=1,i+n>e.length?gc:(e=e.slice(i,i+n),t.C=i+n,e)))}L.cancel=function(){this.J=!0,qi(this)};function Go(t){t.Y=Date.now()+t.P,BE(t,t.P)}function BE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Wo(_t(t.lb,t),e)}function gl(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}L.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(nN(this.j,this.A),this.L!=2&&(To(),It(17)),qi(this),this.o=2,Hr(this)):BE(this,this.Y-t)};function Hr(t){t.l.H==0||t.J||hT(t.l,t)}function qi(t){gl(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Zd(t.V),OE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function vh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||yh(n.i,t))){if(!t.K&&yh(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)yc(n),El(n);else break e;lf(n),It(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Wo(_t(n.ib,n),6e3));if(1>=XE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Vi(n,11)}else if((t.K||n.g==t)&&yc(n),!go(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=i.i;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(rf(r,r.h),r.h=null))}if(i.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(i.Da=v,xe(i.I,i.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=pT(i,i.J?i.pa:null,i.Y),o.K){JE(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.B&&(gl(a),Go(a)),i.g=o}else lT(i);0<n.j.length&&Tl(n)}else l[0]!="stop"&&l[0]!="close"||Vi(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Vi(n,7):cf(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}To(4)}catch{}}function oN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(al(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function aN(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(al(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function $E(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(al(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=aN(t),i=oN(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var WE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Hi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Hi){this.h=t.h,_c(this,t.j),this.s=t.s,this.g=t.g,vc(this,t.m),this.l=t.l;var e=t.i,n=new Io;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Wm(this,n),this.o=t.o}else t&&(e=String(t).match(WE))?(this.h=!1,_c(this,e[1]||"",!0),this.s=Or(e[2]||""),this.g=Or(e[3]||"",!0),vc(this,e[4]),this.l=Or(e[5]||"",!0),Wm(this,e[6]||"",!0),this.o=Or(e[7]||"")):(this.h=!1,this.i=new Io(null,this.h))}Hi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Dr(e,Hm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Dr(e,Hm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Dr(n,n.charAt(0)=="/"?hN:uN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Dr(n,fN)),t.join("")};function Kn(t){return new Hi(t)}function _c(t,e,n){t.j=n?Or(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function vc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Wm(t,e,n){e instanceof Io?(t.i=e,pN(t.i,t.h)):(n||(e=Dr(e,dN)),t.i=new Io(e,t.h))}function xe(t,e,n){t.i.set(e,n)}function _l(t){return xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Or(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Dr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,lN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function lN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Hm=/[#\/\?@]/g,uN=/[#\?:]/g,hN=/[#\?]/g,dN=/[#\?@]/g,fN=/#/g;function Io(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ai(t){t.g||(t.g=new Map,t.h=0,t.i&&cN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=Io.prototype;L.add=function(t,e){Ai(this),this.i=null,t=dr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function HE(t,e){Ai(t),e=dr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function KE(t,e){return Ai(t),e=dr(t,e),t.g.has(e)}L.forEach=function(t,e){Ai(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};L.ta=function(){Ai(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};L.Z=function(t){Ai(this);let e=[];if(typeof t=="string")KE(this,t)&&(e=e.concat(this.g.get(dr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return Ai(this),this.i=null,t=dr(this,t),KE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function GE(t,e,n){HE(t,e),0<n.length&&(t.i=null,t.g.set(dr(t,e),$d(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function dr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function pN(t,e){e&&!t.j&&(Ai(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(HE(this,i),GE(this,s,n))},t)),t.j=e}var mN=class{constructor(t,e){this.g=t,this.map=e}};function QE(t){this.l=t||gN,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ka&&Y.g.Ka()&&Y.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var gN=10;function YE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function XE(t){return t.h?1:t.g?t.g.size:0}function yh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function rf(t,e){t.g?t.g.add(e):t.h=e}function JE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}QE.prototype.cancel=function(){if(this.i=ZE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ZE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return $d(t.i)}var _N=class{stringify(t){return Y.JSON.stringify(t,void 0)}parse(t){return Y.JSON.parse(t,void 0)}};function vN(){this.g=new _N}function yN(t,e,n){const i=n||"";try{$E(t,function(s,r){let o=s;Bo(s)&&(o=Xd(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function EN(t,e){const n=new dl;if(Y.Image){const i=new Image;i.onload=_a(ya,n,i,"TestLoadImage: loaded",!0,e),i.onerror=_a(ya,n,i,"TestLoadImage: error",!1,e),i.onabort=_a(ya,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=_a(ya,n,i,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function ya(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Qo(t){this.l=t.ec||null,this.j=t.ob||!1}Je(Qo,tf);Qo.prototype.g=function(){return new vl(this.l,this.j)};Qo.prototype.i=function(t){return function(){return t}}({});function vl(t,e){Xe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=of,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Je(vl,Xe);var of=0;L=vl.prototype;L.open=function(t,e){if(this.readyState!=of)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,wo(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Y).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yo(this)),this.readyState=of};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,wo(this)),this.g&&(this.readyState=3,wo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;eT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function eT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Yo(this):wo(this),this.readyState==3&&eT(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,Yo(this))};L.Ya=function(t){this.g&&(this.response=t,Yo(this))};L.ka=function(){this.g&&Yo(this)};function Yo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,wo(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function wo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(vl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var TN=Y.JSON.parse;function Ve(t){Xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=tT,this.L=this.M=!1}Je(Ve,Xe);var tT="",IN=/^https?$/i,wN=["POST","PUT"];L=Ve.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():mh.g(),this.C=this.u?$m(this.u):$m(mh),this.g.onreadystatechange=_t(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Km(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=Y.FormData&&t instanceof Y.FormData,!(0<=vE(wN,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{sT(this),0<this.B&&((this.L=bN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_t(this.ua,this)):this.A=ef(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Km(this,r)}};function bN(t){return $s&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof Bd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,rt(this,"timeout"),this.abort(8))};function Km(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,nT(t),yl(t)}function nT(t){t.F||(t.F=!0,rt(t,"complete"),rt(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,rt(this,"complete"),rt(this,"abort"),yl(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yl(this,!0)),Ve.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?iT(this):this.kb())};L.kb=function(){iT(this)};function iT(t){if(t.h&&typeof Bd<"u"&&(!t.C[1]||_n(t)!=4||t.da()!=2)){if(t.v&&_n(t)==4)ef(t.La,0,t);else if(rt(t,"readystatechange"),_n(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.I).match(WE)[1]||null;!s&&Y.self&&Y.self.location&&(s=Y.self.location.protocol.slice(0,-1)),i=!IN.test(s?s.toLowerCase():"")}n=i}if(n)rt(t,"complete"),rt(t,"success");else{t.m=6;try{var r=2<_n(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",nT(t)}}finally{yl(t)}}}}function yl(t,e){if(t.g){sT(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||rt(t,"ready");try{n.onreadystatechange=i}catch{}}}function sT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function _n(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),TN(e)}};function Gm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case tT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function RN(t){const e={};t=(t.g&&2<=_n(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(go(t[i]))continue;var n=Y1(t[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}B1(e,function(i){return i.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function rT(t){let e="";return Hd(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function af(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=rT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):xe(t,e,n))}function br(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function oT(t){this.Ga=0,this.j=[],this.l=new dl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=br("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=br("baseRetryDelayMs",5e3,t),this.hb=br("retryDelaySeedMs",1e4,t),this.eb=br("forwardChannelMaxRetries",2,t),this.xa=br("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new QE(t&&t.concurrentRequestLimit),this.Ja=new vN,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=oT.prototype;L.ra=8;L.H=1;function cf(t){if(aT(t),t.H==3){var e=t.W++,n=Kn(t.I);if(xe(n,"SID",t.K),xe(n,"RID",e),xe(n,"TYPE","terminate"),Xo(t,n),e=new Ko(t,t.l,e),e.L=2,e.v=_l(Kn(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon)try{n=Y.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=mT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Go(e)}fT(t)}function El(t){t.g&&(uf(t),t.g.cancel(),t.g=null)}function aT(t){El(t),t.u&&(Y.clearTimeout(t.u),t.u=null),yc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function Tl(t){if(!YE(t.i)&&!t.m){t.m=!0;var e=t.Na;vo||kE(),yo||(vo(),yo=!0),Jd.add(e,t),t.C=0}}function AN(t,e){return XE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Wo(_t(t.Na,t,e),dT(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Ko(this,this.l,t);let r=this.s;if(this.U&&(r?(r=IE(r),wE(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=cT(this,s,e),n=Kn(this.I),xe(n,"RID",t),xe(n,"CVER",22),this.F&&xe(n,"X-HTTP-Session-Id",this.F),Xo(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(rT(r)))+"&"+e:this.o&&af(n,this.o,r)),rf(this.i,s),this.bb&&xe(n,"TYPE","init"),this.P?(xe(n,"$req",e),xe(n,"SID","null"),s.aa=!0,_h(s,n,null)):_h(s,n,e),this.H=2}}else this.H==3&&(t?Qm(this,t):this.j.length==0||YE(this.i)||Qm(this))};function Qm(t,e){var n;e?n=e.m:n=t.W++;const i=Kn(t.I);xe(i,"SID",t.K),xe(i,"RID",n),xe(i,"AID",t.V),Xo(t,i),t.o&&t.s&&af(i,t.o,t.s),n=new Ko(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=cT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),rf(t.i,n),_h(n,i,e)}function Xo(t,e){t.na&&Hd(t.na,function(n,i){xe(e,i,n)}),t.h&&$E({},function(n,i){xe(e,i,n)})}function cT(t,e,n){n=Math.min(t.j.length,n);var i=t.h?_t(t.h.Va,t.h,t):null;e:{var s=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=r,0>l)r=Math.max(0,s[c].g-100),a=!1;else try{yN(u,o,"req"+l+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function lT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;vo||kE(),yo||(vo(),yo=!0),Jd.add(e,t),t.A=0}}function lf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Wo(_t(t.Ma,t),dT(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,uT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Wo(_t(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,It(10),El(this),uT(this))};function uf(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function uT(t){t.g=new Ko(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Kn(t.wa);xe(e,"RID","rpc"),xe(e,"SID",t.K),xe(e,"AID",t.V),xe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&xe(e,"TO",t.qa),xe(e,"TYPE","xmlhttp"),Xo(t,e),t.o&&t.s&&af(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=_l(Kn(e)),n.s=null,n.S=!0,UE(n,t)}L.ib=function(){this.v!=null&&(this.v=null,El(this),lf(this),It(19))};function yc(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function hT(t,e){var n=null;if(t.g==e){yc(t),uf(t),t.g=null;var i=2}else if(yh(t.i,e))n=e.F,JE(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=fl(),rt(i,new ME(i,n)),Tl(t)}else lT(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&AN(t,e)||i==2&&lf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Vi(t,5);break;case 4:Vi(t,10);break;case 3:Vi(t,6);break;default:Vi(t,2)}}}function dT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Vi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=_t(t.pb,t);n||(n=new Hi("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||_c(n,"https"),_l(n)),EN(n.toString(),i)}else It(2);t.H=0,t.h&&t.h.za(e),fT(t),aT(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),It(2)):(this.l.info("Failed to ping google.com"),It(1))};function fT(t){if(t.H=0,t.ma=[],t.h){const e=ZE(t.i);(e.length!=0||t.j.length!=0)&&(Fm(t.ma,e),Fm(t.ma,t.j),t.i.i.length=0,$d(t.j),t.j.length=0),t.h.ya()}}function pT(t,e,n){var i=n instanceof Hi?Kn(n):new Hi(n);if(i.g!="")e&&(i.g=e+"."+i.g),vc(i,i.m);else{var s=Y.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Hi(null);i&&_c(r,i),e&&(r.g=e),s&&vc(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&xe(i,n,e),xe(i,"VER",t.ra),Xo(t,i),i}function mT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ve(new Qo({ob:!0})):new Ve(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function gT(){}L=gT.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function Ec(){if($s&&!(10<=Number(F1)))throw Error("Environmental error: no available transport.")}Ec.prototype.g=function(t,e){return new Mt(t,e)};function Mt(t,e){Xe.call(this),this.g=new oT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!go(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!go(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new fr(this)}Je(Mt,Xe);Mt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;It(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=pT(t,null,t.Y),Tl(t)};Mt.prototype.close=function(){cf(this.g)};Mt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Xd(t),t=n);e.j.push(new mN(e.fb++,t)),e.H==3&&Tl(e)};Mt.prototype.N=function(){this.g.h=null,delete this.j,cf(this.g),delete this.g,Mt.$.N.call(this)};function _T(t){nf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Je(_T,nf);function vT(){sf.call(this),this.status=1}Je(vT,sf);function fr(t){this.g=t}Je(fr,gT);fr.prototype.Ba=function(){rt(this.g,"a")};fr.prototype.Aa=function(t){rt(this.g,new _T(t))};fr.prototype.za=function(t){rt(this.g,new vT)};fr.prototype.ya=function(){rt(this.g,"b")};function CN(){this.blockSize=-1}function on(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Je(on,CN);on.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function uu(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}on.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)uu(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){uu(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){uu(this,i),s=0;break}}this.h=s,this.i+=e};on.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function Te(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var SN={};function hf(t){return-128<=t&&128>t?M1(t,function(e){return new Te([e|0],0>e?-1:0)}):new Te([t|0],0>t?-1:0)}function vn(t){if(isNaN(t)||!isFinite(t))return xs;if(0>t)return nt(vn(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Eh;return new Te(e,0)}function yT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return nt(yT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=vn(Math.pow(e,8)),i=xs,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=vn(Math.pow(e,r)),i=i.R(r).add(vn(o))):(i=i.R(n),i=i.add(vn(o)))}return i}var Eh=4294967296,xs=hf(0),Th=hf(1),Ym=hf(16777216);L=Te.prototype;L.ea=function(){if(Ut(this))return-nt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Eh+i)*e,e*=Eh}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(zn(this))return"0";if(Ut(this))return"-"+nt(this).toString(t);for(var e=vn(Math.pow(t,6)),n=this,i="";;){var s=Ic(n,e).g;n=Tc(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,zn(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function zn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ut(t){return t.h==-1}L.X=function(t){return t=Tc(this,t),Ut(t)?-1:zn(t)?0:1};function nt(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new Te(n,~t.h).add(Th)}L.abs=function(){return Ut(this)?nt(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new Te(n,n[n.length-1]&-2147483648?-1:0)};function Tc(t,e){return t.add(nt(e))}L.R=function(t){if(zn(this)||zn(t))return xs;if(Ut(this))return Ut(t)?nt(this).R(nt(t)):nt(nt(this).R(t));if(Ut(t))return nt(this.R(nt(t)));if(0>this.X(Ym)&&0>t.X(Ym))return vn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*i+2*s]+=o*c,Ea(n,2*i+2*s),n[2*i+2*s+1]+=r*c,Ea(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,Ea(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,Ea(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new Te(n,0)};function Ea(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Rr(t,e){this.g=t,this.h=e}function Ic(t,e){if(zn(e))throw Error("division by zero");if(zn(t))return new Rr(xs,xs);if(Ut(t))return e=Ic(nt(t),e),new Rr(nt(e.g),nt(e.h));if(Ut(e))return e=Ic(t,nt(e)),new Rr(nt(e.g),e.h);if(30<t.g.length){if(Ut(t)||Ut(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Th,i=e;0>=i.X(t);)n=Xm(n),i=Xm(i);var s=ms(n,1),r=ms(i,1);for(i=ms(i,2),n=ms(n,2);!zn(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=ms(i,1),n=ms(n,1)}return e=Tc(t,s.R(e)),new Rr(s,e)}for(s=xs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=vn(n),o=r.R(e);Ut(o)||0<o.X(t);)n-=i,r=vn(n),o=r.R(e);zn(r)&&(r=Th),s=s.add(r),t=Tc(t,o)}return new Rr(s,t)}L.gb=function(t){return Ic(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new Te(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new Te(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new Te(n,this.h^t.h)};function Xm(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new Te(n,t.h)}function ms(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new Te(s,t.h)}Ec.prototype.createWebChannel=Ec.prototype.g;Mt.prototype.send=Mt.prototype.u;Mt.prototype.open=Mt.prototype.m;Mt.prototype.close=Mt.prototype.close;pl.NO_ERROR=0;pl.TIMEOUT=8;pl.HTTP_ERROR=6;qE.COMPLETE="complete";VE.EventType=Ho;Ho.OPEN="a";Ho.CLOSE="b";Ho.ERROR="c";Ho.MESSAGE="d";Xe.prototype.listen=Xe.prototype.O;Ve.prototype.listenOnce=Ve.prototype.P;Ve.prototype.getLastError=Ve.prototype.Sa;Ve.prototype.getLastErrorCode=Ve.prototype.Ia;Ve.prototype.getStatus=Ve.prototype.da;Ve.prototype.getResponseJson=Ve.prototype.Wa;Ve.prototype.getResponseText=Ve.prototype.ja;Ve.prototype.send=Ve.prototype.ha;Ve.prototype.setWithCredentials=Ve.prototype.Oa;on.prototype.digest=on.prototype.l;on.prototype.reset=on.prototype.reset;on.prototype.update=on.prototype.j;Te.prototype.add=Te.prototype.add;Te.prototype.multiply=Te.prototype.R;Te.prototype.modulo=Te.prototype.gb;Te.prototype.compare=Te.prototype.X;Te.prototype.toNumber=Te.prototype.ea;Te.prototype.toString=Te.prototype.toString;Te.prototype.getBits=Te.prototype.D;Te.fromNumber=vn;Te.fromString=yT;var PN=function(){return new Ec},kN=function(){return fl()},hu=pl,NN=qE,xN=os,Jm={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ON=Qo,Ta=VE,DN=Ve,LN=on,Os=Te;const Zm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pr="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new Do("@firebase/firestore");function Ar(){return es.logLevel}function V(t,...e){if(es.logLevel<=re.DEBUG){const n=e.map(df);es.debug(`Firestore (${pr}): ${t}`,...n)}}function Gn(t,...e){if(es.logLevel<=re.ERROR){const n=e.map(df);es.error(`Firestore (${pr}): ${t}`,...n)}}function Ws(t,...e){if(es.logLevel<=re.WARN){const n=e.map(df);es.warn(`Firestore (${pr}): ${t}`,...n)}}function df(t){if(typeof t=="string")return t;try{/**
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${pr}) INTERNAL ASSERTION FAILED: `+t;throw Gn(e),new Error(e)}function Oe(t,e){t||Q()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class qN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class VN{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let r=new $n;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new $n,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new $n)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Oe(typeof i.accessToken=="string"),new ET(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new ht(e)}}class FN{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class UN{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new FN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=r=>{r.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string"),this.R=n.token,new zN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function BN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=BN(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function me(t,e){return t<e?-1:t>e?1:0}function Hs(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Be(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Be(0,0))}static max(){return new X(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,i){n===void 0?n=0:n>e.length&&Q(),i===void 0?i=e.length-n:i>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return bo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bo?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends bo{construct(e,n,i){return new Le(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new z(b.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const $N=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends bo{construct(e,n,i){return new st(e,n,i)}static isValidIdentifier(e){return $N.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new z(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new z(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new z(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Le.fromString(e))}static fromName(e){return new W(Le.fromString(e).popFirst(5))}static empty(){return new W(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Le(e.slice()))}}function WN(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=X.fromTimestamp(i===1e9?new Be(n+1,0):new Be(n,i));return new Ti(s,W.empty(),e)}function HN(t){return new Ti(t.readTime,t.key,-1)}class Ti{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Ti(X.min(),W.empty(),-1)}static max(){return new Ti(X.max(),W.empty(),-1)}}function KN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
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
 */const GN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class QN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==GN)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,i)=>{n(e)})}static reject(e){return new C((n,i)=>{i(e)})}static waitFor(e){return new C((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},c=>i(c))}),o=!0,r===s&&n()})}static or(e){let n=C.resolve(!1);for(const i of e)n=n.next(s=>s?C.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new C((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,n){return new C((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function Zo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ff{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.se(i),this.oe=i=>n.writeSequenceNumber(i))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}ff._e=-1;function Il(t){return t==null}function wc(t){return t===0&&1/t==-1/0}function YN(t){return typeof t=="number"&&Number.isInteger(t)&&!wc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function IT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ia(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ia(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ia(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ia(this.root,e,this.comparator,!0)}}class Ia{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??et.RED,this.left=s??et.EMPTY,this.right=r??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new et(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,i,s,r){return this}insert(e,n,i){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new tg(this.data.getIterator())}getIteratorFrom(e){return new tg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class tg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Jt{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new ot(st.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hs(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class wT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new wT("Invalid base64 string: "+r):r}}(e);return new Et(n)}static fromUint8Array(e){const n=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const XN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ii(t){if(Oe(!!t),typeof t=="string"){let e=0;const n=XN.exec(t);if(Oe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ts(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
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
 */function pf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function mf(t){const e=t.mapValue.fields.__previous_value__;return pf(e)?mf(e):e}function Ro(t){const e=Ii(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,n,i,s,r,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Ao{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ao("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ao&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const wa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ns(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pf(t)?4:ZN(t)?9007199254740991:10:Q()}function Cn(t,e){if(t===e)return!0;const n=ns(t);if(n!==ns(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ro(t).isEqual(Ro(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=Ii(s.timestampValue),a=Ii(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return ts(s.bytesValue).isEqual(ts(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return ze(s.geoPointValue.latitude)===ze(r.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return ze(s.integerValue)===ze(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=ze(s.doubleValue),a=ze(r.doubleValue);return o===a?wc(o)===wc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Hs(t.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:return function(s,r){const o=s.mapValue.fields||{},a=r.mapValue.fields||{};if(eg(o)!==eg(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Cn(o[c],a[c])))return!1;return!0}(t,e);default:return Q()}}function Co(t,e){return(t.values||[]).find(n=>Cn(n,e))!==void 0}function Ks(t,e){if(t===e)return 0;const n=ns(t),i=ns(e);if(n!==i)return me(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=ze(r.integerValue||r.doubleValue),c=ze(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return ng(t.timestampValue,e.timestampValue);case 4:return ng(Ro(t),Ro(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(r,o){const a=ts(r),c=ts(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=me(a[l],c[l]);if(u!==0)return u}return me(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=me(ze(r.latitude),ze(o.latitude));return a!==0?a:me(ze(r.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Ks(a[l],c[l]);if(u)return u}return me(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===wa.mapValue&&o===wa.mapValue)return 0;if(r===wa.mapValue)return 1;if(o===wa.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=me(c[h],u[h]);if(d!==0)return d;const f=Ks(a[c[h]],l[u[h]]);if(f!==0)return f}return me(c.length,u.length)}(t.mapValue,e.mapValue);default:throw Q()}}function ng(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=Ii(t),i=Ii(e),s=me(n.seconds,i.seconds);return s!==0?s:me(n.nanos,i.nanos)}function Gs(t){return Ih(t)}function Ih(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=Ii(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ts(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",s=!0;for(const r of n.values||[])s?s=!1:i+=",",i+=Ih(r);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Ih(n.fields[o])}`;return s+"}"}(t.mapValue):Q()}function wh(t){return!!t&&"integerValue"in t}function gf(t){return!!t&&"arrayValue"in t}function ig(t){return!!t&&"nullValue"in t}function sg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qa(t){return!!t&&"mapValue"in t}function Kr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return mr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Kr(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Kr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ZN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Kr(n)}setAll(e){let n=st.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Kr(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];qa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){mr(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new zt(Kr(this.value))}}function bT(t){const e=[];return mr(t.fields,(n,i)=>{const s=new st([n]);if(qa(i)){const r=bT(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new pt(e,0,X.min(),X.min(),X.min(),zt.empty(),0)}static newFoundDocument(e,n,i,s){return new pt(e,1,n,X.min(),i,s,0)}static newNoDocument(e,n){return new pt(e,2,n,X.min(),X.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,X.min(),X.min(),zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bc{constructor(e,n){this.position=e,this.inclusive=n}}function rg(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=W.comparator(W.fromName(o.referenceValue),n.key):i=Ks(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function og(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Rc{constructor(e,n="asc"){this.field=e,this.dir=n}}function ex(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class RT{}class We extends RT{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new nx(e,n,i):n==="array-contains"?new rx(e,i):n==="in"?new ox(e,i):n==="not-in"?new ax(e,i):n==="array-contains-any"?new cx(e,i):new We(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new ix(e,i):new sx(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ks(n,this.value)):n!==null&&ns(this.value)===ns(n)&&this.matchesComparison(Ks(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Sn extends RT{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Sn(e,n)}matches(e){return AT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function AT(t){return t.op==="and"}function CT(t){return tx(t)&&AT(t)}function tx(t){for(const e of t.filters)if(e instanceof Sn)return!1;return!0}function bh(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+Gs(t.value);if(CT(t))return t.filters.map(e=>bh(e)).join(",");{const e=t.filters.map(n=>bh(n)).join(",");return`${t.op}(${e})`}}function ST(t,e){return t instanceof We?function(i,s){return s instanceof We&&i.op===s.op&&i.field.isEqual(s.field)&&Cn(i.value,s.value)}(t,e):t instanceof Sn?function(i,s){return s instanceof Sn&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,a)=>r&&ST(o,s.filters[a]),!0):!1}(t,e):void Q()}function PT(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${Gs(n.value)}`}(t):t instanceof Sn?function(n){return n.op.toString()+" {"+n.getFilters().map(PT).join(" ,")+"}"}(t):"Filter"}class nx extends We{constructor(e,n,i){super(e,n,i),this.key=W.fromName(i.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class ix extends We{constructor(e,n){super(e,"in",n),this.keys=kT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class sx extends We{constructor(e,n){super(e,"not-in",n),this.keys=kT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>W.fromName(i.referenceValue))}class rx extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return gf(n)&&Co(n.arrayValue,this.value)}}class ox extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Co(this.value.arrayValue,n)}}class ax extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Co(this.value.arrayValue,n)}}class cx extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!gf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Co(this.value.arrayValue,i))}}/**
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
 */class lx{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ce=null}}function ag(t,e=null,n=[],i=[],s=null,r=null,o=null){return new lx(t,e,n,i,s,r,o)}function _f(t){const e=te(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>bh(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Il(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Gs(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Gs(i)).join(",")),e.ce=n}return e.ce}function vf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ex(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ST(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!og(t.startAt,e.startAt)&&og(t.endAt,e.endAt)}function Rh(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function ux(t,e,n,i,s,r,o,a){return new wl(t,e,n,i,s,r,o,a)}function bl(t){return new wl(t)}function cg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function hx(t){return t.collectionGroup!==null}function Gr(t){const e=te(t);if(e.le===null){e.le=[];const n=new Set;for(const r of e.explicitOrderBy)e.le.push(r),n.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ot(st.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.le.push(new Rc(r,i))}),n.has(st.keyField().canonicalString())||e.le.push(new Rc(st.keyField(),i))}return e.le}function Tn(t){const e=te(t);return e.he||(e.he=dx(e,Gr(t))),e.he}function dx(t,e){if(t.limitType==="F")return ag(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new Rc(s.field,r)});const n=t.endAt?new bc(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new bc(t.startAt.position,t.startAt.inclusive):null;return ag(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function Ah(t,e,n){return new wl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rl(t,e){return vf(Tn(t),Tn(e))&&t.limitType===e.limitType}function NT(t){return`${_f(Tn(t))}|lt:${t.limitType}`}function gs(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(s=>PT(s)).join(", ")}]`),Il(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(s=>Gs(s)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(s=>Gs(s)).join(",")),`Target(${i})`}(Tn(t))}; limitType=${t.limitType})`}function Al(t,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):W.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(t,e)&&function(i,s){for(const r of Gr(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(i,s){return!(i.startAt&&!function(o,a,c){const l=rg(o,a,c);return o.inclusive?l<=0:l<0}(i.startAt,Gr(i),s)||i.endAt&&!function(o,a,c){const l=rg(o,a,c);return o.inclusive?l>=0:l>0}(i.endAt,Gr(i),s))}(t,e)}function fx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xT(t){return(e,n)=>{let i=!1;for(const s of Gr(t)){const r=px(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function px(t,e,n){const i=t.field.isKeyField()?W.comparator(e.key,n.key):function(r,o,a){const c=o.data.field(r),l=a.data.field(r);return c!==null&&l!==null?Ks(c,l):Q()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){mr(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return IT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx=new qe(W.comparator);function Qn(){return mx}const OT=new qe(W.comparator);function Lr(...t){let e=OT;for(const n of t)e=e.insert(n.key,n);return e}function DT(t){let e=OT;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Fi(){return Qr()}function LT(){return Qr()}function Qr(){return new gr(t=>t.toString(),(t,e)=>t.isEqual(e))}const gx=new qe(W.comparator),_x=new ot(W.comparator);function oe(...t){let e=_x;for(const n of t)e=e.add(n);return e}const vx=new ot(me);function yx(){return vx}/**
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
 */function MT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wc(e)?"-0":e}}function qT(t){return{integerValue:""+t}}function Ex(t,e){return YN(e)?qT(e):MT(t,e)}/**
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
 */class Cl{constructor(){this._=void 0}}function Tx(t,e,n){return t instanceof Ac?function(s,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&pf(r)&&(r=mf(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof So?FT(t,e):t instanceof Po?UT(t,e):function(s,r){const o=VT(s,r),a=lg(o)+lg(s.Ie);return wh(o)&&wh(s.Ie)?qT(a):MT(s.serializer,a)}(t,e)}function Ix(t,e,n){return t instanceof So?FT(t,e):t instanceof Po?UT(t,e):n}function VT(t,e){return t instanceof Cc?function(i){return wh(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class Ac extends Cl{}class So extends Cl{constructor(e){super(),this.elements=e}}function FT(t,e){const n=zT(e);for(const i of t.elements)n.some(s=>Cn(s,i))||n.push(i);return{arrayValue:{values:n}}}class Po extends Cl{constructor(e){super(),this.elements=e}}function UT(t,e){let n=zT(e);for(const i of t.elements)n=n.filter(s=>!Cn(s,i));return{arrayValue:{values:n}}}class Cc extends Cl{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function lg(t){return ze(t.integerValue||t.doubleValue)}function zT(t){return gf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function wx(t,e){return t.field.isEqual(e.field)&&function(i,s){return i instanceof So&&s instanceof So||i instanceof Po&&s instanceof Po?Hs(i.elements,s.elements,Cn):i instanceof Cc&&s instanceof Cc?Cn(i.Ie,s.Ie):i instanceof Ac&&s instanceof Ac}(t.transform,e.transform)}class bx{constructor(e,n){this.version=e,this.transformResults=n}}class Wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wn}static exists(e){return new Wn(void 0,e)}static updateTime(e){return new Wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Va(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Sl{}function jT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $T(t.key,Wn.none()):new ea(t.key,t.data,Wn.none());{const n=t.data,i=zt.empty();let s=new ot(st.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new as(t.key,i,new Jt(s.toArray()),Wn.none())}}function Rx(t,e,n){t instanceof ea?function(s,r,o){const a=s.value.clone(),c=hg(s.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof as?function(s,r,o){if(!Va(s.precondition,r))return void r.convertToUnknownDocument(o.version);const a=hg(s.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(BT(s)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Yr(t,e,n,i){return t instanceof ea?function(r,o,a,c){if(!Va(r.precondition,o))return a;const l=r.value.clone(),u=dg(r.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof as?function(r,o,a,c){if(!Va(r.precondition,o))return a;const l=dg(r.fieldTransforms,c,o),u=o.data;return u.setAll(BT(r)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,i):function(r,o,a){return Va(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Ax(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=VT(i.transform,s||null);r!=null&&(n===null&&(n=zt.empty()),n.set(i.field,r))}return n||null}function ug(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Hs(i,s,(r,o)=>wx(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ea extends Sl{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class as extends Sl{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function BT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function hg(t,e,n){const i=new Map;Oe(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,Ix(o,a,n[s]))}return i}function dg(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,Tx(r,o,e))}return i}class $T extends Sl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cx extends Sl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&Rx(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Yr(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Yr(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=LT();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const c=jT(o,a);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&Hs(this.mutations,e.mutations,(n,i)=>ug(n,i))&&Hs(this.baseMutations,e.baseMutations,(n,i)=>ug(n,i))}}class yf{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){Oe(e.mutations.length===i.length);let s=function(){return gx}();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new yf(e,n,i,s)}}/**
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
 */class Px{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class kx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,ce;function Nx(t){switch(t){default:return Q();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function WT(t){if(t===void 0)return Gn("GRPC error has no .code"),b.UNKNOWN;switch(t){case Ue.OK:return b.OK;case Ue.CANCELLED:return b.CANCELLED;case Ue.UNKNOWN:return b.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return b.INTERNAL;case Ue.UNAVAILABLE:return b.UNAVAILABLE;case Ue.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Ue.NOT_FOUND:return b.NOT_FOUND;case Ue.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Ue.ABORTED:return b.ABORTED;case Ue.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Ue.DATA_LOSS:return b.DATA_LOSS;default:return Q()}}(ce=Ue||(Ue={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function xx(){return new TextEncoder}/**
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
 */const Ox=new Os([4294967295,4294967295],0);function fg(t){const e=xx().encode(t),n=new LN;return n.update(e),new Uint8Array(n.digest())}function pg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Os([n,i],0),new Os([s,r],0)]}class Ef{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Mr(`Invalid padding: ${n}`);if(i<0)throw new Mr(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Mr(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new Mr(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Os.fromNumber(this.Te)}de(e,n,i){let s=e.add(n.multiply(Os.fromNumber(i)));return s.compare(Ox)===1&&(s=new Os([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=fg(e),[i,s]=pg(n);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);if(!this.Ae(o))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Ef(r,s,n);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=fg(e),[i,s]=pg(n);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);this.Re(o)}}Re(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class Mr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,ta.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Pl(X.min(),s,new qe(me),Qn(),oe())}}class ta{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new ta(i,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n,i,s){this.Ve=e,this.removedTargetIds=n,this.key=i,this.me=s}}class HT{constructor(e,n){this.targetId=e,this.fe=n}}class KT{constructor(e,n,i=Et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class mg{constructor(){this.ge=0,this.pe=_g(),this.ye=Et.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=oe(),n=oe(),i=oe();return this.pe.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:Q()}}),new ta(this.ye,this.we,e,n,i)}Fe(){this.Se=!1,this.pe=_g()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class Dx{constructor(e){this.Le=e,this.ke=new Map,this.qe=Qn(),this.Qe=gg(),this.Ke=new qe(me)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const i=this.ze(n);switch(e.state){case 0:this.je(n)&&i.Ce(e.resumeToken);break;case 1:i.Ne(),i.be||i.Fe(),i.Ce(e.resumeToken);break;case 2:i.Ne(),i.be||this.removeTarget(n);break;case 3:this.je(n)&&(i.Be(),i.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),i.Ce(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((i,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,i=e.fe.count,s=this.Ye(n);if(s){const r=s.target;if(Rh(r))if(i===0){const o=new W(r.path);this.We(n,o,pt.newNoDocument(o,X.min()))}else Oe(i===1);else{const o=this.Ze(n);if(o!==i){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=n;let o,a;try{o=ts(i).toUint8Array()}catch(c){if(c instanceof wT)return Ws("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Ef(o,s,r)}catch(c){return Ws(c instanceof Mr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,i){return n.fe.count===i-this.rt(e,n.targetId)?0:2}rt(e,n){const i=this.Le.getRemoteKeysForTarget(n);let s=0;return i.forEach(r=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.We(n,r,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((r,o)=>{const a=this.Ye(o);if(a){if(r.current&&Rh(a.target)){const c=new W(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,pt.newNoDocument(c,e))}r.De&&(n.set(o,r.ve()),r.Fe())}});let i=oe();this.Qe.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(r))}),this.qe.forEach((r,o)=>o.setReadTime(e));const s=new Pl(e,n,this.Ke,this.qe,i);return this.qe=Qn(),this.Qe=gg(),this.Ke=new qe(me),s}Ue(e,n){if(!this.je(e))return;const i=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,i),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,i){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),i&&(this.qe=this.qe.insert(n,i))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new mg,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new ot(me),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new mg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function gg(){return new qe(W.comparator)}function _g(){return new qe(W.comparator)}const Lx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Mx=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),qx=(()=>({and:"AND",or:"OR"}))();class Vx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ch(t,e){return t.useProto3Json||Il(e)?e:{value:e}}function Sc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function GT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Fx(t,e){return Sc(t,e.toTimestamp())}function In(t){return Oe(!!t),X.fromTimestamp(function(n){const i=Ii(n);return new Be(i.seconds,i.nanos)}(t))}function Tf(t,e){return function(i){return new Le(["projects",i.projectId,"databases",i.database])}(t).child("documents").child(e).canonicalString()}function QT(t){const e=Le.fromString(t);return Oe(ZT(e)),e}function Sh(t,e){return Tf(t.databaseId,e.path)}function du(t,e){const n=QT(e);if(n.get(1)!==t.databaseId.projectId)throw new z(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(YT(n))}function Ph(t,e){return Tf(t.databaseId,e)}function Ux(t){const e=QT(t);return e.length===4?Le.emptyPath():YT(e)}function kh(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function YT(t){return Oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function vg(t,e,n){return{name:Sh(t,e),fields:n.value.mapValue.fields}}function zx(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,u){return l.useProto3Json?(Oe(u===void 0||typeof u=="string"),Et.fromBase64String(u||"")):(Oe(u===void 0||u instanceof Uint8Array),Et.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?b.UNKNOWN:WT(l.code);return new z(u,l.message||"")}(o);n=new KT(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=du(t,i.document.name),r=In(i.document.updateTime),o=i.document.createTime?In(i.document.createTime):X.min(),a=new zt({mapValue:{fields:i.document.fields}}),c=pt.newFoundDocument(s,r,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new Fa(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=du(t,i.document),r=i.readTime?In(i.readTime):X.min(),o=pt.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Fa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=du(t,i.document),r=i.removedTargetIds||[];n=new Fa([],r,s,null)}else{if(!("filter"in e))return Q();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new kx(s,r),a=i.targetId;n=new HT(a,o)}}return n}function jx(t,e){let n;if(e instanceof ea)n={update:vg(t,e.key,e.value)};else if(e instanceof $T)n={delete:Sh(t,e.key)};else if(e instanceof as)n={update:vg(t,e.key,e.data),updateMask:Xx(e.fieldMask)};else{if(!(e instanceof Cx))return Q();n={verify:Sh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,o){const a=o.transform;if(a instanceof Ac)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof So)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Po)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Cc)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw Q()}(0,i))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Fx(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Q()}(t,e.precondition)),n}function Bx(t,e){return t&&t.length>0?(Oe(e!==void 0),t.map(n=>function(s,r){let o=s.updateTime?In(s.updateTime):In(r);return o.isEqual(X.min())&&(o=In(r)),new bx(o,s.transformResults||[])}(n,e))):[]}function $x(t,e){return{documents:[Ph(t,e.path)]}}function Wx(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Ph(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ph(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(c){if(c.length!==0)return JT(Sn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:_s(h.field),direction:Gx(h.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Ch(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Hx(t){let e=Ux(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Oe(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(h){const d=XT(h);return d instanceof Sn&&CT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new Rc(vs(g.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Il(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new bc(f,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new bc(f,d)}(n.endAt)),ux(e,s,o,r,a,"F",c,l)}function Kx(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function XT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=vs(n.unaryFilter.field);return We.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=vs(n.unaryFilter.field);return We.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=vs(n.unaryFilter.field);return We.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vs(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return We.create(vs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Sn.create(n.compositeFilter.filters.map(i=>XT(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function Gx(t){return Lx[t]}function Qx(t){return Mx[t]}function Yx(t){return qx[t]}function _s(t){return{fieldPath:t.canonicalString()}}function vs(t){return st.fromServerFormat(t.fieldPath)}function JT(t){return t instanceof We?function(n){if(n.op==="=="){if(sg(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NAN"}};if(ig(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(sg(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NAN"}};if(ig(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_s(n.field),op:Qx(n.op),value:n.value}}}(t):t instanceof Sn?function(n){const i=n.getFilters().map(s=>JT(s));return i.length===1?i[0]:{compositeFilter:{op:Yx(n.op),filters:i}}}(t):Q()}function Xx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ZT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,i,s,r=X.min(),o=X.min(),a=Et.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new ci(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e){this.ut=e}}function Zx(t){const e=Hx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ah(e,e.limit,"L"):e}/**
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
 */class eO{constructor(){this.on=new tO}addToCollectionParentIndex(e,n){return this.on.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Ti.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Ti.min())}updateCollectionGroup(e,n,i){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class tO{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new ot(Le.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new ot(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Qs(0)}static Nn(){return new Qs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(){this.changes=new gr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?C.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class iO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&Yr(i.mutation,s,Jt.empty(),Be.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,oe()).next(()=>i))}getLocalViewOfDocuments(e,n,i=oe()){const s=Fi();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=Lr();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=Fi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,oe()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=Qn();const o=Qr(),a=function(){return Qr()}();return n.forEach((c,l)=>{const u=i.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof as)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Yr(u.mutation,l,u.mutation.getFieldMask(),Be.now())):o.set(l.key,Jt.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new iO(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Qr();let s=new qe((o,a)=>o-a),r=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=i.get(c)||Jt.empty();u=a.applyToLocalView(l,u),i.set(c,u);const h=(s.get(a.batchId)||oe()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=LT();u.forEach(d=>{if(!r.has(d)){const f=jT(n.get(d),i.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return C.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,s){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):hx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,s):this.getDocumentsMatchingCollectionQuery(e,n,i,s)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):C.resolve(Fi());let a=-1,c=r;return o.next(l=>C.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?C.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,oe())).next(u=>({batchId:a,changes:DT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(i=>{let s=Lr();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i,s){const r=n.collectionGroup;let o=Lr();return this.indexManager.getCollectionParents(e,r).next(a=>C.forEach(a,c=>{const l=function(h,d){return new wl(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,i,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,r,s))).next(o=>{r.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,pt.newInvalidDocument(u)))});let a=Lr();return o.forEach((c,l)=>{const u=r.get(c);u!==void 0&&Yr(u.mutation,l,Jt.empty(),Be.now()),Al(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class rO{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return C.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:In(s.createTime)}}(n)),C.resolve()}getNamedQuery(e,n){return C.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:Zx(s.bundledQuery),readTime:In(s.readTime)}}(n)),C.resolve()}}/**
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
 */class oO{constructor(){this.overlays=new qe(W.comparator),this.lr=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Fi();return C.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.lt(e,n,r)}),C.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.lr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.lr.delete(i)),C.resolve()}getOverlaysForCollection(e,n,i){const s=Fi(),r=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return C.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new qe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>i){let u=r.get(l.largestBatchId);u===null&&(u=Fi(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Fi(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return C.resolve(a)}lt(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(i.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Px(n,i));let r=this.lr.get(n);r===void 0&&(r=oe(),this.lr.set(n,r)),this.lr.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(){this.hr=new ot(Ge.Pr),this.Ir=new ot(Ge.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const i=new Ge(e,n);this.hr=this.hr.add(i),this.Ir=this.Ir.add(i)}Er(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.dr(new Ge(e,n))}Ar(e,n){e.forEach(i=>this.removeReference(i,n))}Rr(e){const n=new W(new Le([])),i=new Ge(n,e),s=new Ge(n,e+1),r=[];return this.Ir.forEachInRange([i,s],o=>{this.dr(o),r.push(o.key)}),r}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new W(new Le([])),i=new Ge(n,e),s=new Ge(n,e+1);let r=oe();return this.Ir.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ge(e,0),i=this.hr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Ge{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return W.comparator(e.key,n.key)||me(e.gr,n.gr)}static Tr(e,n){return me(e.gr,n.gr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new ot(Ge.Pr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Sx(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new Ge(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.Sr(i),r=s<0?0:s;return C.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Ge(n,0),s=new Ge(n,Number.POSITIVE_INFINITY),r=[];return this.yr.forEachInRange([i,s],o=>{const a=this.wr(o.gr);r.push(a)}),C.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new ot(me);return n.forEach(s=>{const r=new Ge(s,0),o=new Ge(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([r,o],a=>{i=i.add(a.gr)})}),C.resolve(this.br(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;W.isDocumentKey(r)||(r=r.child(""));const o=new Ge(new W(r),0);let a=new ot(me);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),C.resolve(this.br(a))}br(e){const n=[];return e.forEach(i=>{const s=this.wr(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Oe(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.yr;return C.forEach(n.mutations,s=>{const r=new Ge(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=i})}Fn(e){}containsKey(e,n){const i=new Ge(n,0),s=this.yr.firstAfterOrEqual(i);return C.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e){this.Cr=e,this.docs=function(){return new qe(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return C.resolve(i?i.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let i=Qn();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():pt.newInvalidDocument(s))}),C.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=Qn();const o=n.path,a=new W(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||KN(HN(u),i)<=0||(s.has(u.key)||Al(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return C.resolve(r)}getAllFromCollectionGroup(e,n,i,s){Q()}vr(e,n){return C.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new lO(this)}getSize(e){return C.resolve(this.size)}}class lO extends nO{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(i)}),C.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e){this.persistence=e,this.Fr=new gr(n=>_f(n),vf),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Mr=0,this.Or=new If,this.targetCount=0,this.Nr=Qs.On()}forEachTarget(e,n){return this.Fr.forEach((i,s)=>n(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Mr&&(this.Mr=n),C.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Qs(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.kn(n),C.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Fr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),C.waitFor(r).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const i=this.Fr.get(n)||null;return C.resolve(i)}addMatchingKeys(e,n,i){return this.Or.Er(n,i),C.resolve()}removeMatchingKeys(e,n,i){this.Or.Ar(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),C.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),C.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Or.mr(n);return C.resolve(i)}containsKey(e,n){return C.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e,n){this.Br={},this.overlays={},this.Lr=new ff(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new uO(this),this.indexManager=new eO,this.remoteDocumentCache=function(s){return new cO(s)}(i=>this.referenceDelegate.Qr(i)),this.serializer=new Jx(n),this.Kr=new rO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new oO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Br[e.toKey()];return i||(i=new aO(n,this.referenceDelegate),this.Br[e.toKey()]=i),i}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,i){V("MemoryPersistence","Starting transaction:",e);const s=new dO(this.Lr.next());return this.referenceDelegate.$r(),i(s).next(r=>this.referenceDelegate.Ur(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Wr(e,n){return C.or(Object.values(this.Br).map(i=>()=>i.containsKey(e,n)))}}class dO extends QN{constructor(e){super(),this.currentSequenceNumber=e}}class wf{constructor(e){this.persistence=e,this.Gr=new If,this.zr=null}static jr(e){return new wf(e)}get Hr(){if(this.zr)return this.zr;throw Q()}addReference(e,n,i){return this.Gr.addReference(i,n),this.Hr.delete(i.toString()),C.resolve()}removeReference(e,n,i){return this.Gr.removeReference(i,n),this.Hr.add(i.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),C.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.Hr.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Hr,i=>{const s=W.fromPath(i);return this.Jr(e,s).next(r=>{r||n.removeEntry(s,X.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(i=>{i?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return C.or([()=>C.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.ki=i,this.qi=s}static Qi(e,n){let i=oe(),s=oe();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new bf(e,n.fromCache,i,s)}}/**
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
 */class fO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class pO{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,i,s){const r={result:null};return this.zi(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.ji(e,n,s,i).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new fO;return this.Hi(e,n,o).next(a=>{if(r.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>r.result)}Ji(e,n,i,s){return i.documentReadCount<this.Ui?(Ar()<=re.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),C.resolve()):(Ar()<=re.DEBUG&&V("QueryEngine","Query:",gs(n),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Wi*s?(Ar()<=re.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tn(n))):C.resolve())}zi(e,n){if(cg(n))return C.resolve(null);let i=Tn(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ah(n,null,"F"),i=Tn(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=oe(...r);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,Ah(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,i,s){return cg(n)||s.isEqual(X.min())?C.resolve(null):this.Gi.getDocuments(e,i).next(r=>{const o=this.Yi(n,r);return this.Zi(n,o,i,s)?C.resolve(null):(Ar()<=re.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),gs(n)),this.Xi(e,o,n,WN(s,-1)).next(a=>a))})}Yi(e,n){let i=new ot(xT(e));return n.forEach((s,r)=>{Al(e,r)&&(i=i.add(r))}),i}Zi(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Hi(e,n,i){return Ar()<=re.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",gs(n)),this.Gi.getDocumentsMatchingQuery(e,n,Ti.min(),i)}Xi(e,n,i,s){return this.Gi.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class mO{constructor(e,n,i,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new qe(me),this.ns=new gr(r=>_f(r),vf),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(i)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sO(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function gO(t,e,n,i){return new mO(t,e,n,i)}async function eI(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.os(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let c=oe();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(i,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function _O(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let f=C.resolve();return d.forEach(g=>{f=f.next(()=>u.getEntry(c,g)).next(v=>{const y=l.docVersions.get(g);Oe(y!==null),v.version.compareTo(y)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let c=oe();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function tI(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function vO(t,e){const n=te(t),i=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Et.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,i)),s=s.insert(h,f),function(v,y,I){return v.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,f,u)&&a.push(n.qr.updateTargetData(r,f))});let c=Qn(),l=oe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(yO(r,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!i.isEqual(X.min())){const u=n.qr.getLastRemoteSnapshotVersion(r).next(h=>n.qr.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return C.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.ts=s,r))}function yO(t,e,n){let i=oe(),s=oe();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=Qn();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function EO(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function TO(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.qr.getTargetData(i,e).next(r=>r?(s=r,C.resolve(s)):n.qr.allocateTargetId(i).next(o=>(s=new ci(e,o,"TargetPurposeListen",i.currentSequenceNumber),n.qr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.ts.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(i.targetId,i),n.ns.set(e,i.targetId)),i})}async function Nh(t,e,n){const i=te(t),s=i.ts.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Zo(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.ts=i.ts.remove(e),i.ns.delete(s.target)}function yg(t,e,n){const i=te(t);let s=X.min(),r=oe();return i.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=te(c),d=h.ns.get(u);return d!==void 0?C.resolve(h.ts.get(d)):h.qr.getTargetData(l,u)}(i,o,Tn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>i.es.getDocumentsMatchingQuery(o,e,n?s:X.min(),n?r:oe())).next(a=>(IO(i,fx(e),a),{documents:a,ls:r})))}function IO(t,e,n){let i=t.rs.get(e)||X.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.rs.set(e,i)}class Eg{constructor(){this.activeTargetIds=yx()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wO{constructor(){this.eo=new Eg,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,i){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Eg,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class bO{ro(e){}shutdown(){}}/**
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
 */class Tg{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ba=null;function fu(){return ba===null?ba=function(){return 268435456+Math.round(2147483648*Math.random())}():ba++,"0x"+ba.toString(16)}/**
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
 */const RO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class CO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=i+"://"+n.host,this.fo=`projects/${s}/databases/${r}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}get yo(){return!1}wo(n,i,s,r,o){const a=fu(),c=this.So(n,i);V("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,r,o),this.Do(n,c,l,s).then(u=>(V("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Ws("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Co(n,i,s,r,o,a){return this.wo(n,i,s,r,o)}bo(n,i,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,o)=>n[o]=r),s&&s.headers.forEach((r,o)=>n[o]=r)}So(n,i){const s=RO[n];return`${this.mo}/v1/${i}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,i,s){const r=fu();return new Promise((o,a)=>{const c=new DN;c.setWithCredentials(!0),c.listenOnce(NN.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case hu.NO_ERROR:const u=c.getResponseJson();V(ut,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case hu.TIMEOUT:V(ut,`RPC '${e}' ${r} timed out`),a(new z(b.DEADLINE_EXCEEDED,"Request time out"));break;case hu.HTTP_ERROR:const h=c.getStatus();if(V(ut,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(y){const I=y.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(I)>=0?I:b.UNKNOWN}(f.status);a(new z(g,f.message))}else a(new z(b.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new z(b.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{V(ut,`RPC '${e}' ${r} completed.`)}});const l=JSON.stringify(s);V(ut,`RPC '${e}' ${r} sending request:`,s),c.send(n,"POST",l,i,15)})}vo(e,n,i){const s=fu(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=PN(),a=kN(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new ON({})),this.bo(c.initMessageHeaders,n,i),c.encodeInitMessageHeaders=!0;const u=r.join("");V(ut,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const g=new AO({co:y=>{f?V(ut,`Not sending because RPC '${e}' stream ${s} is closed:`,y):(d||(V(ut,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),V(ut,`RPC '${e}' stream ${s} sending:`,y),h.send(y))},lo:()=>h.close()}),v=(y,I,P)=>{y.listen(I,k=>{try{P(k)}catch(R){setTimeout(()=>{throw R},0)}})};return v(h,Ta.EventType.OPEN,()=>{f||V(ut,`RPC '${e}' stream ${s} transport opened.`)}),v(h,Ta.EventType.CLOSE,()=>{f||(f=!0,V(ut,`RPC '${e}' stream ${s} transport closed`),g.Ro())}),v(h,Ta.EventType.ERROR,y=>{f||(f=!0,Ws(ut,`RPC '${e}' stream ${s} transport errored:`,y),g.Ro(new z(b.UNAVAILABLE,"The operation could not be completed")))}),v(h,Ta.EventType.MESSAGE,y=>{var I;if(!f){const P=y.data[0];Oe(!!P);const k=P,R=k.error||((I=k[0])===null||I===void 0?void 0:I.error);if(R){V(ut,`RPC '${e}' stream ${s} received error:`,R);const H=R.status;let ie=function(ne){const Ie=Ue[ne];if(Ie!==void 0)return WT(Ie)}(H),he=R.message;ie===void 0&&(ie=b.INTERNAL,he="Unknown error status: "+H+" with message "+R.message),f=!0,g.Ro(new z(ie,he)),h.close()}else V(ut,`RPC '${e}' stream ${s} received:`,P),g.Vo(P)}}),v(a,xN.STAT_EVENT,y=>{y.stat===Jm.PROXY?V(ut,`RPC '${e}' stream ${s} detected buffering proxy`):y.stat===Jm.NOPROXY&&V(ut,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.Ao()},0),g}}function pu(){return typeof document<"u"?document:null}/**
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
 */function kl(t){return new Vx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n,i=1e3,s=1.5,r=6e4){this.si=e,this.timerId=n,this.Fo=i,this.Mo=s,this.xo=r,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),i=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-i);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n,i,s,r,o,a,c){this.si=e,this.Ko=i,this.$o=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new nI(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Gn(n.toString()),Gn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Uo===n&&this.s_(i,s)},i=>{e(()=>{const s=new z(b.UNKNOWN,"Fetching auth token failed: "+i.message);return this.o_(s)})})}s_(e,n){const i=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{i(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{i(()=>this.o_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SO extends iI{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=zx(this.serializer,e),i=function(r){if(!("targetChange"in r))return X.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?In(o.readTime):X.min()}(e);return this.listener.a_(n,i)}u_(e){const n={};n.database=kh(this.serializer),n.addTarget=function(r,o){let a;const c=o.target;if(a=Rh(c)?{documents:$x(r,c)}:{query:Wx(r,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=GT(r,o.resumeToken);const l=Ch(r,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=Sc(r,o.snapshotVersion.toTimestamp());const l=Ch(r,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const i=Kx(this.serializer,e);i&&(n.labels=i),this.e_(n)}c_(e){const n={};n.database=kh(this.serializer),n.removeTarget=e,this.e_(n)}}class PO extends iI{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=Bx(e.writeResults,e.commitTime),i=In(e.commitTime);return this.listener.I_(i,n)}return Oe(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=kh(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>jx(this.serializer,i))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new z(b.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.wo(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(b.UNKNOWN,s.toString())})}Co(e,n,i,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Co(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new z(b.UNKNOWN,r.toString())})}terminate(){this.d_=!0}}class NO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Gn(n),this.f_=!1):V("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=r,this.F_.ro(o=>{i.enqueueAndForget(async()=>{cs(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=te(c);l.C_.add(4),await na(l),l.M_.set("Unknown"),l.C_.delete(4),await Nl(l)}(this))})}),this.M_=new NO(i,s)}}async function Nl(t){if(cs(t))for(const e of t.v_)await e(!0)}async function na(t){for(const e of t.v_)await e(!1)}function sI(t,e){const n=te(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Cf(n)?Af(n):_r(n).Ho()&&Rf(n,e))}function rI(t,e){const n=te(t),i=_r(n);n.D_.delete(e),i.Ho()&&oI(n,e),n.D_.size===0&&(i.Ho()?i.Zo():cs(n)&&n.M_.set("Unknown"))}function Rf(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}_r(t).u_(e)}function oI(t,e){t.x_.Oe(e),_r(t).c_(e)}function Af(t){t.x_=new Dx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),_r(t).start(),t.M_.g_()}function Cf(t){return cs(t)&&!_r(t).jo()&&t.D_.size>0}function cs(t){return te(t).C_.size===0}function aI(t){t.x_=void 0}async function OO(t){t.D_.forEach((e,n)=>{Rf(t,e)})}async function DO(t,e){aI(t),Cf(t)?(t.M_.w_(e),Af(t)):t.M_.set("Unknown")}async function LO(t,e,n){if(t.M_.set("Online"),e instanceof KT&&e.state===2&&e.cause)try{await async function(s,r){const o=r.cause;for(const a of r.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(i){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Pc(t,i)}else if(e instanceof Fa?t.x_.$e(e):e instanceof HT?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(X.min()))try{const i=await tI(t.localStore);n.compareTo(i)>=0&&await function(r,o){const a=r.x_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=r.D_.get(l);u&&r.D_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=r.D_.get(c);if(!u)return;r.D_.set(c,u.withResumeToken(Et.EMPTY_BYTE_STRING,u.snapshotVersion)),oI(r,c);const h=new ci(u.target,c,l,u.sequenceNumber);Rf(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(i){V("RemoteStore","Failed to raise snapshot:",i),await Pc(t,i)}}async function Pc(t,e,n){if(!Zo(e))throw e;t.C_.add(1),await na(t),t.M_.set("Offline"),n||(n=()=>tI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Nl(t)})}function cI(t,e){return e().catch(n=>Pc(t,n,e))}async function xl(t){const e=te(t),n=wi(e);let i=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;MO(e);)try{const s=await EO(e.localStore,i);if(s===null){e.b_.length===0&&n.Zo();break}i=s.batchId,qO(e,s)}catch(s){await Pc(e,s)}lI(e)&&uI(e)}function MO(t){return cs(t)&&t.b_.length<10}function qO(t,e){t.b_.push(e);const n=wi(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function lI(t){return cs(t)&&!wi(t).jo()&&t.b_.length>0}function uI(t){wi(t).start()}async function VO(t){wi(t).E_()}async function FO(t){const e=wi(t);for(const n of t.b_)e.P_(n.mutations)}async function UO(t,e,n){const i=t.b_.shift(),s=yf.from(i,e,n);await cI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await xl(t)}async function zO(t,e){e&&wi(t).h_&&await async function(i,s){if(function(o){return Nx(o)&&o!==b.ABORTED}(s.code)){const r=i.b_.shift();wi(i).Yo(),await cI(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await xl(i)}}(t,e),lI(t)&&uI(t)}async function Ig(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const i=cs(n);n.C_.add(3),await na(n),i&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Nl(n)}async function jO(t,e){const n=te(t);e?(n.C_.delete(2),await Nl(n)):e||(n.C_.add(2),await na(n),n.M_.set("Unknown"))}function _r(t){return t.O_||(t.O_=function(n,i,s){const r=te(n);return r.A_(),new SO(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{ho:OO.bind(null,t),Io:DO.bind(null,t),a_:LO.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Cf(t)?Af(t):t.M_.set("Unknown")):(await t.O_.stop(),aI(t))})),t.O_}function wi(t){return t.N_||(t.N_=function(n,i,s){const r=te(n);return r.A_(),new PO(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{ho:VO.bind(null,t),Io:zO.bind(null,t),T_:FO.bind(null,t),I_:UO.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await xl(t)):(await t.N_.stop(),t.b_.length>0&&(V("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new $n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new Sf(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pf(t,e){if(Gn("AsyncQueue",`${e}: ${t}`),Zo(t))return new z(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.comparator=e?(n,i)=>e(n,i)||W.comparator(n.key,i.key):(n,i)=>W.comparator(n.key,i.key),this.keyedMap=Lr(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new Ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Ds;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(){this.B_=new qe(W.comparator)}track(e){const n=e.doc.key,i=this.B_.get(n);i?e.type!==0&&i.type===3?this.B_=this.B_.insert(n,e):e.type===3&&i.type!==1?this.B_=this.B_.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.B_=this.B_.remove(n):e.type===1&&i.type===2?this.B_=this.B_.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):Q():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,i)=>{e.push(i)}),e}}class Ys{constructor(e,n,i,s,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ys(e,n,Ds.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(){this.k_=void 0,this.listeners=[]}}class $O{constructor(){this.queries=new gr(e=>NT(e),Rl),this.onlineState="Unknown",this.q_=new Set}}async function kf(t,e){const n=te(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new BO),s)try{r.k_=await n.onListen(i)}catch(o){const a=Pf(o,`Initialization of query '${gs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.Q_(n.onlineState),r.k_&&e.K_(r.k_)&&xf(n)}async function Nf(t,e){const n=te(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function WO(t,e){const n=te(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.K_(s)&&(i=!0);o.k_=s}}i&&xf(n)}function HO(t,e,n){const i=te(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function xf(t){t.q_.forEach(e=>{e.next()})}class Of{constructor(e,n,i){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=i||{}}K_(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Ys(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.J_||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.key=e}}class dI{constructor(e){this.key=e}}class KO{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=oe(),this.mutatedKeys=oe(),this._a=xT(e),this.aa=new Ds(this._a)}get ua(){return this.ia}ca(e,n){const i=n?n.la:new wg,s=n?n.aa:this.aa;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Al(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?g!==v&&(i.track({type:3,doc:f}),y=!0):this.ha(d,f)||(i.track({type:2,doc:f}),y=!0,(c&&this._a(f,c)>0||l&&this._a(f,l)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),y=!0):d&&!f&&(i.track({type:1,doc:d}),y=!0,(c||l)&&(a=!0)),y&&(f?(o=o.add(f),r=v?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{aa:o,la:i,Zi:a,mutatedKeys:r}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const r=e.la.L_();r.sort((l,u)=>function(d,f){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return g(d)-g(f)}(l.type,u.type)||this._a(l.doc,u.doc)),this.Pa(i);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,c=a!==this.sa;return this.sa=a,r.length!==0||c?{snapshot:new Ys(this.query,e.aa,s,r,e.mutatedKeys,a===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new wg,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=oe(),this.aa.forEach(i=>{this.Ea(i.key)&&(this.oa=this.oa.add(i.key))});const n=[];return e.forEach(i=>{this.oa.has(i)||n.push(new dI(i))}),this.oa.forEach(i=>{e.has(i)||n.push(new hI(i))}),n}da(e){this.ia=e.ls,this.oa=oe();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Ys.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class GO{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class QO{constructor(e){this.key=e,this.Ra=!1}}class YO{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new gr(a=>NT(a),Rl),this.fa=new Map,this.ga=new Set,this.pa=new qe(W.comparator),this.ya=new Map,this.wa=new If,this.Sa={},this.ba=new Map,this.Da=Qs.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function XO(t,e){const n=aD(t);let i,s;const r=n.ma.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.Aa();else{const o=await TO(n.localStore,Tn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await JO(n,e,i,a==="current",o.resumeToken),n.isPrimaryClient&&sI(n.remoteStore,o)}return s}async function JO(t,e,n,i,s){t.va=(h,d,f)=>async function(v,y,I,P){let k=y.view.ca(I);k.Zi&&(k=await yg(v.localStore,y.query,!1).then(({documents:ie})=>y.view.ca(ie,k)));const R=P&&P.targetChanges.get(y.targetId),H=y.view.applyChanges(k,v.isPrimaryClient,R);return Rg(v,y.targetId,H.Ta),H.snapshot}(t,h,d,f);const r=await yg(t.localStore,e,!0),o=new KO(e,r.ls),a=o.ca(r.documents),c=ta.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Rg(t,n,l.Ta);const u=new GO(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),l.snapshot}async function ZO(t,e){const n=te(t),i=n.ma.get(e),s=n.fa.get(i.targetId);if(s.length>1)return n.fa.set(i.targetId,s.filter(r=>!Rl(r,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Nh(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),rI(n.remoteStore,i.targetId),xh(n,i.targetId)}).catch(Jo)):(xh(n,i.targetId),await Nh(n.localStore,i.targetId,!0))}async function eD(t,e,n){const i=cD(t);try{const s=await function(o,a){const c=te(o),l=Be.now(),u=a.reduce((f,g)=>f.add(g.key),oe());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=Qn(),v=oe();return c.ss.getEntries(f,u).next(y=>{g=y,g.forEach((I,P)=>{P.isValidDocument()||(v=v.add(I))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,g)).next(y=>{h=y;const I=[];for(const P of a){const k=Ax(P,h.get(P.key).overlayedDocument);k!=null&&I.push(new as(P.key,k,bT(k.value.mapValue),Wn.exists(!0)))}return c.mutationQueue.addMutationBatch(f,l,I,a)}).next(y=>{d=y;const I=y.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(f,y.batchId,I)})}).then(()=>({batchId:d.batchId,changes:DT(h)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Sa[o.currentUser.toKey()];l||(l=new qe(me)),l=l.insert(a,c),o.Sa[o.currentUser.toKey()]=l}(i,s.batchId,n),await ia(i,s.changes),await xl(i.remoteStore)}catch(s){const r=Pf(s,"Failed to persist write");n.reject(r)}}async function fI(t,e){const n=te(t);try{const i=await vO(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.ya.get(r);o&&(Oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?Oe(o.Ra):s.removedDocuments.size>0&&(Oe(o.Ra),o.Ra=!1))}),await ia(n,i,e)}catch(i){await Jo(i)}}function bg(t,e,n){const i=te(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.ma.forEach((r,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=te(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(l=!0)}),l&&xf(c)}(i.eventManager,e),s.length&&i.Va.a_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function tD(t,e,n){const i=te(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.ya.get(e),r=s&&s.key;if(r){let o=new qe(W.comparator);o=o.insert(r,pt.newNoDocument(r,X.min()));const a=oe().add(r),c=new Pl(X.min(),new Map,new qe(me),o,a);await fI(i,c),i.pa=i.pa.remove(r),i.ya.delete(e),Df(i)}else await Nh(i.localStore,e,!1).then(()=>xh(i,e,n)).catch(Jo)}async function nD(t,e){const n=te(t),i=e.batch.batchId;try{const s=await _O(n.localStore,e);mI(n,i,null),pI(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ia(n,s)}catch(s){await Jo(s)}}async function iD(t,e,n){const i=te(t);try{const s=await function(o,a){const c=te(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Oe(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(i.localStore,e);mI(i,e,n),pI(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await ia(i,s)}catch(s){await Jo(s)}}function pI(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function mI(t,e,n){const i=te(t);let s=i.Sa[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.Sa[i.currentUser.toKey()]=s}}function xh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.fa.get(e))t.ma.delete(i),n&&t.Va.Fa(i,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(i=>{t.wa.containsKey(i)||gI(t,i)})}function gI(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(rI(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Df(t))}function Rg(t,e,n){for(const i of n)i instanceof hI?(t.wa.addReference(i.key,e),sD(t,i)):i instanceof dI?(V("SyncEngine","Document no longer in limbo: "+i.key),t.wa.removeReference(i.key,e),t.wa.containsKey(i.key)||gI(t,i.key)):Q()}function sD(t,e){const n=e.key,i=n.path.canonicalString();t.pa.get(n)||t.ga.has(i)||(V("SyncEngine","New document in limbo: "+n),t.ga.add(i),Df(t))}function Df(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new W(Le.fromString(e)),i=t.Da.next();t.ya.set(i,new QO(n)),t.pa=t.pa.insert(n,i),sI(t.remoteStore,new ci(Tn(bl(n.path)),i,"TargetPurposeLimboResolution",ff._e))}}async function ia(t,e,n){const i=te(t),s=[],r=[],o=[];i.ma.isEmpty()||(i.ma.forEach((a,c)=>{o.push(i.va(c,e,n).then(l=>{if((l||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=bf.Qi(c.targetId,l);r.push(u)}}))}),await Promise.all(o),i.Va.a_(s),await async function(c,l){const u=te(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>C.forEach(l,d=>C.forEach(d.ki,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>C.forEach(d.qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Zo(h))throw h;V("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.ts.get(d),g=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(g);u.ts=u.ts.insert(d,v)}}}(i.localStore,r))}async function rD(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const i=await eI(n.localStore,e);n.currentUser=e,function(r,o){r.ba.forEach(a=>{a.forEach(c=>{c.reject(new z(b.CANCELLED,o))})}),r.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ia(n,i._s)}}function oD(t,e){const n=te(t),i=n.ya.get(e);if(i&&i.Ra)return oe().add(i.key);{let s=oe();const r=n.fa.get(e);if(!r)return s;for(const o of r){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function aD(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tD.bind(null,e),e.Va.a_=WO.bind(null,e.eventManager),e.Va.Fa=HO.bind(null,e.eventManager),e}function cD(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iD.bind(null,e),e}class Ag{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=kl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return gO(this.persistence,new pO,e.initialUser,this.serializer)}createPersistence(e){return new hO(wf.jr,this.serializer)}createSharedClientState(e){return new wO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class lD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>bg(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=rD.bind(null,this.syncEngine),await jO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $O}()}createDatastore(e){const n=kl(e.databaseInfo.databaseId),i=function(r){return new CO(r)}(e.databaseInfo);return function(r,o,a,c){return new kO(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,s,r,o,a){return new xO(i,s,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>bg(this.syncEngine,n,0),function(){return Tg.D()?new Tg:new bO}())}createSyncEngine(e,n){return function(s,r,o,a,c,l,u){const h=new YO(s,r,o,a,c,l);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const i=te(n);V("RemoteStore","RemoteStore shutting down."),i.C_.add(5),await na(i),i.F_.shutdown(),i.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Lf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Gn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=ht.UNAUTHENTICATED,this.clientId=TT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{V("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(V("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Pf(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function mu(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await eI(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Cg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dD(t);V("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>Ig(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Ig(e.remoteStore,r)),t._onlineComponents=e}function hD(t){return t.name==="FirebaseError"?t.code===b.FAILED_PRECONDITION||t.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function dD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await mu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!hD(n))throw n;Ws("Error using user provided cache. Falling back to memory cache: "+n),await mu(t,new Ag)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await mu(t,new Ag);return t._offlineComponents}async function _I(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await Cg(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await Cg(t,new lD))),t._onlineComponents}function fD(t){return _I(t).then(e=>e.syncEngine)}async function kc(t){const e=await _I(t),n=e.eventManager;return n.onListen=XO.bind(null,e.syncEngine),n.onUnlisten=ZO.bind(null,e.syncEngine),n}function pD(t,e,n={}){const i=new $n;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,l){const u=new Lf({next:d=>{o.enqueueAndForget(()=>Nf(r,h));const f=d.docs.has(a);!f&&d.fromCache?l.reject(new z(b.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?l.reject(new z(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new Of(bl(a.path),u,{includeMetadataChanges:!0,J_:!0});return kf(r,h)}(await kc(t),t.asyncQueue,e,n,i)),i.promise}function mD(t,e,n={}){const i=new $n;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,l){const u=new Lf({next:d=>{o.enqueueAndForget(()=>Nf(r,h)),d.fromCache&&c.source==="server"?l.reject(new z(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new Of(a,u,{includeMetadataChanges:!0,J_:!0});return kf(r,h)}(await kc(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function vI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Sg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(t,e,n){if(!n)throw new z(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gD(t,e,n,i){if(e===!0&&i===!0)throw new z(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pg(t){if(!W.isDocumentKey(t))throw new z(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kg(t){if(W.isDocumentKey(t))throw new z(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function wn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mf(t);throw new z(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Ng{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new z(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vI((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ol{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ng({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ng(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new MN;switch(i.type){case"firstParty":return new UN(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new z(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Sg.get(n);i&&(V("ComponentProvider","Removing Datastore"),Sg.delete(n),i.terminate())}(this),Promise.resolve()}}function _D(t,e,n,i={}){var s;const r=(t=wn(t,Ol))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,c;if(typeof i.mockUserToken=="string")a=i.mockUserToken,c=ht.MOCK_USER;else{a=zb(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new z(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ht(l)}t._authCredentials=new qN(new ET(a,c))}}/**
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
 */class sa{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new sa(this.firestore,e,this._query)}}class Ct{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class _i extends sa{constructor(e,n,i){super(e,n,bl(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new W(e))}withConverter(e){return new _i(this.firestore,e,this._path)}}function vD(t,e,...n){if(t=Lt(t),yI("collection","path",e),t instanceof Ol){const i=Le.fromString(e,...n);return kg(i),new _i(t,null,i)}{if(!(t instanceof Ct||t instanceof _i))throw new z(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Le.fromString(e,...n));return kg(i),new _i(t.firestore,null,i)}}function gu(t,e,...n){if(t=Lt(t),arguments.length===1&&(e=TT.newId()),yI("doc","path",e),t instanceof Ol){const i=Le.fromString(e,...n);return Pg(i),new Ct(t,null,new W(i))}{if(!(t instanceof Ct||t instanceof _i))throw new z(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Le.fromString(e,...n));return Pg(i),new Ct(t.firestore,t instanceof _i?t.converter:null,new W(i))}}/**
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
 */class yD{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new nI(this,"async_queue_retry"),this.iu=()=>{const n=pu();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=pu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=pu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new $n;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Zo(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(i=>{this.eu=i,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw Gn("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.tu=!1,i))));return this.Ja=n,n}enqueueAfterDelay(e,n,i){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=Sf.createAndSchedule(this,e,n,i,r=>this.au(r));return this.Xa.push(s),s}su(){this.eu&&Q()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function xg(t){return function(n,i){if(typeof n!="object"||n===null)return!1;const s=n;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Xs extends Ol{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=function(){return new yD}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||TI(this),this._firestoreClient.terminate()}}function EI(t,e){const n=typeof t=="object"?t:ld(),i=typeof t=="string"?t:e||"(default)",s=cd(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Ub("firestore");r&&_D(s,...r)}return s}function Dl(t){return t._firestoreClient||TI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function TI(t){var e,n,i;const s=t._freezeSettings(),r=function(a,c,l,u){return new JN(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,vI(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new uD(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Js{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Js(Et.fromBase64String(e))}catch(n){throw new z(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Js(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class qf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class II{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED=/^__.*__$/;class TD{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new as(e,this.data,this.fieldMask,n,this.fieldTransforms):new ea(e,this.data,n,this.fieldTransforms)}}function wI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Vf{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Pu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Vf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:i,du:!1});return s.Au(e),s}Ru(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:i,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Nc(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(wI(this.Iu)&&ED.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class ID{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||kl(e)}pu(e,n,i,s=!1){return new Vf({Iu:e,methodName:n,gu:i,path:st.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wD(t){const e=t._freezeSettings(),n=kl(t._databaseId);return new ID(t._databaseId,!!e.ignoreUndefinedProperties,n)}function bD(t,e,n,i,s,r={}){const o=t.pu(r.merge||r.mergeFields?2:0,e,n,s);CI("Data must be an object, but it was:",o,i);const a=RI(i,o);let c,l;if(r.merge)c=new Jt(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=RD(e,h,n);if(!o.contains(d))throw new z(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);CD(u,d)||u.push(d)}c=new Jt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new TD(new zt(a),c,l)}function bI(t,e){if(AI(t=Lt(t)))return CI("Unsupported field value:",e,t),RI(t,e);if(t instanceof II)return function(i,s){if(!wI(s.Iu))throw s.mu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(i,s){const r=[];let o=0;for(const a of i){let c=bI(a,s.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(t,e)}return function(i,s){if((i=Lt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Ex(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=Be.fromDate(i);return{timestampValue:Sc(s.serializer,r)}}if(i instanceof Be){const r=new Be(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Sc(s.serializer,r)}}if(i instanceof Ll)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Js)return{bytesValue:GT(s.serializer,i._byteString)};if(i instanceof Ct){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Tf(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.mu(`Unsupported field value: ${Mf(i)}`)}(t,e)}function RI(t,e){const n={};return IT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mr(t,(i,s)=>{const r=bI(s,e.Eu(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function AI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof Ll||t instanceof Js||t instanceof Ct||t instanceof II)}function CI(t,e,n){if(!AI(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const i=Mf(n);throw i==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+i)}}function RD(t,e,n){if((e=Lt(e))instanceof qf)return e._internalPath;if(typeof e=="string")return SI(t,e);throw Nc("Field path arguments must be of type string or ",t,!1,void 0,n)}const AD=new RegExp("[~\\*/\\[\\]]");function SI(t,e,n){if(e.search(AD)>=0)throw Nc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qf(...e.split("."))._internalPath}catch{throw Nc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nc(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new z(b.INVALID_ARGUMENT,a+t+c)}function CD(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class PI{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(kI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SD extends PI{data(){return super.data()}}function kI(t,e){return typeof e=="string"?SI(t,e):e instanceof qf?e._internalPath:e._delegate._internalPath}/**
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
 */function NI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class PD{convertValue(e,n="none"){switch(ns(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return mr(e,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new Ll(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=mf(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Ro(e));default:return null}}convertTimestamp(e){const n=Ii(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Le.fromString(e);Oe(ZT(i));const s=new Ao(i.get(1),i.get(3)),r=new W(i.popFirst(5));return s.isEqual(n)||Gn(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function kD(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
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
 */class qr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xI extends PI{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ua(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(kI("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Ua extends xI{data(e={}){return super.data(e)}}class OI{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new qr(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Ua(this._firestore,this._userDataWriter,i.key,i,new qr(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Ua(s._firestore,s._userDataWriter,a.doc.key,a.doc,new qr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const c=new Ua(s._firestore,s._userDataWriter,a.doc.key,a.doc,new qr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:ND(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ND(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
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
 */function DI(t){t=wn(t,Ct);const e=wn(t.firestore,Xs);return pD(Dl(e),t._key).then(n=>MI(e,t,n))}class Ff extends PD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Js(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function LI(t){t=wn(t,sa);const e=wn(t.firestore,Xs),n=Dl(e),i=new Ff(e);return NI(t._query),mD(n,t._query).then(s=>new OI(e,i,t,s))}function _u(t,e,n){t=wn(t,Ct);const i=wn(t.firestore,Xs),s=kD(t.converter,e,n);return xD(i,[bD(wD(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Wn.none())])}function Uf(t,...e){var n,i,s;t=Lt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||xg(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(xg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof Ct)l=wn(t.firestore,Xs),u=bl(t._key.path),c={next:h=>{e[o]&&e[o](MI(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=wn(t,sa);l=wn(h.firestore,Xs),u=h._query;const d=new Ff(l);c={next:f=>{e[o]&&e[o](new OI(l,d,h,f))},error:e[o+1],complete:e[o+2]},NI(t._query)}return function(d,f,g,v){const y=new Lf(v),I=new Of(f,y,g);return d.asyncQueue.enqueueAndForget(async()=>kf(await kc(d),I)),()=>{y.Na(),d.asyncQueue.enqueueAndForget(async()=>Nf(await kc(d),I))}}(Dl(l),u,a,c)}function xD(t,e){return function(i,s){const r=new $n;return i.asyncQueue.enqueueAndForget(async()=>eD(await fD(i),s,r)),r.promise}(Dl(t),e)}function MI(t,e,n){const i=n.docs.get(e._key),s=new Ff(t);return new xI(t,s,e._key,i,new qr(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){pr=s})(bi),Rn(new sn("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new Xs(new VN(i.getProvider("auth-internal")),new jN(i.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new z(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ao(l.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Ot(Zm,"4.3.2",e),Ot(Zm,"4.3.2","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="firebasestorage.googleapis.com",OD="storageBucket",DD=2*60*1e3,LD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Nn{constructor(e,n,i=0){super(vu(e),`Firebase Storage: ${n} (${vu(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return vu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pn||(Pn={}));function vu(t){return"storage/"+t}function MD(){const t="An unknown error occurred, please check the error payload for server response.";return new xn(Pn.UNKNOWN,t)}function qD(){return new xn(Pn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function VD(){return new xn(Pn.CANCELED,"User canceled the upload/download.")}function FD(t){return new xn(Pn.INVALID_URL,"Invalid URL '"+t+"'.")}function UD(t){return new xn(Pn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Og(t){return new xn(Pn.INVALID_ARGUMENT,t)}function VI(){return new xn(Pn.APP_DELETED,"The Firebase app was deleted.")}function zD(t){return new xn(Pn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Zt.makeFromUrl(e,n)}catch{return new Zt(e,"")}if(i.path==="")return i;throw UD(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(R){R.path_=decodeURIComponent(R.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),g={bucket:1,path:3},v=n===qI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",I=new RegExp(`^https?://${v}/${s}/${y}`,"i"),k=[{regex:a,indices:c,postModify:r},{regex:f,indices:g,postModify:l},{regex:I,indices:{bucket:1,path:2},postModify:l}];for(let R=0;R<k.length;R++){const H=k[R],ie=H.regex.exec(e);if(ie){const he=ie[H.indices.bucket];let G=ie[H.indices.path];G||(G=""),i=new Zt(he,G),H.postModify(i);break}}if(i==null)throw FD(e);return i}}class jD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...y){l||(l=!0,e.apply(null,y))}function h(y){s=setTimeout(()=>{s=null,t(f,c())},y)}function d(){r&&clearTimeout(r)}function f(y,...I){if(l){d();return}if(y){d(),u.call(null,y,...I);return}if(c()||o){d(),u.call(null,y,...I);return}i<64&&(i*=2);let k;a===1?(a=2,k=0):k=(i+Math.random())*1e3,h(k)}let g=!1;function v(y){g||(g=!0,d(),!l&&(s!==null?(y||(a=2),clearTimeout(s),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,v(!0)},n),v}function $D(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WD(t){return t!==void 0}function Dg(t,e,n,i){if(i<e)throw Og(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Og(`Invalid value for '${t}'. Expected ${n} or less.`)}function HD(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(xc||(xc={}));/**
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
 */function KD(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e,n,i,s,r,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Ra(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===xc.NO_ERROR,c=r.getStatus();if(!a||KD(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===xc.ABORT;i(!1,new Ra(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;i(!0,new Ra(l,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());WD(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=MD();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?VI():VD();o(c)}else{const c=qD();o(c)}};this.canceled_?n(!1,new Ra(!1,null,!0)):this.backoffId_=BD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$D(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ra{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function QD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function YD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function XD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function JD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ZD(t,e,n,i,s,r,o=!0){const a=HD(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return XD(l,e),QD(l,n),YD(l,r),JD(l,i),new GD(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function tL(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Oc{constructor(e,n){this._service=e,n instanceof Zt?this._location=n:this._location=Zt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Oc(e,n)}get root(){const e=new Zt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tL(this._location.path)}get storage(){return this._service}get parent(){const e=eL(this._location.path);if(e===null)return null;const n=new Zt(this._location.bucket,e);return new Oc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw zD(e)}}function Lg(t,e){const n=e==null?void 0:e[OD];return n==null?null:Zt.makeFromBucketSpec(n,t)}class nL{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=qI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=DD,this._maxUploadRetryTime=LD,this._requests=new Set,s!=null?this._bucket=Zt.makeFromBucketSpec(s,this._host):this._bucket=Lg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Zt.makeFromBucketSpec(this._url,e):this._bucket=Lg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Dg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Dg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Oc(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new jD(VI());{const o=ZD(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const Mg="@firebase/storage",qg="0.11.2";/**
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
 */const iL="storage";function sL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new nL(n,i,s,e,bi)}function rL(){Rn(new sn(iL,sL,"PUBLIC").setMultipleInstances(!0)),Ot(Mg,qg,""),Ot(Mg,qg,"esm2017")}rL();const yu=new WeakMap;function FI(t,e){return yu.has(e)||yu.set(e,t||{f:{},r:{},s:{},u:{}}),yu.get(e)}function oL(t,e,n,i){if(!t)return n;const[s,r]=UI(t);if(!s)return n;const o=FI(void 0,i)[s]||{},a=e||r;return a&&a in o?o[a]:n}function aL(t,e,n,i){if(!t)return;const[s,r]=UI(t);if(!s)return;const o=FI(void 0,i)[s],a=e||r;if(a)return n.then(c=>{o[a]=c}).catch(pn),a}function UI(t){return qS(t)||VS(t)?["f",t.path]:FS(t)?["r",t.toString()]:US(t)?["s",t.toString()]:[]}const Eu=new WeakMap;function cL(t,e,n){const i=yd();Eu.has(i)||Eu.set(i,new Map);const s=Eu.get(i),r=aL(e,n,t,i);return r&&s.set(r,t),r?()=>s.delete(r):pn}const lL={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Oh(t,e,n,i){if(!LS(t))return[t,{}];const s=[{},{}],r=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const g=Object.getOwnPropertyDescriptor(a,f);g&&!g.enumerable&&Object.defineProperty(h,f,g)});for(const f in a){const g=a[f];if(g==null||g instanceof Date||g instanceof Be||g instanceof Ll)h[f]=g;else if(Td(g)){const v=l+f;h[f]=v in n?c[f]:g.path,d[v]=g.converter?g:g.withConverter(i.converter)}else if(Array.isArray(g)){h[f]=Array(g.length);for(let v=0;v<g.length;v++){const y=g[v];y&&y.path in r&&(h[f][v]=r[y.path])}o(g,c[f]||h[f],l+f+".",[h[f],d])}else is(g)?(h[f]={},o(g,c[f],l+f+".",[h[f],d])):h[f]=g}}return o(t,e,"",s),s}const zf={reset:!1,wait:!0,maxRefDepth:2,converter:lL,snapshotOptions:{serverTimestamps:"estimate"}};function Dc(t){for(const e in t)t[e].unsub()}function Dh(t,e,n,i,s,r,o,a,c){const[l,u]=Oh(i.data(t.snapshotOptions),Ed(e,n),s,t);r.set(e,n,l),Lh(t,e,n,s,u,r,o,a,c)}function uL({ref:t,target:e,path:n,depth:i,resolve:s,reject:r,ops:o},a){const c=Object.create(null);let l=pn;return a.once?DI(t).then(u=>{u.exists()?Dh(a,e,n,u,c,o,i,s,r):(o.set(e,n,null),s())}).catch(r):l=Uf(t,u=>{u.exists()?Dh(a,e,n,u,c,o,i,s,r):(o.set(e,n,null),s())},r),()=>{l(),Dc(c)}}function Lh(t,e,n,i,s,r,o,a,c){const l=Object.keys(s);if(Object.keys(i).filter(v=>l.indexOf(v)<0).forEach(v=>{i[v].unsub(),delete i[v]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const d=l.length,f=Object.create(null);function g(v){v in f&&++h>=d&&a(n)}l.forEach(v=>{const y=i[v],I=s[v],P=`${n}.${v}`;if(f[P]=!0,y)if(y.path!==I.path)y.unsub();else return;i[v]={data:()=>Ed(e,P),unsub:uL({ref:I,target:e,path:P,depth:o,ops:r,resolve:g.bind(null,P),reject:c},t),path:I.path}})}function hL(t,e,n,i,s,r){const o=Object.assign({},zf,r),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let d=hi(l?[]:t.value);l||n.set(t,h,[]);const f=i;let g,v=pn;const y=[],I={added:({newIndex:k,doc:R})=>{y.splice(k,0,Object.create(null));const H=y[k],[ie,he]=Oh(R.data(c),void 0,H,o);n.add(Ln(d),k,ie),Lh(o,d,`${h}.${k}`,H,he,n,0,i.bind(null,R),s)},modified:({oldIndex:k,newIndex:R,doc:H})=>{const ie=Ln(d),he=y[k],G=ie[k],[ne,Ie]=Oh(H.data(c),G,he,o);y.splice(R,0,he),n.remove(ie,k),n.add(ie,R,ne),Lh(o,d,`${h}.${R}`,he,Ie,n,0,i,s)},removed:({oldIndex:k})=>{const R=Ln(d);n.remove(R,k),Dc(y.splice(k,1)[0])}};function P(k){const R=k.docChanges(a);if(!g&&R.length){g=!0;let H=0;const ie=R.length,he=Object.create(null);for(let G=0;G<ie;G++)he[R[G].doc.id]=!0;i=G=>{G&&G.id in he&&++H>=ie&&(l&&(n.set(t,h,Ln(d)),d=t),f(Ln(d)),i=pn)}}R.forEach(H=>{I[H.type](H)}),R.length||(l&&(n.set(t,h,Ln(d)),d=t),i(Ln(d)))}return u?LI(e).then(P).catch(s):v=Uf(e,P,s),k=>{if(v(),k){const R=typeof k=="function"?k():[];n.set(t,h,R)}y.forEach(Dc)}}function dL(t,e,n,i,s,r){const o=Object.assign({},zf,r),a="value",c=Object.create(null);i=zS(i,()=>Ed(t,a));let l=pn;function u(h){h.exists()?Dh(o,t,a,h,c,n,0,i,s):(n.set(t,a,null),i(null))}return o.once?DI(e).then(u).catch(s):l=Uf(e,u,s),h=>{if(l(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}Dc(c)}}const Vg=Symbol();function fL(t,e){let n=pn;const i=Object.assign({},zf,e),s=Ln(t),r=i.target||hi();BS()&&(i.once=!0);const o=oL(s,i.ssrKey,Vg,yd()),a=o!==Vg;a&&(r.value=o);let c=!a;const l=hi(!1),u=hi(),h=R_(),d=$h();let f=pn;function g(){let I=Ln(t);const P=new Promise((k,R)=>{if(n(i.reset),!I)return n=pn,k(null);l.value=c,c=!0,I.converter||(I=I.withConverter(i.converter)),n=(Td(I)?dL:hL)(r,I,pL,k,R,i)}).catch(k=>(h.value===P&&(u.value=k),Promise.reject(k))).finally(()=>{h.value===P&&(l.value=!1)});h.value=P}let v=pn;Me(t)&&(v=As(t,g)),g(),s&&(f=cL(h.value,s,i.ssrKey)),tv()&&B_(()=>h.value),d&&l_(y);function y(I=i.reset){v(),f(),n(I)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>l},promise:{get:()=>h},stop:{get:()=>y}})}const pL={set:(t,e,n)=>OS(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)},Cr=new WeakMap;function mL(t,e,n){e&&e[t]&&(e[t](n),delete e[t])}const gL={bindName:"$firestoreBind",unbindName:"$firestoreUnbind"},_L=function(e,n,i){const s=Object.assign({},gL,n),{bindName:r,unbindName:o}=s,a=e.config.globalProperties;a[o]=function(l,u){mL(l,Cr.get(this),u),delete this.$firestoreRefs[l]},a[r]=function(l,u,h){const d=Object.assign({},s,h),f=zw(this.$data,l);Cr.has(this)||Cr.set(this,{});const g=Cr.get(this);g[l]&&g[l](d.reset);const v=$S(i||yd(),e).run(()=>Uc()),{promise:y,stop:I}=e.runWithContext(()=>v.run(()=>fL(u,{target:f,...d}))),P=k=>{I(k),v.stop()};return g[l]=P,this.$firestoreRefs[l]=u,y.value},e.mixin({beforeCreate(){this.$firestoreRefs=Object.create(null)},created(){const{firestore:c}=this.$options,l=typeof c=="function"?c.call(this):c;if(l)for(const u in l)this[r](u,l[u],s)},beforeUnmount(){const c=Cr.get(this);if(c)for(const l in c)c[l]();this.$firestoreRefs=null}})};function vL(t){return(e,n)=>_L(n,t,e)}function yL(t,{firebaseApp:e,modules:n=[]}){t.provide(oy,e);for(const i of n)i(e,t)}const jf=bv({apiKey:"AIzaSyD3_PR3stakqPCdQaVutT5fORlmXsMNPM0",authDomain:"quizzify-d3053.firebaseapp.com",projectId:"quizzify-d3053",storageBucket:"quizzify-d3053.appspot.com",messagingSenderId:"955132845389",appId:"1:955132845389:web:3346cc1457aeeaa97b2b04"});EI(jf);const za=window.location.href.includes("localhost")?"_dev":"";/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ys=typeof window<"u";function EL(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function Tu(t,e){const n={};for(const i in e){const s=e[i];n[i]=an(s)?s.map(t):t(s)}return n}const Xr=()=>{},an=Array.isArray,TL=/\/$/,IL=t=>t.replace(TL,"");function Iu(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=AL(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function wL(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Fg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function bL(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Zs(e.matched[i],n.matched[s])&&zI(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function zI(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!RL(t[n],e[n]))return!1;return!0}function RL(t,e){return an(t)?Ug(t,e):an(e)?Ug(e,t):t===e}function Ug(t,e){return an(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function AL(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var ko;(function(t){t.pop="pop",t.push="push"})(ko||(ko={}));var Jr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Jr||(Jr={}));function CL(t){if(!t)if(ys){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),IL(t)}const SL=/^[^#]+#/;function PL(t,e){return t.replace(SL,"#")+e}function kL(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Ml=()=>({left:window.pageXOffset,top:window.pageYOffset});function NL(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=kL(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function zg(t,e){return(history.state?history.state.position-e:-1)+t}const Mh=new Map;function xL(t,e){Mh.set(t,e)}function OL(t){const e=Mh.get(t);return Mh.delete(t),e}let DL=()=>location.protocol+"//"+location.host;function jI(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Fg(c,"")}return Fg(n,t)+i+s}function LL(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const f=jI(t,location),g=n.value,v=e.value;let y=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}y=v?d.position-v.position:0}else i(f);s.forEach(I=>{I(n.value,g,{delta:y,type:ko.pop,direction:y?y>0?Jr.forward:Jr.back:Jr.unknown})})};function c(){o=n.value}function l(d){s.push(d);const f=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Ee({},d.state,{scroll:Ml()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function jg(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Ml():null}}function ML(t){const{history:e,location:n}=window,i={value:jI(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:DL()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(c,l){const u=Ee({},e.state,jg(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});r(c,u,!0),i.value=c}function a(c,l){const u=Ee({},s.value,e.state,{forward:c,scroll:Ml()});r(u.current,u,!0);const h=Ee({},jg(i.value,c,null),{position:u.position+1},l);r(c,h,!1),i.value=c}return{location:i,state:s,push:a,replace:o}}function qL(t){t=CL(t);const e=ML(t),n=LL(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Ee({location:"",base:t,go:i,createHref:PL.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function VL(t){return typeof t=="string"||t&&typeof t=="object"}function BI(t){return typeof t=="string"||typeof t=="symbol"}const ti={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$I=Symbol("");var Bg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Bg||(Bg={}));function er(t,e){return Ee(new Error,{type:t,[$I]:!0},e)}function Dn(t,e){return t instanceof Error&&$I in t&&(e==null||!!(t.type&e))}const $g="[^/]+?",FL={sensitive:!1,strict:!1,start:!0,end:!0},UL=/[.+*?^${}()[\]/\\]/g;function zL(t,e){const n=Ee({},FL,e),i=[];let s=n.start?"^":"";const r=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(UL,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:v,optional:y,regexp:I}=d;r.push({name:g,repeatable:v,optional:y});const P=I||$g;if(P!==$g){f+=10;try{new RegExp(`(${P})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${g}" (${P}): `+R.message)}}let k=v?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(k=y&&l.length<2?`(?:/${k})`:"/"+k),y&&(k+="?"),s+=k,f+=20,y&&(f+=-8),v&&(f+=-20),P===".*"&&(f+=-50)}u.push(f)}i.push(u)}if(n.strict&&n.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=r[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:v,optional:y}=f,I=g in l?l[g]:"";if(an(I)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const P=an(I)?I.join("/"):I;if(!P)if(y)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=P}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:c}}function jL(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function BL(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=jL(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Wg(i))return 1;if(Wg(s))return-1}return s.length-i.length}function Wg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $L={type:0,value:""},WL=/[a-zA-Z0-9_]/;function HL(t){if(!t)return[[]];if(t==="/")return[[$L]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,c,l="",u="";function h(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:c==="("?n=2:WL.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function KL(t,e,n){const i=zL(HL(t.path),n),s=Ee(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function GL(t,e){const n=[],i=new Map;e=Gg({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,d){const f=!d,g=QL(u);g.aliasOf=d&&d.record;const v=Gg(e,u),y=[g];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const R of k)y.push(Ee({},g,{components:d?d.record.components:g.components,path:R,aliasOf:d?d.record:g}))}let I,P;for(const k of y){const{path:R}=k;if(h&&R[0]!=="/"){const H=h.record.path,ie=H[H.length-1]==="/"?"":"/";k.path=h.record.path+(R&&ie+R)}if(I=KL(k,h,v),d?d.alias.push(I):(P=P||I,P!==I&&P.alias.push(I),f&&u.name&&!Kg(I)&&o(u.name)),g.children){const H=g.children;for(let ie=0;ie<H.length;ie++)r(H[ie],I,d&&d.children[ie])}d=d||I,(I.record.components&&Object.keys(I.record.components).length||I.record.name||I.record.redirect)&&c(I)}return P?()=>{o(P)}:Xr}function o(u){if(BI(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&BL(u,n[h])>=0&&(u.record.path!==n[h].record.path||!WI(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Kg(u)&&i.set(u.record.name,u)}function l(u,h){let d,f={},g,v;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw er(1,{location:u});v=d.record.name,f=Ee(Hg(h.params,d.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&Hg(u.params,d.keys.map(P=>P.name))),g=d.stringify(f)}else if("path"in u)g=u.path,d=n.find(P=>P.re.test(g)),d&&(f=d.parse(g),v=d.record.name);else{if(d=h.name?i.get(h.name):n.find(P=>P.re.test(h.path)),!d)throw er(1,{location:u,currentLocation:h});v=d.record.name,f=Ee({},h.params,u.params),g=d.stringify(f)}const y=[];let I=d;for(;I;)y.unshift(I.record),I=I.parent;return{name:v,path:g,params:f,matched:y,meta:XL(y)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Hg(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function QL(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:YL(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function YL(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Kg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function XL(t){return t.reduce((e,n)=>Ee(e,n.meta),{})}function Gg(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function WI(t,e){return e.children.some(n=>n===t||WI(t,n))}const HI=/#/g,JL=/&/g,ZL=/\//g,eM=/=/g,tM=/\?/g,KI=/\+/g,nM=/%5B/g,iM=/%5D/g,GI=/%5E/g,sM=/%60/g,QI=/%7B/g,rM=/%7C/g,YI=/%7D/g,oM=/%20/g;function Bf(t){return encodeURI(""+t).replace(rM,"|").replace(nM,"[").replace(iM,"]")}function aM(t){return Bf(t).replace(QI,"{").replace(YI,"}").replace(GI,"^")}function qh(t){return Bf(t).replace(KI,"%2B").replace(oM,"+").replace(HI,"%23").replace(JL,"%26").replace(sM,"`").replace(QI,"{").replace(YI,"}").replace(GI,"^")}function cM(t){return qh(t).replace(eM,"%3D")}function lM(t){return Bf(t).replace(HI,"%23").replace(tM,"%3F")}function uM(t){return t==null?"":lM(t).replace(ZL,"%2F")}function Lc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function hM(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(KI," "),o=r.indexOf("="),a=Lc(o<0?r:r.slice(0,o)),c=o<0?null:Lc(r.slice(o+1));if(a in e){let l=e[a];an(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Qg(t){let e="";for(let n in t){const i=t[n];if(n=cM(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(an(i)?i.map(r=>r&&qh(r)):[i&&qh(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function dM(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=an(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const fM=Symbol(""),Yg=Symbol(""),$f=Symbol(""),XI=Symbol(""),Vh=Symbol("");function Sr(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function si(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(er(4,{from:n,to:e})):h instanceof Error?a(h):VL(h)?a(er(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},l=t.call(i&&i.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function wu(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(pM(a)){const l=(a.__vccOpts||a)[e];l&&s.push(si(l,n,i,r,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=EL(l)?l.default:l;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&si(d,n,i,r,o)()}))}}return s}function pM(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Xg(t){const e=$t($f),n=$t(XI),i=Ft(()=>e.resolve(zi(t.to))),s=Ft(()=>{const{matched:c}=i.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Zs.bind(null,u));if(d>-1)return d;const f=Jg(c[l-2]);return l>1&&Jg(u)===f&&h[h.length-1].path!==f?h.findIndex(Zs.bind(null,c[l-2])):d}),r=Ft(()=>s.value>-1&&vM(n.params,i.value.params)),o=Ft(()=>s.value>-1&&s.value===n.matched.length-1&&zI(n.params,i.value.params));function a(c={}){return _M(c)?e[zi(t.replace)?"replace":"push"](zi(t.to)).catch(Xr):Promise.resolve()}return{route:i,href:Ft(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const mM=F_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xg,setup(t,{slots:e}){const n=Oo(Xg(t)),{options:i}=$t($f),s=Ft(()=>({[Zg(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Zg(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:sv("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),gM=mM;function _M(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function vM(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!an(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Jg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Zg=(t,e,n)=>t??e??n,yM=F_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=$t(Vh),s=Ft(()=>t.route||i.value),r=$t(Yg,0),o=Ft(()=>{let l=zi(r);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ft(()=>s.value.matched[o.value]);ka(Yg,Ft(()=>o.value+1)),ka(fM,a),ka(Vh,s);const c=hi();return As(()=>[c.value,a.value,t.name],([l,u,h],[d,f,g])=>{u&&(u.instances[h]=l,f&&f!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!Zs(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return e_(n.default,{Component:d,route:l});const f=h.props[u],g=f?f===!0?l.params:typeof f=="function"?f(l):f:null,y=sv(d,Ee({},g,e,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return e_(n.default,{Component:y,route:l})||y}}});function e_(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const EM=yM;function TM(t){const e=GL(t.routes,t),n=t.parseQuery||hM,i=t.stringifyQuery||Qg,s=t.history,r=Sr(),o=Sr(),a=Sr(),c=R_(ti);let l=ti;ys&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Tu.bind(null,T=>""+T),h=Tu.bind(null,uM),d=Tu.bind(null,Lc);function f(T,q){let O,U;return BI(T)?(O=e.getRecordMatcher(T),U=q):U=T,e.addRoute(U,O)}function g(T){const q=e.getRecordMatcher(T);q&&e.removeRoute(q)}function v(){return e.getRoutes().map(T=>T.record)}function y(T){return!!e.getRecordMatcher(T)}function I(T,q){if(q=Ee({},q||c.value),typeof T=="string"){const _=Iu(n,T,q.path),E=e.resolve({path:_.path},q),w=s.createHref(_.fullPath);return Ee(_,E,{params:d(E.params),hash:Lc(_.hash),redirectedFrom:void 0,href:w})}let O;if("path"in T)O=Ee({},T,{path:Iu(n,T.path,q.path).path});else{const _=Ee({},T.params);for(const E in _)_[E]==null&&delete _[E];O=Ee({},T,{params:h(_)}),q.params=h(q.params)}const U=e.resolve(O,q),ve=T.hash||"";U.params=u(d(U.params));const p=wL(i,Ee({},T,{hash:aM(ve),path:U.path})),m=s.createHref(p);return Ee({fullPath:p,hash:ve,query:i===Qg?dM(T.query):T.query||{}},U,{redirectedFrom:void 0,href:m})}function P(T){return typeof T=="string"?Iu(n,T,c.value.path):Ee({},T)}function k(T,q){if(l!==T)return er(8,{from:q,to:T})}function R(T){return he(T)}function H(T){return R(Ee(P(T),{replace:!0}))}function ie(T){const q=T.matched[T.matched.length-1];if(q&&q.redirect){const{redirect:O}=q;let U=typeof O=="function"?O(T):O;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=P(U):{path:U},U.params={}),Ee({query:T.query,hash:T.hash,params:"path"in U?{}:T.params},U)}}function he(T,q){const O=l=I(T),U=c.value,ve=T.state,p=T.force,m=T.replace===!0,_=ie(O);if(_)return he(Ee(P(_),{state:typeof _=="object"?Ee({},ve,_.state):ve,force:p,replace:m}),q||O);const E=O;E.redirectedFrom=q;let w;return!p&&bL(i,U,O)&&(w=er(16,{to:E,from:U}),cn(U,U,!0,!1)),(w?Promise.resolve(w):Ie(E,U)).catch(A=>Dn(A)?Dn(A,2)?A:Jn(A):_e(A,E,U)).then(A=>{if(A){if(Dn(A,2))return he(Ee({replace:m},P(A.to),{state:typeof A.to=="object"?Ee({},ve,A.to.state):ve,force:p}),q||E)}else A=Pt(E,U,!0,m,ve);return ct(E,U,A),A})}function G(T,q){const O=k(T,q);return O?Promise.reject(O):Promise.resolve()}function ne(T){const q=us.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(T):T()}function Ie(T,q){let O;const[U,ve,p]=IM(T,q);O=wu(U.reverse(),"beforeRouteLeave",T,q);for(const _ of U)_.leaveGuards.forEach(E=>{O.push(si(E,T,q))});const m=G.bind(null,T,q);return O.push(m),lt(O).then(()=>{O=[];for(const _ of r.list())O.push(si(_,T,q));return O.push(m),lt(O)}).then(()=>{O=wu(ve,"beforeRouteUpdate",T,q);for(const _ of ve)_.updateGuards.forEach(E=>{O.push(si(E,T,q))});return O.push(m),lt(O)}).then(()=>{O=[];for(const _ of p)if(_.beforeEnter)if(an(_.beforeEnter))for(const E of _.beforeEnter)O.push(si(E,T,q));else O.push(si(_.beforeEnter,T,q));return O.push(m),lt(O)}).then(()=>(T.matched.forEach(_=>_.enterCallbacks={}),O=wu(p,"beforeRouteEnter",T,q),O.push(m),lt(O))).then(()=>{O=[];for(const _ of o.list())O.push(si(_,T,q));return O.push(m),lt(O)}).catch(_=>Dn(_,8)?_:Promise.reject(_))}function ct(T,q,O){a.list().forEach(U=>ne(()=>U(T,q,O)))}function Pt(T,q,O,U,ve){const p=k(T,q);if(p)return p;const m=q===ti,_=ys?history.state:{};O&&(U||m?s.replace(T.fullPath,Ee({scroll:m&&_&&_.scroll},ve)):s.push(T.fullPath,ve)),c.value=T,cn(T,q,O,m),Jn()}let qt;function Ci(){qt||(qt=s.listen((T,q,O)=>{if(!ra.listening)return;const U=I(T),ve=ie(U);if(ve){he(Ee(ve,{replace:!0}),U).catch(Xr);return}l=U;const p=c.value;ys&&xL(zg(p.fullPath,O.delta),Ml()),Ie(U,p).catch(m=>Dn(m,12)?m:Dn(m,2)?(he(m.to,U).then(_=>{Dn(_,20)&&!O.delta&&O.type===ko.pop&&s.go(-1,!1)}).catch(Xr),Promise.reject()):(O.delta&&s.go(-O.delta,!1),_e(m,U,p))).then(m=>{m=m||Pt(U,p,!1),m&&(O.delta&&!Dn(m,8)?s.go(-O.delta,!1):O.type===ko.pop&&Dn(m,20)&&s.go(-1,!1)),ct(U,p,m)}).catch(Xr)}))}let Vt=Sr(),pe=Sr(),Re;function _e(T,q,O){Jn(T);const U=pe.list();return U.length?U.forEach(ve=>ve(T,q,O)):console.error(T),Promise.reject(T)}function On(){return Re&&c.value!==ti?Promise.resolve():new Promise((T,q)=>{Vt.add([T,q])})}function Jn(T){return Re||(Re=!T,Ci(),Vt.list().forEach(([q,O])=>T?O(T):q()),Vt.reset()),T}function cn(T,q,O,U){const{scrollBehavior:ve}=t;if(!ys||!ve)return Promise.resolve();const p=!O&&OL(zg(T.fullPath,0))||(U||!O)&&history.state&&history.state.scroll||null;return Jh().then(()=>ve(T,q,p)).then(m=>m&&NL(m)).catch(m=>_e(m,T,q))}const wt=T=>s.go(T);let ls;const us=new Set,ra={currentRoute:c,listening:!0,addRoute:f,removeRoute:g,hasRoute:y,getRoutes:v,resolve:I,options:t,push:R,replace:H,go:wt,back:()=>wt(-1),forward:()=>wt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:pe.add,isReady:On,install(T){const q=this;T.component("RouterLink",gM),T.component("RouterView",EM),T.config.globalProperties.$router=q,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>zi(c)}),ys&&!ls&&c.value===ti&&(ls=!0,R(s.location).catch(ve=>{}));const O={};for(const ve in ti)Object.defineProperty(O,ve,{get:()=>c.value[ve],enumerable:!0});T.provide($f,q),T.provide(XI,E_(O)),T.provide(Vh,c);const U=T.unmount;us.add(T),T.unmount=function(){us.delete(T),us.size<1&&(l=ti,qt&&qt(),qt=null,c.value=ti,ls=!1,Re=!1),U()}}};function lt(T){return T.reduce((q,O)=>q.then(()=>ne(O)),Promise.resolve())}return ra}function IM(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(l=>Zs(l,a))?i.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Zs(l,c))||s.push(c))}return[n,i,s]}const wM={name:"Register",mounted(){this.signInWithGoogle()},methods:{signInWithGoogle(){const t=new qn,e=iy();gC(e,t).then(n=>{console.log(n.user),Wf.push("/main")})}}};function bM(t,e,n,i,s,r){return ge(),ke("button",{onClick:e[0]||(e[0]=(...o)=>r.signInWithGoogle&&r.signInWithGoogle(...o))},"Authenth")}const RM=kn(wM,[["render",bM]]);const AM={name:"MenuItem",props:["name","beforeSelected","afterSelected","selected","unselected"],methods:{menuClicked(){this.$emit("menuClicked",this.name)}},computed:{getMenuSrc(){return"menu_"+this.name+(this.selected?"":"_unselected")+".png"}}},CM=["src"];function SM(t,e,n,i,s,r){return ge(),ke("div",{onClick:e[0]||(e[0]=o=>r.menuClicked(n.name)),class:Fc(["menuItem",{afterSelected:n.afterSelected,beforeSelected:n.beforeSelected,selected:n.selected,unselected:n.unselected}])},[K("img",{class:"img_menu",src:r.getMenuSrc},null,8,CM)],2)}const PM=kn(AM,[["render",SM]]);const kM={name:"Menu",components:{MenuItem:PM},data(){return{menuItems:[{item:"play",selected:!0},{item:"statistiques",selected:!1}]}},methods:{menuClicked(t){this.menuItems.find(e=>e.item===t).selected=!0,this.menuItems.filter(e=>e.item!==t).forEach(e=>e.selected=!1),this.$emit("menuClicked",t)},itemSelected(t){return this.menuItems.find(e=>e.item===t).selected},itemUnselected(t){return this.menuItems.find(e=>e.item===t).selected===!1},isBeforeSelected(t){const e=this.menuItems.findIndex(n=>n.selected);return this.menuItems[e-1]!==void 0&&this.menuItems[e-1].item===t},isAfterSelected(t){const e=this.menuItems.findIndex(n=>n.selected);return this.menuItems[e+1]!==void 0&&this.menuItems[e+1].item===t}}},NM={class:"menuPanel"};function xM(t,e,n,i,s,r){const o=fi("MenuItem");return ge(),ke("div",NM,[(ge(!0),ke(tt,null,Ka(s.menuItems,a=>(ge(),qs(o,{name:a.item,beforeSelected:r.isBeforeSelected(a.item),afterSelected:r.isAfterSelected(a.item),selected:r.itemSelected(a.item),unselected:r.itemUnselected(a.item),onMenuClicked:r.menuClicked},null,8,["name","beforeSelected","afterSelected","selected","unselected","onMenuClicked"]))),256))])}const OM=kn(kM,[["render",xM]]),At=uv({id:"partyFFVL",state:()=>({qcms:[],newQcms:[],nbErrors:0,hasAlreadyPlayed:!1}),actions:{setAnswerd(t){this.qcms.find(e=>e.id===t).answered=!0},setValidated(t){this.qcms.find(e=>e.id===t).validated=!0},setQCMs(t){this.qcms=t},setNewQCMs(t){this.newQcms=t},setNbErrors(t){this.nbErrors=t}},getters:{}});let Aa;const DM=new Uint8Array(16);function LM(){if(!Aa&&(Aa=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Aa))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Aa(DM)}const Ze=[];for(let t=0;t<256;++t)Ze.push((t+256).toString(16).slice(1));function MM(t,e=0){return Ze[t[e+0]]+Ze[t[e+1]]+Ze[t[e+2]]+Ze[t[e+3]]+"-"+Ze[t[e+4]]+Ze[t[e+5]]+"-"+Ze[t[e+6]]+Ze[t[e+7]]+"-"+Ze[t[e+8]]+Ze[t[e+9]]+"-"+Ze[t[e+10]]+Ze[t[e+11]]+Ze[t[e+12]]+Ze[t[e+13]]+Ze[t[e+14]]+Ze[t[e+15]]}const qM=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),t_={randomUUID:qM};function VM(t,e,n){if(t_.randomUUID&&!e&&!t)return t_.randomUUID();t=t||{};const i=t.random||(t.rng||LM)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){n=n||0;for(let s=0;s<16;++s)e[n+s]=i[s];return e}return MM(i)}function JI(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function bu(t){return t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()}function ZI(t){const e=t.split("/");return new Date(e[2],e[1]-1,e[0])}function Zr(){return new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()}function Ru(t){const e=ZI(t.reminder.answeredDate);return e.setDate(e.getDate()+t.reminder.remindDelay),e}const FM={name:"QuestionFFVL",props:["qcm","dryrun"],watch:{qcm:{handler:function(t,e){t.id!==e.id&&this.updateCalendarLogoPath(t)},deep:!0}},data(){return{checkboxes:[],resultsColor:[],resultsDecoration:[],validated:!1,headerColor:"",headerBackgroundColor:"",responsePoint:"",delayResult:"",hasBeenAnswered:!0,calendarLogoPath:"calendar.png"}},computed:{choicesSuffled(){return JI(this.qcm.choices)}},methods:{validate(){this.hasBeenAnswered=this.qcm.answered,this.validated=!0;let t=0,e=0,n=!0;for(let r in this.qcm.choices)this.qcm.choices[r].point>0&&(t+=this.qcm.choices[r].point),this.qcm.choices[r].point<=0&&!this.checkboxes[r]?(this.resultsColor[r]="gray",this.resultsDecoration[r]="line-through"):this.qcm.choices[r].point<=0&&this.checkboxes[r]?(this.resultsColor[r]="red",e+=this.qcm.choices[r].point):this.qcm.choices[r].point>=0&&this.checkboxes[r]?(this.resultsColor[r]="green",e+=this.qcm.choices[r].point):this.qcm.choices[r].point>=0&&!this.checkboxes[r]&&(this.resultsColor[r]="black");t==e?(this.headerColor="#3c763d",this.headerBackgroundColor="#dff0d8",At().setValidated(this.qcm.id)):e>0?(this.headerColor="#AA6C00",this.headerBackgroundColor="#FFE5C1",n=!1):(this.headerColor="#a94442",this.headerBackgroundColor="#f2dede",n=!1);let i=this.qcm.reminder==null?"New":this.qcm.reminder.remindDelay,s=this.qcm.reminder==null?"New":this.qcm.reminder.remindDelay;if(!this.qcm.answered){let r=this.getReminderDelay(n);const o=new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear();this.qcm.reminder==null&&!this.dryrun?(s=r,this.insertQuestionReminder(r,o)):o!=this.qcm.reminder.answeredDate&&!this.dryrun&&(this.updateQuestionReminder(r,o),s=r)}this.responsePoint=e>0?e:"0",!this.qcm.answered&&!n&&At().setNbErrors(At().nbErrors+1),At().setAnswerd(this.qcm.id),this.delayResult=`${i} => ${s}`},async reset(){await _u(gu(ja,"QcmReminder"+za,this.qcm.reminder.id),{answeredDate:Zr(),firstAnsweredDate:Zr(),qcmId:this.qcm.id,remindDelay:0}),this.getNextQuestion()},getReminderDelay(t){if(this.qcm.reminder==null)return t?1:0;const e=[0,1,2,3,5,8,13,21,34,55],n=e.indexOf(this.qcm.reminder.remindDelay);return t?n==9?55:e[n+1]:n==0?0:e[n-1]},getNextQuestion(){this.resetcss(),this.$emit("getNextQuestion"),this.updateCalendarLogoPath(this.qcm)},updateCalendarLogoPath(t){this.calendarLogoPath=this.dryrun||t.answered?"calendar_crossed.png":"calendar.png"},resetcss(){this.resultsColor=[],this.resultsDecoration=[],this.validated=!1,this.headerColor="",this.headerBackgroundColor="",this.responsePoint="";for(let t=0;t<this.checkboxes.length;t++)this.checkboxes[t]=!1},async insertQuestionReminder(t,e){await _u(gu(ja,"QcmReminder"+za,VM()),{answeredDate:e,firstAnsweredDate:e,qcmId:this.qcm.id,remindDelay:t})},async updateQuestionReminder(t,e){await _u(gu(ja,"QcmReminder"+za,this.qcm.reminder.id),{answeredDate:e,qcmId:this.qcm.id,remindDelay:t})}}},UM={class:"questionPanel"},zM={class:"questionAsked"},jM={class:"questionText"},BM={class:"calendarDiv"},$M=["src"],WM={key:0,class:"resultPanel"},HM=["id","onUpdate:modelValue"],KM=["for"],GM={key:0},QM={class:"buttonsPanel"};function YM(t,e,n,i,s,r){return ge(),ke("div",UM,[K("div",zM,[K("div",{class:"questionHeader",style:eo({color:s.headerColor,"background-color":s.headerBackgroundColor})},[K("span",jM,Rt(n.qcm.question),1),K("div",BM,[K("img",{src:s.calendarLogoPath,class:"calendarLogo",style:{float:"right"}},null,8,$M)])],4),s.validated&&!this.hasBeenAnswered&&!this.dryrun?(ge(),ke("div",WM)):Gt("",!0),(ge(!0),ke(tt,null,Ka(r.choicesSuffled,(o,a)=>(ge(),ke("div",{class:"questionChoice",style:eo({color:s.resultsColor[a],"text-decoration":s.resultsDecoration[a]})},[V_(K("input",{id:a,type:"checkbox","onUpdate:modelValue":c=>s.checkboxes[a]=c},null,8,HM),[[gb,s.checkboxes[a]]]),K("label",{for:a},Rt(o.choice),9,KM),s.validated?(ge(),ke("span",GM,"("+Rt(o.point)+")",1)):Gt("",!0)],4))),256))]),K("div",QM,[s.validated?Gt("",!0):(ge(),ke("button",{key:0,class:"button-4, actionButton",onClick:e[0]||(e[0]=(...o)=>r.validate&&r.validate(...o))},"OK")),!s.validated&&n.qcm.reminder!==void 0?(ge(),ke("button",{key:1,class:"button-4, actionButton",onClick:e[1]||(e[1]=(...o)=>r.reset&&r.reset(...o))},"Reset")):Gt("",!0),s.validated?(ge(),ke("button",{key:2,class:"button-4, actionButton",onClick:e[2]||(e[2]=(...o)=>r.getNextQuestion&&r.getNextQuestion(...o))},"Next")):Gt("",!0)])])}const XM=kn(FM,[["render",YM],["__scopeId","data-v-00b4dfaf"]]),jt=uv({id:"globalFFVL",state:()=>({qcms:[{id:1,question:"Vous volez au taux de chute minimum ; vous allez rentrer dans une ascendance",choices:[{choice:"vous vous préparez à freiner",point:-6},{choice:"vous vous préparez à relâcher les freins",point:0},{choice:"vous conservez votre régime de vol",point:0},{choice:"vous augmentez votre vitesse",point:6}]},{id:2,question:"Lorsqu'une particule d'air nuageux est soulevée, sa température",choices:[{choice:"décroît plus lentement que si la particule contenait de l'air clair",point:6},{choice:"décroît plus vite que si la particule contenait de l'air clair",point:-6},{choice:"croît plus vite que si la particule contenait de l'air clair",point:-6}]},{id:3,question:'Vous faites les "oreilles"',choices:[{choice:"traverser un gradient ou une turbulence peut accroître considérablement votre taux de chute",point:2},{choice:"votre finesse diminue",point:2},{choice:"l'incidence augmente",point:2},{choice:"il n'existe aucun risque de parachutage",point:-6}]},{id:4,question:"Facteurs favorisant l'instabilité",choices:[{choice:"l'arrivée d'air chaud dans la basse couche",point:3},{choice:"l'arrivée d'air chaud en altitude",point:-6},{choice:"le refroidissement du sol",point:-6},{choice:"le réchauffement du sol",point:3}]},{id:5,question:"En général un front froid engendre des nuages",choices:[{choice:"par couches minces stratiformes",point:-6},{choice:"isolés de type cumuliformes",point:-6},{choice:"développés sur une grande épaisseur et des 2 types",point:6}]},{id:6,question:"Deux ailes se suivent tout près d'un relief situé à leur droite, la deuxième aile est plus rapide",choices:[{choice:"elle double par la gauche",point:-6},{choice:"elle double par la droite entre le relief et l'autre aile",point:-6},{choice:"elle fait demi-tour",point:6}]},{id:7,question:"Un altimètre permet d'obtenir une information sur",choices:[{choice:"la variation du taux d'humidité",point:-6},{choice:"le gradient vertical de pression atmosphérique",point:0},{choice:"l'altitude",point:6}]},{id:8,question:"Puis-je prévoir d'atterrir en delta ou parapente sur un aérodrome contrôlé ?",choices:[{choice:"Non, les PUL ne peuvent utiliser un aérodrome contrôlé sans autorisation particulière de l'autorité compétente",point:6},{choice:"Oui, mais il faut que je respecte le circuit d'aérodrome",point:-6},{choice:"Oui, il me suffit d'annoncer mon arrivée par radio",point:-6}]},{id:9,question:"Si deux pilotes ont la même aile, à même incidence, le plus lourd",choices:[{choice:"descend moins vite",point:-6},{choice:"vole plus vite",point:3},{choice:"descend plus vite",point:3},{choice:"vole moins vite",point:-6}]},{id:10,question:"Faire une descente rapide en 360° enchaînés et serrés",choices:[{choice:"vous expose à des facteurs de charges importants",point:2},{choice:"vous fait perdre toute référence extérieure",point:2},{choice:"peut entraîner une perte de connaissance",point:2},{choice:"est toujours sans danger",point:-6}]},{id:11,question:"Si vous volez par vent arrière fort",choices:[{choice:"votre vitesse-sol est augmentée",point:6},{choice:"vous avez moins de portance sur votre parapente",point:-6},{choice:"l'effet du vent sur votre visage sera bien plus fort",point:-6},{choice:"cela fragilise votre parapente qui peut se fermer plus facilement",point:-6}]},{id:12,question:"Un mouvement de lacet à droite déclenche principalement",choices:[{choice:"un couple piqueur",point:-6},{choice:"du roulis induit à gauche",point:-6},{choice:"du roulis induit à droite",point:6},{choice:"un couple cabreur",point:-6}]},{id:13,question:"Une bulle d'air s'élève si sa température par rapport à l'air ambiant est",choices:[{choice:"égale",point:-6},{choice:"inférieure",point:-6},{choice:"supérieure",point:6}]},{id:14,question:"Vous ne pouvez pas",choices:[{choice:"décoller 30 minutes après le coucher du soleil",point:2},{choice:"décoller si le pilote précédent est à moins de 100 mètres",point:2},{choice:"rester en vol au delà de 30 minutes après le coucher du soleil",point:2}]},{id:15,question:"Le 360° en prise de terrain",choices:[{choice:"est tout à fait déconseillé",point:2},{choice:"permet d'être précis à l'atterrissage",point:-6},{choice:"vous expose à des risques importants de collision avec les autres ailes en approche",point:2},{choice:"vous fait perdre de vue les repères au sol",point:2}]},{id:16,question:"A niveau de vol égal, la priorité en vol revient",choices:[{choice:"par convention, à l'aile arrivée la première dans l'ascendance",point:2},{choice:"à l'aile qui arrive par la droite",point:4},{choice:"au biplace sur le monoplace",point:-6},{choice:"à l'aile pilotée par un débutant",point:-6}]},{id:17,question:"Durant un vol de pente à 50m du sol, le sifflement du vent faiblit et votre aile s'enfonce en se trouvant proche de la vitesse de décrochage ; pour éviter le crash",choices:[{choice:"vous freinez immédiatement pour ralentir la vitesse de rapprochement du sol",point:-6},{choice:"vous engagez immédiatement un virage prononcé pour vous éloigner de la pente",point:-6},{choice:"vous appliquez votre poids du côté dégagé en relevant les mains puis, dès que la vitesse est revenue, vous utilisez la commande pour virer",point:6}]},{id:18,question:"Un altimètre",choices:[{choice:"peut être calé à différentes valeurs (niveau de la mer, du décollage, de l'atterrissage, etc.)",point:2},{choice:"est calé définitivement à la construction",point:-6},{choice:"doit toujours être comparé et réglé par rapport aux valeurs connues (décollage, points reconnus, atterrissage)",point:2},{choice:"donne une indication variant avec les données atmosphériques",point:2}]},{id:19,question:"Les nuages de type cumulus",choices:[{choice:"caractérisent des couches plutôt instables",point:3},{choice:"se développent horizontalement",point:-6},{choice:"se développent verticalement",point:3},{choice:"caractérisent des couches plutôt stables",point:-6}]},{id:20,question:"Par rapport à l'air chaud, à pression et à volumes égaux l'air froid est",choices:[{choice:"plus lourd",point:6},{choice:"identique",point:-6},{choice:"plus léger",point:-6}]},{id:21,question:'Une voile classée "A" aux tests de la norme CEN',choices:[{choice:"permet au pilote de voler en conditions fortes",point:-6},{choice:"tolère, à l'écart du relief, des imprécisions de pilotage dans des conditions aérologiques modérées",point:3},{choice:"a des qualités d'amortissement des turbulences intéressantes pour l'apprentissage",point:3}]},{id:22,question:"Quelles contraintes peuvent engendrer les évènements sportifs, culturels ou politiques ?",choices:[{choice:"Des restrictions d'horaires et de volumes de vol matérialisés par des ZRT et/ou des ZIT",point:6},{choice:"Des NOTAM d'information pour renforcer la vigilance des pilotes",point:-6},{choice:"Les aéronefs non motorisés doivent simplement ne pas survoler les lieux de déroulement",point:-6}]},{id:23,question:"Le départ en vrille en parapente est précédé",choices:[{choice:"du sentiment que l'aile a du mal à tourner",point:2},{choice:"d'une augmentation du bruit du vent relatif dans les oreilles du pilote",point:-6},{choice:"d'une commande intérieure dure et largement abaissée",point:2},{choice:"d'un affaiblissement du bruit du vent relatif dans les oreilles du pilote",point:2}]},{id:24,question:"Les ascendances thermiques",choices:[{choice:"montent toujours verticalement",point:-6},{choice:"se déclenchent souvent sur des sols contrastés",point:2},{choice:"sont en général entourées de descendances",point:2},{choice:"peuvent se présenter sous forme de bulles ou de colonnes",point:2}]},{id:25,question:"En vol turbulent, votre voile se ferme par devant sur une grande longueur du bord d'attaque",choices:[{choice:"vous tirez brièvement sur les deux freins puis, sans délai, relevez vos mains",point:3},{choice:"vous remontez les freins à vitesse max",point:-6},{choice:"vous augmentez l'incidence de votre aile",point:3}]},{id:26,question:'Vous faites les "oreilles"',choices:[{choice:"cela améliore votre pénétration",point:-6},{choice:"votre finesse est dégradée",point:3},{choice:"votre taux de chute est augmenté",point:3},{choice:"ainsi, la voile ne fermera jamais",point:-6}]},{id:27,question:"La convection dans un profil de masse d'air plutôt stable",choices:[{choice:"est impossible",point:-6},{choice:"peut se concentrer le long des pentes bien exposées au soleil",point:3},{choice:"est possible si un réchauffement suffisant du sol est obtenu",point:3}]},{id:28,question:"Les nuages matérialisant les ondes de ressaut sont des",choices:[{choice:"cumulus congestus et cumulonimbus",point:-6},{choice:"altocumulus lenticulaires et cumulus rotors",point:6},{choice:"cirrostratus et nimbo stratus",point:-6}]},{id:29,question:"Vous volez vent arrière ; votre vitesse/air de croisière est égale à la vitesse du vent météo ; le sol",choices:[{choice:"paraît fixe",point:-6},{choice:"défile 2 fois moins vite que par vent nul",point:-6},{choice:"défile 2 fois plus vite que par vent nul",point:6}]},{id:30,question:"Les avions de chasse de la Défense peuvent-ils évoluer en espace G et E ?",choices:[{choice:"Oui, à n'importe quel moment, en fonction du mode de vol appliqué",point:6},{choice:"Non, uniquement dans les zones militaires de type, R, RTBA, P, ZIT, CTR et TMA",point:-6},{choice:"Oui, mais seulement si un exercice militaire a été programmé",point:-6}]},{id:31,question:"En régime turbulent, il vaut mieux",choices:[{choice:"ne pas taquiner les vitesses trop basses",point:2},{choice:"ne jamais faire d'évolutions serrées",point:2},{choice:"ne pas taquiner les vitesses trop élevées",point:2}]},{id:32,question:"Indiquez les facteurs favorisant la convection",choices:[{choice:"un réchauffement important au niveau du sol",point:3},{choice:"un vent très fort",point:-6},{choice:"un vent de force moyenne",point:3},{choice:"pas de vent du tout",point:0}]},{id:33,question:"La qualification d'accompagnateur fédéral",choices:[{choice:"est reconnue et délivrée par l'ensemble des pilotes du club",point:-3},{choice:"est délivrée suite à plusieurs journées de formation spécifique",point:2},{choice:"est auto-délivrée par le pilote concerné",point:-6},{choice:"est reconnue par la FFVL et délivrée par le responsable régional formation (RRF)",point:4}]},{id:34,question:"Un vent régulier en force et direction n'a aucune influence",choices:[{choice:"sur la finesse-sol",point:-6},{choice:"sur la vitesse-sol",point:-6},{choice:"sur la vitesse-air",point:6}]},{id:35,question:"Le variomètre de base mesure la vitesse verticale",choices:[{choice:"de l'aile par rapport à la masse d'air",point:-6},{choice:"de la masse d'air par rapport à l'aile",point:-6},{choice:"de l'aile par rapport au sol",point:6},{choice:"de la masse d'air par rapport au sol",point:-6}]},{id:36,question:"Que faut-il prendre en compte pour une valeur exprimée en FL ?",choices:[{choice:"Etant basée sur une pression standard, l'altitude correspondante est variable",point:6},{choice:"Il faut une instrumentation spécifique, cela est destiné au trafic IFR uniquement",point:-6},{choice:"Il faut ajouter l'altitude du décollage pour pouvoir utiliser une valeur en FL",point:-6}]},{id:37,question:'En faisant les "oreilles"',choices:[{choice:"l'incidence diminue",point:-6},{choice:"vous améliorez l'amortissement en tangage",point:3},{choice:'vous gardez votre "tour de frein"',point:-6},{choice:"la traînée augmente",point:3}]},{id:38,question:"Vous vous apprêtez à décoller à 15 heures sur un versant ensoleillé où s'est établi une légère brise montante. Le vent météo est nul",choices:[{choice:"le vent sera nul ou très faible en vallée",point:-6},{choice:"vous devez envisager l'éventualité d'un vent de vallée fort, surtout si la vallée est étroite",point:3},{choice:"dans tous les cas, il est prudent de prévoir des possibilités tenant compte d'un éventuel vent de vallée fort",point:3}]},{id:39,question:"Les ondes de ressaut se rencontrent en altitude",choices:[{choice:"n'importe où dans une couche d'air instable",point:-6},{choice:"sous le vent d'un relief dans une couche d'air stable",point:6},{choice:"au vent d'un relief dans une couche d'air stable",point:-6}]},{id:40,question:"Cochez les affirmations exactes",choices:[{choice:"les nimbostratus donnent des chutes de grêlons",point:-6},{choice:"les cirrus sont constitués de cristaux de glace",point:3},{choice:"les stratus sont constitués de cristaux de glace",point:-6},{choice:"les cumulonimbus sont constitués de gouttes d'eau et de cristaux de glace",point:3}]},{id:41,question:"La vapeur d'eau",choices:[{choice:"est présente au sol certains matins sous forme de rosée",point:-6},{choice:"est invisible",point:6},{choice:"est visible sous forme de buée blanche",point:-6}]},{id:42,question:"Le freinage final par vent fort",choices:[{choice:"n'est pas dangereux",point:-6},{choice:"demande un dosage précis et limité en amplitude",point:3},{choice:"n'est pas toujours nécessaire",point:3}]},{id:43,question:"L'hectopascal est une unité de",choices:[{choice:"pression",point:6},{choice:"température",point:-6},{choice:"humidité",point:-6}]},{id:44,question:"La portance d'une aile est due à",choices:[{choice:"la déviation non symétrique des filets d'air par le profil de l'aile",point:3},{choice:"une dépression apparaissant au dessus du profil et une surpression au dessous",point:3},{choice:"une dépression apparaissant au dessous du profil et une surpression au dessus",point:-6}]},{id:45,question:"Le poids apparent sur un appareil en virage équilibré est",choices:[{choice:"supérieur au poids total aile+pilote",point:6},{choice:"inférieur au poids total aile+pilote",point:-6},{choice:"égal au poids totale aile+pilote",point:-6}]},{id:46,question:"L'anémomètre est un instrument indiquant",choices:[{choice:"la vitesse du vent relatif à bord",point:3},{choice:"la direction du vent",point:-6},{choice:"la vitesse du vent instantané",point:3}]},{id:47,question:"Le label École Française de Vol Libre (EFVL) ou Club-École français de Vol Libre (CEFVL)",choices:[{choice:"permet à un club d'enseigner sans moniteur",point:-6},{choice:"garantit à l'élève le respects des exigences fédérales en matière d'apprentissage",point:6},{choice:"est nécessaire pour enseigner",point:-6}]},{id:48,question:"Vous constatez une diminution du vent relatif. L'aile s'enfonce. Vous réagissez en",choices:[{choice:"en débridant totalement l'aile quitte à produire une abattée et augmenter le taux de chute",point:6},{choice:"faisant les oreilles pour fuir au plus vite le secteur",point:-6},{choice:"tirant sur les freins pour réduire le taux de chute qui est en passe d'augmenter",point:-6}]},{id:49,question:"Le ciel est progressivement envahi par des cirrus de plus en plus denses, puis par un voile de cirrostratus de 7/8",choices:[{choice:"il va y avoir du brouillard cette nuit",point:0},{choice:"un front chaud arrive, il va probablement pleuvoir",point:6},{choice:"un cumulonimbus est en cours de formation",point:-6},{choice:"la convection thermique va se renforcer car l'atmosphère se réchauffe",point:-6}]},{id:50,question:"Dans quels types d'espaces militaires le pilote de l'aéronef militaire ne peut assurer l'anticollision ?",choices:[{choice:"L'anticollision n'est jamais assurée dans les zones d'entrainement militaires",point:-6},{choice:"Dans les zones R et dans les ZIT",point:-6},{choice:"Dans le RTBA activé, car le pilote évolue souvent en mode automatique de suivi de terrain",point:6}]},{id:51,question:"Les nuages favorables aux vols de performances sont les",choices:[{choice:"nimbostratus, altostratus et cumulonimbus",point:-6},{choice:"stratus",point:-6},{choice:"cirrocumulus, nimbostratus et stratocumulus",point:-6},{choice:"cumulus",point:6}]},{id:52,question:"Avec les oreilles",choices:[{choice:"mon nouveau taux de chute me permet de facilement redescendre dans toutes les situations aérologiques",point:-6},{choice:"il est recommandé d'avoir l'accélérateur au pied en cas de phase parachutage",point:3},{choice:"je n'ai plus d'autre choix que de piloter les grandes lignes de ma trajectoire à la sellette",point:3}]},{id:53,question:"Une couche de stratus de 40m d'épaisseur est située sous le décollage",choices:[{choice:"s'il y a un vent suffisant pour faire du vol de pente, vous décollez et vous restez au dessus de la couche",point:-6},{choice:"40m c'est peu ; vous décollez",point:-6},{choice:"vous attendez en espérant que la nuée se dégage sinon vous ne décollez pas",point:6}]},{id:54,question:"Les déclarations d'accident doivent être envoyées",choices:[{choice:"sous les 15 jours à l'assureur",point:-6},{choice:"sous 5 jours à la F.F.V.L. qui transmet à l'assureur",point:6},{choice:"sous les 15 jours à la FFVL",point:-6}]},{id:55,question:"La traînée de forme de l'ensemble aile+pilote est la traînée",choices:[{choice:"de pression due au pilote, aux suspentes et à l'aile",point:6},{choice:"due aux irrégularités de surface de l'aile",point:-6},{choice:"due aux tourbillons marginaux",point:-6}]},{id:56,question:"Les ondes de ressaut se développent lorsque le vent",choices:[{choice:"est faible en altitude et la masse d'air très instable",point:-6},{choice:"est de plus en plus fort en altitude et la masse d'air stable",point:6},{choice:"est fort près du sol et la masse d'air très instable",point:-6}]},{id:57,question:"Le taux de chute minimum",choices:[{choice:"correspond à un angle d'incidence plus petit que celui de vitesse-max",point:-6},{choice:"correspond à un angle d'incidence plus grand que celui de finesse-max",point:3},{choice:"peut s'utiliser en permanence sans risque en ascendance",point:-6},{choice:"est le régime de vol utile le plus proche du décrochage",point:3}]},{id:58,question:"Un variomètre indique",choices:[{choice:"la vitesse verticale de votre aile par rapport au sol",point:6},{choice:"la hauteur de votre aile",point:-6},{choice:"la direction de votre aile par rapport au nord",point:-6}]},{id:59,question:"Priorités en aéronefs non motorisés",choices:[{choice:"les P.U.L. sont prioritaires sur les ensembles remorqués (avion+planeur, U.L.M.+delta, avion ou U.L.M.+banderole)",point:6},{choice:"les ballons doivent la priorité aux P.U.L",point:-6},{choice:"les P.U.L. biplace sont prioritaires sur les P.U.L monoplace",point:-3}]},{id:60,question:"La cause de formation des nuages, c'est",choices:[{choice:"une forte descendance",point:-6},{choice:"Le réchauffement de l'air ascendant",point:-6},{choice:"le refroidissement de l'air jusqu'à son niveau de condensation",point:6}]},{id:61,question:"En vol, la diminution importante du vent relatif a pour conséquence",choices:[{choice:"une abattée dont l'amplitude peut exiger d'être contrôlée",point:2},{choice:"l'affaiblissement du bruit du vent dans les oreilles",point:2},{choice:"de vous obliger à lever vos mains pour favoriser la reprise de vitesse",point:2},{choice:"de vous obliger à abaisser vos mains pour garder le contact avec l'aile",point:-6}]},{id:62,question:"La traînée sur l'ensemble aile+pilote",choices:[{choice:"se divise en traînée de forme + traînée induite + traînée de frottement",point:6},{choice:"est indépendante de la vitesse-air",point:-6},{choice:"est indépendante de la forme de l'aile",point:-6}]},{id:63,question:"Les relations entre accompagnateur fédéral et écoles de vol libre",choices:[{choice:"sont à éviter absolument",point:-6},{choice:"pourraient nuire à la bonne évolution de l'activité",point:-6},{choice:"sont indispensables dans l'intérêt des pratiquants",point:3},{choice:"améliorent et facilitent le rôle de chacun pour la progression du nouveau pilote",point:3}]},{id:64,question:"La vapeur d'eau",choices:[{choice:"est visible (fines gouttelettes d'eau)",point:-6},{choice:"est invisible",point:4},{choice:"existe uniquement dans l'air maritime",point:-6},{choice:"existe partout dans la troposphère",point:2}]},{id:65,question:"Un thermique pur ou bleu",choices:[{choice:"permet un gain minimum de 1000m",point:-6},{choice:"ne se forme que dans une couche d'air à tendance stable",point:-6},{choice:"est dangereux pour nos ailes",point:-6},{choice:"n'est pas coiffé par un cumulus",point:6}]},{id:66,question:"Dans l'hémisphère nord lorsque vous êtes face au vent, vous avez",choices:[{choice:"les hautes pressions dans votre dos",point:-6},{choice:"les hautes pression à droite",point:-6},{choice:"les basses pressions à droite",point:6}]},{id:67,question:"Vous empruntez l'aile d'un pilote plus lourd que vous",choices:[{choice:"elle sera plus maniable",point:-6},{choice:"Les actions aux commandes seront moins efficaces",point:2},{choice:"elle se refermera plus facilement dans les turbulences",point:2},{choice:"le taux de chute sera légèrement plus favorable",point:2}]},{id:68,question:"Le meilleur profil d'un terrain de décollage est",choices:[{choice:"tel que vous pourrez facilement vous arrêter en cas de problèmes au gonflage",point:2},{choice:"tel que vous pourrez vous éloigner assez vite du relief",point:2},{choice:"concave",point:-6},{choice:"convexe",point:2}]},{id:69,question:"L'assemblée générale d'une association loi 1901 affiliée à la F.F.V.L. (votre club)",choices:[{choice:"est obligatoire tous les ans",point:6},{choice:"est obligatoire tous les 2 ans",point:-6},{choice:"n'est obligatoire qu'à la fondation du club",point:-6}]},{id:70,question:"L'altimètre",choices:[{choice:"ne subit pas l'influence des variations de température",point:-6},{choice:"utilise une échelle d'altitude calibrée pour des valeurs météo moyennes (atmosphère standard)",point:3},{choice:"indique la vitesse à laquelle varie la pression",point:-6},{choice:"même en parfait état est susceptible d'afficher pour une altitude donnée des valeurs qui peuvent varier selon l'heure et le lieu",point:3}]},{id:71,question:"Se relever dans la sellette en finale augmente",choices:[{choice:"la traînée induite",point:-6},{choice:"la traînée d'effet de sol",point:-6},{choice:"la traînée de forme",point:6}]},{id:72,question:"Voler en local d'un atterrissage, c'est",choices:[{choice:"avoir une autonomie qui permet de le rejoindre à tout moment quelles que soient les conditions aérologiques rencontrées",point:6},{choice:"rester sur un site habituel sans faire de distance",point:-6}]},{id:73,question:"Une aile arrive en face de vous, vous effectuez",choices:[{choice:"un virage à droite (l'autre dégage aussi à droite)",point:6},{choice:"une mise en descente (l'autre reste au même niveau)",point:-6},{choice:"un virage à gauche (l'autre dégage aussi à gauche)",point:-6}]},{id:74,question:"Le container du parachute de secours",choices:[{choice:"doit être verrouillé par un nœud",point:-6},{choice:"peut être positionné sous la planche d'assise de la sellette",point:2},{choice:"peut être positionné en position ventrale",point:2},{choice:"peut être positionné au dos de la sellette",point:2}]},{id:75,question:"La formation d'onde de ressaut est favorisée par",choices:[{choice:"une atmosphère humide",point:-6},{choice:"une atmosphère instable",point:-6},{choice:"une atmosphère stable",point:6}]},{id:76,question:"Une aile en vol stabilisé dans une ascendance",choices:[{choice:"descend par rapport à l'air ascendant",point:6},{choice:"monte à la même vitesse que l'air ascendant",point:-6},{choice:"monte par rapport à l'air ascendant",point:-6}]},{id:77,question:"Une école non reconnue par la F.F.V.L.",choices:[{choice:"peut attester le brevet de pilote confirmé",point:-6},{choice:"peut enseigner si les moniteurs possèdent les diplômes requis",point:6},{choice:"peut attester la partie pratique du brevet de pilote",point:-6}]},{id:78,question:"Au décollage, avec 20 km/h de face, vous pouvez gonfler votre voile",choices:[{choice:"dos à l'aile en vous attendant à devoir résister en reculant pour contrôler la vitesse d'ascension du profil",point:3},{choice:"face à l'aile en ordonnant à une aide extérieure de résister avec vous à la traction de votre voile",point:-6},{choice:"face à l'aile en vous attendant à devoir résister en avançant pour contrôler la vitesse d'ascension du profil",point:3},{choice:"dos à l'aile en vous préparant à mettre beaucoup d'énergie pour contrecarrer la force du vent",point:-6}]},{id:79,question:"Le vent météo",choices:[{choice:"s'affaiblit lorsque les isobares se resserrent",point:-6},{choice:"se renforce lorsque les isobares se resserrent",point:6},{choice:"n'a rien à voir avec l'espacement des lignes isobares",point:-6}]},{id:80,question:"Dans une atmosphère à tendance instable",choices:[{choice:"les cumulus ont tendance à se développer",point:3},{choice:"les stratus ont tendance à se développer",point:-6},{choice:"la température décroît rapidement quand on s'élève en altitude",point:3},{choice:"il y a peu d'ascendances",point:-6}]},{id:81,question:"Pour réduire le risque de fermeture en parapente, il faudra",choices:[{choice:"débrider l'aile ou la demi aile concernée",point:-6},{choice:"brider l'aile ou la demi aile concernée",point:3},{choice:"diminuer l'incidence",point:-6},{choice:"augmenter l'incidence",point:3}]},{id:82,question:"30 km/h de vent de face au décollage ; vous êtes seul",choices:[{choice:"un pilote expérimenté peut, sur un site adapté, décoller en gonflant dos au vent",point:-6},{choice:"vous essayez de gonfler car ça partira tout seul sans avoir besoin de courir",point:-6},{choice:"c'est trop ; vous vous abstenez",point:6}]},{id:83,question:"Types de fronts possibles dans une perturbation",choices:[{choice:"tempéré",point:-6},{choice:"chaud",point:2},{choice:"occlus",point:2},{choice:"froid",point:2}]},{id:84,question:"L'allongement d'une aile est égale au carré",choices:[{choice:"de l'envergure divisé par la surface",point:6},{choice:"de la surface divisé par l'envergure",point:-6},{choice:"de la corde divisé par la surface",point:-6}]},{id:85,question:"La finesse-air est le rapport",choices:[{choice:"distance parcourue horizontalement sur distance parcourue verticalement",point:-6},{choice:"portance sur traînée",point:3},{choice:"vitesse-air horizontale sur vitesse-air verticale",point:3},{choice:"traînée sur portance",point:-6}]},{id:86,question:"L'effet pendulaire spécifique au parapente",choices:[{choice:"peut être la cause d'amples mouvements de tangage et de roulis",point:2},{choice:"est une priorité en pilotage pour la sécurité du vol en parapente",point:2},{choice:"génère des mouvements de lacet",point:-6},{choice:"est produit par la différence de vitesse entre le pilote et sa voile",point:2}]},{id:87,question:"Vous vous posez en catastrophe dans un champ de blé non fauché",choices:[{choice:"vous êtes dans votre tort et vous devez régler le prix sur place",point:-6},{choice:"vous allez vous excuser auprès du cultivateur",point:3},{choice:"vous estimez les dégâts et vous le dédommagez immédiatement",point:-6},{choice:"vous demandez au cultivateur d'estimer les dégâts et vous faites une déclaration à l'assureur de la F.F.V.L.",point:3}]},{id:88,question:"Les signes distinctifs du Cumulonimbus et du Nimbostratus sont",choices:[{choice:"le Ns est accompagné d'un orage et le Cb d'un halo",point:-6},{choice:"le Ns donne des averses violentes, le Cb de la pluie continue",point:-6},{choice:"le Ns donne de la pluie continue et le Cb des pluies orageuses, des éclairs et des vents forts tourbillonnants",point:6}]},{id:89,question:"Le vol de pente nécessite",choices:[{choice:"d'être habitué aux effets de dérive imposés par le vent",point:2},{choice:"une observation constante de l'évolution du vent",point:2},{choice:"une maîtrise parfaite de sa trajectoire",point:2}]},{id:90,question:"Peut on voler dans les ZIT mentionnées sur les cartes aéronautiques ?",choices:[{choice:"Il suffit de téléphoner au numéro mentionné pour savoir si l'on peut la traverser",point:-6},{choice:"Il est interdit de pénétrer le volume des ZIT mentionnées sur les cartes aéronautiques",point:6},{choice:"Il est uniquement possible de pénétrer en week-end et jours fériés : interdit en semaine",point:-6}]},{id:91,question:"En situation de fœhn on observe",choices:[{choice:"des turbulences dangereuses",point:3},{choice:"des nuages dérivant avec le vent",point:-6},{choice:"un assèchement de la masse d'air sous le vent des reliefs",point:3}]},{id:92,question:"Sur la polaire des vitesses, les régimes de vol de croisière correspondent",choices:[{choice:"aux incidences inférieures à l'incidence du taux de chute mini",point:6},{choice:"aux incidences supérieures à l'incidence du taux de chute mini",point:-6}]},{id:93,question:"Le centrage d'une aile",choices:[{choice:"est équilibré lorsque le centre de poussée et le centre de gravité sont alignés verticalement sur corde",point:4},{choice:"s'exprime en degrés",point:-6},{choice:"s'exprime en pourcentage",point:2}]},{id:94,question:"Vous êtes dans une masse d'air descendante, la finesse-sol",choices:[{choice:"reste la même",point:-6},{choice:"est améliorée",point:-6},{choice:"est dégradée",point:6}]},{id:95,question:"L'accompagnateur fédéral utilise sa radio",choices:[{choice:"pour guider les pilotes qu'il accompagne tout le long du vol",point:-6},{choice:"uniquement pour les guider au décollage",point:-3},{choice:"comme n'importe quel pilote, sans plus",point:6},{choice:"uniquement pour les guider à l'atterrissage",point:-3}]},{id:96,question:"Le brouillard d'advection se forme",choices:[{choice:"sans vent",point:-6},{choice:"lorsque le sol se refroidit par nuit claire",point:-6},{choice:"lors de l'arrivée d'une masse d'air chaude sur un sol froid",point:6}]},{id:97,question:"Un front froid",choices:[{choice:"est sécurisant (air froid = air stable)",point:-6},{choice:"peut provoquer des coups de vent",point:2},{choice:"peut donner lieu à de fortes précipitations et turbulences",point:4},{choice:"donne peu de vent",point:-6}]},{id:98,question:"En vol si vous ressentez des turbulences",choices:[{choice:"vous les contrez pour conserver votre cap et veillez à conserver de la vitesse",point:2},{choice:"vous restez attentifs aux informations que vous procurent vos commandes",point:2},{choice:"vous pilotez de manière à amortir en priorité les mouvements pendulaires de l'aile",point:2},{choice:"vous restez bras hauts",point:-6}]},{id:99,question:"Une aile vole face au vent; elle avance par rapport au sol ; le vent est",choices:[{choice:"moins fort que la vitesse/air de l'aile",point:6},{choice:"on ne peut pas savoir",point:-6},{choice:"plus fort que la vitesse/air de l'aile",point:-6}]},{id:100,question:"Le décrochage a lieu en général",choices:[{choice:"à une vitesse inférieure à celle du taux de chute mini",point:6},{choice:"à la vitesse de taux de chute mini",point:-6},{choice:"à une vitesse supérieure à celle du taux de chute mini",point:-3}]},{id:101,question:"Le choix d'une voile est guidé par",choices:[{choice:"son coût abaissé par l'absence de contrôle technique",point:-6},{choice:"le niveau du pilote (fiche de progression)",point:3},{choice:"la catégorie de la voile",point:3},{choice:"le site principalement fréquenté",point:0}]},{id:102,question:"La qualification d'accompagnateur fédéral",choices:[{choice:"est un produit fédéral visant à concurrencer les écoles professionnelles",point:-6},{choice:"s'adresse à des bénévoles et n'attribue aucune prérogative pour l'enseignement du vol libre",point:3},{choice:"permet de bénéficier d'allègements de formation du diplôme d'Etat (DEJEPS)",point:-6},{choice:"est un produit fédéral permettant aux club de mieux accueillir et aider les nouveaux pilotes",point:3}]},{id:103,question:"Le brouillard de rayonnement se forme",choices:[{choice:"sans vent ou par vent très faible",point:2},{choice:"lorsque le sol se refroidit par une nuit claire",point:4},{choice:"lors de l'arrivée d'une masse d'air chaude sur un sol froid",point:-6}]},{id:104,question:"Une confluence se rencontre habituellement",choices:[{choice:"au sommet d'une crête entre 2 vallées alimentées chacune par une brise",point:2},{choice:"entre une brise et un vent météo",point:2},{choice:"le long d'un front de brise de mer",point:2}]},{id:105,question:"La surface d'un parapente est généralement donnée par",choices:[{choice:"la projection de la voile gonflée sur un plan",point:3},{choice:"la surface de l'intrados posé à plat",point:3},{choice:"l'envergure multiplié par l'épaisseur du profil",point:-6}]},{id:106,question:"Dans un espace aérien non contrôlé et au dessus de 900 m mer ou 300 m sol en montagne, vous devez avoir",choices:[{choice:"une visibilité de 1500 mètres et rester hors des nuages",point:-6},{choice:"une visibilité de 5 km sous le FL100, 8 km au-dessus et un espacement par rapport aux nuages de 300m verticalement et 1500m horizontalement",point:6},{choice:"une visibilité de 8 km et rester hors des nuages",point:-6}]},{id:107,question:"La portance et la traînée d'une aile sont fonctions, entre autres, de",choices:[{choice:"la vitesse-sol",point:-6},{choice:"la vitesse du vent météo",point:-6},{choice:"la vitesse-air de l'aile",point:6}]},{id:108,question:"Dans un espace aérien non contrôlé et au dessous de 900 m mer et 300 m sol en montagne, la visibilité minimale doit être de",choices:[{choice:"300 mètres",point:-6},{choice:"8000 mètres",point:-6},{choice:"1500 mètres",point:6}]},{id:109,question:"Par une belle journée d'ascendances où des orages sont annoncés, il faut s'inquiéter si",choices:[{choice:"le ciel se couvre rapidement",point:2},{choice:"l'ombre des nuages au sol grandit rapidement",point:2},{choice:"ça monte partout",point:2}]},{id:110,question:"Un vent du 225° est un vent",choices:[{choice:"provenant du cap 225°",point:3},{choice:"soufflant vers le cap 225°",point:-3},{choice:"soufflant vers le sud-ouest",point:-3},{choice:"soufflant vers le nord-est",point:3}]},{id:111,question:"Un thalweg est",choices:[{choice:"un axe de basses pressions",point:6},{choice:"une zone où la pression atmosphérique varie peu",point:-6},{choice:"un axe de hautes pressions",point:-6}]},{id:112,question:"Pour une même aile, un fort accroissement de la charge alaire entraîne une augmentation",choices:[{choice:"du taux de chute",point:2},{choice:"des déformations de l'aile",point:2},{choice:"de la vitesse horizontale",point:2}]},{id:113,question:"Votre voile se replie brusquement côté relief",choices:[{choice:"vous infléchissez energiquement votre trajectoire vers la vallée malgré la demi aile fermée",point:-6},{choice:"vous contrez commande + sellette pour garder votre cap",point:6},{choice:"vous forcez sa réouverture avec un abaissement ample du frein côté fermé",point:-3}]},{id:114,question:"Le calage d'une aile de parapente",choices:[{choice:"peut être modifié par le réglage de la longueur des freins",point:-6},{choice:"est déterminé par la longueur de chaque suspente",point:2},{choice:"peut être fortement modifié par le vieillissement du suspentage",point:2},{choice:"est modifié par une action sur les trims ou l'accélérateur",point:2}]},{id:115,question:"Vous empruntez l'aile d'un pilote plus léger que vous",choices:[{choice:"les réactions de l'aile lors de fermetures seront plus vives",point:3},{choice:"votre vitesse-max sera plus faible",point:-6},{choice:"elle se refermera plus facilement dans les turbulences",point:-6},{choice:"elle se refermera plus rarement dans les turbulences",point:3}]},{id:116,question:"Lors d'un atterrissage en campagne, un pilote breveté, licencié, détruit le pare-brise d'une voiture; c'est",choices:[{choice:"la R.C. du propriétaire de la voiture qui doit rembourser",point:-6},{choice:"le propriétaire de la voiture qui doit payer",point:-6},{choice:"au pilote de payer les dégâts",point:-6},{choice:"la R.C. du pilote qui remboursera",point:6}]},{id:117,question:"On appelle charge alaire, le rapport",choices:[{choice:"poids total (aile+pilote) sur surface de l'aile",point:6},{choice:"envergure au carré sur surface de l'aile",point:-6},{choice:"poids du pilote sur surface de l'aile",point:-6},{choice:"surface de l'aile sur poids total (aile+pilote)",point:-6}]},{id:118,question:"L'effet girouette, c'est la conséquence d'une rotation autour de l'axe de",choices:[{choice:"tangage",point:-6},{choice:"roulis",point:-6},{choice:"lacet",point:6}]},{id:119,question:"Quelles règles dois-je respecter pour survoler une manifestation entrainant un grand rassemblement de personnes ?",choices:[{choice:"A minima, et sauf restrictions particulières, 300m au dessus de l'obstacle le plus élevé dans un rayon de 600m autour de l'aéronef",point:6},{choice:"150m minimum pour pouvoir dégager si besoin",point:-6},{choice:"Pas de minimum en PUL, mais ne pas mettre en danger les biens et les personnes au sol",point:-6}]},{id:120,question:`Aux "oreilles", vous décidez d'utiliser l'accélérateur, cela`,choices:[{choice:"peut être une parade au risque de parachutale",point:3},{choice:"augmente l'incidence",point:-6},{choice:"permet d'augmenter encore plus votre taux de chute",point:3},{choice:"rend l'aile plus stable en roulis",point:-6}]},{id:121,question:"En vol de pente, vous engagez les virages",choices:[{choice:"du côté opposé au relief",point:6},{choice:"du côté de l'aile qui se soulève",point:-6},{choice:"du côté du relief",point:-6}]},{id:122,question:"Le point d'arrêt d'un profil",choices:[{choice:"est la zone où dépression et surpression s'arrêtent",point:-6},{choice:"se déplace en fonction de l'incidence",point:2},{choice:"est le point où la pression statique de l'air est maximale",point:2},{choice:"sépare les écoulements d'intrados et d'extrados",point:2}]},{id:123,question:"Lors du passage d'un front, l'air chaud",choices:[{choice:"soulève l'air froid",point:-6},{choice:"peut être refoulé vers le bas ou soulevé selon la situation",point:-6},{choice:"est soulevé",point:6}]},{id:124,question:"Je me ferai probablement plus plaisir avec une aile",choices:[{choice:"aux performances maximum, mais difficile à piloter pour mon niveau",point:-6},{choice:"que je maîtrise bien aux performances honnêtes",point:6},{choice:"qui gagne en compétition, quel que soit mon niveau",point:-6}]},{id:125,question:"Parmi les nuages ci-dessous, certains produisent généralement des précipitations",choices:[{choice:"nimbostratus",point:3},{choice:"cumulonimbus",point:3},{choice:"cumulus",point:-6}]},{id:126,question:"Pour amener une particule d'air à saturation en humidité, il faut",choices:[{choice:"diminuer sa température",point:6},{choice:"augmenter sa température",point:-6},{choice:"abaisser son altitude",point:-6}]},{id:127,question:"Des commandes réglées trop tendues",choices:[{choice:"peuvent auto brider le bord de fuite lors de l'utilisation de l'accélérateur",point:2},{choice:"créent un risque supplémentaire de phase parachutale",point:2},{choice:"n'ont rien à voir avec les cascades d'incidents",point:-6},{choice:"peuvent empêcher la montée de la voile",point:2}]},{id:128,question:"Les actions de l'accompagnateur fédéral se font auprès",choices:[{choice:"de pilotes licenciés, au minimum fin de niveau vert ayant validés le brevet initial",point:6},{choice:"de pilotes de bon niveau non licenciés",point:-6},{choice:"d'accompagnateurs de club entre eux uniquement",point:-6},{choice:"de pilotes brevetés assurés",point:0}]},{id:129,question:"La finesse-sol",choices:[{choice:"augmente par vent arrière",point:6},{choice:"augmente par vent de face",point:-6},{choice:"diminue par vent arrière",point:-6}]},{id:130,question:"La norme CEN E 926-1 et 2",choices:[{choice:"classe les parapentes en 4 niveaux d'accès dont le plus accessible est noté D",point:-6},{choice:"attribue les lettres A, B, C ou D à 28 manœuvres réalisées en vol par des pilotes test",point:2},{choice:"sépare les parapentes en 4 niveaux de comportements en vol",point:2},{choice:"applique des tests de résistance à 8G, au sol, derrière un véhicule",point:2}]},{id:131,question:"Pour décoller en sécurité, il est préférable de choisir une pente",choices:[{choice:"convexe et progressive",point:3},{choice:"concave suivie d'une cassure nette",point:-6},{choice:"dégagée d'obstacles",point:3}]},{id:132,question:"Un allongement important est facteur",choices:[{choice:"de performance",point:6},{choice:"d'instabilité",point:-3},{choice:"d'effilement",point:-6}]},{id:133,question:"Juste avant le sommet d'une ressource importante",choices:[{choice:"l'effet pendulaire préjuge de l'arrivée d'une abattée",point:2},{choice:"la vitesse-air parvient à un minimum",point:2},{choice:"le facteur de charge est inférieur à 1",point:2},{choice:"l'assiette est à piquer",point:-6}]},{id:134,question:"On peut rencontrer des turbulences dangereuses pour le vol libre dans les phénomènes observés suivant",choices:[{choice:"à l'interface d'une couche d'inversion recouvrant une masse d'air générant des ascendances",point:3},{choice:"stratus",point:-6},{choice:"rotors d'onde de ressaut",point:3}]},{id:135,question:"Lors du passage d'un front chaud",choices:[{choice:"les pluies sont continues",point:3},{choice:"l'air est très humide et le système nuageux important",point:3},{choice:"les pluies sont intermittentes et violentes",point:-6}]},{id:136,question:"Dans un virage, l'aile s'incline principalement grâce à un mouvement de",choices:[{choice:"roulis",point:6},{choice:"lacet",point:-3},{choice:"tangage",point:-6}]},{id:137,question:"Dans une masse d'air sans nuages, la température est de 15°C au sol et de 12°C 500 mètres au dessus. Cette tranche d'air est",choices:[{choice:"plutôt stable",point:6},{choice:"plutôt instable",point:-6},{choice:"plutôt sélectivement instable",point:-6}]},{id:138,question:"Quelle est l'altitude maximale absolue possible en vol libre.",choices:[{choice:"Le FL 100 ou 1000ft surface en haute montagne",point:-6},{choice:"Le FL 195, dans certaines LTA E Alpes ou Pyrénées",point:6},{choice:"Le FL 115 soit environ 3500m",point:-6}]},{id:139,question:"Vous rentrez dans un thermique et engagez un 360°. Après 90° de virage le variomètre devient négatif",choices:[{choice:"vous continuez le virage jusqu'à 270° puis reprenez une ligne droite pour retrouver l'ascendance",point:3},{choice:"vous inversez le sens du virage",point:3},{choice:"vous diminuez l'inclinaison",point:-6}]},{id:140,question:"Autour d'un profil d'aile, l'écoulement de l'air peut être",choices:[{choice:"résonnant",point:-6},{choice:"décollé",point:2},{choice:"laminaire",point:2},{choice:"turbulent",point:2}]},{id:141,question:"J'accrois les risques",choices:[{choice:"énormément avec la fatigue et/ou les problèmes (cœur, santé, travail, etc.)",point:4},{choice:"pas du tout, je suis en bonne forme physique et psychique",point:0},{choice:"raisonnablement en introduisant une seule nouveauté à la fois",point:2},{choice:"un peu avec la fatigue",point:-6}]},{id:142,question:"Les règles de vol obligent chaque pilote",choices:[{choice:"à dépasser une aile plus lente par la gauche",point:-6},{choice:"à respecter une distance suffisante pour prévenir les abordages",point:3},{choice:"à dégager par la droite en cas de croisement à la même altitude",point:3}]},{id:143,question:"En vol une turbulence ferme brutalement mon aile ; je me sens tomber à droite dans ma sellette",choices:[{choice:"j'utilise mon frein gauche de manière à ralentir un départ en rotation",point:2},{choice:"je résiste au déséquilibre en transférant mon poids à gauche",point:2},{choice:"j'actionne immédiatement ma main droite avec un geste ample et profond pour forcer la réouverture de l'aile",point:-6},{choice:"je regarde mon aile pour évaluer la situation et son évolution",point:2}]},{id:144,question:"A quoi correspondent les valeurs ASFC et AGL, AMSL ?",choices:[{choice:"ASFC et AGL = hauteur sol, AMSL = altitude par rapport au niveau de la mer",point:6},{choice:"Toutes ces valeurs sont variables en fonction de la pression atmosphérique",point:-6},{choice:"Elles expriment les hauteurs et altitudes en mètres à respecter",point:-6}]},{id:145,question:"Le vent de fœhn est caractérisé par",choices:[{choice:"un nuage orographique sur le relief au vent",point:2},{choice:"une descente d'air chaud, sec et très turbulent sous le vent du relief",point:4},{choice:"un refroidissement de la masse d'air sous le vent du relief",point:-6}]},{id:146,question:"Votre voile neuve vire systématiquement à droite, drisses de freins détendues",choices:[{choice:"vous portez votre poids sur votre fesse gauche et vérifiez si une déviation de la trajectoire équivalente du côté opposé se produit",point:3},{choice:"vous tendez d'avantage le cuissard droit",point:-6},{choice:"une fois posé vous décalez le niveau des élévateurs droits sur le harnais",point:-6},{choice:"vous contactez le revendeur pour un contrôle en usine",point:3}]},{id:147,question:"On risque de rencontrer une zone de cisaillement",choices:[{choice:"dans une confluence",point:2},{choice:"en traversant une couche d'inversion",point:2},{choice:"en entrée et sortie de thermique",point:2}]},{id:148,question:"La chaleur se propage par",choices:[{choice:"rayonnement",point:2},{choice:"conduction",point:2},{choice:"convection",point:2}]},{id:149,question:"L'effet girouette remet l'aile",choices:[{choice:"en vol face à son vent relatif",point:3},{choice:"au sol, à l'arrêt, face au vent instantané",point:3},{choice:"en vol face au vent météo",point:-6},{choice:"au sol face au vent moyen",point:-6}]},{id:150,question:"Lorsqu'une particule atmosphérique non saturée s'élève sans échanger de chaleur avec l'air ambiant, sa température",choices:[{choice:"augmente de 1° par 100m",point:-6},{choice:"reste constante",point:-6},{choice:"diminue de 1° par 100m",point:6}]},{id:151,question:"En air calme, si l'on compare deux régimes de vol stabilisé, l'assiette",choices:[{choice:"augmente lorsque l'angle d'incidence augmente",point:3},{choice:"augmente lorsque la vitesse augmente",point:-6},{choice:"diminue lorsque la vitesse diminue",point:-6},{choice:"diminue lorsque l'angle d'incidence diminue",point:3}]},{id:152,question:"Le niveau d'accessibilité d'une voile dépend",choices:[{choice:"des résultats aux tests",point:1},{choice:"de la charge alaire appliquée sur les modèles dont la fourchette de poids est très large",point:2},{choice:"du niveau technique du pilote",point:2},{choice:"des indications du constructeur",point:1}]},{id:153,question:"Lors de la réception d'une aile neuve, vous devez",choices:[{choice:"vérifier les performances et les comportements de l'aile sur un site grand vol connu et en conditions aérologiques calmes",point:3},{choice:"faire quelques essais en pente école pour vérifier les freins, le suspentage et le ressenti de la prise en charge pendant la course",point:3},{choice:"raccourcir les freins pour légèrement diminuer sa vitesse max (bras haut)",point:-6}]},{id:154,question:"La traînée de profil se compose de",choices:[{choice:"la traînée induite",point:-6},{choice:"la traînée de forme",point:3},{choice:"la traînée de frottement",point:3}]},{id:155,question:"Après un accident, la déclaration doit être établie et envoyée à la F.F.V.L.",choices:[{choice:"dans tous les cas par le président du club",point:-6},{choice:"par le pilote breveté ou son entourage",point:3},{choice:"par le moniteur pour un de ses élèves",point:3},{choice:"par la gendarmerie",point:-6}]},{id:156,question:"Si la charge alaire est réduite, l'aile",choices:[{choice:"est moins manœuvrante",point:3},{choice:"a un taux de chute moins important",point:3},{choice:"a une finesse plus élevée",point:-3},{choice:"décolle à une plus grande vitesse",point:-6}]},{id:157,question:"Un halo autour de la lune ou du soleil est souvent",choices:[{choice:"le signe d'une dégradation prochaine du temps",point:2},{choice:"le signe de la présence d'altocumulus",point:-6},{choice:"le signe de la présence de cirrostratus",point:4},{choice:"caractéristique du beau temps qui va durer",point:-6}]},{id:158,question:"Les tendances générales d'un front froid sont",choices:[{choice:"aggravation rapide avec pluie, orages, vents forts, turbulences",point:6},{choice:"temps brumeux couvert avec bruine",point:-6},{choice:"aggravation lente avec pluie modérée",point:-6}]},{id:159,question:"A l'atterrissage",choices:[{choice:"le dernier virage peut se prévoir à 5m/sol et sur 180°",point:-6},{choice:"il faut ralentir sa vitesse très tôt",point:-6},{choice:"il est déconseillé de faire des virages serrés près du sol à cause de l'augmentation du taux de chute",point:3},{choice:"il faut augmenter la vitesse en finale bien avant le freinage",point:3}]},{id:160,question:"En espace de classe E, puis-je néanmoins croiser un trafic IFR ?",choices:[{choice:"Oui, et le trafic IFR est donc prioritaire",point:-6},{choice:"Non, le trafic IFR n'évolue qu'en espaces classés D à minima",point:-6},{choice:"Oui, il est cependant tenu dans ce cas de respecter également les règles VFR",point:6}]},{id:161,question:"Le déclenchement des thermiques",choices:[{choice:"renforce les brises de pente et de vallée",point:4},{choice:"rend la brise de pente irrégulière",point:2},{choice:"permet d'exploiter la brise de pente loin du relief",point:-6}]},{id:162,question:"La finesse-sol est le rapport",choices:[{choice:"vitesse-sol horizontale sur vitesse-sol verticale",point:6},{choice:"vitesse de vol sur taux de chute",point:-3},{choice:"vitesse verticale sur vitesse horizontale",point:-6},{choice:"portance sur traînée",point:-3}]},{id:163,question:"Les isobares sur une carte météo montrent",choices:[{choice:"les niveaux de températures",point:-6},{choice:"les anticyclones et les dépressions",point:6},{choice:"les niveaux des risques de précipitation",point:-6}]},{id:164,question:"L'élève qui réussit son brevet de pilote fédéral",choices:[{choice:"est considéré par son moniteur et par la F.F.V.L. comme un pilote autonome sur sites",point:3},{choice:"peut voler sous sa propre responsabilité sans contrevenir aux règlements fédéraux",point:3},{choice:"peut estimer que sa progression est terminée",point:-6}]},{id:165,question:"Sur une aile en vol, il y a plusieurs types de traînées de natures bien distinctes",choices:[{choice:"la traînée de frottement",point:2},{choice:"la traînée de forme",point:2},{choice:"la traînée induite",point:2}]},{id:166,question:"Vous venez d'acquérir une nouvelle aile, afin de mieux la connaître et comme vous avez un parachute de secours",choices:[{choice:"vous recherchez la phase parachutale",point:-6},{choice:"vous multipliez les vols dans des aérologies standards pour vous la rendre familière",point:3},{choice:"vous effectuez éventuellement une journée de stage en milieu aménagé",point:3},{choice:'après un peu de gain, vous réalisez quelques "360°" engagés afin de mesurer le taux de chute maximal',point:-6}]},{id:167,question:"Comment savoir si je peux franchir une limite d'espace aérien ?",choices:[{choice:"En téléphonant à la DGAC",point:-6},{choice:"Il suffit de voler à moins de 500ft (150m) sol, les autres aéronefs volant au dessus de cette limite",point:-6},{choice:"En me référant aux mentions concernant la nature et le volume de cet espace sur un document aéronautique à jour",point:6}]},{id:168,question:"Un vent de 20 Kt (nœuds) souffle à environ",choices:[{choice:"18 km/h",point:-6},{choice:"36 km/h",point:6},{choice:"20 km/h",point:-6}]},{id:169,question:"Vous volez à une vitesse-air de 35 km/h avec 10 km/h de vent arrière, votre vitesse-sol",choices:[{choice:"reste inchangée",point:-6},{choice:"est d'environ 45 km/h",point:6},{choice:"est d'environ 25 km/h",point:-6}]},{id:170,question:"Pour une sécurité maximale, le dépliage/repliage du parachute de secours doit être effectué",choices:[{choice:"au moins 1 fois par an",point:2},{choice:"à la fréquence des préconisations du constructeur",point:4},{choice:"il faut le laisser tel que l'a plié le revendeur",point:-6}]},{id:171,question:"A 4m/sol vous constatez que vous allez vous poser avec un vent de travers de 45°",choices:[{choice:"vous réalisez un virage pour vous replacer face au vent et freinerez une fois face au vent",point:-6},{choice:"vous ne vous inquiétez pas, vous arrondirez plus tôt et n'envisagez pas de virage",point:-6},{choice:"en utilisant la sellette vous veillez à ce que cet écart ne s'aggrave pas et vous vous préparez à arrondir normalement",point:6}]},{id:172,question:"Les anticyclones sont le siège",choices:[{choice:"d'un mouvement général ascendant des masses d'air",point:-6},{choice:"plutôt de vents forts",point:-6},{choice:"plutôt de vents faibles",point:2},{choice:"d'un mouvement général d'affaissement des masses d'air",point:4}]},{id:173,question:"Un nuage orographique",choices:[{choice:"est dû à une ascendance dynamique",point:3},{choice:"indique une absence de vent",point:-6},{choice:"est fixe par rapport au sol",point:3},{choice:"est dû à une ascendance thermique",point:-6}]},{id:174,question:"Le directeur technique d'une École Française de Vol Libre (EFVL) ou d'un Club-École Français de Vol Libre (CEFVL)",choices:[{choice:"atteste la partie pratique du brevet de pilote",point:3},{choice:"est responsable de toutes les activités pédagogiques de l'école",point:3},{choice:"délivre le brevet de pilote",point:-6}]},{id:175,question:"Le facteur de charge",choices:[{choice:"est égal à 1 en vol rectiligne stabilisé",point:2},{choice:"dépend du poids du pilote et des indications du constructeur",point:-6},{choice:"est supérieur à 1 pendant les virages équilibrés",point:2},{choice:"est inférieur à 1 quand on accélère en vol rectiligne",point:2}]},{id:176,question:"Le décrochage se produit lorsque",choices:[{choice:"la vitesse est trop forte",point:-6},{choice:"l'incidence est trop forte",point:6},{choice:"l'incidence est trop faible",point:-6}]},{id:177,question:"Vous approchez de la base d'un cumulus",choices:[{choice:"vous risquez d'être aspiré car l'ascendance peut se renforcer",point:3},{choice:"il n'y a jamais de risque d'aspiration",point:-6},{choice:"le risque est faible tant que le nuage n'est pas de type congestus ou nimbus",point:-6},{choice:"le danger est aggravé si la base est en dessous des plus hautes crêtes",point:3}]},{id:178,question:"Le parachute de secours",choices:[{choice:"doit être équipé d'aiguilles en plus du velcro",point:3},{choice:"ne peut pas s'ouvrir de manière intempestive",point:-6},{choice:"nécessite une visite prévol",point:3}]},{id:179,question:"Pour avancer de 4800m dans le plan horizontal, vous avez perdu 600m d'altitude ; votre finesse-sol est voisine de",choices:[{choice:"9",point:-6},{choice:"6",point:-6},{choice:"",point:86},{choice:"7",point:-6}]},{id:180,question:"La pression atmosphérique est due",choices:[{choice:"au poids de la colonne d'air située au dessus",point:6},{choice:"à la rotation de la terre sur elle-même",point:-6},{choice:"au réchauffement solaire",point:-6}]},{id:181,question:"En vol de pente, la priorité revient à l'aile qui",choices:[{choice:"est situé au vent du relief",point:-6},{choice:"à la pente à sa gauche",point:-6},{choice:"a la pente à sa droite",point:6},{choice:"est situé sous le vent du relief",point:-6}]},{id:182,question:"Lorsqu'un pilote exploite une bulle thermique pour gagner de l'altitude",choices:[{choice:"il descend continuellement à l'intérieur de la bulle",point:6},{choice:"il aborde la bulle vers sa partie inférieure et ressort au sommet",point:-6},{choice:"il s'élève à la même vitesse que la bulle",point:-6}]},{id:183,question:"Parmi les points suivants, certains améliorent la finesse",choices:[{choice:"profil optimisé pour minimiser la traînée de forme",point:3},{choice:"position debout du pilote",point:-6},{choice:"suspentes fines ou montants de trapèze profilés",point:3}]},{id:184,question:"La rotation de la terre dévie les vents vers leur",choices:[{choice:"gauche dans l'hémisphère nord",point:-6},{choice:"droite dans l'hémisphère sud",point:-6},{choice:"droite dans l'hémisphère nord",point:6}]},{id:185,question:"Où peut-on trouver les horaires d'activation des zones R ?",choices:[{choice:"Au dos de toutes les cartes IGN du SIA au 1/500 000",point:-6},{choice:"Dans le guide VFR édité par le SIA",point:-6},{choice:"Au dos des cartes au 1/250 000 et dans le complément aux cartes édité par le SIA",point:6}]},{id:186,question:"La finesse-sol",choices:[{choice:"ne varie jamais",point:-6},{choice:"est toujours inférieure à la finesse-air",point:-6},{choice:"est identique à la finesse-air dans une masse d'air immobile",point:6}]},{id:187,question:"Une École Française de Vol Libre (EFVL)",choices:[{choice:"signe annuellement une charte garantissant notamment le respect des règles d'enseignement édictées par la F.F.V.L.",point:2},{choice:"est une entreprise privée financièrement indépendante de la F.F.V.L.",point:2},{choice:"est une entreprise privée qui fait l'objet d'un suivi régulier de la part de la F.F.V.L.",point:2}]},{id:188,question:"La traîne d'une perturbation, c'est la zone",choices:[{choice:"d'air froid s'étendant à l'arrière du front froid",point:6},{choice:"d'air chaud compris entre le front chaud et le front froid",point:-6},{choice:"nuageuse très développée arrivant avec le front froid",point:-6}]},{id:189,question:"En soufflerie, lorsque l'angle d'incidence augmente à partir de 0°, la portance",choices:[{choice:"augmente progressivement jusqu'au décrochage",point:-6},{choice:"augmente, passe par un maximum, diminue puis s'effondre brusquement (décrochage)",point:6},{choice:"ne varie pratiquement pas",point:-6}]},{id:190,question:"Une fois que j'ai mis en œuvre les oreilles",choices:[{choice:"je suis sensible à l'éventuelle diminution du vent dans mes oreilles",point:2},{choice:"je peux utiliser l'accélérateur pour descendre encore plus vite",point:2},{choice:"je me donne la possibilité d'étager mon approche lors d'une présentation simultanée de plusieurs ailes à l'atterrissage",point:2},{choice:"je surveille mon aile en permanence pour m'assurer que les « oreilles » restent en place",point:-6}]},{id:191,question:"La restitution est un phénomène",choices:[{choice:"d'inversion des brises de vallée le soir",point:-6},{choice:"d'ascendances plutôt douces, le soir, sur des zones généralement peu propices pendant la journée",point:6},{choice:"d'inversion des brises de pente le soir",point:-6}]},{id:192,question:"L'extraction du parachute de secours et le retour au sol",choices:[{choice:"peuvent s'avérer problématiques dans bien des cas",point:3},{choice:"se passent toujours bien",point:-6},{choice:"sont une formalité et permettent donc un engagement plus important du pilote sous son aile",point:-6},{choice:"nécessitent une bonne information préalable",point:3}]},{id:193,question:"En finale, si la cible descend dans le champ de vision",choices:[{choice:"vous êtes long",point:6},{choice:"vous êtes court",point:-6},{choice:"vous devez ralentir au maximum",point:-6}]},{id:194,question:"Priorités entre P.U.L.",choices:[{choice:"delta et parapente doivent observer les mêmes règles de l'air",point:6},{choice:"le parapente doit la priorité au delta",point:-6},{choice:"le delta doit la priorité au parapente",point:-6}]},{id:195,question:"Un parachute de secours hémisphérique est",choices:[{choice:"un planeur ultra-léger",point:-6},{choice:"un frein aérodynamique",point:6},{choice:"une garantie à 100% de s'en sortir en cas d'accident",point:-6}]},{id:196,question:"En vol, le pilote peut anticiper",choices:[{choice:"l'imminence d'une fermeture du côté où sa commande durcit",point:-6},{choice:"l'arrivée prochaine d'une ressource lorsqu'il se sent « tomber vers l'avant »",point:2},{choice:"l'arrivée d'un mouvement de piqué lorsque sa vitesse diminue",point:2},{choice:"l'arrivée prochaine d'une abattée lorsqu'il se sent « tomber sur le dos »",point:2}]},{id:197,question:"La situation météo la plus favorable à la formation d'orages isolés est",choices:[{choice:"un anticyclone",point:-6},{choice:"une dépression",point:0},{choice:"un marais barométrique",point:6}]},{id:198,question:"Vous volez par fort vent arrière, cela implique",choices:[{choice:"une diminution de la Force Aérodynamique",point:-6},{choice:"une augmentation de l'incidence",point:-6},{choice:"une augmentation de la vitesse-sol",point:3},{choice:"une augmentation de la finesse-sol",point:3}]},{id:199,question:"Dans une atmosphère à tendance stable",choices:[{choice:"la température décroît doucement quand on s'élève en altitude",point:3},{choice:"la température décroît rapidement quand on s'élève en altitude",point:-6},{choice:"la structure de la masse d'air s'oppose au développement des ascendances",point:3},{choice:"il ne peut pas y avoir d'ascendances thermiques",point:-6}]},{id:200,question:"L'accompagnateur fédéral dans un club de plaine",choices:[{choice:"maîtrise les spécificités du treuil",point:3},{choice:"a les mêmes prérogatives que l'accompagnateur fédéral dans un club de montagne",point:3},{choice:"ne peut proposer de sorties montagnes",point:-6}]},{id:201,question:"A surface égale, un pilote plus léger aura",choices:[{choice:"une meilleure pénétration",point:-6},{choice:"une vitesse max plus faible",point:3},{choice:"une vitesse de décrochage identique",point:-6},{choice:"un taux de chute plus faible",point:3}]},{id:202,question:"Une dorsale est",choices:[{choice:"un axe de basses pressions",point:-6},{choice:"une zone où la pression atmosphérique varie peu",point:-6},{choice:"un axe de hautes pressions",point:6}]},{id:203,question:"Par vent soutenu, préalablement à un gonflage face à l'aile",choices:[{choice:"une traction solidement verrouillée des « C » ou des « D » permet une solution d'attente sûre",point:3},{choice:"j'ai pris mes commandes en main comme je l'aurais fais en étant dos à l'aile",point:3},{choice:"un pré gonflage ne s'impose pas",point:-6},{choice:"j'ai soigneusement trié mes suspentes et disposé mon aile au sol avant d'endosser ma sellette",point:0}]},{id:204,question:"La portance en vol rectiligne stabilisé est",choices:[{choice:"perpendiculaire à la trajectoire-air",point:3},{choice:"plus faible que le poids total aile+pilote",point:3},{choice:"constante quelle que soit la vitesse de l'aile",point:-6}]},{id:205,question:"Pour votre sécurité",choices:[{choice:"vous équipez votre sellette d'un kit de secours comprenant au minimum une ficelle résistante de 20m",point:2},{choice:"vous faites vérifier votre aile par le constructeur dès que vous constatez une paresse inhabituelle au gonflage",point:2},{choice:"vous faites vérifier votre aile par le constructeur dès que vous constatez un comportement inhabituel en virage",point:2}]},{id:206,question:"En atmosphère humide, les ascendances",choices:[{choice:"sont souvent matérialisées par des nuages",point:6},{choice:"ne sont généralement pas matérialisées",point:-6},{choice:"sont très faibles car l'atmosphère humide est à tendance stable",point:-6}]},{id:207,question:"La finesse-air maximale est",choices:[{choice:"une valeur qui dépend de la charge alaire",point:-6},{choice:"obtenue à une vitesse supérieure à celle du taux de chute mini",point:6},{choice:"obtenue à une incidence dépendant du vent météo",point:-6}]},{id:208,question:"Quel est le type de carte aéronautique le plus adapté pour le vol libre ?",choices:[{choice:"La carte au 1/250 000, si le secteur où j'évolue est couvert",point:6},{choice:"La carte au 1/1 000 000, car elle couvre tout l'espace aérien",point:-6},{choice:"La carte au 1/500 000 suffit amplement pour voler uniquement jusqu'au FL115",point:-6}]},{id:209,question:"Suis-je soumis aux mêmes règles si mon parapente ou delta est équipé d'un moteur ?",choices:[{choice:"Oui, sous réserve d'avoir une assurance complémentaire",point:-6},{choice:"Oui, sous réserve de n'utiliser le moteur que temporairement",point:-6},{choice:"Non, un delta ou un parapente équipé d'un moteur est soumis aux règles des ULM",point:6}]},{id:210,question:"En traversant une masse d'air turbulent, l'ensemble aile+pilote est soumis à des variations",choices:[{choice:"d'incidence",point:2},{choice:"de vitesse-air",point:2},{choice:"de Force Aérodynamique",point:2},{choice:"de masse",point:-6}]},{id:211,question:"Le phénomène de restitution se rencontre en général",choices:[{choice:"le soir",point:6},{choice:"au centre des vallées toute la journée",point:-6},{choice:"le matin au centre de la vallée",point:-6}]},{id:212,question:"Autour des zones de haute pression, les vents tournent",choices:[{choice:"dans le sens contraire des aiguilles d'une montre dans l'hémisphère nord",point:-6},{choice:"dans le sens des aiguilles d'une montre dans l'hémisphère nord",point:6},{choice:"dans le sens des aiguilles d'une montre dans l'hémisphère sud",point:-6}]},{id:213,question:"Vous gonflez symétriquement dos à l'aile avec un vent de travers droit",choices:[{choice:"votre demi aile droite se lève en premier",point:-3},{choice:"votre demi aile gauche se lève en premier",point:3},{choice:"pour réussir votre gonflage vous vous apprétez à freiner l'arrivée de la demie aile gauche en premier",point:3},{choice:"pour réussir votre gonflage vous vous apprêtez à freiner l'arrivée de la demie aile droite en premier",point:-3}]},{id:214,question:"La traînée totale d'un aéronef se divise en",choices:[{choice:"traînée de frottement",point:2},{choice:"traînée induite",point:2},{choice:"traînée de pression",point:2},{choice:"traînée dynamique",point:-6}]},{id:215,question:"En vol, la dureté de mes commandes",choices:[{choice:"dépend de la vitesse relative de chacune de mes demi ailes",point:2},{choice:"s'accroît avec l'augmentation de la vitesse",point:2},{choice:"faiblie avec l'augmentation de la vitesse",point:-6},{choice:"augmente lorsque je tire sur les freins",point:2}]},{id:216,question:"Vous faites les oreilles",choices:[{choice:"vent de face, votre finesse/sol augmente",point:-6},{choice:"ça n'abîme pas l'aile",point:0},{choice:"c'est un moyen de descente rapide qui peut doubler votre taux de chute",point:6},{choice:"vous augmentez votre finesse/air",point:-6}]},{id:217,question:"Le cône d'autonomie",choices:[{choice:"est une caractéristique de l'aile qui ne dépend pas du vent",point:-6},{choice:"a un axe plus ou moins penché par le vent",point:3},{choice:"correspond à l'ensemble des points les plus éloignés que l'aile peut atteindre en vol plané",point:3}]},{id:218,question:"Quel type de plan de vol sont tenus de déposer les pratiquants de vol libre",choices:[{choice:"Un plan de vol simplifié comprenant uniquement l'itinéraire prévu",point:-6},{choice:"Sauf cas très particulier, les pratiquants de vol libre ne sont pas tenus de déposer un plan de vol",point:6},{choice:"Un plan de vol simplifié comprenant les horaires et lieux de vol prévus",point:-6}]},{id:219,question:"Le variomètre de base mesure",choices:[{choice:"la composante verticale de la vitesse/sol de l'aile",point:6},{choice:"la composante verticale de la vitesse/air de l'aile",point:-6},{choice:"la vitesse du vent s'il est utilisé au sol",point:-6},{choice:"la vitesse ascensionnelle de la masse d'air dans un thermique",point:-6}]},{id:220,question:"Lors d'un décrochage",choices:[{choice:"la portance chute",point:2},{choice:"la traînée augmente fortement",point:4},{choice:"la portance augmente",point:-6},{choice:"la traînée diminue",point:-6}]},{id:221,question:"On appelle inversion de la température la situation suivante",choices:[{choice:"une couche d'air qui bloque le développement des ascendances",point:0},{choice:"une couche d'air froid qui est au dessus d'une couche d'air chaud",point:-6},{choice:"une couche d'air chaud qui est au dessus d'une couche d'air froid",point:6}]},{id:222,question:"La traînée d'une aile est",choices:[{choice:"indépendante de la vitesse-air",point:-6},{choice:"proportionnelle au carré de la vitesse-air",point:6},{choice:"proportionnelle au cube de la vitesse-air",point:-6},{choice:"proportionnelle à la vitesse-air",point:-6}]},{id:223,question:"La vitesse de votre appareil par rapport au sol est",choices:[{choice:"ne change jamais",point:-6},{choice:"plus élevée par vent de face",point:-6},{choice:"plus élevée par vent arrière",point:6}]},{id:224,question:"Lorsque 2 masses d'air de températures différentes se rencontrent",choices:[{choice:"elles se mélangent facilement",point:-6},{choice:"l'air le plus chaud s'élève au dessus de l'air froid",point:6},{choice:"l'air le plus chaud s'infiltre au dessous de l'air froid",point:-6}]},{id:225,question:"Parmi ces nuages, certains annoncent l'arrivée d'un front chaud",choices:[{choice:"altostratus",point:3},{choice:"cirrostratus",point:3},{choice:"cumulus",point:-6},{choice:"cumulonimbus",point:-6}]},{id:226,question:"La déclaration d'accident est nécessaire si",choices:[{choice:"l'aéronef est endommagé",point:-6},{choice:"quand il y a intervention des secours ou hospitalisation",point:3},{choice:"une tierce personne est blessée",point:3}]},{id:227,question:"Un thermique peut",choices:[{choice:"être dévié par le vent",point:2},{choice:"ne donner lieu à aucune matérialisation",point:2},{choice:"être matérialisé par un cumulus bourgeonnant",point:2},{choice:"être matérialisé par un voile de stratus",point:-6}]},{id:228,question:"Les rotors et les lenticulaires semblent fixes par rapport au sol car",choices:[{choice:"leur durée de vie est très brève",point:-6},{choice:"ils se forment à leur partie au vent et se désagrègent à leur partie sous le vent",point:6},{choice:"à leur niveau le vent est nul",point:-6}]},{id:229,question:"Sur une aile en vol rectiligne stabilisé, lorsque le pilote provoque un accroissement de l'incidence, transitoirement",choices:[{choice:"la vitesse sur trajectoire diminue",point:3},{choice:"la vitesse sur trajectoire augmente",point:-6},{choice:"la trajectoire s'incurve vers le bas",point:-6},{choice:"la trajectoire s'incurve vers le haut",point:3}]},{id:230,question:"Pour rendre efficace l'utilisation du parachute de secours je dois",choices:[{choice:"en vol, régulièrement m'exercer à trouver le contact de sa poignée",point:3},{choice:"l'aérer une fois par an au minimum avant de le replier",point:3},{choice:"faire un lavage par an en machine avant de le replier",point:-6}]},{id:231,question:"Un pilote de vol libre peut-il être soumis à un contrôle d'alcoolémie ou de stupéfiants ?",choices:[{choice:"Non, cela ne concerne que la réglementation routière",point:-6},{choice:"Oui, et l'usage de boissons alcoolisées ou de stupéfiants est interdit",point:6},{choice:"Oui, mais la tolérance est identique à la circulation routière",point:-6}]},{id:232,question:"Par une belle journée d'été, la température maximum sera atteinte à (heure solaire, sans tenir compte des 2 heures d'avance sur nos montres)",choices:[{choice:"15h",point:6},{choice:"12h",point:-6},{choice:"14h",point:-2}]},{id:233,question:"Vous êtes le premier à enrouler une ascendance",choices:[{choice:"une aile qui entre dans l'ascendance au même niveau que vous doit spiraler à 180° et dans le même sens",point:3},{choice:"aucune autre aile n'a le droit d'utiliser cette ascendance",point:-6},{choice:"les ailes qui arrivent après vous doivent adopter votre sens de rotation",point:3},{choice:"vous êtes prioritaire sur une aile située en dessous et qui vous rejoint",point:-6}]},{id:234,question:"Vous envisagez d'utiliser une ascendance où se trouve déjà un autre appareil ; vous",choices:[{choice:"faites comme si vous étiez seul",point:-6},{choice:"essayez en jouant sur la vitesse de vous placer de façon diamétralement opposée dans le même sens de rotation",point:6},{choice:"engagez la spirale juste devant lui pour qu'il vous voit bien",point:-6}]},{id:235,question:"Au cas où le vent météo change d'orientation ou d'intensité pendant le vol, il convient",choices:[{choice:"de ralentir au maximum afin de retarder le moment d'un atterrissage qui s'annonce délicat",point:-6},{choice:`de repérer immédiatement des terrains de secours afin de se préparer à l'éventualité d'un atterrissage "aux vaches"`,point:3},{choice:"de mettre le cap immédiatement sur le terrain pour rentrer coûte que coûte",point:-6},{choice:"de changer à temps son plan de vol pour se donner les meilleurs chances de rentrer malgré tout au terrain",point:3}]},{id:236,question:"Sur une aile en vol rectiligne stabilisé, lorsque le pilote provoque une diminution de l'incidence",choices:[{choice:"la vitesse sur trajectoire augmente",point:3},{choice:"la trajectoire s'incurve transitoirement vers le bas",point:3},{choice:"la trajectoire s'incurve transitoirement vers le haut",point:-6},{choice:"la vitesse sur trajectoire diminue",point:-6}]},{id:237,question:"Les zones favorables au déclenchement de la convection sont en général",choices:[{choice:"les zones rocailleuses",point:2},{choice:"les forêts",point:-6},{choice:"les zones urbanisées",point:2},{choice:"les zones sèches",point:2}]},{id:238,question:"Une bonne approche",choices:[{choice:"se prépare suffisamment tôt",point:2},{choice:"tient compte du vent météo et de ses variations possibles",point:2},{choice:"doit être modifiable en cas de nécessité",point:2}]},{id:239,question:"La traînée induite",choices:[{choice:"est la traînée de culot de l'aile",point:-6},{choice:"est due au pilote et aux câbles ou suspentes",point:-6},{choice:"est due aux irrégularités de surface de l'aile",point:-6},{choice:"se manifeste entre autres par des tourbillons marginaux",point:6}]},{id:240,question:"Un moniteur encadre un stage de formation en milieu aménagé (S.I.V., pilotage, acrobatie) dans le cadre d'une école fédérale",choices:[{choice:"sa formation initiale est suffisante",point:-6},{choice:"il doit organiser le stage au dessus de l'eau",point:3},{choice:"il a reçu une formation particulière",point:3}]},{id:241,question:"En région montagneuse, vous recherchez de préférence les ascendances thermiques",choices:[{choice:"sur les rochers ensoleillés",point:6},{choice:"sur les versants à l'abri du soleil et du vent",point:-6},{choice:"dans les fonds de vallée",point:-6}]},{id:242,question:"On appelle anticyclone une zone",choices:[{choice:"de vents faibles",point:0},{choice:"de haute pression",point:6},{choice:"de basse pression",point:-6}]},{id:243,question:"L'emport du parachute de secours",choices:[{choice:"n'exige aucune mesure particulière",point:-6},{choice:"impose une surveillance particulière des velcros et goupilles de fermeture du conteneur",point:3},{choice:"expose le pilote à des risques d'ouverture intempestive",point:3}]},{id:244,question:"Le système de fermeture du container extérieur du parachute",choices:[{choice:"doit se libérer à la première traction de la poignée de parachute (effort compris entre 4 et 9kg)",point:2},{choice:"doit être vérifié avant chaque décollage",point:2},{choice:"est plus fiable si un maillon rapide le verrouille",point:-6},{choice:"est généralement verrouillé par une aiguille souple ou rigide",point:2}]},{id:245,question:"Vous êtes en approche ; une aile est juste en dessous de vous",choices:[{choice:"vous l'observez attentivement car vous lui devez la priorité",point:6},{choice:"vous faites des 360° pour vous poser avant lui",point:-6},{choice:"en approche, il n'y a plus de priorité",point:-6},{choice:"il vous doit la priorité",point:-6}]},{id:246,question:"Une aile de Vol Libre, c'est",choices:[{choice:"un frein aérodynamique",point:-6},{choice:"un parachute",point:-6},{choice:"un planeur ultra-léger",point:3},{choice:"un aéronef non soumis à l'immatriculation",point:3}]},{id:247,question:"Vous êtes 200m sous un gros cumulus, vers son centre, vous observez quelques nuages déchiquetés et un variomètre fortement positif",choices:[{choice:"vous augmentez la vitesse jusqu'à amener le variomètre à 0",point:-6},{choice:"vous pouvez utiliser l'ascendance sur les bords du nuage, en gardant toujours une direction totalement dégagée à toute altitude",point:2},{choice:"vous en profitez pour gagner de l'altitude",point:-6},{choice:"vous dégagez du côté le plus clair pour échapper à l'influence du nuage",point:4}]},{id:248,question:"Les nuages de type stratus",choices:[{choice:"se développent horizontalement",point:3},{choice:"caractérisent des couches plutôt stables",point:3},{choice:"se développent verticalement",point:-6},{choice:"caractérisent des couches plutôt instables",point:-6}]},{id:249,question:"Le brevet de pilote et la qualification biplace sont certifiées par",choices:[{choice:"le président du club où vous êtes affilié",point:-6},{choice:"le responsable régional de la formation (R.R.F.)",point:6},{choice:"le directeur technique de l'école (D.T.E.)",point:-6}]},{id:250,question:"Vous croisez une autre aile ; votre vitesse de croisement est égale à",choices:[{choice:"la somme de vos 2 vitesse/air",point:6},{choice:"la moitié de votre vitesse/air",point:-6},{choice:"votre vitesse/air",point:-6}]},{id:251,question:"Les protections dorsales et latérales de votre sellette",choices:[{choice:"vous autorise à un niveau d'engagement plus fort",point:-6},{choice:"permettent parfois et pour certains modèles d'atténuer les lésions dues au poinçonnement",point:2},{choice:"peuvent améliorer le maintien dorsal",point:2},{choice:"peuvent protéger contre un choc de faible intensité",point:2}]},{id:252,question:"Parmi les nuages ci-dessous, les plus dangereux pour le vol libre sont les",choices:[{choice:"cumulonimbus",point:4},{choice:"strato-cumulus",point:-6},{choice:"nuages de rotors",point:2}]},{id:253,question:"Par vent fort, le vol captif sur point fixe (corde attachée au sol)",choices:[{choice:"peut être utilisé en école",point:-6},{choice:"peut entraîner un verrouillage irrémédiable",point:3},{choice:"n'est jamais dangereux",point:-6},{choice:"est fortement déconseillé",point:3}]},{id:254,question:"En turbulence vous faites les oreilles",choices:[{choice:"vous ne pourrez plus piloter avec vos freins",point:3},{choice:"votre aile sera moins sensible en tangage",point:3},{choice:"c'est fortement déconseillé",point:-6}]},{id:255,question:"Le soleil réchauffe principalement l'atmosphère",choices:[{choice:"indirectement par l'intermédiaire du sol",point:6},{choice:"directement par rayonnement",point:-6},{choice:"directement par convection",point:-6}]},{id:256,question:"En vol vent de travers",choices:[{choice:"le nez de l'aile se met face au vent : c'est l'effet girouette",point:-6},{choice:"l'axe de l'aile fait un angle avec la trajectoire/sol",point:2},{choice:"l'axe de l'aile reste parallèle à la trajectoire/sol",point:-6},{choice:"vous devez adopter un angle de contre-dérive si vous vous dirigez vers un point qui n'est pas dans l'axe du vent",point:4}]},{id:257,question:"Comment savoir si un exercice militaire est en cours ?",choices:[{choice:"En allant vérifier sur le site web du SIA, à la rubrique SUP AIP et NOTAM",point:6},{choice:"En vérifiant l'affichage sur les panneaux d'information du site choisi",point:-6},{choice:"Il suffit d'aller sur les pages espace aérien du site web de la FFVL",point:-6}]},{id:258,question:"Lorsque vous volez vent arrière près du sol, l'impression visuelle tend à modifier votre perception de la vitesse/air, ce qui peut vous conduire à",choices:[{choice:"voler trop lentement en freinant votre aile",point:3},{choice:"voler trop rapidement en accélérant votre aile",point:-6},{choice:"vous rapprocher dangereusement de la vitesses minimum et des risques associés",point:3}]},{id:259,question:"On appelle brise de pente descendante (ou vent catabatique)",choices:[{choice:"un vent froid qui descend la vallée du Rhône",point:-6},{choice:"un vent météo qui descend le long d'une pente",point:-6},{choice:"un air qui s'est refroidi au contact du sol et qui descend par gravité le long d'une pente",point:6}]},{id:260,question:"Vous vous dirigez vers le terrain en vent arrière à vitesse de croisière ; vous voyez les limites les plus rapprochées du terrain monter régulièrement vers vous",choices:[{choice:"vous choisissez immédiatement un atterrissage de secours à meilleure portée",point:6},{choice:"vous ralentissez pour utiliser la finesse/sol importante due au vent arrière",point:-6},{choice:"vous allez arriver au dessus du terrain, faire demi-tour et vous poser vent de face",point:-6},{choice:"vous allez arriver juste au terrain et vous poser vent arrière",point:-6}]},{id:261,question:"Pour un pilote peu expérimenté, un terrain d'atterrissage se découvre",choices:[{choice:"au moment d'atterrir",point:-6},{choice:"en vol, en venant à la verticale pour l'observer",point:-6},{choice:"avant le vol, c'est un minimum",point:6}]},{id:262,question:"Vous affrontez un vent de face de 15 km/h ; pour rentrer au terrain",choices:[{choice:"en prenant des points de repère au sol et en jouant sur votre vitesse, vous essayez de trouver le meilleur angle de plané",point:6},{choice:"vous cherchez à vous maintenir au taux de chute minimum pour avoir plus de temps pour effectuer le trajet",point:-6},{choice:"vous volez aussi rapidement que possible pour avoir une vitesse de pénétration maximum",point:-6}]},{id:263,question:"Pour être précis à l'atterrissage, la visualisation correcte de la pente en finale est indispensable. Cette pente",choices:[{choice:"varie en fonction de l'incidence",point:3},{choice:"ne dépend que des caractéristiques aérodynamiques de l'aile",point:-6},{choice:"varie en fonction de la direction et de la vitesse du vent",point:3}]},{id:264,question:"La partie pratique du brevet de pilote est attribué par",choices:[{choice:"le président de votre club",point:-3},{choice:"le directeur technique d'une école française de vol libre (DTE)",point:6},{choice:"le responsable régional de la formation (R.R.F.)",point:-3}]},{id:265,question:"Le gradient de vent de face à l'atterrissage",choices:[{choice:"augmente le taux de chute",point:2},{choice:"nécessite par sécurité une prise de vitesse préalable",point:2},{choice:"est parfois dangereux car il peut conduire au décrochage en cas de pilotage inadapté",point:2},{choice:"n'a pas d'effet sur la vitesse/air",point:-6}]},{id:266,question:"Par rapport au vent mesuré au décollage à 2m/sol, le vent 20m au dessus risque d'être",choices:[{choice:"de même force",point:-6},{choice:"plus fort",point:6},{choice:"moins fort",point:-6}]},{id:267,question:"Un pilote breveté ayant une pratique loisir irrégulière",choices:[{choice:'peut utiliser une voile classée en "D"',point:-6},{choice:"choisit sa voile selon les conditions aérologiques",point:-6},{choice:"peut utiliser un prototype en air calme",point:-6},{choice:`ne devrait voler qu'avec des voiles classées en "A" ou "B"`,point:6}]},{id:268,question:"La pente d'une aire de décollage doit être",choices:[{choice:"n'a pas à être comparée à la pente de finesse max. de l'aile",point:-6},{choice:"supérieure à la pente de finesse max. de l'aile",point:6},{choice:"inférieure ou égale à la finesse max. de l'aile",point:-6}]},{id:269,question:"A toute altitude dans les espaces aériens classés E et au dessus de 900 m mer ou 300 m sol en montagne dans les espaces aériens non contrôlés, la distance minimale à respecter par rapport aux nuages est de",choices:[{choice:"50 mètres horizontalement et 0 mètre verticalement",point:-6},{choice:"0 mètre",point:-6},{choice:"1500 mètres horizontalement et 300 mètres verticalement",point:6}]},{id:270,question:"Au cours d'un vol de pente en conditions relativement turbulentes",choices:[{choice:"vous vous éloignez un peu du relief et vous augmentez votre vitesse",point:4},{choice:"vous évitez de descendre en dessous des crêtes",point:2},{choice:"vous volez le plus vite possible",point:-6}]},{id:271,question:"En turbulence",choices:[{choice:"vous devez voler le plus lentement possible pour ne pas fatiguer la structure",point:-6},{choice:"les efforts sur la structure augmentent avec la vitesse de vol",point:6},{choice:"vous devez voler bras hauts pour vite sortir de la zone",point:-6}]},{id:272,question:"En vol, un P.U.L. arrive sur votre droite avec une route convergente",choices:[{choice:"vous devez céder la priorité",point:6},{choice:"vous avez la priorité",point:-6},{choice:"la priorité est fonction de la taille respective des aéronefs",point:-6}]},{id:273,question:"C'est mon premier vol de la saison",choices:[{choice:"j'aurais moins de résistance à la fatigue, je n'hésite pas à écourter mon vol pour garder un peu de fraîcheur pour l'atterrissage",point:3},{choice:"j'utilise des conditions faciles pour moi",point:3},{choice:"il n'y a pas de différence, c'est comme le vélo ça ne s'oublie pas",point:-6}]},{id:274,question:"Je m'approche de la base du nuage",choices:[{choice:"j'en profite au maximum, c'est un nuage isolé, ça n'est pas grave si je passe un peu dedans",point:-6},{choice:"je suis très méfiant, il pourrait arriver une masse d'air plus humide qui condense plus bas et me bouche la sortie, j'ai toujours une échappatoire latérale",point:3},{choice:"je suis sur un bord du nuage pour pouvoir m'échapper à tout moment",point:3},{choice:"pas de soucis, j'ai une boussole ou un GPS",point:-6}]},{id:275,question:"Dans un espace aérien non contrôlé et au dessous de 900 m mer ou 300 m sol en montagne, vous devez avoir",choices:[{choice:"une visibilité d'au moins 1500 m et voler hors des nuages",point:6},{choice:"une visibilité d'au moins 8 km et un espacement par rapport aux nuages de 300 m verticalement et 1500 m horizontalement",point:-6},{choice:"une visibilité de 3000 m et maintenir un espacement par rapport aux nuages de 600 m",point:-6}]},{id:276,question:"En conditions turbulentes, il vaut mieux",choices:[{choice:"voler au taux de chute mini",point:-6},{choice:"ne jamais faire d'évolutions serrées",point:3},{choice:"s'éloigner des limites du domaine de vol",point:3}]},{id:277,question:"Pour garder mon parachute en bon état, je dois",choices:[{choice:"le stocker au sec et éviter tout contact avec l'humidité",point:3},{choice:"l'essayer en vol sur mon site préféré au moins deux fois par an",point:-6},{choice:"l'aérer puis le replier une à deux fois par an, et à minima selon les préconisations du constructeur",point:3}]},{id:278,question:"Le gradient de vent de face à l'atterrissage",choices:[{choice:"diminue la vitesse/air",point:3},{choice:"augmente la vitesse/air",point:-6},{choice:"diminue l'incidence",point:-6},{choice:"augmente l'incidence",point:3}]},{id:279,question:"Au décollage, il y a 30 km/h de vent ; mon aile vole à une vitesse maximum de 35 km/h",choices:[{choice:"vous utilisez l'accélérateur dés que possible pour pouvoir vous éloigner du relief",point:-6},{choice:"vous devez courir à 5 km/h pour décoller",point:-6},{choice:"vous vous abstenez de décoller en estimant que la marge de sécurité n'est pas suffisante",point:6}]},{id:280,question:"Vous êtes en finale, face au terrain d'atterrissage ; vous vous apercevez que vous êtes un peu long et haut, vous risquez de dépasser le terrain ; vous choisissez",choices:[{choice:"d'augmenter le trajet à parcourir en déviant votre trajectoire",point:3},{choice:"d'augmenter la traînée parasite en vous relevant",point:3},{choice:"de perdre de l'altitude en parachutant légèrement",point:-6},{choice:"de perdre de l'altitude en accélérant",point:0}]},{id:281,question:"Le passage d'un cumulonimbus dans votre secteur de vol",choices:[{choice:"vous invite à profiter des ascendances larges avant la pluie",point:-6},{choice:"vous impose un atterrissage immédiat",point:3},{choice:"peut rendre de toute façon l'atterrissage problématique",point:3}]},{id:282,question:"Dans un thermique au cours des 360°, le variomètre passe par un maximum puis retombe à des valeurs faiblement positives",choices:[{choice:"vous quittez l'ascendance pour la reprendre d'un autre côté",point:-6},{choice:"vous inversez le sens des 360°",point:-6},{choice:"pour vous recentrer, vous élargissez le virage juste avant le maximum du variomètre et resserrez peu après",point:6}]},{id:283,question:"Pour centrer un thermique",choices:[{choice:"vous diminuez l'inclinaison quand l'ascendance augmente",point:3},{choice:"vous augmentez l'inclinaison quand l'ascendance augmente",point:-3},{choice:"vous pouvez voler très lentement sans risque d'autorotation car l'air ascendant empêchera une abattée éventuelle",point:-6},{choice:"vous augmentez l'inclinaison quand l'ascendance diminue",point:3}]},{id:284,question:"Vous êtes en prise de terrain en S (P.T.S.) ; votre trajectoire s'enfonce sous le plan de descente prévu ; vous devez",choices:[{choice:"accélérer pour ne pas perdre de temps",point:-6},{choice:"raccourcir vos S",point:3},{choice:"s'il le faut vous mettre en ligne droite face au terrain",point:3}]},{id:285,question:"En haute montagne, la densité de l'air diminuant avec l'altitude et pour que votre aile puisse décoller, vous devez vous attendre à courir",choices:[{choice:"moins vite",point:-6},{choice:"plus vite",point:3},{choice:"plus longtemps",point:3},{choice:"moins longtemps",point:-6}]},{id:286,question:"Les parties de l'aile subissant le plus d'efforts en vols sont",choices:[{choice:"la partie avant du profil",point:3},{choice:"la partie arrière du profil",point:-6},{choice:"les suspentes D",point:-6},{choice:"les suspentes A et B",point:3}]},{id:287,question:"Vous risquez de rencontrer de fortes turbulences dangereuses",choices:[{choice:"sous le vent d'un relief par vent fort",point:2},{choice:"dans une ascendance dynamique",point:-6},{choice:"dans les zones de cisaillement",point:2},{choice:"près du relief, lorsque l'activité thermique est maximum",point:2}]},{id:288,question:"Une aile homologuée CEN est obligatoire",choices:[{choice:"pour pratiquer en compétition",point:-6},{choice:"dans le cadre de la pratique loisir",point:-6},{choice:"dans le cadre des écoles labellisées par la fédération",point:6}]},{id:289,question:"Avant de voler sur un site déclaré F.F.V.L. que vous ne connaissez pas, vous devez",choices:[{choice:"lire les panneaux d'informations F.F.V.L. sur ces sites",point:3},{choice:"obtenir l'autorisation du club local",point:-6},{choice:"prendre connaissance de la classification des espaces aériens environnants et de la présence de zones à statut particulier",point:3},{choice:"obtenir l'autorisation de l'école locale",point:-6}]},{id:290,question:"Le vol à l'intérieur des nuages est permis",choices:[{choice:"nulle part",point:6},{choice:"à plus de 900 mètres au dessus du niveau de la mer",point:-6},{choice:"à plus de 300 mètres au dessus de tout relief",point:-6}]},{id:291,question:"A vitesse de taux de chute mini, pour amorcer un virage à droite sans trop perdre de vitesse et ne pas risquer la mise en vrille, vous devez",choices:[{choice:"appliquer mon poids sur les élévateurs de droite",point:3},{choice:"relever le frein gauche",point:3},{choice:"tirer sur le frein droit",point:-6}]},{id:292,question:"Vous voulez rentrer dans une ascendance alors qu'une autre aile spirale 50m en dessous",choices:[{choice:"vous attendez qu'elle passe au dessus de vous pour rentrer car sinon la descendance périphérique risque de vous mettre à la même hauteur",point:0},{choice:"vous enroulez en sens inverse pour pouvoir la surveiller",point:-6},{choice:"vous enroulez dans le même sens qu'elle",point:6}]},{id:293,question:"Lors d'un gonflage par vent fort, la voile commence à vous tirer très fort vers l'arrière, vous risquez d'être traîné au sol",choices:[{choice:"vous lâchez les commandes et vous vous agrippez où vous pouvez pour résister",point:-6},{choice:"vous courez vers l'aile avant d'être déséquilibré et aidez à affaler en tirant sur les freins",point:3},{choice:"vous courez vers l'aile avant d'être déséquilibré et décrochez l'aile à l'aide des élévateurs arrières si vous y arrivez",point:3},{choice:"Vous résistez et simultanément tirez les deux freins à fond pour vous arrêter",point:-6}]},{id:294,question:"Vous évoluez en vol de pente, dans un espace aérien non contrôlé, sur une montagne dont l'altitude est de 1000m. La base des nuages est à 1200m. Le respect des conditions de vol à vue vous permet de monter jusqu'à une altitude de",choices:[{choice:"1200 m",point:6},{choice:"1000 m",point:-6},{choice:"900 m",point:-6}]},{id:295,question:"Loin du relief, vous suivez la même route et au même niveau qu'une autre aile moins rapide ; vous effectuez le dépassement par",choices:[{choice:"la gauche",point:-6},{choice:"la droite",point:6},{choice:"le dessus",point:-6}]},{id:296,question:"L'emport du parachute de secours se justifie par les risques de",choices:[{choice:"abandon du vol par épuisement",point:-6},{choice:"incident de vol irréversible (twist, cravate, etc.)",point:2},{choice:"collision",point:2},{choice:"rupture de l'aile",point:2}]},{id:297,question:"Quelles indications sont portées dans le cartouche d'identification d'un espace ?",choices:[{choice:"Le nom et le type d'espace ainsi que les hauteurs sol du volume correspondant",point:-6},{choice:"Le type, le nom, le plancher et le plafond, ainsi que la fréquence d'appel pour cet espace",point:6},{choice:"Le nom, le type, les horaires, le volume et le numéro de téléphone liés à cet espace",point:-6}]},{id:298,question:"Comment peuvent être exprimées les limites des espaces contrôlés ?",choices:[{choice:"Toujours en altitudes QNH pour prendre en compte les variations de pression",point:-6},{choice:"Selon le cas, en ASFC, AMSL ou FL",point:6},{choice:"En niveaux de vol uniquement à cause du trafic IFR",point:-6}]},{id:299,question:"Dans le cadre fédéral, la présence d'un moniteur est",choices:[{choice:"obligatoire sur la pente école pendant les cours",point:6},{choice:"facultative dans tous les cas",point:-6},{choice:"facultative si les élèves sont accompagnés par un pilote breveté",point:-6}]},{id:300,question:"Vous êtes en vol de pente, le relief est à votre gauche. Une aile arrive en face à la même altitude",choices:[{choice:"elle a priorité",point:6},{choice:"vous avez priorité et maintenez votre cap",point:-6},{choice:"vous tentez de passer en dessous",point:-6}]},{id:301,question:"A l'atterrissage une prise de vitesse est nécessaire en finale car",choices:[{choice:"en présence de vent le risque d'un gradient est propre à soudainement réduire ma vitesse relative",point:3},{choice:"les forces aérodynamiques augmentant au carré de la vitesse, elles favoriseront un freinage efficace",point:3},{choice:"les forces aérodynamiques n'ont pas une incidence directe sur la vitesse de vol",point:-6}]},{id:302,question:"Pour la délivrance d'une licence à un élève, le certificat médical présenté doit être de moins de",choices:[{choice:"1 an",point:-6},{choice:"3 mois",point:6},{choice:"6 mois",point:-6}]},{id:303,question:"Un Club-École Français de Vol Libre (C.E.F.V.L) est",choices:[{choice:"une entreprise privée indépendante de la F.F.V.L.",point:-6},{choice:"une association loi 1901 (sans but lucratif) affiliée à la F.F.V.L.",point:3},{choice:"contrôlé par les adhérents de l'association",point:3}]},{id:304,question:"Le sticker CEN apposé sur un parapente",choices:[{choice:"n'est pas obligatoire sur tous les exemplaires d'un modèle homologué",point:-6},{choice:"donne des indications sur le comportement de ce modèle dans certaines configurations de vol",point:2},{choice:"indique avec quel type de harnais ont été réalisés les essais",point:2},{choice:"permet de se faire une idée sur le niveau de pilotage demandé pour ce modèle",point:2}]},{id:305,question:"Votre demi aile gauche se ferme",choices:[{choice:"de retour au vol droit, si l'aile est toujours fermée, vous pouvez forcer sa réouverture par une action ample et non maintenue du frein gauche",point:2},{choice:"vous chargez la demi aile droite simultanément à la sellette et à la commande",point:2},{choice:"vous freinez à gauche pour forcer la réouverture",point:-6},{choice:'vous freinez du côté opposé pour stabiliser votre trajectoire en évitant le "surcontre"',point:2}]},{id:306,question:"Pour rouvrir les oreilles",choices:[{choice:"je libère les suspentes concernées et regarde le bon déroulement de leur réouverture",point:2},{choice:"si la réouverture ne s'est pas faite d'elle-même, j'applique des actions répétées et rapides de petites amplitudes jusqu'à l'obtention de la réouverture totale",point:-6},{choice:"il est recommandé de procéder demi/aile par demi/aile et de valider à chaque étape la présence du vent relatif",point:2},{choice:"si la réouverture ne s'est pas faite d'elle-même, j'abaisse, côté fermé, amplement et paisiblement ma commande pour la relâcher aussitôt",point:2}]},{id:307,question:"Le choix d'une voile est guidé par",choices:[{choice:"l'avis d'un vendeur spécialisé qui connaît le pilote",point:3},{choice:"le niveau d'accessibilité défini par la presse spécialisée",point:1},{choice:"la catégorie de la voile",point:2},{choice:"le niveau que le pilote veut atteindre",point:-6}]},{id:308,question:"En vol de pente une violente turbulence replie brutalement une demi-aile de votre parapente",choices:[{choice:'vous contrôlez votre départ en rotation tout en gardant une vitesse suffisante pour éviter un "sur contre"',point:6},{choice:"vous regardez la nature du terrain sous vos pieds et vous vous préparez éventuellement à un atterrissage de fortune",point:0},{choice:"vous relevez les bras et prenez un maximum de vitesse pour éviter le décrochage",point:-6},{choice:"vous tirez immédiatement sur le frein correspondant au côté fermé pour en forcer la réouverture",point:-6}]},{id:309,question:"L'emport du parachute de secours",choices:[{choice:"est vivement conseillé quelle que soit la forme de pratique et demande une information pour l'utilisation",point:3},{choice:"nécessite une autorisation d'utilisation",point:-3},{choice:"est obligatoire en compétition FFVL",point:3},{choice:"est obligatoire en sortie club",point:-3}]},{id:310,question:"Suite à une turbulence ou à une entrée de thermique mon aile cabre",choices:[{choice:"je réagis en bridant doucement mon aile",point:-6},{choice:"je me sens “partir” sur le dos",point:2},{choice:"je réagis en relevant brièvement mes mains puis les rabaisse si une abattée s'enchaîne",point:2},{choice:"mon aile est en train de perdre de la vitesse",point:2}]},{id:311,question:"La norme CEN E 926-1 et 2",choices:[{choice:"oblige le constructeur à conserver les caractéristiques techniques sur tous les exemplaires produits",point:3},{choice:"est valable quel que soit le harnais monté sur l'aile",point:-6},{choice:"certifie que tout parapente homologué est utilisable sans risque par n'importe quel pilote (y compris les débutants)",point:-6},{choice:"permet de se faire une idée du comportement de ce modèle",point:3}]},{id:312,question:"En vol, bras hauts, vos freins sont tendus et le bord de fuite est un peu abaissé",choices:[{choice:"c'est mieux pour le gonflage",point:-6},{choice:"ça améliore la finesse sans action sur les commandes",point:-6},{choice:"il faut rallonger et régler les freins pour le prochain vol",point:6},{choice:"cela n'a que peu d'influence sur l'aile",point:-6}]},{id:313,question:"Votre secours est ouvert, vous sentez la traction liée à son déploiement",choices:[{choice:"vous tirez sur un frein pour ramener la voile",point:-6},{choice:"vous regardez vers le bas pour estimer le lieux de l'atterrissage",point:2},{choice:`vous tirez les élévateurs "B" pour stabiliser l'ensemble`,point:2},{choice:"vous vous redressez et vous préparez à amortir le choc",point:2}]},{id:314,question:"En faisant les oreilles, vous",choices:[{choice:"diminuez la finesse/air",point:3},{choice:"augmentez la manœuvrabilité de l'aile",point:-6},{choice:"augmentez le taux de chute",point:3}]},{id:315,question:"Pour faire les oreilles",choices:[{choice:"je vérifie où aboutissent sur mon aile la sélection des suspentes que je dois tirer",point:3},{choice:"je regarde ma voile pour vérifier le bon déroulement de l'opération",point:3},{choice:"je n'oublie pas de préalablement me séparer des freins",point:-6}]},{id:316,question:"Vous êtes en finale face au terrain d'atterrissage ; vous vous apercevez que vous êtes un peu long et haut ; vous risquez de dépasser le terrain",choices:[{choice:"vous lâchez puis retirez les freins plusieurs fois pour secouer l'aile et casser la finesse",point:-6},{choice:"vous augmentez le trajet en faisant un petit S",point:6},{choice:"vous perdez de l'altitude en faisant des 360°",point:-6},{choice:"vous freinez progressivement votre aile jusqu'au point de parachutage",point:-6}]},{id:317,question:"Le gonflage face à la voile",choices:[{choice:"permet de décoller avec un vent supérieur à 30 km/h",point:-6},{choice:"permet de décoller avec des vents modérés à faibles",point:2},{choice:"permet de voir facilement les clefs dans les suspentes",point:2},{choice:"permet de contrôler sa voile facilement pendant qu'elle monte",point:2}]},{id:318,question:"Pour rester dans une ascendance dynamique près du relief",choices:[{choice:"vous volez à la vitesse minimum de l'aile",point:-6},{choice:"vous faites des 360° devant la pente",point:-6},{choice:"vous faites des 8 longs en tournant face au vent",point:6},{choice:"vous faites des 8 longs en tournant face à la pente",point:-6}]},{id:319,question:"Vous êtes dos au relief et votre voile se ferme à 40% sur la gauche ce qui la met en virage à gauche",choices:[{choice:'vous contrez à droite pour vous dégager du relief tout en évitant le "surcontre"',point:6},{choice:"vous freinez à gauche amplement pour regonfler le côté fermé",point:-6},{choice:"vous laissez faire si votre parapente est classé A de la norme CEN",point:-6},{choice:"vous freinez symétriquement des deux côtés",point:0}]},{id:320,question:"Au décollage, le vent est de travers 30°, 3m/s",choices:[{choice:"vous gonflez face à la ligne de pente la plus raide, temporisez, puis prenez de la vitesse en orientant progressivement votre course et votre aile face au vent",point:-6},{choice:"vous gonflez face au vent, temporisez, puis prenez de la vitesse en orientant progressivement votre course et votre aile dans l'axe de la plus grande pente",point:6},{choice:"vous gonflez dans l'axe de la plus grande pente, temporisez, puis accélérez en vous attendant à devoir freiner amplement juste avant de décoller",point:-6}]}]}),actions:{addReminder(t,e){e.id=t,this.qcms.find(n=>n.id===e.qcmId).reminder=e}},getters:{}}),JM={name:"StatistiquesFFVL",computed:{nbAnswered(){return jt().qcms.filter(t=>t.reminder!==void 0).length},nbTotal(){return jt().qcms.length},globalRepartition(){const t={};return jt().qcms.filter(e=>e.reminder).forEach(e=>{const n=e.reminder.remindDelay;t[n]===void 0?t[n]=1:t[n]++}),t},nextDaysRepartition(){let t=[];jt().qcms.filter(n=>n.reminder).forEach(n=>{const i=Ru(n);t.includes(i.getTime())||t.push(i.getTime())}),t.sort((n,i)=>n.date-i.date),console.log(t),t=t.slice().reverse();let e={};return t.forEach(n=>{jt().qcms.filter(i=>i.reminder===void 0?!1:Ru(i).getTime()==n).forEach(i=>{const s=Ru(i);e[bu(s)]===void 0?e[bu(s)]=1:e[bu(s)]++})}),console.log(e),e}}},ZM={lass:"globalStats"},eq={class:"globalStatsTable"},tq=K("thead",null,[K("th",null,"Delay"),K("th",null,"Nb")],-1),nq={class:"nextDays"},iq={class:"nextDaysStatsTable"},sq=K("thead",null,[K("th",null,"Date"),K("th",null,"Nb")],-1);function rq(t,e,n,i,s,r){return ge(),ke(tt,null,[K("div",ZM,[ji(Rt(r.nbAnswered)+" / "+Rt(r.nbTotal)+" questions répondues. ",1),K("div",eq,[K("table",null,[tq,K("tbody",null,[(ge(!0),ke(tt,null,Ka(r.globalRepartition,(o,a)=>(ge(),ke("tr",null,[K("td",null,Rt(a),1),K("td",null,Rt(r.globalRepartition[a]),1)]))),256))])])])]),K("div",nq,[K("div",iq,[K("table",null,[sq,K("tbody",null,[(ge(!0),ke(tt,null,Ka(r.nextDaysRepartition,(o,a)=>(ge(),ke("tr",null,[K("td",null,Rt(a),1),K("td",null,Rt(r.nextDaysRepartition[a]),1)]))),256))])])])])],64)}const ew=kn(JM,[["render",rq]]),oq={name:"PartyMenuItem",props:["qcms","title","dryrun"],computed:{nbQuestions(){return this.qcms.length}}},aq={class:"partyMenuItem"},cq={class:"partyMenuItemPanel"},lq={class:"pmiTitle"},uq={class:"pmiDefinition"},hq={class:"pmiNbQuestions"},dq={style:{"font-weight":"bold"}},fq={key:0,class:"pmiActions"},pq=["src"];function mq(t,e,n,i,s,r){return ge(),ke("div",aq,[K("div",cq,[K("div",lq,Rt(n.title)+" :",1),K("div",uq,[g0(t.$slots,"default")]),K("span",hq,[K("span",dq,Rt(r.nbQuestions),1),ji(" questions")])]),r.nbQuestions>0?(ge(),ke("div",fq,[K("img",{src:"play.png",onClick:e[0]||(e[0]=o=>t.$emit("play",n.qcms,n.dryrun)),class:"playButton"},null,8,pq)])):Gt("",!0)])}const gq=kn(oq,[["render",mq]]),_q={name:"PartyMenuNewSeries",data(){return{nbQuestions:5}},computed:{nbQuestionRemains(){return jt().qcms.filter(t=>t.reminder===void 0).length},hasAlreadyPlayed(){return At().hasAlreadyPlayed}},methods:{playNewSession(){let t=jt().qcms.filter(n=>n.reminder===void 0),e=JI(t).slice(0,this.nbQuestions);At().hasAlreadyPlayed=!0,At().setNewQCMs(e),this.$emit("play",e,!1)},replaySession(){this.$emit("play",At().newQcms,!0)}}},vq={class:"partyMenuItem"},yq={class:"partyMenuItemPanel"},Eq=K("div",{class:"pmiTitle"},"Nouvelle série :",-1),Tq={class:"pmiDefinition"},Iq=K("span",null,"Nb questions : ",-1),wq=K("option",null,"2",-1),bq=K("option",null,"5",-1),Rq=K("option",null,"10",-1),Aq=K("option",null,"20",-1),Cq=[wq,bq,Rq,Aq],Sq={class:"pmiNbQuestions"},Pq={style:{"font-weight":"bold"}},kq={class:"pmiActions"},Nq=["src"],xq=["src"];function Oq(t,e,n,i,s,r){return ge(),ke("div",vq,[K("div",yq,[Eq,K("div",Tq,[Iq,V_(K("select",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.nbQuestions=o)},Cq,512),[[_b,s.nbQuestions]])]),K("span",Sq,[K("span",Pq,Rt(r.nbQuestionRemains),1),ji(" questions")])]),K("div",kq,[K("img",{onClick:e[1]||(e[1]=(...o)=>r.playNewSession&&r.playNewSession(...o)),src:"play.png",class:"playButton"},null,8,Nq),r.hasAlreadyPlayed?(ge(),ke("img",{key:0,style:{"margin-top":"20px"},onClick:e[2]||(e[2]=(...o)=>r.replaySession&&r.replaySession(...o)),src:"replay.png",class:"playButton"},null,8,xq)):Gt("",!0)])])}const Dq=kn(_q,[["render",Oq]]);const Lq={name:"PartyMenu",components:{PartyMenuItem:gq,PartyMenuNewSeries:Dq,StatistiquesFFVL:ew,QuestionFFVL:XM},data(){return{qcm:{question:"",choices:[{choice:"",point:0}]},playing:!1,dryrun:!1,refreshLogo:!0,showStatistiques:!1}},computed:{nbNonValidated(){return At().qcms.filter(t=>!t.validated).length},nbErrors(){return At().nbErrors},todayQcms(){return jt().qcms.filter(t=>t.reminder&&t.reminder.answeredDate==Zr())},todayNewQuestions(){return jt().qcms.filter(t=>t.reminder&&t.reminder.firstAnsweredDate==Zr())},getRemindQCMsCpt(){return this.getRemindQCMs()},hasReminder(){return this.getRemindQCMs().length}},created(){this.loadReminder()},methods:{async loadReminder(){(await LI(vD(ja,"QcmReminder"+za))).forEach(e=>{jt().addReminder(e.id,e.data())}),console.log(jt().qcms)},getNextQuestion(){if(this.playing&&At().qcms.filter(t=>!t.validated).length==0)this.playing=!1,At().setNbErrors(0),this.loadReminder();else{let t=At().qcms.filter(n=>!n.validated),e=Math.floor(Math.random()*t.length);this.qcm=t[e]}},getRemindQCMs(){let t=jt().qcms.filter(e=>e.reminder&&e.reminder.answeredDate!=Zr());return t=t.filter(e=>{let n=ZI(e.reminder.answeredDate);return n.setDate(n.getDate()+e.reminder.remindDelay),n<=new Date}),t},play(t,e){this.dryrun=e,t.forEach(function(n){n.answered=!1,n.validated=!1}),At().setQCMs(t),this.hasAlreadyPlayed=!0,this.playing=!0,this.getNextQuestion()}}},Mq={key:0,class:"partyMenu"},qq={key:1},Vq={class:"partyHeader"},Fq={style:{float:"right"}};function Uq(t,e,n,i,s,r){const o=fi("PartyMenuItem"),a=fi("PartyMenuNewSeries"),c=fi("QuestionFFVL");return ge(),ke(tt,null,[s.playing?Gt("",!0):(ge(),ke("div",Mq,[je(o,{title:"Rappels",qcms:r.getRemindQCMsCpt,dryrun:!1,onPlay:r.play},{default:Pa(()=>[ji("Questions prévues pour aujourd'hui.")]),_:1},8,["qcms","onPlay"]),je(o,{title:"Rejeux",qcms:r.todayQcms,dryrun:!0,onPlay:r.play},{default:Pa(()=>[ji("Questions déjà répondues aujourd'hui.")]),_:1},8,["qcms","onPlay"]),je(o,{title:"Nouveautés",qcms:r.todayNewQuestions,dryrun:!0,onPlay:r.play},{default:Pa(()=>[ji("Questions découvertes aujourd'hui.")]),_:1},8,["qcms","onPlay"]),je(a,{onPlay:r.play},null,8,["onPlay"])])),s.playing?(ge(),ke("div",qq,[K("div",Vq,[K("span",null,"Reste : "+Rt(r.nbNonValidated),1),K("span",Fq,"Erreurs : "+Rt(r.nbErrors),1)]),je(c,{qcm:s.qcm,dryrun:s.dryrun,onGetNextQuestion:r.getNextQuestion,ref:"questionFFVL"},null,8,["qcm","dryrun","onGetNextQuestion"])])):Gt("",!0)],64)}const zq=kn(Lq,[["render",Uq]]);const jq={name:"Main",components:{StatistiquesFFVL:ew,PartyMenu:zq,Menu:OM},data(){return{displayQuestionParty:!0,displayStatistique:!1}},methods:{menuclicked(t){t==="play"?(this.displayQuestionParty=!0,this.displayStatistique=!1):t==="statistiques"&&(this.displayQuestionParty=!1,this.displayStatistique=!0)}}},Bq={class:"mainPanel"};function $q(t,e,n,i,s,r){const o=fi("Menu"),a=fi("PartyMenu"),c=fi("StatistiquesFFVL");return ge(),ke("div",Bq,[je(o,{onMenuClicked:r.menuclicked},null,8,["onMenuClicked"]),s.displayQuestionParty?(ge(),qs(a,{key:0})):Gt("",!0),s.displayStatistique?(ge(),qs(c,{key:1})):Gt("",!0)])}const Wq=kn(jq,[["render",$q]]),ql=Eb(Nb),Hq=!1;ql.use(yL,{firebaseApp:jf,modules:[vL()]});const ja=EI(jf);ql.use(wb());const Wf=TM({history:qL(),routes:[{path:"/",component:RM},{path:"/main",component:Wq,meta:{requiresAuth:!0}}]});Wf.beforeEach((t,e,n)=>{t.matched.some(i=>i.meta.requiresAuth)&&!Hq?iy().currentUser?n():n("/"):n()});ql.use(Wf);ql.mount("#app");
