(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Uh(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Pe={},Is=[],Zt=()=>{},nw=()=>!1,iw=/^on[^a-z]/,qc=t=>iw.test(t),Bh=t=>t.startsWith("onUpdate:"),at=Object.assign,jh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},sw=Object.prototype.hasOwnProperty,de=(t,e)=>sw.call(t,e),z=Array.isArray,ws=t=>ko(t)==="[object Map]",er=t=>ko(t)==="[object Set]",Yf=t=>ko(t)==="[object Date]",Z=t=>typeof t=="function",He=t=>typeof t=="string",Ms=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",i_=t=>(Ae(t)||Z(t))&&Z(t.then)&&Z(t.catch),s_=Object.prototype.toString,ko=t=>s_.call(t),rw=t=>ko(t).slice(8,-1),r_=t=>ko(t)==="[object Object]",$h=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ka=Uh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Uc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ow=/-(\w)/g,Rn=Uc(t=>t.replace(ow,(e,n)=>n?n.toUpperCase():"")),aw=/\B([A-Z])/g,tr=Uc(t=>t.replace(aw,"-$1").toLowerCase()),Bc=Uc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Bl=Uc(t=>t?`on${Bc(t)}`:""),Hi=(t,e)=>!Object.is(t,e),Na=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ha=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},o_=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xf;const Cu=()=>Xf||(Xf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zr(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=He(i)?hw(i):Zr(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(He(t)||Ae(t))return t}const cw=/;(?![^(]*\))/g,lw=/:([^]+)/,uw=/\/\*[^]*?\*\//g;function hw(t){const e={};return t.replace(uw,"").split(cw).forEach(n=>{if(n){const i=n.split(lw);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function No(t){let e="";if(He(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const i=No(t[n]);i&&(e+=i+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const dw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fw=Uh(dw);function a_(t){return!!t||t===""}function pw(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Do(t[i],e[i]);return n}function Do(t,e){if(t===e)return!0;let n=Yf(t),i=Yf(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Ms(t),i=Ms(e),n||i)return t===e;if(n=z(t),i=z(e),n||i)return n&&i?pw(t,e):!1;if(n=Ae(t),i=Ae(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Do(t[o],e[o]))return!1}}return String(t)===String(e)}function zh(t,e){return t.findIndex(n=>Do(n,e))}const At=t=>He(t)?t:t==null?"":z(t)||Ae(t)&&(t.toString===s_||!Z(t.toString))?JSON.stringify(t,c_,2):String(t),c_=(t,e)=>e&&e.__v_isRef?c_(t,e.value):ws(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:er(e)?{[`Set(${e.size})`]:[...e.values()]}:Ae(e)&&!z(e)&&!r_(e)?String(e):e;let Nt;class l_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}}on(){Nt=this}off(){Nt=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function jc(t){return new l_(t)}function mw(t,e=Nt){e&&e.active&&e.effects.push(t)}function Wh(){return Nt}function u_(t){Nt&&Nt.cleanups.push(t)}const Hh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},h_=t=>(t.w&yi)>0,d_=t=>(t.n&yi)>0,gw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=yi},_w=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];h_(s)&&!d_(s)?s.delete(t):e[n++]=s,s.w&=~yi,s.n&=~yi}e.length=n}},Ka=new WeakMap;let Sr=0,yi=1;const Su=30;let Kt;const Ui=Symbol(""),Pu=Symbol("");class Kh{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,mw(this,i)}run(){if(!this.active)return this.fn();let e=Kt,n=li;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Kt,Kt=this,li=!0,yi=1<<++Sr,Sr<=Su?gw(this):Jf(this),this.fn()}finally{Sr<=Su&&_w(this),yi=1<<--Sr,Kt=this.parent,li=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Kt===this?this.deferStop=!0:this.active&&(Jf(this),this.onStop&&this.onStop(),this.active=!1)}}function Jf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let li=!0;const f_=[];function nr(){f_.push(li),li=!1}function ir(){const t=f_.pop();li=t===void 0?!0:t}function St(t,e,n){if(li&&Kt){let i=Ka.get(t);i||Ka.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Hh()),p_(s)}}function p_(t,e){let n=!1;Sr<=Su?d_(t)||(t.n|=yi,n=!h_(t)):n=!t.has(Kt),n&&(t.add(Kt),Kt.deps.push(t))}function jn(t,e,n,i,s,r){const o=Ka.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const c=Number(i);o.forEach((l,u)=>{(u==="length"||!Ms(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?$h(n)&&a.push(o.get("length")):(a.push(o.get(Ui)),ws(t)&&a.push(o.get(Pu)));break;case"delete":z(t)||(a.push(o.get(Ui)),ws(t)&&a.push(o.get(Pu)));break;case"set":ws(t)&&a.push(o.get(Ui));break}if(a.length===1)a[0]&&ku(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ku(Hh(c))}}function ku(t,e){const n=z(t)?t:[...t];for(const i of n)i.computed&&Zf(i);for(const i of n)i.computed||Zf(i)}function Zf(t,e){(t!==Kt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function yw(t,e){var n;return(n=Ka.get(t))==null?void 0:n.get(e)}const vw=Uh("__proto__,__v_isRef,__isVue"),m_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ms)),ep=Ew();function Ew(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=fe(this);for(let r=0,o=this.length;r<o;r++)St(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(fe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){nr();const i=fe(this)[e].apply(this,n);return ir(),i}}),t}function Tw(t){const e=fe(this);return St(e,"has",t),e.hasOwnProperty(t)}class g_{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,i){const s=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw"&&i===(s?r?xw:E_:r?v_:y_).get(e))return e;const o=z(e);if(!s){if(o&&de(ep,n))return Reflect.get(ep,n,i);if(n==="hasOwnProperty")return Tw}const a=Reflect.get(e,n,i);return(Ms(n)?m_.has(n):vw(n))||(s||St(e,"get",n),r)?a:Le(a)?o&&$h(n)?a:a.value:Ae(a)?s?I_(a):Oo(a):a}}class __ extends g_{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(Ls(r)&&Le(r)&&!Le(i))return!1;if(!this._shallow&&(!Ga(i)&&!Ls(i)&&(r=fe(r),i=fe(i)),!z(e)&&Le(r)&&!Le(i)))return r.value=i,!0;const o=z(e)&&$h(n)?Number(n)<e.length:de(e,n),a=Reflect.set(e,n,i,s);return e===fe(s)&&(o?Hi(i,r)&&jn(e,"set",n,i):jn(e,"add",n,i)),a}deleteProperty(e,n){const i=de(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&jn(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Ms(n)||!m_.has(n))&&St(e,"has",n),i}ownKeys(e){return St(e,"iterate",z(e)?"length":Ui),Reflect.ownKeys(e)}}class Iw extends g_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ww=new __,Rw=new Iw,bw=new __(!0),Gh=t=>t,$c=t=>Reflect.getPrototypeOf(t);function aa(t,e,n=!1,i=!1){t=t.__v_raw;const s=fe(t),r=fe(e);n||(Hi(e,r)&&St(s,"get",e),St(s,"get",r));const{has:o}=$c(s),a=i?Gh:n?Xh:eo;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function ca(t,e=!1){const n=this.__v_raw,i=fe(n),s=fe(t);return e||(Hi(t,s)&&St(i,"has",t),St(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function la(t,e=!1){return t=t.__v_raw,!e&&St(fe(t),"iterate",Ui),Reflect.get(t,"size",t)}function tp(t){t=fe(t);const e=fe(this);return $c(e).has.call(e,t)||(e.add(t),jn(e,"add",t,t)),this}function np(t,e){e=fe(e);const n=fe(this),{has:i,get:s}=$c(n);let r=i.call(n,t);r||(t=fe(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?Hi(e,o)&&jn(n,"set",t,e):jn(n,"add",t,e),this}function ip(t){const e=fe(this),{has:n,get:i}=$c(e);let s=n.call(e,t);s||(t=fe(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&jn(e,"delete",t,void 0),r}function sp(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&jn(t,"clear",void 0,void 0),n}function ua(t,e){return function(i,s){const r=this,o=r.__v_raw,a=fe(o),c=e?Gh:t?Xh:eo;return!t&&St(a,"iterate",Ui),o.forEach((l,u)=>i.call(s,c(l),c(u),r))}}function ha(t,e,n){return function(...i){const s=this.__v_raw,r=fe(s),o=ws(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...i),u=n?Gh:e?Xh:eo;return!e&&St(r,"iterate",c?Pu:Ui),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Zn(t){return function(...e){return t==="delete"?!1:this}}function Aw(){const t={get(r){return aa(this,r)},get size(){return la(this)},has:ca,add:tp,set:np,delete:ip,clear:sp,forEach:ua(!1,!1)},e={get(r){return aa(this,r,!1,!0)},get size(){return la(this)},has:ca,add:tp,set:np,delete:ip,clear:sp,forEach:ua(!1,!0)},n={get(r){return aa(this,r,!0)},get size(){return la(this,!0)},has(r){return ca.call(this,r,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:ua(!0,!1)},i={get(r){return aa(this,r,!0,!0)},get size(){return la(this,!0)},has(r){return ca.call(this,r,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:ua(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ha(r,!1,!1),n[r]=ha(r,!0,!1),e[r]=ha(r,!1,!0),i[r]=ha(r,!0,!0)}),[t,n,e,i]}const[Cw,Sw,Pw,kw]=Aw();function Qh(t,e){const n=e?t?kw:Pw:t?Sw:Cw;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(de(n,s)&&s in i?n:i,s,r)}const Nw={get:Qh(!1,!1)},Dw={get:Qh(!1,!0)},Ow={get:Qh(!0,!1)},y_=new WeakMap,v_=new WeakMap,E_=new WeakMap,xw=new WeakMap;function Mw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lw(t){return t.__v_skip||!Object.isExtensible(t)?0:Mw(rw(t))}function Oo(t){return Ls(t)?t:Yh(t,!1,ww,Nw,y_)}function T_(t){return Yh(t,!1,bw,Dw,v_)}function I_(t){return Yh(t,!0,Rw,Ow,E_)}function Yh(t,e,n,i,s){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=Lw(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function ui(t){return Ls(t)?ui(t.__v_raw):!!(t&&t.__v_isReactive)}function Ls(t){return!!(t&&t.__v_isReadonly)}function Ga(t){return!!(t&&t.__v_isShallow)}function w_(t){return ui(t)||Ls(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function zc(t){return Ha(t,"__v_skip",!0),t}const eo=t=>Ae(t)?Oo(t):t,Xh=t=>Ae(t)?I_(t):t;function R_(t){li&&Kt&&(t=fe(t),p_(t.dep||(t.dep=Hh())))}function b_(t,e){t=fe(t);const n=t.dep;n&&ku(n)}function Le(t){return!!(t&&t.__v_isRef===!0)}function hi(t){return C_(t,!1)}function A_(t){return C_(t,!0)}function C_(t,e){return Le(t)?t:new Vw(t,e)}class Vw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:eo(e)}get value(){return R_(this),this._value}set value(e){const n=this.__v_isShallow||Ga(e)||Ls(e);e=n?e:fe(e),Hi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:eo(e),b_(this))}}function Bi(t){return Le(t)?t.value:t}function Mn(t){return Z(t)?t():Bi(t)}const Fw={get:(t,e,n)=>Bi(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Le(s)&&!Le(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function S_(t){return ui(t)?t:new Proxy(t,Fw)}function qw(t){const e=z(t)?new Array(t.length):{};for(const n in t)e[n]=P_(t,n);return e}class Uw{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return yw(fe(this._object),this._key)}}class Bw{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function jw(t,e,n){return Le(t)?t:Z(t)?new Bw(t):Ae(t)&&arguments.length>1?P_(t,e,n):hi(t)}function P_(t,e,n){const i=t[e];return Le(i)?i:new Uw(t,e,n)}class $w{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Kh(e,()=>{this._dirty||(this._dirty=!0,b_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=fe(this);return R_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function zw(t,e,n=!1){let i,s;const r=Z(t);return r?(i=t,s=Zt):(i=t.get,s=t.set),new $w(i,s,r||!s,n)}function di(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){Wc(r,e,n)}return s}function en(t,e,n,i){if(Z(t)){const r=di(t,e,n,i);return r&&i_(r)&&r.catch(o=>{Wc(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(en(t[r],e,n,i));return s}function Wc(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){di(c,null,10,[t,o,a]);return}}Ww(t,n,s,i)}function Ww(t,e,n,i=!0){console.error(t)}let to=!1,Nu=!1;const gt=[];let hn=0;const Rs=[];let Ln=null,Di=0;const k_=Promise.resolve();let Jh=null;function Zh(t){const e=Jh||k_;return t?e.then(this?t.bind(this):t):e}function Hw(t){let e=hn+1,n=gt.length;for(;e<n;){const i=e+n>>>1,s=gt[i],r=no(s);r<t||r===t&&s.pre?e=i+1:n=i}return e}function ed(t){(!gt.length||!gt.includes(t,to&&t.allowRecurse?hn+1:hn))&&(t.id==null?gt.push(t):gt.splice(Hw(t.id),0,t),N_())}function N_(){!to&&!Nu&&(Nu=!0,Jh=k_.then(O_))}function Kw(t){const e=gt.indexOf(t);e>hn&&gt.splice(e,1)}function Gw(t){z(t)?Rs.push(...t):(!Ln||!Ln.includes(t,t.allowRecurse?Di+1:Di))&&Rs.push(t),N_()}function rp(t,e=to?hn+1:0){for(;e<gt.length;e++){const n=gt[e];n&&n.pre&&(gt.splice(e,1),e--,n())}}function D_(t){if(Rs.length){const e=[...new Set(Rs)];if(Rs.length=0,Ln){Ln.push(...e);return}for(Ln=e,Ln.sort((n,i)=>no(n)-no(i)),Di=0;Di<Ln.length;Di++)Ln[Di]();Ln=null,Di=0}}const no=t=>t.id==null?1/0:t.id,Qw=(t,e)=>{const n=no(t)-no(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function O_(t){Nu=!1,to=!0,gt.sort(Qw);const e=Zt;try{for(hn=0;hn<gt.length;hn++){const n=gt[hn];n&&n.active!==!1&&di(n,null,14)}}finally{hn=0,gt.length=0,D_(),to=!1,Jh=null,(gt.length||Rs.length)&&O_()}}function Yw(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Pe;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||Pe;d&&(s=n.map(f=>He(f)?f.trim():f)),h&&(s=n.map(o_))}let a,c=i[a=Bl(e)]||i[a=Bl(Rn(e))];!c&&r&&(c=i[a=Bl(tr(e))]),c&&en(c,t,6,s);const l=i[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,en(l,t,6,s)}}function x_(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Z(t)){const c=l=>{const u=x_(l,e,!0);u&&(a=!0,at(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(Ae(t)&&i.set(t,null),null):(z(r)?r.forEach(c=>o[c]=null):at(o,r),Ae(t)&&i.set(t,o),o)}function Hc(t,e){return!t||!qc(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,tr(e))||de(t,e))}let Ye=null,Kc=null;function Qa(t){const e=Ye;return Ye=t,Kc=t&&t.type.__scopeId||null,e}function Xw(t){Kc=t}function Jw(){Kc=null}function Da(t,e=Ye,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&gp(-1);const r=Qa(e);let o;try{o=t(...s)}finally{Qa(r),i._d&&gp(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function jl(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:y}=t;let v,I;const P=Qa(t);try{if(n.shapeFlag&4){const b=s||i;v=un(u.call(b,b,h,r,f,d,g)),I=c}else{const b=e;v=un(b.length>1?b(r,{attrs:c,slots:a,emit:l}):b(r,null)),I=e.props?c:Zw(c)}}catch(b){qr.length=0,Wc(b,t,1),v=qe(vi)}let k=v;if(I&&y!==!1){const b=Object.keys(I),{shapeFlag:K}=k;b.length&&K&7&&(o&&b.some(Bh)&&(I=e0(I,o)),k=Vs(k,I))}return n.dirs&&(k=Vs(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),v=k,Qa(P),v}const Zw=t=>{let e;for(const n in t)(n==="class"||n==="style"||qc(n))&&((e||(e={}))[n]=t[n]);return e},e0=(t,e)=>{const n={};for(const i in t)(!Bh(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function t0(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?op(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!Hc(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?op(i,o,l):!0:!!o;return!1}function op(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Hc(n,r))return!0}return!1}function n0({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const M_="components";function fi(t,e){return s0(M_,t,!0,e)||t}const i0=Symbol.for("v-ndc");function s0(t,e,n=!0,i=!1){const s=Ye||ze;if(s){const r=s.type;if(t===M_){const a=Y0(r,!1);if(a&&(a===e||a===Rn(e)||a===Bc(Rn(e))))return r}const o=ap(s[t]||r[t],e)||ap(s.appContext[t],e);return!o&&i?r:o}}function ap(t,e){return t&&(t[e]||t[Rn(e)]||t[Bc(Rn(e))])}const r0=t=>t.__isSuspense;function o0(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):Gw(t)}const da={};function bs(t,e,n){return L_(t,e,n)}function L_(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=Pe){var a;const c=Wh()===((a=ze)==null?void 0:a.scope)?ze:null;let l,u=!1,h=!1;if(Le(t)?(l=()=>t.value,u=Ga(t)):ui(t)?(l=()=>t,i=!0):z(t)?(h=!0,u=t.some(b=>ui(b)||Ga(b)),l=()=>t.map(b=>{if(Le(b))return b.value;if(ui(b))return xi(b);if(Z(b))return di(b,c,2)})):Z(t)?e?l=()=>di(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),en(t,c,3,[f])}:l=Zt,e&&i){const b=l;l=()=>xi(b())}let d,f=b=>{d=P.onStop=()=>{di(b,c,4)}},g;if(ro)if(f=Zt,e?n&&en(e,c,3,[l(),h?[]:void 0,f]):l(),s==="sync"){const b=Z0();g=b.__watcherHandles||(b.__watcherHandles=[])}else return Zt;let y=h?new Array(t.length).fill(da):da;const v=()=>{if(P.active)if(e){const b=P.run();(i||u||(h?b.some((K,ie)=>Hi(K,y[ie])):Hi(b,y)))&&(d&&d(),en(e,c,3,[b,y===da?void 0:h&&y[0]===da?[]:y,f]),y=b)}else P.run()};v.allowRecurse=!!e;let I;s==="sync"?I=v:s==="post"?I=()=>bt(v,c&&c.suspense):(v.pre=!0,c&&(v.id=c.uid),I=()=>ed(v));const P=new Kh(l,I);e?n?v():y=P.run():s==="post"?bt(P.run.bind(P),c&&c.suspense):P.run();const k=()=>{P.stop(),c&&c.scope&&jh(c.scope.effects,P)};return g&&g.push(k),k}function a0(t,e,n){const i=this.proxy,s=He(t)?t.includes(".")?V_(i,t):()=>i[t]:t.bind(i,i);let r;Z(e)?r=e:(r=e.handler,n=e);const o=ze;Fs(this);const a=L_(s,r.bind(i),n);return o?Fs(o):ji(),a}function V_(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function xi(t,e){if(!Ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Le(t))xi(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)xi(t[n],e);else if(er(t)||ws(t))t.forEach(n=>{xi(n,e)});else if(r_(t))for(const n in t)xi(t[n],e);return t}function F_(t,e){const n=Ye;if(n===null)return t;const i=Xc(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,l=Pe]=e[r];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&xi(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Si(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(nr(),en(c,n,8,[t.el,a,t,e]),ir())}}/*! #__NO_SIDE_EFFECTS__ */function q_(t,e){return Z(t)?(()=>at({name:t.name},e,{setup:t}))():t}const Vr=t=>!!t.type.__asyncLoader,U_=t=>t.type.__isKeepAlive;function c0(t,e){B_(t,"a",e)}function l0(t,e){B_(t,"da",e)}function B_(t,e,n=ze){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Gc(e,i,n),n){let s=n.parent;for(;s&&s.parent;)U_(s.parent.vnode)&&u0(i,e,n,s),s=s.parent}}function u0(t,e,n,i){const s=Gc(e,t,i,!0);j_(()=>{jh(i[e],s)},n)}function Gc(t,e,n=ze,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;nr(),Fs(n);const a=en(e,n,t,o);return ji(),ir(),a});return i?s.unshift(r):s.push(r),r}}const Yn=t=>(e,n=ze)=>(!ro||t==="sp")&&Gc(t,(...i)=>e(...i),n),h0=Yn("bm"),d0=Yn("m"),f0=Yn("bu"),p0=Yn("u"),m0=Yn("bum"),j_=Yn("um"),$_=Yn("sp"),g0=Yn("rtg"),_0=Yn("rtc");function y0(t,e=ze){Gc("ec",t,e)}function Ya(t,e,n,i){let s;const r=n&&n[i];if(z(t)||He(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(Ae(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}function v0(t,e,n={},i,s){if(Ye.isCE||Ye.parent&&Vr(Ye.parent)&&Ye.parent.isCE)return e!=="default"&&(n.name=e),qe("slot",n,i&&i());let r=t[e];r&&r._c&&(r._d=!1),ye();const o=r&&z_(r(n)),a=xo(tt,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function z_(t){return t.some(e=>Ja(e)?!(e.type===vi||e.type===tt&&!z_(e.children)):!0)?t:null}const Du=t=>t?ny(t)?Xc(t)||t.proxy:Du(t.parent):null,Fr=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Du(t.parent),$root:t=>Du(t.root),$emit:t=>t.emit,$options:t=>td(t),$forceUpdate:t=>t.f||(t.f=()=>ed(t.update)),$nextTick:t=>t.n||(t.n=Zh.bind(t.proxy)),$watch:t=>a0.bind(t)}),$l=(t,e)=>t!==Pe&&!t.__isScriptSetup&&de(t,e),E0={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if($l(i,e))return o[e]=1,i[e];if(s!==Pe&&de(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&de(l,e))return o[e]=3,r[e];if(n!==Pe&&de(n,e))return o[e]=4,n[e];Ou&&(o[e]=0)}}const u=Fr[e];let h,d;if(u)return e==="$attrs"&&St(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Pe&&de(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,de(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return $l(s,e)?(s[e]=n,!0):i!==Pe&&de(i,e)?(i[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==Pe&&de(t,o)||$l(e,o)||(a=r[0])&&de(a,o)||de(i,o)||de(Fr,o)||de(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function cp(t){return z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ou=!0;function T0(t){const e=td(t),n=t.proxy,i=t.ctx;Ou=!1,e.beforeCreate&&lp(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:y,deactivated:v,beforeDestroy:I,beforeUnmount:P,destroyed:k,unmounted:b,render:K,renderTracked:ie,renderTriggered:he,errorCaptured:G,serverPrefetch:ne,expose:Ie,inheritAttrs:ct,components:Pt,directives:Vt,filters:Ci}=e;if(l&&I0(l,i,null),o)for(const be in o){const ge=o[be];Z(ge)&&(i[be]=ge.bind(n))}if(s){const be=s.call(n,n);Ae(be)&&(t.data=Oo(be))}if(Ou=!0,r)for(const be in r){const ge=r[be],On=Z(ge)?ge.bind(n,n):Z(ge.get)?ge.get.bind(n,n):Zt,Jn=!Z(ge)&&Z(ge.set)?ge.set.bind(n):Zt,an=Ut({get:On,set:Jn});Object.defineProperty(i,be,{enumerable:!0,configurable:!0,get:()=>an.value,set:Rt=>an.value=Rt})}if(a)for(const be in a)W_(a[be],i,n,be);if(c){const be=Z(c)?c.call(n):c;Reflect.ownKeys(be).forEach(ge=>{Oa(ge,be[ge])})}u&&lp(u,t,"c");function pe(be,ge){z(ge)?ge.forEach(On=>be(On.bind(n))):ge&&be(ge.bind(n))}if(pe(h0,h),pe(d0,d),pe(f0,f),pe(p0,g),pe(c0,y),pe(l0,v),pe(y0,G),pe(_0,ie),pe(g0,he),pe(m0,P),pe(j_,b),pe($_,ne),z(Ie))if(Ie.length){const be=t.exposed||(t.exposed={});Ie.forEach(ge=>{Object.defineProperty(be,ge,{get:()=>n[ge],set:On=>n[ge]=On})})}else t.exposed||(t.exposed={});K&&t.render===Zt&&(t.render=K),ct!=null&&(t.inheritAttrs=ct),Pt&&(t.components=Pt),Vt&&(t.directives=Vt)}function I0(t,e,n=Zt){z(t)&&(t=xu(t));for(const i in t){const s=t[i];let r;Ae(s)?"default"in s?r=zt(s.from||i,s.default,!0):r=zt(s.from||i):r=zt(s),Le(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function lp(t,e,n){en(z(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function W_(t,e,n,i){const s=i.includes(".")?V_(n,i):()=>n[i];if(He(t)){const r=e[t];Z(r)&&bs(s,r)}else if(Z(t))bs(s,t.bind(n));else if(Ae(t))if(z(t))t.forEach(r=>W_(r,e,n,i));else{const r=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(r)&&bs(s,r,t)}}function td(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!n&&!i?c=e:(c={},s.length&&s.forEach(l=>Xa(c,l,o,!0)),Xa(c,e,o)),Ae(e)&&r.set(e,c),c}function Xa(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Xa(t,r,n,!0),s&&s.forEach(o=>Xa(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=w0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const w0={data:up,props:hp,emits:hp,methods:Pr,computed:Pr,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:Pr,directives:Pr,watch:b0,provide:up,inject:R0};function up(t,e){return e?t?function(){return at(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function R0(t,e){return Pr(xu(t),xu(e))}function xu(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function It(t,e){return t?[...new Set([].concat(t,e))]:e}function Pr(t,e){return t?at(Object.create(null),t,e):e}function hp(t,e){return t?z(t)&&z(e)?[...new Set([...t,...e])]:at(Object.create(null),cp(t),cp(e??{})):e}function b0(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const i in e)n[i]=It(t[i],e[i]);return n}function H_(){return{app:null,config:{isNativeTag:nw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let A0=0;function C0(t,e){return function(i,s=null){Z(i)||(i=at({},i)),s!=null&&!Ae(s)&&(s=null);const r=H_(),o=new WeakSet;let a=!1;const c=r.app={_uid:A0++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:eR,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&Z(l.install)?(o.add(l),l.install(c,...u)):Z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const d=qe(i,s);return d.appContext=r,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Xc(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c},runWithContext(l){io=c;try{return l()}finally{io=null}}};return c}}let io=null;function Oa(t,e){if(ze){let n=ze.provides;const i=ze.parent&&ze.parent.provides;i===n&&(n=ze.provides=Object.create(i)),n[t]=e}}function zt(t,e,n=!1){const i=ze||Ye;if(i||io){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:io._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Z(e)?e.call(i&&i.proxy):e}}function S0(){return!!(ze||Ye||io)}function P0(t,e,n,i=!1){const s={},r={};Ha(r,Yc,1),t.propsDefaults=Object.create(null),K_(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:T_(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function k0(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=fe(s),[c]=t.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Hc(t.emitsOptions,d))continue;const f=e[d];if(c)if(de(r,d))f!==r[d]&&(r[d]=f,l=!0);else{const g=Rn(d);s[g]=Mu(c,a,g,f,t,!1)}else f!==r[d]&&(r[d]=f,l=!0)}}}else{K_(t,e,s,r)&&(l=!0);let u;for(const h in a)(!e||!de(e,h)&&((u=tr(h))===h||!de(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Mu(c,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!de(e,h))&&(delete r[h],l=!0)}l&&jn(t,"set","$attrs")}function K_(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ka(c))continue;const l=e[c];let u;s&&de(s,u=Rn(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:Hc(t.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=fe(n),l=a||Pe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Mu(s,c,h,l[h],t,!de(l,h))}}return o}function Mu(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Z(c)){const{propsDefaults:l}=s;n in l?i=l[n]:(Fs(s),i=l[n]=c.call(null,e),ji())}else i=c}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===tr(n))&&(i=!0))}return i}function G_(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let c=!1;if(!Z(t)){const u=h=>{c=!0;const[d,f]=G_(h,e,!0);at(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return Ae(t)&&i.set(t,Is),Is;if(z(r))for(let u=0;u<r.length;u++){const h=Rn(r[u]);dp(h)&&(o[h]=Pe)}else if(r)for(const u in r){const h=Rn(u);if(dp(h)){const d=r[u],f=o[h]=z(d)||Z(d)?{type:d}:at({},d);if(f){const g=mp(Boolean,f.type),y=mp(String,f.type);f[0]=g>-1,f[1]=y<0||g<y,(g>-1||de(f,"default"))&&a.push(h)}}}const l=[o,a];return Ae(t)&&i.set(t,l),l}function dp(t){return t[0]!=="$"}function fp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function pp(t,e){return fp(t)===fp(e)}function mp(t,e){return z(e)?e.findIndex(n=>pp(n,t)):Z(e)&&pp(e,t)?0:-1}const Q_=t=>t[0]==="_"||t==="$stable",nd=t=>z(t)?t.map(un):[un(t)],N0=(t,e,n)=>{if(e._n)return e;const i=Da((...s)=>nd(e(...s)),n);return i._c=!1,i},Y_=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Q_(s))continue;const r=t[s];if(Z(r))e[s]=N0(s,r,i);else if(r!=null){const o=nd(r);e[s]=()=>o}}},X_=(t,e)=>{const n=nd(e);t.slots.default=()=>n},D0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),Ha(e,"_",n)):Y_(e,t.slots={})}else t.slots={},e&&X_(t,e);Ha(t.slots,Yc,1)},O0=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Pe;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(at(s,e),!n&&a===1&&delete s._):(r=!e.$stable,Y_(e,s)),o=e}else e&&(X_(t,e),o={default:1});if(r)for(const a in s)!Q_(a)&&o[a]==null&&delete s[a]};function Lu(t,e,n,i,s=!1){if(z(t)){t.forEach((d,f)=>Lu(d,e&&(z(e)?e[f]:e),n,i,s));return}if(Vr(i)&&!s)return;const r=i.shapeFlag&4?Xc(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Pe?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(He(l)?(u[l]=null,de(h,l)&&(h[l]=null)):Le(l)&&(l.value=null)),Z(c))di(c,a,12,[o,u]);else{const d=He(c),f=Le(c);if(d||f){const g=()=>{if(t.f){const y=d?de(h,c)?h[c]:u[c]:c.value;s?z(y)&&jh(y,r):z(y)?y.includes(r)||y.push(r):d?(u[c]=[r],de(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,de(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,bt(g,n)):g()}}}const bt=o0;function x0(t){return M0(t)}function M0(t,e){const n=Cu();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Zt,insertStaticContent:g}=t,y=(p,m,_,E=null,w=null,A=null,L=!1,N=null,D=!!m.dynamicChildren)=>{if(p===m)return;p&&!yr(p,m)&&(E=T(p),Rt(p,w,A,!0),p=null),m.patchFlag===-2&&(D=!1,m.dynamicChildren=null);const{type:S,ref:j,shapeFlag:q}=m;switch(S){case Qc:v(p,m,_,E);break;case vi:I(p,m,_,E);break;case zl:p==null&&P(m,_,E,L);break;case tt:Pt(p,m,_,E,w,A,L,N,D);break;default:q&1?K(p,m,_,E,w,A,L,N,D):q&6?Vt(p,m,_,E,w,A,L,N,D):(q&64||q&128)&&S.process(p,m,_,E,w,A,L,N,D,O)}j!=null&&w&&Lu(j,p&&p.ref,A,m||p,!m)},v=(p,m,_,E)=>{if(p==null)i(m.el=a(m.children),_,E);else{const w=m.el=p.el;m.children!==p.children&&l(w,m.children)}},I=(p,m,_,E)=>{p==null?i(m.el=c(m.children||""),_,E):m.el=p.el},P=(p,m,_,E)=>{[p.el,p.anchor]=g(p.children,m,_,E,p.el,p.anchor)},k=({el:p,anchor:m},_,E)=>{let w;for(;p&&p!==m;)w=d(p),i(p,_,E),p=w;i(m,_,E)},b=({el:p,anchor:m})=>{let _;for(;p&&p!==m;)_=d(p),s(p),p=_;s(m)},K=(p,m,_,E,w,A,L,N,D)=>{L=L||m.type==="svg",p==null?ie(m,_,E,w,A,L,N,D):ne(p,m,w,A,L,N,D)},ie=(p,m,_,E,w,A,L,N)=>{let D,S;const{type:j,props:q,shapeFlag:$,transition:ee,dirs:se}=p;if(D=p.el=o(p.type,A,q&&q.is,q),$&8?u(D,p.children):$&16&&G(p.children,D,null,E,w,A&&j!=="foreignObject",L,N),se&&Si(p,null,E,"created"),he(D,p,p.scopeId,L,E),q){for(const we in q)we!=="value"&&!ka(we)&&r(D,we,null,q[we],A,p.children,E,w,lt);"value"in q&&r(D,"value",null,q.value),(S=q.onVnodeBeforeMount)&&ln(S,E,p)}se&&Si(p,null,E,"beforeMount");const Ce=L0(w,ee);Ce&&ee.beforeEnter(D),i(D,m,_),((S=q&&q.onVnodeMounted)||Ce||se)&&bt(()=>{S&&ln(S,E,p),Ce&&ee.enter(D),se&&Si(p,null,E,"mounted")},w)},he=(p,m,_,E,w)=>{if(_&&f(p,_),E)for(let A=0;A<E.length;A++)f(p,E[A]);if(w){let A=w.subTree;if(m===A){const L=w.vnode;he(p,L,L.scopeId,L.slotScopeIds,w.parent)}}},G=(p,m,_,E,w,A,L,N,D=0)=>{for(let S=D;S<p.length;S++){const j=p[S]=N?ii(p[S]):un(p[S]);y(null,j,m,_,E,w,A,L,N)}},ne=(p,m,_,E,w,A,L)=>{const N=m.el=p.el;let{patchFlag:D,dynamicChildren:S,dirs:j}=m;D|=p.patchFlag&16;const q=p.props||Pe,$=m.props||Pe;let ee;_&&Pi(_,!1),(ee=$.onVnodeBeforeUpdate)&&ln(ee,_,m,p),j&&Si(m,p,_,"beforeUpdate"),_&&Pi(_,!0);const se=w&&m.type!=="foreignObject";if(S?Ie(p.dynamicChildren,S,N,_,E,se,A):L||ge(p,m,N,null,_,E,se,A,!1),D>0){if(D&16)ct(N,m,q,$,_,E,w);else if(D&2&&q.class!==$.class&&r(N,"class",null,$.class,w),D&4&&r(N,"style",q.style,$.style,w),D&8){const Ce=m.dynamicProps;for(let we=0;we<Ce.length;we++){const Ue=Ce[we],Ht=q[Ue],us=$[Ue];(us!==Ht||Ue==="value")&&r(N,Ue,Ht,us,w,p.children,_,E,lt)}}D&1&&p.children!==m.children&&u(N,m.children)}else!L&&S==null&&ct(N,m,q,$,_,E,w);((ee=$.onVnodeUpdated)||j)&&bt(()=>{ee&&ln(ee,_,m,p),j&&Si(m,p,_,"updated")},E)},Ie=(p,m,_,E,w,A,L)=>{for(let N=0;N<m.length;N++){const D=p[N],S=m[N],j=D.el&&(D.type===tt||!yr(D,S)||D.shapeFlag&70)?h(D.el):_;y(D,S,j,null,E,w,A,L,!0)}},ct=(p,m,_,E,w,A,L)=>{if(_!==E){if(_!==Pe)for(const N in _)!ka(N)&&!(N in E)&&r(p,N,_[N],null,L,m.children,w,A,lt);for(const N in E){if(ka(N))continue;const D=E[N],S=_[N];D!==S&&N!=="value"&&r(p,N,S,D,L,m.children,w,A,lt)}"value"in E&&r(p,"value",_.value,E.value)}},Pt=(p,m,_,E,w,A,L,N,D)=>{const S=m.el=p?p.el:a(""),j=m.anchor=p?p.anchor:a("");let{patchFlag:q,dynamicChildren:$,slotScopeIds:ee}=m;ee&&(N=N?N.concat(ee):ee),p==null?(i(S,_,E),i(j,_,E),G(m.children,_,j,w,A,L,N,D)):q>0&&q&64&&$&&p.dynamicChildren?(Ie(p.dynamicChildren,$,_,w,A,L,N),(m.key!=null||w&&m===w.subTree)&&J_(p,m,!0)):ge(p,m,_,j,w,A,L,N,D)},Vt=(p,m,_,E,w,A,L,N,D)=>{m.slotScopeIds=N,p==null?m.shapeFlag&512?w.ctx.activate(m,_,E,L,D):Ci(m,_,E,w,A,L,D):Ft(p,m,D)},Ci=(p,m,_,E,w,A,L)=>{const N=p.component=W0(p,E,w);if(U_(p)&&(N.ctx.renderer=O),H0(N),N.asyncDep){if(w&&w.registerDep(N,pe),!p.el){const D=N.subTree=qe(vi);I(null,D,m,_)}return}pe(N,p,m,_,w,A,L)},Ft=(p,m,_)=>{const E=m.component=p.component;if(t0(p,m,_))if(E.asyncDep&&!E.asyncResolved){be(E,m,_);return}else E.next=m,Kw(E.update),E.update();else m.el=p.el,E.vnode=m},pe=(p,m,_,E,w,A,L)=>{const N=()=>{if(p.isMounted){let{next:j,bu:q,u:$,parent:ee,vnode:se}=p,Ce=j,we;Pi(p,!1),j?(j.el=se.el,be(p,j,L)):j=se,q&&Na(q),(we=j.props&&j.props.onVnodeBeforeUpdate)&&ln(we,ee,j,se),Pi(p,!0);const Ue=jl(p),Ht=p.subTree;p.subTree=Ue,y(Ht,Ue,h(Ht.el),T(Ht),p,w,A),j.el=Ue.el,Ce===null&&n0(p,Ue.el),$&&bt($,w),(we=j.props&&j.props.onVnodeUpdated)&&bt(()=>ln(we,ee,j,se),w)}else{let j;const{el:q,props:$}=m,{bm:ee,m:se,parent:Ce}=p,we=Vr(m);if(Pi(p,!1),ee&&Na(ee),!we&&(j=$&&$.onVnodeBeforeMount)&&ln(j,Ce,m),Pi(p,!0),q&&_e){const Ue=()=>{p.subTree=jl(p),_e(q,p.subTree,p,w,null)};we?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Ue()):Ue()}else{const Ue=p.subTree=jl(p);y(null,Ue,_,E,p,w,A),m.el=Ue.el}if(se&&bt(se,w),!we&&(j=$&&$.onVnodeMounted)){const Ue=m;bt(()=>ln(j,Ce,Ue),w)}(m.shapeFlag&256||Ce&&Vr(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&p.a&&bt(p.a,w),p.isMounted=!0,m=_=E=null}},D=p.effect=new Kh(N,()=>ed(S),p.scope),S=p.update=()=>D.run();S.id=p.uid,Pi(p,!0),S()},be=(p,m,_)=>{m.component=p;const E=p.vnode.props;p.vnode=m,p.next=null,k0(p,m.props,E,_),O0(p,m.children,_),nr(),rp(),ir()},ge=(p,m,_,E,w,A,L,N,D=!1)=>{const S=p&&p.children,j=p?p.shapeFlag:0,q=m.children,{patchFlag:$,shapeFlag:ee}=m;if($>0){if($&128){Jn(S,q,_,E,w,A,L,N,D);return}else if($&256){On(S,q,_,E,w,A,L,N,D);return}}ee&8?(j&16&&lt(S,w,A),q!==S&&u(_,q)):j&16?ee&16?Jn(S,q,_,E,w,A,L,N,D):lt(S,w,A,!0):(j&8&&u(_,""),ee&16&&G(q,_,E,w,A,L,N,D))},On=(p,m,_,E,w,A,L,N,D)=>{p=p||Is,m=m||Is;const S=p.length,j=m.length,q=Math.min(S,j);let $;for($=0;$<q;$++){const ee=m[$]=D?ii(m[$]):un(m[$]);y(p[$],ee,_,null,w,A,L,N,D)}S>j?lt(p,w,A,!0,!1,q):G(m,_,E,w,A,L,N,D,q)},Jn=(p,m,_,E,w,A,L,N,D)=>{let S=0;const j=m.length;let q=p.length-1,$=j-1;for(;S<=q&&S<=$;){const ee=p[S],se=m[S]=D?ii(m[S]):un(m[S]);if(yr(ee,se))y(ee,se,_,null,w,A,L,N,D);else break;S++}for(;S<=q&&S<=$;){const ee=p[q],se=m[$]=D?ii(m[$]):un(m[$]);if(yr(ee,se))y(ee,se,_,null,w,A,L,N,D);else break;q--,$--}if(S>q){if(S<=$){const ee=$+1,se=ee<j?m[ee].el:E;for(;S<=$;)y(null,m[S]=D?ii(m[S]):un(m[S]),_,se,w,A,L,N,D),S++}}else if(S>$)for(;S<=q;)Rt(p[S],w,A,!0),S++;else{const ee=S,se=S,Ce=new Map;for(S=se;S<=$;S++){const kt=m[S]=D?ii(m[S]):un(m[S]);kt.key!=null&&Ce.set(kt.key,S)}let we,Ue=0;const Ht=$-se+1;let us=!1,Kf=0;const _r=new Array(Ht);for(S=0;S<Ht;S++)_r[S]=0;for(S=ee;S<=q;S++){const kt=p[S];if(Ue>=Ht){Rt(kt,w,A,!0);continue}let cn;if(kt.key!=null)cn=Ce.get(kt.key);else for(we=se;we<=$;we++)if(_r[we-se]===0&&yr(kt,m[we])){cn=we;break}cn===void 0?Rt(kt,w,A,!0):(_r[cn-se]=S+1,cn>=Kf?Kf=cn:us=!0,y(kt,m[cn],_,null,w,A,L,N,D),Ue++)}const Gf=us?V0(_r):Is;for(we=Gf.length-1,S=Ht-1;S>=0;S--){const kt=se+S,cn=m[kt],Qf=kt+1<j?m[kt+1].el:E;_r[S]===0?y(null,cn,_,Qf,w,A,L,N,D):us&&(we<0||S!==Gf[we]?an(cn,_,Qf,2):we--)}}},an=(p,m,_,E,w=null)=>{const{el:A,type:L,transition:N,children:D,shapeFlag:S}=p;if(S&6){an(p.component.subTree,m,_,E);return}if(S&128){p.suspense.move(m,_,E);return}if(S&64){L.move(p,m,_,O);return}if(L===tt){i(A,m,_);for(let q=0;q<D.length;q++)an(D[q],m,_,E);i(p.anchor,m,_);return}if(L===zl){k(p,m,_);return}if(E!==2&&S&1&&N)if(E===0)N.beforeEnter(A),i(A,m,_),bt(()=>N.enter(A),w);else{const{leave:q,delayLeave:$,afterLeave:ee}=N,se=()=>i(A,m,_),Ce=()=>{q(A,()=>{se(),ee&&ee()})};$?$(A,se,Ce):Ce()}else i(A,m,_)},Rt=(p,m,_,E=!1,w=!1)=>{const{type:A,props:L,ref:N,children:D,dynamicChildren:S,shapeFlag:j,patchFlag:q,dirs:$}=p;if(N!=null&&Lu(N,null,_,p,!0),j&256){m.ctx.deactivate(p);return}const ee=j&1&&$,se=!Vr(p);let Ce;if(se&&(Ce=L&&L.onVnodeBeforeUnmount)&&ln(Ce,m,p),j&6)oa(p.component,_,E);else{if(j&128){p.suspense.unmount(_,E);return}ee&&Si(p,null,m,"beforeUnmount"),j&64?p.type.remove(p,m,_,w,O,E):S&&(A!==tt||q>0&&q&64)?lt(S,m,_,!1,!0):(A===tt&&q&384||!w&&j&16)&&lt(D,m,_),E&&cs(p)}(se&&(Ce=L&&L.onVnodeUnmounted)||ee)&&bt(()=>{Ce&&ln(Ce,m,p),ee&&Si(p,null,m,"unmounted")},_)},cs=p=>{const{type:m,el:_,anchor:E,transition:w}=p;if(m===tt){ls(_,E);return}if(m===zl){b(p);return}const A=()=>{s(_),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(p.shapeFlag&1&&w&&!w.persisted){const{leave:L,delayLeave:N}=w,D=()=>L(_,A);N?N(p.el,A,D):D()}else A()},ls=(p,m)=>{let _;for(;p!==m;)_=d(p),s(p),p=_;s(m)},oa=(p,m,_)=>{const{bum:E,scope:w,update:A,subTree:L,um:N}=p;E&&Na(E),w.stop(),A&&(A.active=!1,Rt(L,p,m,_)),N&&bt(N,m),bt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},lt=(p,m,_,E=!1,w=!1,A=0)=>{for(let L=A;L<p.length;L++)Rt(p[L],m,_,E,w)},T=p=>p.shapeFlag&6?T(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),V=(p,m,_)=>{p==null?m._vnode&&Rt(m._vnode,null,null,!0):y(m._vnode||null,p,m,null,null,null,_),rp(),D_(),m._vnode=p},O={p:y,um:Rt,m:an,r:cs,mt:Ci,mc:G,pc:ge,pbc:Ie,n:T,o:t};let U,_e;return e&&([U,_e]=e(O)),{render:V,hydrate:U,createApp:C0(V,U)}}function Pi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function L0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function J_(t,e,n=!1){const i=t.children,s=e.children;if(z(i)&&z(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ii(s[r]),a.el=o.el),n||J_(o,a)),a.type===Qc&&(a.el=o.el)}}function V0(t){const e=t.slice(),n=[0];let i,s,r,o,a;const c=t.length;for(i=0;i<c;i++){const l=t[i];if(l!==0){if(s=n[n.length-1],t[s]<l){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const F0=t=>t.__isTeleport,tt=Symbol.for("v-fgt"),Qc=Symbol.for("v-txt"),vi=Symbol.for("v-cmt"),zl=Symbol.for("v-stc"),qr=[];let Qt=null;function ye(t=!1){qr.push(Qt=t?null:[])}function q0(){qr.pop(),Qt=qr[qr.length-1]||null}let so=1;function gp(t){so+=t}function Z_(t){return t.dynamicChildren=so>0?Qt||Is:null,q0(),so>0&&Qt&&Qt.push(t),t}function ke(t,e,n,i,s,r){return Z_(W(t,e,n,i,s,r,!0))}function xo(t,e,n,i,s){return Z_(qe(t,e,n,i,s,!0))}function Ja(t){return t?t.__v_isVNode===!0:!1}function yr(t,e){return t.type===e.type&&t.key===e.key}const Yc="__vInternal",ey=({key:t})=>t??null,xa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||Le(t)||Z(t)?{i:Ye,r:t,k:e,f:!!n}:t:null);function W(t,e=null,n=null,i=0,s=null,r=t===tt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ey(e),ref:e&&xa(e),scopeId:Kc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ye};return a?(id(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),so>0&&!o&&Qt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Qt.push(c),c}const qe=U0;function U0(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===i0)&&(t=vi),Ja(t)){const a=Vs(t,e,!0);return n&&id(a,n),so>0&&!r&&Qt&&(a.shapeFlag&6?Qt[Qt.indexOf(t)]=a:Qt.push(a)),a.patchFlag|=-2,a}if(X0(t)&&(t=t.__vccOpts),e){e=B0(e);let{class:a,style:c}=e;a&&!He(a)&&(e.class=No(a)),Ae(c)&&(w_(c)&&!z(c)&&(c=at({},c)),e.style=Zr(c))}const o=He(t)?1:r0(t)?128:F0(t)?64:Ae(t)?4:Z(t)?2:0;return W(t,e,n,i,s,o,r,!0)}function B0(t){return t?w_(t)||Yc in t?at({},t):t:null}function Vs(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?j0(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ey(a),ref:e&&e.ref?n&&s?z(s)?s.concat(xa(e)):[s,xa(e)]:xa(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Vs(t.ssContent),ssFallback:t.ssFallback&&Vs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function As(t=" ",e=0){return qe(Qc,null,t,e)}function dn(t="",e=!1){return e?(ye(),xo(vi,null,t)):qe(vi,null,t)}function un(t){return t==null||typeof t=="boolean"?qe(vi):z(t)?qe(tt,null,t.slice()):typeof t=="object"?ii(t):qe(Qc,null,String(t))}function ii(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Vs(t)}function id(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),id(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Yc in e)?e._ctx=Ye:s===3&&Ye&&(Ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:Ye},n=32):(e=String(e),i&64?(n=16,e=[As(e)]):n=8);t.children=e,t.shapeFlag|=n}function j0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=No([e.class,i.class]));else if(s==="style")e.style=Zr([e.style,i.style]);else if(qc(s)){const r=e[s],o=i[s];o&&r!==o&&!(z(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function ln(t,e,n,i=null){en(t,e,7,[n,i])}const $0=H_();let z0=0;function W0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||$0,r={uid:z0++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new l_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:G_(i,s),emitsOptions:x_(i,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:i.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Yw.bind(null,r),t.ce&&t.ce(r),r}let ze=null;const ty=()=>ze||Ye;let sd,hs,_p="__VUE_INSTANCE_SETTERS__";(hs=Cu()[_p])||(hs=Cu()[_p]=[]),hs.push(t=>ze=t),sd=t=>{hs.length>1?hs.forEach(e=>e(t)):hs[0](t)};const Fs=t=>{sd(t),t.scope.on()},ji=()=>{ze&&ze.scope.off(),sd(null)};function ny(t){return t.vnode.shapeFlag&4}let ro=!1;function H0(t,e=!1){ro=e;const{props:n,children:i}=t.vnode,s=ny(t);P0(t,n,s,e),D0(t,i);const r=s?K0(t,e):void 0;return ro=!1,r}function K0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=zc(new Proxy(t.ctx,E0));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?Q0(t):null;Fs(t),nr();const r=di(i,t,0,[t.props,s]);if(ir(),ji(),i_(r)){if(r.then(ji,ji),e)return r.then(o=>{yp(t,o,e)}).catch(o=>{Wc(o,t,0)});t.asyncDep=r}else yp(t,r,e)}else iy(t,e)}function yp(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=S_(e)),iy(t,n)}let vp;function iy(t,e,n){const i=t.type;if(!t.render){if(!e&&vp&&!i.render){const s=i.template||td(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=i,l=at(at({isCustomElement:r,delimiters:a},o),c);i.render=vp(s,l)}}t.render=i.render||Zt}{Fs(t),nr();try{T0(t)}finally{ir(),ji()}}}function G0(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return St(t,"get","$attrs"),e[n]}}))}function Q0(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return G0(t)},slots:t.slots,emit:t.emit,expose:e}}function Xc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(S_(zc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fr)return Fr[n](t)},has(e,n){return n in e||n in Fr}}))}function Y0(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function X0(t){return Z(t)&&"__vccOpts"in t}const Ut=(t,e)=>zw(t,e,ro);function sy(t,e,n){const i=arguments.length;return i===2?Ae(e)&&!z(e)?Ja(e)?qe(t,null,[e]):qe(t,e):qe(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ja(n)&&(n=[n]),qe(t,e,n))}const J0=Symbol.for("v-scx"),Z0=()=>zt(J0),eR="3.3.8",tR="http://www.w3.org/2000/svg",Oi=typeof document<"u"?document:null,Ep=Oi&&Oi.createElement("template"),nR={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?Oi.createElementNS(tR,t):Oi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Oi.createTextNode(t),createComment:t=>Oi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Oi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Ep.innerHTML=i?`<svg>${t}</svg>`:t;const a=Ep.content;if(i){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},iR=Symbol("_vtc");function sR(t,e,n){const i=t[iR];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const rR=Symbol("_vod");function oR(t,e,n){const i=t.style,s=He(n);if(n&&!s){if(e&&!He(e))for(const r in e)n[r]==null&&Vu(i,r,"");for(const r in n)Vu(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),rR in t&&(i.display=r)}}const Tp=/\s*!important$/;function Vu(t,e,n){if(z(n))n.forEach(i=>Vu(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=aR(t,e);Tp.test(n)?t.setProperty(tr(i),n.replace(Tp,""),"important"):t[i]=n}}const Ip=["Webkit","Moz","ms"],Wl={};function aR(t,e){const n=Wl[e];if(n)return n;let i=Rn(e);if(i!=="filter"&&i in t)return Wl[e]=i;i=Bc(i);for(let s=0;s<Ip.length;s++){const r=Ip[s]+i;if(r in t)return Wl[e]=r}return e}const wp="http://www.w3.org/1999/xlink";function cR(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(wp,e.slice(6,e.length)):t.setAttributeNS(wp,e,n);else{const r=fw(e);n==null||r&&!a_(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function lR(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=a_(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function rd(t,e,n,i){t.addEventListener(e,n,i)}function uR(t,e,n,i){t.removeEventListener(e,n,i)}const Rp=Symbol("_vei");function hR(t,e,n,i,s=null){const r=t[Rp]||(t[Rp]={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=dR(e);if(i){const l=r[e]=mR(i,s);rd(t,a,l,c)}else o&&(uR(t,a,o,c),r[e]=void 0)}}const bp=/(?:Once|Passive|Capture)$/;function dR(t){let e;if(bp.test(t)){e={};let i;for(;i=t.match(bp);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):tr(t.slice(2)),e]}let Hl=0;const fR=Promise.resolve(),pR=()=>Hl||(fR.then(()=>Hl=0),Hl=Date.now());function mR(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;en(gR(i,n.value),e,5,[i])};return n.value=t,n.attached=pR(),n}function gR(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Ap=/^on[a-z]/,_R=(t,e,n,i,s=!1,r,o,a,c)=>{e==="class"?sR(t,i,s):e==="style"?oR(t,n,i):qc(e)?Bh(e)||hR(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yR(t,e,i,s))?lR(t,e,i,r,o,a,c):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),cR(t,e,i,s))};function yR(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Ap.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ap.test(e)&&He(n)?!1:e in t}const Za=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>Na(e,n):e},Cs=Symbol("_assign"),vR={deep:!0,created(t,e,n){t[Cs]=Za(n),rd(t,"change",()=>{const i=t._modelValue,s=oo(t),r=t.checked,o=t[Cs];if(z(i)){const a=zh(i,s),c=a!==-1;if(r&&!c)o(i.concat(s));else if(!r&&c){const l=[...i];l.splice(a,1),o(l)}}else if(er(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(ry(t,r))})},mounted:Cp,beforeUpdate(t,e,n){t[Cs]=Za(n),Cp(t,e,n)}};function Cp(t,{value:e,oldValue:n},i){t._modelValue=e,z(e)?t.checked=zh(e,i.props.value)>-1:er(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=Do(e,ry(t,!0)))}const ER={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=er(e);rd(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?o_(oo(o)):oo(o));t[Cs](t.multiple?s?new Set(r):r:r[0])}),t[Cs]=Za(i)},mounted(t,{value:e}){Sp(t,e)},beforeUpdate(t,e,n){t[Cs]=Za(n)},updated(t,{value:e}){Sp(t,e)}};function Sp(t,e){const n=t.multiple;if(!(n&&!z(e)&&!er(e))){for(let i=0,s=t.options.length;i<s;i++){const r=t.options[i],o=oo(r);if(n)z(e)?r.selected=zh(e,o)>-1:r.selected=e.has(o);else if(Do(oo(r),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function oo(t){return"_value"in t?t._value:t.value}function ry(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const TR=at({patchProp:_R},nR);let Pp;function IR(){return Pp||(Pp=x0(TR))}const wR=(...t)=>{const e=IR().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=RR(i);if(!s)return;const r=e._component;!Z(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function RR(t){return He(t)?document.querySelector(t):t}var bR=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let oy;const Jc=t=>oy=t,ay=Symbol();function Fu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ur;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ur||(Ur={}));function AR(){const t=jc(!0),e=t.run(()=>hi({}));let n=[],i=[];const s=zc({install(r){Jc(s),s._a=r,r.provide(ay,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!bR?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const cy=()=>{};function kp(t,e,n,i=cy){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&Wh()&&u_(s),s}function ds(t,...e){t.slice().forEach(n=>{n(...e)})}const CR=t=>t();function qu(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];Fu(s)&&Fu(i)&&t.hasOwnProperty(n)&&!Le(i)&&!ui(i)?t[n]=qu(s,i):t[n]=i}return t}const SR=Symbol();function PR(t){return!Fu(t)||!t.hasOwnProperty(SR)}const{assign:ni}=Object;function kR(t){return!!(Le(t)&&t.effect)}function NR(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=qw(n.state.value[t]);return ni(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=zc(Ut(()=>{Jc(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return c=ly(t,l,e,n,i,!0),c}function ly(t,e,n={},i,s,r){let o;const a=ni({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],f;const g=i.state.value[t];!r&&!g&&(i.state.value[t]={}),hi({});let y;function v(G){let ne;l=u=!1,typeof G=="function"?(G(i.state.value[t]),ne={type:Ur.patchFunction,storeId:t,events:f}):(qu(i.state.value[t],G),ne={type:Ur.patchObject,payload:G,storeId:t,events:f});const Ie=y=Symbol();Zh().then(()=>{y===Ie&&(l=!0)}),u=!0,ds(h,ne,i.state.value[t])}const I=r?function(){const{state:ne}=n,Ie=ne?ne():{};this.$patch(ct=>{ni(ct,Ie)})}:cy;function P(){o.stop(),h=[],d=[],i._s.delete(t)}function k(G,ne){return function(){Jc(i);const Ie=Array.from(arguments),ct=[],Pt=[];function Vt(pe){ct.push(pe)}function Ci(pe){Pt.push(pe)}ds(d,{args:Ie,name:G,store:K,after:Vt,onError:Ci});let Ft;try{Ft=ne.apply(this&&this.$id===t?this:K,Ie)}catch(pe){throw ds(Pt,pe),pe}return Ft instanceof Promise?Ft.then(pe=>(ds(ct,pe),pe)).catch(pe=>(ds(Pt,pe),Promise.reject(pe))):(ds(ct,Ft),Ft)}}const b={_p:i,$id:t,$onAction:kp.bind(null,d),$patch:v,$reset:I,$subscribe(G,ne={}){const Ie=kp(h,G,ne.detached,()=>ct()),ct=o.run(()=>bs(()=>i.state.value[t],Pt=>{(ne.flush==="sync"?u:l)&&G({storeId:t,type:Ur.direct,events:f},Pt)},ni({},c,ne)));return Ie},$dispose:P},K=Oo(b);i._s.set(t,K);const he=(i._a&&i._a.runWithContext||CR)(()=>i._e.run(()=>(o=jc()).run(e)));for(const G in he){const ne=he[G];if(Le(ne)&&!kR(ne)||ui(ne))r||(g&&PR(ne)&&(Le(ne)?ne.value=g[G]:qu(ne,g[G])),i.state.value[t][G]=ne);else if(typeof ne=="function"){const Ie=k(G,ne);he[G]=Ie,a.actions[G]=ne}}return ni(K,he),ni(fe(K),he),Object.defineProperty(K,"$state",{get:()=>i.state.value[t],set:G=>{v(ne=>{ni(ne,G)})}}),i._p.forEach(G=>{ni(K,o.run(()=>G({store:K,app:i._a,pinia:i,options:a})))}),g&&r&&n.hydrate&&n.hydrate(K.$state,g),l=!0,u=!0,K}function uy(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,c){const l=S0();return a=a||(l?zt(ay,null):null),a&&Jc(a),a=oy,a._s.has(i)||(r?ly(i,e,s,a):NR(i,s,a)),a._s.get(i)}return o.$id=i,o}const kn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},DR={};function OR(t,e){const n=fi("router-view");return ye(),xo(n)}const xR=kn(DR,[["render",OR]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(t,e){if(!t)throw sr(e)},sr=function(t){return new Error("Firebase Database ("+hy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},MR=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Zc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),i.push(n[u],n[h],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):MR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||l==null||h==null)throw new LR;const d=r<<2|a>>4;if(i.push(d),l!==64){const f=a<<4&240|l>>2;if(i.push(f),h!==64){const g=l<<6&192|h;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fy=function(t){const e=dy(t);return Zc.encodeByteArray(e,!0)},ec=function(t){return fy(t).replace(/\./g,"")},tc=function(t){try{return Zc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(t){return py(void 0,t)}function py(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!FR(n)||(t[n]=py(t[n],e[n]));return t}function FR(t){return t!=="__proto__"}/**
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
 */function qR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const UR=()=>qR().__FIREBASE_DEFAULTS__,BR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tc(t[1]);return e&&JSON.parse(e)},od=()=>{try{return UR()||BR()||jR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},my=t=>{var e,n;return(n=(e=od())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$R=t=>{const e=my(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},gy=()=>{var t;return(t=od())===null||t===void 0?void 0:t.config},_y=t=>{var e;return(e=od())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function zR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ec(JSON.stringify(n)),ec(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ad(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function WR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HR(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vy(){return hy.NODE_ADMIN===!0}function Ey(){try{return typeof indexedDB=="object"}catch{return!1}}function KR(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR="FirebaseError";class Nn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=GR,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rr.prototype.create)}}class rr{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?QR(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Nn(s,a,i)}}function QR(t,e){return t.replace(YR,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const YR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t){return JSON.parse(t)}function it(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=co(tc(r[0])||""),n=co(tc(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},XR=function(t){const e=Ty(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},JR=function(t){const e=Ty(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function qs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Uu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function nc(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function ic(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Np(r)&&Np(o)){if(!ic(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Np(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+l+c+u+i[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function eb(t,e){const n=new tb(t,e);return n.subscribe.bind(n)}class tb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");nb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Kl),s.error===void 0&&(s.error=Kl),s.complete===void 0&&(s.complete=Kl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kl(){}function ib(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,x(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},el=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Mt(t){return t&&t._delegate?t._delegate:t}class nn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class rb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ao;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ab(e))try{this.getOrInitializeService({instanceIdentifier:ki})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ki){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ki){return this.instances.has(e)}getOptions(e=ki){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ob(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ki){return this.component?this.component.multipleInstances?e:ki:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ob(t){return t===ki?void 0:t}function ab(t){return t.instantiationMode==="EAGER"}/**
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
 */class cb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const lb={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},ub=re.INFO,hb={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},db=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=hb[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mo{constructor(e){this.name=e,this._logLevel=ub,this._logHandler=db,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const fb=(t,e)=>e.some(n=>t instanceof n);let Dp,Op;function pb(){return Dp||(Dp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mb(){return Op||(Op=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Iy=new WeakMap,Bu=new WeakMap,wy=new WeakMap,Gl=new WeakMap,cd=new WeakMap;function gb(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(pi(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Iy.set(n,t)}).catch(()=>{}),cd.set(e,t),e}function _b(t){if(Bu.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Bu.set(t,e)}let ju={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yb(t){ju=t(ju)}function vb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Ql(this),e,...n);return wy.set(i,e.sort?e.sort():[e]),pi(i)}:mb().includes(t)?function(...e){return t.apply(Ql(this),e),pi(Iy.get(this))}:function(...e){return pi(t.apply(Ql(this),e))}}function Eb(t){return typeof t=="function"?vb(t):(t instanceof IDBTransaction&&_b(t),fb(t,pb())?new Proxy(t,ju):t)}function pi(t){if(t instanceof IDBRequest)return gb(t);if(Gl.has(t))return Gl.get(t);const e=Eb(t);return e!==t&&(Gl.set(t,e),cd.set(e,t)),e}const Ql=t=>cd.get(t);function Tb(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=pi(o);return i&&o.addEventListener("upgradeneeded",c=>{i(pi(o.result),c.oldVersion,c.newVersion,pi(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Ib=["get","getKey","getAll","getAllKeys","count"],wb=["put","add","delete","clear"],Yl=new Map;function xp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yl.get(e))return Yl.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=wb.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Ib.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Yl.set(e,r),r}yb(t=>({...t,get:(e,n,i)=>xp(e,n)||t.get(e,n,i),has:(e,n)=>!!xp(e,n)||t.has(e,n)}));/**
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
 */class Rb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bb(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function bb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $u="@firebase/app",Mp="0.9.23";/**
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
 */const Ki=new Mo("@firebase/app"),Ab="@firebase/app-compat",Cb="@firebase/analytics-compat",Sb="@firebase/analytics",Pb="@firebase/app-check-compat",kb="@firebase/app-check",Nb="@firebase/auth",Db="@firebase/auth-compat",Ob="@firebase/database",xb="@firebase/database-compat",Mb="@firebase/functions",Lb="@firebase/functions-compat",Vb="@firebase/installations",Fb="@firebase/installations-compat",qb="@firebase/messaging",Ub="@firebase/messaging-compat",Bb="@firebase/performance",jb="@firebase/performance-compat",$b="@firebase/remote-config",zb="@firebase/remote-config-compat",Wb="@firebase/storage",Hb="@firebase/storage-compat",Kb="@firebase/firestore",Gb="@firebase/firestore-compat",Qb="firebase",Yb="10.6.0";/**
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
 */const zu="[DEFAULT]",Xb={[$u]:"fire-core",[Ab]:"fire-core-compat",[Sb]:"fire-analytics",[Cb]:"fire-analytics-compat",[kb]:"fire-app-check",[Pb]:"fire-app-check-compat",[Nb]:"fire-auth",[Db]:"fire-auth-compat",[Ob]:"fire-rtdb",[xb]:"fire-rtdb-compat",[Mb]:"fire-fn",[Lb]:"fire-fn-compat",[Vb]:"fire-iid",[Fb]:"fire-iid-compat",[qb]:"fire-fcm",[Ub]:"fire-fcm-compat",[Bb]:"fire-perf",[jb]:"fire-perf-compat",[$b]:"fire-rc",[zb]:"fire-rc-compat",[Wb]:"fire-gcs",[Hb]:"fire-gcs-compat",[Kb]:"fire-fst",[Gb]:"fire-fst-compat","fire-js":"fire-js",[Qb]:"fire-js-all"};/**
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
 */const sc=new Map,Wu=new Map;function Jb(t,e){try{t.container.addComponent(e)}catch(n){Ki.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bn(t){const e=t.name;if(Wu.has(e))return Ki.debug(`There were multiple attempts to register component ${e}.`),!1;Wu.set(e,t);for(const n of sc.values())Jb(n,t);return!0}function ld(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Zb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mi=new rr("app","Firebase",Zb);/**
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
 */class eA{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mi.create("app-deleted",{appName:this._name})}}/**
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
 */const Ri=Yb;function Ry(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:zu,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw mi.create("bad-app-name",{appName:String(s)});if(n||(n=gy()),!n)throw mi.create("no-options");const r=sc.get(s);if(r){if(ic(n,r.options)&&ic(i,r.config))return r;throw mi.create("duplicate-app",{appName:s})}const o=new cb(s);for(const c of Wu.values())o.addComponent(c);const a=new eA(n,i,o);return sc.set(s,a),a}function ud(t=zu){const e=sc.get(t);if(!e&&t===zu&&gy())return Ry();if(!e)throw mi.create("no-app",{appName:t});return e}function Ot(t,e,n){var i;let s=(i=Xb[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ki.warn(a.join(" "));return}bn(new nn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const tA="firebase-heartbeat-database",nA=1,lo="firebase-heartbeat-store";let Xl=null;function by(){return Xl||(Xl=Tb(tA,nA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(lo)}}}).catch(t=>{throw mi.create("idb-open",{originalErrorMessage:t.message})})),Xl}async function iA(t){try{return await(await by()).transaction(lo).objectStore(lo).get(Ay(t))}catch(e){if(e instanceof Nn)Ki.warn(e.message);else{const n=mi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ki.warn(n.message)}}}async function Lp(t,e){try{const i=(await by()).transaction(lo,"readwrite");await i.objectStore(lo).put(e,Ay(t)),await i.done}catch(n){if(n instanceof Nn)Ki.warn(n.message);else{const i=mi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ki.warn(i.message)}}}function Ay(t){return`${t.name}!${t.options.appId}`}/**
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
 */const sA=1024,rA=30*24*60*60*1e3;class oA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cA(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Vp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=rA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vp(),{heartbeatsToSend:i,unsentEntries:s}=aA(this._heartbeatsCache.heartbeats),r=ec(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Vp(){return new Date().toISOString().substring(0,10)}function aA(t,e=sA){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Fp(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Fp(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class cA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ey()?KR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await iA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Fp(t){return ec(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function lA(t){bn(new nn("platform-logger",e=>new Rb(e),"PRIVATE")),bn(new nn("heartbeat",e=>new oA(e),"PRIVATE")),Ot($u,Mp,t),Ot($u,Mp,"esm2017"),Ot("fire-js","")}lA("");function hd(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Cy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uA=Cy,Sy=new rr("auth","Firebase",Cy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=new Mo("@firebase/auth");function hA(t,...e){rc.logLevel<=re.WARN&&rc.warn(`Auth (${Ri}): ${t}`,...e)}function Ma(t,...e){rc.logLevel<=re.ERROR&&rc.error(`Auth (${Ri}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,...e){throw dd(t,...e)}function vn(t,...e){return dd(t,...e)}function Py(t,e,n){const i=Object.assign(Object.assign({},uA()),{[e]:n});return new rr("auth","Firebase",i).create(e,{appName:t.name})}function dA(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&An(t,"argument-error"),Py(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function dd(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Sy.create(t,...e)}function J(t,e,...n){if(!t)throw dd(e,...n)}function Fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ma(e),new Error(e)}function Hn(t,e){t||Fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fA(){return qp()==="http:"||qp()==="https:"}function qp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fA()||WR()||"connection"in navigator)?navigator.onLine:!0}function mA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=ad()||yy()}get(){return pA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=new Lo(3e4,6e4);function pd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ar(t,e,n,i,s={}){return Ny(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=or(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ky.fetch()(Dy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Ny(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},gA),e);try{const s=new vA(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw fa(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw fa(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw fa(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw fa(t,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Py(t,u,l);An(t,u)}}catch(s){if(s instanceof Nn)throw s;An(t,"network-request-failed",{message:String(s)})}}async function yA(t,e,n,i,s={}){const r=await ar(t,e,n,i,s);return"mfaPendingCredential"in r&&An(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Dy(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?fd(t.config,s):`${t.config.apiScheme}://${s}`}class vA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(vn(this.auth,"network-request-failed")),_A.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fa(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=vn(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA(t,e){return ar(t,"POST","/v1/accounts:delete",e)}async function TA(t,e){return ar(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function IA(t,e=!1){const n=Mt(t),i=await n.getIdToken(e),s=md(i);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Br(Jl(s.auth_time)),issuedAtTime:Br(Jl(s.iat)),expirationTime:Br(Jl(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Jl(t){return Number(t)*1e3}function md(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Ma("JWT malformed, contained fewer than 3 sections"),null;try{const s=tc(n);return s?JSON.parse(s):(Ma("Failed to decode base64 JWT payload"),null)}catch(s){return Ma("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function wA(t){const e=md(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Nn&&RA(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function RA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Br(this.lastLoginAt),this.creationTime=Br(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oc(t){var e;const n=t.auth,i=await t.getIdToken(),s=await uo(t,TA(n,{idToken:i}));J(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?SA(r.providerUserInfo):[],a=CA(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Oy(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function AA(t){const e=Mt(t);await oc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CA(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function SA(t){return t.map(e=>{var{providerId:n}=e,i=hd(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PA(t,e){const n=await Ny(t,{},async()=>{const i=or({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=Dy(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ky.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kA(t,e){return ar(t,"POST","/v2/accounts:revokeToken",pd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await PA(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new ho;return i&&(J(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(J(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ho,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $i{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=hd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Oy(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await uo(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return IA(this,e)}reload(){return AA(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $i(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await oc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await uo(this,EA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,c,l,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,I=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:b,isAnonymous:K,providerData:ie,stsTokenManager:he}=n;J(k&&he,e,"internal-error");const G=ho.fromJSON(this.name,he);J(typeof k=="string",e,"internal-error"),ei(h,e.name),ei(d,e.name),J(typeof b=="boolean",e,"internal-error"),J(typeof K=="boolean",e,"internal-error"),ei(f,e.name),ei(g,e.name),ei(y,e.name),ei(v,e.name),ei(I,e.name),ei(P,e.name);const ne=new $i({uid:k,auth:e,email:d,emailVerified:b,displayName:h,isAnonymous:K,photoURL:g,phoneNumber:f,tenantId:y,stsTokenManager:G,createdAt:I,lastLoginAt:P});return ie&&Array.isArray(ie)&&(ne.providerData=ie.map(Ie=>Object.assign({},Ie))),v&&(ne._redirectEventId=v),ne}static async _fromIdTokenResponse(e,n,i=!1){const s=new ho;s.updateFromServerResponse(n);const r=new $i({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await oc(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=new Map;function qn(t){Hn(t instanceof Function,"Expected a class definition");let e=Up.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Up.set(t,e),e)}/**
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
 */class xy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xy.type="NONE";const Bp=xy;/**
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
 */function La(t,e,n){return`firebase:${t}:${e}:${n}`}class Ss{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=La(this.userKey,s.apiKey,r),this.fullPersistenceKey=La("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$i._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Ss(qn(Bp),e,i);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||qn(Bp);const o=La(i,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=$i._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Ss(r,e,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Ss(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(My(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qy(e))return"Blackberry";if(Uy(e))return"Webos";if(gd(e))return"Safari";if((e.includes("chrome/")||Ly(e))&&!e.includes("edge/"))return"Chrome";if(Fy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function My(t=Et()){return/firefox\//i.test(t)}function gd(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ly(t=Et()){return/crios\//i.test(t)}function Vy(t=Et()){return/iemobile/i.test(t)}function Fy(t=Et()){return/android/i.test(t)}function qy(t=Et()){return/blackberry/i.test(t)}function Uy(t=Et()){return/webos/i.test(t)}function tl(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function NA(t=Et()){var e;return tl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DA(){return HR()&&document.documentMode===10}function By(t=Et()){return tl(t)||Fy(t)||Uy(t)||qy(t)||/windows phone/i.test(t)||Vy(t)}function OA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(t,e=[]){let n;switch(t){case"Browser":n=jp(Et());break;case"Worker":n=`${jp(Et())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ri}/${i}`}/**
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
 */class xA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function MA(t,e={}){return ar(t,"GET","/v2/passwordPolicy",pd(t,e))}/**
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
 */const LA=6;class VA{constructor(e){var n,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:LA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $p(this),this.idTokenSubscription=new $p(this),this.beforeStateQueue=new xA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qn(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Ss.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Mt(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MA(this),n=new VA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rr("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await kA(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Ss.create(this,[qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,i,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function nl(t){return Mt(t)}class $p{constructor(e){this.auth=e,this.observer=null,this.addObserver=eb(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function UA(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=vn("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",qA().appendChild(i)})}function BA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(t,e){const n=ld(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(ic(r,e??{}))return s;An(s,"already-initialized")}return n.initialize({options:e})}function $A(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function zA(t,e,n){const i=nl(t);J(i._canInitEmulator,i,"emulator-config-failed"),J(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=$y(e),{host:o,port:a}=WA(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||HA()}function $y(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function WA(t){const e=$y(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:zp(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:zp(o)}}}function zp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function HA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fn("not implemented")}_getIdTokenResponse(e){return Fn("not implemented")}_linkToIdToken(e,n){return Fn("not implemented")}_getReauthenticationResolver(e){return Fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(t,e){return yA(t,"POST","/v1/accounts:signInWithIdp",pd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA="http://localhost";class Gi extends zy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=hd(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Gi(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ps(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Ps(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ps(e,n)}buildRequest(){const e={requestUri:KA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=or(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vo extends _d{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Vo{constructor(){super("facebook.com")}static credential(e){return Gi._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.FACEBOOK_SIGN_IN_METHOD="facebook.com";ri.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Vo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gi._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Vn.credential(n,i)}catch{return null}}}Vn.GOOGLE_SIGN_IN_METHOD="google.com";Vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Vo{constructor(){super("github.com")}static credential(e){return Gi._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch{return null}}}oi.GITHUB_SIGN_IN_METHOD="github.com";oi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends Vo{constructor(){super("twitter.com")}static credential(e,n){return Gi._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ai.credential(n,i)}catch{return null}}}ai.TWITTER_SIGN_IN_METHOD="twitter.com";ai.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await $i._fromIdTokenResponse(e,i,s),o=Wp(i);return new Us({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Wp(i);return new Us({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Wp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac extends Nn{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,ac.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new ac(e,n,i,s)}}function Wy(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ac._fromErrorAndOperation(t,r,e,i):r})}async function GA(t,e,n=!1){const i=await uo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Us._forOperation(t,"link",i)}/**
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
 */async function QA(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await uo(t,Wy(i,s,e,t),n);J(r.idToken,i,"internal-error");const o=md(r.idToken);J(o,i,"internal-error");const{sub:a}=o;return J(t.uid===a,i,"user-mismatch"),Us._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&An(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(t,e,n=!1){const i="signIn",s=await Wy(t,i,e),r=await Us._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function XA(t,e,n,i){return Mt(t).onIdTokenChanged(e,n,i)}function JA(t,e,n){return Mt(t).beforeAuthStateChanged(e,n)}const cc="__sak";/**
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
 */class Hy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cc,"1"),this.storage.removeItem(cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(){const t=Et();return gd(t)||tl(t)}const eC=1e3,tC=10;class Ky extends Hy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ZA()&&OA(),this.fallbackToPolling=By(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);DA()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,tC):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},eC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ky.type="LOCAL";const nC=Ky;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy extends Hy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gy.type="SESSION";const Qy=Gy;/**
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
 */function iC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class il{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new il(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await iC(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}il.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class sC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=yd("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){return window}function rC(t){En().location.href=t}/**
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
 */function Yy(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function oC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function cC(){return Yy()?self:null}/**
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
 */const Xy="firebaseLocalStorageDb",lC=1,lc="firebaseLocalStorage",Jy="fbase_key";class Fo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sl(t,e){return t.transaction([lc],e?"readwrite":"readonly").objectStore(lc)}function uC(){const t=indexedDB.deleteDatabase(Xy);return new Fo(t).toPromise()}function Ku(){const t=indexedDB.open(Xy,lC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(lc,{keyPath:Jy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(lc)?e(i):(i.close(),await uC(),e(await Ku()))})})}async function Hp(t,e,n){const i=sl(t,!0).put({[Jy]:e,value:n});return new Fo(i).toPromise()}async function hC(t,e){const n=sl(t,!1).get(e),i=await new Fo(n).toPromise();return i===void 0?null:i.value}function Kp(t,e){const n=sl(t,!0).delete(e);return new Fo(n).toPromise()}const dC=800,fC=3;class Zy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ku(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>fC)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=il._getInstance(cC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await oC(),!this.activeServiceWorker)return;this.sender=new sC(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ku();return await Hp(e,cc,"1"),await Kp(e,cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Hp(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>hC(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=sl(s,!1).getAll();return new Fo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zy.type="LOCAL";const pC=Zy;new Lo(3e4,6e4);/**
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
 */function ev(t,e){return e?qn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class vd extends zy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mC(t){return YA(t.auth,new vd(t),t.bypassAuthState)}function gC(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),QA(n,new vd(t),t.bypassAuthState)}async function _C(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),GA(n,new vd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mC;case"linkViaPopup":case"linkViaRedirect":return _C;case"reauthViaPopup":case"reauthViaRedirect":return gC;default:An(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=new Lo(2e3,1e4);async function vC(t,e,n){const i=nl(t);dA(t,e,_d);const s=ev(i,n);return new Mi(i,"signInViaPopup",e,s).executeNotNull()}class Mi extends tv{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Mi.currentPopupAction&&Mi.currentPopupAction.cancel(),Mi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=yd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yC.get())};e()}}Mi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC="pendingRedirect",Va=new Map;class TC extends tv{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Va.get(this.auth._key());if(!e){try{const i=await IC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Va.set(this.auth._key(),e)}return this.bypassAuthState||Va.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IC(t,e){const n=bC(e),i=RC(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function wC(t,e){Va.set(t._key(),e)}function RC(t){return qn(t._redirectPersistence)}function bC(t){return La(EC,t.config.apiKey,t.name)}async function AC(t,e,n=!1){const i=nl(t),s=ev(i,e),o=await new TC(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=10*60*1e3;class SC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!nv(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gp(e))}saveEventToCache(e){this.cachedEventUids.add(Gp(e)),this.lastProcessedEventTime=Date.now()}}function Gp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kC(t,e={}){return ar(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DC=/^https?/;async function OC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kC(t);for(const n of e)try{if(xC(n))return}catch{}An(t,"unauthorized-domain")}function xC(t){const e=Hu(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!DC.test(n))return!1;if(NC.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const MC=new Lo(3e4,6e4);function Qp(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function LC(t){return new Promise((e,n)=>{var i,s,r;function o(){Qp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qp(),n(vn(t,"network-request-failed"))},timeout:MC.get()})}if(!((s=(i=En().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=En().gapi)===null||r===void 0)&&r.load)o();else{const a=BA("iframefcb");return En()[a]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},UA(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Fa=null,e})}let Fa=null;function VC(t){return Fa=Fa||LC(t),Fa}/**
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
 */const FC=new Lo(5e3,15e3),qC="__/auth/iframe",UC="emulator/auth/iframe",BC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $C(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fd(e,UC):`https://${t.config.authDomain}/${qC}`,i={apiKey:e.apiKey,appName:t.name,v:Ri},s=jC.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${or(i).slice(1)}`}async function zC(t){const e=await VC(t),n=En().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:$C(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BC,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),a=En().setTimeout(()=>{r(o)},FC.get());function c(){En().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const WC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HC=500,KC=600,GC="_blank",QC="http://localhost";class Yp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YC(t,e,n,i=HC,s=KC){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},WC),{width:i.toString(),height:s.toString(),top:r,left:o}),l=Et().toLowerCase();n&&(a=Ly(l)?GC:n),My(l)&&(e=e||QC,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(NA(l)&&a!=="_self")return XC(e||"",a),new Yp(null);const h=window.open(e||"",a,u);J(h,t,"popup-blocked");try{h.focus()}catch{}return new Yp(h)}function XC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const JC="__/auth/handler",ZC="emulator/auth/handler",eS=encodeURIComponent("fac");async function Xp(t,e,n,i,s,r){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ri,eventId:s};if(e instanceof _d){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Uu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Vo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${eS}=${encodeURIComponent(c)}`:"";return`${tS(t)}?${or(a).slice(1)}${l}`}function tS({config:t}){return t.emulator?fd(t,ZC):`https://${t.authDomain}/${JC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl="webStorageSupport";class nS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qy,this._completeRedirectFn=AC,this._overrideRedirectResult=wC}async _openPopup(e,n,i,s){var r;Hn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Xp(e,n,i,Hu(),s);return YC(e,o,yd())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Xp(e,n,i,Hu(),s);return rC(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Hn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await zC(e),i=new SC(e);return n.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zl,{type:Zl},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Zl];o!==void 0&&n(!!o),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return By()||gd()||tl()}}const iS=nS;var Jp="@firebase/auth",Zp="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function oS(t){bn(new nn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jy(t)},l=new FA(i,s,r,c);return $A(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),bn(new nn("auth-internal",e=>{const n=nl(e.getProvider("auth").getImmediate());return(i=>new sS(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Jp,Zp,rS(t)),Ot(Jp,Zp,"esm2017")}/**
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
 */const aS=5*60,cS=_y("authIdTokenMaxAge")||aS;let em=null;const lS=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>cS)return;const s=n==null?void 0:n.token;em!==s&&(em=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function iv(t=ud()){const e=ld(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jA(t,{popupRedirectResolver:iS,persistence:[pC,nC,Qy]}),i=_y("authTokenSyncURL");if(i){const r=lS(i);JA(n,r,()=>r(n.currentUser)),XA(n,o=>r(o))}const s=my("auth");return s&&zA(n,`http://${s}`),n}oS("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS=new Map,hS={activated:!1,tokenObservers:[]};function sn(t){return uS.get(t)||Object.assign({},hS)}const tm={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ao,await fS(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ao,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function fS(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},uc=new rr("appCheck","AppCheck",pS);function sv(t){if(!sn(t).activated)throw uc.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS="firebase-app-check-database",gS=1,Gu="firebase-app-check-store";let pa=null;function _S(){return pa||(pa=new Promise((t,e)=>{try{const n=indexedDB.open(mS,gS);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(uc.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(Gu,{keyPath:"compositeKey"})}}}catch(n){e(uc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),pa)}function yS(t,e){return vS(ES(t),e)}async function vS(t,e){const i=(await _S()).transaction(Gu,"readwrite"),r=i.objectStore(Gu).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=c=>{o()},i.onerror=c=>{var l;a(uc.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function ES(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=new Mo("@firebase/app-check");function nm(t,e){return Ey()?yS(t,e).catch(n=>{Qu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS={error:"UNKNOWN_ERROR"};function IS(t){return Zc.encodeString(JSON.stringify(t),!1)}async function Yu(t,e=!1){const n=t.app;sv(n);const i=sn(n);let s=i.token,r;if(s&&!kr(s)&&(i.token=void 0,s=void 0),!s){const c=await i.cachedTokenPromise;c&&(kr(c)?s=c:await nm(n,void 0))}if(!e&&s&&kr(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await sn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Qu.warn(c.message):Qu.error(c),r=c}let a;return s?r?kr(s)?a={token:s.token,internalError:r}:a=sm(r):(a={token:s.token},i.token=s,await nm(n,s)):a=sm(r),o&&AS(n,a),a}async function wS(t){const e=t.app;sv(e);const{provider:n}=sn(e);{const{token:i}=await n.getToken();return{token:i}}}function RS(t,e,n,i){const{app:s}=t,r=sn(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&kr(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),im(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>im(t))}function rv(t,e){const n=sn(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function im(t){const{app:e}=t,n=sn(e);let i=n.tokenRefresher;i||(i=bS(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function bS(t){const{app:e}=t;return new dS(async()=>{const n=sn(e);let i;if(n.token?i=await Yu(t,!0):i=await Yu(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=sn(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},tm.RETRIAL_MIN_WAIT,tm.RETRIAL_MAX_WAIT)}function AS(t,e){const n=sn(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function kr(t){return t.expireTimeMillis-Date.now()>0}function sm(t){return{token:IS(TS),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=sn(this.app);for(const n of e)rv(this.app,n.next);return Promise.resolve()}}function SS(t,e){return new CS(t,e)}function PS(t){return{getToken:e=>Yu(t,e),getLimitedUseToken:()=>wS(t),addTokenListener:e=>RS(t,"INTERNAL",e),removeTokenListener:e=>rv(t.app,e)}}const kS="@firebase/app-check",NS="0.8.0",DS="app-check",rm="app-check-internal";function OS(){bn(new nn(DS,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return SS(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(rm).initialize()})),bn(new nn(rm,t=>{const e=t.getProvider("app-check").getImmediate();return PS(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ot(kS,NS)}OS();var xS="firebase",MS="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(xS,MS,"app");const ov=Symbol("firebaseApp");function Ed(t){return ty()&&zt(ov,null)||ud(t)}const pn=()=>{};function Td(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function LS(t,e,n){const i=(""+e).split("."),s=i.pop(),r=i.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(s),1,n):r[s]=n}function ns(t){return!!t&&typeof t=="object"}const VS=Object.prototype;function FS(t){return ns(t)&&Object.getPrototypeOf(t)===VS}function Id(t){return ns(t)&&t.type==="document"}function qS(t){return ns(t)&&t.type==="collection"}function US(t){return Id(t)||qS(t)}function BS(t){return ns(t)&&t.type==="query"}function jS(t){return ns(t)&&"ref"in t}function $S(t){return ns(t)&&typeof t.bucket=="string"}function zS(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const WS=Symbol.for("v-scx");function HS(){return!!zt(WS,0)}const ma=new WeakMap;function KS(t,e){if(!ma.has(t)){const n=jc(!0);ma.set(t,n);const{unmount:i}=e;e.unmount=()=>{i.call(e),n.stop(),ma.delete(t)}}return ma.get(t)}const om="@firebase/database",am="1.0.1";/**
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
 */let av="";function GS(t){av=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),it(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:co(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Xn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new QS(e)}}catch{}return new YS},Li=cv("localStorage"),Xu=cv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new Mo("@firebase/database"),XS=function(){let t=1;return function(){return t++}}(),lv=function(t){const e=sb(t),n=new ZR;n.update(e);const i=n.digest();return Zc.encodeByteArray(i)},qo=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=qo.apply(null,i):typeof i=="object"?e+=it(i):e+=i,e+=" "}return e};let zi=null,cm=!0;const JS=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ks.logLevel=re.VERBOSE,zi=ks.log.bind(ks),e&&Xu.set("logging_enabled",!0)):typeof t=="function"?zi=t:(zi=null,Xu.remove("logging_enabled"))},ft=function(...t){if(cm===!0&&(cm=!1,zi===null&&Xu.get("logging_enabled")===!0&&JS(!0)),zi){const e=qo.apply(null,t);zi(e)}},Uo=function(t){return function(...e){ft(t,...e)}},Ju=function(...t){const e="FIREBASE INTERNAL ERROR: "+qo(...t);ks.error(e)},Qi=function(...t){const e=`FIREBASE FATAL ERROR: ${qo(...t)}`;throw ks.error(e),new Error(e)},xt=function(...t){const e="FIREBASE WARNING: "+qo(...t);ks.warn(e)},ZS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},uv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},eP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Bs="[MIN_NAME]",Yi="[MAX_NAME]",cr=function(t,e){if(t===e)return 0;if(t===Bs||e===Yi)return-1;if(e===Bs||t===Yi)return 1;{const n=lm(t),i=lm(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},tP=function(t,e){return t===e?0:t<e?-1:1},vr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+it(e))},wd=function(t){if(typeof t!="object"||t===null)return it(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=it(e[i]),n+=":",n+=wd(t[e[i]]);return n+="}",n},hv=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Wt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const dv=function(t){x(!uv(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,c;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},nP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},iP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},sP=new RegExp("^-?(0*)\\d{1,10}$"),rP=-2147483648,oP=2147483647,lm=function(t){if(sP.test(t)){const e=Number(t);if(e>=rP&&e<=oP)return e}return null},Bo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw xt("Exception was thrown by user callback.",n),e},Math.floor(0))}},aP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},jr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class cP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){xt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ft("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xt(e)}}class Zu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="5",fv="v",pv="s",mv="r",gv="f",_v=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,yv="ls",vv="p",eh="ac",Ev="websocket",Tv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,n,i,s,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Li.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Li.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function hP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Iv(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let i;if(e===Ev)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Tv)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);hP(t)&&(n.ns=t.namespace);const s=[];return Wt(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(){this.counters_={}}incrementCounter(e,n=1){Xn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return VR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu={},tu={};function bd(t){const e=t.toString();return eu[e]||(eu[e]=new dP),eu[e]}function fP(t,e){const n=t.toString();return tu[n]||(tu[n]=e()),tu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Bo(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="start",mP="close",gP="pLPCommand",_P="pRTLPCB",wv="id",Rv="pw",bv="ser",yP="cb",vP="seg",EP="ts",TP="d",IP="dframe",Av=1870,Cv=30,wP=Av-Cv,RP=25e3,bP=3e4;class vs{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Uo(e),this.stats_=bd(n),this.urlFn=c=>(this.appCheckToken&&(c[eh]=this.appCheckToken),Iv(n,Tv,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new pP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(bP)),eP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ad((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===um)this.id=a,this.password=c;else if(o===mP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[um]="t",i[bv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[yP]=this.scriptTagHolder.uniqueCallbackIdentifier),i[fv]=Rd,this.transportSessionId&&(i[pv]=this.transportSessionId),this.lastSessionId&&(i[yv]=this.lastSessionId),this.applicationId&&(i[vv]=this.applicationId),this.appCheckToken&&(i[eh]=this.appCheckToken),typeof location<"u"&&location.hostname&&_v.test(location.hostname)&&(i[mv]=gv);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vs.forceAllow_=!0}static forceDisallow(){vs.forceDisallow_=!0}static isAvailable(){return vs.forceAllow_?!0:!vs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!nP()&&!iP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=fy(n),s=hv(i,wP);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[IP]="t",i[wv]=e,i[Rv]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=it(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ad{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=XS(),window[gP+this.uniqueCallbackIdentifier]=e,window[_P+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ad.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ft("frame writing exception"),a.stack&&ft(a.stack),ft(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ft("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[wv]=this.myID,e[Rv]=this.myPW,e[bv]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Cv+i.length<=Av;){const o=this.pendingSegs.shift();i=i+"&"+vP+s+"="+o.seg+"&"+EP+s+"="+o.ts+"&"+TP+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(RP)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{ft("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=16384,CP=45e3;let hc=null;typeof MozWebSocket<"u"?hc=MozWebSocket:typeof WebSocket<"u"&&(hc=WebSocket);class Gt{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Uo(this.connId),this.stats_=bd(n),this.connURL=Gt.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[fv]=Rd,typeof location<"u"&&location.hostname&&_v.test(location.hostname)&&(o[mv]=gv),n&&(o[pv]=n),i&&(o[yv]=i),s&&(o[eh]=s),r&&(o[vv]=r),Iv(e,Ev,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Li.set("previous_websocket_failure",!0);try{let i;vy(),this.mySock=new hc(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Gt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&hc!==null&&!Gt.forceDisallow_}static previouslyFailed(){return Li.isInMemoryStorage||Li.get("previous_websocket_failure")===!0}markConnectionHealthy(){Li.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=co(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=hv(n,AP);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(CP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gt.responsesRequiredToBeHealthy=2;Gt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[vs,Gt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Gt&&Gt.isAvailable();let i=n&&!Gt.previouslyFailed();if(e.webSocketOnly&&(n||xt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Gt];else{const s=this.transports_=[];for(const r of fo.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);fo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP=6e4,PP=5e3,kP=10*1024,NP=100*1024,nu="t",hm="d",DP="s",dm="r",OP="e",fm="o",pm="a",mm="n",gm="p",xP="h";class MP{constructor(e,n,i,s,r,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Uo("c:"+this.id+":"),this.transportManager_=new fo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=jr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>NP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>kP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(nu in e){const n=e[nu];n===pm?this.upgradeIfSecondaryHealthy_():n===dm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===fm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=vr("t",e),i=vr("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:mm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=vr("t",e),i=vr("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=vr(nu,e);if(hm in e){const i=e[hm];if(n===xP){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===mm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===DP?this.onConnectionShutdown_(i):n===dm?this.onReset_(i):n===OP?Ju("Server Error: "+i):n===fm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ju("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Rd!==i&&xt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),jr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(SP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):jr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(PP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Li.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc extends Pv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ad()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new dc}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=32,ym=768;class xe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Re(){return new xe("")}function le(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ei(t){return t.pieces_.length-t.pieceNum_}function Ne(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new xe(t.pieces_,e)}function kv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function LP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Nv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Dv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new xe(e,0)}function Qe(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof xe)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new xe(n,0)}function ae(t){return t.pieceNum_>=t.pieces_.length}function $t(t,e){const n=le(t),i=le(e);if(n===null)return e;if(n===i)return $t(Ne(t),Ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ov(t,e){if(Ei(t)!==Ei(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Yt(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Ei(t)>Ei(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class VP{constructor(e,n){this.errorPrefix_=n,this.parts_=Nv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=el(this.parts_[i]);xv(this)}}function FP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=el(e),xv(t)}function qP(t){const e=t.parts_.pop();t.byteLength_-=el(e),t.parts_.length>0&&(t.byteLength_-=1)}function xv(t){if(t.byteLength_>ym)throw new Error(t.errorPrefix_+"has a key path longer than "+ym+" bytes ("+t.byteLength_+").");if(t.parts_.length>_m)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_m+") or object contains a cycle "+Ni(t))}function Ni(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd extends Pv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Cd}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=1e3,UP=60*5*1e3,vm=30*1e3,BP=1.3,jP=3e4,$P="server_kill",Em=3;class $n extends Sv{constructor(e,n,i,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=$n.nextPersistentConnectionId_++,this.log_=Uo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Er,this.maxReconnectDelay_=UP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!vy())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Cd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&dc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(it(r)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new ao,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;$n.warnOnListenWarnings_(c,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Xn(e,"w")){const i=qs(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();xt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||JR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=XR(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+it(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ju("Unrecognized action received from server: "+it(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Er,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Er,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jP&&(this.reconnectDelay_=Er),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*BP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+$n.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(h){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ft("getToken() completed but was canceled"):(ft("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new MP(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{xt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt($P)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&xt(h),c())}}}interrupt(e){ft("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ft("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Uu(this.interruptReasons_)&&(this.reconnectDelay_=Er,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>wd(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new xe(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){ft("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Em&&(this.reconnectDelay_=vm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ft("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Em&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+av.replace(/\./g,"-")]=1,ad()?e["framework.cordova"]=1:yy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=dc.getInstance().currentlyOnline();return Uu(this.interruptReasons_)&&e}}$n.nextPersistentConnectionId_=0;$n.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class rl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new ue(Bs,e),s=new ue(Bs,n);return this.compare(i,s)!==0}minPost(){return ue.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ga;class Mv extends rl{static get __EMPTY_NODE(){return ga}static set __EMPTY_NODE(e){ga=e}compare(e,n){return cr(e.name,n.name)}isDefinedOn(e){throw sr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ue.MIN}maxPost(){return new ue(Yi,ga)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new ue(e,ga)}toString(){return".key"}}const Ns=new Mv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a=class{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Dt=class Nr{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Nr.RED,this.left=s??mn.EMPTY_NODE,this.right=r??mn.EMPTY_NODE}copy(e,n,i,s,r){return new Nr(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return mn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return mn.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Nr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Nr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Dt.RED=!0;Dt.BLACK=!1;class zP{copy(e,n,i,s,r){return this}insert(e,n,i){return new Dt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let mn=class qa{constructor(e,n=qa.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new qa(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Dt.BLACK,null,null))}remove(e){return new qa(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Dt.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new _a(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new _a(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new _a(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new _a(this.root_,null,this.comparator_,!0,e)}};mn.EMPTY_NODE=new zP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(t,e){return cr(t.name,e.name)}function Sd(t,e){return cr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let th;function HP(t){th=t}const Lv=function(t){return typeof t=="number"?"number:"+dv(t):"string:"+t},Vv=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xn(e,".sv"),"Priority must be a string or number.")}else x(t===th||t.isEmpty(),"priority of unexpected type.");x(t===th||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tm;class Ke{constructor(e,n=Ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Vv(this.priorityNode_)}static set __childrenNodeConstructor(e){Tm=e}static get __childrenNodeConstructor(){return Tm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:le(e)===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=le(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(x(i!==".priority"||Ei(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Lv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=dv(this.value_):e+=this.value_,this.lazyHash_=lv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ke.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Ke.VALUE_TYPE_ORDER.indexOf(n),r=Ke.VALUE_TYPE_ORDER.indexOf(i);return x(s>=0,"Unknown leaf type: "+n),x(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fv,qv;function KP(t){Fv=t}function GP(t){qv=t}class QP extends rl{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?cr(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ue.MIN}maxPost(){return new ue(Yi,new Ke("[PRIORITY-POST]",qv))}makePost(e,n){const i=Fv(e);return new ue(n,new Ke("[PRIORITY-POST]",i))}toString(){return".priority"}}const _t=new QP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=Math.log(2);class XP{constructor(e){const n=r=>parseInt(Math.log(r)/YP,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fc=function(t,e,n,i){t.sort(e);const s=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=t[c],d=n?n(h):h,new Dt(d,h.node,Dt.BLACK,null,null);{const f=parseInt(u/2,10)+c,g=s(c,f),y=s(f+1,l);return h=t[f],d=n?n(h):h,new Dt(d,h.node,Dt.BLACK,g,y)}},r=function(c){let l=null,u=null,h=t.length;const d=function(g,y){const v=h-g,I=h;h-=g;const P=s(v+1,I),k=t[v],b=n?n(k):k;f(new Dt(b,k.node,y,null,P))},f=function(g){l?(l.left=g,l=g):(u=g,l=g)};for(let g=0;g<c.count;++g){const y=c.nextBitIsOne(),v=Math.pow(2,c.count-(g+1));y?d(v,Dt.BLACK):(d(v,Dt.BLACK),d(v,Dt.RED))}return u},o=new XP(t.length),a=r(o);return new mn(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iu;const fs={};class Un{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(fs&&_t,"ChildrenNode.ts has not been loaded"),iu=iu||new Un({".priority":fs},{".priority":_t}),iu}get(e){const n=qs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof mn?n:null}hasIndex(e){return Xn(this.indexSet_,e.toString())}addIndex(e,n){x(e!==Ns,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(ue.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=fc(i,e.getCompare()):a=fs;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Un(u,l)}addToIndexes(e,n){const i=nc(this.indexes_,(s,r)=>{const o=qs(this.indexSet_,r);if(x(o,"Missing index implementation for "+r),s===fs)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(ue.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),fc(a,o.getCompare())}else return fs;else{const a=n.get(e.name);let c=s;return a&&(c=c.remove(new ue(e.name,a))),c.insert(e,e.node)}});return new Un(i,this.indexSet_)}removeFromIndexes(e,n){const i=nc(this.indexes_,s=>{if(s===fs)return s;{const r=n.get(e.name);return r?s.remove(new ue(e.name,r)):s}});return new Un(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tr;class ve{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Vv(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Tr||(Tr=new ve(new mn(Sd),null,Un.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Tr}updatePriority(e){return this.children_.isEmpty()?this:new ve(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Tr:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(Ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new ue(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Tr:this.priorityNode_;return new ve(s,o,r)}}updateChild(e,n){const i=le(e);if(i===null)return n;{x(le(e)!==".priority"||Ei(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Ne(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(_t,(o,a)=>{n[o]=a.val(e),i++,r&&ve.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Lv(this.getPriority().val())+":"),this.forEachChild(_t,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":lv(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new ue(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ue(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ue(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ue.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ue.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===jo?-1:0}withIndex(e){if(e===Ns||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ve(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ns||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(_t),s=n.getIterator(_t);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ns?null:this.indexMap_.get(e.toString())}}ve.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class JP extends ve{constructor(){super(new mn(Sd),ve.EMPTY_NODE,Un.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ve.EMPTY_NODE}isEmpty(){return!1}}const jo=new JP;Object.defineProperties(ue,{MIN:{value:new ue(Bs,ve.EMPTY_NODE)},MAX:{value:new ue(Yi,jo)}});Mv.__EMPTY_NODE=ve.EMPTY_NODE;Ke.__childrenNodeConstructor=ve;HP(jo);GP(jo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP=!0;function pt(t,e=null){if(t===null)return ve.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ke(n,pt(e))}if(!(t instanceof Array)&&ZP){const n=[];let i=!1;if(Wt(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=pt(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),n.push(new ue(o,c)))}}),n.length===0)return ve.EMPTY_NODE;const r=fc(n,WP,o=>o.name,Sd);if(i){const o=fc(n,_t.getCompare());return new ve(r,pt(e),new Un({".priority":o},{".priority":_t}))}else return new ve(r,pt(e),Un.Default)}else{let n=ve.EMPTY_NODE;return Wt(t,(i,s)=>{if(Xn(t,i)&&i.substring(0,1)!=="."){const r=pt(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(pt(e))}}KP(pt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek extends rl{constructor(e){super(),this.indexPath_=e,x(!ae(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?cr(e.name,n.name):r}makePost(e,n){const i=pt(e),s=ve.EMPTY_NODE.updateChild(this.indexPath_,i);return new ue(n,s)}maxPost(){const e=ve.EMPTY_NODE.updateChild(this.indexPath_,jo);return new ue(Yi,e)}toString(){return Nv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk extends rl{compare(e,n){const i=e.node.compareTo(n.node);return i===0?cr(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ue.MIN}maxPost(){return ue.MAX}makePost(e,n){const i=pt(e);return new ue(n,i)}toString(){return".value"}}const nk=new tk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(t){return{type:"value",snapshotNode:t}}function sk(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function rk(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Im(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ok(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_t}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Bs}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Yi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_t}copy(){const e=new Pd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_t?n="$priority":t.index_===nk?n="$value":t.index_===Ns?n="$key":(x(t.index_ instanceof ek,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=it(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=it(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+it(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=it(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+it(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Rm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_t&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc extends Sv{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Uo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=pc.getListenId_(e,i),a={};this.listens_[o]=a;const c=wm(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,i),qs(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",s(d,null)}})}unlisten(e,n){const i=pc.getListenId_(e,n);delete this.listens_[i]}get(e){const n=wm(e._queryParams),i=e._path.toString(),s=new ao;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+or(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=co(a.responseText)}catch{xt("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&xt("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(){this.rootNode_=ve.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(){return{value:null,children:new Map}}function Uv(t,e,n){if(ae(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=le(e);t.children.has(i)||t.children.set(i,mc());const s=t.children.get(i);e=Ne(e),Uv(s,e,n)}}function nh(t,e,n){t.value!==null?n(e,t.value):ck(t,(i,s)=>{const r=new xe(e.toString()+"/"+i);nh(s,r,n)})}function ck(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Wt(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=10*1e3,uk=30*1e3,hk=5*60*1e3;class dk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new lk(e);const i=bm+(uk-bm)*Math.random();jr(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Wt(e,(s,r)=>{r>0&&Xn(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),jr(this.reportStats_.bind(this),Math.floor(Math.random()*2*hk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(gn||(gn={}));function Bv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function jv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $v(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=gn.ACK_USER_WRITE,this.source=Bv()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new xe(e));return new gc(Re(),n,this.revert)}}else return x(le(this.path)===e,"operationForChild called for unrelated child."),new gc(Ne(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=gn.OVERWRITE}operationForChild(e){return ae(this.path)?new Xi(this.source,Re(),this.snap.getImmediateChild(e)):new Xi(this.source,Ne(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=gn.MERGE}operationForChild(e){if(ae(this.path)){const n=this.children.subtree(new xe(e));return n.isEmpty()?null:n.value?new Xi(this.source,Re(),n.value):new po(this.source,Re(),n)}else return x(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new po(this.source,Ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function fk(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(ok(o.childName,o.snapshotNode))}),Ir(t,s,"child_removed",e,i,n),Ir(t,s,"child_added",e,i,n),Ir(t,s,"child_moved",r,i,n),Ir(t,s,"child_changed",e,i,n),Ir(t,s,"value",e,i,n),s}function Ir(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,c)=>mk(t,a,c)),o.forEach(a=>{const c=pk(t,a,r);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function pk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function mk(t,e,n){if(e.childName==null||n.childName==null)throw sr("Should only compare child_ events.");const i=new ue(e.childName,e.snapshotNode),s=new ue(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(t,e){return{eventCache:t,serverCache:e}}function $r(t,e,n,i){return zv(new kd(e,n,i),t.serverCache)}function Wv(t,e,n,i){return zv(t.eventCache,new kd(e,n,i))}function ih(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ji(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let su;const gk=()=>(su||(su=new mn(tP)),su);class Se{constructor(e,n=gk()){this.value=e,this.children=n}static fromObject(e){let n=new Se(null);return Wt(e,(i,s)=>{n=n.set(new xe(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Re(),value:this.value};if(ae(e))return null;{const i=le(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Ne(e),n);return r!=null?{path:Qe(new xe(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const n=le(e),i=this.children.get(n);return i!==null?i.subtree(Ne(e)):new Se(null)}}set(e,n){if(ae(e))return new Se(n,this.children);{const i=le(e),r=(this.children.get(i)||new Se(null)).set(Ne(e),n),o=this.children.insert(i,r);return new Se(this.value,o)}}remove(e){if(ae(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const n=le(e),i=this.children.get(n);if(i){const s=i.remove(Ne(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new Se(null):new Se(this.value,r)}else return this}}get(e){if(ae(e))return this.value;{const n=le(e),i=this.children.get(n);return i?i.get(Ne(e)):null}}setTree(e,n){if(ae(e))return n;{const i=le(e),r=(this.children.get(i)||new Se(null)).setTree(Ne(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Se(this.value,o)}}fold(e){return this.fold_(Re(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Qe(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Re(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(ae(e))return null;{const r=le(e),o=this.children.get(r);return o?o.findOnPath_(Ne(e),Qe(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Re(),n)}foreachOnPath_(e,n,i){if(ae(e))return this;{this.value&&i(n,this.value);const s=le(e),r=this.children.get(s);return r?r.foreachOnPath_(Ne(e),Qe(n,s),i):new Se(null)}}foreach(e){this.foreach_(Re(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Qe(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.writeTree_=e}static empty(){return new tn(new Se(null))}}function zr(t,e,n){if(ae(e))return new tn(new Se(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=$t(s,e);return r=r.updateChild(o,n),new tn(t.writeTree_.set(s,r))}else{const s=new Se(n),r=t.writeTree_.setTree(e,s);return new tn(r)}}}function Am(t,e,n){let i=t;return Wt(n,(s,r)=>{i=zr(i,Qe(e,s),r)}),i}function Cm(t,e){if(ae(e))return tn.empty();{const n=t.writeTree_.setTree(e,new Se(null));return new tn(n)}}function sh(t,e){return is(t,e)!=null}function is(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild($t(n.path,e)):null}function Sm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_t,(i,s)=>{e.push(new ue(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new ue(i,s.value))}),e}function gi(t,e){if(ae(e))return t;{const n=is(t,e);return n!=null?new tn(new Se(n)):new tn(t.writeTree_.subtree(e))}}function rh(t){return t.writeTree_.isEmpty()}function js(t,e){return Hv(Re(),t.writeTree_,e)}function Hv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(x(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Hv(Qe(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Qe(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(t,e){return Jv(e,t)}function _k(t,e,n,i,s){x(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=zr(t.visibleWrites,e,n)),t.lastWriteId=i}function yk(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function vk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Ek(a,i.path)?s=!1:Yt(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Tk(t),!0;if(i.snap)t.visibleWrites=Cm(t.visibleWrites,i.path);else{const a=i.children;Wt(a,c=>{t.visibleWrites=Cm(t.visibleWrites,Qe(i.path,c))})}return!0}else return!1}function Ek(t,e){if(t.snap)return Yt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Yt(Qe(t.path,n),e))return!0;return!1}function Tk(t){t.visibleWrites=Gv(t.allWrites,Ik,Re()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ik(t){return t.visible}function Gv(t,e,n){let i=tn.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)Yt(n,o)?(a=$t(n,o),i=zr(i,a,r.snap)):Yt(o,n)&&(a=$t(o,n),i=zr(i,Re(),r.snap.getChild(a)));else if(r.children){if(Yt(n,o))a=$t(n,o),i=Am(i,a,r.children);else if(Yt(o,n))if(a=$t(o,n),ae(a))i=Am(i,Re(),r.children);else{const c=qs(r.children,le(a));if(c){const l=c.getChild(Ne(a));i=zr(i,Re(),l)}}}else throw sr("WriteRecord should have .snap or .children")}}return i}function Qv(t,e,n,i,s){if(!i&&!s){const r=is(t.visibleWrites,e);if(r!=null)return r;{const o=gi(t.visibleWrites,e);if(rh(o))return n;if(n==null&&!sh(o,Re()))return null;{const a=n||ve.EMPTY_NODE;return js(o,a)}}}else{const r=gi(t.visibleWrites,e);if(!s&&rh(r))return n;if(!s&&n==null&&!sh(r,Re()))return null;{const o=function(l){return(l.visible||s)&&(!i||!~i.indexOf(l.writeId))&&(Yt(l.path,e)||Yt(e,l.path))},a=Gv(t.allWrites,o,e),c=n||ve.EMPTY_NODE;return js(a,c)}}}function wk(t,e,n){let i=ve.EMPTY_NODE;const s=is(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(_t,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=gi(t.visibleWrites,e);return n.forEachChild(_t,(o,a)=>{const c=js(gi(r,new xe(o)),a);i=i.updateImmediateChild(o,c)}),Sm(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=gi(t.visibleWrites,e);return Sm(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Rk(t,e,n,i,s){x(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Qe(e,n);if(sh(t.visibleWrites,r))return null;{const o=gi(t.visibleWrites,r);return rh(o)?s.getChild(n):js(o,s.getChild(n))}}function bk(t,e,n,i){const s=Qe(e,n),r=is(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=gi(t.visibleWrites,s);return js(o,i.getNode().getImmediateChild(n))}else return null}function Ak(t,e){return is(t.visibleWrites,e)}function Ck(t,e,n,i,s,r,o){let a;const c=gi(t.visibleWrites,e),l=is(c,Re());if(l!=null)a=l;else if(n!=null)a=js(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<s;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function Sk(){return{visibleWrites:tn.empty(),allWrites:[],lastWriteId:-1}}function oh(t,e,n,i){return Qv(t.writeTree,t.treePath,e,n,i)}function Yv(t,e){return wk(t.writeTree,t.treePath,e)}function Pm(t,e,n,i){return Rk(t.writeTree,t.treePath,e,n,i)}function _c(t,e){return Ak(t.writeTree,Qe(t.treePath,e))}function Pk(t,e,n,i,s,r){return Ck(t.writeTree,t.treePath,e,n,i,s,r)}function Nd(t,e,n){return bk(t.writeTree,t.treePath,e,n)}function Xv(t,e){return Jv(Qe(t.treePath,e),t.writeTree)}function Jv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Im(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,rk(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,sk(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Im(i,e.snapshotNode,s.oldSnap));else throw sr("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Zv=new Nk;class Dd{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new kd(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Nd(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ji(this.viewCache_),r=Pk(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function Dk(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Ok(t,e,n,i,s){const r=new kk;let o,a;if(n.type===gn.OVERWRITE){const l=n;l.source.fromUser?o=ah(t,e,l.path,l.snap,i,s,r):(x(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!ae(l.path),o=yc(t,e,l.path,l.snap,i,s,a,r))}else if(n.type===gn.MERGE){const l=n;l.source.fromUser?o=Mk(t,e,l.path,l.children,i,s,r):(x(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=ch(t,e,l.path,l.children,i,s,a,r))}else if(n.type===gn.ACK_USER_WRITE){const l=n;l.revert?o=Fk(t,e,l.path,i,s,r):o=Lk(t,e,l.path,l.affectedTree,i,s,r)}else if(n.type===gn.LISTEN_COMPLETE)o=Vk(t,e,n.path,i,r);else throw sr("Unknown operation type: "+n.type);const c=r.getChanges();return xk(e,o,c),{viewCache:o,changes:c}}function xk(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=ih(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(ik(ih(e)))}}function eE(t,e,n,i,s,r){const o=e.eventCache;if(_c(i,n)!=null)return e;{let a,c;if(ae(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Ji(e),u=l instanceof ve?l:ve.EMPTY_NODE,h=Yv(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=oh(i,Ji(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=le(n);if(l===".priority"){x(Ei(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Pm(i,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ne(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=Pm(i,n,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=Nd(i,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,s,r):a=o.getNode()}}return $r(e,a,o.isFullyInitialized()||ae(n),t.filter.filtersNodes())}}function yc(t,e,n,i,s,r,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(ae(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),f,null)}else{const f=le(n);if(!c.isCompleteForPath(n)&&Ei(n)>1)return e;const g=Ne(n),v=c.getNode().getImmediateChild(f).updateChild(g,i);f===".priority"?l=u.updatePriority(c.getNode(),v):l=u.updateChild(c.getNode(),f,v,g,Zv,null)}const h=Wv(e,l,c.isFullyInitialized()||ae(n),u.filtersNodes()),d=new Dd(s,h,r);return eE(t,h,n,s,d,a)}function ah(t,e,n,i,s,r,o){const a=e.eventCache;let c,l;const u=new Dd(s,e,r);if(ae(n))l=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=$r(e,l,!0,t.filter.filtersNodes());else{const h=le(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),i),c=$r(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=Ne(n),f=a.getNode().getImmediateChild(h);let g;if(ae(d))g=i;else{const y=u.getCompleteChild(h);y!=null?kv(d)===".priority"&&y.getChild(Dv(d)).isEmpty()?g=y:g=y.updateChild(d,i):g=ve.EMPTY_NODE}if(f.equals(g))c=e;else{const y=t.filter.updateChild(a.getNode(),h,g,d,u,o);c=$r(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function km(t,e){return t.eventCache.isCompleteForChild(e)}function Mk(t,e,n,i,s,r,o){let a=e;return i.foreach((c,l)=>{const u=Qe(n,c);km(e,le(u))&&(a=ah(t,a,u,l,s,r,o))}),i.foreach((c,l)=>{const u=Qe(n,c);km(e,le(u))||(a=ah(t,a,u,l,s,r,o))}),a}function Nm(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ch(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;ae(n)?l=i:l=new Se(null).setTree(n,i);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),g=Nm(t,f,d);c=yc(t,c,new xe(h),g,s,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const g=e.serverCache.getNode().getImmediateChild(h),y=Nm(t,g,d);c=yc(t,c,new xe(h),y,s,r,o,a)}}),c}function Lk(t,e,n,i,s,r,o){if(_c(s,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(ae(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return yc(t,e,n,c.getNode().getChild(n),s,r,a,o);if(ae(n)){let l=new Se(null);return c.getNode().forEachChild(Ns,(u,h)=>{l=l.set(new xe(u),h)}),ch(t,e,n,l,s,r,a,o)}else return e}else{let l=new Se(null);return i.foreach((u,h)=>{const d=Qe(n,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),ch(t,e,n,l,s,r,a,o)}}function Vk(t,e,n,i,s){const r=e.serverCache,o=Wv(e,r.getNode(),r.isFullyInitialized()||ae(n),r.isFiltered());return eE(t,o,n,i,Zv,s)}function Fk(t,e,n,i,s,r){let o;if(_c(i,n)!=null)return e;{const a=new Dd(i,e,s),c=e.eventCache.getNode();let l;if(ae(n)||le(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=oh(i,Ji(e));else{const h=e.serverCache.getNode();x(h instanceof ve,"serverChildren would be complete if leaf node"),u=Yv(i,h)}u=u,l=t.filter.updateFullNode(c,u,r)}else{const u=le(n);let h=Nd(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,Ne(n),a,r):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,ve.EMPTY_NODE,Ne(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=oh(i,Ji(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||_c(i,Re())!=null,$r(e,l,o,t.filter.filtersNodes())}}function qk(t,e){const n=Ji(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ae(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function Dm(t,e,n,i){e.type===gn.MERGE&&e.source.queryId!==null&&(x(Ji(t.viewCache_),"We should always have a full cache before handling merges"),x(ih(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Ok(t.processor_,s,e,n,i);return Dk(t.processor_,r.viewCache),x(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Uk(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Uk(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return fk(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Om;function Bk(t){x(!Om,"__referenceConstructor has already been defined"),Om=t}function Od(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return x(r!=null,"SyncTree gave us an op for an invalid query."),Dm(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Dm(o,e,n,i));return r}}function xd(t,e){let n=null;for(const i of t.views.values())n=n||qk(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xm;function jk(t){x(!xm,"__referenceConstructor has already been defined"),xm=t}class Mm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=Sk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $k(t,e,n,i,s){return _k(t.pendingWriteTree_,e,n,i,s),s?al(t,new Xi(Bv(),e,n)):[]}function Es(t,e,n=!1){const i=yk(t.pendingWriteTree_,e);if(vk(t.pendingWriteTree_,e)){let r=new Se(null);return i.snap!=null?r=r.set(Re(),!0):Wt(i.children,o=>{r=r.set(new xe(o),!0)}),al(t,new gc(i.path,r,n))}else return[]}function ol(t,e,n){return al(t,new Xi(jv(),e,n))}function zk(t,e,n){const i=Se.fromObject(n);return al(t,new po(jv(),e,i))}function Wk(t,e,n,i){const s=sE(t,i);if(s!=null){const r=rE(s),o=r.path,a=r.queryId,c=$t(o,e),l=new Xi($v(a),c,n);return oE(t,o,l)}else return[]}function Hk(t,e,n,i){const s=sE(t,i);if(s){const r=rE(s),o=r.path,a=r.queryId,c=$t(o,e),l=Se.fromObject(n),u=new po($v(a),c,l);return oE(t,o,u)}else return[]}function tE(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=$t(o,e),l=xd(a,c);if(l)return l});return Qv(s,e,r,n,!0)}function al(t,e){return nE(e,t.syncPointTree_,null,Kv(t.pendingWriteTree_,Re()))}function nE(t,e,n,i){if(ae(t.path))return iE(t,e,n,i);{const s=e.get(Re());n==null&&s!=null&&(n=xd(s,Re()));let r=[];const o=le(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=Xv(i,o);r=r.concat(nE(a,c,l,u))}return s&&(r=r.concat(Od(s,t,i,n))),r}}function iE(t,e,n,i){const s=e.get(Re());n==null&&s!=null&&(n=xd(s,Re()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=Xv(i,o),u=t.operationForChild(o);u&&(r=r.concat(iE(u,a,c,l)))}),s&&(r=r.concat(Od(s,t,i,n))),r}function sE(t,e){return t.tagToQueryMap.get(e)}function rE(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new xe(t.substr(0,e))}}function oE(t,e,n){const i=t.syncPointTree_.get(e);x(i,"Missing sync point for query tag that we're tracking");const s=Kv(t.pendingWriteTree_,e);return Od(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Md(n)}node(){return this.node_}}class Ld{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Qe(this.path_,e);return new Ld(this.syncTree_,n)}node(){return tE(this.syncTree_,this.path_)}}const Kk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Lm=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Gk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Qk(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Gk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},Qk=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&x(!1,"Unexpected increment value: "+i);const s=e.node();if(x(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Yk=function(t,e,n,i){return Vd(e,new Ld(n,t),i)},Xk=function(t,e,n){return Vd(t,new Md(e),n)};function Vd(t,e,n){const i=t.getPriority().val(),s=Lm(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Lm(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Ke(a,pt(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Ke(s))),o.forEachChild(_t,(a,c)=>{const l=Vd(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function qd(t,e){let n=e instanceof xe?e:new xe(e),i=t,s=le(n);for(;s!==null;){const r=qs(i.node.children,s)||{children:{},childCount:0};i=new Fd(s,i,r),n=Ne(n),s=le(n)}return i}function lr(t){return t.node.value}function aE(t,e){t.node.value=e,lh(t)}function cE(t){return t.node.childCount>0}function Jk(t){return lr(t)===void 0&&!cE(t)}function cl(t,e){Wt(t.node.children,(n,i)=>{e(new Fd(n,t,i))})}function lE(t,e,n,i){n&&!i&&e(t),cl(t,s=>{lE(s,e,!0,i)}),n&&i&&e(t)}function Zk(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function $o(t){return new xe(t.parent===null?t.name:$o(t.parent)+"/"+t.name)}function lh(t){t.parent!==null&&eN(t.parent,t.name,t)}function eN(t,e,n){const i=Jk(n),s=Xn(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,lh(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,lh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=/[\[\].#$\/\u0000-\u001F\u007F]/,nN=/[\[\].#$\u0000-\u001F\u007F]/,ru=10*1024*1024,uE=function(t){return typeof t=="string"&&t.length!==0&&!tN.test(t)},iN=function(t){return typeof t=="string"&&t.length!==0&&!nN.test(t)},sN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),iN(t)},hE=function(t,e,n){const i=n instanceof xe?new VP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ni(i));if(typeof e=="function")throw new Error(t+"contains a function "+Ni(i)+" with contents = "+e.toString());if(uv(e))throw new Error(t+"contains "+e.toString()+" "+Ni(i));if(typeof e=="string"&&e.length>ru/3&&el(e)>ru)throw new Error(t+"contains a string greater than "+ru+" utf8 bytes "+Ni(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Wt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!uE(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ni(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);FP(i,o),hE(t,a,i),qP(i)}),s&&r)throw new Error(t+' contains ".value" child '+Ni(i)+" in addition to actual children.")}},rN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!uE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!sN(n))throw new Error(ib(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function aN(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Ov(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function ss(t,e,n){aN(t,n),cN(t,i=>Yt(i,e)||Yt(e,i))}function cN(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(lN(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function lN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();zi&&ft("event: "+n.toString()),Bo(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN="repo_interrupt",hN=25;class dN{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new oN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=mc(),this.transactionQueueTree_=new Fd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fN(t,e,n){if(t.stats_=bd(t.repoInfo_),t.forceRestClient_||aP())t.server_=new pc(t.repoInfo_,(i,s,r,o)=>{Vm(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Fm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{it(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new $n(t.repoInfo_,e,(i,s,r,o)=>{Vm(t,i,s,r,o)},i=>{Fm(t,i)},i=>{mN(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=fP(t.repoInfo_,()=>new dk(t.stats_,t.server_)),t.infoData_=new ak,t.infoSyncTree_=new Mm({startListening:(i,s,r,o)=>{let a=[];const c=t.infoData_.getNode(i._path);return c.isEmpty()||(a=ol(t.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ud(t,"connected",!1),t.serverSyncTree_=new Mm({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,c)=>{const l=o(a,c);ss(t.eventQueue_,i._path,l)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function pN(t){const n=t.infoData_.getNode(new xe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function dE(t){return Kk({timestamp:pN(t)})}function Vm(t,e,n,i,s){t.dataUpdateCount++;const r=new xe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const c=nc(n,l=>pt(l));o=Hk(t.serverSyncTree_,r,c,s)}else{const c=pt(n);o=Wk(t.serverSyncTree_,r,c,s)}else if(i){const c=nc(n,l=>pt(l));o=zk(t.serverSyncTree_,r,c)}else{const c=pt(n);o=ol(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=jd(t,r)),ss(t.eventQueue_,a,o)}function Fm(t,e){Ud(t,"connected",e),e===!1&&_N(t)}function mN(t,e){Wt(e,(n,i)=>{Ud(t,n,i)})}function Ud(t,e,n){const i=new xe("/.info/"+e),s=pt(n);t.infoData_.updateSnapshot(i,s);const r=ol(t.infoSyncTree_,i,s);ss(t.eventQueue_,i,r)}function gN(t){return t.nextWriteId_++}function _N(t){fE(t,"onDisconnectEvents");const e=dE(t),n=mc();nh(t.onDisconnect_,Re(),(s,r)=>{const o=Yk(s,r,t.serverSyncTree_,e);Uv(n,s,o)});let i=[];nh(n,Re(),(s,r)=>{i=i.concat(ol(t.serverSyncTree_,s,r));const o=TN(t,s);jd(t,o)}),t.onDisconnect_=mc(),ss(t.eventQueue_,Re(),i)}function yN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(uN)}function fE(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ft(n,...e)}function pE(t,e,n){return tE(t.serverSyncTree_,e,n)||ve.EMPTY_NODE}function Bd(t,e=t.transactionQueueTree_){if(e||ll(t,e),lr(e)){const n=gE(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&vN(t,$o(e),n)}else cE(e)&&cl(e,n=>{Bd(t,n)})}function vN(t,e,n){const i=n.map(l=>l.currentWriteId),s=pE(t,e,i);let r=s;const o=s.hash();for(let l=0;l<n.length;l++){const u=n[l];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=$t(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{fE(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Es(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ll(t,qd(t.transactionQueueTree_,e)),Bd(t,t.transactionQueueTree_),ss(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Bo(h[d])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{xt("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}jd(t,e)}},o)}function jd(t,e){const n=mE(t,e),i=$o(n),s=gE(t,n);return EN(t,s,i),i}function EN(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=$t(n,c.path);let u=!1,h;if(x(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,s=s.concat(Es(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=hN)u=!0,h="maxretry",s=s.concat(Es(t.serverSyncTree_,c.currentWriteId,!0));else{const d=pE(t,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){hE("transaction failed: Data returned ",f,c.path);let g=pt(f);typeof f=="object"&&f!=null&&Xn(f,".priority")||(g=g.updatePriority(d.getPriority()));const v=c.currentWriteId,I=dE(t),P=Xk(g,d,I);c.currentOutputSnapshotRaw=g,c.currentOutputSnapshotResolved=P,c.currentWriteId=gN(t),o.splice(o.indexOf(v),1),s=s.concat($k(t.serverSyncTree_,c.path,P,c.currentWriteId,c.applyLocally)),s=s.concat(Es(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",s=s.concat(Es(t.serverSyncTree_,c.currentWriteId,!0))}ss(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}ll(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Bo(i[a]);Bd(t,t.transactionQueueTree_)}function mE(t,e){let n,i=t.transactionQueueTree_;for(n=le(e);n!==null&&lr(i)===void 0;)i=qd(i,n),e=Ne(e),n=le(e);return i}function gE(t,e){const n=[];return _E(t,e,n),n.sort((i,s)=>i.order-s.order),n}function _E(t,e,n){const i=lr(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);cl(e,s=>{_E(t,s,n)})}function ll(t,e){const n=lr(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,aE(e,n.length>0?n:void 0)}cl(e,i=>{ll(t,i)})}function TN(t,e){const n=$o(mE(t,e)),i=qd(t.transactionQueueTree_,e);return Zk(i,s=>{ou(t,s)}),ou(t,i),lE(i,s=>{ou(t,s)}),n}function ou(t,e){const n=lr(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Es(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?aE(e,void 0):n.length=r+1,ss(t.eventQueue_,$o(e),s);for(let o=0;o<i.length;o++)Bo(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IN(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function wN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):xt(`Invalid query segment '${n}' in query '${t}'`)}return e}const qm=function(t,e){const n=RN(t),i=n.namespace;n.domain==="firebase.com"&&Qi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Qi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ZS();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new uP(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new xe(n.pathString)}},RN=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=IN(t.substring(u,h)));const d=wN(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return ae(this._path)?null:kv(this._path)}get ref(){return new ur(this._repo,this._path)}get _queryIdentifier(){const e=Rm(this._queryParams),n=wd(e);return n==="{}"?"default":n}get _queryObject(){return Rm(this._queryParams)}isEqual(e){if(e=Mt(e),!(e instanceof $d))return!1;const n=this._repo===e._repo,i=Ov(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+LP(this._path)}}class ur extends $d{constructor(e,n){super(e,n,new Pd,!1)}get parent(){const e=Dv(this._path);return e===null?null:new ur(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Bk(ur);jk(ur);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN="FIREBASE_DATABASE_EMULATOR_HOST",uh={};let AN=!1;function CN(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Qi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ft("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=qm(r,s),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[bN]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=qm(r,s),a=o.repoInfo):c=!o.repoInfo.secure;const u=s&&c?new Zu(Zu.OWNER):new lP(t.name,t.options,e);rN("Invalid Firebase Database URL",o),ae(o.path)||Qi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=PN(a,t,u,new cP(t.name,n));return new kN(h,t)}function SN(t,e){const n=uh[e];(!n||n[t.key]!==t)&&Qi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),yN(t),delete n[t.key]}function PN(t,e,n,i){let s=uh[e.name];s||(s={},uh[e.name]=s);let r=s[t.toURLString()];return r&&Qi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new dN(t,AN,n,i),s[t.toURLString()]=r,r}class kN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ur(this._repo,Re())),this._rootInternal}_delete(){return this._rootInternal!==null&&(SN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qi("Cannot call "+e+" on a deleted database.")}}/**
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
 */function NN(t){GS(Ri),bn(new nn("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return CN(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Ot(om,am,t),Ot(om,am,"esm2017")}$n.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};$n.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};NN();var DN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,zd=zd||{},Y=DN||self;function ul(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function zo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ON(t){return Object.prototype.hasOwnProperty.call(t,au)&&t[au]||(t[au]=++xN)}var au="closure_uid_"+(1e9*Math.random()>>>0),xN=0;function MN(t,e,n){return t.call.apply(t.bind,arguments)}function LN(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function yt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?yt=MN:yt=LN,yt.apply(null,arguments)}function ya(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Je(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function bi(){this.s=this.s,this.o=this.o}var VN=0;bi.prototype.s=!1;bi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),VN!=0)&&ON(this)};bi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const yE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Wd(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Um(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(ul(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function vt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}vt.prototype.h=function(){this.defaultPrevented=!0};var FN=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",()=>{},e),Y.removeEventListener("test",()=>{},e)}catch{}return t}();function mo(t){return/^[\s\xa0]*$/.test(t)}function hl(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function fn(t){return hl().indexOf(t)!=-1}function Hd(t){return Hd[" "](t),t}Hd[" "]=function(){};function qN(t,e){var n=N1;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var UN=fn("Opera"),$s=fn("Trident")||fn("MSIE"),vE=fn("Edge"),hh=vE||$s,EE=fn("Gecko")&&!(hl().toLowerCase().indexOf("webkit")!=-1&&!fn("Edge"))&&!(fn("Trident")||fn("MSIE"))&&!fn("Edge"),BN=hl().toLowerCase().indexOf("webkit")!=-1&&!fn("Edge");function TE(){var t=Y.document;return t?t.documentMode:void 0}var dh;e:{var cu="",lu=function(){var t=hl();if(EE)return/rv:([^\);]+)(\)|;)/.exec(t);if(vE)return/Edge\/([\d\.]+)/.exec(t);if($s)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(BN)return/WebKit\/(\S+)/.exec(t);if(UN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(lu&&(cu=lu?lu[1]:""),$s){var uu=TE();if(uu!=null&&uu>parseFloat(cu)){dh=String(uu);break e}}dh=cu}var fh;if(Y.document&&$s){var Bm=TE();fh=Bm||parseInt(dh,10)||void 0}else fh=void 0;var jN=fh;function go(t,e){if(vt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(EE){e:{try{Hd(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:$N[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&go.$.h.call(this)}}Je(go,vt);var $N={2:"touch",3:"pen",4:"mouse"};go.prototype.h=function(){go.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Wo="closure_listenable_"+(1e6*Math.random()|0),zN=0;function WN(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++zN,this.fa=this.ia=!1}function dl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Kd(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function HN(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function IE(t){const e={};for(const n in t)e[n]=t[n];return e}const jm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wE(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<jm.length;r++)n=jm[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function fl(t){this.src=t,this.g={},this.h=0}fl.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=mh(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new WN(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function ph(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=yE(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(dl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function mh(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var Gd="closure_lm_"+(1e6*Math.random()|0),hu={};function RE(t,e,n,i,s){if(i&&i.once)return AE(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)RE(t,e[r],n,i,s);return null}return n=Xd(n),t&&t[Wo]?t.O(e,n,zo(i)?!!i.capture:!!i,s):bE(t,e,n,!1,i,s)}function bE(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=zo(s)?!!s.capture:!!s,a=Yd(t);if(a||(t[Gd]=a=new fl(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=KN(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)FN||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(SE(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function KN(){function t(n){return e.call(t.src,t.listener,n)}const e=GN;return t}function AE(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)AE(t,e[r],n,i,s);return null}return n=Xd(n),t&&t[Wo]?t.P(e,n,zo(i)?!!i.capture:!!i,s):bE(t,e,n,!0,i,s)}function CE(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)CE(t,e[r],n,i,s);else i=zo(i)?!!i.capture:!!i,n=Xd(n),t&&t[Wo]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=mh(r,n,i,s),-1<n&&(dl(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Yd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mh(e,n,i,s)),(n=-1<t?e[t]:null)&&Qd(n))}function Qd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Wo])ph(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(SE(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Yd(e))?(ph(n,t),n.h==0&&(n.src=null,e[Gd]=null)):dl(t)}}}function SE(t){return t in hu?hu[t]:hu[t]="on"+t}function GN(t,e){if(t.fa)t=!0;else{e=new go(e,this);var n=t.listener,i=t.la||t.src;t.ia&&Qd(t),t=n.call(i,e)}return t}function Yd(t){return t=t[Gd],t instanceof fl?t:null}var du="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xd(t){return typeof t=="function"?t:(t[du]||(t[du]=function(e){return t.handleEvent(e)}),t[du])}function Xe(){bi.call(this),this.i=new fl(this),this.S=this,this.J=null}Je(Xe,bi);Xe.prototype[Wo]=!0;Xe.prototype.removeEventListener=function(t,e,n,i){CE(this,t,e,n,i)};function rt(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new vt(e,t);else if(e instanceof vt)e.target=e.target||t;else{var s=e;e=new vt(i,t),wE(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=va(o,i,!0,e)&&s}if(o=e.g=t,s=va(o,i,!0,e)&&s,s=va(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=va(o,i,!1,e)&&s}Xe.prototype.N=function(){if(Xe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)dl(n[i]);delete t.g[e],t.h--}}this.J=null};Xe.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Xe.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function va(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ph(t.i,o),s=a.call(c,i)!==!1&&s}}return s&&!i.defaultPrevented}var Jd=Y.JSON.stringify;class QN{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function YN(){var t=Zd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class XN{constructor(){this.h=this.g=null}add(e,n){const i=PE.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var PE=new QN(()=>new JN,t=>t.reset());class JN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ZN(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function e1(t){Y.setTimeout(()=>{throw t},0)}let _o,yo=!1,Zd=new XN,kE=()=>{const t=Y.Promise.resolve(void 0);_o=()=>{t.then(t1)}};var t1=()=>{for(var t;t=YN();){try{t.h.call(t.g)}catch(n){e1(n)}var e=PE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}yo=!1};function pl(t,e){Xe.call(this),this.h=t||1,this.g=e||Y,this.j=yt(this.qb,this),this.l=Date.now()}Je(pl,Xe);M=pl.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),rt(this,"tick"),this.ga&&(ef(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ef(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){pl.$.N.call(this),ef(this),delete this.g};function tf(t,e,n){if(typeof t=="function")n&&(t=yt(t,n));else if(t&&typeof t.handleEvent=="function")t=yt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function NE(t){t.g=tf(()=>{t.g=null,t.i&&(t.i=!1,NE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class n1 extends bi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:NE(this)}N(){super.N(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vo(t){bi.call(this),this.h=t,this.g={}}Je(vo,bi);var $m=[];function DE(t,e,n,i){Array.isArray(n)||(n&&($m[0]=n.toString()),n=$m);for(var s=0;s<n.length;s++){var r=RE(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function OE(t){Kd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Qd(e)},t),t.g={}}vo.prototype.N=function(){vo.$.N.call(this),OE(this)};vo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ml(){this.g=!0}ml.prototype.Ea=function(){this.g=!1};function i1(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function s1(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Ts(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+o1(t,n)+(i?" "+i:"")})}function r1(t,e){t.info(function(){return"TIMEOUT: "+e})}ml.prototype.info=function(){};function o1(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Jd(n)}catch{return e}}var rs={},zm=null;function gl(){return zm=zm||new Xe}rs.Ta="serverreachability";function xE(t){vt.call(this,rs.Ta,t)}Je(xE,vt);function Eo(t){const e=gl();rt(e,new xE(e))}rs.STAT_EVENT="statevent";function ME(t,e){vt.call(this,rs.STAT_EVENT,t),this.stat=e}Je(ME,vt);function wt(t){const e=gl();rt(e,new ME(e,t))}rs.Ua="timingevent";function LE(t,e){vt.call(this,rs.Ua,t),this.size=e}Je(LE,vt);function Ho(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var _l={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},VE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function nf(){}nf.prototype.h=null;function Wm(t){return t.h||(t.h=t.i())}function FE(){}var Ko={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function sf(){vt.call(this,"d")}Je(sf,vt);function rf(){vt.call(this,"c")}Je(rf,vt);var gh;function yl(){}Je(yl,nf);yl.prototype.g=function(){return new XMLHttpRequest};yl.prototype.i=function(){return{}};gh=new yl;function Go(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new vo(this),this.P=a1,t=hh?125:void 0,this.V=new pl(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new qE}function qE(){this.i=null,this.g="",this.h=!1}var a1=45e3,_h={},vc={};M=Go.prototype;M.setTimeout=function(t){this.P=t};function yh(t,e,n){t.L=1,t.v=El(Kn(e)),t.s=n,t.S=!0,UE(t,null)}function UE(t,e){t.G=Date.now(),Qo(t),t.A=Kn(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),GE(n.i,"t",i),t.C=0,n=t.l.J,t.h=new qE,t.g=mT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new n1(yt(t.Pa,t,t.g),t.O)),DE(t.U,t.g,"readystatechange",t.nb),e=t.I?IE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Eo(),i1(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&_n(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=_n(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||hh||this.g&&(this.h.h||this.g.ja()||Qm(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Eo(3):Eo(2)),vl(this);var n=this.g.da();this.ca=n;t:if(BE(this)){var i=Qm(this.g);t="";var s=i.length,r=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vi(this),Wr(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,s1(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!mo(a)){var l=a;break t}}l=null}if(n=l)Ts(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vh(this,n);else{this.i=!1,this.o=3,wt(12),Vi(this),Wr(this);break e}}this.S?(jE(this,u,o),hh&&this.i&&u==3&&(DE(this.U,this.V,"tick",this.mb),this.V.start())):(Ts(this.j,this.m,o,null),vh(this,o)),u==4&&Vi(this),this.i&&!this.J&&(u==4?hT(this.l,this):(this.i=!1,Qo(this)))}else S1(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,wt(12)):(this.o=0,wt(13)),Vi(this),Wr(this)}}}catch{}finally{}};function BE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function jE(t,e,n){let i=!0,s;for(;!t.J&&t.C<n.length;)if(s=c1(t,n),s==vc){e==4&&(t.o=4,wt(14),i=!1),Ts(t.j,t.m,null,"[Incomplete Response]");break}else if(s==_h){t.o=4,wt(15),Ts(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Ts(t.j,t.m,s,null),vh(t,s);BE(t)&&s!=vc&&s!=_h&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,wt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),hf(e),e.M=!0,wt(11))):(Ts(t.j,t.m,n,"[Invalid Chunked Response]"),Vi(t),Wr(t))}M.mb=function(){if(this.g){var t=_n(this.g),e=this.g.ja();this.C<e.length&&(vl(this),jE(this,t,e),this.i&&t!=4&&Qo(this))}};function c1(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?vc:(n=Number(e.substring(n,i)),isNaN(n)?_h:(i+=1,i+n>e.length?vc:(e=e.slice(i,i+n),t.C=i+n,e)))}M.cancel=function(){this.J=!0,Vi(this)};function Qo(t){t.Y=Date.now()+t.P,$E(t,t.P)}function $E(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ho(yt(t.lb,t),e)}function vl(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(r1(this.j,this.A),this.L!=2&&(Eo(),wt(17)),Vi(this),this.o=2,Wr(this)):$E(this,this.Y-t)};function Wr(t){t.l.H==0||t.J||hT(t.l,t)}function Vi(t){vl(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,ef(t.V),OE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function vh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Eh(n.i,t))){if(!t.K&&Eh(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ic(n),wl(n);else break e;uf(n),wt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ho(yt(n.ib,n),6e3));if(1>=XE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Fi(n,11)}else if((t.K||n.g==t)&&Ic(n),!mo(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=i.i;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(of(r,r.h),r.h=null))}if(i.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(i.Da=y,De(i.I,i.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=pT(i,i.J?i.pa:null,i.Y),o.K){JE(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.B&&(vl(a),Qo(a)),i.g=o}else lT(i);0<n.j.length&&Rl(n)}else l[0]!="stop"&&l[0]!="close"||Fi(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Fi(n,7):lf(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Eo(4)}catch{}}function l1(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ul(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function u1(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ul(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function zE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ul(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=u1(t),i=l1(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var WE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function h1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Wi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Wi){this.h=t.h,Ec(this,t.j),this.s=t.s,this.g=t.g,Tc(this,t.m),this.l=t.l;var e=t.i,n=new To;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Hm(this,n),this.o=t.o}else t&&(e=String(t).match(WE))?(this.h=!1,Ec(this,e[1]||"",!0),this.s=Dr(e[2]||""),this.g=Dr(e[3]||"",!0),Tc(this,e[4]),this.l=Dr(e[5]||"",!0),Hm(this,e[6]||"",!0),this.o=Dr(e[7]||"")):(this.h=!1,this.i=new To(null,this.h))}Wi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Or(e,Km,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Or(e,Km,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Or(n,n.charAt(0)=="/"?p1:f1,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Or(n,g1)),t.join("")};function Kn(t){return new Wi(t)}function Ec(t,e,n){t.j=n?Dr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Tc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Hm(t,e,n){e instanceof To?(t.i=e,_1(t.i,t.h)):(n||(e=Or(e,m1)),t.i=new To(e,t.h))}function De(t,e,n){t.i.set(e,n)}function El(t){return De(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Dr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Or(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,d1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function d1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Km=/[#\/\?@]/g,f1=/[#\?:]/g,p1=/[#\?]/g,m1=/[#\?@]/g,g1=/#/g;function To(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ai(t){t.g||(t.g=new Map,t.h=0,t.i&&h1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=To.prototype;M.add=function(t,e){Ai(this),this.i=null,t=hr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function HE(t,e){Ai(t),e=hr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function KE(t,e){return Ai(t),e=hr(t,e),t.g.has(e)}M.forEach=function(t,e){Ai(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};M.ta=function(){Ai(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};M.Z=function(t){Ai(this);let e=[];if(typeof t=="string")KE(this,t)&&(e=e.concat(this.g.get(hr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return Ai(this),this.i=null,t=hr(this,t),KE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function GE(t,e,n){HE(t,e),0<n.length&&(t.i=null,t.g.set(hr(t,e),Wd(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function hr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function _1(t,e){e&&!t.j&&(Ai(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(HE(this,i),GE(this,s,n))},t)),t.j=e}var y1=class{constructor(t,e){this.g=t,this.map=e}};function QE(t){this.l=t||v1,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ka&&Y.g.Ka()&&Y.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var v1=10;function YE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function XE(t){return t.h?1:t.g?t.g.size:0}function Eh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function of(t,e){t.g?t.g.add(e):t.h=e}function JE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}QE.prototype.cancel=function(){if(this.i=ZE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ZE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Wd(t.i)}var E1=class{stringify(t){return Y.JSON.stringify(t,void 0)}parse(t){return Y.JSON.parse(t,void 0)}};function T1(){this.g=new E1}function I1(t,e,n){const i=n||"";try{zE(t,function(s,r){let o=s;zo(s)&&(o=Jd(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function w1(t,e){const n=new ml;if(Y.Image){const i=new Image;i.onload=ya(Ea,n,i,"TestLoadImage: loaded",!0,e),i.onerror=ya(Ea,n,i,"TestLoadImage: error",!1,e),i.onabort=ya(Ea,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=ya(Ea,n,i,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Ea(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Yo(t){this.l=t.ec||null,this.j=t.ob||!1}Je(Yo,nf);Yo.prototype.g=function(){return new Tl(this.l,this.j)};Yo.prototype.i=function(t){return function(){return t}}({});function Tl(t,e){Xe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=af,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Je(Tl,Xe);var af=0;M=Tl.prototype;M.open=function(t,e){if(this.readyState!=af)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Io(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Y).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xo(this)),this.readyState=af};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Io(this)),this.g&&(this.readyState=3,Io(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;eT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function eT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Xo(this):Io(this),this.readyState==3&&eT(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,Xo(this))};M.Ya=function(t){this.g&&(this.response=t,Xo(this))};M.ka=function(){this.g&&Xo(this)};function Xo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Io(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Io(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Tl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var R1=Y.JSON.parse;function Fe(t){Xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=tT,this.L=this.M=!1}Je(Fe,Xe);var tT="",b1=/^https?$/i,A1=["POST","PUT"];M=Fe.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():gh.g(),this.C=this.u?Wm(this.u):Wm(gh),this.g.onreadystatechange=yt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Gm(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=Y.FormData&&t instanceof Y.FormData,!(0<=yE(A1,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{sT(this),0<this.B&&((this.L=C1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=yt(this.ua,this)):this.A=tf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Gm(this,r)}};function C1(t){return $s&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof zd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,rt(this,"timeout"),this.abort(8))};function Gm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,nT(t),Il(t)}function nT(t){t.F||(t.F=!0,rt(t,"complete"),rt(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,rt(this,"complete"),rt(this,"abort"),Il(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Il(this,!0)),Fe.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?iT(this):this.kb())};M.kb=function(){iT(this)};function iT(t){if(t.h&&typeof zd<"u"&&(!t.C[1]||_n(t)!=4||t.da()!=2)){if(t.v&&_n(t)==4)tf(t.La,0,t);else if(rt(t,"readystatechange"),_n(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.I).match(WE)[1]||null;!s&&Y.self&&Y.self.location&&(s=Y.self.location.protocol.slice(0,-1)),i=!b1.test(s?s.toLowerCase():"")}n=i}if(n)rt(t,"complete"),rt(t,"success");else{t.m=6;try{var r=2<_n(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",nT(t)}}finally{Il(t)}}}}function Il(t,e){if(t.g){sT(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||rt(t,"ready");try{n.onreadystatechange=i}catch{}}}function sT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function _n(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),R1(e)}};function Qm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case tT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function S1(t){const e={};t=(t.g&&2<=_n(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(mo(t[i]))continue;var n=ZN(t[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}HN(e,function(i){return i.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function rT(t){let e="";return Kd(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function cf(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=rT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):De(t,e,n))}function wr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function oT(t){this.Ga=0,this.j=[],this.l=new ml,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=wr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=wr("baseRetryDelayMs",5e3,t),this.hb=wr("retryDelaySeedMs",1e4,t),this.eb=wr("forwardChannelMaxRetries",2,t),this.xa=wr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new QE(t&&t.concurrentRequestLimit),this.Ja=new T1,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=oT.prototype;M.ra=8;M.H=1;function lf(t){if(aT(t),t.H==3){var e=t.W++,n=Kn(t.I);if(De(n,"SID",t.K),De(n,"RID",e),De(n,"TYPE","terminate"),Jo(t,n),e=new Go(t,t.l,e),e.L=2,e.v=El(Kn(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon)try{n=Y.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=mT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Qo(e)}fT(t)}function wl(t){t.g&&(hf(t),t.g.cancel(),t.g=null)}function aT(t){wl(t),t.u&&(Y.clearTimeout(t.u),t.u=null),Ic(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function Rl(t){if(!YE(t.i)&&!t.m){t.m=!0;var e=t.Na;_o||kE(),yo||(_o(),yo=!0),Zd.add(e,t),t.C=0}}function P1(t,e){return XE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ho(yt(t.Na,t,e),dT(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Go(this,this.l,t);let r=this.s;if(this.U&&(r?(r=IE(r),wE(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=cT(this,s,e),n=Kn(this.I),De(n,"RID",t),De(n,"CVER",22),this.F&&De(n,"X-HTTP-Session-Id",this.F),Jo(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(rT(r)))+"&"+e:this.o&&cf(n,this.o,r)),of(this.i,s),this.bb&&De(n,"TYPE","init"),this.P?(De(n,"$req",e),De(n,"SID","null"),s.aa=!0,yh(s,n,null)):yh(s,n,e),this.H=2}}else this.H==3&&(t?Ym(this,t):this.j.length==0||YE(this.i)||Ym(this))};function Ym(t,e){var n;e?n=e.m:n=t.W++;const i=Kn(t.I);De(i,"SID",t.K),De(i,"RID",n),De(i,"AID",t.V),Jo(t,i),t.o&&t.s&&cf(i,t.o,t.s),n=new Go(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=cT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),of(t.i,n),yh(n,i,e)}function Jo(t,e){t.na&&Kd(t.na,function(n,i){De(e,i,n)}),t.h&&zE({},function(n,i){De(e,i,n)})}function cT(t,e,n){n=Math.min(t.j.length,n);var i=t.h?yt(t.h.Va,t.h,t):null;e:{var s=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=r,0>l)r=Math.max(0,s[c].g-100),a=!1;else try{I1(u,o,"req"+l+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function lT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;_o||kE(),yo||(_o(),yo=!0),Zd.add(e,t),t.A=0}}function uf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ho(yt(t.Ma,t),dT(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,uT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ho(yt(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,wt(10),wl(this),uT(this))};function hf(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function uT(t){t.g=new Go(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Kn(t.wa);De(e,"RID","rpc"),De(e,"SID",t.K),De(e,"AID",t.V),De(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&De(e,"TO",t.qa),De(e,"TYPE","xmlhttp"),Jo(t,e),t.o&&t.s&&cf(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=El(Kn(e)),n.s=null,n.S=!0,UE(n,t)}M.ib=function(){this.v!=null&&(this.v=null,wl(this),uf(this),wt(19))};function Ic(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function hT(t,e){var n=null;if(t.g==e){Ic(t),hf(t),t.g=null;var i=2}else if(Eh(t.i,e))n=e.F,JE(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=gl(),rt(i,new LE(i,n)),Rl(t)}else lT(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&P1(t,e)||i==2&&uf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Fi(t,5);break;case 4:Fi(t,10);break;case 3:Fi(t,6);break;default:Fi(t,2)}}}function dT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Fi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=yt(t.pb,t);n||(n=new Wi("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||Ec(n,"https"),El(n)),w1(n.toString(),i)}else wt(2);t.H=0,t.h&&t.h.za(e),fT(t),aT(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),wt(2)):(this.l.info("Failed to ping google.com"),wt(1))};function fT(t){if(t.H=0,t.ma=[],t.h){const e=ZE(t.i);(e.length!=0||t.j.length!=0)&&(Um(t.ma,e),Um(t.ma,t.j),t.i.i.length=0,Wd(t.j),t.j.length=0),t.h.ya()}}function pT(t,e,n){var i=n instanceof Wi?Kn(n):new Wi(n);if(i.g!="")e&&(i.g=e+"."+i.g),Tc(i,i.m);else{var s=Y.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Wi(null);i&&Ec(r,i),e&&(r.g=e),s&&Tc(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&De(i,n,e),De(i,"VER",t.ra),Jo(t,i),i}function mT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Fe(new Yo({ob:!0})):new Fe(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function gT(){}M=gT.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function wc(){if($s&&!(10<=Number(jN)))throw Error("Environmental error: no available transport.")}wc.prototype.g=function(t,e){return new Lt(t,e)};function Lt(t,e){Xe.call(this),this.g=new oT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!mo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!mo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new dr(this)}Je(Lt,Xe);Lt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;wt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=pT(t,null,t.Y),Rl(t)};Lt.prototype.close=function(){lf(this.g)};Lt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Jd(t),t=n);e.j.push(new y1(e.fb++,t)),e.H==3&&Rl(e)};Lt.prototype.N=function(){this.g.h=null,delete this.j,lf(this.g),delete this.g,Lt.$.N.call(this)};function _T(t){sf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Je(_T,sf);function yT(){rf.call(this),this.status=1}Je(yT,rf);function dr(t){this.g=t}Je(dr,gT);dr.prototype.Ba=function(){rt(this.g,"a")};dr.prototype.Aa=function(t){rt(this.g,new _T(t))};dr.prototype.za=function(t){rt(this.g,new yT)};dr.prototype.ya=function(){rt(this.g,"b")};function k1(){this.blockSize=-1}function rn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Je(rn,k1);rn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function fu(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}rn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)fu(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){fu(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){fu(this,i),s=0;break}}this.h=s,this.i+=e};rn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function Te(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var N1={};function df(t){return-128<=t&&128>t?qN(t,function(e){return new Te([e|0],0>e?-1:0)}):new Te([t|0],0>t?-1:0)}function yn(t){if(isNaN(t)||!isFinite(t))return Ds;if(0>t)return nt(yn(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Th;return new Te(e,0)}function vT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return nt(vT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=yn(Math.pow(e,8)),i=Ds,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=yn(Math.pow(e,r)),i=i.R(r).add(yn(o))):(i=i.R(n),i=i.add(yn(o)))}return i}var Th=4294967296,Ds=df(0),Ih=df(1),Xm=df(16777216);M=Te.prototype;M.ea=function(){if(Bt(this))return-nt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Th+i)*e,e*=Th}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Bn(this))return"0";if(Bt(this))return"-"+nt(this).toString(t);for(var e=yn(Math.pow(t,6)),n=this,i="";;){var s=bc(n,e).g;n=Rc(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Bn(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Bn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Bt(t){return t.h==-1}M.X=function(t){return t=Rc(this,t),Bt(t)?-1:Bn(t)?0:1};function nt(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new Te(n,~t.h).add(Ih)}M.abs=function(){return Bt(this)?nt(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new Te(n,n[n.length-1]&-2147483648?-1:0)};function Rc(t,e){return t.add(nt(e))}M.R=function(t){if(Bn(this)||Bn(t))return Ds;if(Bt(this))return Bt(t)?nt(this).R(nt(t)):nt(nt(this).R(t));if(Bt(t))return nt(this.R(nt(t)));if(0>this.X(Xm)&&0>t.X(Xm))return yn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*i+2*s]+=o*c,Ta(n,2*i+2*s),n[2*i+2*s+1]+=r*c,Ta(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,Ta(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,Ta(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new Te(n,0)};function Ta(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Rr(t,e){this.g=t,this.h=e}function bc(t,e){if(Bn(e))throw Error("division by zero");if(Bn(t))return new Rr(Ds,Ds);if(Bt(t))return e=bc(nt(t),e),new Rr(nt(e.g),nt(e.h));if(Bt(e))return e=bc(t,nt(e)),new Rr(nt(e.g),e.h);if(30<t.g.length){if(Bt(t)||Bt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ih,i=e;0>=i.X(t);)n=Jm(n),i=Jm(i);var s=ps(n,1),r=ps(i,1);for(i=ps(i,2),n=ps(n,2);!Bn(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=ps(i,1),n=ps(n,1)}return e=Rc(t,s.R(e)),new Rr(s,e)}for(s=Ds;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=yn(n),o=r.R(e);Bt(o)||0<o.X(t);)n-=i,r=yn(n),o=r.R(e);Bn(r)&&(r=Ih),s=s.add(r),t=Rc(t,o)}return new Rr(s,t)}M.gb=function(t){return bc(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new Te(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new Te(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new Te(n,this.h^t.h)};function Jm(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new Te(n,t.h)}function ps(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new Te(s,t.h)}wc.prototype.createWebChannel=wc.prototype.g;Lt.prototype.send=Lt.prototype.u;Lt.prototype.open=Lt.prototype.m;Lt.prototype.close=Lt.prototype.close;_l.NO_ERROR=0;_l.TIMEOUT=8;_l.HTTP_ERROR=6;VE.COMPLETE="complete";FE.EventType=Ko;Ko.OPEN="a";Ko.CLOSE="b";Ko.ERROR="c";Ko.MESSAGE="d";Xe.prototype.listen=Xe.prototype.O;Fe.prototype.listenOnce=Fe.prototype.P;Fe.prototype.getLastError=Fe.prototype.Sa;Fe.prototype.getLastErrorCode=Fe.prototype.Ia;Fe.prototype.getStatus=Fe.prototype.da;Fe.prototype.getResponseJson=Fe.prototype.Wa;Fe.prototype.getResponseText=Fe.prototype.ja;Fe.prototype.send=Fe.prototype.ha;Fe.prototype.setWithCredentials=Fe.prototype.Oa;rn.prototype.digest=rn.prototype.l;rn.prototype.reset=rn.prototype.reset;rn.prototype.update=rn.prototype.j;Te.prototype.add=Te.prototype.add;Te.prototype.multiply=Te.prototype.R;Te.prototype.modulo=Te.prototype.gb;Te.prototype.compare=Te.prototype.X;Te.prototype.toNumber=Te.prototype.ea;Te.prototype.toString=Te.prototype.toString;Te.prototype.getBits=Te.prototype.D;Te.fromNumber=yn;Te.fromString=vT;var D1=function(){return new wc},O1=function(){return gl()},pu=_l,x1=VE,M1=rs,Zm={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},L1=Yo,Ia=FE,V1=Fe,F1=rn,Os=Te;const eg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let fr="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new Mo("@firebase/firestore");function br(){return Zi.logLevel}function F(t,...e){if(Zi.logLevel<=re.DEBUG){const n=e.map(ff);Zi.debug(`Firestore (${fr}): ${t}`,...n)}}function Gn(t,...e){if(Zi.logLevel<=re.ERROR){const n=e.map(ff);Zi.error(`Firestore (${fr}): ${t}`,...n)}}function zs(t,...e){if(Zi.logLevel<=re.WARN){const n=e.map(ff);Zi.warn(`Firestore (${fr}): ${t}`,...n)}}function ff(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${fr}) INTERNAL ASSERTION FAILED: `+t;throw Gn(e),new Error(e)}function Oe(t,e){t||Q()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class q1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class U1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class B1{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let r=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new zn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Oe(typeof i.accessToken=="string"),new ET(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new ht(e)}}class j1{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $1{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new j1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class z1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class W1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=r=>{r.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string"),this.R=n.token,new z1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=H1(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function me(t,e){return t<e?-1:t>e?1:0}function Ws(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new $e(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new $e(0,0))}static max(){return new X(new $e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n,i){n===void 0?n=0:n>e.length&&Q(),i===void 0?i=e.length-n:i>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return wo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wo?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Me extends wo{construct(e,n,i){return new Me(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new B(R.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new Me(n)}static emptyPath(){return new Me([])}}const K1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends wo{construct(e,n,i){return new st(e,n,i)}static isValidIdentifier(e){return K1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new B(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new B(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new B(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Me.fromString(e))}static fromName(e){return new H(Me.fromString(e).popFirst(5))}static empty(){return new H(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Me(e.slice()))}}function G1(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=X.fromTimestamp(i===1e9?new $e(n+1,0):new $e(n,i));return new Ti(s,H.empty(),e)}function Q1(t){return new Ti(t.readTime,t.key,-1)}class Ti{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Ti(X.min(),H.empty(),-1)}static max(){return new Ti(X.max(),H.empty(),-1)}}function Y1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class J1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==X1)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,i)=>{n(e)})}static reject(e){return new C((n,i)=>{i(e)})}static waitFor(e){return new C((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},c=>i(c))}),o=!0,r===s&&n()})}static or(e){let n=C.resolve(!1);for(const i of e)n=n.next(s=>s?C.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new C((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,n){return new C((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function ea(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class pf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.se(i),this.oe=i=>n.writeSequenceNumber(i))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}pf._e=-1;function bl(t){return t==null}function Ac(t){return t===0&&1/t==-1/0}function Z1(t){return typeof t=="number"&&Number.isInteger(t)&&!Ac(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function pr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function IT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wa(this.root,e,this.comparator,!1)}getReverseIterator(){return new wa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wa(this.root,e,this.comparator,!0)}}class wa{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??et.RED,this.left=s??et.EMPTY,this.right=r??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new et(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,i,s,r){return this}insert(e,n,i){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ng(this.data.getIterator())}getIteratorFrom(e){return new ng(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class ng{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new ot(st.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ws(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class Tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new wT("Invalid base64 string: "+r):r}}(e);return new Tt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(e);return new Tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const eD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ii(t){if(Oe(!!t),typeof t=="string"){let e=0;const n=eD.exec(t);if(Oe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function es(t){return typeof t=="string"?Tt.fromBase64String(t):Tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function gf(t){const e=t.mapValue.fields.__previous_value__;return mf(e)?gf(e):e}function Ro(t){const e=Ii(t.mapValue.fields.__local_write_time__.timestampValue);return new $e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e,n,i,s,r,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class bo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new bo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ts(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mf(t)?4:nD(t)?9007199254740991:10:Q()}function Cn(t,e){if(t===e)return!0;const n=ts(t);if(n!==ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ro(t).isEqual(Ro(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=Ii(s.timestampValue),a=Ii(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return es(s.bytesValue).isEqual(es(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return je(s.geoPointValue.latitude)===je(r.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return je(s.integerValue)===je(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=je(s.doubleValue),a=je(r.doubleValue);return o===a?Ac(o)===Ac(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ws(t.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:return function(s,r){const o=s.mapValue.fields||{},a=r.mapValue.fields||{};if(tg(o)!==tg(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Cn(o[c],a[c])))return!1;return!0}(t,e);default:return Q()}}function Ao(t,e){return(t.values||[]).find(n=>Cn(n,e))!==void 0}function Hs(t,e){if(t===e)return 0;const n=ts(t),i=ts(e);if(n!==i)return me(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=je(r.integerValue||r.doubleValue),c=je(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return ig(t.timestampValue,e.timestampValue);case 4:return ig(Ro(t),Ro(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(r,o){const a=es(r),c=es(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=me(a[l],c[l]);if(u!==0)return u}return me(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=me(je(r.latitude),je(o.latitude));return a!==0?a:me(je(r.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Hs(a[l],c[l]);if(u)return u}return me(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===Ra.mapValue&&o===Ra.mapValue)return 0;if(r===Ra.mapValue)return 1;if(o===Ra.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=me(c[h],u[h]);if(d!==0)return d;const f=Hs(a[c[h]],l[u[h]]);if(f!==0)return f}return me(c.length,u.length)}(t.mapValue,e.mapValue);default:throw Q()}}function ig(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=Ii(t),i=Ii(e),s=me(n.seconds,i.seconds);return s!==0?s:me(n.nanos,i.nanos)}function Ks(t){return wh(t)}function wh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=Ii(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return es(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",s=!0;for(const r of n.values||[])s?s=!1:i+=",",i+=wh(r);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${wh(n.fields[o])}`;return s+"}"}(t.mapValue):Q()}function Rh(t){return!!t&&"integerValue"in t}function _f(t){return!!t&&"arrayValue"in t}function sg(t){return!!t&&"nullValue"in t}function rg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ua(t){return!!t&&"mapValue"in t}function Hr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return pr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Hr(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.value=e}static empty(){return new jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Ua(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hr(n)}setAll(e){let n=st.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Hr(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Ua(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Ua(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){pr(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new jt(Hr(this.value))}}function RT(t){const e=[];return pr(t.fields,(n,i)=>{const s=new st([n]);if(Ua(i)){const r=RT(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new mt(e,0,X.min(),X.min(),X.min(),jt.empty(),0)}static newFoundDocument(e,n,i,s){return new mt(e,1,n,X.min(),i,s,0)}static newNoDocument(e,n){return new mt(e,2,n,X.min(),X.min(),jt.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,X.min(),X.min(),jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Cc{constructor(e,n){this.position=e,this.inclusive=n}}function og(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=H.comparator(H.fromName(o.referenceValue),n.key):i=Hs(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function ag(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Sc{constructor(e,n="asc"){this.field=e,this.dir=n}}function iD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class bT{}class We extends bT{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new rD(e,n,i):n==="array-contains"?new cD(e,i):n==="in"?new lD(e,i):n==="not-in"?new uD(e,i):n==="array-contains-any"?new hD(e,i):new We(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new oD(e,i):new aD(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Hs(n,this.value)):n!==null&&ts(this.value)===ts(n)&&this.matchesComparison(Hs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Sn extends bT{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Sn(e,n)}matches(e){return AT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function AT(t){return t.op==="and"}function CT(t){return sD(t)&&AT(t)}function sD(t){for(const e of t.filters)if(e instanceof Sn)return!1;return!0}function bh(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+Ks(t.value);if(CT(t))return t.filters.map(e=>bh(e)).join(",");{const e=t.filters.map(n=>bh(n)).join(",");return`${t.op}(${e})`}}function ST(t,e){return t instanceof We?function(i,s){return s instanceof We&&i.op===s.op&&i.field.isEqual(s.field)&&Cn(i.value,s.value)}(t,e):t instanceof Sn?function(i,s){return s instanceof Sn&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,a)=>r&&ST(o,s.filters[a]),!0):!1}(t,e):void Q()}function PT(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${Ks(n.value)}`}(t):t instanceof Sn?function(n){return n.op.toString()+" {"+n.getFilters().map(PT).join(" ,")+"}"}(t):"Filter"}class rD extends We{constructor(e,n,i){super(e,n,i),this.key=H.fromName(i.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class oD extends We{constructor(e,n){super(e,"in",n),this.keys=kT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class aD extends We{constructor(e,n){super(e,"not-in",n),this.keys=kT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>H.fromName(i.referenceValue))}class cD extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _f(n)&&Ao(n.arrayValue,this.value)}}class lD extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ao(this.value.arrayValue,n)}}class uD extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ao(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ao(this.value.arrayValue,n)}}class hD extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_f(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Ao(this.value.arrayValue,i))}}/**
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
 */class dD{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ce=null}}function cg(t,e=null,n=[],i=[],s=null,r=null,o=null){return new dD(t,e,n,i,s,r,o)}function yf(t){const e=te(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>bh(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),bl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Ks(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Ks(i)).join(",")),e.ce=n}return e.ce}function vf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ST(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ag(t.startAt,e.startAt)&&ag(t.endAt,e.endAt)}function Ah(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function fD(t,e,n,i,s,r,o,a){return new Al(t,e,n,i,s,r,o,a)}function Cl(t){return new Al(t)}function lg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pD(t){return t.collectionGroup!==null}function Kr(t){const e=te(t);if(e.le===null){e.le=[];const n=new Set;for(const r of e.explicitOrderBy)e.le.push(r),n.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ot(st.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.le.push(new Sc(r,i))}),n.has(st.keyField().canonicalString())||e.le.push(new Sc(st.keyField(),i))}return e.le}function Tn(t){const e=te(t);return e.he||(e.he=mD(e,Kr(t))),e.he}function mD(t,e){if(t.limitType==="F")return cg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new Sc(s.field,r)});const n=t.endAt?new Cc(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Cc(t.startAt.position,t.startAt.inclusive):null;return cg(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function Ch(t,e,n){return new Al(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Sl(t,e){return vf(Tn(t),Tn(e))&&t.limitType===e.limitType}function NT(t){return`${yf(Tn(t))}|lt:${t.limitType}`}function ms(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(s=>PT(s)).join(", ")}]`),bl(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(s=>Ks(s)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(s=>Ks(s)).join(",")),`Target(${i})`}(Tn(t))}; limitType=${t.limitType})`}function Pl(t,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):H.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(t,e)&&function(i,s){for(const r of Kr(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(i,s){return!(i.startAt&&!function(o,a,c){const l=og(o,a,c);return o.inclusive?l<=0:l<0}(i.startAt,Kr(i),s)||i.endAt&&!function(o,a,c){const l=og(o,a,c);return o.inclusive?l>=0:l>0}(i.endAt,Kr(i),s))}(t,e)}function gD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function DT(t){return(e,n)=>{let i=!1;for(const s of Kr(t)){const r=_D(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function _D(t,e,n){const i=t.field.isKeyField()?H.comparator(e.key,n.key):function(r,o,a){const c=o.data.field(r),l=a.data.field(r);return c!==null&&l!==null?Hs(c,l):Q()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){pr(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return IT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD=new Ve(H.comparator);function Qn(){return yD}const OT=new Ve(H.comparator);function xr(...t){let e=OT;for(const n of t)e=e.insert(n.key,n);return e}function xT(t){let e=OT;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function qi(){return Gr()}function MT(){return Gr()}function Gr(){return new mr(t=>t.toString(),(t,e)=>t.isEqual(e))}const vD=new Ve(H.comparator),ED=new ot(H.comparator);function oe(...t){let e=ED;for(const n of t)e=e.add(n);return e}const TD=new ot(me);function ID(){return TD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ac(e)?"-0":e}}function VT(t){return{integerValue:""+t}}function wD(t,e){return Z1(e)?VT(e):LT(t,e)}/**
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
 */class kl{constructor(){this._=void 0}}function RD(t,e,n){return t instanceof Pc?function(s,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&mf(r)&&(r=gf(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Co?qT(t,e):t instanceof So?UT(t,e):function(s,r){const o=FT(s,r),a=ug(o)+ug(s.Ie);return Rh(o)&&Rh(s.Ie)?VT(a):LT(s.serializer,a)}(t,e)}function bD(t,e,n){return t instanceof Co?qT(t,e):t instanceof So?UT(t,e):n}function FT(t,e){return t instanceof kc?function(i){return Rh(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class Pc extends kl{}class Co extends kl{constructor(e){super(),this.elements=e}}function qT(t,e){const n=BT(e);for(const i of t.elements)n.some(s=>Cn(s,i))||n.push(i);return{arrayValue:{values:n}}}class So extends kl{constructor(e){super(),this.elements=e}}function UT(t,e){let n=BT(e);for(const i of t.elements)n=n.filter(s=>!Cn(s,i));return{arrayValue:{values:n}}}class kc extends kl{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function ug(t){return je(t.integerValue||t.doubleValue)}function BT(t){return _f(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function AD(t,e){return t.field.isEqual(e.field)&&function(i,s){return i instanceof Co&&s instanceof Co||i instanceof So&&s instanceof So?Ws(i.elements,s.elements,Cn):i instanceof kc&&s instanceof kc?Cn(i.Ie,s.Ie):i instanceof Pc&&s instanceof Pc}(t.transform,e.transform)}class CD{constructor(e,n){this.version=e,this.transformResults=n}}class Wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wn}static exists(e){return new Wn(void 0,e)}static updateTime(e){return new Wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ba(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Nl{}function jT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zT(t.key,Wn.none()):new ta(t.key,t.data,Wn.none());{const n=t.data,i=jt.empty();let s=new ot(st.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new os(t.key,i,new Xt(s.toArray()),Wn.none())}}function SD(t,e,n){t instanceof ta?function(s,r,o){const a=s.value.clone(),c=dg(s.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof os?function(s,r,o){if(!Ba(s.precondition,r))return void r.convertToUnknownDocument(o.version);const a=dg(s.fieldTransforms,r,o.transformResults),c=r.data;c.setAll($T(s)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Qr(t,e,n,i){return t instanceof ta?function(r,o,a,c){if(!Ba(r.precondition,o))return a;const l=r.value.clone(),u=fg(r.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof os?function(r,o,a,c){if(!Ba(r.precondition,o))return a;const l=fg(r.fieldTransforms,c,o),u=o.data;return u.setAll($T(r)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,i):function(r,o,a){return Ba(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function PD(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=FT(i.transform,s||null);r!=null&&(n===null&&(n=jt.empty()),n.set(i.field,r))}return n||null}function hg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Ws(i,s,(r,o)=>AD(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ta extends Nl{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class os extends Nl{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function $T(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function dg(t,e,n){const i=new Map;Oe(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,bD(o,a,n[s]))}return i}function fg(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,RD(r,o,e))}return i}class zT extends Nl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kD extends Nl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&SD(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Qr(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Qr(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=MT();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const c=jT(o,a);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&Ws(this.mutations,e.mutations,(n,i)=>hg(n,i))&&Ws(this.baseMutations,e.baseMutations,(n,i)=>hg(n,i))}}class Ef{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){Oe(e.mutations.length===i.length);let s=function(){return vD}();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Ef(e,n,i,s)}}/**
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
 */class DD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class OD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,ce;function xD(t){switch(t){default:return Q();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function WT(t){if(t===void 0)return Gn("GRPC error has no .code"),R.UNKNOWN;switch(t){case Be.OK:return R.OK;case Be.CANCELLED:return R.CANCELLED;case Be.UNKNOWN:return R.UNKNOWN;case Be.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case Be.INTERNAL:return R.INTERNAL;case Be.UNAVAILABLE:return R.UNAVAILABLE;case Be.UNAUTHENTICATED:return R.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case Be.NOT_FOUND:return R.NOT_FOUND;case Be.ALREADY_EXISTS:return R.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return R.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case Be.ABORTED:return R.ABORTED;case Be.OUT_OF_RANGE:return R.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return R.UNIMPLEMENTED;case Be.DATA_LOSS:return R.DATA_LOSS;default:return Q()}}(ce=Be||(Be={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function MD(){return new TextEncoder}/**
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
 */const LD=new Os([4294967295,4294967295],0);function pg(t){const e=MD().encode(t),n=new F1;return n.update(e),new Uint8Array(n.digest())}function mg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Os([n,i],0),new Os([s,r],0)]}class Tf{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Mr(`Invalid padding: ${n}`);if(i<0)throw new Mr(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Mr(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new Mr(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Os.fromNumber(this.Te)}de(e,n,i){let s=e.add(n.multiply(Os.fromNumber(i)));return s.compare(LD)===1&&(s=new Os([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=pg(e),[i,s]=mg(n);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);if(!this.Ae(o))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Tf(r,s,n);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=pg(e),[i,s]=mg(n);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);this.Re(o)}}Re(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class Mr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,na.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Dl(X.min(),s,new Ve(me),Qn(),oe())}}class na{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new na(i,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n,i,s){this.Ve=e,this.removedTargetIds=n,this.key=i,this.me=s}}class HT{constructor(e,n){this.targetId=e,this.fe=n}}class KT{constructor(e,n,i=Tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class gg{constructor(){this.ge=0,this.pe=yg(),this.ye=Tt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=oe(),n=oe(),i=oe();return this.pe.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:Q()}}),new na(this.ye,this.we,e,n,i)}Fe(){this.Se=!1,this.pe=yg()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class VD{constructor(e){this.Le=e,this.ke=new Map,this.qe=Qn(),this.Qe=_g(),this.Ke=new Ve(me)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const i=this.ze(n);switch(e.state){case 0:this.je(n)&&i.Ce(e.resumeToken);break;case 1:i.Ne(),i.be||i.Fe(),i.Ce(e.resumeToken);break;case 2:i.Ne(),i.be||this.removeTarget(n);break;case 3:this.je(n)&&(i.Be(),i.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),i.Ce(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((i,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,i=e.fe.count,s=this.Ye(n);if(s){const r=s.target;if(Ah(r))if(i===0){const o=new H(r.path);this.We(n,o,mt.newNoDocument(o,X.min()))}else Oe(i===1);else{const o=this.Ze(n);if(o!==i){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=n;let o,a;try{o=es(i).toUint8Array()}catch(c){if(c instanceof wT)return zs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Tf(o,s,r)}catch(c){return zs(c instanceof Mr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,i){return n.fe.count===i-this.rt(e,n.targetId)?0:2}rt(e,n){const i=this.Le.getRemoteKeysForTarget(n);let s=0;return i.forEach(r=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.We(n,r,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((r,o)=>{const a=this.Ye(o);if(a){if(r.current&&Ah(a.target)){const c=new H(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,mt.newNoDocument(c,e))}r.De&&(n.set(o,r.ve()),r.Fe())}});let i=oe();this.Qe.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(r))}),this.qe.forEach((r,o)=>o.setReadTime(e));const s=new Dl(e,n,this.Ke,this.qe,i);return this.qe=Qn(),this.Qe=_g(),this.Ke=new Ve(me),s}Ue(e,n){if(!this.je(e))return;const i=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,i),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,i){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),i&&(this.qe=this.qe.insert(n,i))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new gg,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new ot(me),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new gg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function _g(){return new Ve(H.comparator)}function yg(){return new Ve(H.comparator)}const FD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),UD=(()=>({and:"AND",or:"OR"}))();class BD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sh(t,e){return t.useProto3Json||bl(e)?e:{value:e}}function Nc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function GT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function jD(t,e){return Nc(t,e.toTimestamp())}function In(t){return Oe(!!t),X.fromTimestamp(function(n){const i=Ii(n);return new $e(i.seconds,i.nanos)}(t))}function If(t,e){return function(i){return new Me(["projects",i.projectId,"databases",i.database])}(t).child("documents").child(e).canonicalString()}function QT(t){const e=Me.fromString(t);return Oe(ZT(e)),e}function Ph(t,e){return If(t.databaseId,e.path)}function mu(t,e){const n=QT(e);if(n.get(1)!==t.databaseId.projectId)throw new B(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(YT(n))}function kh(t,e){return If(t.databaseId,e)}function $D(t){const e=QT(t);return e.length===4?Me.emptyPath():YT(e)}function Nh(t){return new Me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function YT(t){return Oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function vg(t,e,n){return{name:Ph(t,e),fields:n.value.mapValue.fields}}function zD(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,u){return l.useProto3Json?(Oe(u===void 0||typeof u=="string"),Tt.fromBase64String(u||"")):(Oe(u===void 0||u instanceof Uint8Array),Tt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?R.UNKNOWN:WT(l.code);return new B(u,l.message||"")}(o);n=new KT(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=mu(t,i.document.name),r=In(i.document.updateTime),o=i.document.createTime?In(i.document.createTime):X.min(),a=new jt({mapValue:{fields:i.document.fields}}),c=mt.newFoundDocument(s,r,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new ja(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=mu(t,i.document),r=i.readTime?In(i.readTime):X.min(),o=mt.newNoDocument(s,r),a=i.removedTargetIds||[];n=new ja([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=mu(t,i.document),r=i.removedTargetIds||[];n=new ja([],r,s,null)}else{if(!("filter"in e))return Q();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new OD(s,r),a=i.targetId;n=new HT(a,o)}}return n}function WD(t,e){let n;if(e instanceof ta)n={update:vg(t,e.key,e.value)};else if(e instanceof zT)n={delete:Ph(t,e.key)};else if(e instanceof os)n={update:vg(t,e.key,e.data),updateMask:eO(e.fieldMask)};else{if(!(e instanceof kD))return Q();n={verify:Ph(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,o){const a=o.transform;if(a instanceof Pc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Co)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof So)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof kc)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw Q()}(0,i))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:jD(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Q()}(t,e.precondition)),n}function HD(t,e){return t&&t.length>0?(Oe(e!==void 0),t.map(n=>function(s,r){let o=s.updateTime?In(s.updateTime):In(r);return o.isEqual(X.min())&&(o=In(r)),new CD(o,s.transformResults||[])}(n,e))):[]}function KD(t,e){return{documents:[kh(t,e.path)]}}function GD(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=kh(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=kh(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(c){if(c.length!==0)return JT(Sn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:gs(h.field),direction:XD(h.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Sh(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function QD(t){let e=$D(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Oe(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(h){const d=XT(h);return d instanceof Sn&&CT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new Sc(_s(g.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,bl(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new Cc(f,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new Cc(f,d)}(n.endAt)),fD(e,s,o,r,a,"F",c,l)}function YD(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function XT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=_s(n.unaryFilter.field);return We.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=_s(n.unaryFilter.field);return We.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=_s(n.unaryFilter.field);return We.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_s(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return We.create(_s(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Sn.create(n.compositeFilter.filters.map(i=>XT(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function XD(t){return FD[t]}function JD(t){return qD[t]}function ZD(t){return UD[t]}function gs(t){return{fieldPath:t.canonicalString()}}function _s(t){return st.fromServerFormat(t.fieldPath)}function JT(t){return t instanceof We?function(n){if(n.op==="=="){if(rg(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NAN"}};if(sg(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(rg(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NOT_NAN"}};if(sg(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gs(n.field),op:JD(n.op),value:n.value}}}(t):t instanceof Sn?function(n){const i=n.getFilters().map(s=>JT(s));return i.length===1?i[0]:{compositeFilter:{op:ZD(n.op),filters:i}}}(t):Q()}function eO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ZT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,i,s,r=X.min(),o=X.min(),a=Tt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new ci(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e){this.ut=e}}function nO(t){const e=QD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ch(e,e.limit,"L"):e}/**
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
 */class iO{constructor(){this.on=new sO}addToCollectionParentIndex(e,n){return this.on.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Ti.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Ti.min())}updateCollectionGroup(e,n,i){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class sO{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new ot(Me.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new ot(Me.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Gs(0)}static Nn(){return new Gs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(){this.changes=new mr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?C.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class oO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&Qr(i.mutation,s,Xt.empty(),$e.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,oe()).next(()=>i))}getLocalViewOfDocuments(e,n,i=oe()){const s=qi();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=xr();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=qi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,oe()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=Qn();const o=Gr(),a=function(){return Gr()}();return n.forEach((c,l)=>{const u=i.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof os)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Qr(u.mutation,l,u.mutation.getFieldMask(),$e.now())):o.set(l.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new oO(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Gr();let s=new Ve((o,a)=>o-a),r=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=i.get(c)||Xt.empty();u=a.applyToLocalView(l,u),i.set(c,u);const h=(s.get(a.batchId)||oe()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=MT();u.forEach(d=>{if(!r.has(d)){const f=jT(n.get(d),i.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return C.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,s){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,s):this.getDocumentsMatchingCollectionQuery(e,n,i,s)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):C.resolve(qi());let a=-1,c=r;return o.next(l=>C.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?C.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,oe())).next(u=>({batchId:a,changes:xT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(i=>{let s=xr();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i,s){const r=n.collectionGroup;let o=xr();return this.indexManager.getCollectionParents(e,r).next(a=>C.forEach(a,c=>{const l=function(h,d){return new Al(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,i,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,r,s))).next(o=>{r.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,mt.newInvalidDocument(u)))});let a=xr();return o.forEach((c,l)=>{const u=r.get(c);u!==void 0&&Qr(u.mutation,l,Xt.empty(),$e.now()),Pl(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return C.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:In(s.createTime)}}(n)),C.resolve()}getNamedQuery(e,n){return C.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:nO(s.bundledQuery),readTime:In(s.readTime)}}(n)),C.resolve()}}/**
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
 */class lO{constructor(){this.overlays=new Ve(H.comparator),this.lr=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const i=qi();return C.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.lt(e,n,r)}),C.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.lr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.lr.delete(i)),C.resolve()}getOverlaysForCollection(e,n,i){const s=qi(),r=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return C.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new Ve((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>i){let u=r.get(l.largestBatchId);u===null&&(u=qi(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=qi(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return C.resolve(a)}lt(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(i.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new DD(n,i));let r=this.lr.get(n);r===void 0&&(r=oe(),this.lr.set(n,r)),this.lr.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.hr=new ot(Ge.Pr),this.Ir=new ot(Ge.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const i=new Ge(e,n);this.hr=this.hr.add(i),this.Ir=this.Ir.add(i)}Er(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.dr(new Ge(e,n))}Ar(e,n){e.forEach(i=>this.removeReference(i,n))}Rr(e){const n=new H(new Me([])),i=new Ge(n,e),s=new Ge(n,e+1),r=[];return this.Ir.forEachInRange([i,s],o=>{this.dr(o),r.push(o.key)}),r}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new H(new Me([])),i=new Ge(n,e),s=new Ge(n,e+1);let r=oe();return this.Ir.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ge(e,0),i=this.hr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Ge{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return H.comparator(e.key,n.key)||me(e.gr,n.gr)}static Tr(e,n){return me(e.gr,n.gr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new ot(Ge.Pr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ND(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new Ge(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.Sr(i),r=s<0?0:s;return C.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Ge(n,0),s=new Ge(n,Number.POSITIVE_INFINITY),r=[];return this.yr.forEachInRange([i,s],o=>{const a=this.wr(o.gr);r.push(a)}),C.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new ot(me);return n.forEach(s=>{const r=new Ge(s,0),o=new Ge(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([r,o],a=>{i=i.add(a.gr)})}),C.resolve(this.br(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;H.isDocumentKey(r)||(r=r.child(""));const o=new Ge(new H(r),0);let a=new ot(me);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),C.resolve(this.br(a))}br(e){const n=[];return e.forEach(i=>{const s=this.wr(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Oe(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.yr;return C.forEach(n.mutations,s=>{const r=new Ge(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=i})}Fn(e){}containsKey(e,n){const i=new Ge(n,0),s=this.yr.firstAfterOrEqual(i);return C.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e){this.Cr=e,this.docs=function(){return new Ve(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return C.resolve(i?i.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let i=Qn();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():mt.newInvalidDocument(s))}),C.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=Qn();const o=n.path,a=new H(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Y1(Q1(u),i)<=0||(s.has(u.key)||Pl(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return C.resolve(r)}getAllFromCollectionGroup(e,n,i,s){Q()}vr(e,n){return C.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new dO(this)}getSize(e){return C.resolve(this.size)}}class dO extends rO{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(i)}),C.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e){this.persistence=e,this.Fr=new mr(n=>yf(n),vf),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Mr=0,this.Or=new wf,this.targetCount=0,this.Nr=Gs.On()}forEachTarget(e,n){return this.Fr.forEach((i,s)=>n(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Mr&&(this.Mr=n),C.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Gs(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.kn(n),C.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Fr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),C.waitFor(r).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const i=this.Fr.get(n)||null;return C.resolve(i)}addMatchingKeys(e,n,i){return this.Or.Er(n,i),C.resolve()}removeMatchingKeys(e,n,i){this.Or.Ar(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),C.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),C.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Or.mr(n);return C.resolve(i)}containsKey(e,n){return C.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e,n){this.Br={},this.overlays={},this.Lr=new pf(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new fO(this),this.indexManager=new iO,this.remoteDocumentCache=function(s){return new hO(s)}(i=>this.referenceDelegate.Qr(i)),this.serializer=new tO(n),this.Kr=new cO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Br[e.toKey()];return i||(i=new uO(n,this.referenceDelegate),this.Br[e.toKey()]=i),i}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,i){F("MemoryPersistence","Starting transaction:",e);const s=new mO(this.Lr.next());return this.referenceDelegate.$r(),i(s).next(r=>this.referenceDelegate.Ur(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Wr(e,n){return C.or(Object.values(this.Br).map(i=>()=>i.containsKey(e,n)))}}class mO extends J1{constructor(e){super(),this.currentSequenceNumber=e}}class Rf{constructor(e){this.persistence=e,this.Gr=new wf,this.zr=null}static jr(e){return new Rf(e)}get Hr(){if(this.zr)return this.zr;throw Q()}addReference(e,n,i){return this.Gr.addReference(i,n),this.Hr.delete(i.toString()),C.resolve()}removeReference(e,n,i){return this.Gr.removeReference(i,n),this.Hr.add(i.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),C.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.Hr.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Hr,i=>{const s=H.fromPath(i);return this.Jr(e,s).next(r=>{r||n.removeEntry(s,X.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(i=>{i?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return C.or([()=>C.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class _O{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,i,s){const r={result:null};return this.zi(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.ji(e,n,s,i).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new gO;return this.Hi(e,n,o).next(a=>{if(r.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>r.result)}Ji(e,n,i,s){return i.documentReadCount<this.Ui?(br()<=re.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",ms(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),C.resolve()):(br()<=re.DEBUG&&F("QueryEngine","Query:",ms(n),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Wi*s?(br()<=re.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",ms(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tn(n))):C.resolve())}zi(e,n){if(lg(n))return C.resolve(null);let i=Tn(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ch(n,null,"F"),i=Tn(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=oe(...r);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,Ch(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,i,s){return lg(n)||s.isEqual(X.min())?C.resolve(null):this.Gi.getDocuments(e,i).next(r=>{const o=this.Yi(n,r);return this.Zi(n,o,i,s)?C.resolve(null):(br()<=re.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ms(n)),this.Xi(e,o,n,G1(s,-1)).next(a=>a))})}Yi(e,n){let i=new ot(DT(e));return n.forEach((s,r)=>{Pl(e,r)&&(i=i.add(r))}),i}Zi(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Hi(e,n,i){return br()<=re.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",ms(n)),this.Gi.getDocumentsMatchingQuery(e,n,Ti.min(),i)}Xi(e,n,i,s){return this.Gi.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(e,n,i,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new Ve(me),this.ns=new mr(r=>yf(r),vf),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(i)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new aO(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function vO(t,e,n,i){return new yO(t,e,n,i)}async function eI(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.os(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let c=oe();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(i,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function EO(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let f=C.resolve();return d.forEach(g=>{f=f.next(()=>u.getEntry(c,g)).next(y=>{const v=l.docVersions.get(g);Oe(v!==null),y.version.compareTo(v)<0&&(h.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let c=oe();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function tI(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function TO(t,e){const n=te(t),i=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Tt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,i)),s=s.insert(h,f),function(y,v,I){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,f,u)&&a.push(n.qr.updateTargetData(r,f))});let c=Qn(),l=oe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(IO(r,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!i.isEqual(X.min())){const u=n.qr.getLastRemoteSnapshotVersion(r).next(h=>n.qr.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return C.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.ts=s,r))}function IO(t,e,n){let i=oe(),s=oe();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=Qn();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function wO(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function RO(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.qr.getTargetData(i,e).next(r=>r?(s=r,C.resolve(s)):n.qr.allocateTargetId(i).next(o=>(s=new ci(e,o,"TargetPurposeListen",i.currentSequenceNumber),n.qr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.ts.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(i.targetId,i),n.ns.set(e,i.targetId)),i})}async function Dh(t,e,n){const i=te(t),s=i.ts.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ea(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.ts=i.ts.remove(e),i.ns.delete(s.target)}function Eg(t,e,n){const i=te(t);let s=X.min(),r=oe();return i.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=te(c),d=h.ns.get(u);return d!==void 0?C.resolve(h.ts.get(d)):h.qr.getTargetData(l,u)}(i,o,Tn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>i.es.getDocumentsMatchingQuery(o,e,n?s:X.min(),n?r:oe())).next(a=>(bO(i,gD(e),a),{documents:a,ls:r})))}function bO(t,e,n){let i=t.rs.get(e)||X.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.rs.set(e,i)}class Tg{constructor(){this.activeTargetIds=ID()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AO{constructor(){this.eo=new Tg,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,i){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Tg,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class CO{ro(e){}shutdown(){}}/**
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
 */class Ig{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ba=null;function gu(){return ba===null?ba=function(){return 268435456+Math.round(2147483648*Math.random())}():ba++,"0x"+ba.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class kO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=i+"://"+n.host,this.fo=`projects/${s}/databases/${r}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}get yo(){return!1}wo(n,i,s,r,o){const a=gu(),c=this.So(n,i);F("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,r,o),this.Do(n,c,l,s).then(u=>(F("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw zs("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Co(n,i,s,r,o,a){return this.wo(n,i,s,r,o)}bo(n,i,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,o)=>n[o]=r),s&&s.headers.forEach((r,o)=>n[o]=r)}So(n,i){const s=SO[n];return`${this.mo}/v1/${i}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,i,s){const r=gu();return new Promise((o,a)=>{const c=new V1;c.setWithCredentials(!0),c.listenOnce(x1.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case pu.NO_ERROR:const u=c.getResponseJson();F(ut,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case pu.TIMEOUT:F(ut,`RPC '${e}' ${r} timed out`),a(new B(R.DEADLINE_EXCEEDED,"Request time out"));break;case pu.HTTP_ERROR:const h=c.getStatus();if(F(ut,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(v){const I=v.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(I)>=0?I:R.UNKNOWN}(f.status);a(new B(g,f.message))}else a(new B(R.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new B(R.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{F(ut,`RPC '${e}' ${r} completed.`)}});const l=JSON.stringify(s);F(ut,`RPC '${e}' ${r} sending request:`,s),c.send(n,"POST",l,i,15)})}vo(e,n,i){const s=gu(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=D1(),a=O1(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new L1({})),this.bo(c.initMessageHeaders,n,i),c.encodeInitMessageHeaders=!0;const u=r.join("");F(ut,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const g=new PO({co:v=>{f?F(ut,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(d||(F(ut,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),F(ut,`RPC '${e}' stream ${s} sending:`,v),h.send(v))},lo:()=>h.close()}),y=(v,I,P)=>{v.listen(I,k=>{try{P(k)}catch(b){setTimeout(()=>{throw b},0)}})};return y(h,Ia.EventType.OPEN,()=>{f||F(ut,`RPC '${e}' stream ${s} transport opened.`)}),y(h,Ia.EventType.CLOSE,()=>{f||(f=!0,F(ut,`RPC '${e}' stream ${s} transport closed`),g.Ro())}),y(h,Ia.EventType.ERROR,v=>{f||(f=!0,zs(ut,`RPC '${e}' stream ${s} transport errored:`,v),g.Ro(new B(R.UNAVAILABLE,"The operation could not be completed")))}),y(h,Ia.EventType.MESSAGE,v=>{var I;if(!f){const P=v.data[0];Oe(!!P);const k=P,b=k.error||((I=k[0])===null||I===void 0?void 0:I.error);if(b){F(ut,`RPC '${e}' stream ${s} received error:`,b);const K=b.status;let ie=function(ne){const Ie=Be[ne];if(Ie!==void 0)return WT(Ie)}(K),he=b.message;ie===void 0&&(ie=R.INTERNAL,he="Unknown error status: "+K+" with message "+b.message),f=!0,g.Ro(new B(ie,he)),h.close()}else F(ut,`RPC '${e}' stream ${s} received:`,P),g.Vo(P)}}),y(a,M1.STAT_EVENT,v=>{v.stat===Zm.PROXY?F(ut,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===Zm.NOPROXY&&F(ut,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.Ao()},0),g}}function _u(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t){return new BD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n,i=1e3,s=1.5,r=6e4){this.si=e,this.timerId=n,this.Fo=i,this.Mo=s,this.xo=r,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),i=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-i);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n,i,s,r,o,a,c){this.si=e,this.Ko=i,this.$o=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new nI(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(Gn(n.toString()),Gn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Uo===n&&this.s_(i,s)},i=>{e(()=>{const s=new B(R.UNKNOWN,"Fetching auth token failed: "+i.message);return this.o_(s)})})}s_(e,n){const i=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{i(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{i(()=>this.o_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NO extends iI{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=zD(this.serializer,e),i=function(r){if(!("targetChange"in r))return X.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?In(o.readTime):X.min()}(e);return this.listener.a_(n,i)}u_(e){const n={};n.database=Nh(this.serializer),n.addTarget=function(r,o){let a;const c=o.target;if(a=Ah(c)?{documents:KD(r,c)}:{query:GD(r,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=GT(r,o.resumeToken);const l=Sh(r,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=Nc(r,o.snapshotVersion.toTimestamp());const l=Sh(r,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const i=YD(this.serializer,e);i&&(n.labels=i),this.e_(n)}c_(e){const n={};n.database=Nh(this.serializer),n.removeTarget=e,this.e_(n)}}class DO extends iI{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=HD(e.writeResults,e.commitTime),i=In(e.commitTime);return this.listener.I_(i,n)}return Oe(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Nh(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>WD(this.serializer,i))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new B(R.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.wo(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(R.UNKNOWN,s.toString())})}Co(e,n,i,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Co(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new B(R.UNKNOWN,r.toString())})}terminate(){this.d_=!0}}class xO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Gn(n),this.f_=!1):F("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=r,this.F_.ro(o=>{i.enqueueAndForget(async()=>{as(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=te(c);l.C_.add(4),await ia(l),l.M_.set("Unknown"),l.C_.delete(4),await xl(l)}(this))})}),this.M_=new xO(i,s)}}async function xl(t){if(as(t))for(const e of t.v_)await e(!0)}async function ia(t){for(const e of t.v_)await e(!1)}function sI(t,e){const n=te(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Sf(n)?Cf(n):gr(n).Ho()&&Af(n,e))}function rI(t,e){const n=te(t),i=gr(n);n.D_.delete(e),i.Ho()&&oI(n,e),n.D_.size===0&&(i.Ho()?i.Zo():as(n)&&n.M_.set("Unknown"))}function Af(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}gr(t).u_(e)}function oI(t,e){t.x_.Oe(e),gr(t).c_(e)}function Cf(t){t.x_=new VD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),gr(t).start(),t.M_.g_()}function Sf(t){return as(t)&&!gr(t).jo()&&t.D_.size>0}function as(t){return te(t).C_.size===0}function aI(t){t.x_=void 0}async function LO(t){t.D_.forEach((e,n)=>{Af(t,e)})}async function VO(t,e){aI(t),Sf(t)?(t.M_.w_(e),Cf(t)):t.M_.set("Unknown")}async function FO(t,e,n){if(t.M_.set("Online"),e instanceof KT&&e.state===2&&e.cause)try{await async function(s,r){const o=r.cause;for(const a of r.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(i){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Dc(t,i)}else if(e instanceof ja?t.x_.$e(e):e instanceof HT?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(X.min()))try{const i=await tI(t.localStore);n.compareTo(i)>=0&&await function(r,o){const a=r.x_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=r.D_.get(l);u&&r.D_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=r.D_.get(c);if(!u)return;r.D_.set(c,u.withResumeToken(Tt.EMPTY_BYTE_STRING,u.snapshotVersion)),oI(r,c);const h=new ci(u.target,c,l,u.sequenceNumber);Af(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(i){F("RemoteStore","Failed to raise snapshot:",i),await Dc(t,i)}}async function Dc(t,e,n){if(!ea(e))throw e;t.C_.add(1),await ia(t),t.M_.set("Offline"),n||(n=()=>tI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await xl(t)})}function cI(t,e){return e().catch(n=>Dc(t,n,e))}async function Ml(t){const e=te(t),n=wi(e);let i=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;qO(e);)try{const s=await wO(e.localStore,i);if(s===null){e.b_.length===0&&n.Zo();break}i=s.batchId,UO(e,s)}catch(s){await Dc(e,s)}lI(e)&&uI(e)}function qO(t){return as(t)&&t.b_.length<10}function UO(t,e){t.b_.push(e);const n=wi(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function lI(t){return as(t)&&!wi(t).jo()&&t.b_.length>0}function uI(t){wi(t).start()}async function BO(t){wi(t).E_()}async function jO(t){const e=wi(t);for(const n of t.b_)e.P_(n.mutations)}async function $O(t,e,n){const i=t.b_.shift(),s=Ef.from(i,e,n);await cI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ml(t)}async function zO(t,e){e&&wi(t).h_&&await async function(i,s){if(function(o){return xD(o)&&o!==R.ABORTED}(s.code)){const r=i.b_.shift();wi(i).Yo(),await cI(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Ml(i)}}(t,e),lI(t)&&uI(t)}async function wg(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const i=as(n);n.C_.add(3),await ia(n),i&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await xl(n)}async function WO(t,e){const n=te(t);e?(n.C_.delete(2),await xl(n)):e||(n.C_.add(2),await ia(n),n.M_.set("Unknown"))}function gr(t){return t.O_||(t.O_=function(n,i,s){const r=te(n);return r.A_(),new NO(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{ho:LO.bind(null,t),Io:VO.bind(null,t),a_:FO.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Sf(t)?Cf(t):t.M_.set("Unknown")):(await t.O_.stop(),aI(t))})),t.O_}function wi(t){return t.N_||(t.N_=function(n,i,s){const r=te(n);return r.A_(),new DO(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{ho:BO.bind(null,t),Io:zO.bind(null,t),T_:jO.bind(null,t),I_:$O.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Ml(t)):(await t.N_.stop(),t.b_.length>0&&(F("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new Pf(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kf(t,e){if(Gn("AsyncQueue",`${e}: ${t}`),ea(t))return new B(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.comparator=e?(n,i)=>e(n,i)||H.comparator(n.key,i.key):(n,i)=>H.comparator(n.key,i.key),this.keyedMap=xr(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new xs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new xs;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(){this.B_=new Ve(H.comparator)}track(e){const n=e.doc.key,i=this.B_.get(n);i?e.type!==0&&i.type===3?this.B_=this.B_.insert(n,e):e.type===3&&i.type!==1?this.B_=this.B_.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.B_=this.B_.remove(n):e.type===1&&i.type===2?this.B_=this.B_.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):Q():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,i)=>{e.push(i)}),e}}class Qs{constructor(e,n,i,s,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Qs(e,n,xs.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(){this.k_=void 0,this.listeners=[]}}class KO{constructor(){this.queries=new mr(e=>NT(e),Sl),this.onlineState="Unknown",this.q_=new Set}}async function Nf(t,e){const n=te(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new HO),s)try{r.k_=await n.onListen(i)}catch(o){const a=kf(o,`Initialization of query '${ms(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.Q_(n.onlineState),r.k_&&e.K_(r.k_)&&Of(n)}async function Df(t,e){const n=te(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function GO(t,e){const n=te(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.K_(s)&&(i=!0);o.k_=s}}i&&Of(n)}function QO(t,e,n){const i=te(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function Of(t){t.q_.forEach(e=>{e.next()})}class xf{constructor(e,n,i){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=i||{}}K_(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Qs(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.J_||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.key=e}}class dI{constructor(e){this.key=e}}class YO{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=oe(),this.mutatedKeys=oe(),this._a=DT(e),this.aa=new xs(this._a)}get ua(){return this.ia}ca(e,n){const i=n?n.la:new Rg,s=n?n.aa:this.aa;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Pl(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?g!==y&&(i.track({type:3,doc:f}),v=!0):this.ha(d,f)||(i.track({type:2,doc:f}),v=!0,(c&&this._a(f,c)>0||l&&this._a(f,l)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),v=!0):d&&!f&&(i.track({type:1,doc:d}),v=!0,(c||l)&&(a=!0)),v&&(f?(o=o.add(f),r=y?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{aa:o,la:i,Zi:a,mutatedKeys:r}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const r=e.la.L_();r.sort((l,u)=>function(d,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return g(d)-g(f)}(l.type,u.type)||this._a(l.doc,u.doc)),this.Pa(i);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,c=a!==this.sa;return this.sa=a,r.length!==0||c?{snapshot:new Qs(this.query,e.aa,s,r,e.mutatedKeys,a===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Rg,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=oe(),this.aa.forEach(i=>{this.Ea(i.key)&&(this.oa=this.oa.add(i.key))});const n=[];return e.forEach(i=>{this.oa.has(i)||n.push(new dI(i))}),this.oa.forEach(i=>{e.has(i)||n.push(new hI(i))}),n}da(e){this.ia=e.ls,this.oa=oe();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Qs.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class XO{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class JO{constructor(e){this.key=e,this.Ra=!1}}class ZO{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new mr(a=>NT(a),Sl),this.fa=new Map,this.ga=new Set,this.pa=new Ve(H.comparator),this.ya=new Map,this.wa=new wf,this.Sa={},this.ba=new Map,this.Da=Gs.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function ex(t,e){const n=ux(t);let i,s;const r=n.ma.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.Aa();else{const o=await RO(n.localStore,Tn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await tx(n,e,i,a==="current",o.resumeToken),n.isPrimaryClient&&sI(n.remoteStore,o)}return s}async function tx(t,e,n,i,s){t.va=(h,d,f)=>async function(y,v,I,P){let k=v.view.ca(I);k.Zi&&(k=await Eg(y.localStore,v.query,!1).then(({documents:ie})=>v.view.ca(ie,k)));const b=P&&P.targetChanges.get(v.targetId),K=v.view.applyChanges(k,y.isPrimaryClient,b);return Ag(y,v.targetId,K.Ta),K.snapshot}(t,h,d,f);const r=await Eg(t.localStore,e,!0),o=new YO(e,r.ls),a=o.ca(r.documents),c=na.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Ag(t,n,l.Ta);const u=new XO(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),l.snapshot}async function nx(t,e){const n=te(t),i=n.ma.get(e),s=n.fa.get(i.targetId);if(s.length>1)return n.fa.set(i.targetId,s.filter(r=>!Sl(r,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Dh(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),rI(n.remoteStore,i.targetId),Oh(n,i.targetId)}).catch(Zo)):(Oh(n,i.targetId),await Dh(n.localStore,i.targetId,!0))}async function ix(t,e,n){const i=hx(t);try{const s=await function(o,a){const c=te(o),l=$e.now(),u=a.reduce((f,g)=>f.add(g.key),oe());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=Qn(),y=oe();return c.ss.getEntries(f,u).next(v=>{g=v,g.forEach((I,P)=>{P.isValidDocument()||(y=y.add(I))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,g)).next(v=>{h=v;const I=[];for(const P of a){const k=PD(P,h.get(P.key).overlayedDocument);k!=null&&I.push(new os(P.key,k,RT(k.value.mapValue),Wn.exists(!0)))}return c.mutationQueue.addMutationBatch(f,l,I,a)}).next(v=>{d=v;const I=v.applyToLocalDocumentSet(h,y);return c.documentOverlayCache.saveOverlays(f,v.batchId,I)})}).then(()=>({batchId:d.batchId,changes:xT(h)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Sa[o.currentUser.toKey()];l||(l=new Ve(me)),l=l.insert(a,c),o.Sa[o.currentUser.toKey()]=l}(i,s.batchId,n),await sa(i,s.changes),await Ml(i.remoteStore)}catch(s){const r=kf(s,"Failed to persist write");n.reject(r)}}async function fI(t,e){const n=te(t);try{const i=await TO(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.ya.get(r);o&&(Oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?Oe(o.Ra):s.removedDocuments.size>0&&(Oe(o.Ra),o.Ra=!1))}),await sa(n,i,e)}catch(i){await Zo(i)}}function bg(t,e,n){const i=te(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.ma.forEach((r,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=te(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(l=!0)}),l&&Of(c)}(i.eventManager,e),s.length&&i.Va.a_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function sx(t,e,n){const i=te(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.ya.get(e),r=s&&s.key;if(r){let o=new Ve(H.comparator);o=o.insert(r,mt.newNoDocument(r,X.min()));const a=oe().add(r),c=new Dl(X.min(),new Map,new Ve(me),o,a);await fI(i,c),i.pa=i.pa.remove(r),i.ya.delete(e),Mf(i)}else await Dh(i.localStore,e,!1).then(()=>Oh(i,e,n)).catch(Zo)}async function rx(t,e){const n=te(t),i=e.batch.batchId;try{const s=await EO(n.localStore,e);mI(n,i,null),pI(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await sa(n,s)}catch(s){await Zo(s)}}async function ox(t,e,n){const i=te(t);try{const s=await function(o,a){const c=te(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Oe(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(i.localStore,e);mI(i,e,n),pI(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await sa(i,s)}catch(s){await Zo(s)}}function pI(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function mI(t,e,n){const i=te(t);let s=i.Sa[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.Sa[i.currentUser.toKey()]=s}}function Oh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.fa.get(e))t.ma.delete(i),n&&t.Va.Fa(i,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(i=>{t.wa.containsKey(i)||gI(t,i)})}function gI(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(rI(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Mf(t))}function Ag(t,e,n){for(const i of n)i instanceof hI?(t.wa.addReference(i.key,e),ax(t,i)):i instanceof dI?(F("SyncEngine","Document no longer in limbo: "+i.key),t.wa.removeReference(i.key,e),t.wa.containsKey(i.key)||gI(t,i.key)):Q()}function ax(t,e){const n=e.key,i=n.path.canonicalString();t.pa.get(n)||t.ga.has(i)||(F("SyncEngine","New document in limbo: "+n),t.ga.add(i),Mf(t))}function Mf(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new H(Me.fromString(e)),i=t.Da.next();t.ya.set(i,new JO(n)),t.pa=t.pa.insert(n,i),sI(t.remoteStore,new ci(Tn(Cl(n.path)),i,"TargetPurposeLimboResolution",pf._e))}}async function sa(t,e,n){const i=te(t),s=[],r=[],o=[];i.ma.isEmpty()||(i.ma.forEach((a,c)=>{o.push(i.va(c,e,n).then(l=>{if((l||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=bf.Qi(c.targetId,l);r.push(u)}}))}),await Promise.all(o),i.Va.a_(s),await async function(c,l){const u=te(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>C.forEach(l,d=>C.forEach(d.ki,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>C.forEach(d.qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!ea(h))throw h;F("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.ts.get(d),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.ts=u.ts.insert(d,y)}}}(i.localStore,r))}async function cx(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const i=await eI(n.localStore,e);n.currentUser=e,function(r,o){r.ba.forEach(a=>{a.forEach(c=>{c.reject(new B(R.CANCELLED,o))})}),r.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await sa(n,i._s)}}function lx(t,e){const n=te(t),i=n.ya.get(e);if(i&&i.Ra)return oe().add(i.key);{let s=oe();const r=n.fa.get(e);if(!r)return s;for(const o of r){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function ux(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sx.bind(null,e),e.Va.a_=GO.bind(null,e.eventManager),e.Va.Fa=QO.bind(null,e.eventManager),e}function hx(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ox.bind(null,e),e}class Cg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ol(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return vO(this.persistence,new _O,e.initialUser,this.serializer)}createPersistence(e){return new pO(Rf.jr,this.serializer)}createSharedClientState(e){return new AO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dx{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>bg(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=cx.bind(null,this.syncEngine),await WO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new KO}()}createDatastore(e){const n=Ol(e.databaseInfo.databaseId),i=function(r){return new kO(r)}(e.databaseInfo);return function(r,o,a,c){return new OO(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,s,r,o,a){return new MO(i,s,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>bg(this.syncEngine,n,0),function(){return Ig.D()?new Ig:new CO}())}createSyncEngine(e,n){return function(s,r,o,a,c,l,u){const h=new ZO(s,r,o,a,c,l);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const i=te(n);F("RemoteStore","RemoteStore shutting down."),i.C_.add(5),await ia(i),i.F_.shutdown(),i.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fx{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=ht.UNAUTHENTICATED,this.clientId=TT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{F("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(F("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=kf(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function yu(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await eI(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Sg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await mx(t);F("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>wg(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>wg(e.remoteStore,r)),t._onlineComponents=e}function px(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function mx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await yu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!px(n))throw n;zs("Error using user provided cache. Falling back to memory cache: "+n),await yu(t,new Cg)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await yu(t,new Cg);return t._offlineComponents}async function _I(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await Sg(t,t._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await Sg(t,new dx))),t._onlineComponents}function gx(t){return _I(t).then(e=>e.syncEngine)}async function Oc(t){const e=await _I(t),n=e.eventManager;return n.onListen=ex.bind(null,e.syncEngine),n.onUnlisten=nx.bind(null,e.syncEngine),n}function _x(t,e,n={}){const i=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,l){const u=new Lf({next:d=>{o.enqueueAndForget(()=>Df(r,h));const f=d.docs.has(a);!f&&d.fromCache?l.reject(new B(R.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?l.reject(new B(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new xf(Cl(a.path),u,{includeMetadataChanges:!0,J_:!0});return Nf(r,h)}(await Oc(t),t.asyncQueue,e,n,i)),i.promise}function yx(t,e,n={}){const i=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,l){const u=new Lf({next:d=>{o.enqueueAndForget(()=>Df(r,h)),d.fromCache&&c.source==="server"?l.reject(new B(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new xf(a,u,{includeMetadataChanges:!0,J_:!0});return Nf(r,h)}(await Oc(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function yI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(t,e,n){if(!n)throw new B(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vx(t,e,n,i){if(e===!0&&i===!0)throw new B(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kg(t){if(!H.isDocumentKey(t))throw new B(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ng(t){if(H.isDocumentKey(t))throw new B(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function wn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vf(t);throw new B(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new B(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yI((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ll{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dg(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new q1;switch(i.type){case"firstParty":return new $1(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new B(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Pg.get(n);i&&(F("ComponentProvider","Removing Datastore"),Pg.delete(n),i.terminate())}(this),Promise.resolve()}}function Ex(t,e,n,i={}){var s;const r=(t=wn(t,Ll))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,c;if(typeof i.mockUserToken=="string")a=i.mockUserToken,c=ht.MOCK_USER;else{a=zR(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new B(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ht(l)}t._authCredentials=new U1(new ET(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ra(this.firestore,e,this._query)}}class Ct{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class _i extends ra{constructor(e,n,i){super(e,n,Cl(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new H(e))}withConverter(e){return new _i(this.firestore,e,this._path)}}function Tx(t,e,...n){if(t=Mt(t),vI("collection","path",e),t instanceof Ll){const i=Me.fromString(e,...n);return Ng(i),new _i(t,null,i)}{if(!(t instanceof Ct||t instanceof _i))throw new B(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Me.fromString(e,...n));return Ng(i),new _i(t.firestore,null,i)}}function vu(t,e,...n){if(t=Mt(t),arguments.length===1&&(e=TT.newId()),vI("doc","path",e),t instanceof Ll){const i=Me.fromString(e,...n);return kg(i),new Ct(t,null,new H(i))}{if(!(t instanceof Ct||t instanceof _i))throw new B(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Me.fromString(e,...n));return kg(i),new Ct(t.firestore,t instanceof _i?t.converter:null,new H(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new nI(this,"async_queue_retry"),this.iu=()=>{const n=_u();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=_u();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=_u();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new zn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!ea(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(i=>{this.eu=i,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw Gn("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.tu=!1,i))));return this.Ja=n,n}enqueueAfterDelay(e,n,i){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=Pf.createAndSchedule(this,e,n,i,r=>this.au(r));return this.Xa.push(s),s}su(){this.eu&&Q()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function Og(t){return function(n,i){if(typeof n!="object"||n===null)return!1;const s=n;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Ys extends Ll{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=function(){return new Ix}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||TI(this),this._firestoreClient.terminate()}}function EI(t,e){const n=typeof t=="object"?t:ud(),i=typeof t=="string"?t:e||"(default)",s=ld(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=$R("firestore");r&&Ex(s,...r)}return s}function Vl(t){return t._firestoreClient||TI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function TI(t){var e,n,i;const s=t._freezeSettings(),r=function(a,c,l,u){return new tD(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,yI(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new fx(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xs(Tt.fromBase64String(e))}catch(n){throw new B(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xs(Tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Fl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx=/^__.*__$/;class Rx{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new os(e,this.data,this.fieldMask,n,this.fieldTransforms):new ta(e,this.data,n,this.fieldTransforms)}}function wI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class qf{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Pu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new qf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:i,du:!1});return s.Au(e),s}Ru(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:i,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return xc(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(wI(this.Iu)&&wx.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class bx{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Ol(e)}pu(e,n,i,s=!1){return new qf({Iu:e,methodName:n,gu:i,path:st.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ax(t){const e=t._freezeSettings(),n=Ol(t._databaseId);return new bx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Cx(t,e,n,i,s,r={}){const o=t.pu(r.merge||r.mergeFields?2:0,e,n,s);CI("Data must be an object, but it was:",o,i);const a=bI(i,o);let c,l;if(r.merge)c=new Xt(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=Sx(e,h,n);if(!o.contains(d))throw new B(R.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);kx(u,d)||u.push(d)}c=new Xt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new Rx(new jt(a),c,l)}function RI(t,e){if(AI(t=Mt(t)))return CI("Unsupported field value:",e,t),bI(t,e);if(t instanceof II)return function(i,s){if(!wI(s.Iu))throw s.mu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(i,s){const r=[];let o=0;for(const a of i){let c=RI(a,s.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(t,e)}return function(i,s){if((i=Mt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return wD(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=$e.fromDate(i);return{timestampValue:Nc(s.serializer,r)}}if(i instanceof $e){const r=new $e(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Nc(s.serializer,r)}}if(i instanceof Fl)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Xs)return{bytesValue:GT(s.serializer,i._byteString)};if(i instanceof Ct){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:If(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.mu(`Unsupported field value: ${Vf(i)}`)}(t,e)}function bI(t,e){const n={};return IT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pr(t,(i,s)=>{const r=RI(s,e.Eu(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function AI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof Fl||t instanceof Xs||t instanceof Ct||t instanceof II)}function CI(t,e,n){if(!AI(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const i=Vf(n);throw i==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+i)}}function Sx(t,e,n){if((e=Mt(e))instanceof Ff)return e._internalPath;if(typeof e=="string")return SI(t,e);throw xc("Field path arguments must be of type string or ",t,!1,void 0,n)}const Px=new RegExp("[~\\*/\\[\\]]");function SI(t,e,n){if(e.search(Px)>=0)throw xc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ff(...e.split("."))._internalPath}catch{throw xc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xc(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new B(R.INVALID_ARGUMENT,a+t+c)}function kx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Nx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(kI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Nx extends PI{data(){return super.data()}}function kI(t,e){return typeof e=="string"?SI(t,e):e instanceof Ff?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dx{convertValue(e,n="none"){switch(ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return pr(e,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new Fl(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=gf(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Ro(e));default:return null}}convertTimestamp(e){const n=Ii(e);return new $e(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Me.fromString(e);Oe(ZT(i));const s=new bo(i.get(1),i.get(3)),r=new H(i.popFirst(5));return s.isEqual(n)||Gn(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class DI extends PI{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $a(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(kI("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class $a extends DI{data(e={}){return super.data(e)}}class OI{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Lr(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new $a(this._firestore,this._userDataWriter,i.key,i,new Lr(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new $a(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Lr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const c=new $a(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Lr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:xx(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(t){t=wn(t,Ct);const e=wn(t.firestore,Ys);return _x(Vl(e),t._key).then(n=>LI(e,t,n))}class Uf extends Dx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function MI(t){t=wn(t,ra);const e=wn(t.firestore,Ys),n=Vl(e),i=new Uf(e);return NI(t._query),yx(n,t._query).then(s=>new OI(e,i,t,s))}function Eu(t,e,n){t=wn(t,Ct);const i=wn(t.firestore,Ys),s=Ox(t.converter,e,n);return Mx(i,[Cx(Ax(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Wn.none())])}function Bf(t,...e){var n,i,s;t=Mt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Og(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Og(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof Ct)l=wn(t.firestore,Ys),u=Cl(t._key.path),c={next:h=>{e[o]&&e[o](LI(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=wn(t,ra);l=wn(h.firestore,Ys),u=h._query;const d=new Uf(l);c={next:f=>{e[o]&&e[o](new OI(l,d,h,f))},error:e[o+1],complete:e[o+2]},NI(t._query)}return function(d,f,g,y){const v=new Lf(y),I=new xf(f,v,g);return d.asyncQueue.enqueueAndForget(async()=>Nf(await Oc(d),I)),()=>{v.Na(),d.asyncQueue.enqueueAndForget(async()=>Df(await Oc(d),I))}}(Vl(l),u,a,c)}function Mx(t,e){return function(i,s){const r=new zn;return i.asyncQueue.enqueueAndForget(async()=>ix(await gx(i),s,r)),r.promise}(Vl(t),e)}function LI(t,e,n){const i=n.docs.get(e._key),s=new Uf(t);return new DI(t,s,e._key,i,new Lr(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){fr=s})(Ri),bn(new nn("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new Ys(new B1(i.getProvider("auth-internal")),new W1(i.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new B(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bo(l.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Ot(eg,"4.3.2",e),Ot(eg,"4.3.2","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI="firebasestorage.googleapis.com",Lx="storageBucket",Vx=2*60*1e3,Fx=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Nn{constructor(e,n,i=0){super(Tu(e),`Firebase Storage: ${n} (${Tu(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Dn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Tu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pn||(Pn={}));function Tu(t){return"storage/"+t}function qx(){const t="An unknown error occurred, please check the error payload for server response.";return new Dn(Pn.UNKNOWN,t)}function Ux(){return new Dn(Pn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Bx(){return new Dn(Pn.CANCELED,"User canceled the upload/download.")}function jx(t){return new Dn(Pn.INVALID_URL,"Invalid URL '"+t+"'.")}function $x(t){return new Dn(Pn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function xg(t){return new Dn(Pn.INVALID_ARGUMENT,t)}function FI(){return new Dn(Pn.APP_DELETED,"The Firebase app was deleted.")}function zx(t){return new Dn(Pn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Jt.makeFromUrl(e,n)}catch{return new Jt(e,"")}if(i.path==="")return i;throw $x(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(b){b.path_=decodeURIComponent(b.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),g={bucket:1,path:3},y=n===VI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",I=new RegExp(`^https?://${y}/${s}/${v}`,"i"),k=[{regex:a,indices:c,postModify:r},{regex:f,indices:g,postModify:l},{regex:I,indices:{bucket:1,path:2},postModify:l}];for(let b=0;b<k.length;b++){const K=k[b],ie=K.regex.exec(e);if(ie){const he=ie[K.indices.bucket];let G=ie[K.indices.path];G||(G=""),i=new Jt(he,G),K.postModify(i);break}}if(i==null)throw jx(e);return i}}class Wx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...v){l||(l=!0,e.apply(null,v))}function h(v){s=setTimeout(()=>{s=null,t(f,c())},v)}function d(){r&&clearTimeout(r)}function f(v,...I){if(l){d();return}if(v){d(),u.call(null,v,...I);return}if(c()||o){d(),u.call(null,v,...I);return}i<64&&(i*=2);let k;a===1?(a=2,k=0):k=(i+Math.random())*1e3,h(k)}let g=!1;function y(v){g||(g=!0,d(),!l&&(s!==null?(v||(a=2),clearTimeout(s),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,y(!0)},n),y}function Kx(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(t){return t!==void 0}function Mg(t,e,n,i){if(i<e)throw xg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw xg(`Invalid value for '${t}'. Expected ${n} or less.`)}function Qx(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Mc||(Mc={}));/**
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
 */function Yx(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e,n,i,s,r,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Aa(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Mc.NO_ERROR,c=r.getStatus();if(!a||Yx(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Mc.ABORT;i(!1,new Aa(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;i(!0,new Aa(l,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Gx(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=qx();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?FI():Bx();o(c)}else{const c=Ux();o(c)}};this.canceled_?n(!1,new Aa(!1,null,!0)):this.backoffId_=Hx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Kx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Aa{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function Jx(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Zx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function eM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function tM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function nM(t,e,n,i,s,r,o=!0){const a=Qx(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return eM(l,e),Jx(l,n),Zx(l,r),tM(l,i),new Xx(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function sM(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Lc{constructor(e,n){this._service=e,n instanceof Jt?this._location=n:this._location=Jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Lc(e,n)}get root(){const e=new Jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return sM(this._location.path)}get storage(){return this._service}get parent(){const e=iM(this._location.path);if(e===null)return null;const n=new Jt(this._location.bucket,e);return new Lc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw zx(e)}}function Lg(t,e){const n=e==null?void 0:e[Lx];return n==null?null:Jt.makeFromBucketSpec(n,t)}class rM{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=VI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Vx,this._maxUploadRetryTime=Fx,this._requests=new Set,s!=null?this._bucket=Jt.makeFromBucketSpec(s,this._host):this._bucket=Lg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Jt.makeFromBucketSpec(this._url,e):this._bucket=Lg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Mg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Mg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Lc(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new Wx(FI());{const o=nM(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const Vg="@firebase/storage",Fg="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oM="storage";function aM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new rM(n,i,s,e,Ri)}function cM(){bn(new nn(oM,aM,"PUBLIC").setMultipleInstances(!0)),Ot(Vg,Fg,""),Ot(Vg,Fg,"esm2017")}cM();const Iu=new WeakMap;function qI(t,e){return Iu.has(e)||Iu.set(e,t||{f:{},r:{},s:{},u:{}}),Iu.get(e)}function lM(t,e,n,i){if(!t)return n;const[s,r]=UI(t);if(!s)return n;const o=qI(void 0,i)[s]||{},a=e||r;return a&&a in o?o[a]:n}function uM(t,e,n,i){if(!t)return;const[s,r]=UI(t);if(!s)return;const o=qI(void 0,i)[s],a=e||r;if(a)return n.then(c=>{o[a]=c}).catch(pn),a}function UI(t){return US(t)||BS(t)?["f",t.path]:jS(t)?["r",t.toString()]:$S(t)?["s",t.toString()]:[]}const wu=new WeakMap;function hM(t,e,n){const i=Ed();wu.has(i)||wu.set(i,new Map);const s=wu.get(i),r=uM(e,n,t,i);return r&&s.set(r,t),r?()=>s.delete(r):pn}const dM={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function xh(t,e,n,i){if(!FS(t))return[t,{}];const s=[{},{}],r=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const g=Object.getOwnPropertyDescriptor(a,f);g&&!g.enumerable&&Object.defineProperty(h,f,g)});for(const f in a){const g=a[f];if(g==null||g instanceof Date||g instanceof $e||g instanceof Fl)h[f]=g;else if(Id(g)){const y=l+f;h[f]=y in n?c[f]:g.path,d[y]=g.converter?g:g.withConverter(i.converter)}else if(Array.isArray(g)){h[f]=Array(g.length);for(let y=0;y<g.length;y++){const v=g[y];v&&v.path in r&&(h[f][y]=r[v.path])}o(g,c[f]||h[f],l+f+".",[h[f],d])}else ns(g)?(h[f]={},o(g,c[f],l+f+".",[h[f],d])):h[f]=g}}return o(t,e,"",s),s}const jf={reset:!1,wait:!0,maxRefDepth:2,converter:dM,snapshotOptions:{serverTimestamps:"estimate"}};function Vc(t){for(const e in t)t[e].unsub()}function Mh(t,e,n,i,s,r,o,a,c){const[l,u]=xh(i.data(t.snapshotOptions),Td(e,n),s,t);r.set(e,n,l),Lh(t,e,n,s,u,r,o,a,c)}function fM({ref:t,target:e,path:n,depth:i,resolve:s,reject:r,ops:o},a){const c=Object.create(null);let l=pn;return a.once?xI(t).then(u=>{u.exists()?Mh(a,e,n,u,c,o,i,s,r):(o.set(e,n,null),s())}).catch(r):l=Bf(t,u=>{u.exists()?Mh(a,e,n,u,c,o,i,s,r):(o.set(e,n,null),s())},r),()=>{l(),Vc(c)}}function Lh(t,e,n,i,s,r,o,a,c){const l=Object.keys(s);if(Object.keys(i).filter(y=>l.indexOf(y)<0).forEach(y=>{i[y].unsub(),delete i[y]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const d=l.length,f=Object.create(null);function g(y){y in f&&++h>=d&&a(n)}l.forEach(y=>{const v=i[y],I=s[y],P=`${n}.${y}`;if(f[P]=!0,v)if(v.path!==I.path)v.unsub();else return;i[y]={data:()=>Td(e,P),unsub:fM({ref:I,target:e,path:P,depth:o,ops:r,resolve:g.bind(null,P),reject:c},t),path:I.path}})}function pM(t,e,n,i,s,r){const o=Object.assign({},jf,r),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let d=hi(l?[]:t.value);l||n.set(t,h,[]);const f=i;let g,y=pn;const v=[],I={added:({newIndex:k,doc:b})=>{v.splice(k,0,Object.create(null));const K=v[k],[ie,he]=xh(b.data(c),void 0,K,o);n.add(Mn(d),k,ie),Lh(o,d,`${h}.${k}`,K,he,n,0,i.bind(null,b),s)},modified:({oldIndex:k,newIndex:b,doc:K})=>{const ie=Mn(d),he=v[k],G=ie[k],[ne,Ie]=xh(K.data(c),G,he,o);v.splice(b,0,he),n.remove(ie,k),n.add(ie,b,ne),Lh(o,d,`${h}.${b}`,he,Ie,n,0,i,s)},removed:({oldIndex:k})=>{const b=Mn(d);n.remove(b,k),Vc(v.splice(k,1)[0])}};function P(k){const b=k.docChanges(a);if(!g&&b.length){g=!0;let K=0;const ie=b.length,he=Object.create(null);for(let G=0;G<ie;G++)he[b[G].doc.id]=!0;i=G=>{G&&G.id in he&&++K>=ie&&(l&&(n.set(t,h,Mn(d)),d=t),f(Mn(d)),i=pn)}}b.forEach(K=>{I[K.type](K)}),b.length||(l&&(n.set(t,h,Mn(d)),d=t),i(Mn(d)))}return u?MI(e).then(P).catch(s):y=Bf(e,P,s),k=>{if(y(),k){const b=typeof k=="function"?k():[];n.set(t,h,b)}v.forEach(Vc)}}function mM(t,e,n,i,s,r){const o=Object.assign({},jf,r),a="value",c=Object.create(null);i=zS(i,()=>Td(t,a));let l=pn;function u(h){h.exists()?Mh(o,t,a,h,c,n,0,i,s):(n.set(t,a,null),i(null))}return o.once?xI(e).then(u).catch(s):l=Bf(e,u,s),h=>{if(l(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}Vc(c)}}const qg=Symbol();function gM(t,e){let n=pn;const i=Object.assign({},jf,e),s=Mn(t),r=i.target||hi();HS()&&(i.once=!0);const o=lM(s,i.ssrKey,qg,Ed()),a=o!==qg;a&&(r.value=o);let c=!a;const l=hi(!1),u=hi(),h=A_(),d=Wh();let f=pn;function g(){let I=Mn(t);const P=new Promise((k,b)=>{if(n(i.reset),!I)return n=pn,k(null);l.value=c,c=!0,I.converter||(I=I.withConverter(i.converter)),n=(Id(I)?mM:pM)(r,I,_M,k,b,i)}).catch(k=>(h.value===P&&(u.value=k),Promise.reject(k))).finally(()=>{h.value===P&&(l.value=!1)});h.value=P}let y=pn;Le(t)&&(y=bs(t,g)),g(),s&&(f=hM(h.value,s,i.ssrKey)),ty()&&$_(()=>h.value),d&&u_(v);function v(I=i.reset){y(),f(),n(I)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>l},promise:{get:()=>h},stop:{get:()=>v}})}const _M={set:(t,e,n)=>LS(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)},Ar=new WeakMap;function yM(t,e,n){e&&e[t]&&(e[t](n),delete e[t])}const vM={bindName:"$firestoreBind",unbindName:"$firestoreUnbind"},EM=function(e,n,i){const s=Object.assign({},vM,n),{bindName:r,unbindName:o}=s,a=e.config.globalProperties;a[o]=function(l,u){yM(l,Ar.get(this),u),delete this.$firestoreRefs[l]},a[r]=function(l,u,h){const d=Object.assign({},s,h),f=jw(this.$data,l);Ar.has(this)||Ar.set(this,{});const g=Ar.get(this);g[l]&&g[l](d.reset);const y=KS(i||Ed(),e).run(()=>jc()),{promise:v,stop:I}=e.runWithContext(()=>y.run(()=>gM(u,{target:f,...d}))),P=k=>{I(k),y.stop()};return g[l]=P,this.$firestoreRefs[l]=u,v.value},e.mixin({beforeCreate(){this.$firestoreRefs=Object.create(null)},created(){const{firestore:c}=this.$options,l=typeof c=="function"?c.call(this):c;if(l)for(const u in l)this[r](u,l[u],s)},beforeUnmount(){const c=Ar.get(this);if(c)for(const l in c)c[l]();this.$firestoreRefs=null}})};function TM(t){return(e,n)=>EM(n,t,e)}function IM(t,{firebaseApp:e,modules:n=[]}){t.provide(ov,e);for(const i of n)i(e,t)}const $f=Ry({apiKey:"AIzaSyD3_PR3stakqPCdQaVutT5fORlmXsMNPM0",authDomain:"quizzify-d3053.firebaseapp.com",projectId:"quizzify-d3053",storageBucket:"quizzify-d3053.appspot.com",messagingSenderId:"955132845389",appId:"1:955132845389:web:3346cc1457aeeaa97b2b04"});EI($f);const za=window.location.href.includes("localhost")?"_dev":"";/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ys=typeof window<"u";function wM(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function Ru(t,e){const n={};for(const i in e){const s=e[i];n[i]=on(s)?s.map(t):t(s)}return n}const Yr=()=>{},on=Array.isArray,RM=/\/$/,bM=t=>t.replace(RM,"");function bu(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=PM(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function AM(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ug(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function CM(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Js(e.matched[i],n.matched[s])&&BI(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Js(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function BI(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!SM(t[n],e[n]))return!1;return!0}function SM(t,e){return on(t)?Bg(t,e):on(e)?Bg(e,t):t===e}function Bg(t,e){return on(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function PM(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var Po;(function(t){t.pop="pop",t.push="push"})(Po||(Po={}));var Xr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Xr||(Xr={}));function kM(t){if(!t)if(ys){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),bM(t)}const NM=/^[^#]+#/;function DM(t,e){return t.replace(NM,"#")+e}function OM(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const ql=()=>({left:window.pageXOffset,top:window.pageYOffset});function xM(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=OM(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function jg(t,e){return(history.state?history.state.position-e:-1)+t}const Vh=new Map;function MM(t,e){Vh.set(t,e)}function LM(t){const e=Vh.get(t);return Vh.delete(t),e}let VM=()=>location.protocol+"//"+location.host;function jI(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ug(c,"")}return Ug(n,t)+i+s}function FM(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const f=jI(t,location),g=n.value,y=e.value;let v=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}v=y?d.position-y.position:0}else i(f);s.forEach(I=>{I(n.value,g,{delta:v,type:Po.pop,direction:v?v>0?Xr.forward:Xr.back:Xr.unknown})})};function c(){o=n.value}function l(d){s.push(d);const f=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Ee({},d.state,{scroll:ql()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function $g(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?ql():null}}function qM(t){const{history:e,location:n}=window,i={value:jI(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:VM()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(c,l){const u=Ee({},e.state,$g(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});r(c,u,!0),i.value=c}function a(c,l){const u=Ee({},s.value,e.state,{forward:c,scroll:ql()});r(u.current,u,!0);const h=Ee({},$g(i.value,c,null),{position:u.position+1},l);r(c,h,!1),i.value=c}return{location:i,state:s,push:a,replace:o}}function UM(t){t=kM(t);const e=qM(t),n=FM(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Ee({location:"",base:t,go:i,createHref:DM.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function BM(t){return typeof t=="string"||t&&typeof t=="object"}function $I(t){return typeof t=="string"||typeof t=="symbol"}const ti={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},zI=Symbol("");var zg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zg||(zg={}));function Zs(t,e){return Ee(new Error,{type:t,[zI]:!0},e)}function xn(t,e){return t instanceof Error&&zI in t&&(e==null||!!(t.type&e))}const Wg="[^/]+?",jM={sensitive:!1,strict:!1,start:!0,end:!0},$M=/[.+*?^${}()[\]/\\]/g;function zM(t,e){const n=Ee({},jM,e),i=[];let s=n.start?"^":"";const r=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace($M,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:y,optional:v,regexp:I}=d;r.push({name:g,repeatable:y,optional:v});const P=I||Wg;if(P!==Wg){f+=10;try{new RegExp(`(${P})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${g}" (${P}): `+b.message)}}let k=y?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(k=v&&l.length<2?`(?:/${k})`:"/"+k),v&&(k+="?"),s+=k,f+=20,v&&(f+=-8),y&&(f+=-20),P===".*"&&(f+=-50)}u.push(f)}i.push(u)}if(n.strict&&n.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=r[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:y,optional:v}=f,I=g in l?l[g]:"";if(on(I)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const P=on(I)?I.join("/"):I;if(!P)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=P}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:c}}function WM(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function HM(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=WM(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Hg(i))return 1;if(Hg(s))return-1}return s.length-i.length}function Hg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const KM={type:0,value:""},GM=/[a-zA-Z0-9_]/;function QM(t){if(!t)return[[]];if(t==="/")return[[KM]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,c,l="",u="";function h(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:c==="("?n=2:GM.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function YM(t,e,n){const i=zM(QM(t.path),n),s=Ee(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function XM(t,e){const n=[],i=new Map;e=Qg({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,d){const f=!d,g=JM(u);g.aliasOf=d&&d.record;const y=Qg(e,u),v=[g];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of k)v.push(Ee({},g,{components:d?d.record.components:g.components,path:b,aliasOf:d?d.record:g}))}let I,P;for(const k of v){const{path:b}=k;if(h&&b[0]!=="/"){const K=h.record.path,ie=K[K.length-1]==="/"?"":"/";k.path=h.record.path+(b&&ie+b)}if(I=YM(k,h,y),d?d.alias.push(I):(P=P||I,P!==I&&P.alias.push(I),f&&u.name&&!Gg(I)&&o(u.name)),g.children){const K=g.children;for(let ie=0;ie<K.length;ie++)r(K[ie],I,d&&d.children[ie])}d=d||I,(I.record.components&&Object.keys(I.record.components).length||I.record.name||I.record.redirect)&&c(I)}return P?()=>{o(P)}:Yr}function o(u){if($I(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&HM(u,n[h])>=0&&(u.record.path!==n[h].record.path||!WI(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Gg(u)&&i.set(u.record.name,u)}function l(u,h){let d,f={},g,y;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw Zs(1,{location:u});y=d.record.name,f=Ee(Kg(h.params,d.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&Kg(u.params,d.keys.map(P=>P.name))),g=d.stringify(f)}else if("path"in u)g=u.path,d=n.find(P=>P.re.test(g)),d&&(f=d.parse(g),y=d.record.name);else{if(d=h.name?i.get(h.name):n.find(P=>P.re.test(h.path)),!d)throw Zs(1,{location:u,currentLocation:h});y=d.record.name,f=Ee({},h.params,u.params),g=d.stringify(f)}const v=[];let I=d;for(;I;)v.unshift(I.record),I=I.parent;return{name:y,path:g,params:f,matched:v,meta:eL(v)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Kg(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function JM(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ZM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ZM(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Gg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function eL(t){return t.reduce((e,n)=>Ee(e,n.meta),{})}function Qg(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function WI(t,e){return e.children.some(n=>n===t||WI(t,n))}const HI=/#/g,tL=/&/g,nL=/\//g,iL=/=/g,sL=/\?/g,KI=/\+/g,rL=/%5B/g,oL=/%5D/g,GI=/%5E/g,aL=/%60/g,QI=/%7B/g,cL=/%7C/g,YI=/%7D/g,lL=/%20/g;function zf(t){return encodeURI(""+t).replace(cL,"|").replace(rL,"[").replace(oL,"]")}function uL(t){return zf(t).replace(QI,"{").replace(YI,"}").replace(GI,"^")}function Fh(t){return zf(t).replace(KI,"%2B").replace(lL,"+").replace(HI,"%23").replace(tL,"%26").replace(aL,"`").replace(QI,"{").replace(YI,"}").replace(GI,"^")}function hL(t){return Fh(t).replace(iL,"%3D")}function dL(t){return zf(t).replace(HI,"%23").replace(sL,"%3F")}function fL(t){return t==null?"":dL(t).replace(nL,"%2F")}function Fc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function pL(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(KI," "),o=r.indexOf("="),a=Fc(o<0?r:r.slice(0,o)),c=o<0?null:Fc(r.slice(o+1));if(a in e){let l=e[a];on(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Yg(t){let e="";for(let n in t){const i=t[n];if(n=hL(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(on(i)?i.map(r=>r&&Fh(r)):[i&&Fh(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function mL(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=on(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const gL=Symbol(""),Xg=Symbol(""),Wf=Symbol(""),XI=Symbol(""),qh=Symbol("");function Cr(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function si(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Zs(4,{from:n,to:e})):h instanceof Error?a(h):BM(h)?a(Zs(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},l=t.call(i&&i.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Au(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(_L(a)){const l=(a.__vccOpts||a)[e];l&&s.push(si(l,n,i,r,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=wM(l)?l.default:l;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&si(d,n,i,r,o)()}))}}return s}function _L(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Jg(t){const e=zt(Wf),n=zt(XI),i=Ut(()=>e.resolve(Bi(t.to))),s=Ut(()=>{const{matched:c}=i.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Js.bind(null,u));if(d>-1)return d;const f=Zg(c[l-2]);return l>1&&Zg(u)===f&&h[h.length-1].path!==f?h.findIndex(Js.bind(null,c[l-2])):d}),r=Ut(()=>s.value>-1&&TL(n.params,i.value.params)),o=Ut(()=>s.value>-1&&s.value===n.matched.length-1&&BI(n.params,i.value.params));function a(c={}){return EL(c)?e[Bi(t.replace)?"replace":"push"](Bi(t.to)).catch(Yr):Promise.resolve()}return{route:i,href:Ut(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const yL=q_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Jg,setup(t,{slots:e}){const n=Oo(Jg(t)),{options:i}=zt(Wf),s=Ut(()=>({[e_(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[e_(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:sy("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),vL=yL;function EL(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function TL(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!on(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Zg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const e_=(t,e,n)=>t??e??n,IL=q_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=zt(qh),s=Ut(()=>t.route||i.value),r=zt(Xg,0),o=Ut(()=>{let l=Bi(r);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ut(()=>s.value.matched[o.value]);Oa(Xg,Ut(()=>o.value+1)),Oa(gL,a),Oa(qh,s);const c=hi();return bs(()=>[c.value,a.value,t.name],([l,u,h],[d,f,g])=>{u&&(u.instances[h]=l,f&&f!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!Js(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return t_(n.default,{Component:d,route:l});const f=h.props[u],g=f?f===!0?l.params:typeof f=="function"?f(l):f:null,v=sy(d,Ee({},g,e,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return t_(n.default,{Component:v,route:l})||v}}});function t_(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const wL=IL;function RL(t){const e=XM(t.routes,t),n=t.parseQuery||pL,i=t.stringifyQuery||Yg,s=t.history,r=Cr(),o=Cr(),a=Cr(),c=A_(ti);let l=ti;ys&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ru.bind(null,T=>""+T),h=Ru.bind(null,fL),d=Ru.bind(null,Fc);function f(T,V){let O,U;return $I(T)?(O=e.getRecordMatcher(T),U=V):U=T,e.addRoute(U,O)}function g(T){const V=e.getRecordMatcher(T);V&&e.removeRoute(V)}function y(){return e.getRoutes().map(T=>T.record)}function v(T){return!!e.getRecordMatcher(T)}function I(T,V){if(V=Ee({},V||c.value),typeof T=="string"){const _=bu(n,T,V.path),E=e.resolve({path:_.path},V),w=s.createHref(_.fullPath);return Ee(_,E,{params:d(E.params),hash:Fc(_.hash),redirectedFrom:void 0,href:w})}let O;if("path"in T)O=Ee({},T,{path:bu(n,T.path,V.path).path});else{const _=Ee({},T.params);for(const E in _)_[E]==null&&delete _[E];O=Ee({},T,{params:h(_)}),V.params=h(V.params)}const U=e.resolve(O,V),_e=T.hash||"";U.params=u(d(U.params));const p=AM(i,Ee({},T,{hash:uL(_e),path:U.path})),m=s.createHref(p);return Ee({fullPath:p,hash:_e,query:i===Yg?mL(T.query):T.query||{}},U,{redirectedFrom:void 0,href:m})}function P(T){return typeof T=="string"?bu(n,T,c.value.path):Ee({},T)}function k(T,V){if(l!==T)return Zs(8,{from:V,to:T})}function b(T){return he(T)}function K(T){return b(Ee(P(T),{replace:!0}))}function ie(T){const V=T.matched[T.matched.length-1];if(V&&V.redirect){const{redirect:O}=V;let U=typeof O=="function"?O(T):O;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=P(U):{path:U},U.params={}),Ee({query:T.query,hash:T.hash,params:"path"in U?{}:T.params},U)}}function he(T,V){const O=l=I(T),U=c.value,_e=T.state,p=T.force,m=T.replace===!0,_=ie(O);if(_)return he(Ee(P(_),{state:typeof _=="object"?Ee({},_e,_.state):_e,force:p,replace:m}),V||O);const E=O;E.redirectedFrom=V;let w;return!p&&CM(i,U,O)&&(w=Zs(16,{to:E,from:U}),an(U,U,!0,!1)),(w?Promise.resolve(w):Ie(E,U)).catch(A=>xn(A)?xn(A,2)?A:Jn(A):ge(A,E,U)).then(A=>{if(A){if(xn(A,2))return he(Ee({replace:m},P(A.to),{state:typeof A.to=="object"?Ee({},_e,A.to.state):_e,force:p}),V||E)}else A=Pt(E,U,!0,m,_e);return ct(E,U,A),A})}function G(T,V){const O=k(T,V);return O?Promise.reject(O):Promise.resolve()}function ne(T){const V=ls.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(T):T()}function Ie(T,V){let O;const[U,_e,p]=bL(T,V);O=Au(U.reverse(),"beforeRouteLeave",T,V);for(const _ of U)_.leaveGuards.forEach(E=>{O.push(si(E,T,V))});const m=G.bind(null,T,V);return O.push(m),lt(O).then(()=>{O=[];for(const _ of r.list())O.push(si(_,T,V));return O.push(m),lt(O)}).then(()=>{O=Au(_e,"beforeRouteUpdate",T,V);for(const _ of _e)_.updateGuards.forEach(E=>{O.push(si(E,T,V))});return O.push(m),lt(O)}).then(()=>{O=[];for(const _ of p)if(_.beforeEnter)if(on(_.beforeEnter))for(const E of _.beforeEnter)O.push(si(E,T,V));else O.push(si(_.beforeEnter,T,V));return O.push(m),lt(O)}).then(()=>(T.matched.forEach(_=>_.enterCallbacks={}),O=Au(p,"beforeRouteEnter",T,V),O.push(m),lt(O))).then(()=>{O=[];for(const _ of o.list())O.push(si(_,T,V));return O.push(m),lt(O)}).catch(_=>xn(_,8)?_:Promise.reject(_))}function ct(T,V,O){a.list().forEach(U=>ne(()=>U(T,V,O)))}function Pt(T,V,O,U,_e){const p=k(T,V);if(p)return p;const m=V===ti,_=ys?history.state:{};O&&(U||m?s.replace(T.fullPath,Ee({scroll:m&&_&&_.scroll},_e)):s.push(T.fullPath,_e)),c.value=T,an(T,V,O,m),Jn()}let Vt;function Ci(){Vt||(Vt=s.listen((T,V,O)=>{if(!oa.listening)return;const U=I(T),_e=ie(U);if(_e){he(Ee(_e,{replace:!0}),U).catch(Yr);return}l=U;const p=c.value;ys&&MM(jg(p.fullPath,O.delta),ql()),Ie(U,p).catch(m=>xn(m,12)?m:xn(m,2)?(he(m.to,U).then(_=>{xn(_,20)&&!O.delta&&O.type===Po.pop&&s.go(-1,!1)}).catch(Yr),Promise.reject()):(O.delta&&s.go(-O.delta,!1),ge(m,U,p))).then(m=>{m=m||Pt(U,p,!1),m&&(O.delta&&!xn(m,8)?s.go(-O.delta,!1):O.type===Po.pop&&xn(m,20)&&s.go(-1,!1)),ct(U,p,m)}).catch(Yr)}))}let Ft=Cr(),pe=Cr(),be;function ge(T,V,O){Jn(T);const U=pe.list();return U.length?U.forEach(_e=>_e(T,V,O)):console.error(T),Promise.reject(T)}function On(){return be&&c.value!==ti?Promise.resolve():new Promise((T,V)=>{Ft.add([T,V])})}function Jn(T){return be||(be=!T,Ci(),Ft.list().forEach(([V,O])=>T?O(T):V()),Ft.reset()),T}function an(T,V,O,U){const{scrollBehavior:_e}=t;if(!ys||!_e)return Promise.resolve();const p=!O&&LM(jg(T.fullPath,0))||(U||!O)&&history.state&&history.state.scroll||null;return Zh().then(()=>_e(T,V,p)).then(m=>m&&xM(m)).catch(m=>ge(m,T,V))}const Rt=T=>s.go(T);let cs;const ls=new Set,oa={currentRoute:c,listening:!0,addRoute:f,removeRoute:g,hasRoute:v,getRoutes:y,resolve:I,options:t,push:b,replace:K,go:Rt,back:()=>Rt(-1),forward:()=>Rt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:pe.add,isReady:On,install(T){const V=this;T.component("RouterLink",vL),T.component("RouterView",wL),T.config.globalProperties.$router=V,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Bi(c)}),ys&&!cs&&c.value===ti&&(cs=!0,b(s.location).catch(_e=>{}));const O={};for(const _e in ti)Object.defineProperty(O,_e,{get:()=>c.value[_e],enumerable:!0});T.provide(Wf,V),T.provide(XI,T_(O)),T.provide(qh,c);const U=T.unmount;ls.add(T),T.unmount=function(){ls.delete(T),ls.size<1&&(l=ti,Vt&&Vt(),Vt=null,c.value=ti,cs=!1,be=!1),U()}}};function lt(T){return T.reduce((V,O)=>V.then(()=>ne(O)),Promise.resolve())}return oa}function bL(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(l=>Js(l,a))?i.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Js(l,c))||s.push(c))}return[n,i,s]}const AL={name:"Register",mounted(){this.signInWithGoogle()},methods:{signInWithGoogle(){const t=new Vn,e=iv();vC(e,t).then(n=>{console.log(n.user),Hf.push("/main")})}}};function CL(t,e,n,i,s,r){return ye(),ke("button",{onClick:e[0]||(e[0]=(...o)=>r.signInWithGoogle&&r.signInWithGoogle(...o))},"Authenth")}const SL=kn(AL,[["render",CL]]);const PL={name:"MenuItem",props:["name","beforeSelected","afterSelected","selected","unselected"],methods:{menuClicked(){this.$emit("menuClicked",this.name)}},computed:{getMenuSrc(){return"menu_"+this.name+(this.selected?"":"_unselected")+".png"}}},kL=["src"];function NL(t,e,n,i,s,r){return ye(),ke("div",{onClick:e[0]||(e[0]=o=>r.menuClicked(n.name)),class:No(["menuItem",{afterSelected:n.afterSelected,beforeSelected:n.beforeSelected,selected:n.selected,unselected:n.unselected}])},[W("img",{class:"img_menu",src:r.getMenuSrc},null,8,kL)],2)}const DL=kn(PL,[["render",NL]]);const OL={name:"Menu",components:{MenuItem:DL},data(){return{menuItems:[{item:"play",selected:!0},{item:"statistiques",selected:!1}]}},methods:{menuClicked(t){this.menuItems.find(e=>e.item===t).selected=!0,this.menuItems.filter(e=>e.item!==t).forEach(e=>e.selected=!1),this.$emit("menuClicked",t)},itemSelected(t){return this.menuItems.find(e=>e.item===t).selected},itemUnselected(t){return this.menuItems.find(e=>e.item===t).selected===!1},isBeforeSelected(t){const e=this.menuItems.findIndex(n=>n.selected);return this.menuItems[e-1]!==void 0&&this.menuItems[e-1].item===t},isAfterSelected(t){const e=this.menuItems.findIndex(n=>n.selected);return this.menuItems[e+1]!==void 0&&this.menuItems[e+1].item===t}}},xL={class:"menuPanel"};function ML(t,e,n,i,s,r){const o=fi("MenuItem");return ye(),ke("div",xL,[(ye(!0),ke(tt,null,Ya(s.menuItems,a=>(ye(),xo(o,{name:a.item,beforeSelected:r.isBeforeSelected(a.item),afterSelected:r.isAfterSelected(a.item),selected:r.itemSelected(a.item),unselected:r.itemUnselected(a.item),onMenuClicked:r.menuClicked},null,8,["name","beforeSelected","afterSelected","selected","unselected","onMenuClicked"]))),256))])}const LL=kn(OL,[["render",ML]]),dt=uy({id:"partyFFVL",state:()=>({qcms:[],newQcms:[],nbErrors:0,hasAlreadyPlayed:!1}),actions:{setAnswerd(t){this.qcms.find(e=>e.id===t).answered=!0},setValidated(t){this.qcms.find(e=>e.id===t).validated=!0},setQCMs(t){this.qcms=t},setNewQCMs(t){this.newQcms=t},setNbErrors(t){this.nbErrors=t}},getters:{}});let Ca;const VL=new Uint8Array(16);function FL(){if(!Ca&&(Ca=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Ca))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ca(VL)}const Ze=[];for(let t=0;t<256;++t)Ze.push((t+256).toString(16).slice(1));function qL(t,e=0){return Ze[t[e+0]]+Ze[t[e+1]]+Ze[t[e+2]]+Ze[t[e+3]]+"-"+Ze[t[e+4]]+Ze[t[e+5]]+"-"+Ze[t[e+6]]+Ze[t[e+7]]+"-"+Ze[t[e+8]]+Ze[t[e+9]]+"-"+Ze[t[e+10]]+Ze[t[e+11]]+Ze[t[e+12]]+Ze[t[e+13]]+Ze[t[e+14]]+Ze[t[e+15]]}const UL=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),n_={randomUUID:UL};function BL(t,e,n){if(n_.randomUUID&&!e&&!t)return n_.randomUUID();t=t||{};const i=t.random||(t.rng||FL)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){n=n||0;for(let s=0;s<16;++s)e[n+s]=i[s];return e}return qL(i)}function JI(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function Sa(t){return t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()}function ZI(t){const e=t.split("/");return new Date(e[2],e[1]-1,e[0])}function Jr(){return new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()}function Pa(t){const e=ZI(t.reminder.answeredDate);return e.setDate(e.getDate()+t.reminder.remindDelay),e}const jL={name:"QuestionFFVL",props:["qcm","dryrun"],watch:{qcm:{handler:function(t,e){t.id!==e.id&&this.updateCalendarLogoPath(t)},deep:!0}},data(){return{checkboxes:[],resultsColor:[],resultsDecoration:[],validated:!1,headerColor:"",headerBackgroundColor:"",responsePoint:"",delayResult:"",hasBeenAnswered:!0,calendarLogoPath:"calendar.png"}},computed:{choicesSuffled(){return JI(this.qcm.choices)}},created(){this.updateCalendarLogoPath()},methods:{validate(){this.hasBeenAnswered=this.qcm.answered,this.validated=!0;let t=0,e=0,n=!0;for(let r in this.qcm.choices)this.qcm.choices[r].point>0&&(t+=this.qcm.choices[r].point),this.qcm.choices[r].point<=0&&!this.checkboxes[r]?(this.resultsColor[r]="gray",this.resultsDecoration[r]="line-through"):this.qcm.choices[r].point<=0&&this.checkboxes[r]?(this.resultsColor[r]="red",e+=this.qcm.choices[r].point):this.qcm.choices[r].point>=0&&this.checkboxes[r]?(this.resultsColor[r]="green",e+=this.qcm.choices[r].point):this.qcm.choices[r].point>=0&&!this.checkboxes[r]&&(this.resultsColor[r]="black");t==e?(this.headerColor="#3c763d",this.headerBackgroundColor="#dff0d8",dt().setValidated(this.qcm.id)):e>0?(this.headerColor="#AA6C00",this.headerBackgroundColor="#FFE5C1",n=!1):(this.headerColor="#a94442",this.headerBackgroundColor="#f2dede",n=!1);let i=this.qcm.reminder==null?"New":this.qcm.reminder.remindDelay,s=this.qcm.reminder==null?"New":this.qcm.reminder.remindDelay;if(!this.qcm.answered){let r=this.getReminderDelay(n);const o=new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear();this.qcm.reminder==null&&!this.dryrun?(s=r,this.insertQuestionReminder(r,o)):o!=this.qcm.reminder.answeredDate&&!this.dryrun&&(this.updateQuestionReminder(r,o),s=r)}this.responsePoint=e>0?e:"0",!this.qcm.answered&&!n&&dt().setNbErrors(dt().nbErrors+1),dt().setAnswerd(this.qcm.id),this.delayResult=`${i} => ${s}`},async reset(){await Eu(vu(Wa,"QcmReminder_bp"+za,this.qcm.reminder.id),{answeredDate:Jr(),firstAnsweredDate:Jr(),qcmId:this.qcm.id,remindDelay:0}),dt().setValidated(this.qcm.id),this.getNextQuestion()},getReminderDelay(t){if(this.qcm.reminder==null)return t?1:0;const e=[0,1,2,3,5,8,13,21,34,55],n=e.indexOf(this.qcm.reminder.remindDelay);return t?n==9?55:e[n+1]:n==0?0:e[n-1]},getNextQuestion(){this.resetcss(),this.$emit("getNextQuestion"),this.updateCalendarLogoPath(this.qcm)},updateCalendarLogoPath(t){this.calendarLogoPath=this.dryrun||t&&t.answered?"calendar_crossed.png":"calendar.png"},resetcss(){this.resultsColor=[],this.resultsDecoration=[],this.validated=!1,this.headerColor="",this.headerBackgroundColor="",this.responsePoint="";for(let t=0;t<this.checkboxes.length;t++)this.checkboxes[t]=!1},async insertQuestionReminder(t,e){await Eu(vu(Wa,"QcmReminder_bp"+za,BL()),{answeredDate:e,firstAnsweredDate:e,qcmId:this.qcm.id,remindDelay:t})},async updateQuestionReminder(t,e){await Eu(vu(Wa,"QcmReminder_bp"+za,this.qcm.reminder.id),{answeredDate:e,qcmId:this.qcm.id,remindDelay:t})}}},$L={class:"questionPanel"},zL={class:"questionAsked"},WL={class:"questionText"},HL={class:"calendarDiv"},KL=["src"],GL={key:0,class:"resultPanel"},QL=["id","onUpdate:modelValue"],YL=["for"],XL={key:0},JL={class:"buttonsPanel"};function ZL(t,e,n,i,s,r){return ye(),ke("div",$L,[W("div",zL,[W("div",{class:"questionHeader",style:Zr({color:s.headerColor,"background-color":s.headerBackgroundColor})},[W("span",WL,At(n.qcm.question),1),W("div",null,[W("div",HL,[W("img",{src:s.calendarLogoPath,class:"calendarLogo",style:{float:"right"}},null,8,KL)])])],4),s.validated&&!this.hasBeenAnswered&&!this.dryrun?(ye(),ke("div",GL)):dn("",!0),(ye(!0),ke(tt,null,Ya(r.choicesSuffled,(o,a)=>(ye(),ke("div",{class:"questionChoice",style:Zr({color:s.resultsColor[a],"text-decoration":s.resultsDecoration[a]})},[F_(W("input",{id:a,type:"checkbox","onUpdate:modelValue":c=>s.checkboxes[a]=c},null,8,QL),[[vR,s.checkboxes[a]]]),W("label",{for:a},At(o.choice),9,YL),s.validated?(ye(),ke("span",XL,"("+At(o.point)+")",1)):dn("",!0)],4))),256))]),W("div",JL,[s.validated?dn("",!0):(ye(),ke("button",{key:0,class:"button-4, actionButton",onClick:e[0]||(e[0]=(...o)=>r.validate&&r.validate(...o))},"OK")),!s.validated&&n.qcm.reminder!==void 0?(ye(),ke("button",{key:1,class:"button-4, actionButton",onClick:e[1]||(e[1]=(...o)=>r.reset&&r.reset(...o))},"Reset")):dn("",!0),s.validated?(ye(),ke("button",{key:2,class:"button-4, actionButton",onClick:e[2]||(e[2]=(...o)=>r.getNextQuestion&&r.getNextQuestion(...o))},"Next")):dn("",!0)])])}const eV=kn(jL,[["render",ZL],["__scopeId","data-v-26c13a1e"]]),qt=uy({id:"globalFFVL",state:()=>({qcms:[{id:1,question:"La F.F.V.L.",choices:[{choice:"impose le port du casque en compétition",point:3},{choice:"impose de porter le casque dès le début de la progression en école",point:3},{choice:"impose de porter le casque au dessus de 5m de survol",point:-6}]},{id:2,question:"La pratique du vol libre",choices:[{choice:"peut être autorisée localement par le district aéronautique dans un espace aérien réglementé",point:3},{choice:"est possible dans les espaces aériens classés E en respectant les conditions de vol à vue (V.M.C.)",point:3},{choice:"est autorisé dans tous les espaces aériens contrôlés",point:-6}]},{id:3,question:"Avant de décoller, vous calez votre altimètre au Q.N.H. ; celui-ci doit indiquer",choices:[{choice:"0 mètre",point:-6},{choice:"l'altitude topographique du terrain",point:6},{choice:"le niveau de vol",point:-6}]},{id:4,question:"Trois masses d'air A, B, et C ont une température au sol de 15°. Le point de rosée est respectivement de 14°, 10° et 5°. Laquelle est la plus humide",choices:[{choice:"A",point:6},{choice:"C",point:-6},{choice:"B",point:-6}]},{id:5,question:"Si vous volez face à un vent météo, pour garder une finesse/sol maximum et par rapport à la vitesse de finesse/air maximum, vous devez",choices:[{choice:"voler moins vite",point:-6},{choice:"voler plus vite",point:6},{choice:"voler au taux de chute mini",point:-6}]},{id:6,question:"La traîne d'une perturbation",choices:[{choice:"est généralement très favorable l'été",point:2},{choice:"est caractérisée par un ciel bleu peuplé de petits cumulus appétissants",point:2},{choice:"provoque parfois des conditions trop violentes pour le vol libre en début de période",point:2},{choice:"est toujours, dés le premier jour, favorable pour le vol libre",point:-6}]},{id:7,question:"Pour une même position des commandes qu'en air immobile, dans une ascendance régulière",choices:[{choice:"ma vitesse-air est plus élevée",point:-6},{choice:"mon incidence est la même",point:3},{choice:"ma vitesse-air est la même",point:3},{choice:"mon incidence est plus élevée",point:-6}]},{id:8,question:"Vous empruntez l'aile d'un pilote plus léger que vous",choices:[{choice:"l'aile décrochera à la même vitesse",point:-6},{choice:"à même incidence, elle volera plus vite qu'avec lui",point:3},{choice:"à même incidence, elle volera plus lentement qu'avec lui",point:-6},{choice:"vous devrez courir plus vite au décollage",point:3}]},{id:9,question:"La chaleur solaire se propage dans l'atmosphère selon les processus suivants",choices:[{choice:"vibration et gradient",point:-6},{choice:"évaporation, condensation",point:3},{choice:"rayonnement, conduction et convection",point:3}]},{id:10,question:"Le constructeur préconise un réglage de la ventrale du harnais; en la desserrant",choices:[{choice:"je ressens mieux les mouvements aérologiques",point:3},{choice:"j'augmente les risques de twist en cas de fermeture",point:-6},{choice:"j'augmente le risque d'autorotation en cas de fermeture",point:3}]},{id:11,question:"Les perturbations du front polaire qui traversent la France proviennent généralement",choices:[{choice:"de la Méditerranée",point:-6},{choice:"d'Europe centrale",point:-6},{choice:"des Açores",point:-6},{choice:"de l'Atlantique",point:6}]},{id:12,question:"Lorsqu'un nuage se forme",choices:[{choice:"l'ascendance s'arrête",point:-6},{choice:"de la chaleur est dégagée",point:6},{choice:"du froid est dégagé",point:-6}]},{id:13,question:"Le parapente est un aéronef",choices:[{choice:"de caractère instable aérodynamiquement s'il utilise un profil reflexé",point:-6},{choice:"qui utilise des profils biconvexes pour améliorer sa vitesse de vol",point:3},{choice:"à forte stabilité pendulaire",point:3},{choice:"qui utilise des profils creux pour augmenter sa stabilité en tangage",point:-6}]},{id:14,question:"Votre voile se trouve en décrochage parachutal, totalement débridée. Pour tenter d'en sortir",choices:[{choice:"vous tirez brièvement sur les deux freins pour décrocher, et relevez les mains avant de gérer l'abattée qui s'en suit",point:2},{choice:"près du sol, vous vous préparez à atterrir brutalement sans rien tenter pour ne pas risquer une abattée au plus mauvais moment",point:2},{choice:"vous utilisez votre accélérateur pour la faire piquer et revoler",point:2}]},{id:15,question:"Cochez les 2 droites qui définissent l'angle de dérive",choices:[{choice:"le vent météo",point:-6},{choice:"la trajectoire/sol",point:3},{choice:"l'envergure",point:-6},{choice:"la corde centrale",point:3}]},{id:16,question:"Pour participer aux compétitions",choices:[{choice:"il est obligatoire d'avoir une assurance individuelle complémentaire",point:-3},{choice:"il faut être moniteur ou élève moniteur",point:-3},{choice:"il est nécessaire d'être titulaire du brevet fédéral de pilote confirmé",point:3},{choice:"la responsabilité civile aérienne est suffisante",point:3}]},{id:17,question:"La sortie d'un décrochage engendre généralement",choices:[{choice:"un fort couple piqueur",point:3},{choice:"une forte variation d'assiette à piquer",point:3},{choice:"un fort couple cabreur",point:-6},{choice:"une forte variation d'assiette à cabrer",point:-6}]},{id:18,question:"La qualification biplace F.F.V.L.",choices:[{choice:"permet de pratiquer des baptêmes de l'air payants",point:-6},{choice:"permet à un pilote breveté et qualifié biplace d'emmener gratuitement un passager pour un vol loisir",point:3},{choice:"est réservée aux moniteurs",point:-6},{choice:"permet à un moniteur qualifié biplace d'emmener un élève",point:3}]},{id:19,question:"Deux ailes identiques soumises à des charges alaires différentes décrochent",choices:[{choice:"à même incidence mais à des vitesses différentes",point:6},{choice:"à même vitesse et à même incidence",point:-6},{choice:"à même vitesse mais à des incidences différentes",point:-6}]},{id:20,question:"Quels changements d'états dégagent de la chaleur",choices:[{choice:"du liquide au gazeux",point:-6},{choice:"du gazeux au liquide",point:4},{choice:"du gazeux au solide",point:2}]},{id:21,question:"Critères de performances d'une aile",choices:[{choice:"la maniabilité",point:2},{choice:"l'étendue de la plage de vitesse",point:2},{choice:"la finesse max",point:2}]},{id:22,question:"Les phénomènes bloquant le développement des ascendances en altitude sont en général",choices:[{choice:"le caractère stable de la masse d'air",point:3},{choice:"un changement brutal dans la direction du vent",point:-6},{choice:"la base des cumulus",point:-6},{choice:"une couche d'inversion",point:3}]},{id:23,question:"Vous risquez particulièrement la mise en vrille",choices:[{choice:"en baissant fortement une commande à partir d'un vol lent",point:3},{choice:"en ne contrant pas une fermeture massive et dynamique d'une demi aile",point:-6},{choice:"en volant lentement en virage et en air turbulent",point:3}]},{id:24,question:"L'hypoxie",choices:[{choice:"provoque une altération du jugement et une diminution de la coordination musculaire",point:2},{choice:"est due au refroidissement de l'atmosphère",point:-6},{choice:"est due à un déficit d'oxygène dans le sang",point:2},{choice:"se manifeste souvent par une sensation de bien-être",point:2}]},{id:25,question:"Parmi les zones à statut particulier, il existe les zones",choices:[{choice:"D : dangereuses pour tout aéronef",point:2},{choice:"D : dangereuses uniquement pour les P.U.L.",point:-6},{choice:"R : réglementées et interdites aux P.U.L. lorsqu'elles sont actives, sauf avec une autorisation du district aéronautique",point:2},{choice:"P : interdites à tout aéronef",point:2}]},{id:26,question:"Les Conseillers Techniques (C.T.R., C.T.N., D.T.N.) sont",choices:[{choice:"employés et rétribués par la F.F.V.L. pour les conseillers techniques fédéraux",point:1},{choice:"placés auprès de la FFVL par le Ministère des Sports",point:1},{choice:"missionnés par le DTN (directeur technique national) de la F.F.V.L. au plan régional et/ou national",point:2},{choice:"travaillent sur des missions (formation, compétition, sécurité, sites, espace aérien...) pour la F.F.V.L.",point:2}]},{id:27,question:"La finesse-air",choices:[{choice:"varie avec l'incidence de l'appareil",point:3},{choice:"est maximale juste avant le décrochage",point:-6},{choice:"passe par un maximum pour une certaine valeur de l'incidence",point:3},{choice:"est maximale lorsque le taux de chute est minimal",point:-6}]},{id:28,question:"La vitesse de décrochage sur une aile donnée est",choices:[{choice:"indépendante du poids du pilote",point:-6},{choice:"plus élevée en virage",point:3},{choice:"plus élevée en tracté et en remorqué",point:3}]},{id:29,question:"Les rues de nuages se produisent généralement",choices:[{choice:"lorsque le vent est nul",point:-6},{choice:"lorsque la convection est installée et que le vent augmente avec l'altitude",point:6},{choice:"lorsque la basse couche est stable",point:-6}]},{id:30,question:"Dans un marais barométrique, il y a risque",choices:[{choice:"d'onde de ressaut",point:-6},{choice:"de vent fort",point:-6},{choice:"d'orage",point:6}]},{id:31,question:"Pour conserver un coefficient de sécurité acceptable en utilisation habituelle, il ne faut pas dépasser",choices:[{choice:'6 "g"',point:0},{choice:'2 "g"',point:-6},{choice:'8 "g"',point:0},{choice:'4 "g"',point:6}]},{id:32,question:"Le polyéthylène",choices:[{choice:"possède un faible pourcentage d'allongement",point:-6},{choice:"possède une basse température de fusion (risque important de rupture par frottement)",point:3},{choice:"possède une très bonne résistance à la rupture",point:3},{choice:"est sensible à l'humidité",point:-6}]},{id:33,question:"Votre décollage est orienté est. Il fait beau. Pour trouver les meilleures conditions au départ, vous avez intérêt à décoller",choices:[{choice:"en cours d'après-midi",point:-6},{choice:"dans la matinée",point:6},{choice:"le moment de la journée est sans importance",point:-6}]},{id:34,question:"Lorsque l'aile entre dans une ascendance, transitoirement",choices:[{choice:"l'incidence diminue",point:-6},{choice:"la Force Aérodynamique augmente et l'aile accélère vers le haut",point:3},{choice:"l'incidence augmente",point:3}]},{id:35,question:"Au décollage le vent est arrière. Les risques de ne pas pouvoir décoller sont dus",choices:[{choice:"aux descendances marquées et proportionnelles à la déclivité de la pente",point:3},{choice:"aux effets du gradient de vent",point:0},{choice:"à l'absence d'effet de sol",point:-6},{choice:"à la vitesse importante que vous devez atteindre en courant",point:3}]},{id:36,question:"Vous êtes contraints de vous poser dans un terrain en pente",choices:[{choice:"la pente est très faible ; vous vous posez face au vent",point:3},{choice:"la pente est forte ; vous vous posez face au vent",point:-6},{choice:"vous vous posez à contre-pente",point:-6},{choice:"la pente est modérée à forte ; vous vous posez travers pente",point:3}]},{id:37,question:"Lorsque vous entrez dans une descendance, transitoirement, l'incidence",choices:[{choice:"ne change pas",point:-6},{choice:"augmente",point:-6},{choice:"diminue",point:6}]},{id:38,question:"Le front polaire",choices:[{choice:"sépare les masses d'air polaires et tropicales",point:2},{choice:"sépare les masses chaudes équatoriales des masses froides polaires",point:0},{choice:"a une importance déterminante dans le climat français",point:2},{choice:"fluctue dans chaque hémisphère autour des latitudes dites tempérées",point:2}]},{id:39,question:"L'instabilité conditionnelle",choices:[{choice:"désigne l'impossibilité d'une ascendance à s'élever",point:-6},{choice:"implique que la masse d'air soit plutôt stable",point:3},{choice:"désigne la possibilité du développement d'une ascendance dans un air plutôt stable",point:3},{choice:"implique que la masse d'air soit plutôt instable",point:-6}]},{id:40,question:"La circulation dans l'espace aérien concerne",choices:[{choice:"l'autorité préfectorale",point:0},{choice:"le ministère des transports (autorité de tutelle de l'aviation civile)",point:6},{choice:"les maires des communes concernées",point:-6},{choice:"les propriétaires des terrains de décollage",point:-6}]},{id:41,question:"L'ordre de grandeur de la résistance des suspentes de lignes basses et moyennes est généralement de",choices:[{choice:"100 daN",point:6},{choice:"1000 daN",point:-6},{choice:"10 daN",point:-6}]},{id:42,question:"Il existe une inversion de température parmi ces trois relevés",choices:[{choice:"-2° à 500m / -10° à 1200 m d'altitude",point:-6},{choice:"+18° à 500m / +22° à 1000m d'altitude",point:6},{choice:"+22° à 500m / +18° à 1000m d'altitude",point:-6}]},{id:43,question:"Au cours de la préparation d'un circuit, vous constatez que vous devez traverser une zone particulière dont le sigles est D 573. Vous en déduisez immédiatement que c'est une zone",choices:[{choice:"dangereuse, mais utilisable même pendant les périodes d'activité",point:6},{choice:"réglementée avec autorisation préalable à demander",point:-6},{choice:"interdite à toute pénétration",point:-6}]},{id:44,question:"Le calage altimétrique Q.F.E. permet de connaître",choices:[{choice:"la hauteur de votre aile au dessus du lieu où est effectué le calage",point:6},{choice:"l'altitude de votre aile au dessus du niveau de la mer",point:-6},{choice:"la hauteur de votre aile au dessus du sol qu'elle survole",point:-6}]},{id:45,question:"Un marais barométrique est caractérisé par",choices:[{choice:"des isobares resserrés",point:-6},{choice:"des vents plutôt faibles",point:3},{choice:"des vents plutôt forts",point:-6},{choice:"des isobares espacés",point:3}]},{id:46,question:"Vous recevez une rafale de vent arrière, cela provoque transitoirement",choices:[{choice:"une augmentation de l'incidence",point:2},{choice:"une augmentation de la vitesse-sol",point:2},{choice:"une diminution de la Force Aérodynamique",point:2},{choice:"une diminution de l'incidence",point:-6}]},{id:47,question:"Le niveau FL 115",choices:[{choice:"correspond à 2000m/sol environ",point:-6},{choice:"ne doit pas être dépassé en vol à vue, dans la plupart des cas",point:3},{choice:"correspond à 3500m/mer environ",point:3}]},{id:48,question:"La rupture d'un frein",choices:[{choice:"rend le pilotage impossible",point:-6},{choice:"dégonfle la voile",point:-6},{choice:"peut être compensé par le pilotage aux arrières et à la sellette",point:6}]},{id:49,question:"Votre décollage est orienté ouest, il fait beau. Pour trouver les meilleures conditions au départ, vous avez intérêt à décoller",choices:[{choice:"au début de l'après-midi",point:6},{choice:"dans la matinée",point:-6},{choice:"le moment de la journée est sans importance",point:-6}]},{id:50,question:"Pour minimiser les risques de fermetures en vol turbulent, il faut voler",choices:[{choice:"entre taux de chute mini et finesse max",point:2},{choice:"en cherchant à entretenir une tension constante dans chaque commande",point:4},{choice:"avec une bonne vitesse",point:-6},{choice:"aux faibles incidences",point:-6}]},{id:51,question:"Par rapport au vol classique, en vol tracté, la Force Aérodynamique est",choices:[{choice:"inclinée vers l'arrière",point:3},{choice:"plus verticale",point:-6},{choice:"plus forte",point:3},{choice:"plus faible",point:-6}]},{id:52,question:"Un variomètre donne ses indications en fonction de la variation",choices:[{choice:"de la température",point:-6},{choice:"de la pression atmosphérique",point:6},{choice:"de l'humidité",point:-6}]},{id:53,question:"En passant au terrain d'atterrissage, vous mettez votre altimètre à 0. Il est calé",choices:[{choice:"au Q.F.E.",point:6},{choice:"au Q.N.H.",point:-6},{choice:"au niveau de vol",point:-6}]},{id:54,question:"Au cours d'une spirale, votre appareil a dérivé de 3 km en 10mn. La force du vent est",choices:[{choice:"de 18 km/h environ",point:6},{choice:"de 10 km/h maximum",point:-6},{choice:"impossible à connaître",point:-6}]},{id:55,question:"La formation aux qualifications fédérales d'accompagnateur, animateur et moniteur est ouverte",choices:[{choice:"à tout licencié de l'année en cours, sans brevet mais jugé bon pilote par son président de club",point:-2},{choice:"à tout licencié de l'année en cours, majeur et détenteur du brevet de pilote",point:-2},{choice:"à tout licencié de l'année en cours, majeur et détenteur du brevet de pilote confirmé",point:6},{choice:"à tout licencié de l'année en cours, majeur et détenteur du brevet initial",point:-2}]},{id:56,question:"Les diplômes d'état de Vol Libre (BEES, BPJEPS, DEJEPS, DESJEPS parapente ou delta)",choices:[{choice:"sont des diplômes État (Ministère Jeunesse & Sports) construits en collaboration avec la F.F.V.L.",point:2},{choice:"sont des diplômes permettant légalement d'enseigner le Vol Libre contre rémunération",point:1},{choice:"sont des diplômes sanctionnant un niveau supérieur à celui de moniteur fédéral",point:2},{choice:"sont des diplômes permettant légalement de pratiquer le biplace contre rémunération",point:1}]},{id:57,question:"Le réglage Q.N.H. permet de lire directement sur l'altimètre",choices:[{choice:"le niveau de vol",point:-6},{choice:"l'altitude réelle",point:6},{choice:"la hauteur au dessus du décollage",point:-6}]},{id:58,question:"Le facteur de charge lors de l'acquisition de vitesse en virage engagé",choices:[{choice:"peut difficilement dépasser 2",point:-6},{choice:"peut augmenter brutalement si l'incidence augmente",point:2},{choice:"augmente temporairement avec le cadencement du virage (action sur la commande extérieure)",point:2},{choice:"contraint le suspentage au risque de rupture sur les ailes mal entretenues",point:2}]},{id:59,question:"En vol tracté, la Force Aérodynamique est",choices:[{choice:"égale en intensité à la force de traction+poids total",point:3},{choice:"inclinée vers l'arrière",point:3},{choice:"égale en intensité à la force de traction",point:-6}]},{id:60,question:"Lorsqu'une aile entre dans une descendance, transitoirement",choices:[{choice:"la Force Aérodynamique diminue, l'aile accélère vers le bas",point:3},{choice:"l'incidence diminue",point:3},{choice:"l'incidence augmente",point:-6}]},{id:61,question:"Vous recevez une rafale de vent de face, cela provoque transitoirement",choices:[{choice:"une diminution de l'incidence",point:2},{choice:"une diminution de la vitesse-sol",point:2},{choice:"une augmentation de la Force Aérodynamique",point:2},{choice:"une augmentation de l'incidence",point:-6}]},{id:62,question:"Les symptômes de l'imminence d'une vrille sont",choices:[{choice:"une augmentation brutale de la vitesse",point:-6},{choice:"le sentiment d'une aile sollicitée à tourner qui tourne mal",point:2},{choice:"un silence préjugeant d'une très basse vitesse",point:2},{choice:"une commande dure et profondément abaissée du côté sollicité",point:2}]},{id:63,question:"On appelle décrochage dynamique, un décrochage",choices:[{choice:"suivi d'une ressource",point:-6},{choice:"provoqué par une brusque diminution d'incidence",point:-6},{choice:"à vitesse plus élevée que celle du décrochage standard",point:3},{choice:"provoqué par une brusque augmentation d'incidence",point:3}]},{id:64,question:"Une diminution brutale d'incidence",choices:[{choice:"ne demande jamais d'actions de pilotage grâce à la stabilité pendulaire",point:-6},{choice:"rapproche de la fermeture frontale",point:3},{choice:"peut être compensée par une traction momentanée des commandes",point:3},{choice:"éloigne de la fermeture frontale",point:-6}]},{id:65,question:"La fibre kevlar",choices:[{choice:"possède une bonne élasticité",point:-6},{choice:"doit être gainée pour une protection efficace contre l'abrasion et les U.V.",point:2},{choice:"possède un faible pourcentage d'allongement",point:2},{choice:"possède une bonne résistance à la rupture mais une faible résistance au cisaillement",point:2}]},{id:66,question:"Le facteur de charge, c'est le rapport",choices:[{choice:"poids total (aile+pilote) sur poids apparent",point:-6},{choice:"poids apparent sur poids total (aile+pilote)",point:6},{choice:"poids du pilote sur poids total (aile+pilote)",point:-6}]},{id:67,question:"Le vent est de 15 km/h plein travers au décollage",choices:[{choice:"une bonne course et ça passe sûrement",point:-6},{choice:"un vent plein travers mais pas trop fort n'est pas gênant",point:-6},{choice:"vous cherchez un décollage mieux orienté",point:3},{choice:"vous attendez de meilleures conditions",point:3}]},{id:68,question:"Pendant la course de décollage, votre incidence c'est l'angle entre le plan de l'aile et",choices:[{choice:"l'horizontale",point:-6},{choice:"le sol",point:6},{choice:"la verticale",point:-6}]},{id:69,question:"L'espace aérien contrôlé classé",choices:[{choice:"D concerne un espace interdit au vol libre",point:2},{choice:"C jusqu'au niveau 660 est réservé aux vols I.F.R. et VFR équipés d'une radio aviation",point:2},{choice:"E concerne un espace autorisé au vol libre",point:2}]},{id:70,question:"En virage, un appareil décroche",choices:[{choice:"à même vitesse et à même incidence qu'en ligne droite",point:-6},{choice:"à même vitesse mais à incidence plus faible qu'en ligne droite",point:-6},{choice:"à même incidence mais à vitesse plus importante qu'en ligne droite",point:6}]},{id:71,question:"L'abattée consécutive à un décrochage est la conséquence",choices:[{choice:"d'une erreur de pilotage",point:-6},{choice:"d'un retour pendulaire",point:3},{choice:"d'une abattée aérodynamique",point:3},{choice:"de la chute du pilote dans la voile",point:-6}]},{id:72,question:"Le décrochage a lieu",choices:[{choice:"toujours à la même incidence",point:6},{choice:"à différentes incidences",point:-6},{choice:"toujours à la même vitesse",point:-6}]},{id:73,question:"La finesse-sol est d'autant plus élevée que",choices:[{choice:"l'incidence est petite",point:-6},{choice:"l'angle de plané est petit",point:6},{choice:"l'angle de plané est grand",point:-6}]},{id:74,question:"Il est 11h. La convection thermique a déjà bien démarré (3/8 de cumulus). Un voile de cirrostratus annonçant l'arrivée d'un front chaud approche par l'ouest. L'évolution de la convection dans la journée sera",choices:[{choice:"arrêt immédiat des ascendances",point:-6},{choice:"étouffement progressif des ascendances",point:6},{choice:"évolution des cumulus en cumulonimbus",point:-6}]},{id:75,question:"La vitesse de décrochage",choices:[{choice:"diminue lorsque le facteur de charge augmente",point:-6},{choice:"diminue lorsque le poids du pilote augmente",point:-6},{choice:"augmente lorsque le facteur de charge augmente",point:3},{choice:"augmente lorsque le poids du pilote augmente",point:3}]},{id:76,question:"Les systèmes de réglage de calage en vol (trims, afficheurs, accélérateurs)",choices:[{choice:"sont déconseillés aux débutants",point:2},{choice:`doivent s'employer avec prudence, surtout aux extrêmes de leur réglage de part et d'autre du "neutre"`,point:2},{choice:"doivent pouvoir être débrayés aisément en vol",point:2},{choice:"sont à proscrire",point:-6}]},{id:77,question:"Facteurs aggravant le risque d'hypoxie",choices:[{choice:"fatigue corporelle",point:2},{choice:"alcool et tabac",point:2},{choice:"pilote trop légèrement couvert",point:2}]},{id:78,question:"Le régime de vol I.F.R. (Instrument Flight Rules) est",choices:[{choice:"votre régime de vol si vous évoluez dans des conditions de très mauvaise visibilité (dans un nuage)",point:-6},{choice:"applicable aux seuls avions, au dessus du niveau de vol 195",point:-6},{choice:"réservé aux avions possédant certains équipements particuliers",point:6}]},{id:79,question:"L'animateur fédéral",choices:[{choice:"donne accès directement au statut d'élève moniteur fédéral",point:-6},{choice:"est une qualification accessible distinctement de l'accompagnateur de club",point:3},{choice:"permet d'encadrer des séances de découverte au sol",point:3}]},{id:80,question:"En soufflerie, si on multiplie par 3 la vitesse du vent relatif sur une aile, la F.A. est multipliée par",choices:[{choice:"6",point:-6},{choice:"9",point:6},{choice:"3",point:-6},{choice:"27",point:-6}]},{id:81,question:"Je vais faire un vol inhabituel : conditions plus fortes, changement de matériel, etc.",choices:[{choice:"j'essaie de sentir mon degré de tension et si il est trop élevé, je prends particulièrement mon temps pour retrouver un niveau plus normal ou je renonce à ce vol",point:2},{choice:"je suis un peu fatigué en ce moment (travail, famille, etc.) mais c'est pas gênant",point:-6},{choice:"j'ai bien évalué les différents paramètres pour qu'il n'y ait qu'une seule difficulté supplémentaire",point:2},{choice:"la nervosité due à la tension est très favorable aux oublis, je suis très vigilant",point:2}]},{id:82,question:"Lors d'une mise en virage, le roulis inverse qu'on observe parfois en parapente est dû à",choices:[{choice:"une augmentation momentanée de la portance du côté de la commande abaissée",point:3},{choice:"une diminution momentanée de la portance du côté de la commande abaissée",point:-6},{choice:"une diminution de l'incidence du côté où le poids est appliqué",point:-6},{choice:"une augmentation de l'incidence du côté de la commande abaissée",point:3}]},{id:83,question:"Deux ailes identiques mais de charges alaires différentes traversent une large zone ascendante. Chaque pilote utilise son aile à la vitesse du taux de chute mini",choices:[{choice:"les deux ailes gagneront la même altitude",point:-6},{choice:"l'aile la plus chargée gagnera plus d'altitude que l'autre",point:-6},{choice:"l'aile la moins chargée gagnera plus d'altitude que l'autre",point:6}]},{id:84,question:"L'assemblée générale de la F.F.V.L.",choices:[{choice:"décide des orientations à suivre sur proposition du comité directeur",point:2},{choice:"procède à l'élection des membres du comité directeur",point:2},{choice:"se réunit uniquement à la demande du comité directeur",point:-6},{choice:"est composé des présidents de clubs affiliés et des directeurs des OBL, représentés au prorata du nombre de leurs adhérents",point:2}]},{id:85,question:"Lorsque vous entrez dans une ascendance, transitoirement, l'incidence",choices:[{choice:"diminue",point:-6},{choice:"ne change pas",point:-6},{choice:"augmente",point:6}]},{id:86,question:"La finesse-air, c'est",choices:[{choice:"le rapport portance sur traînée",point:6},{choice:"toujours la même chose que la finesse-sol",point:-6},{choice:"l'angle entre la trajectoire-air et l'horizontale",point:-6}]},{id:87,question:"Vous trouverez les renseignements concernant une zone dangereuse et ses heures d'activité",choices:[{choice:"en téléphonant à la tour de contrôle la plus proche de la zone dangereuse",point:0},{choice:"sur la carte V.A.C. (visual approach chart) de l'aérodrome le plus proche",point:-6},{choice:"dans le livret additif aux cartes de vol à vue et radionavigation",point:6}]},{id:88,question:"Le facteur de charge",choices:[{choice:"peut entraîner la rupture de l'aile s'il est trop élevé",point:3},{choice:"peut dépasser 2 dans les virages très inclinés",point:3},{choice:"ne change pas la vitesse de décrochage",point:-6}]},{id:89,question:"Lorsque l'inversion nocturne est très nette, les vols du matin seront",choices:[{choice:"perturbés très tôt par l'activité thermique",point:-6},{choice:"probablement calmes",point:6},{choice:"favorables pour les amateurs de performances",point:-6}]},{id:90,question:"Caler une aile plus piquée",choices:[{choice:"augmente le risque de fermeture",point:3},{choice:"augmente le risque de mise en parachutage stabilisé",point:-6},{choice:"rend l'aile plus paresseuse au gonflage",point:-6},{choice:"rend l'aile plus nerveuse au décollage",point:3}]},{id:91,question:"Tous les régimes de vol avec un angle d'incidence supérieur à celui du taux de chute mini",choices:[{choice:"sont conseillés pour voler près du sol",point:-6},{choice:"correspondent au maximum de maniabilité de l'aile",point:-6},{choice:"correspondent à de mauvaises performances pour l'aile",point:6},{choice:"sont les plus éloignés du décrochage",point:-6}]},{id:92,question:"Le réglage moyen des freins peut se décrire comme étant",choices:[{choice:"au plus court du réglage lorsque l'aile est entièrement débridée bras hauts",point:0},{choice:"correct lorsque l'aile est faiblement bridée les mains aux alentours des oreilles",point:3},{choice:"au plus court du réglage lorsque l'aile est légèrement bridée bras hauts",point:-6},{choice:`avec une garde minimum qui garantit une utilisation de l'accélérateur sans que l'aile ne soit bridée "bras hauts"`,point:3}]},{id:93,question:"Le régime de vol des planeurs ultra-légers est",choices:[{choice:"impérativement le régime V.F.R.",point:6},{choice:"impérativement le régime I.F.R.",point:-6},{choice:"soit le régime I.F.R. soit le régime V.F.R.",point:-6}]},{id:94,question:"On appelle vrillage l'angle entre",choices:[{choice:"la corde centrale et la corde en bout d'aile",point:6},{choice:"l'intrados et l'extrados",point:-6},{choice:"les élévateurs avant et arrière",point:-6}]},{id:95,question:"Après un vol de durée, il convient d'assouplir et de préparer bras et jambes à la course d'atterrissage",choices:[{choice:"pendant l'approche",point:-6},{choice:"en finale",point:-6},{choice:"en effectuant quelques foulées aériennes lors de l'arrondi",point:-6},{choice:"avant l'approche",point:6}]},{id:96,question:"Si pour une certaine incidence, le point d'arrêt se déplace vers le haut sur la courbure du bord d'attaque, mon aile risque de",choices:[{choice:"se fermer",point:6},{choice:"partir en vrille",point:-6},{choice:"décrocher",point:-6}]},{id:97,question:"En prévision d'un gain d'altitude important ou d'un vol de durée, il est recommandé de s'équiper avec",choices:[{choice:"une boîte de médicaments anti-nauséeux",point:-6},{choice:"des chaussures tenant bien aux pieds, des vêtements chauds, des gants, éventuellement des lunettes de soleil",point:6},{choice:"une tenue de sport légère",point:-6}]},{id:98,question:"Vous parcourez une branche de circuit où le vent est plein travers par rapport à votre route. Vous choisissez de préférence les cumulus",choices:[{choice:"sous le vent de la route à suivre",point:-6},{choice:"sur la route à suivre",point:-6},{choice:"au vent de la route à suivre",point:6}]},{id:99,question:"La fermeture accidentelle d'un parapente",choices:[{choice:"a pour origine une trop forte diminution d'incidence",point:2},{choice:"peut être sérieusement accentuée par l'absence de pilotage",point:2},{choice:"est précédée d'un allégement d'une ou des commandes",point:2},{choice:"a pour origine une augmentation brutale d'incidence",point:-6}]},{id:100,question:"Votre trajectoire/sol est perpendiculaire au sens du vent",choices:[{choice:"la corde centrale de l'aile est perpendiculaire au sens du vent",point:-6},{choice:"vous dérivez",point:6},{choice:"vous êtes obligatoirement en dérapage",point:-6}]},{id:101,question:"La nuit aéronautique, en métropole, débute",choices:[{choice:"à l'heure officielle du coucher du soleil",point:-6},{choice:"15 minutes avant l'heure officielle du coucher de soleil",point:-6},{choice:"30 minutes après l'heure officielle du coucher de soleil",point:6}]},{id:102,question:"Lors d'un vol de distance",choices:[{choice:"je me garde toujours la possibilité de rejoindre un terrain de fortune avec une marge raisonnable",point:2},{choice:"je me méfie de l'euphorie, liée au plaisir d'un beau vol, qui diminue les capacités de raisonnement et peut pousser à s'engager dans des options dangereuses",point:2},{choice:"je peux m'engager  le long d'une crête, même si pendant quelques temps je n'ai plus de terrain posable, si je suis sur d'avoir une ascendance tout le long",point:-6},{choice:"en conditions ventées, je me méfie des culs de sac d'où il faudra ressortir face au vent si le passage n'est pas possible. D'une manière générale j'anticipe mes trajectoires et leurs solutions de replis",point:2}]},{id:103,question:"En vol de pente, pour exploiter au mieux l'ascendance, vous volez plutôt à l'incidence",choices:[{choice:"de finesse max",point:-6},{choice:"de taux de chute mini",point:6},{choice:"de vitesse mini",point:-6},{choice:"de vitesse max",point:-6}]},{id:104,question:"Un parapente neuf peut supporter, au maximum et sans aller à la rupture",choices:[{choice:'8 "g"',point:6},{choice:'10 "g"',point:-6},{choice:'6 "g"',point:-6}]},{id:105,question:"Pour effectuer une manœuvre de descente rapide",choices:[{choice:"Toutes les voiles réagissent de manière identique à chaque manœuvre apprise",point:-6},{choice:"on doit se référer au manuel de l'aile qui décrit les subtilités des diverses méthodes",point:6},{choice:"il suffit d'appliquer la méthode des 360° engagés qui est une manœuvre sans soucis",point:-6}]},{id:106,question:"Un constructeur",choices:[{choice:"peut annoncer au public un classement de son aile sans lui avoir fait passer les tests",point:-6},{choice:"n'est pas obligé de confronter sa voile à la norme CEN E 1 et 2 avant de la mettre sur le marché",point:3},{choice:"détermine le classement de sa voile selon les résultats aux tests de la norme CEN",point:3}]},{id:107,question:"Une bonne approche de terrain avant l'atterrissage comprend",choices:[{choice:"une reconnaissance à une bonne hauteur (vent au sol, encombrement, circuit déjà en place,...)",point:2},{choice:"un dernier virage pas trop près du sol et une finale stabilisée",point:2},{choice:"une prise de terrain en U, S, ou 8 adaptée au terrain et à la situation du moment",point:2}]},{id:108,question:"Pour conserver une finesse/sol maximum, vous devez voler plus vite qu'à la vitesse de finesse/air max.",choices:[{choice:"vent de dos",point:-6},{choice:"dans une descendance",point:3},{choice:"dans une ascendance",point:-6},{choice:"vent de face",point:3}]},{id:109,question:"Au décollage il y a 20 km/h de vent sur la pente, votre aile vole à 30 km/h sur sa trajectoire ; pour décoller vous devez courir à",choices:[{choice:"30 km/h",point:-6},{choice:"20 km/h",point:-6},{choice:"40 km/h",point:-6},{choice:"10 km/h",point:6}]},{id:110,question:`Vous êtes en montagne, il n'y a pas de vent, la finesse de votre aile vous permet théoriquement d'atteindre "assez juste" le terrain d'atterrissage`,choices:[{choice:"vous volez",point:-6},{choice:"l'effet de sol va vous aider à l'atterrissage",point:-6},{choice:"vous ne volez pas",point:6},{choice:"en milieu de journée vous volez car vous allez sûrement profiter d'ascendances",point:-6}]},{id:111,question:"Le port du parachute de secours est",choices:[{choice:"obligatoire en compétition fédérale",point:2},{choice:"obligatoire en vol thermique",point:-6},{choice:"obligatoire en vol dans les écoles labellisées FFVL",point:2},{choice:"recommandé par la F.F.V.L. dans le cadre de la pratique autonome",point:2}]},{id:112,question:"L'espace aérien non contrôlé",choices:[{choice:"est classé G",point:3},{choice:"concerne tous les espaces aériens autres que A, B, C, D et E et qui ne sont pas soumis à un statut particulier",point:3},{choice:"n'est pas classé",point:-6}]},{id:113,question:"L'établissement du plan de vol prend en compte",choices:[{choice:"le vent de vallée",point:1},{choice:"les performances de l'aile",point:2},{choice:"la situation des terrains de décollage et d'atterrissage",point:2},{choice:"le vent en altitude",point:1}]},{id:114,question:"Le bureau directeur de la F.F.V.L.",choices:[{choice:"se réunit au moins 4 fois par an",point:2},{choice:"est constitué du président, des vice-présidents, du trésorier et du secrétaire",point:2},{choice:"applique au jour le jour la politique définie par l'assemblée générale",point:2},{choice:"prend toutes les décisions politiques",point:-6}]},{id:115,question:"Un de vos amis vient juste de décoller ; vous lui emboîtez le pas pour voler ensemble",choices:[{choice:"c'est dangereux car vous allez vous trouver dans la turbulence de son aile",point:6},{choice:"c'est délicat mais c'est faisable",point:-6},{choice:"c'est le seul moyen de faire de bonnes photos",point:-6}]},{id:116,question:"Pendant la course de décollage, si la pente du sol augmente et que l'assiette ne change pas, l'incidence",choices:[{choice:"diminue",point:-6},{choice:"augmente",point:6},{choice:"ne change pas",point:-6}]},{id:117,question:"L'hypoxie",choices:[{choice:"les premiers symptômes peuvent apparaître vers 2000m/mer",point:2},{choice:"a des effets variables sur chaque pilote",point:2},{choice:"risque d'altérer le jugement",point:2},{choice:"ne concerne pas les pilotes de Vol Libre",point:-6}]},{id:118,question:"Les différents critères et formes de compétitions FFVL sont",choices:[{choice:"la voltige",point:2},{choice:"la distance",point:1},{choice:"la vitesse",point:2},{choice:"la précision d'atterrissage",point:1}]},{id:119,question:"Le comité directeur de la F.F.V.L.",choices:[{choice:"applique les décisions prises par l'assemblée générale",point:2},{choice:"est composé de volontaires élus pour 4 ans par l'assemblée générale",point:2},{choice:"se réunit au moins 4 fois par an",point:2},{choice:"ne comporte que des professionnels employés à plein temps",point:-6}]},{id:120,question:"Facteurs favorisant la mise en autorotation après fermeture",choices:[{choice:"un grand allongement",point:3},{choice:"une vitesse lente",point:-6},{choice:"une vitesse élevée",point:3},{choice:"un faible allongement",point:-6}]},{id:121,question:"Lors de la fin d'un vol de distance, vous vous trouvez tout près d'un petit aérodrome où évoluent des planeurs ; l'atterrissage",choices:[{choice:"est possible si ce terrain est civil, non contrôlé et sans procédure I.F.R.",point:3},{choice:"est possible si ce terrain est militaire avec l'accord préalable de l'autorité compétente",point:3},{choice:"est interdit aux planeurs ultra-légers sur tous les aérodromes",point:-6}]},{id:122,question:"En parapente, le départ en autorotation peut être causé par",choices:[{choice:"une brutale abattée dissymétrique suivi d'une fermeture",point:2},{choice:"une fermeture non contrôlée",point:2},{choice:"la mise en miroir du secours et de la voile principale",point:-6},{choice:"même une petite cravate",point:2}]},{id:123,question:"En vol vous subissez une rupture du frein droit ; vous pouvez piloter avec",choices:[{choice:"la sellette, le frein gauche et l'élévateur avant droit",point:-6},{choice:"La sellette, le frein gauche et l'élévateur arrière droit",point:0},{choice:"la sellette, les élévateurs avant pour vous poser au plus vite",point:-6},{choice:"la sellette, les 2 élévateurs arrière (symétrie des sensations)",point:6}]},{id:124,question:"Avec les trims, rallonger les élévateurs arrière",choices:[{choice:'révèle les réglages "trop court" des freins qui, en position haute, brident alors le bord de fuite',point:2},{choice:"rend l'aile paresseuse au gonflage",point:-6},{choice:"augmente la vitesse de l'aile",point:2},{choice:"favorise les fermetures en turbulence",point:2}]},{id:125,question:"Le niveau de classification obtenu par une voile lors des test représente",choices:[{choice:"les limites extrêmes de comportement que l'aile aura en conditions aérologiques turbulentes",point:-6},{choice:"le comportement de l'aile dans des situations précises",point:6},{choice:"le niveau du pilote testeur sous cette voile",point:-6}]},{id:126,question:"Les dérogations des règles de survol",choices:[{choice:"s'appliquent pour les agglomérations",point:2},{choice:"Ne s'appliquent pas aux P.U.L",point:-3},{choice:"s'appliquent pour les parcs nationaux",point:2},{choice:"s'applique pour le vol de pente",point:2}]},{id:127,question:"Le Comité Départemental",choices:[{choice:"regroupe les clubs et OBL affiliés F.F.V.L. du département",point:2},{choice:"regroupe uniquement les écoles du département",point:-6},{choice:"est chargé de susciter le développement du Vol Libre sur le plan départemental",point:2},{choice:"permet le dialogue avec les services départementaux (D.D.J.S.C.S., conseil régional, CEDSI...)",point:2}]},{id:128,question:"Dans une association loi 1901, un moniteur fédéral peut",choices:[{choice:"percevoir un défraiement pour le temps consacré à l'enseignement",point:-6},{choice:"percevoir des indemnités de déplacement",point:6},{choice:"être salarié au titre de moniteur",point:-6},{choice:"percevoir directement à son nom le montant des cours",point:-6}]},{id:129,question:"Un virage à 360°",choices:[{choice:"a une vitesse qui est sans rapport avec son inclinaison",point:-6},{choice:"permet d'évaluer sa dérive",point:2},{choice:"augmente la vitesse de vol",point:2},{choice:"augmente le taux de chute",point:2}]},{id:130,question:"Le réglage ou la vérification de la longueur des freins",choices:[{choice:"s'opère sur pente école",point:2},{choice:"doit être fait sur les ailes que je ne connais pas",point:2},{choice:"ne tient pas compte des modifications de calage créés par l'utilisation de l'accélérateur",point:-6},{choice:"est important pour l'ergonomie du pilotage",point:2}]},{id:131,question:"Pour une aile de vol libre, un espace aérien classé D",choices:[{choice:"est accessible en respectant les règles de vol à vue (V.M.C.)",point:-6},{choice:"n'est jamais accessible, sauf dérogation",point:6},{choice:"est accessible avec un contact radio obligatoire",point:-6}]},{id:132,question:"Lors de la fin d'un vol de distance, vous vous trouvez tout près d'un petit aérodrome non contrôlé où évoluent des planeurs ; l'atterrissage",choices:[{choice:"est interdit à tous les planeurs ultra-légers",point:-6},{choice:"est permis en respectant le circuit de piste des planeurs",point:6},{choice:"est interdit en raison de l'activité des planeurs",point:-6}]},{id:133,question:'Lors de spirales engagées, le fait de baisser la commande de frein extérieure au virage pour "cadencer"',choices:[{choice:"n'entraîne pas d'augmentation du facteur de charge",point:-6},{choice:"est utile pour régler la rotation à vitesse constante",point:2},{choice:"peut être ponctuellement utilisé pour amorcer la sortie de la rotation",point:2},{choice:"est nécessaire pour bloquer l'accélération d'une instabilité spirale",point:2}]},{id:134,question:"Pour une aile de vol libre, un espace aérien classé E",choices:[{choice:"est accessible en respectant les règles de vol à vue (V.M.C.)",point:6},{choice:"n'est jamais accessible",point:-6},{choice:"est accessible avec un contact radio obligatoire",point:-6}]},{id:135,question:"Dans un espace aérien non contrôlé et au dessus de 900 m mer ou 300 m sol en montagne, la visibilité minimale doit être de",choices:[{choice:"1500 mètres",point:-6},{choice:"300 mètres",point:-6},{choice:"5000 mètres sous le FL100 8000m au dessus en France",point:6}]},{id:136,question:"La vrille en parapente",choices:[{choice:"correspond au décrochage de l'aile extérieure à la rotation",point:-6},{choice:"correspond au décrochage de l'aile intérieure à la rotation",point:3},{choice:"s'amorce par un mouvement rapide de lacet",point:3},{choice:"correspond à une rotation du pilote autour de sa voile",point:-6}]},{id:137,question:"Un espace aérien classé D",choices:[{choice:"n'est pas accessible aux ailes de vol libre",point:3},{choice:"peut être classé E à certaines périodes (fin de semaine)",point:3},{choice:"ne change jamais de classe",point:-6}]},{id:138,question:"Le centre de poussée d'un parapente",choices:[{choice:"est fixe tant que le parapente est en vol équilibré",point:3},{choice:"est situé au niveau des élévateurs",point:-6},{choice:"peut effectuer transitoirement de grandes variations",point:3}]},{id:139,question:"Lors du montage du parachute sur la sellette",choices:[{choice:"vous vérifiez que la traction de la poignée libère la goupille de verrouillage du container avant de tirer sur le pod",point:2},{choice:"vous fixez les élévateurs du parachute aux épaules",point:2},{choice:"si je dois relier les sangles entre elles, j'utilise impérativement un maillon de 8 mm d'épaisseur minimum",point:2}]},{id:140,question:"La qualification biplace",choices:[{choice:"débute par un week-end de préformation",point:2},{choice:"ne peut commencer qu'après l'obtention du brevet de pilote confirmé",point:2},{choice:"est réservé aux élèves moniteurs et moniteurs fédéraux",point:-6},{choice:"est une qualification fédérale",point:2}]},{id:141,question:"Les règles de survol",choices:[{choice:"imposent de ne pas survoler les zones à fortes densités de population 300m au dessus de l'obstacle le plus élevé dans un rayon de 600m",point:3},{choice:"imposent généralement une limite de survol variant de 300 et 1000 m suivant les cas au dessus d'un espace protégé (réserve naturelle, parc national, ZIT)",point:3},{choice:"Imposent une limite de survol partout supérieure à 150 m",point:-6}]},{id:142,question:"Vous volez en aérologie très turbulente, vous êtes déséquilibré et tombez d'un côté de la sellette",choices:[{choice:"vous tirez immédiatement le secours",point:-6},{choice:"vous contrez à la sellette et au frein pour tempérer le départ en rotation de l'aile",point:3},{choice:"vous jetez un regard vers la voile pour évaluer l'ampleur de la fermeture",point:3},{choice:"vous tirez violemment et au maximum du débattement le frein opposé",point:-6}]},{id:143,question:"La pratique du vol libre est",choices:[{choice:"possible dans les espaces aériens classés E et G",point:3},{choice:"possible dans les TMZ",point:-6},{choice:"interdite dans les espaces classés A, B, C, D",point:3},{choice:"interdite dans les réserves naturelles",point:-3}]},{id:144,question:"Dans un espace aérien contrôlé classé E, les règles de vol à vue (V.M.C.) sont",choices:[{choice:"différentes au dessus et au dessous de 900 m mer ou 300 m sol en montagne",point:-6},{choice:"visibilité 1,5 km et hors nuages",point:-6},{choice:"visibilité 5 km jusqu'au FL100 puis 8 km au-dessus et distances par rapport aux nuages de 1500m horizontalement et 300m verticalement",point:6},{choice:"les mêmes quelle soit l'altitude",point:-6}]},{id:145,question:"La ligue est",choices:[{choice:"une association loi",point:19012},{choice:"chargée du dialogue avec les instances académiques (D.R.J.S.C.S., conseil régional...)",point:1},{choice:"chargée de susciter le développement du Vol Libre sur le plan régional",point:1},{choice:"une représentation de la F.F.V.L. sur le plan régional",point:2}]},{id:146,question:"Pour une aile de vol libre un espace aérien classé G",choices:[{choice:"n'est jamais accessible",point:-6},{choice:"est accessible avec un contact radio obligatoire",point:-6},{choice:"est accessible en respectant les règles de vol à vue (V.M.C.)",point:6}]},{id:147,question:"Dans une association loi 1901, un moniteur breveté d'état peut",choices:[{choice:"travailler bénévolement",point:3},{choice:"être salarié au titre de moniteur",point:3},{choice:"percevoir directement à son nom le montant des cours",point:-6}]},{id:148,question:"La formation fédérale au monitorat",choices:[{choice:"peut commencer dès l'obtention du brevet de pilote confirmé",point:-6},{choice:"commence après l'obtention de l'accompagnateur, de la qualification biplace et de l'animateur de club",point:2},{choice:"est réservée au futurs moniteurs brevetés d'État ou brevets professionnels",point:-6},{choice:"comprend un stage de formation, un stage en situation et un examen final",point:4}]},{id:149,question:"La mise en virage d'une aile débute",choices:[{choice:"parfois avec un mouvement de roulis inverse",point:2},{choice:"parfois avec une diminution de la vitesse de vol suivit de son augmentation",point:2},{choice:"parfois avec une résistance pouvant déséquilibrer le pilote à l'opposé de la direction convoitée",point:2}]},{id:150,question:"Le brevet de pilote confirmé",choices:[{choice:"comporte une partie pratique et théorique",point:4},{choice:"est validé lorsque le pilote a réalisé un vol de 15 km",point:-6},{choice:"valide le niveau marron de la progression",point:2},{choice:"ne peut être certifié qu'après un an de brevet de pilote",point:-3}]},{id:151,question:"Les espaces aériens contrôlés qui s'étendent jusqu'à la surface de la terre sont",choices:[{choice:"les régions de contrôle terminal (T.M.A.)",point:-6},{choice:"les voies aériennes (A.W.Y.)",point:-6},{choice:"les zones de contrôle d'aérodromes (C.T.R.)",point:6}]},{id:152,question:"L'utilisation de trims ou afficheurs peut",choices:[{choice:"faciliter le gonflage",point:1},{choice:"augmenter les risques de fermeture",point:2},{choice:"améliorer la pénétration",point:1},{choice:"augmenter les risques de mise en parachutage stabilisé",point:2}]},{id:153,question:"L'effet pendulaire au gonflage ou pendant la course au sol ou pendant le pilotage de l'affalement de l'aile",choices:[{choice:"demande d'accélérer au devant de son l'aile",point:2},{choice:"demande de « dé freiner » du côté où l'aile vous emmène",point:2},{choice:"ne concerne pas le mouvement de tangage",point:-6},{choice:"impose la réponse du « recentrage » pour toutes les phases divergentes entre l'aile et son pilote",point:2}]},{id:154,question:"Pour la sécurité il est souhaitable de voler en possession de",choices:[{choice:"d'un téléphone portable et d'un numéro d'appel des secours qui est le 118",point:-6},{choice:"d'un téléphone portable et du numéro d'appel des secours qui est le 112",point:2},{choice:"d'une radio VHF calée sur la fréquence 143,987.5 Mhz",point:2},{choice:"un kit de sécurité équipé au minimum d'une cordelette de 20m",point:2}]},{id:155,question:"Pour sortir d'une vrille, vous devez",choices:[{choice:"freiner du côté extérieur à la rotation pour la stopper puis relever les mains pour faire revoler l'aile qui va abattre",point:4},{choice:"remonter les mains pour laisser voler l'aile ce qui n'est pas sans risque",point:2},{choice:"éviter les stages SIV en milieu aménagé, adaptés pour apprendre à sortir d'une vrille",point:-6}]},{id:156,question:"Caler une aile plus cabrée",choices:[{choice:"augmente le risque de fermeture",point:-6},{choice:"rend l'aile plus nerveuse au décollage",point:-6},{choice:"augmente le risque de mise en parachutage stabilisé",point:3},{choice:"rend l'aile plus paresseuse au gonflage",point:3}]},{id:157,question:"En vol, amortir l'effet pendulaire c'est",choices:[{choice:"freiner pendant la ressource pour débuter le contre de l'abattée qui va suivre",point:-6},{choice:"réduire autant que possible la perte de vitesse de l'aile dans les ressources",point:2},{choice:"coordonner la vitesse du pilote et de son aile",point:2},{choice:"relever les mains lorsque l'abattée a été contrée",point:2}]},{id:158,question:"Lors du montage du parachute sur la sellette",choices:[{choice:"une fois le parachute conditionné, je fais un essai d'extraction en statique puis reconditionne à l'identique",point:2},{choice:"je relie directement les deux sangles d'attache du parachute aux maillons d'épaules sellette, sans intermédiaire",point:2},{choice:`je m'assure que la chaîne "parachute & pod & poignée d'extraction et container extérieur" sont compatibles`,point:2}]},{id:159,question:"J'inscris ma voile en spirale (360°), puis je relâche les commandes",choices:[{choice:"la voile revient en vol droit : elle est neutre spirale",point:-6},{choice:"La voile reste en virage : elle est stable spirale",point:-6},{choice:'la voile "engage" : elle est instable spirale',point:6}]},{id:160,question:"J'inscris ma voile en spirale (360°), puis je relâche les commandes ; l'aile continue à accélérer",choices:[{choice:"l'aile est instable spirale",point:2},{choice:"pour dissiper ma vitesse et ne pas avoir de ressource j'utilise la commande extérieure puis l'intérieure dès qu'apparaît la ressource",point:2},{choice:"pour sortir de la rotation j'utilise la commande extérieure",point:2},{choice:"l'aile est neutre spirale",point:-6}]},{id:161,question:"L'utilisation de trims ou afficheurs",choices:[{choice:"ne met pas en cause le calage de l'aile",point:-6},{choice:"peut tout autant être conçu pour augmenter ou diminuer la vitesse",point:3},{choice:"est sans inconvénient",point:-6},{choice:"est généralement au neutre lorsque les maillons rapides de liaison aux suspentes sont au même niveau",point:3}]},{id:162,question:"J'inscris ma voile en spirale (360°), puis je relâche les commandes",choices:[{choice:"la voile revient en vol droit : elle est instable spirale",point:-6},{choice:'la voile "engage" : elle est stable spirale',point:-6},{choice:"La voile reste en virage : elle est neutre spirale",point:6}]},{id:163,question:"Un grand débattement aux commandes",choices:[{choice:"est synonyme de grande plage de vitesse",point:-6},{choice:"caractérise uniquement les voiles de débutants",point:-6},{choice:"diminue le risque de surpilotage",point:6}]},{id:164,question:"Le constructeur préconise un réglage de la ventrale du harnais; en la serrant davantage",choices:[{choice:"je ressens mieux les mouvements aérologiques",point:-6},{choice:"j'augmente le risque d'autorotation si je reste passif en cas de fermeture",point:-6},{choice:"j'augmente le risque de twist en cas de fermeture",point:6}]},{id:165,question:"J'inscris ma voile en spirale (360°), puis je relâche les commandes",choices:[{choice:"la voile revient en vol droit : elle est neutre spirale",point:-6},{choice:"la voile revient en vol droit : elle est stable spirale",point:2},{choice:'la voile "engage" : elle est instable spirale',point:2},{choice:"La voile reste en virage : elle est neutre spirale",point:2}]},{id:166,question:"Le décollage en haute montagne",choices:[{choice:"nécessite un bon niveau d'expérience",point:6},{choice:"est facilité par la densité moindre de l'air",point:-6},{choice:"ne nécessite aucune connaissance particulière d'alpinisme",point:-6},{choice:"c'est du paralpinisme, pas du Vol Libre",point:-6}]},{id:167,question:"Vous volez sous du matériel classé B de la norme CEN, à jour de révision",choices:[{choice:"vous êtes protégé des incidents de vol irréversibles (twist, cravate, etc.)",point:-6},{choice:"cela ne vous protège pas des risques de collision",point:3},{choice:"vous limitez au maximum le risque de rupture de suspente en vol",point:3}]},{id:168,question:"En cas d'incident de vol important avec autorotation, vous jugez utile de jeter le secours",choices:[{choice:"même si vous êtes à 50m/sol",point:3},{choice:"uniquement si votre aile n'est plus pilotable",point:-6},{choice:"à partir d'un tour d'autorotation même si vous avez une marge d'altitude importante",point:3}]},{id:169,question:"L'effet pendulaire",choices:[{choice:"c'est l'effet de couple entre le pilote et son aile",point:2},{choice:"fait référence au pendule dans le cas où l'aile et le pilote vont dans des directions différentes",point:2},{choice:"est présent dans les situations de vol équilibrées",point:-6},{choice:"fait référence au pendule parce que l'aile et le pilote ont des vitesses différentes",point:2}]}]}),actions:{addReminder(t,e){e.id=t,this.qcms.find(n=>n.id===e.qcmId).reminder=e}},getters:{}});const tV={name:"StatistiquesFFVL",computed:{nbAnswered(){return qt().qcms.filter(t=>t.reminder!==void 0).length},nbTotal(){return qt().qcms.length},globalRepartition(){const t={};return qt().qcms.filter(e=>e.reminder).forEach(e=>{const n=e.reminder.remindDelay;t[n]===void 0?t[n]=1:t[n]++}),t},nextDaysRepartition(){let t=[];qt().qcms.filter(n=>n.reminder).forEach(n=>{const i=Pa(n);t.includes(i.getTime())||t.push(i.getTime())}),t=t.sort((n,i)=>n-i).reverse(),t=t.slice().reverse();let e={};return t.forEach(n=>{qt().qcms.filter(i=>i.reminder===void 0?!1:Pa(i).getTime()==n).forEach(i=>{const s=Pa(i);e[Sa(s)]===void 0?e[Sa(s)]=1:e[Sa(s)]++})}),e}},methods:{play(t){let e=qt().qcms.filter(n=>n.reminder!==void 0&&Sa(Pa(n))==t);this.$emit("forceplay",e)}}},ew=t=>(Xw("data-v-83365c01"),t=t(),Jw(),t),nV={class:"globalStats"},iV={class:"totalstats"},sV={class:"globalStatsTable"},rV=ew(()=>W("thead",null,[W("th",null,"Delais"),W("th",null,"Nombre")],-1)),oV={class:"nextDays"},aV=ew(()=>W("div",{class:"nextDaysTitle"},"Questions des prochains jours.",-1)),cV={class:"nextDaysStatsTable"},lV={class:"nextDayRow"},uV={class:"nextDayDiv"},hV={class:"nextDayDiv nexDayNb"},dV={class:"nextDayDiv"},fV=["src","onClick"];function pV(t,e,n,i,s,r){return ye(),ke(tt,null,[W("div",nV,[W("div",iV,At(r.nbAnswered)+" / "+At(r.nbTotal)+" questions répondues. ",1),W("div",sV,[W("table",null,[rV,W("tbody",null,[(ye(!0),ke(tt,null,Ya(r.globalRepartition,(o,a)=>(ye(),ke("tr",null,[W("td",null,At(a),1),W("td",null,At(r.globalRepartition[a]),1)]))),256))])])])]),W("div",oV,[aV,W("div",cV,[(ye(!0),ke(tt,null,Ya(r.nextDaysRepartition,(o,a)=>(ye(),ke("div",lV,[W("span",uV,At(a),1),W("span",hV,At(r.nextDaysRepartition[a]),1),W("span",dV,[W("img",{src:"play.png",onClick:c=>r.play(a),class:"playButton"},null,8,fV)])]))),256))])])],64)}const tw=kn(tV,[["render",pV],["__scopeId","data-v-83365c01"]]),mV={name:"PartyMenuItem",props:["qcms","title","dryrun"],computed:{nbQuestions(){return this.qcms.length}}},gV={class:"partyMenuItem"},_V={class:"partyMenuItemPanel"},yV={class:"pmiTitle"},vV={class:"pmiDefinition"},EV={class:"pmiNbQuestions"},TV={style:{"font-weight":"bold"}},IV={key:0,class:"pmiActions"},wV=["src"];function RV(t,e,n,i,s,r){return ye(),ke("div",gV,[W("div",_V,[W("div",yV,At(n.title)+" :",1),W("div",vV,[v0(t.$slots,"default")]),W("span",EV,[W("span",TV,At(r.nbQuestions),1),As(" questions")])]),r.nbQuestions>0?(ye(),ke("div",IV,[W("img",{src:"play.png",onClick:e[0]||(e[0]=o=>t.$emit("play",n.qcms,n.dryrun)),class:"playButton"},null,8,wV)])):dn("",!0)])}const bV=kn(mV,[["render",RV]]),AV={name:"PartyMenuNewSeries",data(){return{nbQuestions:5}},computed:{nbQuestionRemains(){return qt().qcms.filter(t=>t.reminder===void 0).length},hasAlreadyPlayed(){return dt().hasAlreadyPlayed}},methods:{playNewSession(){let t=qt().qcms.filter(n=>n.reminder===void 0),e=JI(t).slice(0,this.nbQuestions);dt().hasAlreadyPlayed=!0,dt().setNewQCMs(e),this.$emit("play",e,!1)},replaySession(){this.$emit("play",dt().newQcms,!0)}}},CV={class:"partyMenuItem"},SV={class:"partyMenuItemPanel"},PV=W("div",{class:"pmiTitle"},"Nouvelle série :",-1),kV={class:"pmiDefinition"},NV=W("span",null,"Nb questions : ",-1),DV=W("option",null,"2",-1),OV=W("option",null,"5",-1),xV=W("option",null,"10",-1),MV=W("option",null,"20",-1),LV=[DV,OV,xV,MV],VV={class:"pmiNbQuestions"},FV={style:{"font-weight":"bold"}},qV={class:"pmiActions"},UV=["src"],BV=["src"];function jV(t,e,n,i,s,r){return ye(),ke("div",CV,[W("div",SV,[PV,W("div",kV,[NV,F_(W("select",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.nbQuestions=o)},LV,512),[[ER,s.nbQuestions]])]),W("span",VV,[W("span",FV,At(r.nbQuestionRemains),1),As(" questions")])]),W("div",qV,[W("img",{onClick:e[1]||(e[1]=(...o)=>r.playNewSession&&r.playNewSession(...o)),src:"play.png",class:"playButton"},null,8,UV),r.hasAlreadyPlayed?(ye(),ke("img",{key:0,style:{"margin-top":"20px"},onClick:e[2]||(e[2]=(...o)=>r.replaySession&&r.replaySession(...o)),src:"replay.png",class:"playButton"},null,8,BV)):dn("",!0)])])}const $V=kn(AV,[["render",jV]]);const zV={name:"PartyMenu",components:{PartyMenuItem:bV,PartyMenuNewSeries:$V,StatistiquesFFVL:tw,QuestionFFVL:eV},data(){return{qcm:{question:"",choices:[{choice:"",point:0}]},playing:!1,dryrun:!1,refreshLogo:!0,showStatistiques:!1}},computed:{nbNonValidated(){return dt().qcms.filter(t=>!t.validated).length},nbErrors(){return dt().nbErrors},todayQcms(){return qt().qcms.filter(t=>t.reminder&&t.reminder.answeredDate==Jr())},todayNewQuestions(){return qt().qcms.filter(t=>t.reminder&&t.reminder.firstAnsweredDate==Jr())},getRemindQCMsCpt(){return this.getRemindQCMs()},hasReminder(){return this.getRemindQCMs().length}},created(){this.loadReminder()},methods:{showmenu(){this.playing=!1},async loadReminder(){(await MI(Tx(Wa,"QcmReminder_bp"+za))).forEach(e=>{qt().addReminder(e.id,e.data())})},getNextQuestion(){if(this.playing&&dt().qcms.filter(t=>!t.validated).length==0)this.playing=!1,dt().setNbErrors(0),this.loadReminder();else{let t=dt().qcms.filter(n=>!n.validated),e=Math.floor(Math.random()*t.length);this.qcm=t[e]}},getRemindQCMs(){let t=qt().qcms.filter(e=>e.reminder&&e.reminder.answeredDate!=Jr());return t=t.filter(e=>{let n=ZI(e.reminder.answeredDate);return n.setDate(n.getDate()+e.reminder.remindDelay),n<=new Date}),t},play(t,e){this.dryrun=e,t.forEach(function(n){n.answered=!1,n.validated=!1}),dt().setQCMs(t),dt().setNbErrors(0),this.hasAlreadyPlayed=!0,this.playing=!0,this.getNextQuestion()}}},WV={key:0,class:"partyMenu"},HV={key:1},KV={class:"partyHeader"},GV={style:{float:"right"}};function QV(t,e,n,i,s,r){const o=fi("PartyMenuItem"),a=fi("PartyMenuNewSeries"),c=fi("QuestionFFVL");return ye(),ke(tt,null,[s.playing?dn("",!0):(ye(),ke("div",WV,[qe(o,{title:"Rappels",qcms:r.getRemindQCMsCpt,dryrun:!1,onPlay:r.play},{default:Da(()=>[As("Questions prévues pour aujourd'hui.")]),_:1},8,["qcms","onPlay"]),qe(o,{title:"Rejeux",qcms:r.todayQcms,dryrun:!0,onPlay:r.play},{default:Da(()=>[As("Questions déjà répondues aujourd'hui.")]),_:1},8,["qcms","onPlay"]),qe(o,{title:"Nouveautés",qcms:r.todayNewQuestions,dryrun:!0,onPlay:r.play},{default:Da(()=>[As("Questions découvertes aujourd'hui.")]),_:1},8,["qcms","onPlay"]),qe(a,{onPlay:r.play},null,8,["onPlay"])])),s.playing?(ye(),ke("div",HV,[W("div",KV,[W("span",null,"Reste : "+At(r.nbNonValidated),1),W("span",GV,"Erreurs : "+At(r.nbErrors),1)]),qe(c,{qcm:s.qcm,dryrun:s.dryrun,onGetNextQuestion:r.getNextQuestion,ref:"questionFFVL"},null,8,["qcm","dryrun","onGetNextQuestion"])])):dn("",!0)],64)}const YV=kn(zV,[["render",QV]]);const XV={name:"Main",components:{StatistiquesFFVL:tw,PartyMenu:YV,Menu:LL},data(){return{displayQuestionParty:!0,displayStatistique:!1}},methods:{menuclicked(t){t==="play"?(this.displayQuestionParty=!0,this.displayStatistique=!1,this.$refs.partyMenu.loadReminder()):t==="statistiques"&&(this.$refs.partyMenu.showmenu(),this.displayQuestionParty=!1,this.displayStatistique=!0)},forceplay(t){this.$refs.menu.menuClicked("play"),this.$refs.partyMenu.play(t,!0)}}},JV={class:"mainPanel"};function ZV(t,e,n,i,s,r){const o=fi("Menu"),a=fi("PartyMenu"),c=fi("StatistiquesFFVL");return ye(),ke("div",JV,[qe(o,{ref:"menu",onMenuClicked:r.menuclicked},null,8,["onMenuClicked"]),W("div",{class:No({hide:!s.displayQuestionParty}),style:{height:"100%"}},[qe(a,{ref:"partyMenu"},null,512)],2),s.displayStatistique?(ye(),xo(c,{key:0,onForceplay:r.forceplay},null,8,["onForceplay"])):dn("",!0)])}const eF=kn(XV,[["render",ZV]]),Ul=wR(xR),tF=!1;Ul.use(IM,{firebaseApp:$f,modules:[TM()]});const Wa=EI($f);Ul.use(AR());const Hf=RL({history:UM(),routes:[{path:"/",component:SL},{path:"/main",component:eF,meta:{requiresAuth:!0}}]});Hf.beforeEach((t,e,n)=>{t.matched.some(i=>i.meta.requiresAuth)&&!tF?iv().currentUser?n():n("/"):n()});Ul.use(Hf);Ul.mount("#app");
