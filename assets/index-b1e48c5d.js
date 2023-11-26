(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Vh(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Pe={},ws=[],en=()=>{},ew=()=>!1,tw=/^on[^a-z]/,Oc=t=>tw.test(t),Fh=t=>t.startsWith("onUpdate:"),ot=Object.assign,Uh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},nw=Object.prototype.hasOwnProperty,de=(t,e)=>nw.call(t,e),$=Array.isArray,bs=t=>No(t)==="[object Map]",tr=t=>No(t)==="[object Set]",Gf=t=>No(t)==="[object Date]",J=t=>typeof t=="function",We=t=>typeof t=="string",Ls=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",i_=t=>(Ae(t)||J(t))&&J(t.then)&&J(t.catch),s_=Object.prototype.toString,No=t=>s_.call(t),iw=t=>No(t).slice(8,-1),r_=t=>No(t)==="[object Object]",zh=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ca=Vh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Dc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},sw=/-(\w)/g,bn=Dc(t=>t.replace(sw,(e,n)=>n?n.toUpperCase():"")),rw=/\B([A-Z])/g,nr=Dc(t=>t.replace(rw,"-$1").toLowerCase()),Lc=Dc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ml=Dc(t=>t?`on${Lc(t)}`:""),Hi=(t,e)=>!Object.is(t,e),Sa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},za=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},o_=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Qf;const Iu=()=>Qf||(Qf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zr(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=We(i)?lw(i):Zr(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(We(t)||Ae(t))return t}const ow=/;(?![^(]*\))/g,aw=/:([^]+)/,cw=/\/\*[^]*?\*\//g;function lw(t){const e={};return t.replace(cw,"").split(ow).forEach(n=>{if(n){const i=n.split(aw);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Mc(t){let e="";if(We(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const i=Mc(t[n]);i&&(e+=i+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const uw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hw=Vh(uw);function a_(t){return!!t||t===""}function dw(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=xo(t[i],e[i]);return n}function xo(t,e){if(t===e)return!0;let n=Gf(t),i=Gf(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Ls(t),i=Ls(e),n||i)return t===e;if(n=$(t),i=$(e),n||i)return n&&i?dw(t,e):!1;if(n=Ae(t),i=Ae(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!xo(t[o],e[o]))return!1}}return String(t)===String(e)}function jh(t,e){return t.findIndex(n=>xo(n,e))}const et=t=>We(t)?t:t==null?"":$(t)||Ae(t)&&(t.toString===s_||!J(t.toString))?JSON.stringify(t,c_,2):String(t),c_=(t,e)=>e&&e.__v_isRef?c_(t,e.value):bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:tr(e)?{[`Set(${e.size})`]:[...e.values()]}:Ae(e)&&!$(e)&&!r_(e)?String(e):e;let kt;class l_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=kt;try{return kt=this,e()}finally{kt=n}}}on(){kt=this}off(){kt=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function qc(t){return new l_(t)}function fw(t,e=kt){e&&e.active&&e.effects.push(t)}function Bh(){return kt}function u_(t){kt&&kt.cleanups.push(t)}const $h=t=>{const e=new Set(t);return e.w=0,e.n=0,e},h_=t=>(t.w&_i)>0,d_=t=>(t.n&_i)>0,pw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=_i},mw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];h_(s)&&!d_(s)?s.delete(t):e[n++]=s,s.w&=~_i,s.n&=~_i}e.length=n}},ja=new WeakMap;let kr=0,_i=1;const wu=30;let Gt;const Fi=Symbol(""),bu=Symbol("");class Wh{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,fw(this,i)}run(){if(!this.active)return this.fn();let e=Gt,n=li;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Gt,Gt=this,li=!0,_i=1<<++kr,kr<=wu?pw(this):Yf(this),this.fn()}finally{kr<=wu&&mw(this),_i=1<<--kr,Gt=this.parent,li=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Gt===this?this.deferStop=!0:this.active&&(Yf(this),this.onStop&&this.onStop(),this.active=!1)}}function Yf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let li=!0;const f_=[];function ir(){f_.push(li),li=!1}function sr(){const t=f_.pop();li=t===void 0?!0:t}function Ct(t,e,n){if(li&&Gt){let i=ja.get(t);i||ja.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=$h()),p_(s)}}function p_(t,e){let n=!1;kr<=wu?d_(t)||(t.n|=_i,n=!h_(t)):n=!t.has(Gt),n&&(t.add(Gt),Gt.deps.push(t))}function zn(t,e,n,i,s,r){const o=ja.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const c=Number(i);o.forEach((l,u)=>{(u==="length"||!Ls(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?zh(n)&&a.push(o.get("length")):(a.push(o.get(Fi)),bs(t)&&a.push(o.get(bu)));break;case"delete":$(t)||(a.push(o.get(Fi)),bs(t)&&a.push(o.get(bu)));break;case"set":bs(t)&&a.push(o.get(Fi));break}if(a.length===1)a[0]&&Ru(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ru($h(c))}}function Ru(t,e){const n=$(t)?t:[...t];for(const i of n)i.computed&&Xf(i);for(const i of n)i.computed||Xf(i)}function Xf(t,e){(t!==Gt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function gw(t,e){var n;return(n=ja.get(t))==null?void 0:n.get(e)}const _w=Vh("__proto__,__v_isRef,__isVue"),m_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ls)),Jf=vw();function vw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=fe(this);for(let r=0,o=this.length;r<o;r++)Ct(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(fe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ir();const i=fe(this)[e].apply(this,n);return sr(),i}}),t}function yw(t){const e=fe(this);return Ct(e,"has",t),e.hasOwnProperty(t)}class g_{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,i){const s=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw"&&i===(s?r?xw:E_:r?y_:v_).get(e))return e;const o=$(e);if(!s){if(o&&de(Jf,n))return Reflect.get(Jf,n,i);if(n==="hasOwnProperty")return yw}const a=Reflect.get(e,n,i);return(Ls(n)?m_.has(n):_w(n))||(s||Ct(e,"get",n),r)?a:Me(a)?o&&zh(n)?a:a.value:Ae(a)?s?I_(a):Oo(a):a}}class __ extends g_{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(Ms(r)&&Me(r)&&!Me(i))return!1;if(!this._shallow&&(!Ba(i)&&!Ms(i)&&(r=fe(r),i=fe(i)),!$(e)&&Me(r)&&!Me(i)))return r.value=i,!0;const o=$(e)&&zh(n)?Number(n)<e.length:de(e,n),a=Reflect.set(e,n,i,s);return e===fe(s)&&(o?Hi(i,r)&&zn(e,"set",n,i):zn(e,"add",n,i)),a}deleteProperty(e,n){const i=de(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&zn(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Ls(n)||!m_.has(n))&&Ct(e,"has",n),i}ownKeys(e){return Ct(e,"iterate",$(e)?"length":Fi),Reflect.ownKeys(e)}}class Ew extends g_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Tw=new __,Iw=new Ew,ww=new __(!0),Hh=t=>t,Vc=t=>Reflect.getPrototypeOf(t);function oa(t,e,n=!1,i=!1){t=t.__v_raw;const s=fe(t),r=fe(e);n||(Hi(e,r)&&Ct(s,"get",e),Ct(s,"get",r));const{has:o}=Vc(s),a=i?Hh:n?Qh:eo;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function aa(t,e=!1){const n=this.__v_raw,i=fe(n),s=fe(t);return e||(Hi(t,s)&&Ct(i,"has",t),Ct(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ca(t,e=!1){return t=t.__v_raw,!e&&Ct(fe(t),"iterate",Fi),Reflect.get(t,"size",t)}function Zf(t){t=fe(t);const e=fe(this);return Vc(e).has.call(e,t)||(e.add(t),zn(e,"add",t,t)),this}function ep(t,e){e=fe(e);const n=fe(this),{has:i,get:s}=Vc(n);let r=i.call(n,t);r||(t=fe(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?Hi(e,o)&&zn(n,"set",t,e):zn(n,"add",t,e),this}function tp(t){const e=fe(this),{has:n,get:i}=Vc(e);let s=n.call(e,t);s||(t=fe(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&zn(e,"delete",t,void 0),r}function np(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&zn(t,"clear",void 0,void 0),n}function la(t,e){return function(i,s){const r=this,o=r.__v_raw,a=fe(o),c=e?Hh:t?Qh:eo;return!t&&Ct(a,"iterate",Fi),o.forEach((l,u)=>i.call(s,c(l),c(u),r))}}function ua(t,e,n){return function(...i){const s=this.__v_raw,r=fe(s),o=bs(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...i),u=n?Hh:e?Qh:eo;return!e&&Ct(r,"iterate",c?bu:Fi),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Zn(t){return function(...e){return t==="delete"?!1:this}}function bw(){const t={get(r){return oa(this,r)},get size(){return ca(this)},has:aa,add:Zf,set:ep,delete:tp,clear:np,forEach:la(!1,!1)},e={get(r){return oa(this,r,!1,!0)},get size(){return ca(this)},has:aa,add:Zf,set:ep,delete:tp,clear:np,forEach:la(!1,!0)},n={get(r){return oa(this,r,!0)},get size(){return ca(this,!0)},has(r){return aa.call(this,r,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:la(!0,!1)},i={get(r){return oa(this,r,!0,!0)},get size(){return ca(this,!0)},has(r){return aa.call(this,r,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:la(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ua(r,!1,!1),n[r]=ua(r,!0,!1),e[r]=ua(r,!1,!0),i[r]=ua(r,!0,!0)}),[t,n,e,i]}const[Rw,Aw,Cw,Sw]=bw();function Kh(t,e){const n=e?t?Sw:Cw:t?Aw:Rw;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(de(n,s)&&s in i?n:i,s,r)}const Pw={get:Kh(!1,!1)},kw={get:Kh(!1,!0)},Nw={get:Kh(!0,!1)},v_=new WeakMap,y_=new WeakMap,E_=new WeakMap,xw=new WeakMap;function Ow(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dw(t){return t.__v_skip||!Object.isExtensible(t)?0:Ow(iw(t))}function Oo(t){return Ms(t)?t:Gh(t,!1,Tw,Pw,v_)}function T_(t){return Gh(t,!1,ww,kw,y_)}function I_(t){return Gh(t,!0,Iw,Nw,E_)}function Gh(t,e,n,i,s){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=Dw(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function ui(t){return Ms(t)?ui(t.__v_raw):!!(t&&t.__v_isReactive)}function Ms(t){return!!(t&&t.__v_isReadonly)}function Ba(t){return!!(t&&t.__v_isShallow)}function w_(t){return ui(t)||Ms(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function Fc(t){return za(t,"__v_skip",!0),t}const eo=t=>Ae(t)?Oo(t):t,Qh=t=>Ae(t)?I_(t):t;function b_(t){li&&Gt&&(t=fe(t),p_(t.dep||(t.dep=$h())))}function R_(t,e){t=fe(t);const n=t.dep;n&&Ru(n)}function Me(t){return!!(t&&t.__v_isRef===!0)}function hi(t){return C_(t,!1)}function A_(t){return C_(t,!0)}function C_(t,e){return Me(t)?t:new Lw(t,e)}class Lw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:eo(e)}get value(){return b_(this),this._value}set value(e){const n=this.__v_isShallow||Ba(e)||Ms(e);e=n?e:fe(e),Hi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:eo(e),R_(this))}}function Ui(t){return Me(t)?t.value:t}function Dn(t){return J(t)?t():Ui(t)}const Mw={get:(t,e,n)=>Ui(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Me(s)&&!Me(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function S_(t){return ui(t)?t:new Proxy(t,Mw)}function qw(t){const e=$(t)?new Array(t.length):{};for(const n in t)e[n]=P_(t,n);return e}class Vw{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return gw(fe(this._object),this._key)}}class Fw{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Uw(t,e,n){return Me(t)?t:J(t)?new Fw(t):Ae(t)&&arguments.length>1?P_(t,e,n):hi(t)}function P_(t,e,n){const i=t[e];return Me(i)?i:new Vw(t,e,n)}class zw{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Wh(e,()=>{this._dirty||(this._dirty=!0,R_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=fe(this);return b_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function jw(t,e,n=!1){let i,s;const r=J(t);return r?(i=t,s=en):(i=t.get,s=t.set),new zw(i,s,r||!s,n)}function di(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){Uc(r,e,n)}return s}function tn(t,e,n,i){if(J(t)){const r=di(t,e,n,i);return r&&i_(r)&&r.catch(o=>{Uc(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(tn(t[r],e,n,i));return s}function Uc(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){di(c,null,10,[t,o,a]);return}}Bw(t,n,s,i)}function Bw(t,e,n,i=!0){console.error(t)}let to=!1,Au=!1;const pt=[];let dn=0;const Rs=[];let Ln=null,Ni=0;const k_=Promise.resolve();let Yh=null;function Xh(t){const e=Yh||k_;return t?e.then(this?t.bind(this):t):e}function $w(t){let e=dn+1,n=pt.length;for(;e<n;){const i=e+n>>>1,s=pt[i],r=no(s);r<t||r===t&&s.pre?e=i+1:n=i}return e}function Jh(t){(!pt.length||!pt.includes(t,to&&t.allowRecurse?dn+1:dn))&&(t.id==null?pt.push(t):pt.splice($w(t.id),0,t),N_())}function N_(){!to&&!Au&&(Au=!0,Yh=k_.then(O_))}function Ww(t){const e=pt.indexOf(t);e>dn&&pt.splice(e,1)}function Hw(t){$(t)?Rs.push(...t):(!Ln||!Ln.includes(t,t.allowRecurse?Ni+1:Ni))&&Rs.push(t),N_()}function ip(t,e=to?dn+1:0){for(;e<pt.length;e++){const n=pt[e];n&&n.pre&&(pt.splice(e,1),e--,n())}}function x_(t){if(Rs.length){const e=[...new Set(Rs)];if(Rs.length=0,Ln){Ln.push(...e);return}for(Ln=e,Ln.sort((n,i)=>no(n)-no(i)),Ni=0;Ni<Ln.length;Ni++)Ln[Ni]();Ln=null,Ni=0}}const no=t=>t.id==null?1/0:t.id,Kw=(t,e)=>{const n=no(t)-no(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function O_(t){Au=!1,to=!0,pt.sort(Kw);const e=en;try{for(dn=0;dn<pt.length;dn++){const n=pt[dn];n&&n.active!==!1&&di(n,null,14)}}finally{dn=0,pt.length=0,x_(),to=!1,Yh=null,(pt.length||Rs.length)&&O_()}}function Gw(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Pe;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||Pe;d&&(s=n.map(f=>We(f)?f.trim():f)),h&&(s=n.map(o_))}let a,c=i[a=Ml(e)]||i[a=Ml(bn(e))];!c&&r&&(c=i[a=Ml(nr(e))]),c&&tn(c,t,6,s);const l=i[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,tn(l,t,6,s)}}function D_(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!J(t)){const c=l=>{const u=D_(l,e,!0);u&&(a=!0,ot(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(Ae(t)&&i.set(t,null),null):($(r)?r.forEach(c=>o[c]=null):ot(o,r),Ae(t)&&i.set(t,o),o)}function zc(t,e){return!t||!Oc(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,nr(e))||de(t,e))}let Rt=null,jc=null;function $a(t){const e=Rt;return Rt=t,jc=t&&t.type.__scopeId||null,e}function Qw(t){jc=t}function Yw(){jc=null}function Xw(t,e=Rt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&pp(-1);const r=$a(e);let o;try{o=t(...s)}finally{$a(r),i._d&&pp(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ql(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:v}=t;let y,I;const P=$a(t);try{if(n.shapeFlag&4){const R=s||i;y=hn(u.call(R,R,h,r,f,d,g)),I=c}else{const R=e;y=hn(R.length>1?R(r,{attrs:c,slots:a,emit:l}):R(r,null)),I=e.props?c:Jw(c)}}catch(R){Ur.length=0,Uc(R,t,1),y=Qe(Ki)}let k=y;if(I&&v!==!1){const R=Object.keys(I),{shapeFlag:H}=k;R.length&&H&7&&(o&&R.some(Fh)&&(I=Zw(I,o)),k=qs(k,I))}return n.dirs&&(k=qs(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),y=k,$a(P),y}const Jw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Oc(n))&&((e||(e={}))[n]=t[n]);return e},Zw=(t,e)=>{const n={};for(const i in t)(!Fh(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function e0(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?sp(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!zc(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?sp(i,o,l):!0:!!o;return!1}function sp(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!zc(n,r))return!0}return!1}function t0({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const L_="components";function zi(t,e){return i0(L_,t,!0,e)||t}const n0=Symbol.for("v-ndc");function i0(t,e,n=!0,i=!1){const s=Rt||Be;if(s){const r=s.type;if(t===L_){const a=G0(r,!1);if(a&&(a===e||a===bn(e)||a===Lc(bn(e))))return r}const o=rp(s[t]||r[t],e)||rp(s.appContext[t],e);return!o&&i?r:o}}function rp(t,e){return t&&(t[e]||t[bn(e)]||t[Lc(bn(e))])}const s0=t=>t.__isSuspense;function r0(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):Hw(t)}const ha={};function As(t,e,n){return M_(t,e,n)}function M_(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=Pe){var a;const c=Bh()===((a=Be)==null?void 0:a.scope)?Be:null;let l,u=!1,h=!1;if(Me(t)?(l=()=>t.value,u=Ba(t)):ui(t)?(l=()=>t,i=!0):$(t)?(h=!0,u=t.some(R=>ui(R)||Ba(R)),l=()=>t.map(R=>{if(Me(R))return R.value;if(ui(R))return Oi(R);if(J(R))return di(R,c,2)})):J(t)?e?l=()=>di(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),tn(t,c,3,[f])}:l=en,e&&i){const R=l;l=()=>Oi(R())}let d,f=R=>{d=P.onStop=()=>{di(R,c,4)}},g;if(oo)if(f=en,e?n&&tn(e,c,3,[l(),h?[]:void 0,f]):l(),s==="sync"){const R=X0();g=R.__watcherHandles||(R.__watcherHandles=[])}else return en;let v=h?new Array(t.length).fill(ha):ha;const y=()=>{if(P.active)if(e){const R=P.run();(i||u||(h?R.some((H,ne)=>Hi(H,v[ne])):Hi(R,v)))&&(d&&d(),tn(e,c,3,[R,v===ha?void 0:h&&v[0]===ha?[]:v,f]),v=R)}else P.run()};y.allowRecurse=!!e;let I;s==="sync"?I=y:s==="post"?I=()=>bt(y,c&&c.suspense):(y.pre=!0,c&&(y.id=c.uid),I=()=>Jh(y));const P=new Wh(l,I);e?n?y():v=P.run():s==="post"?bt(P.run.bind(P),c&&c.suspense):P.run();const k=()=>{P.stop(),c&&c.scope&&Uh(c.scope.effects,P)};return g&&g.push(k),k}function o0(t,e,n){const i=this.proxy,s=We(t)?t.includes(".")?q_(i,t):()=>i[t]:t.bind(i,i);let r;J(e)?r=e:(r=e.handler,n=e);const o=Be;Fs(this);const a=M_(s,r.bind(i),n);return o?Fs(o):ji(),a}function q_(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function Oi(t,e){if(!Ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Me(t))Oi(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Oi(t[n],e);else if(tr(t)||bs(t))t.forEach(n=>{Oi(n,e)});else if(r_(t))for(const n in t)Oi(t[n],e);return t}function V_(t,e){const n=Rt;if(n===null)return t;const i=Hc(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,l=Pe]=e[r];o&&(J(o)&&(o={mounted:o,updated:o}),o.deep&&Oi(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ci(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(ir(),tn(c,n,8,[t.el,a,t,e]),sr())}}/*! #__NO_SIDE_EFFECTS__ */function F_(t,e){return J(t)?(()=>ot({name:t.name},e,{setup:t}))():t}const Pa=t=>!!t.type.__asyncLoader,U_=t=>t.type.__isKeepAlive;function a0(t,e){z_(t,"a",e)}function c0(t,e){z_(t,"da",e)}function z_(t,e,n=Be){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Bc(e,i,n),n){let s=n.parent;for(;s&&s.parent;)U_(s.parent.vnode)&&l0(i,e,n,s),s=s.parent}}function l0(t,e,n,i){const s=Bc(e,t,i,!0);j_(()=>{Uh(i[e],s)},n)}function Bc(t,e,n=Be,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ir(),Fs(n);const a=tn(e,n,t,o);return ji(),sr(),a});return i?s.unshift(r):s.push(r),r}}const Qn=t=>(e,n=Be)=>(!oo||t==="sp")&&Bc(t,(...i)=>e(...i),n),u0=Qn("bm"),h0=Qn("m"),d0=Qn("bu"),f0=Qn("u"),p0=Qn("bum"),j_=Qn("um"),B_=Qn("sp"),m0=Qn("rtg"),g0=Qn("rtc");function _0(t,e=Be){Bc("ec",t,e)}function Wa(t,e,n,i){let s;const r=n&&n[i];if($(t)||We(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(Ae(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}const Cu=t=>t?tv(t)?Hc(t)||t.proxy:Cu(t.parent):null,Fr=ot(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Cu(t.parent),$root:t=>Cu(t.root),$emit:t=>t.emit,$options:t=>Zh(t),$forceUpdate:t=>t.f||(t.f=()=>Jh(t.update)),$nextTick:t=>t.n||(t.n=Xh.bind(t.proxy)),$watch:t=>o0.bind(t)}),Vl=(t,e)=>t!==Pe&&!t.__isScriptSetup&&de(t,e),v0={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Vl(i,e))return o[e]=1,i[e];if(s!==Pe&&de(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&de(l,e))return o[e]=3,r[e];if(n!==Pe&&de(n,e))return o[e]=4,n[e];Su&&(o[e]=0)}}const u=Fr[e];let h,d;if(u)return e==="$attrs"&&Ct(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Pe&&de(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,de(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Vl(s,e)?(s[e]=n,!0):i!==Pe&&de(i,e)?(i[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==Pe&&de(t,o)||Vl(e,o)||(a=r[0])&&de(a,o)||de(i,o)||de(Fr,o)||de(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function op(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Su=!0;function y0(t){const e=Zh(t),n=t.proxy,i=t.ctx;Su=!1,e.beforeCreate&&ap(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:v,deactivated:y,beforeDestroy:I,beforeUnmount:P,destroyed:k,unmounted:R,render:H,renderTracked:ne,renderTriggered:he,errorCaptured:K,serverPrefetch:te,expose:Ie,inheritAttrs:at,components:St,directives:Mt,filters:Ai}=e;if(l&&E0(l,i,null),o)for(const Re in o){const ge=o[Re];J(ge)&&(i[Re]=ge.bind(n))}if(s){const Re=s.call(n,n);Ae(Re)&&(t.data=Oo(Re))}if(Su=!0,r)for(const Re in r){const ge=r[Re],xn=J(ge)?ge.bind(n,n):J(ge.get)?ge.get.bind(n,n):en,Jn=!J(ge)&&J(ge.set)?ge.set.bind(n):en,cn=Ft({get:xn,set:Jn});Object.defineProperty(i,Re,{enumerable:!0,configurable:!0,get:()=>cn.value,set:wt=>cn.value=wt})}if(a)for(const Re in a)$_(a[Re],i,n,Re);if(c){const Re=J(c)?c.call(n):c;Reflect.ownKeys(Re).forEach(ge=>{ka(ge,Re[ge])})}u&&ap(u,t,"c");function pe(Re,ge){$(ge)?ge.forEach(xn=>Re(xn.bind(n))):ge&&Re(ge.bind(n))}if(pe(u0,h),pe(h0,d),pe(d0,f),pe(f0,g),pe(a0,v),pe(c0,y),pe(_0,K),pe(g0,ne),pe(m0,he),pe(p0,P),pe(j_,R),pe(B_,te),$(Ie))if(Ie.length){const Re=t.exposed||(t.exposed={});Ie.forEach(ge=>{Object.defineProperty(Re,ge,{get:()=>n[ge],set:xn=>n[ge]=xn})})}else t.exposed||(t.exposed={});H&&t.render===en&&(t.render=H),at!=null&&(t.inheritAttrs=at),St&&(t.components=St),Mt&&(t.directives=Mt)}function E0(t,e,n=en){$(t)&&(t=Pu(t));for(const i in t){const s=t[i];let r;Ae(s)?"default"in s?r=Bt(s.from||i,s.default,!0):r=Bt(s.from||i):r=Bt(s),Me(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function ap(t,e,n){tn($(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function $_(t,e,n,i){const s=i.includes(".")?q_(n,i):()=>n[i];if(We(t)){const r=e[t];J(r)&&As(s,r)}else if(J(t))As(s,t.bind(n));else if(Ae(t))if($(t))t.forEach(r=>$_(r,e,n,i));else{const r=J(t.handler)?t.handler.bind(n):e[t.handler];J(r)&&As(s,r,t)}}function Zh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!n&&!i?c=e:(c={},s.length&&s.forEach(l=>Ha(c,l,o,!0)),Ha(c,e,o)),Ae(e)&&r.set(e,c),c}function Ha(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Ha(t,r,n,!0),s&&s.forEach(o=>Ha(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=T0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const T0={data:cp,props:lp,emits:lp,methods:Nr,computed:Nr,beforeCreate:Et,created:Et,beforeMount:Et,mounted:Et,beforeUpdate:Et,updated:Et,beforeDestroy:Et,beforeUnmount:Et,destroyed:Et,unmounted:Et,activated:Et,deactivated:Et,errorCaptured:Et,serverPrefetch:Et,components:Nr,directives:Nr,watch:w0,provide:cp,inject:I0};function cp(t,e){return e?t?function(){return ot(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function I0(t,e){return Nr(Pu(t),Pu(e))}function Pu(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Et(t,e){return t?[...new Set([].concat(t,e))]:e}function Nr(t,e){return t?ot(Object.create(null),t,e):e}function lp(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:ot(Object.create(null),op(t),op(e??{})):e}function w0(t,e){if(!t)return e;if(!e)return t;const n=ot(Object.create(null),t);for(const i in e)n[i]=Et(t[i],e[i]);return n}function W_(){return{app:null,config:{isNativeTag:ew,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let b0=0;function R0(t,e){return function(i,s=null){J(i)||(i=ot({},i)),s!=null&&!Ae(s)&&(s=null);const r=W_(),o=new WeakSet;let a=!1;const c=r.app={_uid:b0++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:J0,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&J(l.install)?(o.add(l),l.install(c,...u)):J(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const d=Qe(i,s);return d.appContext=r,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Hc(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c},runWithContext(l){io=c;try{return l()}finally{io=null}}};return c}}let io=null;function ka(t,e){if(Be){let n=Be.provides;const i=Be.parent&&Be.parent.provides;i===n&&(n=Be.provides=Object.create(i)),n[t]=e}}function Bt(t,e,n=!1){const i=Be||Rt;if(i||io){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:io._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&J(e)?e.call(i&&i.proxy):e}}function A0(){return!!(Be||Rt||io)}function C0(t,e,n,i=!1){const s={},r={};za(r,Wc,1),t.propsDefaults=Object.create(null),H_(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:T_(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function S0(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=fe(s),[c]=t.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(zc(t.emitsOptions,d))continue;const f=e[d];if(c)if(de(r,d))f!==r[d]&&(r[d]=f,l=!0);else{const g=bn(d);s[g]=ku(c,a,g,f,t,!1)}else f!==r[d]&&(r[d]=f,l=!0)}}}else{H_(t,e,s,r)&&(l=!0);let u;for(const h in a)(!e||!de(e,h)&&((u=nr(h))===h||!de(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ku(c,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!de(e,h))&&(delete r[h],l=!0)}l&&zn(t,"set","$attrs")}function H_(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ca(c))continue;const l=e[c];let u;s&&de(s,u=bn(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:zc(t.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=fe(n),l=a||Pe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=ku(s,c,h,l[h],t,!de(l,h))}}return o}function ku(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&J(c)){const{propsDefaults:l}=s;n in l?i=l[n]:(Fs(s),i=l[n]=c.call(null,e),ji())}else i=c}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===nr(n))&&(i=!0))}return i}function K_(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let c=!1;if(!J(t)){const u=h=>{c=!0;const[d,f]=K_(h,e,!0);ot(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return Ae(t)&&i.set(t,ws),ws;if($(r))for(let u=0;u<r.length;u++){const h=bn(r[u]);up(h)&&(o[h]=Pe)}else if(r)for(const u in r){const h=bn(u);if(up(h)){const d=r[u],f=o[h]=$(d)||J(d)?{type:d}:ot({},d);if(f){const g=fp(Boolean,f.type),v=fp(String,f.type);f[0]=g>-1,f[1]=v<0||g<v,(g>-1||de(f,"default"))&&a.push(h)}}}const l=[o,a];return Ae(t)&&i.set(t,l),l}function up(t){return t[0]!=="$"}function hp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function dp(t,e){return hp(t)===hp(e)}function fp(t,e){return $(e)?e.findIndex(n=>dp(n,t)):J(e)&&dp(e,t)?0:-1}const G_=t=>t[0]==="_"||t==="$stable",ed=t=>$(t)?t.map(hn):[hn(t)],P0=(t,e,n)=>{if(e._n)return e;const i=Xw((...s)=>ed(e(...s)),n);return i._c=!1,i},Q_=(t,e,n)=>{const i=t._ctx;for(const s in t){if(G_(s))continue;const r=t[s];if(J(r))e[s]=P0(s,r,i);else if(r!=null){const o=ed(r);e[s]=()=>o}}},Y_=(t,e)=>{const n=ed(e);t.slots.default=()=>n},k0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),za(e,"_",n)):Q_(e,t.slots={})}else t.slots={},e&&Y_(t,e);za(t.slots,Wc,1)},N0=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Pe;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(ot(s,e),!n&&a===1&&delete s._):(r=!e.$stable,Q_(e,s)),o=e}else e&&(Y_(t,e),o={default:1});if(r)for(const a in s)!G_(a)&&o[a]==null&&delete s[a]};function Nu(t,e,n,i,s=!1){if($(t)){t.forEach((d,f)=>Nu(d,e&&($(e)?e[f]:e),n,i,s));return}if(Pa(i)&&!s)return;const r=i.shapeFlag&4?Hc(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Pe?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(We(l)?(u[l]=null,de(h,l)&&(h[l]=null)):Me(l)&&(l.value=null)),J(c))di(c,a,12,[o,u]);else{const d=We(c),f=Me(c);if(d||f){const g=()=>{if(t.f){const v=d?de(h,c)?h[c]:u[c]:c.value;s?$(v)&&Uh(v,r):$(v)?v.includes(r)||v.push(r):d?(u[c]=[r],de(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,de(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,bt(g,n)):g()}}}const bt=r0;function x0(t){return O0(t)}function O0(t,e){const n=Iu();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=en,insertStaticContent:g}=t,v=(p,m,_,E=null,w=null,A=null,M=!1,N=null,x=!!m.dynamicChildren)=>{if(p===m)return;p&&!yr(p,m)&&(E=T(p),wt(p,w,A,!0),p=null),m.patchFlag===-2&&(x=!1,m.dynamicChildren=null);const{type:S,ref:j,shapeFlag:F}=m;switch(S){case $c:y(p,m,_,E);break;case Ki:I(p,m,_,E);break;case Fl:p==null&&P(m,_,E,M);break;case Tt:St(p,m,_,E,w,A,M,N,x);break;default:F&1?H(p,m,_,E,w,A,M,N,x):F&6?Mt(p,m,_,E,w,A,M,N,x):(F&64||F&128)&&S.process(p,m,_,E,w,A,M,N,x,O)}j!=null&&w&&Nu(j,p&&p.ref,A,m||p,!m)},y=(p,m,_,E)=>{if(p==null)i(m.el=a(m.children),_,E);else{const w=m.el=p.el;m.children!==p.children&&l(w,m.children)}},I=(p,m,_,E)=>{p==null?i(m.el=c(m.children||""),_,E):m.el=p.el},P=(p,m,_,E)=>{[p.el,p.anchor]=g(p.children,m,_,E,p.el,p.anchor)},k=({el:p,anchor:m},_,E)=>{let w;for(;p&&p!==m;)w=d(p),i(p,_,E),p=w;i(m,_,E)},R=({el:p,anchor:m})=>{let _;for(;p&&p!==m;)_=d(p),s(p),p=_;s(m)},H=(p,m,_,E,w,A,M,N,x)=>{M=M||m.type==="svg",p==null?ne(m,_,E,w,A,M,N,x):te(p,m,w,A,M,N,x)},ne=(p,m,_,E,w,A,M,N)=>{let x,S;const{type:j,props:F,shapeFlag:B,transition:Z,dirs:ie}=p;if(x=p.el=o(p.type,A,F&&F.is,F),B&8?u(x,p.children):B&16&&K(p.children,x,null,E,w,A&&j!=="foreignObject",M,N),ie&&Ci(p,null,E,"created"),he(x,p,p.scopeId,M,E),F){for(const we in F)we!=="value"&&!Ca(we)&&r(x,we,null,F[we],A,p.children,E,w,ct);"value"in F&&r(x,"value",null,F.value),(S=F.onVnodeBeforeMount)&&un(S,E,p)}ie&&Ci(p,null,E,"beforeMount");const Ce=D0(w,Z);Ce&&Z.beforeEnter(x),i(x,m,_),((S=F&&F.onVnodeMounted)||Ce||ie)&&bt(()=>{S&&un(S,E,p),Ce&&Z.enter(x),ie&&Ci(p,null,E,"mounted")},w)},he=(p,m,_,E,w)=>{if(_&&f(p,_),E)for(let A=0;A<E.length;A++)f(p,E[A]);if(w){let A=w.subTree;if(m===A){const M=w.vnode;he(p,M,M.scopeId,M.slotScopeIds,w.parent)}}},K=(p,m,_,E,w,A,M,N,x=0)=>{for(let S=x;S<p.length;S++){const j=p[S]=N?ii(p[S]):hn(p[S]);v(null,j,m,_,E,w,A,M,N)}},te=(p,m,_,E,w,A,M)=>{const N=m.el=p.el;let{patchFlag:x,dynamicChildren:S,dirs:j}=m;x|=p.patchFlag&16;const F=p.props||Pe,B=m.props||Pe;let Z;_&&Si(_,!1),(Z=B.onVnodeBeforeUpdate)&&un(Z,_,m,p),j&&Ci(m,p,_,"beforeUpdate"),_&&Si(_,!0);const ie=w&&m.type!=="foreignObject";if(S?Ie(p.dynamicChildren,S,N,_,E,ie,A):M||ge(p,m,N,null,_,E,ie,A,!1),x>0){if(x&16)at(N,m,F,B,_,E,w);else if(x&2&&F.class!==B.class&&r(N,"class",null,B.class,w),x&4&&r(N,"style",F.style,B.style,w),x&8){const Ce=m.dynamicProps;for(let we=0;we<Ce.length;we++){const Fe=Ce[we],Wt=F[Fe],hs=B[Fe];(hs!==Wt||Fe==="value")&&r(N,Fe,Wt,hs,w,p.children,_,E,ct)}}x&1&&p.children!==m.children&&u(N,m.children)}else!M&&S==null&&at(N,m,F,B,_,E,w);((Z=B.onVnodeUpdated)||j)&&bt(()=>{Z&&un(Z,_,m,p),j&&Ci(m,p,_,"updated")},E)},Ie=(p,m,_,E,w,A,M)=>{for(let N=0;N<m.length;N++){const x=p[N],S=m[N],j=x.el&&(x.type===Tt||!yr(x,S)||x.shapeFlag&70)?h(x.el):_;v(x,S,j,null,E,w,A,M,!0)}},at=(p,m,_,E,w,A,M)=>{if(_!==E){if(_!==Pe)for(const N in _)!Ca(N)&&!(N in E)&&r(p,N,_[N],null,M,m.children,w,A,ct);for(const N in E){if(Ca(N))continue;const x=E[N],S=_[N];x!==S&&N!=="value"&&r(p,N,S,x,M,m.children,w,A,ct)}"value"in E&&r(p,"value",_.value,E.value)}},St=(p,m,_,E,w,A,M,N,x)=>{const S=m.el=p?p.el:a(""),j=m.anchor=p?p.anchor:a("");let{patchFlag:F,dynamicChildren:B,slotScopeIds:Z}=m;Z&&(N=N?N.concat(Z):Z),p==null?(i(S,_,E),i(j,_,E),K(m.children,_,j,w,A,M,N,x)):F>0&&F&64&&B&&p.dynamicChildren?(Ie(p.dynamicChildren,B,_,w,A,M,N),(m.key!=null||w&&m===w.subTree)&&X_(p,m,!0)):ge(p,m,_,j,w,A,M,N,x)},Mt=(p,m,_,E,w,A,M,N,x)=>{m.slotScopeIds=N,p==null?m.shapeFlag&512?w.ctx.activate(m,_,E,M,x):Ai(m,_,E,w,A,M,x):qt(p,m,x)},Ai=(p,m,_,E,w,A,M)=>{const N=p.component=B0(p,E,w);if(U_(p)&&(N.ctx.renderer=O),$0(N),N.asyncDep){if(w&&w.registerDep(N,pe),!p.el){const x=N.subTree=Qe(Ki);I(null,x,m,_)}return}pe(N,p,m,_,w,A,M)},qt=(p,m,_)=>{const E=m.component=p.component;if(e0(p,m,_))if(E.asyncDep&&!E.asyncResolved){Re(E,m,_);return}else E.next=m,Ww(E.update),E.update();else m.el=p.el,E.vnode=m},pe=(p,m,_,E,w,A,M)=>{const N=()=>{if(p.isMounted){let{next:j,bu:F,u:B,parent:Z,vnode:ie}=p,Ce=j,we;Si(p,!1),j?(j.el=ie.el,Re(p,j,M)):j=ie,F&&Sa(F),(we=j.props&&j.props.onVnodeBeforeUpdate)&&un(we,Z,j,ie),Si(p,!0);const Fe=ql(p),Wt=p.subTree;p.subTree=Fe,v(Wt,Fe,h(Wt.el),T(Wt),p,w,A),j.el=Fe.el,Ce===null&&t0(p,Fe.el),B&&bt(B,w),(we=j.props&&j.props.onVnodeUpdated)&&bt(()=>un(we,Z,j,ie),w)}else{let j;const{el:F,props:B}=m,{bm:Z,m:ie,parent:Ce}=p,we=Pa(m);if(Si(p,!1),Z&&Sa(Z),!we&&(j=B&&B.onVnodeBeforeMount)&&un(j,Ce,m),Si(p,!0),F&&_e){const Fe=()=>{p.subTree=ql(p),_e(F,p.subTree,p,w,null)};we?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Fe()):Fe()}else{const Fe=p.subTree=ql(p);v(null,Fe,_,E,p,w,A),m.el=Fe.el}if(ie&&bt(ie,w),!we&&(j=B&&B.onVnodeMounted)){const Fe=m;bt(()=>un(j,Ce,Fe),w)}(m.shapeFlag&256||Ce&&Pa(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&p.a&&bt(p.a,w),p.isMounted=!0,m=_=E=null}},x=p.effect=new Wh(N,()=>Jh(S),p.scope),S=p.update=()=>x.run();S.id=p.uid,Si(p,!0),S()},Re=(p,m,_)=>{m.component=p;const E=p.vnode.props;p.vnode=m,p.next=null,S0(p,m.props,E,_),N0(p,m.children,_),ir(),ip(),sr()},ge=(p,m,_,E,w,A,M,N,x=!1)=>{const S=p&&p.children,j=p?p.shapeFlag:0,F=m.children,{patchFlag:B,shapeFlag:Z}=m;if(B>0){if(B&128){Jn(S,F,_,E,w,A,M,N,x);return}else if(B&256){xn(S,F,_,E,w,A,M,N,x);return}}Z&8?(j&16&&ct(S,w,A),F!==S&&u(_,F)):j&16?Z&16?Jn(S,F,_,E,w,A,M,N,x):ct(S,w,A,!0):(j&8&&u(_,""),Z&16&&K(F,_,E,w,A,M,N,x))},xn=(p,m,_,E,w,A,M,N,x)=>{p=p||ws,m=m||ws;const S=p.length,j=m.length,F=Math.min(S,j);let B;for(B=0;B<F;B++){const Z=m[B]=x?ii(m[B]):hn(m[B]);v(p[B],Z,_,null,w,A,M,N,x)}S>j?ct(p,w,A,!0,!1,F):K(m,_,E,w,A,M,N,x,F)},Jn=(p,m,_,E,w,A,M,N,x)=>{let S=0;const j=m.length;let F=p.length-1,B=j-1;for(;S<=F&&S<=B;){const Z=p[S],ie=m[S]=x?ii(m[S]):hn(m[S]);if(yr(Z,ie))v(Z,ie,_,null,w,A,M,N,x);else break;S++}for(;S<=F&&S<=B;){const Z=p[F],ie=m[B]=x?ii(m[B]):hn(m[B]);if(yr(Z,ie))v(Z,ie,_,null,w,A,M,N,x);else break;F--,B--}if(S>F){if(S<=B){const Z=B+1,ie=Z<j?m[Z].el:E;for(;S<=B;)v(null,m[S]=x?ii(m[S]):hn(m[S]),_,ie,w,A,M,N,x),S++}}else if(S>B)for(;S<=F;)wt(p[S],w,A,!0),S++;else{const Z=S,ie=S,Ce=new Map;for(S=ie;S<=B;S++){const Pt=m[S]=x?ii(m[S]):hn(m[S]);Pt.key!=null&&Ce.set(Pt.key,S)}let we,Fe=0;const Wt=B-ie+1;let hs=!1,Wf=0;const vr=new Array(Wt);for(S=0;S<Wt;S++)vr[S]=0;for(S=Z;S<=F;S++){const Pt=p[S];if(Fe>=Wt){wt(Pt,w,A,!0);continue}let ln;if(Pt.key!=null)ln=Ce.get(Pt.key);else for(we=ie;we<=B;we++)if(vr[we-ie]===0&&yr(Pt,m[we])){ln=we;break}ln===void 0?wt(Pt,w,A,!0):(vr[ln-ie]=S+1,ln>=Wf?Wf=ln:hs=!0,v(Pt,m[ln],_,null,w,A,M,N,x),Fe++)}const Hf=hs?L0(vr):ws;for(we=Hf.length-1,S=Wt-1;S>=0;S--){const Pt=ie+S,ln=m[Pt],Kf=Pt+1<j?m[Pt+1].el:E;vr[S]===0?v(null,ln,_,Kf,w,A,M,N,x):hs&&(we<0||S!==Hf[we]?cn(ln,_,Kf,2):we--)}}},cn=(p,m,_,E,w=null)=>{const{el:A,type:M,transition:N,children:x,shapeFlag:S}=p;if(S&6){cn(p.component.subTree,m,_,E);return}if(S&128){p.suspense.move(m,_,E);return}if(S&64){M.move(p,m,_,O);return}if(M===Tt){i(A,m,_);for(let F=0;F<x.length;F++)cn(x[F],m,_,E);i(p.anchor,m,_);return}if(M===Fl){k(p,m,_);return}if(E!==2&&S&1&&N)if(E===0)N.beforeEnter(A),i(A,m,_),bt(()=>N.enter(A),w);else{const{leave:F,delayLeave:B,afterLeave:Z}=N,ie=()=>i(A,m,_),Ce=()=>{F(A,()=>{ie(),Z&&Z()})};B?B(A,ie,Ce):Ce()}else i(A,m,_)},wt=(p,m,_,E=!1,w=!1)=>{const{type:A,props:M,ref:N,children:x,dynamicChildren:S,shapeFlag:j,patchFlag:F,dirs:B}=p;if(N!=null&&Nu(N,null,_,p,!0),j&256){m.ctx.deactivate(p);return}const Z=j&1&&B,ie=!Pa(p);let Ce;if(ie&&(Ce=M&&M.onVnodeBeforeUnmount)&&un(Ce,m,p),j&6)ra(p.component,_,E);else{if(j&128){p.suspense.unmount(_,E);return}Z&&Ci(p,null,m,"beforeUnmount"),j&64?p.type.remove(p,m,_,w,O,E):S&&(A!==Tt||F>0&&F&64)?ct(S,m,_,!1,!0):(A===Tt&&F&384||!w&&j&16)&&ct(x,m,_),E&&ls(p)}(ie&&(Ce=M&&M.onVnodeUnmounted)||Z)&&bt(()=>{Ce&&un(Ce,m,p),Z&&Ci(p,null,m,"unmounted")},_)},ls=p=>{const{type:m,el:_,anchor:E,transition:w}=p;if(m===Tt){us(_,E);return}if(m===Fl){R(p);return}const A=()=>{s(_),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(p.shapeFlag&1&&w&&!w.persisted){const{leave:M,delayLeave:N}=w,x=()=>M(_,A);N?N(p.el,A,x):x()}else A()},us=(p,m)=>{let _;for(;p!==m;)_=d(p),s(p),p=_;s(m)},ra=(p,m,_)=>{const{bum:E,scope:w,update:A,subTree:M,um:N}=p;E&&Sa(E),w.stop(),A&&(A.active=!1,wt(M,p,m,_)),N&&bt(N,m),bt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},ct=(p,m,_,E=!1,w=!1,A=0)=>{for(let M=A;M<p.length;M++)wt(p[M],m,_,E,w)},T=p=>p.shapeFlag&6?T(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),q=(p,m,_)=>{p==null?m._vnode&&wt(m._vnode,null,null,!0):v(m._vnode||null,p,m,null,null,null,_),ip(),x_(),m._vnode=p},O={p:v,um:wt,m:cn,r:ls,mt:Ai,mc:K,pc:ge,pbc:Ie,n:T,o:t};let U,_e;return e&&([U,_e]=e(O)),{render:q,hydrate:U,createApp:R0(q,U)}}function Si({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function D0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function X_(t,e,n=!1){const i=t.children,s=e.children;if($(i)&&$(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ii(s[r]),a.el=o.el),n||X_(o,a)),a.type===$c&&(a.el=o.el)}}function L0(t){const e=t.slice(),n=[0];let i,s,r,o,a;const c=t.length;for(i=0;i<c;i++){const l=t[i];if(l!==0){if(s=n[n.length-1],t[s]<l){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const M0=t=>t.__isTeleport,Tt=Symbol.for("v-fgt"),$c=Symbol.for("v-txt"),Ki=Symbol.for("v-cmt"),Fl=Symbol.for("v-stc"),Ur=[];let Yt=null;function Ee(t=!1){Ur.push(Yt=t?null:[])}function q0(){Ur.pop(),Yt=Ur[Ur.length-1]||null}let so=1;function pp(t){so+=t}function J_(t){return t.dynamicChildren=so>0?Yt||ws:null,q0(),so>0&&Yt&&Yt.push(t),t}function De(t,e,n,i,s,r){return J_(se(t,e,n,i,s,r,!0))}function ro(t,e,n,i,s){return J_(Qe(t,e,n,i,s,!0))}function xu(t){return t?t.__v_isVNode===!0:!1}function yr(t,e){return t.type===e.type&&t.key===e.key}const Wc="__vInternal",Z_=({key:t})=>t??null,Na=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||Me(t)||J(t)?{i:Rt,r:t,k:e,f:!!n}:t:null);function se(t,e=null,n=null,i=0,s=null,r=t===Tt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Z_(e),ref:e&&Na(e),scopeId:jc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Rt};return a?(td(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=We(n)?8:16),so>0&&!o&&Yt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Yt.push(c),c}const Qe=V0;function V0(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===n0)&&(t=Ki),xu(t)){const a=qs(t,e,!0);return n&&td(a,n),so>0&&!r&&Yt&&(a.shapeFlag&6?Yt[Yt.indexOf(t)]=a:Yt.push(a)),a.patchFlag|=-2,a}if(Q0(t)&&(t=t.__vccOpts),e){e=F0(e);let{class:a,style:c}=e;a&&!We(a)&&(e.class=Mc(a)),Ae(c)&&(w_(c)&&!$(c)&&(c=ot({},c)),e.style=Zr(c))}const o=We(t)?1:s0(t)?128:M0(t)?64:Ae(t)?4:J(t)?2:0;return se(t,e,n,i,s,o,r,!0)}function F0(t){return t?w_(t)||Wc in t?ot({},t):t:null}function qs(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?U0(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Z_(a),ref:e&&e.ref?n&&s?$(s)?s.concat(Na(e)):[s,Na(e)]:Na(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Tt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&qs(t.ssContent),ssFallback:t.ssFallback&&qs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Vs(t=" ",e=0){return Qe($c,null,t,e)}function Kt(t="",e=!1){return e?(Ee(),ro(Ki,null,t)):Qe(Ki,null,t)}function hn(t){return t==null||typeof t=="boolean"?Qe(Ki):$(t)?Qe(Tt,null,t.slice()):typeof t=="object"?ii(t):Qe($c,null,String(t))}function ii(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:qs(t)}function td(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),td(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Wc in e)?e._ctx=Rt:s===3&&Rt&&(Rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:Rt},n=32):(e=String(e),i&64?(n=16,e=[Vs(e)]):n=8);t.children=e,t.shapeFlag|=n}function U0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Mc([e.class,i.class]));else if(s==="style")e.style=Zr([e.style,i.style]);else if(Oc(s)){const r=e[s],o=i[s];o&&r!==o&&!($(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function un(t,e,n,i=null){tn(t,e,7,[n,i])}const z0=W_();let j0=0;function B0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||z0,r={uid:j0++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new l_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:K_(i,s),emitsOptions:D_(i,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:i.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Gw.bind(null,r),t.ce&&t.ce(r),r}let Be=null;const ev=()=>Be||Rt;let nd,ds,mp="__VUE_INSTANCE_SETTERS__";(ds=Iu()[mp])||(ds=Iu()[mp]=[]),ds.push(t=>Be=t),nd=t=>{ds.length>1?ds.forEach(e=>e(t)):ds[0](t)};const Fs=t=>{nd(t),t.scope.on()},ji=()=>{Be&&Be.scope.off(),nd(null)};function tv(t){return t.vnode.shapeFlag&4}let oo=!1;function $0(t,e=!1){oo=e;const{props:n,children:i}=t.vnode,s=tv(t);C0(t,n,s,e),k0(t,i);const r=s?W0(t,e):void 0;return oo=!1,r}function W0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Fc(new Proxy(t.ctx,v0));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?K0(t):null;Fs(t),ir();const r=di(i,t,0,[t.props,s]);if(sr(),ji(),i_(r)){if(r.then(ji,ji),e)return r.then(o=>{gp(t,o,e)}).catch(o=>{Uc(o,t,0)});t.asyncDep=r}else gp(t,r,e)}else nv(t,e)}function gp(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=S_(e)),nv(t,n)}let _p;function nv(t,e,n){const i=t.type;if(!t.render){if(!e&&_p&&!i.render){const s=i.template||Zh(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=i,l=ot(ot({isCustomElement:r,delimiters:a},o),c);i.render=_p(s,l)}}t.render=i.render||en}{Fs(t),ir();try{y0(t)}finally{sr(),ji()}}}function H0(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ct(t,"get","$attrs"),e[n]}}))}function K0(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return H0(t)},slots:t.slots,emit:t.emit,expose:e}}function Hc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(S_(Fc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fr)return Fr[n](t)},has(e,n){return n in e||n in Fr}}))}function G0(t,e=!0){return J(t)?t.displayName||t.name:t.name||e&&t.__name}function Q0(t){return J(t)&&"__vccOpts"in t}const Ft=(t,e)=>jw(t,e,oo);function iv(t,e,n){const i=arguments.length;return i===2?Ae(e)&&!$(e)?xu(e)?Qe(t,null,[e]):Qe(t,e):Qe(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&xu(n)&&(n=[n]),Qe(t,e,n))}const Y0=Symbol.for("v-scx"),X0=()=>Bt(Y0),J0="3.3.8",Z0="http://www.w3.org/2000/svg",xi=typeof document<"u"?document:null,vp=xi&&xi.createElement("template"),eb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?xi.createElementNS(Z0,t):xi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>xi.createTextNode(t),createComment:t=>xi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{vp.innerHTML=i?`<svg>${t}</svg>`:t;const a=vp.content;if(i){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},tb=Symbol("_vtc");function nb(t,e,n){const i=t[tb];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ib=Symbol("_vod");function sb(t,e,n){const i=t.style,s=We(n);if(n&&!s){if(e&&!We(e))for(const r in e)n[r]==null&&Ou(i,r,"");for(const r in n)Ou(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),ib in t&&(i.display=r)}}const yp=/\s*!important$/;function Ou(t,e,n){if($(n))n.forEach(i=>Ou(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=rb(t,e);yp.test(n)?t.setProperty(nr(i),n.replace(yp,""),"important"):t[i]=n}}const Ep=["Webkit","Moz","ms"],Ul={};function rb(t,e){const n=Ul[e];if(n)return n;let i=bn(e);if(i!=="filter"&&i in t)return Ul[e]=i;i=Lc(i);for(let s=0;s<Ep.length;s++){const r=Ep[s]+i;if(r in t)return Ul[e]=r}return e}const Tp="http://www.w3.org/1999/xlink";function ob(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Tp,e.slice(6,e.length)):t.setAttributeNS(Tp,e,n);else{const r=hw(e);n==null||r&&!a_(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function ab(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=a_(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function id(t,e,n,i){t.addEventListener(e,n,i)}function cb(t,e,n,i){t.removeEventListener(e,n,i)}const Ip=Symbol("_vei");function lb(t,e,n,i,s=null){const r=t[Ip]||(t[Ip]={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=ub(e);if(i){const l=r[e]=fb(i,s);id(t,a,l,c)}else o&&(cb(t,a,o,c),r[e]=void 0)}}const wp=/(?:Once|Passive|Capture)$/;function ub(t){let e;if(wp.test(t)){e={};let i;for(;i=t.match(wp);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):nr(t.slice(2)),e]}let zl=0;const hb=Promise.resolve(),db=()=>zl||(hb.then(()=>zl=0),zl=Date.now());function fb(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;tn(pb(i,n.value),e,5,[i])};return n.value=t,n.attached=db(),n}function pb(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const bp=/^on[a-z]/,mb=(t,e,n,i,s=!1,r,o,a,c)=>{e==="class"?nb(t,i,s):e==="style"?sb(t,n,i):Oc(e)?Fh(e)||lb(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gb(t,e,i,s))?ab(t,e,i,r,o,a,c):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),ob(t,e,i,s))};function gb(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&bp.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||bp.test(e)&&We(n)?!1:e in t}const Ka=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>Sa(e,n):e},Cs=Symbol("_assign"),_b={deep:!0,created(t,e,n){t[Cs]=Ka(n),id(t,"change",()=>{const i=t._modelValue,s=ao(t),r=t.checked,o=t[Cs];if($(i)){const a=jh(i,s),c=a!==-1;if(r&&!c)o(i.concat(s));else if(!r&&c){const l=[...i];l.splice(a,1),o(l)}}else if(tr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(sv(t,r))})},mounted:Rp,beforeUpdate(t,e,n){t[Cs]=Ka(n),Rp(t,e,n)}};function Rp(t,{value:e,oldValue:n},i){t._modelValue=e,$(e)?t.checked=jh(e,i.props.value)>-1:tr(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=xo(e,sv(t,!0)))}const vb={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=tr(e);id(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?o_(ao(o)):ao(o));t[Cs](t.multiple?s?new Set(r):r:r[0])}),t[Cs]=Ka(i)},mounted(t,{value:e}){Ap(t,e)},beforeUpdate(t,e,n){t[Cs]=Ka(n)},updated(t,{value:e}){Ap(t,e)}};function Ap(t,e){const n=t.multiple;if(!(n&&!$(e)&&!tr(e))){for(let i=0,s=t.options.length;i<s;i++){const r=t.options[i],o=ao(r);if(n)$(e)?r.selected=jh(e,o)>-1:r.selected=e.has(o);else if(xo(ao(r),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ao(t){return"_value"in t?t._value:t.value}function sv(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const yb=ot({patchProp:mb},eb);let Cp;function Eb(){return Cp||(Cp=x0(yb))}const Tb=(...t)=>{const e=Eb().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Ib(i);if(!s)return;const r=e._component;!J(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ib(t){return We(t)?document.querySelector(t):t}var wb=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let rv;const Kc=t=>rv=t,ov=Symbol();function Du(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var zr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(zr||(zr={}));function bb(){const t=qc(!0),e=t.run(()=>hi({}));let n=[],i=[];const s=Fc({install(r){Kc(s),s._a=r,r.provide(ov,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!wb?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const av=()=>{};function Sp(t,e,n,i=av){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&Bh()&&u_(s),s}function fs(t,...e){t.slice().forEach(n=>{n(...e)})}const Rb=t=>t();function Lu(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];Du(s)&&Du(i)&&t.hasOwnProperty(n)&&!Me(i)&&!ui(i)?t[n]=Lu(s,i):t[n]=i}return t}const Ab=Symbol();function Cb(t){return!Du(t)||!t.hasOwnProperty(Ab)}const{assign:ni}=Object;function Sb(t){return!!(Me(t)&&t.effect)}function Pb(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=qw(n.state.value[t]);return ni(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=Fc(Ft(()=>{Kc(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return c=cv(t,l,e,n,i,!0),c}function cv(t,e,n={},i,s,r){let o;const a=ni({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],f;const g=i.state.value[t];!r&&!g&&(i.state.value[t]={}),hi({});let v;function y(K){let te;l=u=!1,typeof K=="function"?(K(i.state.value[t]),te={type:zr.patchFunction,storeId:t,events:f}):(Lu(i.state.value[t],K),te={type:zr.patchObject,payload:K,storeId:t,events:f});const Ie=v=Symbol();Xh().then(()=>{v===Ie&&(l=!0)}),u=!0,fs(h,te,i.state.value[t])}const I=r?function(){const{state:te}=n,Ie=te?te():{};this.$patch(at=>{ni(at,Ie)})}:av;function P(){o.stop(),h=[],d=[],i._s.delete(t)}function k(K,te){return function(){Kc(i);const Ie=Array.from(arguments),at=[],St=[];function Mt(pe){at.push(pe)}function Ai(pe){St.push(pe)}fs(d,{args:Ie,name:K,store:H,after:Mt,onError:Ai});let qt;try{qt=te.apply(this&&this.$id===t?this:H,Ie)}catch(pe){throw fs(St,pe),pe}return qt instanceof Promise?qt.then(pe=>(fs(at,pe),pe)).catch(pe=>(fs(St,pe),Promise.reject(pe))):(fs(at,qt),qt)}}const R={_p:i,$id:t,$onAction:Sp.bind(null,d),$patch:y,$reset:I,$subscribe(K,te={}){const Ie=Sp(h,K,te.detached,()=>at()),at=o.run(()=>As(()=>i.state.value[t],St=>{(te.flush==="sync"?u:l)&&K({storeId:t,type:zr.direct,events:f},St)},ni({},c,te)));return Ie},$dispose:P},H=Oo(R);i._s.set(t,H);const he=(i._a&&i._a.runWithContext||Rb)(()=>i._e.run(()=>(o=qc()).run(e)));for(const K in he){const te=he[K];if(Me(te)&&!Sb(te)||ui(te))r||(g&&Cb(te)&&(Me(te)?te.value=g[K]:Lu(te,g[K])),i.state.value[t][K]=te);else if(typeof te=="function"){const Ie=k(K,te);he[K]=Ie,a.actions[K]=te}}return ni(H,he),ni(fe(H),he),Object.defineProperty(H,"$state",{get:()=>i.state.value[t],set:K=>{y(te=>{ni(te,K)})}}),i._p.forEach(K=>{ni(H,o.run(()=>K({store:H,app:i._a,pinia:i,options:a})))}),g&&r&&n.hydrate&&n.hydrate(H.$state,g),l=!0,u=!0,H}function lv(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,c){const l=A0();return a=a||(l?Bt(ov,null):null),a&&Kc(a),a=rv,a._s.has(i)||(r?cv(i,e,s,a):Pb(i,s,a)),a._s.get(i)}return o.$id=i,o}const Yn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},kb={};function Nb(t,e){const n=zi("router-view");return Ee(),ro(n)}const xb=Yn(kb,[["render",Nb]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(t,e){if(!t)throw rr(e)},rr=function(t){return new Error("Firebase Database ("+uv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ob=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Gc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),i.push(n[u],n[h],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ob(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||l==null||h==null)throw new Db;const d=r<<2|a>>4;if(i.push(d),l!==64){const f=a<<4&240|l>>2;if(i.push(f),h!==64){const g=l<<6&192|h;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Db extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dv=function(t){const e=hv(t);return Gc.encodeByteArray(e,!0)},Ga=function(t){return dv(t).replace(/\./g,"")},Qa=function(t){try{return Gc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(t){return fv(void 0,t)}function fv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Mb(n)||(t[n]=fv(t[n],e[n]));return t}function Mb(t){return t!=="__proto__"}/**
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
 */function qb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vb=()=>qb().__FIREBASE_DEFAULTS__,Fb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ub=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qa(t[1]);return e&&JSON.parse(e)},sd=()=>{try{return Vb()||Fb()||Ub()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pv=t=>{var e,n;return(n=(e=sd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zb=t=>{const e=pv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},mv=()=>{var t;return(t=sd())===null||t===void 0?void 0:t.config},gv=t=>{var e;return(e=sd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function jb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ga(JSON.stringify(n)),Ga(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function Bb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _v(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $b(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vv(){return uv.NODE_ADMIN===!0}function yv(){try{return typeof indexedDB=="object"}catch{return!1}}function Wb(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb="FirebaseError";class kn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Hb,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,or.prototype.create)}}class or{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Kb(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new kn(s,a,i)}}function Kb(t,e){return t.replace(Gb,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Gb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t){return JSON.parse(t)}function nt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=lo(Qa(r[0])||""),n=lo(Qa(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Qb=function(t){const e=Ev(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Yb=function(t){const e=Ev(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Us(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Mu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ya(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Xa(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Pp(r)&&Pp(o)){if(!Xa(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Pp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Xb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+l+c+u+i[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Jb(t,e){const n=new Zb(t,e);return n.subscribe.bind(n)}class Zb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");eR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=jl),s.error===void 0&&(s.error=jl),s.complete===void 0&&(s.complete=jl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jl(){}function tR(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,D(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Qc=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Dt(t){return t&&t._delegate?t._delegate:t}class sn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pi="[DEFAULT]";/**
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
 */class iR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new co;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rR(e))try{this.getOrInitializeService({instanceIdentifier:Pi})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Pi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pi){return this.instances.has(e)}getOptions(e=Pi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:sR(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Pi){return this.component?this.component.multipleInstances?e:Pi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sR(t){return t===Pi?void 0:t}function rR(t){return t.instantiationMode==="EAGER"}/**
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
 */class oR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const aR={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},cR=re.INFO,lR={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},uR=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=lR[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Do{constructor(e){this.name=e,this._logLevel=cR,this._logHandler=uR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?aR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const hR=(t,e)=>e.some(n=>t instanceof n);let kp,Np;function dR(){return kp||(kp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fR(){return Np||(Np=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tv=new WeakMap,qu=new WeakMap,Iv=new WeakMap,Bl=new WeakMap,od=new WeakMap;function pR(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(fi(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tv.set(n,t)}).catch(()=>{}),od.set(e,t),e}function mR(t){if(qu.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});qu.set(t,e)}let Vu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Iv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gR(t){Vu=t(Vu)}function _R(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call($l(this),e,...n);return Iv.set(i,e.sort?e.sort():[e]),fi(i)}:fR().includes(t)?function(...e){return t.apply($l(this),e),fi(Tv.get(this))}:function(...e){return fi(t.apply($l(this),e))}}function vR(t){return typeof t=="function"?_R(t):(t instanceof IDBTransaction&&mR(t),hR(t,dR())?new Proxy(t,Vu):t)}function fi(t){if(t instanceof IDBRequest)return pR(t);if(Bl.has(t))return Bl.get(t);const e=vR(t);return e!==t&&(Bl.set(t,e),od.set(e,t)),e}const $l=t=>od.get(t);function yR(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=fi(o);return i&&o.addEventListener("upgradeneeded",c=>{i(fi(o.result),c.oldVersion,c.newVersion,fi(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const ER=["get","getKey","getAll","getAllKeys","count"],TR=["put","add","delete","clear"],Wl=new Map;function xp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wl.get(e))return Wl.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=TR.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||ER.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Wl.set(e,r),r}gR(t=>({...t,get:(e,n,i)=>xp(e,n)||t.get(e,n,i),has:(e,n)=>!!xp(e,n)||t.has(e,n)}));/**
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
 */class IR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wR(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function wR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fu="@firebase/app",Op="0.9.23";/**
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
 */const Gi=new Do("@firebase/app"),bR="@firebase/app-compat",RR="@firebase/analytics-compat",AR="@firebase/analytics",CR="@firebase/app-check-compat",SR="@firebase/app-check",PR="@firebase/auth",kR="@firebase/auth-compat",NR="@firebase/database",xR="@firebase/database-compat",OR="@firebase/functions",DR="@firebase/functions-compat",LR="@firebase/installations",MR="@firebase/installations-compat",qR="@firebase/messaging",VR="@firebase/messaging-compat",FR="@firebase/performance",UR="@firebase/performance-compat",zR="@firebase/remote-config",jR="@firebase/remote-config-compat",BR="@firebase/storage",$R="@firebase/storage-compat",WR="@firebase/firestore",HR="@firebase/firestore-compat",KR="firebase",GR="10.6.0";/**
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
 */const Uu="[DEFAULT]",QR={[Fu]:"fire-core",[bR]:"fire-core-compat",[AR]:"fire-analytics",[RR]:"fire-analytics-compat",[SR]:"fire-app-check",[CR]:"fire-app-check-compat",[PR]:"fire-auth",[kR]:"fire-auth-compat",[NR]:"fire-rtdb",[xR]:"fire-rtdb-compat",[OR]:"fire-fn",[DR]:"fire-fn-compat",[LR]:"fire-iid",[MR]:"fire-iid-compat",[qR]:"fire-fcm",[VR]:"fire-fcm-compat",[FR]:"fire-perf",[UR]:"fire-perf-compat",[zR]:"fire-rc",[jR]:"fire-rc-compat",[BR]:"fire-gcs",[$R]:"fire-gcs-compat",[WR]:"fire-fst",[HR]:"fire-fst-compat","fire-js":"fire-js",[KR]:"fire-js-all"};/**
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
 */const Ja=new Map,zu=new Map;function YR(t,e){try{t.container.addComponent(e)}catch(n){Gi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rn(t){const e=t.name;if(zu.has(e))return Gi.debug(`There were multiple attempts to register component ${e}.`),!1;zu.set(e,t);for(const n of Ja.values())YR(n,t);return!0}function ad(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const XR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pi=new or("app","Firebase",XR);/**
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
 */class JR{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pi.create("app-deleted",{appName:this._name})}}/**
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
 */const Ii=GR;function wv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Uu,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw pi.create("bad-app-name",{appName:String(s)});if(n||(n=mv()),!n)throw pi.create("no-options");const r=Ja.get(s);if(r){if(Xa(n,r.options)&&Xa(i,r.config))return r;throw pi.create("duplicate-app",{appName:s})}const o=new oR(s);for(const c of zu.values())o.addComponent(c);const a=new JR(n,i,o);return Ja.set(s,a),a}function cd(t=Uu){const e=Ja.get(t);if(!e&&t===Uu&&mv())return wv();if(!e)throw pi.create("no-app",{appName:t});return e}function xt(t,e,n){var i;let s=(i=QR[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gi.warn(a.join(" "));return}Rn(new sn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ZR="firebase-heartbeat-database",eA=1,uo="firebase-heartbeat-store";let Hl=null;function bv(){return Hl||(Hl=yR(ZR,eA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(uo)}}}).catch(t=>{throw pi.create("idb-open",{originalErrorMessage:t.message})})),Hl}async function tA(t){try{return await(await bv()).transaction(uo).objectStore(uo).get(Rv(t))}catch(e){if(e instanceof kn)Gi.warn(e.message);else{const n=pi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gi.warn(n.message)}}}async function Dp(t,e){try{const i=(await bv()).transaction(uo,"readwrite");await i.objectStore(uo).put(e,Rv(t)),await i.done}catch(n){if(n instanceof kn)Gi.warn(n.message);else{const i=pi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gi.warn(i.message)}}}function Rv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nA=1024,iA=30*24*60*60*1e3;class sA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oA(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=iA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lp(),{heartbeatsToSend:i,unsentEntries:s}=rA(this._heartbeatsCache.heartbeats),r=Ga(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Lp(){return new Date().toISOString().substring(0,10)}function rA(t,e=nA){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Mp(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Mp(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class oA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yv()?Wb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await tA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Mp(t){return Ga(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function aA(t){Rn(new sn("platform-logger",e=>new IR(e),"PRIVATE")),Rn(new sn("heartbeat",e=>new sA(e),"PRIVATE")),xt(Fu,Op,t),xt(Fu,Op,"esm2017"),xt("fire-js","")}aA("");function ld(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Av(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cA=Av,Cv=new or("auth","Firebase",Av());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=new Do("@firebase/auth");function lA(t,...e){Za.logLevel<=re.WARN&&Za.warn(`Auth (${Ii}): ${t}`,...e)}function xa(t,...e){Za.logLevel<=re.ERROR&&Za.error(`Auth (${Ii}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,...e){throw ud(t,...e)}function yn(t,...e){return ud(t,...e)}function Sv(t,e,n){const i=Object.assign(Object.assign({},cA()),{[e]:n});return new or("auth","Firebase",i).create(e,{appName:t.name})}function uA(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&An(t,"argument-error"),Sv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ud(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Cv.create(t,...e)}function X(t,e,...n){if(!t)throw ud(e,...n)}function qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xa(e),new Error(e)}function Wn(t,e){t||qn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hA(){return qp()==="http:"||qp()==="https:"}function qp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hA()||Bb()||"connection"in navigator)?navigator.onLine:!0}function fA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=rd()||_v()}get(){return dA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=new Lo(3e4,6e4);function dd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function cr(t,e,n,i,s={}){return kv(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=ar(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Pv.fetch()(Nv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function kv(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},pA),e);try{const s=new _A(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw da(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw da(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw da(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw da(t,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Sv(t,u,l);An(t,u)}}catch(s){if(s instanceof kn)throw s;An(t,"network-request-failed",{message:String(s)})}}async function gA(t,e,n,i,s={}){const r=await cr(t,e,n,i,s);return"mfaPendingCredential"in r&&An(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Nv(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?hd(t.config,s):`${t.config.apiScheme}://${s}`}class _A{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(yn(this.auth,"network-request-failed")),mA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function da(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=yn(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(t,e){return cr(t,"POST","/v1/accounts:delete",e)}async function yA(t,e){return cr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function EA(t,e=!1){const n=Dt(t),i=await n.getIdToken(e),s=fd(i);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:jr(Kl(s.auth_time)),issuedAtTime:jr(Kl(s.iat)),expirationTime:jr(Kl(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Kl(t){return Number(t)*1e3}function fd(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return xa("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qa(n);return s?JSON.parse(s):(xa("Failed to decode base64 JWT payload"),null)}catch(s){return xa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function TA(t){const e=fd(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof kn&&IA(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function IA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jr(this.lastLoginAt),this.creationTime=jr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ec(t){var e;const n=t.auth,i=await t.getIdToken(),s=await ho(t,yA(n,{idToken:i}));X(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?AA(r.providerUserInfo):[],a=RA(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new xv(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function bA(t){const e=Dt(t);await ec(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RA(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function AA(t){return t.map(e=>{var{providerId:n}=e,i=ld(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CA(t,e){const n=await kv(t,{},async()=>{const i=ar({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=Nv(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Pv.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function SA(t,e){return cr(t,"POST","/v2/accounts:revokeToken",dd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):TA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return X(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await CA(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new fo;return i&&(X(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(X(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fo,this.toJSON())}_performRefresh(){return qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bi{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=ld(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new xv(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ho(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return EA(this,e)}reload(){return bA(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ec(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ho(this,vA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,c,l,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,I=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:R,isAnonymous:H,providerData:ne,stsTokenManager:he}=n;X(k&&he,e,"internal-error");const K=fo.fromJSON(this.name,he);X(typeof k=="string",e,"internal-error"),ei(h,e.name),ei(d,e.name),X(typeof R=="boolean",e,"internal-error"),X(typeof H=="boolean",e,"internal-error"),ei(f,e.name),ei(g,e.name),ei(v,e.name),ei(y,e.name),ei(I,e.name),ei(P,e.name);const te=new Bi({uid:k,auth:e,email:d,emailVerified:R,displayName:h,isAnonymous:H,photoURL:g,phoneNumber:f,tenantId:v,stsTokenManager:K,createdAt:I,lastLoginAt:P});return ne&&Array.isArray(ne)&&(te.providerData=ne.map(Ie=>Object.assign({},Ie))),y&&(te._redirectEventId=y),te}static async _fromIdTokenResponse(e,n,i=!1){const s=new fo;s.updateFromServerResponse(n);const r=new Bi({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ec(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=new Map;function Vn(t){Wn(t instanceof Function,"Expected a class definition");let e=Vp.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vp.set(t,e),e)}/**
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
 */class Ov{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ov.type="NONE";const Fp=Ov;/**
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
 */function Oa(t,e,n){return`firebase:${t}:${e}:${n}`}class Ss{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Oa(this.userKey,s.apiKey,r),this.fullPersistenceKey=Oa("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Ss(Vn(Fp),e,i);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||Vn(Fp);const o=Oa(i,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Bi._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Ss(r,e,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Ss(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vv(e))return"Blackberry";if(Fv(e))return"Webos";if(pd(e))return"Safari";if((e.includes("chrome/")||Lv(e))&&!e.includes("edge/"))return"Chrome";if(qv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Dv(t=vt()){return/firefox\//i.test(t)}function pd(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lv(t=vt()){return/crios\//i.test(t)}function Mv(t=vt()){return/iemobile/i.test(t)}function qv(t=vt()){return/android/i.test(t)}function Vv(t=vt()){return/blackberry/i.test(t)}function Fv(t=vt()){return/webos/i.test(t)}function Yc(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function PA(t=vt()){var e;return Yc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kA(){return $b()&&document.documentMode===10}function Uv(t=vt()){return Yc(t)||qv(t)||Fv(t)||Vv(t)||/windows phone/i.test(t)||Mv(t)}function NA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(t,e=[]){let n;switch(t){case"Browser":n=Up(vt());break;case"Worker":n=`${Up(vt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ii}/${i}`}/**
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
 */async function OA(t,e={}){return cr(t,"GET","/v2/passwordPolicy",dd(t,e))}/**
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
 */const DA=6;class LA{constructor(e){var n,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:DA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zp(this),this.idTokenSubscription=new zp(this),this.beforeStateQueue=new xA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vn(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Ss.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ec(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Dt(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OA(this),n=new LA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new or("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await SA(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Ss.create(this,[Vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,i,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xc(t){return Dt(t)}class zp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jb(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function VA(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=yn("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",qA().appendChild(i)})}function FA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(t,e){const n=ad(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Xa(r,e??{}))return s;An(s,"already-initialized")}return n.initialize({options:e})}function zA(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function jA(t,e,n){const i=Xc(t);X(i._canInitEmulator,i,"emulator-config-failed"),X(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=jv(e),{host:o,port:a}=BA(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||$A()}function jv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BA(t){const e=jv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:jp(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:jp(o)}}}function jp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $A(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qn("not implemented")}_getIdTokenResponse(e){return qn("not implemented")}_linkToIdToken(e,n){return qn("not implemented")}_getReauthenticationResolver(e){return qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(t,e){return gA(t,"POST","/v1/accounts:signInWithIdp",dd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA="http://localhost";class Qi extends Bv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=ld(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Qi(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ps(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Ps(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ps(e,n)}buildRequest(){const e={requestUri:WA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ar(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mo extends md{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mn extends Mo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qi._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Mn.credential(n,i)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Bi._fromIdTokenResponse(e,i,s),o=Bp(i);return new zs({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Bp(i);return new zs({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Bp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends kn{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,tc.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new tc(e,n,i,s)}}function $v(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?tc._fromErrorAndOperation(t,r,e,i):r})}async function HA(t,e,n=!1){const i=await ho(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zs._forOperation(t,"link",i)}/**
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
 */async function KA(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await ho(t,$v(i,s,e,t),n);X(r.idToken,i,"internal-error");const o=fd(r.idToken);X(o,i,"internal-error");const{sub:a}=o;return X(t.uid===a,i,"user-mismatch"),zs._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&An(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GA(t,e,n=!1){const i="signIn",s=await $v(t,i,e),r=await zs._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function QA(t,e,n,i){return Dt(t).onIdTokenChanged(e,n,i)}function YA(t,e,n){return Dt(t).beforeAuthStateChanged(e,n)}const nc="__sak";/**
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
 */class Wv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nc,"1"),this.storage.removeItem(nc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(){const t=vt();return pd(t)||Yc(t)}const JA=1e3,ZA=10;class Hv extends Wv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=XA()&&NA(),this.fallbackToPolling=Uv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);kA()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ZA):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},JA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hv.type="LOCAL";const eC=Hv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv extends Wv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Kv.type="SESSION";const Gv=Kv;/**
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
 */function tC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Jc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Jc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await tC(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class nC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=gd("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){return window}function iC(t){En().location.href=t}/**
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
 */function Qv(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function sC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oC(){return Qv()?self:null}/**
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
 */const Yv="firebaseLocalStorageDb",aC=1,ic="firebaseLocalStorage",Xv="fbase_key";class qo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zc(t,e){return t.transaction([ic],e?"readwrite":"readonly").objectStore(ic)}function cC(){const t=indexedDB.deleteDatabase(Yv);return new qo(t).toPromise()}function Bu(){const t=indexedDB.open(Yv,aC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(ic,{keyPath:Xv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(ic)?e(i):(i.close(),await cC(),e(await Bu()))})})}async function $p(t,e,n){const i=Zc(t,!0).put({[Xv]:e,value:n});return new qo(i).toPromise()}async function lC(t,e){const n=Zc(t,!1).get(e),i=await new qo(n).toPromise();return i===void 0?null:i.value}function Wp(t,e){const n=Zc(t,!0).delete(e);return new qo(n).toPromise()}const uC=800,hC=3;class Jv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>hC)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jc._getInstance(oC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sC(),!this.activeServiceWorker)return;this.sender=new nC(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bu();return await $p(e,nc,"1"),await Wp(e,nc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>$p(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>lC(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Zc(s,!1).getAll();return new qo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jv.type="LOCAL";const dC=Jv;new Lo(3e4,6e4);/**
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
 */function Zv(t,e){return e?Vn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class _d extends Bv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fC(t){return GA(t.auth,new _d(t),t.bypassAuthState)}function pC(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),KA(n,new _d(t),t.bypassAuthState)}async function mC(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),HA(n,new _d(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fC;case"linkViaPopup":case"linkViaRedirect":return mC;case"reauthViaPopup":case"reauthViaRedirect":return pC;default:An(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=new Lo(2e3,1e4);async function _C(t,e,n){const i=Xc(t);uA(t,e,md);const s=Zv(i,n);return new Di(i,"signInViaPopup",e,s).executeNotNull()}class Di extends ey{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Di.currentPopupAction&&Di.currentPopupAction.cancel(),Di.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=gd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Di.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gC.get())};e()}}Di.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC="pendingRedirect",Da=new Map;class yC extends ey{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Da.get(this.auth._key());if(!e){try{const i=await EC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Da.set(this.auth._key(),e)}return this.bypassAuthState||Da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function EC(t,e){const n=wC(e),i=IC(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function TC(t,e){Da.set(t._key(),e)}function IC(t){return Vn(t._redirectPersistence)}function wC(t){return Oa(vC,t.config.apiKey,t.name)}async function bC(t,e,n=!1){const i=Xc(t),s=Zv(i,e),o=await new yC(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC=10*60*1e3;class AC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!ty(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hp(e))}saveEventToCache(e){this.cachedEventUids.add(Hp(e)),this.lastProcessedEventTime=Date.now()}}function Hp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ty({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ty(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SC(t,e={}){return cr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kC=/^https?/;async function NC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SC(t);for(const n of e)try{if(xC(n))return}catch{}An(t,"unauthorized-domain")}function xC(t){const e=ju(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!kC.test(n))return!1;if(PC.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const OC=new Lo(3e4,6e4);function Kp(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DC(t){return new Promise((e,n)=>{var i,s,r;function o(){Kp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kp(),n(yn(t,"network-request-failed"))},timeout:OC.get()})}if(!((s=(i=En().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=En().gapi)===null||r===void 0)&&r.load)o();else{const a=FA("iframefcb");return En()[a]=()=>{gapi.load?o():n(yn(t,"network-request-failed"))},VA(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw La=null,e})}let La=null;function LC(t){return La=La||DC(t),La}/**
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
 */const MC=new Lo(5e3,15e3),qC="__/auth/iframe",VC="emulator/auth/iframe",FC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zC(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hd(e,VC):`https://${t.config.authDomain}/${qC}`,i={apiKey:e.apiKey,appName:t.name,v:Ii},s=UC.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${ar(i).slice(1)}`}async function jC(t){const e=await LC(t),n=En().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:zC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FC,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),a=En().setTimeout(()=>{r(o)},MC.get());function c(){En().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const BC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$C=500,WC=600,HC="_blank",KC="http://localhost";class Gp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GC(t,e,n,i=$C,s=WC){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},BC),{width:i.toString(),height:s.toString(),top:r,left:o}),l=vt().toLowerCase();n&&(a=Lv(l)?HC:n),Dv(l)&&(e=e||KC,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(PA(l)&&a!=="_self")return QC(e||"",a),new Gp(null);const h=window.open(e||"",a,u);X(h,t,"popup-blocked");try{h.focus()}catch{}return new Gp(h)}function QC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const YC="__/auth/handler",XC="emulator/auth/handler",JC=encodeURIComponent("fac");async function Qp(t,e,n,i,s,r){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ii,eventId:s};if(e instanceof md){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Mu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Mo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${JC}=${encodeURIComponent(c)}`:"";return`${ZC(t)}?${ar(a).slice(1)}${l}`}function ZC({config:t}){return t.emulator?hd(t,XC):`https://${t.authDomain}/${YC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl="webStorageSupport";class eS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gv,this._completeRedirectFn=bC,this._overrideRedirectResult=TC}async _openPopup(e,n,i,s){var r;Wn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Qp(e,n,i,ju(),s);return GC(e,o,gd())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Qp(e,n,i,ju(),s);return iC(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Wn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await jC(e),i=new AC(e);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gl,{type:Gl},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Gl];o!==void 0&&n(!!o),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Uv()||pd()||Yc()}}const tS=eS;var Yp="@firebase/auth",Xp="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sS(t){Rn(new sn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zv(t)},l=new MA(i,s,r,c);return zA(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Rn(new sn("auth-internal",e=>{const n=Xc(e.getProvider("auth").getImmediate());return(i=>new nS(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(Yp,Xp,iS(t)),xt(Yp,Xp,"esm2017")}/**
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
 */const rS=5*60,oS=gv("authIdTokenMaxAge")||rS;let Jp=null;const aS=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>oS)return;const s=n==null?void 0:n.token;Jp!==s&&(Jp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ny(t=cd()){const e=ad(t,"auth");if(e.isInitialized())return e.getImmediate();const n=UA(t,{popupRedirectResolver:tS,persistence:[dC,eC,Gv]}),i=gv("authTokenSyncURL");if(i){const r=aS(i);YA(n,r,()=>r(n.currentUser)),QA(n,o=>r(o))}const s=pv("auth");return s&&jA(n,`http://${s}`),n}sS("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=new Map,lS={activated:!1,tokenObservers:[]};function rn(t){return cS.get(t)||Object.assign({},lS)}const Zp={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new co,await hS(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new co,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function hS(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},sc=new or("appCheck","AppCheck",dS);function iy(t){if(!rn(t).activated)throw sc.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS="firebase-app-check-database",pS=1,$u="firebase-app-check-store";let fa=null;function mS(){return fa||(fa=new Promise((t,e)=>{try{const n=indexedDB.open(fS,pS);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(sc.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore($u,{keyPath:"compositeKey"})}}}catch(n){e(sc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),fa)}function gS(t,e){return _S(vS(t),e)}async function _S(t,e){const i=(await mS()).transaction($u,"readwrite"),r=i.objectStore($u).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=c=>{o()},i.onerror=c=>{var l;a(sc.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function vS(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=new Do("@firebase/app-check");function em(t,e){return yv()?gS(t,e).catch(n=>{Wu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS={error:"UNKNOWN_ERROR"};function ES(t){return Gc.encodeString(JSON.stringify(t),!1)}async function Hu(t,e=!1){const n=t.app;iy(n);const i=rn(n);let s=i.token,r;if(s&&!xr(s)&&(i.token=void 0,s=void 0),!s){const c=await i.cachedTokenPromise;c&&(xr(c)?s=c:await em(n,void 0))}if(!e&&s&&xr(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await rn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Wu.warn(c.message):Wu.error(c),r=c}let a;return s?r?xr(s)?a={token:s.token,internalError:r}:a=nm(r):(a={token:s.token},i.token=s,await em(n,s)):a=nm(r),o&&bS(n,a),a}async function TS(t){const e=t.app;iy(e);const{provider:n}=rn(e);{const{token:i}=await n.getToken();return{token:i}}}function IS(t,e,n,i){const{app:s}=t,r=rn(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&xr(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),tm(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>tm(t))}function sy(t,e){const n=rn(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function tm(t){const{app:e}=t,n=rn(e);let i=n.tokenRefresher;i||(i=wS(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function wS(t){const{app:e}=t;return new uS(async()=>{const n=rn(e);let i;if(n.token?i=await Hu(t,!0):i=await Hu(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=rn(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},Zp.RETRIAL_MIN_WAIT,Zp.RETRIAL_MAX_WAIT)}function bS(t,e){const n=rn(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function xr(t){return t.expireTimeMillis-Date.now()>0}function nm(t){return{token:ES(yS),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=rn(this.app);for(const n of e)sy(this.app,n.next);return Promise.resolve()}}function AS(t,e){return new RS(t,e)}function CS(t){return{getToken:e=>Hu(t,e),getLimitedUseToken:()=>TS(t),addTokenListener:e=>IS(t,"INTERNAL",e),removeTokenListener:e=>sy(t.app,e)}}const SS="@firebase/app-check",PS="0.8.0",kS="app-check",im="app-check-internal";function NS(){Rn(new sn(kS,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return AS(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(im).initialize()})),Rn(new sn(im,t=>{const e=t.getProvider("app-check").getImmediate();return CS(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),xt(SS,PS)}NS();var xS="firebase",OS="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(xS,OS,"app");const ry=Symbol("firebaseApp");function vd(t){return ev()&&Bt(ry,null)||cd(t)}const pn=()=>{};function yd(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function DS(t,e,n){const i=(""+e).split("."),s=i.pop(),r=i.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(s),1,n):r[s]=n}function is(t){return!!t&&typeof t=="object"}const LS=Object.prototype;function MS(t){return is(t)&&Object.getPrototypeOf(t)===LS}function Ed(t){return is(t)&&t.type==="document"}function qS(t){return is(t)&&t.type==="collection"}function VS(t){return Ed(t)||qS(t)}function FS(t){return is(t)&&t.type==="query"}function US(t){return is(t)&&"ref"in t}function zS(t){return is(t)&&typeof t.bucket=="string"}function jS(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const BS=Symbol.for("v-scx");function $S(){return!!Bt(BS,0)}const pa=new WeakMap;function WS(t,e){if(!pa.has(t)){const n=qc(!0);pa.set(t,n);const{unmount:i}=e;e.unmount=()=>{i.call(e),n.stop(),pa.delete(t)}}return pa.get(t)}const sm="@firebase/database",rm="1.0.1";/**
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
 */let oy="";function HS(t){oy=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:lo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Xn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new KS(e)}}catch{}return new GS},Li=ay("localStorage"),Ku=ay("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new Do("@firebase/database"),QS=function(){let t=1;return function(){return t++}}(),cy=function(t){const e=nR(t),n=new Xb;n.update(e);const i=n.digest();return Gc.encodeByteArray(i)},Vo=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Vo.apply(null,i):typeof i=="object"?e+=nt(i):e+=i,e+=" "}return e};let $i=null,om=!0;const YS=function(t,e){D(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ks.logLevel=re.VERBOSE,$i=ks.log.bind(ks),e&&Ku.set("logging_enabled",!0)):typeof t=="function"?$i=t:($i=null,Ku.remove("logging_enabled"))},ht=function(...t){if(om===!0&&(om=!1,$i===null&&Ku.get("logging_enabled")===!0&&YS(!0)),$i){const e=Vo.apply(null,t);$i(e)}},Fo=function(t){return function(...e){ht(t,...e)}},Gu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Vo(...t);ks.error(e)},Yi=function(...t){const e=`FIREBASE FATAL ERROR: ${Vo(...t)}`;throw ks.error(e),new Error(e)},Ot=function(...t){const e="FIREBASE WARNING: "+Vo(...t);ks.warn(e)},XS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ot("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ly=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},JS=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},js="[MIN_NAME]",Xi="[MAX_NAME]",lr=function(t,e){if(t===e)return 0;if(t===js||e===Xi)return-1;if(e===js||t===Xi)return 1;{const n=am(t),i=am(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},ZS=function(t,e){return t===e?0:t<e?-1:1},Er=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+nt(e))},Td=function(t){if(typeof t!="object"||t===null)return nt(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=nt(e[i]),n+=":",n+=Td(t[e[i]]);return n+="}",n},uy=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function $t(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const hy=function(t){D(!ly(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,c;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},eP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},tP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},nP=new RegExp("^-?(0*)\\d{1,10}$"),iP=-2147483648,sP=2147483647,am=function(t){if(nP.test(t)){const e=Number(t);if(e>=iP&&e<=sP)return e}return null},Uo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ot("Exception was thrown by user callback.",n),e},Math.floor(0))}},rP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Br=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class oP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Ot(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ht("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ot(e)}}class Qu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Qu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="5",dy="v",fy="s",py="r",my="f",gy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,_y="ls",vy="p",Yu="ac",yy="websocket",Ey="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e,n,i,s,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Li.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Li.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function lP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ty(t,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let i;if(e===yy)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ey)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);lP(t)&&(n.ns=t.namespace);const s=[];return $t(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(){this.counters_={}}incrementCounter(e,n=1){Xn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Lb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql={},Yl={};function wd(t){const e=t.toString();return Ql[e]||(Ql[e]=new uP),Ql[e]}function hP(t,e){const n=t.toString();return Yl[n]||(Yl[n]=e()),Yl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Uo(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="start",fP="close",pP="pLPCommand",mP="pRTLPCB",Iy="id",wy="pw",by="ser",gP="cb",_P="seg",vP="ts",yP="d",EP="dframe",Ry=1870,Ay=30,TP=Ry-Ay,IP=25e3,wP=3e4;class Es{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fo(e),this.stats_=wd(n),this.urlFn=c=>(this.appCheckToken&&(c[Yu]=this.appCheckToken),Ty(n,Ey,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new dP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(wP)),JS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new bd((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===cm)this.id=a,this.password=c;else if(o===fP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[cm]="t",i[by]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[gP]=this.scriptTagHolder.uniqueCallbackIdentifier),i[dy]=Id,this.transportSessionId&&(i[fy]=this.transportSessionId),this.lastSessionId&&(i[_y]=this.lastSessionId),this.applicationId&&(i[vy]=this.applicationId),this.appCheckToken&&(i[Yu]=this.appCheckToken),typeof location<"u"&&location.hostname&&gy.test(location.hostname)&&(i[py]=my);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Es.forceAllow_=!0}static forceDisallow(){Es.forceDisallow_=!0}static isAvailable(){return Es.forceAllow_?!0:!Es.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!eP()&&!tP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=dv(n),s=uy(i,TP);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[EP]="t",i[Iy]=e,i[wy]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=nt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class bd{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=QS(),window[pP+this.uniqueCallbackIdentifier]=e,window[mP+this.uniqueCallbackIdentifier]=n,this.myIFrame=bd.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ht("frame writing exception"),a.stack&&ht(a.stack),ht(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ht("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Iy]=this.myID,e[wy]=this.myPW,e[by]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ay+i.length<=Ry;){const o=this.pendingSegs.shift();i=i+"&"+_P+s+"="+o.seg+"&"+vP+s+"="+o.ts+"&"+yP+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(IP)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{ht("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP=16384,RP=45e3;let rc=null;typeof MozWebSocket<"u"?rc=MozWebSocket:typeof WebSocket<"u"&&(rc=WebSocket);class Qt{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fo(this.connId),this.stats_=wd(n),this.connURL=Qt.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[dy]=Id,typeof location<"u"&&location.hostname&&gy.test(location.hostname)&&(o[py]=my),n&&(o[fy]=n),i&&(o[_y]=i),s&&(o[Yu]=s),r&&(o[vy]=r),Ty(e,yy,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Li.set("previous_websocket_failure",!0);try{let i;vv(),this.mySock=new rc(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&rc!==null&&!Qt.forceDisallow_}static previouslyFailed(){return Li.isInMemoryStorage||Li.get("previous_websocket_failure")===!0}markConnectionHealthy(){Li.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=lo(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=uy(n,bP);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(RP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qt.responsesRequiredToBeHealthy=2;Qt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Es,Qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Qt&&Qt.isAvailable();let i=n&&!Qt.previouslyFailed();if(e.webSocketOnly&&(n||Ot("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Qt];else{const s=this.transports_=[];for(const r of po.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);po.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}po.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=6e4,CP=5e3,SP=10*1024,PP=100*1024,Xl="t",lm="d",kP="s",um="r",NP="e",hm="o",dm="a",fm="n",pm="p",xP="h";class OP{constructor(e,n,i,s,r,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fo("c:"+this.id+":"),this.transportManager_=new po(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Br(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>PP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>SP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Xl in e){const n=e[Xl];n===dm?this.upgradeIfSecondaryHealthy_():n===um?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===hm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Er("t",e),i=Er("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:pm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:dm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:fm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Er("t",e),i=Er("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Er(Xl,e);if(lm in e){const i=e[lm];if(n===xP){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===fm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===kP?this.onConnectionShutdown_(i):n===um?this.onReset_(i):n===NP?Gu("Server Error: "+i):n===hm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Id!==i&&Ot("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Br(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(AP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Br(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(CP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:pm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Li.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc extends Sy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!rd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new oc}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=32,gm=768;class Oe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function be(){return new Oe("")}function le(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function vi(t){return t.pieces_.length-t.pieceNum_}function ke(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Oe(t.pieces_,e)}function Py(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function DP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ky(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ny(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Oe(e,0)}function Ge(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof Oe)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new Oe(n,0)}function ae(t){return t.pieceNum_>=t.pieces_.length}function jt(t,e){const n=le(t),i=le(e);if(n===null)return e;if(n===i)return jt(ke(t),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function xy(t,e){if(vi(t)!==vi(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Xt(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(vi(t)>vi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class LP{constructor(e,n){this.errorPrefix_=n,this.parts_=ky(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Qc(this.parts_[i]);Oy(this)}}function MP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Qc(e),Oy(t)}function qP(t){const e=t.parts_.pop();t.byteLength_-=Qc(e),t.parts_.length>0&&(t.byteLength_-=1)}function Oy(t){if(t.byteLength_>gm)throw new Error(t.errorPrefix_+"has a key path longer than "+gm+" bytes ("+t.byteLength_+").");if(t.parts_.length>mm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+mm+") or object contains a cycle "+ki(t))}function ki(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd extends Sy{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Rd}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=1e3,VP=60*5*1e3,_m=30*1e3,FP=1.3,UP=3e4,zP="server_kill",vm=3;class jn extends Cy{constructor(e,n,i,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=jn.nextPersistentConnectionId_++,this.log_=Fo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Tr,this.maxReconnectDelay_=VP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!vv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Rd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&oc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(nt(r)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new co,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;jn.warnOnListenWarnings_(c,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Xn(e,"w")){const i=Us(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ot(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Yb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_m)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Qb(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nt(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Gu("Unrecognized action received from server: "+nt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Tr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Tr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>UP&&(this.reconnectDelay_=Tr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*FP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+jn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(h){D(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ht("getToken() completed but was canceled"):(ht("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new OP(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{Ot(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(zP)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ot(h),c())}}}interrupt(e){ht("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ht("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Mu(this.interruptReasons_)&&(this.reconnectDelay_=Tr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Td(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new Oe(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){ht("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=vm&&(this.reconnectDelay_=_m,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ht("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=vm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+oy.replace(/\./g,"-")]=1,rd()?e["framework.cordova"]=1:_v()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=oc.getInstance().currentlyOnline();return Mu(this.interruptReasons_)&&e}}jn.nextPersistentConnectionId_=0;jn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class el{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new ue(js,e),s=new ue(js,n);return this.compare(i,s)!==0}minPost(){return ue.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ma;class Dy extends el{static get __EMPTY_NODE(){return ma}static set __EMPTY_NODE(e){ma=e}compare(e,n){return lr(e.name,n.name)}isDefinedOn(e){throw rr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ue.MIN}maxPost(){return new ue(Xi,ma)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new ue(e,ma)}toString(){return".key"}}const Ns=new Dy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ga=class{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Nt=class Or{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Or.RED,this.left=s??mn.EMPTY_NODE,this.right=r??mn.EMPTY_NODE}copy(e,n,i,s,r){return new Or(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return mn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return mn.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Or.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Or.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Nt.RED=!0;Nt.BLACK=!1;class jP{copy(e,n,i,s,r){return this}insert(e,n,i){return new Nt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let mn=class Ma{constructor(e,n=Ma.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ma(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Nt.BLACK,null,null))}remove(e){return new Ma(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Nt.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ga(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ga(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ga(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ga(this.root_,null,this.comparator_,!0,e)}};mn.EMPTY_NODE=new jP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(t,e){return lr(t.name,e.name)}function Ad(t,e){return lr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xu;function $P(t){Xu=t}const Ly=function(t){return typeof t=="number"?"number:"+hy(t):"string:"+t},My=function(t){if(t.isLeafNode()){const e=t.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xn(e,".sv"),"Priority must be a string or number.")}else D(t===Xu||t.isEmpty(),"priority of unexpected type.");D(t===Xu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ym;class He{constructor(e,n=He.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),My(this.priorityNode_)}static set __childrenNodeConstructor(e){ym=e}static get __childrenNodeConstructor(){return ym}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new He(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:He.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:le(e)===".priority"?this.priorityNode_:He.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:He.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=le(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(D(i!==".priority"||vi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,He.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ly(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=hy(this.value_):e+=this.value_,this.lazyHash_=cy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===He.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof He.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=He.VALUE_TYPE_ORDER.indexOf(n),r=He.VALUE_TYPE_ORDER.indexOf(i);return D(s>=0,"Unknown leaf type: "+n),D(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}He.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qy,Vy;function WP(t){qy=t}function HP(t){Vy=t}class KP extends el{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?lr(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ue.MIN}maxPost(){return new ue(Xi,new He("[PRIORITY-POST]",Vy))}makePost(e,n){const i=qy(e);return new ue(n,new He("[PRIORITY-POST]",i))}toString(){return".priority"}}const mt=new KP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=Math.log(2);class QP{constructor(e){const n=r=>parseInt(Math.log(r)/GP,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ac=function(t,e,n,i){t.sort(e);const s=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=t[c],d=n?n(h):h,new Nt(d,h.node,Nt.BLACK,null,null);{const f=parseInt(u/2,10)+c,g=s(c,f),v=s(f+1,l);return h=t[f],d=n?n(h):h,new Nt(d,h.node,Nt.BLACK,g,v)}},r=function(c){let l=null,u=null,h=t.length;const d=function(g,v){const y=h-g,I=h;h-=g;const P=s(y+1,I),k=t[y],R=n?n(k):k;f(new Nt(R,k.node,v,null,P))},f=function(g){l?(l.left=g,l=g):(u=g,l=g)};for(let g=0;g<c.count;++g){const v=c.nextBitIsOne(),y=Math.pow(2,c.count-(g+1));v?d(y,Nt.BLACK):(d(y,Nt.BLACK),d(y,Nt.RED))}return u},o=new QP(t.length),a=r(o);return new mn(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jl;const ps={};class Fn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return D(ps&&mt,"ChildrenNode.ts has not been loaded"),Jl=Jl||new Fn({".priority":ps},{".priority":mt}),Jl}get(e){const n=Us(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof mn?n:null}hasIndex(e){return Xn(this.indexSet_,e.toString())}addIndex(e,n){D(e!==Ns,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(ue.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=ac(i,e.getCompare()):a=ps;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Fn(u,l)}addToIndexes(e,n){const i=Ya(this.indexes_,(s,r)=>{const o=Us(this.indexSet_,r);if(D(o,"Missing index implementation for "+r),s===ps)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(ue.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),ac(a,o.getCompare())}else return ps;else{const a=n.get(e.name);let c=s;return a&&(c=c.remove(new ue(e.name,a))),c.insert(e,e.node)}});return new Fn(i,this.indexSet_)}removeFromIndexes(e,n){const i=Ya(this.indexes_,s=>{if(s===ps)return s;{const r=n.get(e.name);return r?s.remove(new ue(e.name,r)):s}});return new Fn(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ir;class ve{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&My(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ir||(Ir=new ve(new mn(Ad),null,Fn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ir}updatePriority(e){return this.children_.isEmpty()?this:new ve(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ir:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new ue(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Ir:this.priorityNode_;return new ve(s,o,r)}}updateChild(e,n){const i=le(e);if(i===null)return n;{D(le(e)!==".priority"||vi(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(ke(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(mt,(o,a)=>{n[o]=a.val(e),i++,r&&ve.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ly(this.getPriority().val())+":"),this.forEachChild(mt,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":cy(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new ue(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ue(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ue(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ue.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ue.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zo?-1:0}withIndex(e){if(e===Ns||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ve(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ns||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(mt),s=n.getIterator(mt);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ns?null:this.indexMap_.get(e.toString())}}ve.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class YP extends ve{constructor(){super(new mn(Ad),ve.EMPTY_NODE,Fn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ve.EMPTY_NODE}isEmpty(){return!1}}const zo=new YP;Object.defineProperties(ue,{MIN:{value:new ue(js,ve.EMPTY_NODE)},MAX:{value:new ue(Xi,zo)}});Dy.__EMPTY_NODE=ve.EMPTY_NODE;He.__childrenNodeConstructor=ve;$P(zo);HP(zo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP=!0;function dt(t,e=null){if(t===null)return ve.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new He(n,dt(e))}if(!(t instanceof Array)&&XP){const n=[];let i=!1;if($t(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=dt(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),n.push(new ue(o,c)))}}),n.length===0)return ve.EMPTY_NODE;const r=ac(n,BP,o=>o.name,Ad);if(i){const o=ac(n,mt.getCompare());return new ve(r,dt(e),new Fn({".priority":o},{".priority":mt}))}else return new ve(r,dt(e),Fn.Default)}else{let n=ve.EMPTY_NODE;return $t(t,(i,s)=>{if(Xn(t,i)&&i.substring(0,1)!=="."){const r=dt(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(dt(e))}}WP(dt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP extends el{constructor(e){super(),this.indexPath_=e,D(!ae(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?lr(e.name,n.name):r}makePost(e,n){const i=dt(e),s=ve.EMPTY_NODE.updateChild(this.indexPath_,i);return new ue(n,s)}maxPost(){const e=ve.EMPTY_NODE.updateChild(this.indexPath_,zo);return new ue(Xi,e)}toString(){return ky(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP extends el{compare(e,n){const i=e.node.compareTo(n.node);return i===0?lr(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ue.MIN}maxPost(){return ue.MAX}makePost(e,n){const i=dt(e);return new ue(n,i)}toString(){return".value"}}const ek=new ZP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(t){return{type:"value",snapshotNode:t}}function nk(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ik(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Em(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function sk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=mt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:js}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===mt}copy(){const e=new Cd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Tm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===mt?n="$priority":t.index_===ek?n="$value":t.index_===Ns?n="$key":(D(t.index_ instanceof JP,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=nt(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=nt(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+nt(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=nt(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+nt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Im(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==mt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends Cy{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Fo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=cc.getListenId_(e,i),a={};this.listens_[o]=a;const c=Tm(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,i),Us(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",s(d,null)}})}unlisten(e,n){const i=cc.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Tm(e._queryParams),i=e._path.toString(),s=new co;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ar(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=lo(a.responseText)}catch{Ot("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&Ot("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(){this.rootNode_=ve.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(){return{value:null,children:new Map}}function Fy(t,e,n){if(ae(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=le(e);t.children.has(i)||t.children.set(i,lc());const s=t.children.get(i);e=ke(e),Fy(s,e,n)}}function Ju(t,e,n){t.value!==null?n(e,t.value):ok(t,(i,s)=>{const r=new Oe(e.toString()+"/"+i);Ju(s,r,n)})}function ok(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&$t(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=10*1e3,ck=30*1e3,lk=5*60*1e3;class uk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ak(e);const i=wm+(ck-wm)*Math.random();Br(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;$t(e,(s,r)=>{r>0&&Xn(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Br(this.reportStats_.bind(this),Math.floor(Math.random()*2*lk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(gn||(gn={}));function Uy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jy(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=gn.ACK_USER_WRITE,this.source=Uy()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Oe(e));return new uc(be(),n,this.revert)}}else return D(le(this.path)===e,"operationForChild called for unrelated child."),new uc(ke(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=gn.OVERWRITE}operationForChild(e){return ae(this.path)?new Ji(this.source,be(),this.snap.getImmediateChild(e)):new Ji(this.source,ke(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=gn.MERGE}operationForChild(e){if(ae(this.path)){const n=this.children.subtree(new Oe(e));return n.isEmpty()?null:n.value?new Ji(this.source,be(),n.value):new mo(this.source,be(),n)}else return D(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new mo(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function hk(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(sk(o.childName,o.snapshotNode))}),wr(t,s,"child_removed",e,i,n),wr(t,s,"child_added",e,i,n),wr(t,s,"child_moved",r,i,n),wr(t,s,"child_changed",e,i,n),wr(t,s,"value",e,i,n),s}function wr(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,c)=>fk(t,a,c)),o.forEach(a=>{const c=dk(t,a,r);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function dk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function fk(t,e,n){if(e.childName==null||n.childName==null)throw rr("Should only compare child_ events.");const i=new ue(e.childName,e.snapshotNode),s=new ue(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(t,e){return{eventCache:t,serverCache:e}}function $r(t,e,n,i){return By(new Sd(e,n,i),t.serverCache)}function $y(t,e,n,i){return By(t.eventCache,new Sd(e,n,i))}function Zu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zl;const pk=()=>(Zl||(Zl=new mn(ZS)),Zl);class Se{constructor(e,n=pk()){this.value=e,this.children=n}static fromObject(e){let n=new Se(null);return $t(e,(i,s)=>{n=n.set(new Oe(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:be(),value:this.value};if(ae(e))return null;{const i=le(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(ke(e),n);return r!=null?{path:Ge(new Oe(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const n=le(e),i=this.children.get(n);return i!==null?i.subtree(ke(e)):new Se(null)}}set(e,n){if(ae(e))return new Se(n,this.children);{const i=le(e),r=(this.children.get(i)||new Se(null)).set(ke(e),n),o=this.children.insert(i,r);return new Se(this.value,o)}}remove(e){if(ae(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const n=le(e),i=this.children.get(n);if(i){const s=i.remove(ke(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new Se(null):new Se(this.value,r)}else return this}}get(e){if(ae(e))return this.value;{const n=le(e),i=this.children.get(n);return i?i.get(ke(e)):null}}setTree(e,n){if(ae(e))return n;{const i=le(e),r=(this.children.get(i)||new Se(null)).setTree(ke(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Se(this.value,o)}}fold(e){return this.fold_(be(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Ge(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,be(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(ae(e))return null;{const r=le(e),o=this.children.get(r);return o?o.findOnPath_(ke(e),Ge(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,be(),n)}foreachOnPath_(e,n,i){if(ae(e))return this;{this.value&&i(n,this.value);const s=le(e),r=this.children.get(s);return r?r.foreachOnPath_(ke(e),Ge(n,s),i):new Se(null)}}foreach(e){this.foreach_(be(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Ge(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.writeTree_=e}static empty(){return new nn(new Se(null))}}function Wr(t,e,n){if(ae(e))return new nn(new Se(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=jt(s,e);return r=r.updateChild(o,n),new nn(t.writeTree_.set(s,r))}else{const s=new Se(n),r=t.writeTree_.setTree(e,s);return new nn(r)}}}function bm(t,e,n){let i=t;return $t(n,(s,r)=>{i=Wr(i,Ge(e,s),r)}),i}function Rm(t,e){if(ae(e))return nn.empty();{const n=t.writeTree_.setTree(e,new Se(null));return new nn(n)}}function eh(t,e){return ss(t,e)!=null}function ss(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(jt(n.path,e)):null}function Am(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(mt,(i,s)=>{e.push(new ue(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new ue(i,s.value))}),e}function mi(t,e){if(ae(e))return t;{const n=ss(t,e);return n!=null?new nn(new Se(n)):new nn(t.writeTree_.subtree(e))}}function th(t){return t.writeTree_.isEmpty()}function Bs(t,e){return Wy(be(),t.writeTree_,e)}function Wy(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(D(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Wy(Ge(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Ge(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t,e){return Xy(e,t)}function mk(t,e,n,i,s){D(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Wr(t.visibleWrites,e,n)),t.lastWriteId=i}function gk(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function _k(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&vk(a,i.path)?s=!1:Xt(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return yk(t),!0;if(i.snap)t.visibleWrites=Rm(t.visibleWrites,i.path);else{const a=i.children;$t(a,c=>{t.visibleWrites=Rm(t.visibleWrites,Ge(i.path,c))})}return!0}else return!1}function vk(t,e){if(t.snap)return Xt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Xt(Ge(t.path,n),e))return!0;return!1}function yk(t){t.visibleWrites=Ky(t.allWrites,Ek,be()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ek(t){return t.visible}function Ky(t,e,n){let i=nn.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)Xt(n,o)?(a=jt(n,o),i=Wr(i,a,r.snap)):Xt(o,n)&&(a=jt(o,n),i=Wr(i,be(),r.snap.getChild(a)));else if(r.children){if(Xt(n,o))a=jt(n,o),i=bm(i,a,r.children);else if(Xt(o,n))if(a=jt(o,n),ae(a))i=bm(i,be(),r.children);else{const c=Us(r.children,le(a));if(c){const l=c.getChild(ke(a));i=Wr(i,be(),l)}}}else throw rr("WriteRecord should have .snap or .children")}}return i}function Gy(t,e,n,i,s){if(!i&&!s){const r=ss(t.visibleWrites,e);if(r!=null)return r;{const o=mi(t.visibleWrites,e);if(th(o))return n;if(n==null&&!eh(o,be()))return null;{const a=n||ve.EMPTY_NODE;return Bs(o,a)}}}else{const r=mi(t.visibleWrites,e);if(!s&&th(r))return n;if(!s&&n==null&&!eh(r,be()))return null;{const o=function(l){return(l.visible||s)&&(!i||!~i.indexOf(l.writeId))&&(Xt(l.path,e)||Xt(e,l.path))},a=Ky(t.allWrites,o,e),c=n||ve.EMPTY_NODE;return Bs(a,c)}}}function Tk(t,e,n){let i=ve.EMPTY_NODE;const s=ss(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(mt,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=mi(t.visibleWrites,e);return n.forEachChild(mt,(o,a)=>{const c=Bs(mi(r,new Oe(o)),a);i=i.updateImmediateChild(o,c)}),Am(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=mi(t.visibleWrites,e);return Am(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Ik(t,e,n,i,s){D(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Ge(e,n);if(eh(t.visibleWrites,r))return null;{const o=mi(t.visibleWrites,r);return th(o)?s.getChild(n):Bs(o,s.getChild(n))}}function wk(t,e,n,i){const s=Ge(e,n),r=ss(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=mi(t.visibleWrites,s);return Bs(o,i.getNode().getImmediateChild(n))}else return null}function bk(t,e){return ss(t.visibleWrites,e)}function Rk(t,e,n,i,s,r,o){let a;const c=mi(t.visibleWrites,e),l=ss(c,be());if(l!=null)a=l;else if(n!=null)a=Bs(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<s;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function Ak(){return{visibleWrites:nn.empty(),allWrites:[],lastWriteId:-1}}function nh(t,e,n,i){return Gy(t.writeTree,t.treePath,e,n,i)}function Qy(t,e){return Tk(t.writeTree,t.treePath,e)}function Cm(t,e,n,i){return Ik(t.writeTree,t.treePath,e,n,i)}function hc(t,e){return bk(t.writeTree,Ge(t.treePath,e))}function Ck(t,e,n,i,s,r){return Rk(t.writeTree,t.treePath,e,n,i,s,r)}function Pd(t,e,n){return wk(t.writeTree,t.treePath,e,n)}function Yy(t,e){return Xy(Ge(t.treePath,e),t.writeTree)}function Xy(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Em(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,ik(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,nk(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Em(i,e.snapshotNode,s.oldSnap));else throw rr("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Jy=new Pk;class kd{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Sd(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Pd(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zi(this.viewCache_),r=Ck(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function kk(t,e){D(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Nk(t,e,n,i,s){const r=new Sk;let o,a;if(n.type===gn.OVERWRITE){const l=n;l.source.fromUser?o=ih(t,e,l.path,l.snap,i,s,r):(D(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!ae(l.path),o=dc(t,e,l.path,l.snap,i,s,a,r))}else if(n.type===gn.MERGE){const l=n;l.source.fromUser?o=Ok(t,e,l.path,l.children,i,s,r):(D(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=sh(t,e,l.path,l.children,i,s,a,r))}else if(n.type===gn.ACK_USER_WRITE){const l=n;l.revert?o=Mk(t,e,l.path,i,s,r):o=Dk(t,e,l.path,l.affectedTree,i,s,r)}else if(n.type===gn.LISTEN_COMPLETE)o=Lk(t,e,n.path,i,r);else throw rr("Unknown operation type: "+n.type);const c=r.getChanges();return xk(e,o,c),{viewCache:o,changes:c}}function xk(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Zu(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(tk(Zu(e)))}}function Zy(t,e,n,i,s,r){const o=e.eventCache;if(hc(i,n)!=null)return e;{let a,c;if(ae(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Zi(e),u=l instanceof ve?l:ve.EMPTY_NODE,h=Qy(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=nh(i,Zi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=le(n);if(l===".priority"){D(vi(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Cm(i,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ke(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=Cm(i,n,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=Pd(i,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,s,r):a=o.getNode()}}return $r(e,a,o.isFullyInitialized()||ae(n),t.filter.filtersNodes())}}function dc(t,e,n,i,s,r,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(ae(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),f,null)}else{const f=le(n);if(!c.isCompleteForPath(n)&&vi(n)>1)return e;const g=ke(n),y=c.getNode().getImmediateChild(f).updateChild(g,i);f===".priority"?l=u.updatePriority(c.getNode(),y):l=u.updateChild(c.getNode(),f,y,g,Jy,null)}const h=$y(e,l,c.isFullyInitialized()||ae(n),u.filtersNodes()),d=new kd(s,h,r);return Zy(t,h,n,s,d,a)}function ih(t,e,n,i,s,r,o){const a=e.eventCache;let c,l;const u=new kd(s,e,r);if(ae(n))l=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=$r(e,l,!0,t.filter.filtersNodes());else{const h=le(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),i),c=$r(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=ke(n),f=a.getNode().getImmediateChild(h);let g;if(ae(d))g=i;else{const v=u.getCompleteChild(h);v!=null?Py(d)===".priority"&&v.getChild(Ny(d)).isEmpty()?g=v:g=v.updateChild(d,i):g=ve.EMPTY_NODE}if(f.equals(g))c=e;else{const v=t.filter.updateChild(a.getNode(),h,g,d,u,o);c=$r(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Sm(t,e){return t.eventCache.isCompleteForChild(e)}function Ok(t,e,n,i,s,r,o){let a=e;return i.foreach((c,l)=>{const u=Ge(n,c);Sm(e,le(u))&&(a=ih(t,a,u,l,s,r,o))}),i.foreach((c,l)=>{const u=Ge(n,c);Sm(e,le(u))||(a=ih(t,a,u,l,s,r,o))}),a}function Pm(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function sh(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;ae(n)?l=i:l=new Se(null).setTree(n,i);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),g=Pm(t,f,d);c=dc(t,c,new Oe(h),g,s,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const g=e.serverCache.getNode().getImmediateChild(h),v=Pm(t,g,d);c=dc(t,c,new Oe(h),v,s,r,o,a)}}),c}function Dk(t,e,n,i,s,r,o){if(hc(s,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(ae(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return dc(t,e,n,c.getNode().getChild(n),s,r,a,o);if(ae(n)){let l=new Se(null);return c.getNode().forEachChild(Ns,(u,h)=>{l=l.set(new Oe(u),h)}),sh(t,e,n,l,s,r,a,o)}else return e}else{let l=new Se(null);return i.foreach((u,h)=>{const d=Ge(n,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),sh(t,e,n,l,s,r,a,o)}}function Lk(t,e,n,i,s){const r=e.serverCache,o=$y(e,r.getNode(),r.isFullyInitialized()||ae(n),r.isFiltered());return Zy(t,o,n,i,Jy,s)}function Mk(t,e,n,i,s,r){let o;if(hc(i,n)!=null)return e;{const a=new kd(i,e,s),c=e.eventCache.getNode();let l;if(ae(n)||le(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=nh(i,Zi(e));else{const h=e.serverCache.getNode();D(h instanceof ve,"serverChildren would be complete if leaf node"),u=Qy(i,h)}u=u,l=t.filter.updateFullNode(c,u,r)}else{const u=le(n);let h=Pd(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,ke(n),a,r):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,ve.EMPTY_NODE,ke(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=nh(i,Zi(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||hc(i,be())!=null,$r(e,l,o,t.filter.filtersNodes())}}function qk(t,e){const n=Zi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ae(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function km(t,e,n,i){e.type===gn.MERGE&&e.source.queryId!==null&&(D(Zi(t.viewCache_),"We should always have a full cache before handling merges"),D(Zu(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Nk(t.processor_,s,e,n,i);return kk(t.processor_,r.viewCache),D(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Vk(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Vk(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return hk(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nm;function Fk(t){D(!Nm,"__referenceConstructor has already been defined"),Nm=t}function Nd(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return D(r!=null,"SyncTree gave us an op for an invalid query."),km(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(km(o,e,n,i));return r}}function xd(t,e){let n=null;for(const i of t.views.values())n=n||qk(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xm;function Uk(t){D(!xm,"__referenceConstructor has already been defined"),xm=t}class Om{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=Ak(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zk(t,e,n,i,s){return mk(t.pendingWriteTree_,e,n,i,s),s?nl(t,new Ji(Uy(),e,n)):[]}function Ts(t,e,n=!1){const i=gk(t.pendingWriteTree_,e);if(_k(t.pendingWriteTree_,e)){let r=new Se(null);return i.snap!=null?r=r.set(be(),!0):$t(i.children,o=>{r=r.set(new Oe(o),!0)}),nl(t,new uc(i.path,r,n))}else return[]}function tl(t,e,n){return nl(t,new Ji(zy(),e,n))}function jk(t,e,n){const i=Se.fromObject(n);return nl(t,new mo(zy(),e,i))}function Bk(t,e,n,i){const s=iE(t,i);if(s!=null){const r=sE(s),o=r.path,a=r.queryId,c=jt(o,e),l=new Ji(jy(a),c,n);return rE(t,o,l)}else return[]}function $k(t,e,n,i){const s=iE(t,i);if(s){const r=sE(s),o=r.path,a=r.queryId,c=jt(o,e),l=Se.fromObject(n),u=new mo(jy(a),c,l);return rE(t,o,u)}else return[]}function eE(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=jt(o,e),l=xd(a,c);if(l)return l});return Gy(s,e,r,n,!0)}function nl(t,e){return tE(e,t.syncPointTree_,null,Hy(t.pendingWriteTree_,be()))}function tE(t,e,n,i){if(ae(t.path))return nE(t,e,n,i);{const s=e.get(be());n==null&&s!=null&&(n=xd(s,be()));let r=[];const o=le(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=Yy(i,o);r=r.concat(tE(a,c,l,u))}return s&&(r=r.concat(Nd(s,t,i,n))),r}}function nE(t,e,n,i){const s=e.get(be());n==null&&s!=null&&(n=xd(s,be()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=Yy(i,o),u=t.operationForChild(o);u&&(r=r.concat(nE(u,a,c,l)))}),s&&(r=r.concat(Nd(s,t,i,n))),r}function iE(t,e){return t.tagToQueryMap.get(e)}function sE(t){const e=t.indexOf("$");return D(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Oe(t.substr(0,e))}}function rE(t,e,n){const i=t.syncPointTree_.get(e);D(i,"Missing sync point for query tag that we're tracking");const s=Hy(t.pendingWriteTree_,e);return Nd(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Od(n)}node(){return this.node_}}class Dd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ge(this.path_,e);return new Dd(this.syncTree_,n)}node(){return eE(this.syncTree_,this.path_)}}const Wk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Dm=function(t,e,n){if(!t||typeof t!="object")return t;if(D(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Hk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Kk(t[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Hk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+t)}},Kk=function(t,e,n){t.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&D(!1,"Unexpected increment value: "+i);const s=e.node();if(D(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Gk=function(t,e,n,i){return Ld(e,new Dd(n,t),i)},Qk=function(t,e,n){return Ld(t,new Od(e),n)};function Ld(t,e,n){const i=t.getPriority().val(),s=Dm(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Dm(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new He(a,dt(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new He(s))),o.forEachChild(mt,(a,c)=>{const l=Ld(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function qd(t,e){let n=e instanceof Oe?e:new Oe(e),i=t,s=le(n);for(;s!==null;){const r=Us(i.node.children,s)||{children:{},childCount:0};i=new Md(s,i,r),n=ke(n),s=le(n)}return i}function ur(t){return t.node.value}function oE(t,e){t.node.value=e,rh(t)}function aE(t){return t.node.childCount>0}function Yk(t){return ur(t)===void 0&&!aE(t)}function il(t,e){$t(t.node.children,(n,i)=>{e(new Md(n,t,i))})}function cE(t,e,n,i){n&&!i&&e(t),il(t,s=>{cE(s,e,!0,i)}),n&&i&&e(t)}function Xk(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function jo(t){return new Oe(t.parent===null?t.name:jo(t.parent)+"/"+t.name)}function rh(t){t.parent!==null&&Jk(t.parent,t.name,t)}function Jk(t,e,n){const i=Yk(n),s=Xn(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,rh(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,rh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=/[\[\].#$\/\u0000-\u001F\u007F]/,e1=/[\[\].#$\u0000-\u001F\u007F]/,eu=10*1024*1024,lE=function(t){return typeof t=="string"&&t.length!==0&&!Zk.test(t)},t1=function(t){return typeof t=="string"&&t.length!==0&&!e1.test(t)},n1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),t1(t)},uE=function(t,e,n){const i=n instanceof Oe?new LP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ki(i));if(typeof e=="function")throw new Error(t+"contains a function "+ki(i)+" with contents = "+e.toString());if(ly(e))throw new Error(t+"contains "+e.toString()+" "+ki(i));if(typeof e=="string"&&e.length>eu/3&&Qc(e)>eu)throw new Error(t+"contains a string greater than "+eu+" utf8 bytes "+ki(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if($t(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!lE(o)))throw new Error(t+" contains an invalid key ("+o+") "+ki(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);MP(i,o),uE(t,a,i),qP(i)}),s&&r)throw new Error(t+' contains ".value" child '+ki(i)+" in addition to actual children.")}},i1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!lE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!n1(n))throw new Error(tR(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function r1(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!xy(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function rs(t,e,n){r1(t,n),o1(t,i=>Xt(i,e)||Xt(e,i))}function o1(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(a1(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function a1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();$i&&ht("event: "+n.toString()),Uo(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1="repo_interrupt",l1=25;class u1{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new s1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=lc(),this.transactionQueueTree_=new Md,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function h1(t,e,n){if(t.stats_=wd(t.repoInfo_),t.forceRestClient_||rP())t.server_=new cc(t.repoInfo_,(i,s,r,o)=>{Lm(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Mm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new jn(t.repoInfo_,e,(i,s,r,o)=>{Lm(t,i,s,r,o)},i=>{Mm(t,i)},i=>{f1(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=hP(t.repoInfo_,()=>new uk(t.stats_,t.server_)),t.infoData_=new rk,t.infoSyncTree_=new Om({startListening:(i,s,r,o)=>{let a=[];const c=t.infoData_.getNode(i._path);return c.isEmpty()||(a=tl(t.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Vd(t,"connected",!1),t.serverSyncTree_=new Om({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,c)=>{const l=o(a,c);rs(t.eventQueue_,i._path,l)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function d1(t){const n=t.infoData_.getNode(new Oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function hE(t){return Wk({timestamp:d1(t)})}function Lm(t,e,n,i,s){t.dataUpdateCount++;const r=new Oe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const c=Ya(n,l=>dt(l));o=$k(t.serverSyncTree_,r,c,s)}else{const c=dt(n);o=Bk(t.serverSyncTree_,r,c,s)}else if(i){const c=Ya(n,l=>dt(l));o=jk(t.serverSyncTree_,r,c)}else{const c=dt(n);o=tl(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Ud(t,r)),rs(t.eventQueue_,a,o)}function Mm(t,e){Vd(t,"connected",e),e===!1&&m1(t)}function f1(t,e){$t(e,(n,i)=>{Vd(t,n,i)})}function Vd(t,e,n){const i=new Oe("/.info/"+e),s=dt(n);t.infoData_.updateSnapshot(i,s);const r=tl(t.infoSyncTree_,i,s);rs(t.eventQueue_,i,r)}function p1(t){return t.nextWriteId_++}function m1(t){dE(t,"onDisconnectEvents");const e=hE(t),n=lc();Ju(t.onDisconnect_,be(),(s,r)=>{const o=Gk(s,r,t.serverSyncTree_,e);Fy(n,s,o)});let i=[];Ju(n,be(),(s,r)=>{i=i.concat(tl(t.serverSyncTree_,s,r));const o=y1(t,s);Ud(t,o)}),t.onDisconnect_=lc(),rs(t.eventQueue_,be(),i)}function g1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(c1)}function dE(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ht(n,...e)}function fE(t,e,n){return eE(t.serverSyncTree_,e,n)||ve.EMPTY_NODE}function Fd(t,e=t.transactionQueueTree_){if(e||sl(t,e),ur(e)){const n=mE(t,e);D(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&_1(t,jo(e),n)}else aE(e)&&il(e,n=>{Fd(t,n)})}function _1(t,e,n){const i=n.map(l=>l.currentWriteId),s=fE(t,e,i);let r=s;const o=s.hash();for(let l=0;l<n.length;l++){const u=n[l];D(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=jt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{dE(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Ts(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();sl(t,qd(t.transactionQueueTree_,e)),Fd(t,t.transactionQueueTree_),rs(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Uo(h[d])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ot("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}Ud(t,e)}},o)}function Ud(t,e){const n=pE(t,e),i=jo(n),s=mE(t,n);return v1(t,s,i),i}function v1(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=jt(n,c.path);let u=!1,h;if(D(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,s=s.concat(Ts(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=l1)u=!0,h="maxretry",s=s.concat(Ts(t.serverSyncTree_,c.currentWriteId,!0));else{const d=fE(t,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){uE("transaction failed: Data returned ",f,c.path);let g=dt(f);typeof f=="object"&&f!=null&&Xn(f,".priority")||(g=g.updatePriority(d.getPriority()));const y=c.currentWriteId,I=hE(t),P=Qk(g,d,I);c.currentOutputSnapshotRaw=g,c.currentOutputSnapshotResolved=P,c.currentWriteId=p1(t),o.splice(o.indexOf(y),1),s=s.concat(zk(t.serverSyncTree_,c.path,P,c.currentWriteId,c.applyLocally)),s=s.concat(Ts(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",s=s.concat(Ts(t.serverSyncTree_,c.currentWriteId,!0))}rs(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}sl(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Uo(i[a]);Fd(t,t.transactionQueueTree_)}function pE(t,e){let n,i=t.transactionQueueTree_;for(n=le(e);n!==null&&ur(i)===void 0;)i=qd(i,n),e=ke(e),n=le(e);return i}function mE(t,e){const n=[];return gE(t,e,n),n.sort((i,s)=>i.order-s.order),n}function gE(t,e,n){const i=ur(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);il(e,s=>{gE(t,s,n)})}function sl(t,e){const n=ur(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,oE(e,n.length>0?n:void 0)}il(e,i=>{sl(t,i)})}function y1(t,e){const n=jo(pE(t,e)),i=qd(t.transactionQueueTree_,e);return Xk(i,s=>{tu(t,s)}),tu(t,i),cE(i,s=>{tu(t,s)}),n}function tu(t,e){const n=ur(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(D(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(D(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Ts(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?oE(e,void 0):n.length=r+1,rs(t.eventQueue_,jo(e),s);for(let o=0;o<i.length;o++)Uo(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function T1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ot(`Invalid query segment '${n}' in query '${t}'`)}return e}const qm=function(t,e){const n=I1(t),i=n.namespace;n.domain==="firebase.com"&&Yi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Yi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||XS();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new cP(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new Oe(n.pathString)}},I1=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=E1(t.substring(u,h)));const d=T1(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return ae(this._path)?null:Py(this._path)}get ref(){return new hr(this._repo,this._path)}get _queryIdentifier(){const e=Im(this._queryParams),n=Td(e);return n==="{}"?"default":n}get _queryObject(){return Im(this._queryParams)}isEqual(e){if(e=Dt(e),!(e instanceof zd))return!1;const n=this._repo===e._repo,i=xy(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+DP(this._path)}}class hr extends zd{constructor(e,n){super(e,n,new Cd,!1)}get parent(){const e=Ny(this._path);return e===null?null:new hr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Fk(hr);Uk(hr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1="FIREBASE_DATABASE_EMULATOR_HOST",oh={};let b1=!1;function R1(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Yi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ht("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=qm(r,s),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[w1]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=qm(r,s),a=o.repoInfo):c=!o.repoInfo.secure;const u=s&&c?new Qu(Qu.OWNER):new aP(t.name,t.options,e);i1("Invalid Firebase Database URL",o),ae(o.path)||Yi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=C1(a,t,u,new oP(t.name,n));return new S1(h,t)}function A1(t,e){const n=oh[e];(!n||n[t.key]!==t)&&Yi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),g1(t),delete n[t.key]}function C1(t,e,n,i){let s=oh[e.name];s||(s={},oh[e.name]=s);let r=s[t.toURLString()];return r&&Yi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new u1(t,b1,n,i),s[t.toURLString()]=r,r}class S1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(h1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new hr(this._repo,be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(A1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Yi("Cannot call "+e+" on a deleted database.")}}/**
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
 */function P1(t){HS(Ii),Rn(new sn("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return R1(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),xt(sm,rm,t),xt(sm,rm,"esm2017")}jn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};jn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};P1();var k1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,jd=jd||{},Q=k1||self;function rl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Bo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function N1(t){return Object.prototype.hasOwnProperty.call(t,nu)&&t[nu]||(t[nu]=++x1)}var nu="closure_uid_"+(1e9*Math.random()>>>0),x1=0;function O1(t,e,n){return t.call.apply(t.bind,arguments)}function D1(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function gt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?gt=O1:gt=D1,gt.apply(null,arguments)}function _a(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Xe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function wi(){this.s=this.s,this.o=this.o}var L1=0;wi.prototype.s=!1;wi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),L1!=0)&&N1(this)};wi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const _E=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Bd(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Vm(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(rl(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function _t(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}_t.prototype.h=function(){this.defaultPrevented=!0};var M1=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",()=>{},e),Q.removeEventListener("test",()=>{},e)}catch{}return t}();function go(t){return/^[\s\xa0]*$/.test(t)}function ol(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function fn(t){return ol().indexOf(t)!=-1}function $d(t){return $d[" "](t),t}$d[" "]=function(){};function q1(t,e){var n=PN;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var V1=fn("Opera"),$s=fn("Trident")||fn("MSIE"),vE=fn("Edge"),ah=vE||$s,yE=fn("Gecko")&&!(ol().toLowerCase().indexOf("webkit")!=-1&&!fn("Edge"))&&!(fn("Trident")||fn("MSIE"))&&!fn("Edge"),F1=ol().toLowerCase().indexOf("webkit")!=-1&&!fn("Edge");function EE(){var t=Q.document;return t?t.documentMode:void 0}var ch;e:{var iu="",su=function(){var t=ol();if(yE)return/rv:([^\);]+)(\)|;)/.exec(t);if(vE)return/Edge\/([\d\.]+)/.exec(t);if($s)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(F1)return/WebKit\/(\S+)/.exec(t);if(V1)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(su&&(iu=su?su[1]:""),$s){var ru=EE();if(ru!=null&&ru>parseFloat(iu)){ch=String(ru);break e}}ch=iu}var lh;if(Q.document&&$s){var Fm=EE();lh=Fm||parseInt(ch,10)||void 0}else lh=void 0;var U1=lh;function _o(t,e){if(_t.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(yE){e:{try{$d(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:z1[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_o.$.h.call(this)}}Xe(_o,_t);var z1={2:"touch",3:"pen",4:"mouse"};_o.prototype.h=function(){_o.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $o="closure_listenable_"+(1e6*Math.random()|0),j1=0;function B1(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++j1,this.fa=this.ia=!1}function al(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Wd(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function $1(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function TE(t){const e={};for(const n in t)e[n]=t[n];return e}const Um="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function IE(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<Um.length;r++)n=Um[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function cl(t){this.src=t,this.g={},this.h=0}cl.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=hh(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new B1(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function uh(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=_E(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(al(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function hh(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var Hd="closure_lm_"+(1e6*Math.random()|0),ou={};function wE(t,e,n,i,s){if(i&&i.once)return RE(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)wE(t,e[r],n,i,s);return null}return n=Qd(n),t&&t[$o]?t.O(e,n,Bo(i)?!!i.capture:!!i,s):bE(t,e,n,!1,i,s)}function bE(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Bo(s)?!!s.capture:!!s,a=Gd(t);if(a||(t[Hd]=a=new cl(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=W1(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)M1||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(CE(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function W1(){function t(n){return e.call(t.src,t.listener,n)}const e=H1;return t}function RE(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)RE(t,e[r],n,i,s);return null}return n=Qd(n),t&&t[$o]?t.P(e,n,Bo(i)?!!i.capture:!!i,s):bE(t,e,n,!0,i,s)}function AE(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)AE(t,e[r],n,i,s);else i=Bo(i)?!!i.capture:!!i,n=Qd(n),t&&t[$o]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=hh(r,n,i,s),-1<n&&(al(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Gd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=hh(e,n,i,s)),(n=-1<t?e[t]:null)&&Kd(n))}function Kd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[$o])uh(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(CE(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Gd(e))?(uh(n,t),n.h==0&&(n.src=null,e[Hd]=null)):al(t)}}}function CE(t){return t in ou?ou[t]:ou[t]="on"+t}function H1(t,e){if(t.fa)t=!0;else{e=new _o(e,this);var n=t.listener,i=t.la||t.src;t.ia&&Kd(t),t=n.call(i,e)}return t}function Gd(t){return t=t[Hd],t instanceof cl?t:null}var au="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qd(t){return typeof t=="function"?t:(t[au]||(t[au]=function(e){return t.handleEvent(e)}),t[au])}function Ye(){wi.call(this),this.i=new cl(this),this.S=this,this.J=null}Xe(Ye,wi);Ye.prototype[$o]=!0;Ye.prototype.removeEventListener=function(t,e,n,i){AE(this,t,e,n,i)};function st(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new _t(e,t);else if(e instanceof _t)e.target=e.target||t;else{var s=e;e=new _t(i,t),IE(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=va(o,i,!0,e)&&s}if(o=e.g=t,s=va(o,i,!0,e)&&s,s=va(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=va(o,i,!1,e)&&s}Ye.prototype.N=function(){if(Ye.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)al(n[i]);delete t.g[e],t.h--}}this.J=null};Ye.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Ye.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function va(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&uh(t.i,o),s=a.call(c,i)!==!1&&s}}return s&&!i.defaultPrevented}var Yd=Q.JSON.stringify;class K1{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function G1(){var t=Xd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Q1{constructor(){this.h=this.g=null}add(e,n){const i=SE.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var SE=new K1(()=>new Y1,t=>t.reset());class Y1{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function X1(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function J1(t){Q.setTimeout(()=>{throw t},0)}let vo,yo=!1,Xd=new Q1,PE=()=>{const t=Q.Promise.resolve(void 0);vo=()=>{t.then(Z1)}};var Z1=()=>{for(var t;t=G1();){try{t.h.call(t.g)}catch(n){J1(n)}var e=SE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}yo=!1};function ll(t,e){Ye.call(this),this.h=t||1,this.g=e||Q,this.j=gt(this.qb,this),this.l=Date.now()}Xe(ll,Ye);L=ll.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),st(this,"tick"),this.ga&&(Jd(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Jd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){ll.$.N.call(this),Jd(this),delete this.g};function Zd(t,e,n){if(typeof t=="function")n&&(t=gt(t,n));else if(t&&typeof t.handleEvent=="function")t=gt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function kE(t){t.g=Zd(()=>{t.g=null,t.i&&(t.i=!1,kE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class eN extends wi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:kE(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Eo(t){wi.call(this),this.h=t,this.g={}}Xe(Eo,wi);var zm=[];function NE(t,e,n,i){Array.isArray(n)||(n&&(zm[0]=n.toString()),n=zm);for(var s=0;s<n.length;s++){var r=wE(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function xE(t){Wd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Kd(e)},t),t.g={}}Eo.prototype.N=function(){Eo.$.N.call(this),xE(this)};Eo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ul(){this.g=!0}ul.prototype.Ea=function(){this.g=!1};function tN(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function nN(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Is(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+sN(t,n)+(i?" "+i:"")})}function iN(t,e){t.info(function(){return"TIMEOUT: "+e})}ul.prototype.info=function(){};function sN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Yd(n)}catch{return e}}var os={},jm=null;function hl(){return jm=jm||new Ye}os.Ta="serverreachability";function OE(t){_t.call(this,os.Ta,t)}Xe(OE,_t);function To(t){const e=hl();st(e,new OE(e))}os.STAT_EVENT="statevent";function DE(t,e){_t.call(this,os.STAT_EVENT,t),this.stat=e}Xe(DE,_t);function It(t){const e=hl();st(e,new DE(e,t))}os.Ua="timingevent";function LE(t,e){_t.call(this,os.Ua,t),this.size=e}Xe(LE,_t);function Wo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var dl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ME={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ef(){}ef.prototype.h=null;function Bm(t){return t.h||(t.h=t.i())}function qE(){}var Ho={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function tf(){_t.call(this,"d")}Xe(tf,_t);function nf(){_t.call(this,"c")}Xe(nf,_t);var dh;function fl(){}Xe(fl,ef);fl.prototype.g=function(){return new XMLHttpRequest};fl.prototype.i=function(){return{}};dh=new fl;function Ko(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Eo(this),this.P=rN,t=ah?125:void 0,this.V=new ll(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new VE}function VE(){this.i=null,this.g="",this.h=!1}var rN=45e3,fh={},fc={};L=Ko.prototype;L.setTimeout=function(t){this.P=t};function ph(t,e,n){t.L=1,t.v=ml(Hn(e)),t.s=n,t.S=!0,FE(t,null)}function FE(t,e){t.G=Date.now(),Go(t),t.A=Hn(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),KE(n.i,"t",i),t.C=0,n=t.l.J,t.h=new VE,t.g=pT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new eN(gt(t.Pa,t,t.g),t.O)),NE(t.U,t.g,"readystatechange",t.nb),e=t.I?TE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),To(),tN(t.j,t.u,t.A,t.m,t.W,t.s)}L.nb=function(t){t=t.target;const e=this.M;e&&_n(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const u=_n(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ah||this.g&&(this.h.h||this.g.ja()||Km(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?To(3):To(2)),pl(this);var n=this.g.da();this.ca=n;t:if(UE(this)){var i=Km(this.g);t="";var s=i.length,r=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mi(this),Hr(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,nN(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!go(a)){var l=a;break t}}l=null}if(n=l)Is(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mh(this,n);else{this.i=!1,this.o=3,It(12),Mi(this),Hr(this);break e}}this.S?(zE(this,u,o),ah&&this.i&&u==3&&(NE(this.U,this.V,"tick",this.mb),this.V.start())):(Is(this.j,this.m,o,null),mh(this,o)),u==4&&Mi(this),this.i&&!this.J&&(u==4?uT(this.l,this):(this.i=!1,Go(this)))}else AN(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,It(12)):(this.o=0,It(13)),Mi(this),Hr(this)}}}catch{}finally{}};function UE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function zE(t,e,n){let i=!0,s;for(;!t.J&&t.C<n.length;)if(s=oN(t,n),s==fc){e==4&&(t.o=4,It(14),i=!1),Is(t.j,t.m,null,"[Incomplete Response]");break}else if(s==fh){t.o=4,It(15),Is(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Is(t.j,t.m,s,null),mh(t,s);UE(t)&&s!=fc&&s!=fh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,It(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),lf(e),e.M=!0,It(11))):(Is(t.j,t.m,n,"[Invalid Chunked Response]"),Mi(t),Hr(t))}L.mb=function(){if(this.g){var t=_n(this.g),e=this.g.ja();this.C<e.length&&(pl(this),zE(this,t,e),this.i&&t!=4&&Go(this))}};function oN(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?fc:(n=Number(e.substring(n,i)),isNaN(n)?fh:(i+=1,i+n>e.length?fc:(e=e.slice(i,i+n),t.C=i+n,e)))}L.cancel=function(){this.J=!0,Mi(this)};function Go(t){t.Y=Date.now()+t.P,jE(t,t.P)}function jE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Wo(gt(t.lb,t),e)}function pl(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}L.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(iN(this.j,this.A),this.L!=2&&(To(),It(17)),Mi(this),this.o=2,Hr(this)):jE(this,this.Y-t)};function Hr(t){t.l.H==0||t.J||uT(t.l,t)}function Mi(t){pl(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Jd(t.V),xE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function mh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||gh(n.i,t))){if(!t.K&&gh(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)gc(n),vl(n);else break e;cf(n),It(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Wo(gt(n.ib,n),6e3));if(1>=YE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else qi(n,11)}else if((t.K||n.g==t)&&gc(n),!go(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=i.i;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(sf(r,r.h),r.h=null))}if(i.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(i.Da=v,Ne(i.I,i.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=fT(i,i.J?i.pa:null,i.Y),o.K){XE(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.B&&(pl(a),Go(a)),i.g=o}else cT(i);0<n.j.length&&yl(n)}else l[0]!="stop"&&l[0]!="close"||qi(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?qi(n,7):af(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}To(4)}catch{}}function aN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(rl(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function cN(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(rl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function BE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(rl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=cN(t),i=aN(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var $E=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Wi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Wi){this.h=t.h,pc(this,t.j),this.s=t.s,this.g=t.g,mc(this,t.m),this.l=t.l;var e=t.i,n=new Io;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),$m(this,n),this.o=t.o}else t&&(e=String(t).match($E))?(this.h=!1,pc(this,e[1]||"",!0),this.s=Dr(e[2]||""),this.g=Dr(e[3]||"",!0),mc(this,e[4]),this.l=Dr(e[5]||"",!0),$m(this,e[6]||"",!0),this.o=Dr(e[7]||"")):(this.h=!1,this.i=new Io(null,this.h))}Wi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Lr(e,Wm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Lr(e,Wm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Lr(n,n.charAt(0)=="/"?dN:hN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Lr(n,pN)),t.join("")};function Hn(t){return new Wi(t)}function pc(t,e,n){t.j=n?Dr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function mc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $m(t,e,n){e instanceof Io?(t.i=e,mN(t.i,t.h)):(n||(e=Lr(e,fN)),t.i=new Io(e,t.h))}function Ne(t,e,n){t.i.set(e,n)}function ml(t){return Ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Dr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Lr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,uN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function uN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Wm=/[#\/\?@]/g,hN=/[#\?:]/g,dN=/[#\?]/g,fN=/[#\?@]/g,pN=/#/g;function Io(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function bi(t){t.g||(t.g=new Map,t.h=0,t.i&&lN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=Io.prototype;L.add=function(t,e){bi(this),this.i=null,t=dr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function WE(t,e){bi(t),e=dr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function HE(t,e){return bi(t),e=dr(t,e),t.g.has(e)}L.forEach=function(t,e){bi(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};L.ta=function(){bi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};L.Z=function(t){bi(this);let e=[];if(typeof t=="string")HE(this,t)&&(e=e.concat(this.g.get(dr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return bi(this),this.i=null,t=dr(this,t),HE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function KE(t,e,n){WE(t,e),0<n.length&&(t.i=null,t.g.set(dr(t,e),Bd(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function dr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function mN(t,e){e&&!t.j&&(bi(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(WE(this,i),KE(this,s,n))},t)),t.j=e}var gN=class{constructor(t,e){this.g=t,this.map=e}};function GE(t){this.l=t||_N,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _N=10;function QE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function YE(t){return t.h?1:t.g?t.g.size:0}function gh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function sf(t,e){t.g?t.g.add(e):t.h=e}function XE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}GE.prototype.cancel=function(){if(this.i=JE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function JE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Bd(t.i)}var vN=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function yN(){this.g=new vN}function EN(t,e,n){const i=n||"";try{BE(t,function(s,r){let o=s;Bo(s)&&(o=Yd(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function TN(t,e){const n=new ul;if(Q.Image){const i=new Image;i.onload=_a(ya,n,i,"TestLoadImage: loaded",!0,e),i.onerror=_a(ya,n,i,"TestLoadImage: error",!1,e),i.onabort=_a(ya,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=_a(ya,n,i,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function ya(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Qo(t){this.l=t.ec||null,this.j=t.ob||!1}Xe(Qo,ef);Qo.prototype.g=function(){return new gl(this.l,this.j)};Qo.prototype.i=function(t){return function(){return t}}({});function gl(t,e){Ye.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=rf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Xe(gl,Ye);var rf=0;L=gl.prototype;L.open=function(t,e){if(this.readyState!=rf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,wo(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yo(this)),this.readyState=rf};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,wo(this)),this.g&&(this.readyState=3,wo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ZE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function ZE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Yo(this):wo(this),this.readyState==3&&ZE(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,Yo(this))};L.Ya=function(t){this.g&&(this.response=t,Yo(this))};L.ka=function(){this.g&&Yo(this)};function Yo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,wo(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function wo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(gl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var IN=Q.JSON.parse;function Ve(t){Ye.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=eT,this.L=this.M=!1}Xe(Ve,Ye);var eT="",wN=/^https?$/i,bN=["POST","PUT"];L=Ve.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():dh.g(),this.C=this.u?Bm(this.u):Bm(dh),this.g.onreadystatechange=gt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Hm(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=Q.FormData&&t instanceof Q.FormData,!(0<=_E(bN,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{iT(this),0<this.B&&((this.L=RN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=gt(this.ua,this)):this.A=Zd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Hm(this,r)}};function RN(t){return $s&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof jd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,st(this,"timeout"),this.abort(8))};function Hm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,tT(t),_l(t)}function tT(t){t.F||(t.F=!0,st(t,"complete"),st(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,st(this,"complete"),st(this,"abort"),_l(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_l(this,!0)),Ve.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?nT(this):this.kb())};L.kb=function(){nT(this)};function nT(t){if(t.h&&typeof jd<"u"&&(!t.C[1]||_n(t)!=4||t.da()!=2)){if(t.v&&_n(t)==4)Zd(t.La,0,t);else if(st(t,"readystatechange"),_n(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.I).match($E)[1]||null;!s&&Q.self&&Q.self.location&&(s=Q.self.location.protocol.slice(0,-1)),i=!wN.test(s?s.toLowerCase():"")}n=i}if(n)st(t,"complete"),st(t,"success");else{t.m=6;try{var r=2<_n(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",tT(t)}}finally{_l(t)}}}}function _l(t,e){if(t.g){iT(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||st(t,"ready");try{n.onreadystatechange=i}catch{}}}function iT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function _n(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),IN(e)}};function Km(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case eT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function AN(t){const e={};t=(t.g&&2<=_n(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(go(t[i]))continue;var n=X1(t[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}$1(e,function(i){return i.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function sT(t){let e="";return Wd(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function of(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=sT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ne(t,e,n))}function br(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rT(t){this.Ga=0,this.j=[],this.l=new ul,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=br("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=br("baseRetryDelayMs",5e3,t),this.hb=br("retryDelaySeedMs",1e4,t),this.eb=br("forwardChannelMaxRetries",2,t),this.xa=br("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new GE(t&&t.concurrentRequestLimit),this.Ja=new yN,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=rT.prototype;L.ra=8;L.H=1;function af(t){if(oT(t),t.H==3){var e=t.W++,n=Hn(t.I);if(Ne(n,"SID",t.K),Ne(n,"RID",e),Ne(n,"TYPE","terminate"),Xo(t,n),e=new Ko(t,t.l,e),e.L=2,e.v=ml(Hn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=pT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Go(e)}dT(t)}function vl(t){t.g&&(lf(t),t.g.cancel(),t.g=null)}function oT(t){vl(t),t.u&&(Q.clearTimeout(t.u),t.u=null),gc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function yl(t){if(!QE(t.i)&&!t.m){t.m=!0;var e=t.Na;vo||PE(),yo||(vo(),yo=!0),Xd.add(e,t),t.C=0}}function CN(t,e){return YE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Wo(gt(t.Na,t,e),hT(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Ko(this,this.l,t);let r=this.s;if(this.U&&(r?(r=TE(r),IE(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=aT(this,s,e),n=Hn(this.I),Ne(n,"RID",t),Ne(n,"CVER",22),this.F&&Ne(n,"X-HTTP-Session-Id",this.F),Xo(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(sT(r)))+"&"+e:this.o&&of(n,this.o,r)),sf(this.i,s),this.bb&&Ne(n,"TYPE","init"),this.P?(Ne(n,"$req",e),Ne(n,"SID","null"),s.aa=!0,ph(s,n,null)):ph(s,n,e),this.H=2}}else this.H==3&&(t?Gm(this,t):this.j.length==0||QE(this.i)||Gm(this))};function Gm(t,e){var n;e?n=e.m:n=t.W++;const i=Hn(t.I);Ne(i,"SID",t.K),Ne(i,"RID",n),Ne(i,"AID",t.V),Xo(t,i),t.o&&t.s&&of(i,t.o,t.s),n=new Ko(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=aT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),sf(t.i,n),ph(n,i,e)}function Xo(t,e){t.na&&Wd(t.na,function(n,i){Ne(e,i,n)}),t.h&&BE({},function(n,i){Ne(e,i,n)})}function aT(t,e,n){n=Math.min(t.j.length,n);var i=t.h?gt(t.h.Va,t.h,t):null;e:{var s=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=r,0>l)r=Math.max(0,s[c].g-100),a=!1;else try{EN(u,o,"req"+l+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function cT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;vo||PE(),yo||(vo(),yo=!0),Xd.add(e,t),t.A=0}}function cf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Wo(gt(t.Ma,t),hT(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,lT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Wo(gt(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,It(10),vl(this),lT(this))};function lf(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function lT(t){t.g=new Ko(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Hn(t.wa);Ne(e,"RID","rpc"),Ne(e,"SID",t.K),Ne(e,"AID",t.V),Ne(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ne(e,"TO",t.qa),Ne(e,"TYPE","xmlhttp"),Xo(t,e),t.o&&t.s&&of(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ml(Hn(e)),n.s=null,n.S=!0,FE(n,t)}L.ib=function(){this.v!=null&&(this.v=null,vl(this),cf(this),It(19))};function gc(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function uT(t,e){var n=null;if(t.g==e){gc(t),lf(t),t.g=null;var i=2}else if(gh(t.i,e))n=e.F,XE(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=hl(),st(i,new LE(i,n)),yl(t)}else cT(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&CN(t,e)||i==2&&cf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:qi(t,5);break;case 4:qi(t,10);break;case 3:qi(t,6);break;default:qi(t,2)}}}function hT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function qi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=gt(t.pb,t);n||(n=new Wi("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||pc(n,"https"),ml(n)),TN(n.toString(),i)}else It(2);t.H=0,t.h&&t.h.za(e),dT(t),oT(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),It(2)):(this.l.info("Failed to ping google.com"),It(1))};function dT(t){if(t.H=0,t.ma=[],t.h){const e=JE(t.i);(e.length!=0||t.j.length!=0)&&(Vm(t.ma,e),Vm(t.ma,t.j),t.i.i.length=0,Bd(t.j),t.j.length=0),t.h.ya()}}function fT(t,e,n){var i=n instanceof Wi?Hn(n):new Wi(n);if(i.g!="")e&&(i.g=e+"."+i.g),mc(i,i.m);else{var s=Q.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Wi(null);i&&pc(r,i),e&&(r.g=e),s&&mc(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&Ne(i,n,e),Ne(i,"VER",t.ra),Xo(t,i),i}function pT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ve(new Qo({ob:!0})):new Ve(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function mT(){}L=mT.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function _c(){if($s&&!(10<=Number(U1)))throw Error("Environmental error: no available transport.")}_c.prototype.g=function(t,e){return new Lt(t,e)};function Lt(t,e){Ye.call(this),this.g=new rT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!go(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!go(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new fr(this)}Xe(Lt,Ye);Lt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;It(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=fT(t,null,t.Y),yl(t)};Lt.prototype.close=function(){af(this.g)};Lt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Yd(t),t=n);e.j.push(new gN(e.fb++,t)),e.H==3&&yl(e)};Lt.prototype.N=function(){this.g.h=null,delete this.j,af(this.g),delete this.g,Lt.$.N.call(this)};function gT(t){tf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Xe(gT,tf);function _T(){nf.call(this),this.status=1}Xe(_T,nf);function fr(t){this.g=t}Xe(fr,mT);fr.prototype.Ba=function(){st(this.g,"a")};fr.prototype.Aa=function(t){st(this.g,new gT(t))};fr.prototype.za=function(t){st(this.g,new _T)};fr.prototype.ya=function(){st(this.g,"b")};function SN(){this.blockSize=-1}function on(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Xe(on,SN);on.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function cu(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}on.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)cu(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){cu(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){cu(this,i),s=0;break}}this.h=s,this.i+=e};on.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function Te(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var PN={};function uf(t){return-128<=t&&128>t?q1(t,function(e){return new Te([e|0],0>e?-1:0)}):new Te([t|0],0>t?-1:0)}function vn(t){if(isNaN(t)||!isFinite(t))return xs;if(0>t)return tt(vn(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=_h;return new Te(e,0)}function vT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return tt(vT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=vn(Math.pow(e,8)),i=xs,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=vn(Math.pow(e,r)),i=i.R(r).add(vn(o))):(i=i.R(n),i=i.add(vn(o)))}return i}var _h=4294967296,xs=uf(0),vh=uf(1),Qm=uf(16777216);L=Te.prototype;L.ea=function(){if(Ut(this))return-tt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:_h+i)*e,e*=_h}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Un(this))return"0";if(Ut(this))return"-"+tt(this).toString(t);for(var e=vn(Math.pow(t,6)),n=this,i="";;){var s=yc(n,e).g;n=vc(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Un(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Un(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ut(t){return t.h==-1}L.X=function(t){return t=vc(this,t),Ut(t)?-1:Un(t)?0:1};function tt(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new Te(n,~t.h).add(vh)}L.abs=function(){return Ut(this)?tt(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new Te(n,n[n.length-1]&-2147483648?-1:0)};function vc(t,e){return t.add(tt(e))}L.R=function(t){if(Un(this)||Un(t))return xs;if(Ut(this))return Ut(t)?tt(this).R(tt(t)):tt(tt(this).R(t));if(Ut(t))return tt(this.R(tt(t)));if(0>this.X(Qm)&&0>t.X(Qm))return vn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*i+2*s]+=o*c,Ea(n,2*i+2*s),n[2*i+2*s+1]+=r*c,Ea(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,Ea(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,Ea(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new Te(n,0)};function Ea(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Rr(t,e){this.g=t,this.h=e}function yc(t,e){if(Un(e))throw Error("division by zero");if(Un(t))return new Rr(xs,xs);if(Ut(t))return e=yc(tt(t),e),new Rr(tt(e.g),tt(e.h));if(Ut(e))return e=yc(t,tt(e)),new Rr(tt(e.g),e.h);if(30<t.g.length){if(Ut(t)||Ut(e))throw Error("slowDivide_ only works with positive integers.");for(var n=vh,i=e;0>=i.X(t);)n=Ym(n),i=Ym(i);var s=ms(n,1),r=ms(i,1);for(i=ms(i,2),n=ms(n,2);!Un(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=ms(i,1),n=ms(n,1)}return e=vc(t,s.R(e)),new Rr(s,e)}for(s=xs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=vn(n),o=r.R(e);Ut(o)||0<o.X(t);)n-=i,r=vn(n),o=r.R(e);Un(r)&&(r=vh),s=s.add(r),t=vc(t,o)}return new Rr(s,t)}L.gb=function(t){return yc(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new Te(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new Te(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new Te(n,this.h^t.h)};function Ym(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new Te(n,t.h)}function ms(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new Te(s,t.h)}_c.prototype.createWebChannel=_c.prototype.g;Lt.prototype.send=Lt.prototype.u;Lt.prototype.open=Lt.prototype.m;Lt.prototype.close=Lt.prototype.close;dl.NO_ERROR=0;dl.TIMEOUT=8;dl.HTTP_ERROR=6;ME.COMPLETE="complete";qE.EventType=Ho;Ho.OPEN="a";Ho.CLOSE="b";Ho.ERROR="c";Ho.MESSAGE="d";Ye.prototype.listen=Ye.prototype.O;Ve.prototype.listenOnce=Ve.prototype.P;Ve.prototype.getLastError=Ve.prototype.Sa;Ve.prototype.getLastErrorCode=Ve.prototype.Ia;Ve.prototype.getStatus=Ve.prototype.da;Ve.prototype.getResponseJson=Ve.prototype.Wa;Ve.prototype.getResponseText=Ve.prototype.ja;Ve.prototype.send=Ve.prototype.ha;Ve.prototype.setWithCredentials=Ve.prototype.Oa;on.prototype.digest=on.prototype.l;on.prototype.reset=on.prototype.reset;on.prototype.update=on.prototype.j;Te.prototype.add=Te.prototype.add;Te.prototype.multiply=Te.prototype.R;Te.prototype.modulo=Te.prototype.gb;Te.prototype.compare=Te.prototype.X;Te.prototype.toNumber=Te.prototype.ea;Te.prototype.toString=Te.prototype.toString;Te.prototype.getBits=Te.prototype.D;Te.fromNumber=vn;Te.fromString=vT;var kN=function(){return new _c},NN=function(){return hl()},lu=dl,xN=ME,ON=os,Xm={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},DN=Qo,Ta=qE,LN=Ve,MN=on,Os=Te;const Jm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const es=new Do("@firebase/firestore");function Ar(){return es.logLevel}function V(t,...e){if(es.logLevel<=re.DEBUG){const n=e.map(hf);es.debug(`Firestore (${pr}): ${t}`,...n)}}function Kn(t,...e){if(es.logLevel<=re.ERROR){const n=e.map(hf);es.error(`Firestore (${pr}): ${t}`,...n)}}function Ws(t,...e){if(es.logLevel<=re.WARN){const n=e.map(hf);es.warn(`Firestore (${pr}): ${t}`,...n)}}function hf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${pr}) INTERNAL ASSERTION FAILED: `+t;throw Kn(e),new Error(e)}function xe(t,e){t||G()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class VN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class FN{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let r=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Bn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(xe(typeof i.accessToken=="string"),new yT(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new ut(e)}}class UN{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class zN{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new UN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class BN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=r=>{r.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.R=n.token,new jN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $N(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=$N(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function me(t,e){return t<e?-1:t>e?1:0}function Hs(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new je(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new je(0,0))}static max(){return new Y(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,i){n===void 0?n=0:n>e.length&&G(),i===void 0?i=e.length-n:i>e.length-n&&G(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return bo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bo?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends bo{construct(e,n,i){return new Le(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new z(b.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const WN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends bo{construct(e,n,i){return new it(e,n,i)}static isValidIdentifier(e){return WN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new z(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new z(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new z(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Le.fromString(e))}static fromName(e){return new W(Le.fromString(e).popFirst(5))}static empty(){return new W(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Le(e.slice()))}}function HN(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(i===1e9?new je(n+1,0):new je(n,i));return new yi(s,W.empty(),e)}function KN(t){return new yi(t.readTime,t.key,-1)}class yi{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new yi(Y.min(),W.empty(),-1)}static max(){return new yi(Y.max(),W.empty(),-1)}}function GN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==QN)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,i)=>{n(e)})}static reject(e){return new C((n,i)=>{i(e)})}static waitFor(e){return new C((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},c=>i(c))}),o=!0,r===s&&n()})}static or(e){let n=C.resolve(!1);for(const i of e)n=n.next(s=>s?C.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new C((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,n){return new C((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function Zo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class df{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.se(i),this.oe=i=>n.writeSequenceNumber(i))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}df._e=-1;function El(t){return t==null}function Ec(t){return t===0&&1/t==-1/0}function XN(t){return typeof t=="number"&&Number.isInteger(t)&&!Ec(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function TT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ia(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ia(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ia(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ia(this.root,e,this.comparator,!0)}}class Ia{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Ze.RED,this.left=s??Ze.EMPTY,this.right=r??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new Ze(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,i,s,r){return this}insert(e,n,i){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new eg(this.data.getIterator())}getIteratorFrom(e){return new eg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class eg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new rt(it.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hs(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class IT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new IT("Invalid base64 string: "+r):r}}(e);return new yt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(e);return new yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const JN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ei(t){if(xe(!!t),typeof t=="string"){let e=0;const n=JN.exec(t);if(xe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ts(t){return typeof t=="string"?yt.fromBase64String(t):yt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function pf(t){const e=t.mapValue.fields.__previous_value__;return ff(e)?pf(e):e}function Ro(t){const e=Ei(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e,n,i,s,r,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Ao{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ao("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ao&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ns(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ff(t)?4:ex(t)?9007199254740991:10:G()}function Cn(t,e){if(t===e)return!0;const n=ns(t);if(n!==ns(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ro(t).isEqual(Ro(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=Ei(s.timestampValue),a=Ei(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return ts(s.bytesValue).isEqual(ts(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return ze(s.geoPointValue.latitude)===ze(r.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return ze(s.integerValue)===ze(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=ze(s.doubleValue),a=ze(r.doubleValue);return o===a?Ec(o)===Ec(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Hs(t.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:return function(s,r){const o=s.mapValue.fields||{},a=r.mapValue.fields||{};if(Zm(o)!==Zm(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Cn(o[c],a[c])))return!1;return!0}(t,e);default:return G()}}function Co(t,e){return(t.values||[]).find(n=>Cn(n,e))!==void 0}function Ks(t,e){if(t===e)return 0;const n=ns(t),i=ns(e);if(n!==i)return me(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=ze(r.integerValue||r.doubleValue),c=ze(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return tg(t.timestampValue,e.timestampValue);case 4:return tg(Ro(t),Ro(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(r,o){const a=ts(r),c=ts(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=me(a[l],c[l]);if(u!==0)return u}return me(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=me(ze(r.latitude),ze(o.latitude));return a!==0?a:me(ze(r.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Ks(a[l],c[l]);if(u)return u}return me(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===wa.mapValue&&o===wa.mapValue)return 0;if(r===wa.mapValue)return 1;if(o===wa.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=me(c[h],u[h]);if(d!==0)return d;const f=Ks(a[c[h]],l[u[h]]);if(f!==0)return f}return me(c.length,u.length)}(t.mapValue,e.mapValue);default:throw G()}}function tg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=Ei(t),i=Ei(e),s=me(n.seconds,i.seconds);return s!==0?s:me(n.nanos,i.nanos)}function Gs(t){return yh(t)}function yh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=Ei(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ts(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",s=!0;for(const r of n.values||[])s?s=!1:i+=",",i+=yh(r);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${yh(n.fields[o])}`;return s+"}"}(t.mapValue):G()}function Eh(t){return!!t&&"integerValue"in t}function mf(t){return!!t&&"arrayValue"in t}function ng(t){return!!t&&"nullValue"in t}function ig(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qa(t){return!!t&&"mapValue"in t}function Kr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return mr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Kr(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Kr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ex(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Kr(n)}setAll(e){let n=it.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Kr(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];qa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){mr(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new zt(Kr(this.value))}}function wT(t){const e=[];return mr(t.fields,(n,i)=>{const s=new it([n]);if(qa(i)){const r=wT(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ft(e,0,Y.min(),Y.min(),Y.min(),zt.empty(),0)}static newFoundDocument(e,n,i,s){return new ft(e,1,n,Y.min(),i,s,0)}static newNoDocument(e,n){return new ft(e,2,n,Y.min(),Y.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,Y.min(),Y.min(),zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Tc{constructor(e,n){this.position=e,this.inclusive=n}}function sg(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=W.comparator(W.fromName(o.referenceValue),n.key):i=Ks(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function rg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ic{constructor(e,n="asc"){this.field=e,this.dir=n}}function tx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class bT{}class $e extends bT{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new ix(e,n,i):n==="array-contains"?new ox(e,i):n==="in"?new ax(e,i):n==="not-in"?new cx(e,i):n==="array-contains-any"?new lx(e,i):new $e(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new sx(e,i):new rx(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ks(n,this.value)):n!==null&&ns(this.value)===ns(n)&&this.matchesComparison(Ks(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Sn extends bT{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Sn(e,n)}matches(e){return RT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function RT(t){return t.op==="and"}function AT(t){return nx(t)&&RT(t)}function nx(t){for(const e of t.filters)if(e instanceof Sn)return!1;return!0}function Th(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+Gs(t.value);if(AT(t))return t.filters.map(e=>Th(e)).join(",");{const e=t.filters.map(n=>Th(n)).join(",");return`${t.op}(${e})`}}function CT(t,e){return t instanceof $e?function(i,s){return s instanceof $e&&i.op===s.op&&i.field.isEqual(s.field)&&Cn(i.value,s.value)}(t,e):t instanceof Sn?function(i,s){return s instanceof Sn&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,a)=>r&&CT(o,s.filters[a]),!0):!1}(t,e):void G()}function ST(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${Gs(n.value)}`}(t):t instanceof Sn?function(n){return n.op.toString()+" {"+n.getFilters().map(ST).join(" ,")+"}"}(t):"Filter"}class ix extends $e{constructor(e,n,i){super(e,n,i),this.key=W.fromName(i.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class sx extends $e{constructor(e,n){super(e,"in",n),this.keys=PT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class rx extends $e{constructor(e,n){super(e,"not-in",n),this.keys=PT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function PT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>W.fromName(i.referenceValue))}class ox extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return mf(n)&&Co(n.arrayValue,this.value)}}class ax extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Co(this.value.arrayValue,n)}}class cx extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(Co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Co(this.value.arrayValue,n)}}class lx extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!mf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Co(this.value.arrayValue,i))}}/**
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
 */class ux{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ce=null}}function og(t,e=null,n=[],i=[],s=null,r=null,o=null){return new ux(t,e,n,i,s,r,o)}function gf(t){const e=ee(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Th(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),El(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Gs(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Gs(i)).join(",")),e.ce=n}return e.ce}function _f(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!tx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!CT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!rg(t.startAt,e.startAt)&&rg(t.endAt,e.endAt)}function Ih(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function hx(t,e,n,i,s,r,o,a){return new Tl(t,e,n,i,s,r,o,a)}function Il(t){return new Tl(t)}function ag(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function dx(t){return t.collectionGroup!==null}function Gr(t){const e=ee(t);if(e.le===null){e.le=[];const n=new Set;for(const r of e.explicitOrderBy)e.le.push(r),n.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new rt(it.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.le.push(new Ic(r,i))}),n.has(it.keyField().canonicalString())||e.le.push(new Ic(it.keyField(),i))}return e.le}function Tn(t){const e=ee(t);return e.he||(e.he=fx(e,Gr(t))),e.he}function fx(t,e){if(t.limitType==="F")return og(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new Ic(s.field,r)});const n=t.endAt?new Tc(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Tc(t.startAt.position,t.startAt.inclusive):null;return og(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function wh(t,e,n){return new Tl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wl(t,e){return _f(Tn(t),Tn(e))&&t.limitType===e.limitType}function kT(t){return`${gf(Tn(t))}|lt:${t.limitType}`}function gs(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(s=>ST(s)).join(", ")}]`),El(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(s=>Gs(s)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(s=>Gs(s)).join(",")),`Target(${i})`}(Tn(t))}; limitType=${t.limitType})`}function bl(t,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):W.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(t,e)&&function(i,s){for(const r of Gr(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(i,s){return!(i.startAt&&!function(o,a,c){const l=sg(o,a,c);return o.inclusive?l<=0:l<0}(i.startAt,Gr(i),s)||i.endAt&&!function(o,a,c){const l=sg(o,a,c);return o.inclusive?l>=0:l>0}(i.endAt,Gr(i),s))}(t,e)}function px(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function NT(t){return(e,n)=>{let i=!1;for(const s of Gr(t)){const r=mx(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function mx(t,e,n){const i=t.field.isKeyField()?W.comparator(e.key,n.key):function(r,o,a){const c=o.data.field(r),l=a.data.field(r);return c!==null&&l!==null?Ks(c,l):G()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){mr(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return TT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx=new qe(W.comparator);function Gn(){return gx}const xT=new qe(W.comparator);function Mr(...t){let e=xT;for(const n of t)e=e.insert(n.key,n);return e}function OT(t){let e=xT;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Vi(){return Qr()}function DT(){return Qr()}function Qr(){return new gr(t=>t.toString(),(t,e)=>t.isEqual(e))}const _x=new qe(W.comparator),vx=new rt(W.comparator);function oe(...t){let e=vx;for(const n of t)e=e.add(n);return e}const yx=new rt(me);function Ex(){return yx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ec(e)?"-0":e}}function MT(t){return{integerValue:""+t}}function Tx(t,e){return XN(e)?MT(e):LT(t,e)}/**
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
 */class Rl{constructor(){this._=void 0}}function Ix(t,e,n){return t instanceof wc?function(s,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&ff(r)&&(r=pf(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof So?VT(t,e):t instanceof Po?FT(t,e):function(s,r){const o=qT(s,r),a=cg(o)+cg(s.Ie);return Eh(o)&&Eh(s.Ie)?MT(a):LT(s.serializer,a)}(t,e)}function wx(t,e,n){return t instanceof So?VT(t,e):t instanceof Po?FT(t,e):n}function qT(t,e){return t instanceof bc?function(i){return Eh(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class wc extends Rl{}class So extends Rl{constructor(e){super(),this.elements=e}}function VT(t,e){const n=UT(e);for(const i of t.elements)n.some(s=>Cn(s,i))||n.push(i);return{arrayValue:{values:n}}}class Po extends Rl{constructor(e){super(),this.elements=e}}function FT(t,e){let n=UT(e);for(const i of t.elements)n=n.filter(s=>!Cn(s,i));return{arrayValue:{values:n}}}class bc extends Rl{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function cg(t){return ze(t.integerValue||t.doubleValue)}function UT(t){return mf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function bx(t,e){return t.field.isEqual(e.field)&&function(i,s){return i instanceof So&&s instanceof So||i instanceof Po&&s instanceof Po?Hs(i.elements,s.elements,Cn):i instanceof bc&&s instanceof bc?Cn(i.Ie,s.Ie):i instanceof wc&&s instanceof wc}(t.transform,e.transform)}class Rx{constructor(e,n){this.version=e,this.transformResults=n}}class $n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $n}static exists(e){return new $n(void 0,e)}static updateTime(e){return new $n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Va(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Al{}function zT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new BT(t.key,$n.none()):new ea(t.key,t.data,$n.none());{const n=t.data,i=zt.empty();let s=new rt(it.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new as(t.key,i,new Jt(s.toArray()),$n.none())}}function Ax(t,e,n){t instanceof ea?function(s,r,o){const a=s.value.clone(),c=ug(s.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof as?function(s,r,o){if(!Va(s.precondition,r))return void r.convertToUnknownDocument(o.version);const a=ug(s.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(jT(s)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Yr(t,e,n,i){return t instanceof ea?function(r,o,a,c){if(!Va(r.precondition,o))return a;const l=r.value.clone(),u=hg(r.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof as?function(r,o,a,c){if(!Va(r.precondition,o))return a;const l=hg(r.fieldTransforms,c,o),u=o.data;return u.setAll(jT(r)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,i):function(r,o,a){return Va(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Cx(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=qT(i.transform,s||null);r!=null&&(n===null&&(n=zt.empty()),n.set(i.field,r))}return n||null}function lg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Hs(i,s,(r,o)=>bx(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ea extends Al{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class as extends Al{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function jT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function ug(t,e,n){const i=new Map;xe(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,wx(o,a,n[s]))}return i}function hg(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,Ix(r,o,e))}return i}class BT extends Al{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sx extends Al{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&Ax(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Yr(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Yr(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=DT();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const c=zT(o,a);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&Hs(this.mutations,e.mutations,(n,i)=>lg(n,i))&&Hs(this.baseMutations,e.baseMutations,(n,i)=>lg(n,i))}}class vf{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){xe(e.mutations.length===i.length);let s=function(){return _x}();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new vf(e,n,i,s)}}/**
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
 */class kx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Nx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,ce;function xx(t){switch(t){default:return G();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function $T(t){if(t===void 0)return Kn("GRPC error has no .code"),b.UNKNOWN;switch(t){case Ue.OK:return b.OK;case Ue.CANCELLED:return b.CANCELLED;case Ue.UNKNOWN:return b.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return b.INTERNAL;case Ue.UNAVAILABLE:return b.UNAVAILABLE;case Ue.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Ue.NOT_FOUND:return b.NOT_FOUND;case Ue.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Ue.ABORTED:return b.ABORTED;case Ue.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Ue.DATA_LOSS:return b.DATA_LOSS;default:return G()}}(ce=Ue||(Ue={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ox(){return new TextEncoder}/**
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
 */const Dx=new Os([4294967295,4294967295],0);function dg(t){const e=Ox().encode(t),n=new MN;return n.update(e),new Uint8Array(n.digest())}function fg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Os([n,i],0),new Os([s,r],0)]}class yf{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new qr(`Invalid padding: ${n}`);if(i<0)throw new qr(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new qr(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new qr(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Os.fromNumber(this.Te)}de(e,n,i){let s=e.add(n.multiply(Os.fromNumber(i)));return s.compare(Dx)===1&&(s=new Os([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=dg(e),[i,s]=fg(n);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);if(!this.Ae(o))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new yf(r,s,n);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=dg(e),[i,s]=fg(n);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);this.Re(o)}}Re(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class qr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,ta.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Cl(Y.min(),s,new qe(me),Gn(),oe())}}class ta{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new ta(i,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n,i,s){this.Ve=e,this.removedTargetIds=n,this.key=i,this.me=s}}class WT{constructor(e,n){this.targetId=e,this.fe=n}}class HT{constructor(e,n,i=yt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class pg{constructor(){this.ge=0,this.pe=gg(),this.ye=yt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=oe(),n=oe(),i=oe();return this.pe.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:G()}}),new ta(this.ye,this.we,e,n,i)}Fe(){this.Se=!1,this.pe=gg()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class Lx{constructor(e){this.Le=e,this.ke=new Map,this.qe=Gn(),this.Qe=mg(),this.Ke=new qe(me)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const i=this.ze(n);switch(e.state){case 0:this.je(n)&&i.Ce(e.resumeToken);break;case 1:i.Ne(),i.be||i.Fe(),i.Ce(e.resumeToken);break;case 2:i.Ne(),i.be||this.removeTarget(n);break;case 3:this.je(n)&&(i.Be(),i.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),i.Ce(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((i,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,i=e.fe.count,s=this.Ye(n);if(s){const r=s.target;if(Ih(r))if(i===0){const o=new W(r.path);this.We(n,o,ft.newNoDocument(o,Y.min()))}else xe(i===1);else{const o=this.Ze(n);if(o!==i){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=n;let o,a;try{o=ts(i).toUint8Array()}catch(c){if(c instanceof IT)return Ws("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new yf(o,s,r)}catch(c){return Ws(c instanceof qr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,i){return n.fe.count===i-this.rt(e,n.targetId)?0:2}rt(e,n){const i=this.Le.getRemoteKeysForTarget(n);let s=0;return i.forEach(r=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.We(n,r,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((r,o)=>{const a=this.Ye(o);if(a){if(r.current&&Ih(a.target)){const c=new W(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,ft.newNoDocument(c,e))}r.De&&(n.set(o,r.ve()),r.Fe())}});let i=oe();this.Qe.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(r))}),this.qe.forEach((r,o)=>o.setReadTime(e));const s=new Cl(e,n,this.Ke,this.qe,i);return this.qe=Gn(),this.Qe=mg(),this.Ke=new qe(me),s}Ue(e,n){if(!this.je(e))return;const i=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,i),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,i){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),i&&(this.qe=this.qe.insert(n,i))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new pg,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new rt(me),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new pg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function mg(){return new qe(W.comparator)}function gg(){return new qe(W.comparator)}const Mx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qx=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Vx=(()=>({and:"AND",or:"OR"}))();class Fx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bh(t,e){return t.useProto3Json||El(e)?e:{value:e}}function Rc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function KT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ux(t,e){return Rc(t,e.toTimestamp())}function In(t){return xe(!!t),Y.fromTimestamp(function(n){const i=Ei(n);return new je(i.seconds,i.nanos)}(t))}function Ef(t,e){return function(i){return new Le(["projects",i.projectId,"databases",i.database])}(t).child("documents").child(e).canonicalString()}function GT(t){const e=Le.fromString(t);return xe(JT(e)),e}function Rh(t,e){return Ef(t.databaseId,e.path)}function uu(t,e){const n=GT(e);if(n.get(1)!==t.databaseId.projectId)throw new z(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(QT(n))}function Ah(t,e){return Ef(t.databaseId,e)}function zx(t){const e=GT(t);return e.length===4?Le.emptyPath():QT(e)}function Ch(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function QT(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _g(t,e,n){return{name:Rh(t,e),fields:n.value.mapValue.fields}}function jx(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,u){return l.useProto3Json?(xe(u===void 0||typeof u=="string"),yt.fromBase64String(u||"")):(xe(u===void 0||u instanceof Uint8Array),yt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?b.UNKNOWN:$T(l.code);return new z(u,l.message||"")}(o);n=new HT(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=uu(t,i.document.name),r=In(i.document.updateTime),o=i.document.createTime?In(i.document.createTime):Y.min(),a=new zt({mapValue:{fields:i.document.fields}}),c=ft.newFoundDocument(s,r,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new Fa(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=uu(t,i.document),r=i.readTime?In(i.readTime):Y.min(),o=ft.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Fa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=uu(t,i.document),r=i.removedTargetIds||[];n=new Fa([],r,s,null)}else{if(!("filter"in e))return G();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new Nx(s,r),a=i.targetId;n=new WT(a,o)}}return n}function Bx(t,e){let n;if(e instanceof ea)n={update:_g(t,e.key,e.value)};else if(e instanceof BT)n={delete:Rh(t,e.key)};else if(e instanceof as)n={update:_g(t,e.key,e.data),updateMask:Jx(e.fieldMask)};else{if(!(e instanceof Sx))return G();n={verify:Rh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,o){const a=o.transform;if(a instanceof wc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof So)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Po)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof bc)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw G()}(0,i))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Ux(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:G()}(t,e.precondition)),n}function $x(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(s,r){let o=s.updateTime?In(s.updateTime):In(r);return o.isEqual(Y.min())&&(o=In(r)),new Rx(o,s.transformResults||[])}(n,e))):[]}function Wx(t,e){return{documents:[Ah(t,e.path)]}}function Hx(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Ah(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ah(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(c){if(c.length!==0)return XT(Sn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:_s(h.field),direction:Qx(h.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=bh(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Kx(t){let e=zx(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){xe(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(h){const d=YT(h);return d instanceof Sn&&AT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new Ic(vs(g.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,El(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new Tc(f,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new Tc(f,d)}(n.endAt)),hx(e,s,o,r,a,"F",c,l)}function Gx(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function YT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=vs(n.unaryFilter.field);return $e.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=vs(n.unaryFilter.field);return $e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=vs(n.unaryFilter.field);return $e.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vs(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return $e.create(vs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Sn.create(n.compositeFilter.filters.map(i=>YT(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function Qx(t){return Mx[t]}function Yx(t){return qx[t]}function Xx(t){return Vx[t]}function _s(t){return{fieldPath:t.canonicalString()}}function vs(t){return it.fromServerFormat(t.fieldPath)}function XT(t){return t instanceof $e?function(n){if(n.op==="=="){if(ig(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NAN"}};if(ng(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ig(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NAN"}};if(ng(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_s(n.field),op:Yx(n.op),value:n.value}}}(t):t instanceof Sn?function(n){const i=n.getFilters().map(s=>XT(s));return i.length===1?i[0]:{compositeFilter:{op:Xx(n.op),filters:i}}}(t):G()}function Jx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function JT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,i,s,r=Y.min(),o=Y.min(),a=yt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new ci(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e){this.ut=e}}function eO(t){const e=Kx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wh(e,e.limit,"L"):e}/**
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
 */class tO{constructor(){this.on=new nO}addToCollectionParentIndex(e,n){return this.on.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(yi.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(yi.min())}updateCollectionGroup(e,n,i){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class nO{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new rt(Le.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new rt(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class iO{constructor(){this.changes=new gr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?C.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&Yr(i.mutation,s,Jt.empty(),je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,oe()).next(()=>i))}getLocalViewOfDocuments(e,n,i=oe()){const s=Vi();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=Mr();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=Vi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,oe()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=Gn();const o=Qr(),a=function(){return Qr()}();return n.forEach((c,l)=>{const u=i.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof as)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Yr(u.mutation,l,u.mutation.getFieldMask(),je.now())):o.set(l.key,Jt.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new sO(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Qr();let s=new qe((o,a)=>o-a),r=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=i.get(c)||Jt.empty();u=a.applyToLocalView(l,u),i.set(c,u);const h=(s.get(a.batchId)||oe()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=DT();u.forEach(d=>{if(!r.has(d)){const f=zT(n.get(d),i.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return C.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,s){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,s):this.getDocumentsMatchingCollectionQuery(e,n,i,s)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):C.resolve(Vi());let a=-1,c=r;return o.next(l=>C.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?C.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,oe())).next(u=>({batchId:a,changes:OT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(i=>{let s=Mr();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i,s){const r=n.collectionGroup;let o=Mr();return this.indexManager.getCollectionParents(e,r).next(a=>C.forEach(a,c=>{const l=function(h,d){return new Tl(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,i,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,r,s))).next(o=>{r.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,ft.newInvalidDocument(u)))});let a=Mr();return o.forEach((c,l)=>{const u=r.get(c);u!==void 0&&Yr(u.mutation,l,Jt.empty(),je.now()),bl(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return C.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:In(s.createTime)}}(n)),C.resolve()}getNamedQuery(e,n){return C.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:eO(s.bundledQuery),readTime:In(s.readTime)}}(n)),C.resolve()}}/**
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
 */class aO{constructor(){this.overlays=new qe(W.comparator),this.lr=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Vi();return C.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.lt(e,n,r)}),C.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.lr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.lr.delete(i)),C.resolve()}getOverlaysForCollection(e,n,i){const s=Vi(),r=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return C.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new qe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>i){let u=r.get(l.largestBatchId);u===null&&(u=Vi(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Vi(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return C.resolve(a)}lt(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(i.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new kx(n,i));let r=this.lr.get(n);r===void 0&&(r=oe(),this.lr.set(n,r)),this.lr.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(){this.hr=new rt(Ke.Pr),this.Ir=new rt(Ke.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const i=new Ke(e,n);this.hr=this.hr.add(i),this.Ir=this.Ir.add(i)}Er(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.dr(new Ke(e,n))}Ar(e,n){e.forEach(i=>this.removeReference(i,n))}Rr(e){const n=new W(new Le([])),i=new Ke(n,e),s=new Ke(n,e+1),r=[];return this.Ir.forEachInRange([i,s],o=>{this.dr(o),r.push(o.key)}),r}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new W(new Le([])),i=new Ke(n,e),s=new Ke(n,e+1);let r=oe();return this.Ir.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ke(e,0),i=this.hr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Ke{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return W.comparator(e.key,n.key)||me(e.gr,n.gr)}static Tr(e,n){return me(e.gr,n.gr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new rt(Ke.Pr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Px(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new Ke(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.Sr(i),r=s<0?0:s;return C.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Ke(n,0),s=new Ke(n,Number.POSITIVE_INFINITY),r=[];return this.yr.forEachInRange([i,s],o=>{const a=this.wr(o.gr);r.push(a)}),C.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new rt(me);return n.forEach(s=>{const r=new Ke(s,0),o=new Ke(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([r,o],a=>{i=i.add(a.gr)})}),C.resolve(this.br(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;W.isDocumentKey(r)||(r=r.child(""));const o=new Ke(new W(r),0);let a=new rt(me);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),C.resolve(this.br(a))}br(e){const n=[];return e.forEach(i=>{const s=this.wr(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){xe(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.yr;return C.forEach(n.mutations,s=>{const r=new Ke(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=i})}Fn(e){}containsKey(e,n){const i=new Ke(n,0),s=this.yr.firstAfterOrEqual(i);return C.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e){this.Cr=e,this.docs=function(){return new qe(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return C.resolve(i?i.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let i=Gn();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():ft.newInvalidDocument(s))}),C.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=Gn();const o=n.path,a=new W(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||GN(KN(u),i)<=0||(s.has(u.key)||bl(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return C.resolve(r)}getAllFromCollectionGroup(e,n,i,s){G()}vr(e,n){return C.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new uO(this)}getSize(e){return C.resolve(this.size)}}class uO extends iO{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(i)}),C.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e){this.persistence=e,this.Fr=new gr(n=>gf(n),_f),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Tf,this.targetCount=0,this.Nr=Qs.On()}forEachTarget(e,n){return this.Fr.forEach((i,s)=>n(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Mr&&(this.Mr=n),C.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Qs(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.kn(n),C.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Fr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),C.waitFor(r).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const i=this.Fr.get(n)||null;return C.resolve(i)}addMatchingKeys(e,n,i){return this.Or.Er(n,i),C.resolve()}removeMatchingKeys(e,n,i){this.Or.Ar(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),C.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),C.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Or.mr(n);return C.resolve(i)}containsKey(e,n){return C.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e,n){this.Br={},this.overlays={},this.Lr=new df(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new hO(this),this.indexManager=new tO,this.remoteDocumentCache=function(s){return new lO(s)}(i=>this.referenceDelegate.Qr(i)),this.serializer=new Zx(n),this.Kr=new oO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new aO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Br[e.toKey()];return i||(i=new cO(n,this.referenceDelegate),this.Br[e.toKey()]=i),i}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,i){V("MemoryPersistence","Starting transaction:",e);const s=new fO(this.Lr.next());return this.referenceDelegate.$r(),i(s).next(r=>this.referenceDelegate.Ur(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Wr(e,n){return C.or(Object.values(this.Br).map(i=>()=>i.containsKey(e,n)))}}class fO extends YN{constructor(e){super(),this.currentSequenceNumber=e}}class If{constructor(e){this.persistence=e,this.Gr=new Tf,this.zr=null}static jr(e){return new If(e)}get Hr(){if(this.zr)return this.zr;throw G()}addReference(e,n,i){return this.Gr.addReference(i,n),this.Hr.delete(i.toString()),C.resolve()}removeReference(e,n,i){return this.Gr.removeReference(i,n),this.Hr.add(i.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),C.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.Hr.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Hr,i=>{const s=W.fromPath(i);return this.Jr(e,s).next(r=>{r||n.removeEntry(s,Y.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(i=>{i?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return C.or([()=>C.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.ki=i,this.qi=s}static Qi(e,n){let i=oe(),s=oe();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new wf(e,n.fromCache,i,s)}}/**
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
 */class pO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class mO{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,i,s){const r={result:null};return this.zi(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.ji(e,n,s,i).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new pO;return this.Hi(e,n,o).next(a=>{if(r.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>r.result)}Ji(e,n,i,s){return i.documentReadCount<this.Ui?(Ar()<=re.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),C.resolve()):(Ar()<=re.DEBUG&&V("QueryEngine","Query:",gs(n),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Wi*s?(Ar()<=re.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tn(n))):C.resolve())}zi(e,n){if(ag(n))return C.resolve(null);let i=Tn(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=wh(n,null,"F"),i=Tn(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=oe(...r);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,wh(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,i,s){return ag(n)||s.isEqual(Y.min())?C.resolve(null):this.Gi.getDocuments(e,i).next(r=>{const o=this.Yi(n,r);return this.Zi(n,o,i,s)?C.resolve(null):(Ar()<=re.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),gs(n)),this.Xi(e,o,n,HN(s,-1)).next(a=>a))})}Yi(e,n){let i=new rt(NT(e));return n.forEach((s,r)=>{bl(e,r)&&(i=i.add(r))}),i}Zi(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Hi(e,n,i){return Ar()<=re.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",gs(n)),this.Gi.getDocumentsMatchingQuery(e,n,yi.min(),i)}Xi(e,n,i,s){return this.Gi.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e,n,i,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new qe(me),this.ns=new gr(r=>gf(r),_f),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(i)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rO(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function _O(t,e,n,i){return new gO(t,e,n,i)}async function ZT(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.os(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let c=oe();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(i,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function vO(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let f=C.resolve();return d.forEach(g=>{f=f.next(()=>u.getEntry(c,g)).next(v=>{const y=l.docVersions.get(g);xe(y!==null),v.version.compareTo(y)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let c=oe();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function eI(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function yO(t,e){const n=ee(t),i=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(yt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,i)),s=s.insert(h,f),function(v,y,I){return v.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,f,u)&&a.push(n.qr.updateTargetData(r,f))});let c=Gn(),l=oe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(EO(r,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!i.isEqual(Y.min())){const u=n.qr.getLastRemoteSnapshotVersion(r).next(h=>n.qr.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return C.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.ts=s,r))}function EO(t,e,n){let i=oe(),s=oe();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=Gn();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function TO(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function IO(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.qr.getTargetData(i,e).next(r=>r?(s=r,C.resolve(s)):n.qr.allocateTargetId(i).next(o=>(s=new ci(e,o,"TargetPurposeListen",i.currentSequenceNumber),n.qr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.ts.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(i.targetId,i),n.ns.set(e,i.targetId)),i})}async function Sh(t,e,n){const i=ee(t),s=i.ts.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Zo(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.ts=i.ts.remove(e),i.ns.delete(s.target)}function vg(t,e,n){const i=ee(t);let s=Y.min(),r=oe();return i.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=ee(c),d=h.ns.get(u);return d!==void 0?C.resolve(h.ts.get(d)):h.qr.getTargetData(l,u)}(i,o,Tn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>i.es.getDocumentsMatchingQuery(o,e,n?s:Y.min(),n?r:oe())).next(a=>(wO(i,px(e),a),{documents:a,ls:r})))}function wO(t,e,n){let i=t.rs.get(e)||Y.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.rs.set(e,i)}class yg{constructor(){this.activeTargetIds=Ex()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bO{constructor(){this.eo=new yg,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,i){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new yg,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class RO{ro(e){}shutdown(){}}/**
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
 */class Eg{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ba=null;function hu(){return ba===null?ba=function(){return 268435456+Math.round(2147483648*Math.random())}():ba++,"0x"+ba.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="WebChannelConnection";class SO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=i+"://"+n.host,this.fo=`projects/${s}/databases/${r}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}get yo(){return!1}wo(n,i,s,r,o){const a=hu(),c=this.So(n,i);V("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,r,o),this.Do(n,c,l,s).then(u=>(V("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Ws("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Co(n,i,s,r,o,a){return this.wo(n,i,s,r,o)}bo(n,i,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,o)=>n[o]=r),s&&s.headers.forEach((r,o)=>n[o]=r)}So(n,i){const s=AO[n];return`${this.mo}/v1/${i}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,i,s){const r=hu();return new Promise((o,a)=>{const c=new LN;c.setWithCredentials(!0),c.listenOnce(xN.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case lu.NO_ERROR:const u=c.getResponseJson();V(lt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case lu.TIMEOUT:V(lt,`RPC '${e}' ${r} timed out`),a(new z(b.DEADLINE_EXCEEDED,"Request time out"));break;case lu.HTTP_ERROR:const h=c.getStatus();if(V(lt,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(y){const I=y.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(I)>=0?I:b.UNKNOWN}(f.status);a(new z(g,f.message))}else a(new z(b.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new z(b.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{V(lt,`RPC '${e}' ${r} completed.`)}});const l=JSON.stringify(s);V(lt,`RPC '${e}' ${r} sending request:`,s),c.send(n,"POST",l,i,15)})}vo(e,n,i){const s=hu(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=kN(),a=NN(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new DN({})),this.bo(c.initMessageHeaders,n,i),c.encodeInitMessageHeaders=!0;const u=r.join("");V(lt,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const g=new CO({co:y=>{f?V(lt,`Not sending because RPC '${e}' stream ${s} is closed:`,y):(d||(V(lt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),V(lt,`RPC '${e}' stream ${s} sending:`,y),h.send(y))},lo:()=>h.close()}),v=(y,I,P)=>{y.listen(I,k=>{try{P(k)}catch(R){setTimeout(()=>{throw R},0)}})};return v(h,Ta.EventType.OPEN,()=>{f||V(lt,`RPC '${e}' stream ${s} transport opened.`)}),v(h,Ta.EventType.CLOSE,()=>{f||(f=!0,V(lt,`RPC '${e}' stream ${s} transport closed`),g.Ro())}),v(h,Ta.EventType.ERROR,y=>{f||(f=!0,Ws(lt,`RPC '${e}' stream ${s} transport errored:`,y),g.Ro(new z(b.UNAVAILABLE,"The operation could not be completed")))}),v(h,Ta.EventType.MESSAGE,y=>{var I;if(!f){const P=y.data[0];xe(!!P);const k=P,R=k.error||((I=k[0])===null||I===void 0?void 0:I.error);if(R){V(lt,`RPC '${e}' stream ${s} received error:`,R);const H=R.status;let ne=function(te){const Ie=Ue[te];if(Ie!==void 0)return $T(Ie)}(H),he=R.message;ne===void 0&&(ne=b.INTERNAL,he="Unknown error status: "+H+" with message "+R.message),f=!0,g.Ro(new z(ne,he)),h.close()}else V(lt,`RPC '${e}' stream ${s} received:`,P),g.Vo(P)}}),v(a,ON.STAT_EVENT,y=>{y.stat===Xm.PROXY?V(lt,`RPC '${e}' stream ${s} detected buffering proxy`):y.stat===Xm.NOPROXY&&V(lt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.Ao()},0),g}}function du(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t){return new Fx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,n,i=1e3,s=1.5,r=6e4){this.si=e,this.timerId=n,this.Fo=i,this.Mo=s,this.xo=r,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),i=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-i);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n,i,s,r,o,a,c){this.si=e,this.Ko=i,this.$o=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new tI(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Kn(n.toString()),Kn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Uo===n&&this.s_(i,s)},i=>{e(()=>{const s=new z(b.UNKNOWN,"Fetching auth token failed: "+i.message);return this.o_(s)})})}s_(e,n){const i=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{i(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{i(()=>this.o_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PO extends nI{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=jx(this.serializer,e),i=function(r){if(!("targetChange"in r))return Y.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?In(o.readTime):Y.min()}(e);return this.listener.a_(n,i)}u_(e){const n={};n.database=Ch(this.serializer),n.addTarget=function(r,o){let a;const c=o.target;if(a=Ih(c)?{documents:Wx(r,c)}:{query:Hx(r,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=KT(r,o.resumeToken);const l=bh(r,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=Rc(r,o.snapshotVersion.toTimestamp());const l=bh(r,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const i=Gx(this.serializer,e);i&&(n.labels=i),this.e_(n)}c_(e){const n={};n.database=Ch(this.serializer),n.removeTarget=e,this.e_(n)}}class kO extends nI{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=$x(e.writeResults,e.commitTime),i=In(e.commitTime);return this.listener.I_(i,n)}return xe(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Ch(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>Bx(this.serializer,i))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new z(b.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.wo(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(b.UNKNOWN,s.toString())})}Co(e,n,i,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Co(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new z(b.UNKNOWN,r.toString())})}terminate(){this.d_=!0}}class xO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Kn(n),this.f_=!1):V("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=r,this.F_.ro(o=>{i.enqueueAndForget(async()=>{cs(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ee(c);l.C_.add(4),await na(l),l.M_.set("Unknown"),l.C_.delete(4),await Pl(l)}(this))})}),this.M_=new xO(i,s)}}async function Pl(t){if(cs(t))for(const e of t.v_)await e(!0)}async function na(t){for(const e of t.v_)await e(!1)}function iI(t,e){const n=ee(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Af(n)?Rf(n):_r(n).Ho()&&bf(n,e))}function sI(t,e){const n=ee(t),i=_r(n);n.D_.delete(e),i.Ho()&&rI(n,e),n.D_.size===0&&(i.Ho()?i.Zo():cs(n)&&n.M_.set("Unknown"))}function bf(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}_r(t).u_(e)}function rI(t,e){t.x_.Oe(e),_r(t).c_(e)}function Rf(t){t.x_=new Lx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),_r(t).start(),t.M_.g_()}function Af(t){return cs(t)&&!_r(t).jo()&&t.D_.size>0}function cs(t){return ee(t).C_.size===0}function oI(t){t.x_=void 0}async function DO(t){t.D_.forEach((e,n)=>{bf(t,e)})}async function LO(t,e){oI(t),Af(t)?(t.M_.w_(e),Rf(t)):t.M_.set("Unknown")}async function MO(t,e,n){if(t.M_.set("Online"),e instanceof HT&&e.state===2&&e.cause)try{await async function(s,r){const o=r.cause;for(const a of r.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(i){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ac(t,i)}else if(e instanceof Fa?t.x_.$e(e):e instanceof WT?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(Y.min()))try{const i=await eI(t.localStore);n.compareTo(i)>=0&&await function(r,o){const a=r.x_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=r.D_.get(l);u&&r.D_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=r.D_.get(c);if(!u)return;r.D_.set(c,u.withResumeToken(yt.EMPTY_BYTE_STRING,u.snapshotVersion)),rI(r,c);const h=new ci(u.target,c,l,u.sequenceNumber);bf(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(i){V("RemoteStore","Failed to raise snapshot:",i),await Ac(t,i)}}async function Ac(t,e,n){if(!Zo(e))throw e;t.C_.add(1),await na(t),t.M_.set("Offline"),n||(n=()=>eI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Pl(t)})}function aI(t,e){return e().catch(n=>Ac(t,n,e))}async function kl(t){const e=ee(t),n=Ti(e);let i=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;qO(e);)try{const s=await TO(e.localStore,i);if(s===null){e.b_.length===0&&n.Zo();break}i=s.batchId,VO(e,s)}catch(s){await Ac(e,s)}cI(e)&&lI(e)}function qO(t){return cs(t)&&t.b_.length<10}function VO(t,e){t.b_.push(e);const n=Ti(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function cI(t){return cs(t)&&!Ti(t).jo()&&t.b_.length>0}function lI(t){Ti(t).start()}async function FO(t){Ti(t).E_()}async function UO(t){const e=Ti(t);for(const n of t.b_)e.P_(n.mutations)}async function zO(t,e,n){const i=t.b_.shift(),s=vf.from(i,e,n);await aI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await kl(t)}async function jO(t,e){e&&Ti(t).h_&&await async function(i,s){if(function(o){return xx(o)&&o!==b.ABORTED}(s.code)){const r=i.b_.shift();Ti(i).Yo(),await aI(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await kl(i)}}(t,e),cI(t)&&lI(t)}async function Tg(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const i=cs(n);n.C_.add(3),await na(n),i&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Pl(n)}async function BO(t,e){const n=ee(t);e?(n.C_.delete(2),await Pl(n)):e||(n.C_.add(2),await na(n),n.M_.set("Unknown"))}function _r(t){return t.O_||(t.O_=function(n,i,s){const r=ee(n);return r.A_(),new PO(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{ho:DO.bind(null,t),Io:LO.bind(null,t),a_:MO.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Af(t)?Rf(t):t.M_.set("Unknown")):(await t.O_.stop(),oI(t))})),t.O_}function Ti(t){return t.N_||(t.N_=function(n,i,s){const r=ee(n);return r.A_(),new kO(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{ho:FO.bind(null,t),Io:jO.bind(null,t),T_:UO.bind(null,t),I_:zO.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await kl(t)):(await t.N_.stop(),t.b_.length>0&&(V("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new Cf(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sf(t,e){if(Kn("AsyncQueue",`${e}: ${t}`),Zo(t))return new z(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.comparator=e?(n,i)=>e(n,i)||W.comparator(n.key,i.key):(n,i)=>W.comparator(n.key,i.key),this.keyedMap=Mr(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new Ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Ig{constructor(){this.B_=new qe(W.comparator)}track(e){const n=e.doc.key,i=this.B_.get(n);i?e.type!==0&&i.type===3?this.B_=this.B_.insert(n,e):e.type===3&&i.type!==1?this.B_=this.B_.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.B_=this.B_.remove(n):e.type===1&&i.type===2?this.B_=this.B_.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):G():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,i)=>{e.push(i)}),e}}class Ys{constructor(e,n,i,s,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ys(e,n,Ds.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(){this.k_=void 0,this.listeners=[]}}class WO{constructor(){this.queries=new gr(e=>kT(e),wl),this.onlineState="Unknown",this.q_=new Set}}async function Pf(t,e){const n=ee(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new $O),s)try{r.k_=await n.onListen(i)}catch(o){const a=Sf(o,`Initialization of query '${gs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.Q_(n.onlineState),r.k_&&e.K_(r.k_)&&Nf(n)}async function kf(t,e){const n=ee(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function HO(t,e){const n=ee(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.K_(s)&&(i=!0);o.k_=s}}i&&Nf(n)}function KO(t,e,n){const i=ee(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function Nf(t){t.q_.forEach(e=>{e.next()})}class xf{constructor(e,n,i){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=i||{}}K_(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Ys(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.J_||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e){this.key=e}}class hI{constructor(e){this.key=e}}class GO{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=oe(),this.mutatedKeys=oe(),this._a=NT(e),this.aa=new Ds(this._a)}get ua(){return this.ia}ca(e,n){const i=n?n.la:new Ig,s=n?n.aa:this.aa;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=bl(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?g!==v&&(i.track({type:3,doc:f}),y=!0):this.ha(d,f)||(i.track({type:2,doc:f}),y=!0,(c&&this._a(f,c)>0||l&&this._a(f,l)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),y=!0):d&&!f&&(i.track({type:1,doc:d}),y=!0,(c||l)&&(a=!0)),y&&(f?(o=o.add(f),r=v?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{aa:o,la:i,Zi:a,mutatedKeys:r}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const r=e.la.L_();r.sort((l,u)=>function(d,f){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return g(d)-g(f)}(l.type,u.type)||this._a(l.doc,u.doc)),this.Pa(i);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,c=a!==this.sa;return this.sa=a,r.length!==0||c?{snapshot:new Ys(this.query,e.aa,s,r,e.mutatedKeys,a===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Ig,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=oe(),this.aa.forEach(i=>{this.Ea(i.key)&&(this.oa=this.oa.add(i.key))});const n=[];return e.forEach(i=>{this.oa.has(i)||n.push(new hI(i))}),this.oa.forEach(i=>{e.has(i)||n.push(new uI(i))}),n}da(e){this.ia=e.ls,this.oa=oe();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Ys.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class QO{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class YO{constructor(e){this.key=e,this.Ra=!1}}class XO{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new gr(a=>kT(a),wl),this.fa=new Map,this.ga=new Set,this.pa=new qe(W.comparator),this.ya=new Map,this.wa=new Tf,this.Sa={},this.ba=new Map,this.Da=Qs.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function JO(t,e){const n=cD(t);let i,s;const r=n.ma.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.Aa();else{const o=await IO(n.localStore,Tn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await ZO(n,e,i,a==="current",o.resumeToken),n.isPrimaryClient&&iI(n.remoteStore,o)}return s}async function ZO(t,e,n,i,s){t.va=(h,d,f)=>async function(v,y,I,P){let k=y.view.ca(I);k.Zi&&(k=await vg(v.localStore,y.query,!1).then(({documents:ne})=>y.view.ca(ne,k)));const R=P&&P.targetChanges.get(y.targetId),H=y.view.applyChanges(k,v.isPrimaryClient,R);return bg(v,y.targetId,H.Ta),H.snapshot}(t,h,d,f);const r=await vg(t.localStore,e,!0),o=new GO(e,r.ls),a=o.ca(r.documents),c=ta.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);bg(t,n,l.Ta);const u=new QO(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),l.snapshot}async function eD(t,e){const n=ee(t),i=n.ma.get(e),s=n.fa.get(i.targetId);if(s.length>1)return n.fa.set(i.targetId,s.filter(r=>!wl(r,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Sh(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),sI(n.remoteStore,i.targetId),Ph(n,i.targetId)}).catch(Jo)):(Ph(n,i.targetId),await Sh(n.localStore,i.targetId,!0))}async function tD(t,e,n){const i=lD(t);try{const s=await function(o,a){const c=ee(o),l=je.now(),u=a.reduce((f,g)=>f.add(g.key),oe());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=Gn(),v=oe();return c.ss.getEntries(f,u).next(y=>{g=y,g.forEach((I,P)=>{P.isValidDocument()||(v=v.add(I))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,g)).next(y=>{h=y;const I=[];for(const P of a){const k=Cx(P,h.get(P.key).overlayedDocument);k!=null&&I.push(new as(P.key,k,wT(k.value.mapValue),$n.exists(!0)))}return c.mutationQueue.addMutationBatch(f,l,I,a)}).next(y=>{d=y;const I=y.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(f,y.batchId,I)})}).then(()=>({batchId:d.batchId,changes:OT(h)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Sa[o.currentUser.toKey()];l||(l=new qe(me)),l=l.insert(a,c),o.Sa[o.currentUser.toKey()]=l}(i,s.batchId,n),await ia(i,s.changes),await kl(i.remoteStore)}catch(s){const r=Sf(s,"Failed to persist write");n.reject(r)}}async function dI(t,e){const n=ee(t);try{const i=await yO(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.ya.get(r);o&&(xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?xe(o.Ra):s.removedDocuments.size>0&&(xe(o.Ra),o.Ra=!1))}),await ia(n,i,e)}catch(i){await Jo(i)}}function wg(t,e,n){const i=ee(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.ma.forEach((r,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ee(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(l=!0)}),l&&Nf(c)}(i.eventManager,e),s.length&&i.Va.a_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function nD(t,e,n){const i=ee(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.ya.get(e),r=s&&s.key;if(r){let o=new qe(W.comparator);o=o.insert(r,ft.newNoDocument(r,Y.min()));const a=oe().add(r),c=new Cl(Y.min(),new Map,new qe(me),o,a);await dI(i,c),i.pa=i.pa.remove(r),i.ya.delete(e),Of(i)}else await Sh(i.localStore,e,!1).then(()=>Ph(i,e,n)).catch(Jo)}async function iD(t,e){const n=ee(t),i=e.batch.batchId;try{const s=await vO(n.localStore,e);pI(n,i,null),fI(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ia(n,s)}catch(s){await Jo(s)}}async function sD(t,e,n){const i=ee(t);try{const s=await function(o,a){const c=ee(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(xe(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(i.localStore,e);pI(i,e,n),fI(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await ia(i,s)}catch(s){await Jo(s)}}function fI(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function pI(t,e,n){const i=ee(t);let s=i.Sa[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.Sa[i.currentUser.toKey()]=s}}function Ph(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.fa.get(e))t.ma.delete(i),n&&t.Va.Fa(i,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(i=>{t.wa.containsKey(i)||mI(t,i)})}function mI(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(sI(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Of(t))}function bg(t,e,n){for(const i of n)i instanceof uI?(t.wa.addReference(i.key,e),rD(t,i)):i instanceof hI?(V("SyncEngine","Document no longer in limbo: "+i.key),t.wa.removeReference(i.key,e),t.wa.containsKey(i.key)||mI(t,i.key)):G()}function rD(t,e){const n=e.key,i=n.path.canonicalString();t.pa.get(n)||t.ga.has(i)||(V("SyncEngine","New document in limbo: "+n),t.ga.add(i),Of(t))}function Of(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new W(Le.fromString(e)),i=t.Da.next();t.ya.set(i,new YO(n)),t.pa=t.pa.insert(n,i),iI(t.remoteStore,new ci(Tn(Il(n.path)),i,"TargetPurposeLimboResolution",df._e))}}async function ia(t,e,n){const i=ee(t),s=[],r=[],o=[];i.ma.isEmpty()||(i.ma.forEach((a,c)=>{o.push(i.va(c,e,n).then(l=>{if((l||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=wf.Qi(c.targetId,l);r.push(u)}}))}),await Promise.all(o),i.Va.a_(s),await async function(c,l){const u=ee(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>C.forEach(l,d=>C.forEach(d.ki,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>C.forEach(d.qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Zo(h))throw h;V("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.ts.get(d),g=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(g);u.ts=u.ts.insert(d,v)}}}(i.localStore,r))}async function oD(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const i=await ZT(n.localStore,e);n.currentUser=e,function(r,o){r.ba.forEach(a=>{a.forEach(c=>{c.reject(new z(b.CANCELLED,o))})}),r.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ia(n,i._s)}}function aD(t,e){const n=ee(t),i=n.ya.get(e);if(i&&i.Ra)return oe().add(i.key);{let s=oe();const r=n.fa.get(e);if(!r)return s;for(const o of r){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function cD(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=dI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nD.bind(null,e),e.Va.a_=HO.bind(null,e.eventManager),e.Va.Fa=KO.bind(null,e.eventManager),e}function lD(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sD.bind(null,e),e}class Rg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Sl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return _O(this.persistence,new mO,e.initialUser,this.serializer)}createPersistence(e){return new dO(If.jr,this.serializer)}createSharedClientState(e){return new bO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>wg(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=oD.bind(null,this.syncEngine),await BO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new WO}()}createDatastore(e){const n=Sl(e.databaseInfo.databaseId),i=function(r){return new SO(r)}(e.databaseInfo);return function(r,o,a,c){return new NO(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,s,r,o,a){return new OO(i,s,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>wg(this.syncEngine,n,0),function(){return Eg.D()?new Eg:new RO}())}createSyncEngine(e,n){return function(s,r,o,a,c,l,u){const h=new XO(s,r,o,a,c,l);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const i=ee(n);V("RemoteStore","RemoteStore shutting down."),i.C_.add(5),await na(i),i.F_.shutdown(),i.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Df{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Kn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=ut.UNAUTHENTICATED,this.clientId=ET.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{V("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(V("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Sf(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function fu(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await ZT(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ag(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fD(t);V("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>Tg(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Tg(e.remoteStore,r)),t._onlineComponents=e}function dD(t){return t.name==="FirebaseError"?t.code===b.FAILED_PRECONDITION||t.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function fD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await fu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!dD(n))throw n;Ws("Error using user provided cache. Falling back to memory cache: "+n),await fu(t,new Rg)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await fu(t,new Rg);return t._offlineComponents}async function gI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await Ag(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await Ag(t,new uD))),t._onlineComponents}function pD(t){return gI(t).then(e=>e.syncEngine)}async function Cc(t){const e=await gI(t),n=e.eventManager;return n.onListen=JO.bind(null,e.syncEngine),n.onUnlisten=eD.bind(null,e.syncEngine),n}function mD(t,e,n={}){const i=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,l){const u=new Df({next:d=>{o.enqueueAndForget(()=>kf(r,h));const f=d.docs.has(a);!f&&d.fromCache?l.reject(new z(b.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?l.reject(new z(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new xf(Il(a.path),u,{includeMetadataChanges:!0,J_:!0});return Pf(r,h)}(await Cc(t),t.asyncQueue,e,n,i)),i.promise}function gD(t,e,n={}){const i=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,l){const u=new Df({next:d=>{o.enqueueAndForget(()=>kf(r,h)),d.fromCache&&c.source==="server"?l.reject(new z(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new xf(a,u,{includeMetadataChanges:!0,J_:!0});return Pf(r,h)}(await Cc(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function _I(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(t,e,n){if(!n)throw new z(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _D(t,e,n,i){if(e===!0&&i===!0)throw new z(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sg(t){if(!W.isDocumentKey(t))throw new z(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Pg(t){if(W.isDocumentKey(t))throw new z(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Lf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function wn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lf(t);throw new z(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new z(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_D("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_I((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nl{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kg(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new qN;switch(i.type){case"firstParty":return new zN(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new z(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Cg.get(n);i&&(V("ComponentProvider","Removing Datastore"),Cg.delete(n),i.terminate())}(this),Promise.resolve()}}function vD(t,e,n,i={}){var s;const r=(t=wn(t,Nl))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,c;if(typeof i.mockUserToken=="string")a=i.mockUserToken,c=ut.MOCK_USER;else{a=jb(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new z(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ut(l)}t._authCredentials=new VN(new yT(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new sa(this.firestore,e,this._query)}}class At{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class gi extends sa{constructor(e,n,i){super(e,n,Il(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new W(e))}withConverter(e){return new gi(this.firestore,e,this._path)}}function yD(t,e,...n){if(t=Dt(t),vI("collection","path",e),t instanceof Nl){const i=Le.fromString(e,...n);return Pg(i),new gi(t,null,i)}{if(!(t instanceof At||t instanceof gi))throw new z(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Le.fromString(e,...n));return Pg(i),new gi(t.firestore,null,i)}}function Ng(t,e,...n){if(t=Dt(t),arguments.length===1&&(e=ET.newId()),vI("doc","path",e),t instanceof Nl){const i=Le.fromString(e,...n);return Sg(i),new At(t,null,new W(i))}{if(!(t instanceof At||t instanceof gi))throw new z(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Le.fromString(e,...n));return Sg(i),new At(t.firestore,t instanceof gi?t.converter:null,new W(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new tI(this,"async_queue_retry"),this.iu=()=>{const n=du();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=du();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=du();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Bn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Zo(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(i=>{this.eu=i,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw Kn("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.tu=!1,i))));return this.Ja=n,n}enqueueAfterDelay(e,n,i){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=Cf.createAndSchedule(this,e,n,i,r=>this.au(r));return this.Xa.push(s),s}su(){this.eu&&G()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function xg(t){return function(n,i){if(typeof n!="object"||n===null)return!1;const s=n;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Xs extends Nl{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=function(){return new ED}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||EI(this),this._firestoreClient.terminate()}}function yI(t,e){const n=typeof t=="object"?t:cd(),i=typeof t=="string"?t:e||"(default)",s=ad(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=zb("firestore");r&&vD(s,...r)}return s}function xl(t){return t._firestoreClient||EI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function EI(t){var e,n,i;const s=t._freezeSettings(),r=function(a,c,l,u){return new ZN(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,_I(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new hD(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Js(yt.fromBase64String(e))}catch(n){throw new z(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Js(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD=/^__.*__$/;class ID{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new as(e,this.data,this.fieldMask,n,this.fieldTransforms):new ea(e,this.data,n,this.fieldTransforms)}}function II(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class qf{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Pu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new qf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:i,du:!1});return s.Au(e),s}Ru(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:i,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Sc(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(II(this.Iu)&&TD.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class wD{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Sl(e)}pu(e,n,i,s=!1){return new qf({Iu:e,methodName:n,gu:i,path:it.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bD(t){const e=t._freezeSettings(),n=Sl(t._databaseId);return new wD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function RD(t,e,n,i,s,r={}){const o=t.pu(r.merge||r.mergeFields?2:0,e,n,s);AI("Data must be an object, but it was:",o,i);const a=bI(i,o);let c,l;if(r.merge)c=new Jt(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=AD(e,h,n);if(!o.contains(d))throw new z(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);SD(u,d)||u.push(d)}c=new Jt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new ID(new zt(a),c,l)}function wI(t,e){if(RI(t=Dt(t)))return AI("Unsupported field value:",e,t),bI(t,e);if(t instanceof TI)return function(i,s){if(!II(s.Iu))throw s.mu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(i,s){const r=[];let o=0;for(const a of i){let c=wI(a,s.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(t,e)}return function(i,s){if((i=Dt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Tx(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=je.fromDate(i);return{timestampValue:Rc(s.serializer,r)}}if(i instanceof je){const r=new je(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Rc(s.serializer,r)}}if(i instanceof Ol)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Js)return{bytesValue:KT(s.serializer,i._byteString)};if(i instanceof At){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ef(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.mu(`Unsupported field value: ${Lf(i)}`)}(t,e)}function bI(t,e){const n={};return TT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mr(t,(i,s)=>{const r=wI(s,e.Eu(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function RI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof Ol||t instanceof Js||t instanceof At||t instanceof TI)}function AI(t,e,n){if(!RI(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const i=Lf(n);throw i==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+i)}}function AD(t,e,n){if((e=Dt(e))instanceof Mf)return e._internalPath;if(typeof e=="string")return CI(t,e);throw Sc("Field path arguments must be of type string or ",t,!1,void 0,n)}const CD=new RegExp("[~\\*/\\[\\]]");function CI(t,e,n){if(e.search(CD)>=0)throw Sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Mf(...e.split("."))._internalPath}catch{throw Sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sc(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new z(b.INVALID_ARGUMENT,a+t+c)}function SD(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(PI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class PD extends SI{data(){return super.data()}}function PI(t,e){return typeof e=="string"?CI(t,e):e instanceof Mf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kD{convertValue(e,n="none"){switch(ns(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return mr(e,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new Ol(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=pf(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Ro(e));default:return null}}convertTimestamp(e){const n=Ei(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Le.fromString(e);xe(JT(i));const s=new Ao(i.get(1),i.get(3)),r=new W(i.popFirst(5));return s.isEqual(n)||Kn(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class NI extends SI{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ua(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(PI("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Ua extends NI{data(e={}){return super.data(e)}}class xI{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Vr(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Ua(this._firestore,this._userDataWriter,i.key,i,new Vr(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Ua(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Vr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const c=new Ua(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Vr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:xD(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(t){t=wn(t,At);const e=wn(t.firestore,Xs);return mD(xl(e),t._key).then(n=>LI(e,t,n))}class Vf extends kD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Js(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,n)}}function DI(t){t=wn(t,sa);const e=wn(t.firestore,Xs),n=xl(e),i=new Vf(e);return kI(t._query),gD(n,t._query).then(s=>new xI(e,i,t,s))}function Og(t,e,n){t=wn(t,At);const i=wn(t.firestore,Xs),s=ND(t.converter,e,n);return OD(i,[RD(bD(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,$n.none())])}function Ff(t,...e){var n,i,s;t=Dt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||xg(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(xg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof At)l=wn(t.firestore,Xs),u=Il(t._key.path),c={next:h=>{e[o]&&e[o](LI(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=wn(t,sa);l=wn(h.firestore,Xs),u=h._query;const d=new Vf(l);c={next:f=>{e[o]&&e[o](new xI(l,d,h,f))},error:e[o+1],complete:e[o+2]},kI(t._query)}return function(d,f,g,v){const y=new Df(v),I=new xf(f,y,g);return d.asyncQueue.enqueueAndForget(async()=>Pf(await Cc(d),I)),()=>{y.Na(),d.asyncQueue.enqueueAndForget(async()=>kf(await Cc(d),I))}}(xl(l),u,a,c)}function OD(t,e){return function(i,s){const r=new Bn;return i.asyncQueue.enqueueAndForget(async()=>tD(await pD(i),s,r)),r.promise}(xl(t),e)}function LI(t,e,n){const i=n.docs.get(e._key),s=new Vf(t);return new NI(t,s,e._key,i,new Vr(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){pr=s})(Ii),Rn(new sn("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new Xs(new FN(i.getProvider("auth-internal")),new BN(i.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new z(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ao(l.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),xt(Jm,"4.3.2",e),xt(Jm,"4.3.2","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI="firebasestorage.googleapis.com",DD="storageBucket",LD=2*60*1e3,MD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends kn{constructor(e,n,i=0){super(pu(e),`Firebase Storage: ${n} (${pu(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Nn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return pu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pn||(Pn={}));function pu(t){return"storage/"+t}function qD(){const t="An unknown error occurred, please check the error payload for server response.";return new Nn(Pn.UNKNOWN,t)}function VD(){return new Nn(Pn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function FD(){return new Nn(Pn.CANCELED,"User canceled the upload/download.")}function UD(t){return new Nn(Pn.INVALID_URL,"Invalid URL '"+t+"'.")}function zD(t){return new Nn(Pn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Dg(t){return new Nn(Pn.INVALID_ARGUMENT,t)}function qI(){return new Nn(Pn.APP_DELETED,"The Firebase app was deleted.")}function jD(t){return new Nn(Pn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Zt.makeFromUrl(e,n)}catch{return new Zt(e,"")}if(i.path==="")return i;throw zD(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(R){R.path_=decodeURIComponent(R.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),g={bucket:1,path:3},v=n===MI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",I=new RegExp(`^https?://${v}/${s}/${y}`,"i"),k=[{regex:a,indices:c,postModify:r},{regex:f,indices:g,postModify:l},{regex:I,indices:{bucket:1,path:2},postModify:l}];for(let R=0;R<k.length;R++){const H=k[R],ne=H.regex.exec(e);if(ne){const he=ne[H.indices.bucket];let K=ne[H.indices.path];K||(K=""),i=new Zt(he,K),H.postModify(i);break}}if(i==null)throw UD(e);return i}}class BD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $D(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...y){l||(l=!0,e.apply(null,y))}function h(y){s=setTimeout(()=>{s=null,t(f,c())},y)}function d(){r&&clearTimeout(r)}function f(y,...I){if(l){d();return}if(y){d(),u.call(null,y,...I);return}if(c()||o){d(),u.call(null,y,...I);return}i<64&&(i*=2);let k;a===1?(a=2,k=0):k=(i+Math.random())*1e3,h(k)}let g=!1;function v(y){g||(g=!0,d(),!l&&(s!==null?(y||(a=2),clearTimeout(s),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,v(!0)},n),v}function WD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HD(t){return t!==void 0}function Lg(t,e,n,i){if(i<e)throw Dg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Dg(`Invalid value for '${t}'. Expected ${n} or less.`)}function KD(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Pc||(Pc={}));/**
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
 */function GD(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e,n,i,s,r,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Ra(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Pc.NO_ERROR,c=r.getStatus();if(!a||GD(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Pc.ABORT;i(!1,new Ra(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;i(!0,new Ra(l,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());HD(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=qD();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?qI():FD();o(c)}else{const c=VD();o(c)}};this.canceled_?n(!1,new Ra(!1,null,!0)):this.backoffId_=$D(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&WD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ra{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function YD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function XD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function JD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ZD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function eL(t,e,n,i,s,r,o=!0){const a=KD(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return JD(l,e),YD(l,n),XD(l,r),ZD(l,i),new QD(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function nL(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class kc{constructor(e,n){this._service=e,n instanceof Zt?this._location=n:this._location=Zt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new kc(e,n)}get root(){const e=new Zt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return nL(this._location.path)}get storage(){return this._service}get parent(){const e=tL(this._location.path);if(e===null)return null;const n=new Zt(this._location.bucket,e);return new kc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw jD(e)}}function Mg(t,e){const n=e==null?void 0:e[DD];return n==null?null:Zt.makeFromBucketSpec(n,t)}class iL{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=MI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LD,this._maxUploadRetryTime=MD,this._requests=new Set,s!=null?this._bucket=Zt.makeFromBucketSpec(s,this._host):this._bucket=Mg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Zt.makeFromBucketSpec(this._url,e):this._bucket=Mg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Lg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Lg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new kc(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new BD(qI());{const o=eL(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const qg="@firebase/storage",Vg="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL="storage";function rL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new iL(n,i,s,e,Ii)}function oL(){Rn(new sn(sL,rL,"PUBLIC").setMultipleInstances(!0)),xt(qg,Vg,""),xt(qg,Vg,"esm2017")}oL();const mu=new WeakMap;function VI(t,e){return mu.has(e)||mu.set(e,t||{f:{},r:{},s:{},u:{}}),mu.get(e)}function aL(t,e,n,i){if(!t)return n;const[s,r]=FI(t);if(!s)return n;const o=VI(void 0,i)[s]||{},a=e||r;return a&&a in o?o[a]:n}function cL(t,e,n,i){if(!t)return;const[s,r]=FI(t);if(!s)return;const o=VI(void 0,i)[s],a=e||r;if(a)return n.then(c=>{o[a]=c}).catch(pn),a}function FI(t){return VS(t)||FS(t)?["f",t.path]:US(t)?["r",t.toString()]:zS(t)?["s",t.toString()]:[]}const gu=new WeakMap;function lL(t,e,n){const i=vd();gu.has(i)||gu.set(i,new Map);const s=gu.get(i),r=cL(e,n,t,i);return r&&s.set(r,t),r?()=>s.delete(r):pn}const uL={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function kh(t,e,n,i){if(!MS(t))return[t,{}];const s=[{},{}],r=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const g=Object.getOwnPropertyDescriptor(a,f);g&&!g.enumerable&&Object.defineProperty(h,f,g)});for(const f in a){const g=a[f];if(g==null||g instanceof Date||g instanceof je||g instanceof Ol)h[f]=g;else if(Ed(g)){const v=l+f;h[f]=v in n?c[f]:g.path,d[v]=g.converter?g:g.withConverter(i.converter)}else if(Array.isArray(g)){h[f]=Array(g.length);for(let v=0;v<g.length;v++){const y=g[v];y&&y.path in r&&(h[f][v]=r[y.path])}o(g,c[f]||h[f],l+f+".",[h[f],d])}else is(g)?(h[f]={},o(g,c[f],l+f+".",[h[f],d])):h[f]=g}}return o(t,e,"",s),s}const Uf={reset:!1,wait:!0,maxRefDepth:2,converter:uL,snapshotOptions:{serverTimestamps:"estimate"}};function Nc(t){for(const e in t)t[e].unsub()}function Nh(t,e,n,i,s,r,o,a,c){const[l,u]=kh(i.data(t.snapshotOptions),yd(e,n),s,t);r.set(e,n,l),xh(t,e,n,s,u,r,o,a,c)}function hL({ref:t,target:e,path:n,depth:i,resolve:s,reject:r,ops:o},a){const c=Object.create(null);let l=pn;return a.once?OI(t).then(u=>{u.exists()?Nh(a,e,n,u,c,o,i,s,r):(o.set(e,n,null),s())}).catch(r):l=Ff(t,u=>{u.exists()?Nh(a,e,n,u,c,o,i,s,r):(o.set(e,n,null),s())},r),()=>{l(),Nc(c)}}function xh(t,e,n,i,s,r,o,a,c){const l=Object.keys(s);if(Object.keys(i).filter(v=>l.indexOf(v)<0).forEach(v=>{i[v].unsub(),delete i[v]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const d=l.length,f=Object.create(null);function g(v){v in f&&++h>=d&&a(n)}l.forEach(v=>{const y=i[v],I=s[v],P=`${n}.${v}`;if(f[P]=!0,y)if(y.path!==I.path)y.unsub();else return;i[v]={data:()=>yd(e,P),unsub:hL({ref:I,target:e,path:P,depth:o,ops:r,resolve:g.bind(null,P),reject:c},t),path:I.path}})}function dL(t,e,n,i,s,r){const o=Object.assign({},Uf,r),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let d=hi(l?[]:t.value);l||n.set(t,h,[]);const f=i;let g,v=pn;const y=[],I={added:({newIndex:k,doc:R})=>{y.splice(k,0,Object.create(null));const H=y[k],[ne,he]=kh(R.data(c),void 0,H,o);n.add(Dn(d),k,ne),xh(o,d,`${h}.${k}`,H,he,n,0,i.bind(null,R),s)},modified:({oldIndex:k,newIndex:R,doc:H})=>{const ne=Dn(d),he=y[k],K=ne[k],[te,Ie]=kh(H.data(c),K,he,o);y.splice(R,0,he),n.remove(ne,k),n.add(ne,R,te),xh(o,d,`${h}.${R}`,he,Ie,n,0,i,s)},removed:({oldIndex:k})=>{const R=Dn(d);n.remove(R,k),Nc(y.splice(k,1)[0])}};function P(k){const R=k.docChanges(a);if(!g&&R.length){g=!0;let H=0;const ne=R.length,he=Object.create(null);for(let K=0;K<ne;K++)he[R[K].doc.id]=!0;i=K=>{K&&K.id in he&&++H>=ne&&(l&&(n.set(t,h,Dn(d)),d=t),f(Dn(d)),i=pn)}}R.forEach(H=>{I[H.type](H)}),R.length||(l&&(n.set(t,h,Dn(d)),d=t),i(Dn(d)))}return u?DI(e).then(P).catch(s):v=Ff(e,P,s),k=>{if(v(),k){const R=typeof k=="function"?k():[];n.set(t,h,R)}y.forEach(Nc)}}function fL(t,e,n,i,s,r){const o=Object.assign({},Uf,r),a="value",c=Object.create(null);i=jS(i,()=>yd(t,a));let l=pn;function u(h){h.exists()?Nh(o,t,a,h,c,n,0,i,s):(n.set(t,a,null),i(null))}return o.once?OI(e).then(u).catch(s):l=Ff(e,u,s),h=>{if(l(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}Nc(c)}}const Fg=Symbol();function pL(t,e){let n=pn;const i=Object.assign({},Uf,e),s=Dn(t),r=i.target||hi();$S()&&(i.once=!0);const o=aL(s,i.ssrKey,Fg,vd()),a=o!==Fg;a&&(r.value=o);let c=!a;const l=hi(!1),u=hi(),h=A_(),d=Bh();let f=pn;function g(){let I=Dn(t);const P=new Promise((k,R)=>{if(n(i.reset),!I)return n=pn,k(null);l.value=c,c=!0,I.converter||(I=I.withConverter(i.converter)),n=(Ed(I)?fL:dL)(r,I,mL,k,R,i)}).catch(k=>(h.value===P&&(u.value=k),Promise.reject(k))).finally(()=>{h.value===P&&(l.value=!1)});h.value=P}let v=pn;Me(t)&&(v=As(t,g)),g(),s&&(f=lL(h.value,s,i.ssrKey)),ev()&&B_(()=>h.value),d&&u_(y);function y(I=i.reset){v(),f(),n(I)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>l},promise:{get:()=>h},stop:{get:()=>y}})}const mL={set:(t,e,n)=>DS(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)},Cr=new WeakMap;function gL(t,e,n){e&&e[t]&&(e[t](n),delete e[t])}const _L={bindName:"$firestoreBind",unbindName:"$firestoreUnbind"},vL=function(e,n,i){const s=Object.assign({},_L,n),{bindName:r,unbindName:o}=s,a=e.config.globalProperties;a[o]=function(l,u){gL(l,Cr.get(this),u),delete this.$firestoreRefs[l]},a[r]=function(l,u,h){const d=Object.assign({},s,h),f=Uw(this.$data,l);Cr.has(this)||Cr.set(this,{});const g=Cr.get(this);g[l]&&g[l](d.reset);const v=WS(i||vd(),e).run(()=>qc()),{promise:y,stop:I}=e.runWithContext(()=>v.run(()=>pL(u,{target:f,...d}))),P=k=>{I(k),v.stop()};return g[l]=P,this.$firestoreRefs[l]=u,y.value},e.mixin({beforeCreate(){this.$firestoreRefs=Object.create(null)},created(){const{firestore:c}=this.$options,l=typeof c=="function"?c.call(this):c;if(l)for(const u in l)this[r](u,l[u],s)},beforeUnmount(){const c=Cr.get(this);if(c)for(const l in c)c[l]();this.$firestoreRefs=null}})};function yL(t){return(e,n)=>vL(n,t,e)}function EL(t,{firebaseApp:e,modules:n=[]}){t.provide(ry,e);for(const i of n)i(e,t)}const zf=wv({apiKey:"AIzaSyD3_PR3stakqPCdQaVutT5fORlmXsMNPM0",authDomain:"quizzify-d3053.firebaseapp.com",projectId:"quizzify-d3053",storageBucket:"quizzify-d3053.appspot.com",messagingSenderId:"955132845389",appId:"1:955132845389:web:3346cc1457aeeaa97b2b04"});yI(zf);const Oh=window.location.href.includes("localhost")?"_dev":"";/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ys=typeof window<"u";function TL(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ye=Object.assign;function _u(t,e){const n={};for(const i in e){const s=e[i];n[i]=an(s)?s.map(t):t(s)}return n}const Xr=()=>{},an=Array.isArray,IL=/\/$/,wL=t=>t.replace(IL,"");function vu(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=CL(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function bL(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ug(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function RL(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Zs(e.matched[i],n.matched[s])&&UI(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function UI(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!AL(t[n],e[n]))return!1;return!0}function AL(t,e){return an(t)?zg(t,e):an(e)?zg(e,t):t===e}function zg(t,e){return an(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function CL(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var ko;(function(t){t.pop="pop",t.push="push"})(ko||(ko={}));var Jr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Jr||(Jr={}));function SL(t){if(!t)if(ys){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),wL(t)}const PL=/^[^#]+#/;function kL(t,e){return t.replace(PL,"#")+e}function NL(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Dl=()=>({left:window.pageXOffset,top:window.pageYOffset});function xL(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=NL(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function jg(t,e){return(history.state?history.state.position-e:-1)+t}const Dh=new Map;function OL(t,e){Dh.set(t,e)}function DL(t){const e=Dh.get(t);return Dh.delete(t),e}let LL=()=>location.protocol+"//"+location.host;function zI(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ug(c,"")}return Ug(n,t)+i+s}function ML(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const f=zI(t,location),g=n.value,v=e.value;let y=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}y=v?d.position-v.position:0}else i(f);s.forEach(I=>{I(n.value,g,{delta:y,type:ko.pop,direction:y?y>0?Jr.forward:Jr.back:Jr.unknown})})};function c(){o=n.value}function l(d){s.push(d);const f=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(ye({},d.state,{scroll:Dl()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Bg(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Dl():null}}function qL(t){const{history:e,location:n}=window,i={value:zI(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:LL()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(c,l){const u=ye({},e.state,Bg(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});r(c,u,!0),i.value=c}function a(c,l){const u=ye({},s.value,e.state,{forward:c,scroll:Dl()});r(u.current,u,!0);const h=ye({},Bg(i.value,c,null),{position:u.position+1},l);r(c,h,!1),i.value=c}return{location:i,state:s,push:a,replace:o}}function VL(t){t=SL(t);const e=qL(t),n=ML(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=ye({location:"",base:t,go:i,createHref:kL.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function FL(t){return typeof t=="string"||t&&typeof t=="object"}function jI(t){return typeof t=="string"||typeof t=="symbol"}const ti={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},BI=Symbol("");var $g;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})($g||($g={}));function er(t,e){return ye(new Error,{type:t,[BI]:!0},e)}function On(t,e){return t instanceof Error&&BI in t&&(e==null||!!(t.type&e))}const Wg="[^/]+?",UL={sensitive:!1,strict:!1,start:!0,end:!0},zL=/[.+*?^${}()[\]/\\]/g;function jL(t,e){const n=ye({},UL,e),i=[];let s=n.start?"^":"";const r=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(zL,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:v,optional:y,regexp:I}=d;r.push({name:g,repeatable:v,optional:y});const P=I||Wg;if(P!==Wg){f+=10;try{new RegExp(`(${P})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${g}" (${P}): `+R.message)}}let k=v?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(k=y&&l.length<2?`(?:/${k})`:"/"+k),y&&(k+="?"),s+=k,f+=20,y&&(f+=-8),v&&(f+=-20),P===".*"&&(f+=-50)}u.push(f)}i.push(u)}if(n.strict&&n.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=r[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:v,optional:y}=f,I=g in l?l[g]:"";if(an(I)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const P=an(I)?I.join("/"):I;if(!P)if(y)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=P}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:c}}function BL(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function $L(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=BL(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Hg(i))return 1;if(Hg(s))return-1}return s.length-i.length}function Hg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const WL={type:0,value:""},HL=/[a-zA-Z0-9_]/;function KL(t){if(!t)return[[]];if(t==="/")return[[WL]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,c,l="",u="";function h(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:c==="("?n=2:HL.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function GL(t,e,n){const i=jL(KL(t.path),n),s=ye(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function QL(t,e){const n=[],i=new Map;e=Qg({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,d){const f=!d,g=YL(u);g.aliasOf=d&&d.record;const v=Qg(e,u),y=[g];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const R of k)y.push(ye({},g,{components:d?d.record.components:g.components,path:R,aliasOf:d?d.record:g}))}let I,P;for(const k of y){const{path:R}=k;if(h&&R[0]!=="/"){const H=h.record.path,ne=H[H.length-1]==="/"?"":"/";k.path=h.record.path+(R&&ne+R)}if(I=GL(k,h,v),d?d.alias.push(I):(P=P||I,P!==I&&P.alias.push(I),f&&u.name&&!Gg(I)&&o(u.name)),g.children){const H=g.children;for(let ne=0;ne<H.length;ne++)r(H[ne],I,d&&d.children[ne])}d=d||I,(I.record.components&&Object.keys(I.record.components).length||I.record.name||I.record.redirect)&&c(I)}return P?()=>{o(P)}:Xr}function o(u){if(jI(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&$L(u,n[h])>=0&&(u.record.path!==n[h].record.path||!$I(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Gg(u)&&i.set(u.record.name,u)}function l(u,h){let d,f={},g,v;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw er(1,{location:u});v=d.record.name,f=ye(Kg(h.params,d.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&Kg(u.params,d.keys.map(P=>P.name))),g=d.stringify(f)}else if("path"in u)g=u.path,d=n.find(P=>P.re.test(g)),d&&(f=d.parse(g),v=d.record.name);else{if(d=h.name?i.get(h.name):n.find(P=>P.re.test(h.path)),!d)throw er(1,{location:u,currentLocation:h});v=d.record.name,f=ye({},h.params,u.params),g=d.stringify(f)}const y=[];let I=d;for(;I;)y.unshift(I.record),I=I.parent;return{name:v,path:g,params:f,matched:y,meta:JL(y)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Kg(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function YL(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:XL(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function XL(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Gg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function JL(t){return t.reduce((e,n)=>ye(e,n.meta),{})}function Qg(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function $I(t,e){return e.children.some(n=>n===t||$I(t,n))}const WI=/#/g,ZL=/&/g,eM=/\//g,tM=/=/g,nM=/\?/g,HI=/\+/g,iM=/%5B/g,sM=/%5D/g,KI=/%5E/g,rM=/%60/g,GI=/%7B/g,oM=/%7C/g,QI=/%7D/g,aM=/%20/g;function jf(t){return encodeURI(""+t).replace(oM,"|").replace(iM,"[").replace(sM,"]")}function cM(t){return jf(t).replace(GI,"{").replace(QI,"}").replace(KI,"^")}function Lh(t){return jf(t).replace(HI,"%2B").replace(aM,"+").replace(WI,"%23").replace(ZL,"%26").replace(rM,"`").replace(GI,"{").replace(QI,"}").replace(KI,"^")}function lM(t){return Lh(t).replace(tM,"%3D")}function uM(t){return jf(t).replace(WI,"%23").replace(nM,"%3F")}function hM(t){return t==null?"":uM(t).replace(eM,"%2F")}function xc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function dM(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(HI," "),o=r.indexOf("="),a=xc(o<0?r:r.slice(0,o)),c=o<0?null:xc(r.slice(o+1));if(a in e){let l=e[a];an(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Yg(t){let e="";for(let n in t){const i=t[n];if(n=lM(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(an(i)?i.map(r=>r&&Lh(r)):[i&&Lh(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function fM(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=an(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const pM=Symbol(""),Xg=Symbol(""),Bf=Symbol(""),YI=Symbol(""),Mh=Symbol("");function Sr(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function si(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(er(4,{from:n,to:e})):h instanceof Error?a(h):FL(h)?a(er(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},l=t.call(i&&i.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function yu(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(mM(a)){const l=(a.__vccOpts||a)[e];l&&s.push(si(l,n,i,r,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=TL(l)?l.default:l;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&si(d,n,i,r,o)()}))}}return s}function mM(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Jg(t){const e=Bt(Bf),n=Bt(YI),i=Ft(()=>e.resolve(Ui(t.to))),s=Ft(()=>{const{matched:c}=i.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Zs.bind(null,u));if(d>-1)return d;const f=Zg(c[l-2]);return l>1&&Zg(u)===f&&h[h.length-1].path!==f?h.findIndex(Zs.bind(null,c[l-2])):d}),r=Ft(()=>s.value>-1&&yM(n.params,i.value.params)),o=Ft(()=>s.value>-1&&s.value===n.matched.length-1&&UI(n.params,i.value.params));function a(c={}){return vM(c)?e[Ui(t.replace)?"replace":"push"](Ui(t.to)).catch(Xr):Promise.resolve()}return{route:i,href:Ft(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const gM=F_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Jg,setup(t,{slots:e}){const n=Oo(Jg(t)),{options:i}=Bt(Bf),s=Ft(()=>({[e_(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[e_(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:iv("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),_M=gM;function vM(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function yM(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!an(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Zg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const e_=(t,e,n)=>t??e??n,EM=F_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Bt(Mh),s=Ft(()=>t.route||i.value),r=Bt(Xg,0),o=Ft(()=>{let l=Ui(r);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ft(()=>s.value.matched[o.value]);ka(Xg,Ft(()=>o.value+1)),ka(pM,a),ka(Mh,s);const c=hi();return As(()=>[c.value,a.value,t.name],([l,u,h],[d,f,g])=>{u&&(u.instances[h]=l,f&&f!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!Zs(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return t_(n.default,{Component:d,route:l});const f=h.props[u],g=f?f===!0?l.params:typeof f=="function"?f(l):f:null,y=iv(d,ye({},g,e,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return t_(n.default,{Component:y,route:l})||y}}});function t_(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const TM=EM;function IM(t){const e=QL(t.routes,t),n=t.parseQuery||dM,i=t.stringifyQuery||Yg,s=t.history,r=Sr(),o=Sr(),a=Sr(),c=A_(ti);let l=ti;ys&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=_u.bind(null,T=>""+T),h=_u.bind(null,hM),d=_u.bind(null,xc);function f(T,q){let O,U;return jI(T)?(O=e.getRecordMatcher(T),U=q):U=T,e.addRoute(U,O)}function g(T){const q=e.getRecordMatcher(T);q&&e.removeRoute(q)}function v(){return e.getRoutes().map(T=>T.record)}function y(T){return!!e.getRecordMatcher(T)}function I(T,q){if(q=ye({},q||c.value),typeof T=="string"){const _=vu(n,T,q.path),E=e.resolve({path:_.path},q),w=s.createHref(_.fullPath);return ye(_,E,{params:d(E.params),hash:xc(_.hash),redirectedFrom:void 0,href:w})}let O;if("path"in T)O=ye({},T,{path:vu(n,T.path,q.path).path});else{const _=ye({},T.params);for(const E in _)_[E]==null&&delete _[E];O=ye({},T,{params:h(_)}),q.params=h(q.params)}const U=e.resolve(O,q),_e=T.hash||"";U.params=u(d(U.params));const p=bL(i,ye({},T,{hash:cM(_e),path:U.path})),m=s.createHref(p);return ye({fullPath:p,hash:_e,query:i===Yg?fM(T.query):T.query||{}},U,{redirectedFrom:void 0,href:m})}function P(T){return typeof T=="string"?vu(n,T,c.value.path):ye({},T)}function k(T,q){if(l!==T)return er(8,{from:q,to:T})}function R(T){return he(T)}function H(T){return R(ye(P(T),{replace:!0}))}function ne(T){const q=T.matched[T.matched.length-1];if(q&&q.redirect){const{redirect:O}=q;let U=typeof O=="function"?O(T):O;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=P(U):{path:U},U.params={}),ye({query:T.query,hash:T.hash,params:"path"in U?{}:T.params},U)}}function he(T,q){const O=l=I(T),U=c.value,_e=T.state,p=T.force,m=T.replace===!0,_=ne(O);if(_)return he(ye(P(_),{state:typeof _=="object"?ye({},_e,_.state):_e,force:p,replace:m}),q||O);const E=O;E.redirectedFrom=q;let w;return!p&&RL(i,U,O)&&(w=er(16,{to:E,from:U}),cn(U,U,!0,!1)),(w?Promise.resolve(w):Ie(E,U)).catch(A=>On(A)?On(A,2)?A:Jn(A):ge(A,E,U)).then(A=>{if(A){if(On(A,2))return he(ye({replace:m},P(A.to),{state:typeof A.to=="object"?ye({},_e,A.to.state):_e,force:p}),q||E)}else A=St(E,U,!0,m,_e);return at(E,U,A),A})}function K(T,q){const O=k(T,q);return O?Promise.reject(O):Promise.resolve()}function te(T){const q=us.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(T):T()}function Ie(T,q){let O;const[U,_e,p]=wM(T,q);O=yu(U.reverse(),"beforeRouteLeave",T,q);for(const _ of U)_.leaveGuards.forEach(E=>{O.push(si(E,T,q))});const m=K.bind(null,T,q);return O.push(m),ct(O).then(()=>{O=[];for(const _ of r.list())O.push(si(_,T,q));return O.push(m),ct(O)}).then(()=>{O=yu(_e,"beforeRouteUpdate",T,q);for(const _ of _e)_.updateGuards.forEach(E=>{O.push(si(E,T,q))});return O.push(m),ct(O)}).then(()=>{O=[];for(const _ of p)if(_.beforeEnter)if(an(_.beforeEnter))for(const E of _.beforeEnter)O.push(si(E,T,q));else O.push(si(_.beforeEnter,T,q));return O.push(m),ct(O)}).then(()=>(T.matched.forEach(_=>_.enterCallbacks={}),O=yu(p,"beforeRouteEnter",T,q),O.push(m),ct(O))).then(()=>{O=[];for(const _ of o.list())O.push(si(_,T,q));return O.push(m),ct(O)}).catch(_=>On(_,8)?_:Promise.reject(_))}function at(T,q,O){a.list().forEach(U=>te(()=>U(T,q,O)))}function St(T,q,O,U,_e){const p=k(T,q);if(p)return p;const m=q===ti,_=ys?history.state:{};O&&(U||m?s.replace(T.fullPath,ye({scroll:m&&_&&_.scroll},_e)):s.push(T.fullPath,_e)),c.value=T,cn(T,q,O,m),Jn()}let Mt;function Ai(){Mt||(Mt=s.listen((T,q,O)=>{if(!ra.listening)return;const U=I(T),_e=ne(U);if(_e){he(ye(_e,{replace:!0}),U).catch(Xr);return}l=U;const p=c.value;ys&&OL(jg(p.fullPath,O.delta),Dl()),Ie(U,p).catch(m=>On(m,12)?m:On(m,2)?(he(m.to,U).then(_=>{On(_,20)&&!O.delta&&O.type===ko.pop&&s.go(-1,!1)}).catch(Xr),Promise.reject()):(O.delta&&s.go(-O.delta,!1),ge(m,U,p))).then(m=>{m=m||St(U,p,!1),m&&(O.delta&&!On(m,8)?s.go(-O.delta,!1):O.type===ko.pop&&On(m,20)&&s.go(-1,!1)),at(U,p,m)}).catch(Xr)}))}let qt=Sr(),pe=Sr(),Re;function ge(T,q,O){Jn(T);const U=pe.list();return U.length?U.forEach(_e=>_e(T,q,O)):console.error(T),Promise.reject(T)}function xn(){return Re&&c.value!==ti?Promise.resolve():new Promise((T,q)=>{qt.add([T,q])})}function Jn(T){return Re||(Re=!T,Ai(),qt.list().forEach(([q,O])=>T?O(T):q()),qt.reset()),T}function cn(T,q,O,U){const{scrollBehavior:_e}=t;if(!ys||!_e)return Promise.resolve();const p=!O&&DL(jg(T.fullPath,0))||(U||!O)&&history.state&&history.state.scroll||null;return Xh().then(()=>_e(T,q,p)).then(m=>m&&xL(m)).catch(m=>ge(m,T,q))}const wt=T=>s.go(T);let ls;const us=new Set,ra={currentRoute:c,listening:!0,addRoute:f,removeRoute:g,hasRoute:y,getRoutes:v,resolve:I,options:t,push:R,replace:H,go:wt,back:()=>wt(-1),forward:()=>wt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:pe.add,isReady:xn,install(T){const q=this;T.component("RouterLink",_M),T.component("RouterView",TM),T.config.globalProperties.$router=q,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Ui(c)}),ys&&!ls&&c.value===ti&&(ls=!0,R(s.location).catch(_e=>{}));const O={};for(const _e in ti)Object.defineProperty(O,_e,{get:()=>c.value[_e],enumerable:!0});T.provide(Bf,q),T.provide(YI,T_(O)),T.provide(Mh,c);const U=T.unmount;us.add(T),T.unmount=function(){us.delete(T),us.size<1&&(l=ti,Mt&&Mt(),Mt=null,c.value=ti,ls=!1,Re=!1),U()}}};function ct(T){return T.reduce((q,O)=>q.then(()=>te(O)),Promise.resolve())}return ra}function wM(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(l=>Zs(l,a))?i.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Zs(l,c))||s.push(c))}return[n,i,s]}const bM={name:"Register",mounted(){this.signInWithGoogle()},methods:{signInWithGoogle(){const t=new Mn,e=ny();_C(e,t).then(n=>{console.log(n.user),$f.push("/main")})}}};function RM(t,e,n,i,s,r){return Ee(),De("button",{onClick:e[0]||(e[0]=(...o)=>r.signInWithGoogle&&r.signInWithGoogle(...o))},"Authenth")}const AM=Yn(bM,[["render",RM]]);const CM={name:"MenuItem",props:["name","beforeSelected","afterSelected","selected","unselected"],methods:{menuClicked(){this.$emit("menuClicked",this.name)}}};function SM(t,e,n,i,s,r){return Ee(),De("div",{onClick:e[0]||(e[0]=o=>r.menuClicked(n.name)),class:Mc(["menuItem",{afterSelected:n.afterSelected,beforeSelected:n.beforeSelected,selected:n.selected,unselected:n.unselected}])},et(n.name),3)}const PM=Yn(CM,[["render",SM]]);const kM={name:"Menu",components:{MenuItem:PM},data(){return{menuItems:[{item:"play",selected:!0},{item:"statistiques",selected:!1}]}},methods:{menuClicked(t){this.menuItems.find(e=>e.item===t).selected=!0,this.menuItems.filter(e=>e.item!==t).forEach(e=>e.selected=!1),this.$emit("menuClicked",t)},itemSelected(t){return this.menuItems.find(e=>e.item===t).selected},itemUnselected(t){return this.menuItems.find(e=>e.item===t).selected===!1},isBeforeSelected(t){const e=this.menuItems.findIndex(n=>n.selected);return this.menuItems[e-1]!==void 0&&this.menuItems[e-1].item===t},isAfterSelected(t){const e=this.menuItems.findIndex(n=>n.selected);return this.menuItems[e+1]!==void 0&&this.menuItems[e+1].item===t}}},NM={class:"menuPanel"};function xM(t,e,n,i,s,r){const o=zi("MenuItem");return Ee(),De("div",NM,[(Ee(!0),De(Tt,null,Wa(s.menuItems,a=>(Ee(),ro(o,{name:a.item,beforeSelected:r.isBeforeSelected(a.item),afterSelected:r.isAfterSelected(a.item),selected:r.itemSelected(a.item),unselected:r.itemUnselected(a.item),onMenuClicked:r.menuClicked},null,8,["name","beforeSelected","afterSelected","selected","unselected","onMenuClicked"]))),256))])}const OM=Yn(kM,[["render",xM]]),Ht=lv({id:"partyFFVL",state:()=>({qcms:[],nbErrors:0}),actions:{setAnswerd(t){this.qcms.find(e=>e.id===t).answered=!0},setValidated(t){this.qcms.find(e=>e.id===t).validated=!0},setQCMs(t){this.qcms=t},setNbErrors(t){this.nbErrors=t}},getters:{}});let Aa;const DM=new Uint8Array(16);function LM(){if(!Aa&&(Aa=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Aa))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Aa(DM)}const Je=[];for(let t=0;t<256;++t)Je.push((t+256).toString(16).slice(1));function MM(t,e=0){return Je[t[e+0]]+Je[t[e+1]]+Je[t[e+2]]+Je[t[e+3]]+"-"+Je[t[e+4]]+Je[t[e+5]]+"-"+Je[t[e+6]]+Je[t[e+7]]+"-"+Je[t[e+8]]+Je[t[e+9]]+"-"+Je[t[e+10]]+Je[t[e+11]]+Je[t[e+12]]+Je[t[e+13]]+Je[t[e+14]]+Je[t[e+15]]}const qM=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),n_={randomUUID:qM};function VM(t,e,n){if(n_.randomUUID&&!e&&!t)return n_.randomUUID();t=t||{};const i=t.random||(t.rng||LM)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){n=n||0;for(let s=0;s<16;++s)e[n+s]=i[s];return e}return MM(i)}function XI(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}const FM={name:"QuestionFFVL",props:["qcm","dryrun"],data(){return{checkboxes:[],resultsColor:[],resultsDecoration:[],validated:!1,headerColor:"",headerBackgroundColor:"",responsePoint:"",delayResult:"",hasBeenAnswered:!0}},computed:{choicesSuffled(){return XI(this.qcm.choices)}},methods:{validate(){this.hasBeenAnswered=this.qcm.answered,this.validated=!0;let t=0,e=0,n=!0;for(let r in this.qcm.choices)this.qcm.choices[r].point>0&&(t+=this.qcm.choices[r].point),this.qcm.choices[r].point<=0&&!this.checkboxes[r]?(this.resultsColor[r]="gray",this.resultsDecoration[r]="line-through"):this.qcm.choices[r].point<=0&&this.checkboxes[r]?(this.resultsColor[r]="red",e+=this.qcm.choices[r].point):this.qcm.choices[r].point>=0&&this.checkboxes[r]?(this.resultsColor[r]="green",e+=this.qcm.choices[r].point):this.qcm.choices[r].point>=0&&!this.checkboxes[r]&&(this.resultsColor[r]="black");t==e?(this.headerColor="#3c763d",this.headerBackgroundColor="#dff0d8",Ht().setValidated(this.qcm.id)):e>0?(this.headerColor="#AA6C00",this.headerBackgroundColor="#FFE5C1",n=!1):(this.headerColor="#a94442",this.headerBackgroundColor="#f2dede",n=!1);let i=this.qcm.reminder==null?"New":this.qcm.reminder.remindDelay,s=this.qcm.reminder==null?"New":this.qcm.reminder.remindDelay;if(!this.qcm.answered){let r=this.getReminderDelay(n);const o=new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear();this.qcm.reminder==null&&!this.dryrun?(s=r,this.insertQuestionReminder(r,o)):o!=this.qcm.reminder.answeredDate&&!this.dryrun&&(this.updateQuestionReminder(r,o),s=r)}this.responsePoint=e>0?e:"0",!this.qcm.answered&&!n&&Ht().setNbErrors(Ht().nbErrors+1),Ht().setAnswerd(this.qcm.id),this.delayResult=`${i} => ${s}`},getReminderDelay(t){if(this.qcm.reminder==null)return t?1:0;const e=[0,1,2,3,5,8,13,21,34,55],n=e.indexOf(this.qcm.reminder.remindDelay);return t?n==9?55:e[n+1]:n==0?0:e[n-1]},getNextQuestion(){this.resetcss(),this.$emit("getNextQuestion")},resetcss(){this.resultsColor=[],this.resultsDecoration=[],this.validated=!1,this.headerColor="",this.headerBackgroundColor="",this.responsePoint="";for(let t=0;t<this.checkboxes.length;t++)this.checkboxes[t]=!1},async insertQuestionReminder(t,e){await Og(Ng(qh,"QcmReminder"+Oh,VM()),{answeredDate:e,firstAnsweredDate:e,qcmId:this.qcm.id,remindDelay:t})},async updateQuestionReminder(t,e){await Og(Ng(qh,"QcmReminder"+Oh,this.qcm.reminder.id),{answeredDate:e,qcmId:this.qcm.id,remindDelay:t})}}},UM={key:0},zM={key:1},jM={key:0,class:"resultPanel"},BM=["onUpdate:modelValue"],$M={key:0};function WM(t,e,n,i,s,r){return Ee(),De("div",null,[se("div",{class:"questionHeader",style:Zr({color:s.headerColor,"background-color":s.headerBackgroundColor})},[Vs(et(n.qcm.question)+" ",1),s.responsePoint?(Ee(),De("span",UM,et(s.responsePoint),1)):Kt("",!0),n.qcm.reminder?(Ee(),De("span",zM,et(n.qcm.reminder.remindDelay),1)):Kt("",!0)],4),s.validated&&!this.hasBeenAnswered&&!this.dryrun?(Ee(),De("div",jM,et(s.delayResult),1)):Kt("",!0),(Ee(!0),De(Tt,null,Wa(r.choicesSuffled,(o,a)=>(Ee(),De("div",{class:"questionChoice",style:Zr({color:s.resultsColor[a],"text-decoration":s.resultsDecoration[a]})},[V_(se("input",{type:"checkbox","onUpdate:modelValue":c=>s.checkboxes[a]=c},null,8,BM),[[_b,s.checkboxes[a]]]),se("span",null,et(o.choice),1),s.validated?(Ee(),De("span",$M,"("+et(o.point)+")",1)):Kt("",!0)],4))),256)),s.validated?Kt("",!0):(Ee(),De("button",{key:1,class:"button-4, actionButton",onClick:e[0]||(e[0]=(...o)=>r.validate&&r.validate(...o))},"OK")),s.validated?(Ee(),De("button",{key:2,class:"button-4, actionButton",onClick:e[1]||(e[1]=(...o)=>r.getNextQuestion&&r.getNextQuestion(...o))},"Next")):Kt("",!0)])}const HM=Yn(FM,[["render",WM],["__scopeId","data-v-330c3520"]]),Vt=lv({id:"globalFFVL",state:()=>({qcms:[{id:1,question:"Vous volez au taux de chute minimum ; vous allez rentrer dans une ascendance",choices:[{choice:"vous vous préparez à freiner",point:-6},{choice:"vous vous préparez à relâcher les freins",point:0},{choice:"vous conservez votre régime de vol",point:0},{choice:"vous augmentez votre vitesse",point:6}]},{id:2,question:"Lorsqu'une particule d'air nuageux est soulevée, sa température",choices:[{choice:"décroît plus lentement que si la particule contenait de l'air clair",point:6},{choice:"décroît plus vite que si la particule contenait de l'air clair",point:-6},{choice:"croît plus vite que si la particule contenait de l'air clair",point:-6}]},{id:3,question:'Vous faites les "oreilles"',choices:[{choice:"traverser un gradient ou une turbulence peut accroître considérablement votre taux de chute",point:2},{choice:"votre finesse diminue",point:2},{choice:"l'incidence augmente",point:2},{choice:"il n'existe aucun risque de parachutage",point:-6}]},{id:4,question:"Facteurs favorisant l'instabilité",choices:[{choice:"l'arrivée d'air chaud dans la basse couche",point:3},{choice:"l'arrivée d'air chaud en altitude",point:-6},{choice:"le refroidissement du sol",point:-6},{choice:"le réchauffement du sol",point:3}]},{id:5,question:"En général un front froid engendre des nuages",choices:[{choice:"par couches minces stratiformes",point:-6},{choice:"isolés de type cumuliformes",point:-6},{choice:"développés sur une grande épaisseur et des 2 types",point:6}]},{id:6,question:"Deux ailes se suivent tout près d'un relief situé à leur droite, la deuxième aile est plus rapide",choices:[{choice:"elle double par la gauche",point:-6},{choice:"elle double par la droite entre le relief et l'autre aile",point:-6},{choice:"elle fait demi-tour",point:6}]},{id:7,question:"Un altimètre permet d'obtenir une information sur",choices:[{choice:"la variation du taux d'humidité",point:-6},{choice:"le gradient vertical de pression atmosphérique",point:0},{choice:"l'altitude",point:6}]},{id:8,question:"Puis-je prévoir d'atterrir en delta ou parapente sur un aérodrome contrôlé ?",choices:[{choice:"Non, les PUL ne peuvent utiliser un aérodrome contrôlé sans autorisation particulière de l'autorité compétente",point:6},{choice:"Oui, mais il faut que je respecte le circuit d'aérodrome",point:-6},{choice:"Oui, il me suffit d'annoncer mon arrivée par radio",point:-6}]},{id:9,question:"Si deux pilotes ont la même aile, à même incidence, le plus lourd",choices:[{choice:"descend moins vite",point:-6},{choice:"vole plus vite",point:3},{choice:"descend plus vite",point:3},{choice:"vole moins vite",point:-6}]},{id:10,question:"Faire une descente rapide en 360° enchaînés et serrés",choices:[{choice:"vous expose à des facteurs de charges importants",point:2},{choice:"vous fait perdre toute référence extérieure",point:2},{choice:"peut entraîner une perte de connaissance",point:2},{choice:"est toujours sans danger",point:-6}]},{id:11,question:"Si vous volez par vent arrière fort",choices:[{choice:"votre vitesse-sol est augmentée",point:6},{choice:"vous avez moins de portance sur votre parapente",point:-6},{choice:"l'effet du vent sur votre visage sera bien plus fort",point:-6},{choice:"cela fragilise votre parapente qui peut se fermer plus facilement",point:-6}]},{id:12,question:"Un mouvement de lacet à droite déclenche principalement",choices:[{choice:"un couple piqueur",point:-6},{choice:"du roulis induit à gauche",point:-6},{choice:"du roulis induit à droite",point:6},{choice:"un couple cabreur",point:-6}]},{id:13,question:"Une bulle d'air s'élève si sa température par rapport à l'air ambiant est",choices:[{choice:"égale",point:-6},{choice:"inférieure",point:-6},{choice:"supérieure",point:6}]},{id:14,question:"Vous ne pouvez pas",choices:[{choice:"décoller 30 minutes après le coucher du soleil",point:2},{choice:"décoller si le pilote précédent est à moins de 100 mètres",point:2},{choice:"rester en vol au delà de 30 minutes après le coucher du soleil",point:2}]},{id:15,question:"Le 360° en prise de terrain",choices:[{choice:"est tout à fait déconseillé",point:2},{choice:"permet d'être précis à l'atterrissage",point:-6},{choice:"vous expose à des risques importants de collision avec les autres ailes en approche",point:2},{choice:"vous fait perdre de vue les repères au sol",point:2}]},{id:16,question:"A niveau de vol égal, la priorité en vol revient",choices:[{choice:"par convention, à l'aile arrivée la première dans l'ascendance",point:2},{choice:"à l'aile qui arrive par la droite",point:4},{choice:"au biplace sur le monoplace",point:-6},{choice:"à l'aile pilotée par un débutant",point:-6}]},{id:17,question:"Durant un vol de pente à 50m du sol, le sifflement du vent faiblit et votre aile s'enfonce en se trouvant proche de la vitesse de décrochage ; pour éviter le crash",choices:[{choice:"vous freinez immédiatement pour ralentir la vitesse de rapprochement du sol",point:-6},{choice:"vous engagez immédiatement un virage prononcé pour vous éloigner de la pente",point:-6},{choice:"vous appliquez votre poids du côté dégagé en relevant les mains puis, dès que la vitesse est revenue, vous utilisez la commande pour virer",point:6}]},{id:18,question:"Un altimètre",choices:[{choice:"peut être calé à différentes valeurs (niveau de la mer, du décollage, de l'atterrissage, etc.)",point:2},{choice:"est calé définitivement à la construction",point:-6},{choice:"doit toujours être comparé et réglé par rapport aux valeurs connues (décollage, points reconnus, atterrissage)",point:2},{choice:"donne une indication variant avec les données atmosphériques",point:2}]},{id:19,question:"Les nuages de type cumulus",choices:[{choice:"caractérisent des couches plutôt instables",point:3},{choice:"se développent horizontalement",point:-6},{choice:"se développent verticalement",point:3},{choice:"caractérisent des couches plutôt stables",point:-6}]},{id:20,question:"Par rapport à l'air chaud, à pression et à volumes égaux l'air froid est",choices:[{choice:"plus lourd",point:6},{choice:"identique",point:-6},{choice:"plus léger",point:-6}]},{id:21,question:'Une voile classée "A" aux tests de la norme CEN',choices:[{choice:"permet au pilote de voler en conditions fortes",point:-6},{choice:"tolère, à l'écart du relief, des imprécisions de pilotage dans des conditions aérologiques modérées",point:3},{choice:"a des qualités d'amortissement des turbulences intéressantes pour l'apprentissage",point:3}]},{id:22,question:"Quelles contraintes peuvent engendrer les évènements sportifs, culturels ou politiques ?",choices:[{choice:"Des restrictions d'horaires et de volumes de vol matérialisés par des ZRT et/ou des ZIT",point:6},{choice:"Des NOTAM d'information pour renforcer la vigilance des pilotes",point:-6},{choice:"Les aéronefs non motorisés doivent simplement ne pas survoler les lieux de déroulement",point:-6}]},{id:23,question:"Le départ en vrille en parapente est précédé",choices:[{choice:"du sentiment que l'aile a du mal à tourner",point:2},{choice:"d'une augmentation du bruit du vent relatif dans les oreilles du pilote",point:-6},{choice:"d'une commande intérieure dure et largement abaissée",point:2},{choice:"d'un affaiblissement du bruit du vent relatif dans les oreilles du pilote",point:2}]},{id:24,question:"Les ascendances thermiques",choices:[{choice:"montent toujours verticalement",point:-6},{choice:"se déclenchent souvent sur des sols contrastés",point:2},{choice:"sont en général entourées de descendances",point:2},{choice:"peuvent se présenter sous forme de bulles ou de colonnes",point:2}]},{id:25,question:"En vol turbulent, votre voile se ferme par devant sur une grande longueur du bord d'attaque",choices:[{choice:"vous tirez brièvement sur les deux freins puis, sans délai, relevez vos mains",point:3},{choice:"vous remontez les freins à vitesse max",point:-6},{choice:"vous augmentez l'incidence de votre aile",point:3}]},{id:26,question:'Vous faites les "oreilles"',choices:[{choice:"cela améliore votre pénétration",point:-6},{choice:"votre finesse est dégradée",point:3},{choice:"votre taux de chute est augmenté",point:3},{choice:"ainsi, la voile ne fermera jamais",point:-6}]},{id:27,question:"La convection dans un profil de masse d'air plutôt stable",choices:[{choice:"est impossible",point:-6},{choice:"peut se concentrer le long des pentes bien exposées au soleil",point:3},{choice:"est possible si un réchauffement suffisant du sol est obtenu",point:3}]},{id:28,question:"Les nuages matérialisant les ondes de ressaut sont des",choices:[{choice:"cumulus congestus et cumulonimbus",point:-6},{choice:"altocumulus lenticulaires et cumulus rotors",point:6},{choice:"cirrostratus et nimbo stratus",point:-6}]},{id:29,question:"Vous volez vent arrière ; votre vitesse/air de croisière est égale à la vitesse du vent météo ; le sol",choices:[{choice:"paraît fixe",point:-6},{choice:"défile 2 fois moins vite que par vent nul",point:-6},{choice:"défile 2 fois plus vite que par vent nul",point:6}]},{id:30,question:"Les avions de chasse de la Défense peuvent-ils évoluer en espace G et E ?",choices:[{choice:"Oui, à n'importe quel moment, en fonction du mode de vol appliqué",point:6},{choice:"Non, uniquement dans les zones militaires de type, R, RTBA, P, ZIT, CTR et TMA",point:-6},{choice:"Oui, mais seulement si un exercice militaire a été programmé",point:-6}]},{id:31,question:"En régime turbulent, il vaut mieux",choices:[{choice:"ne pas taquiner les vitesses trop basses",point:2},{choice:"ne jamais faire d'évolutions serrées",point:2},{choice:"ne pas taquiner les vitesses trop élevées",point:2}]},{id:32,question:"Indiquez les facteurs favorisant la convection",choices:[{choice:"un réchauffement important au niveau du sol",point:3},{choice:"un vent très fort",point:-6},{choice:"un vent de force moyenne",point:3},{choice:"pas de vent du tout",point:0}]},{id:33,question:"La qualification d'accompagnateur fédéral",choices:[{choice:"est reconnue et délivrée par l'ensemble des pilotes du club",point:-3},{choice:"est délivrée suite à plusieurs journées de formation spécifique",point:2},{choice:"est auto-délivrée par le pilote concerné",point:-6},{choice:"est reconnue par la FFVL et délivrée par le responsable régional formation (RRF)",point:4}]},{id:34,question:"Un vent régulier en force et direction n'a aucune influence",choices:[{choice:"sur la finesse-sol",point:-6},{choice:"sur la vitesse-sol",point:-6},{choice:"sur la vitesse-air",point:6}]},{id:35,question:"Le variomètre de base mesure la vitesse verticale",choices:[{choice:"de l'aile par rapport à la masse d'air",point:-6},{choice:"de la masse d'air par rapport à l'aile",point:-6},{choice:"de l'aile par rapport au sol",point:6},{choice:"de la masse d'air par rapport au sol",point:-6}]},{id:36,question:"Que faut-il prendre en compte pour une valeur exprimée en FL ?",choices:[{choice:"Etant basée sur une pression standard, l'altitude correspondante est variable",point:6},{choice:"Il faut une instrumentation spécifique, cela est destiné au trafic IFR uniquement",point:-6},{choice:"Il faut ajouter l'altitude du décollage pour pouvoir utiliser une valeur en FL",point:-6}]},{id:37,question:'En faisant les "oreilles"',choices:[{choice:"l'incidence diminue",point:-6},{choice:"vous améliorez l'amortissement en tangage",point:3},{choice:'vous gardez votre "tour de frein"',point:-6},{choice:"la traînée augmente",point:3}]},{id:38,question:"Vous vous apprêtez à décoller à 15 heures sur un versant ensoleillé où s'est établi une légère brise montante. Le vent météo est nul",choices:[{choice:"le vent sera nul ou très faible en vallée",point:-6},{choice:"vous devez envisager l'éventualité d'un vent de vallée fort, surtout si la vallée est étroite",point:3},{choice:"dans tous les cas, il est prudent de prévoir des possibilités tenant compte d'un éventuel vent de vallée fort",point:3}]},{id:39,question:"Les ondes de ressaut se rencontrent en altitude",choices:[{choice:"n'importe où dans une couche d'air instable",point:-6},{choice:"sous le vent d'un relief dans une couche d'air stable",point:6},{choice:"au vent d'un relief dans une couche d'air stable",point:-6}]},{id:40,question:"Cochez les affirmations exactes",choices:[{choice:"les nimbostratus donnent des chutes de grêlons",point:-6},{choice:"les cirrus sont constitués de cristaux de glace",point:3},{choice:"les stratus sont constitués de cristaux de glace",point:-6},{choice:"les cumulonimbus sont constitués de gouttes d'eau et de cristaux de glace",point:3}]},{id:41,question:"La vapeur d'eau",choices:[{choice:"est présente au sol certains matins sous forme de rosée",point:-6},{choice:"est invisible",point:6},{choice:"est visible sous forme de buée blanche",point:-6}]},{id:42,question:"Le freinage final par vent fort",choices:[{choice:"n'est pas dangereux",point:-6},{choice:"demande un dosage précis et limité en amplitude",point:3},{choice:"n'est pas toujours nécessaire",point:3}]},{id:43,question:"L'hectopascal est une unité de",choices:[{choice:"pression",point:6},{choice:"température",point:-6},{choice:"humidité",point:-6}]},{id:44,question:"La portance d'une aile est due à",choices:[{choice:"la déviation non symétrique des filets d'air par le profil de l'aile",point:3},{choice:"une dépression apparaissant au dessus du profil et une surpression au dessous",point:3},{choice:"une dépression apparaissant au dessous du profil et une surpression au dessus",point:-6}]},{id:45,question:"Le poids apparent sur un appareil en virage équilibré est",choices:[{choice:"supérieur au poids total aile+pilote",point:6},{choice:"inférieur au poids total aile+pilote",point:-6},{choice:"égal au poids totale aile+pilote",point:-6}]},{id:46,question:"L'anémomètre est un instrument indiquant",choices:[{choice:"la vitesse du vent relatif à bord",point:3},{choice:"la direction du vent",point:-6},{choice:"la vitesse du vent instantané",point:3}]},{id:47,question:"Le label École Française de Vol Libre (EFVL) ou Club-École français de Vol Libre (CEFVL)",choices:[{choice:"permet à un club d'enseigner sans moniteur",point:-6},{choice:"garantit à l'élève le respects des exigences fédérales en matière d'apprentissage",point:6},{choice:"est nécessaire pour enseigner",point:-6}]},{id:48,question:"Vous constatez une diminution du vent relatif. L'aile s'enfonce. Vous réagissez en",choices:[{choice:"en débridant totalement l'aile quitte à produire une abattée et augmenter le taux de chute",point:6},{choice:"faisant les oreilles pour fuir au plus vite le secteur",point:-6},{choice:"tirant sur les freins pour réduire le taux de chute qui est en passe d'augmenter",point:-6}]},{id:49,question:"Le ciel est progressivement envahi par des cirrus de plus en plus denses, puis par un voile de cirrostratus de 7/8",choices:[{choice:"il va y avoir du brouillard cette nuit",point:0},{choice:"un front chaud arrive, il va probablement pleuvoir",point:6},{choice:"un cumulonimbus est en cours de formation",point:-6},{choice:"la convection thermique va se renforcer car l'atmosphère se réchauffe",point:-6}]},{id:50,question:"Dans quels types d'espaces militaires le pilote de l'aéronef militaire ne peut assurer l'anticollision ?",choices:[{choice:"L'anticollision n'est jamais assurée dans les zones d'entrainement militaires",point:-6},{choice:"Dans les zones R et dans les ZIT",point:-6},{choice:"Dans le RTBA activé, car le pilote évolue souvent en mode automatique de suivi de terrain",point:6}]},{id:51,question:"Les nuages favorables aux vols de performances sont les",choices:[{choice:"nimbostratus, altostratus et cumulonimbus",point:-6},{choice:"stratus",point:-6},{choice:"cirrocumulus, nimbostratus et stratocumulus",point:-6},{choice:"cumulus",point:6}]},{id:52,question:"Avec les oreilles",choices:[{choice:"mon nouveau taux de chute me permet de facilement redescendre dans toutes les situations aérologiques",point:-6},{choice:"il est recommandé d'avoir l'accélérateur au pied en cas de phase parachutage",point:3},{choice:"je n'ai plus d'autre choix que de piloter les grandes lignes de ma trajectoire à la sellette",point:3}]},{id:53,question:"Une couche de stratus de 40m d'épaisseur est située sous le décollage",choices:[{choice:"s'il y a un vent suffisant pour faire du vol de pente, vous décollez et vous restez au dessus de la couche",point:-6},{choice:"40m c'est peu ; vous décollez",point:-6},{choice:"vous attendez en espérant que la nuée se dégage sinon vous ne décollez pas",point:6}]},{id:54,question:"Les déclarations d'accident doivent être envoyées",choices:[{choice:"sous les 15 jours à l'assureur",point:-6},{choice:"sous 5 jours à la F.F.V.L. qui transmet à l'assureur",point:6},{choice:"sous les 15 jours à la FFVL",point:-6}]},{id:55,question:"La traînée de forme de l'ensemble aile+pilote est la traînée",choices:[{choice:"de pression due au pilote, aux suspentes et à l'aile",point:6},{choice:"due aux irrégularités de surface de l'aile",point:-6},{choice:"due aux tourbillons marginaux",point:-6}]},{id:56,question:"Les ondes de ressaut se développent lorsque le vent",choices:[{choice:"est faible en altitude et la masse d'air très instable",point:-6},{choice:"est de plus en plus fort en altitude et la masse d'air stable",point:6},{choice:"est fort près du sol et la masse d'air très instable",point:-6}]},{id:57,question:"Le taux de chute minimum",choices:[{choice:"correspond à un angle d'incidence plus petit que celui de vitesse-max",point:-6},{choice:"correspond à un angle d'incidence plus grand que celui de finesse-max",point:3},{choice:"peut s'utiliser en permanence sans risque en ascendance",point:-6},{choice:"est le régime de vol utile le plus proche du décrochage",point:3}]},{id:58,question:"Un variomètre indique",choices:[{choice:"la vitesse verticale de votre aile par rapport au sol",point:6},{choice:"la hauteur de votre aile",point:-6},{choice:"la direction de votre aile par rapport au nord",point:-6}]},{id:59,question:"Priorités en aéronefs non motorisés",choices:[{choice:"les P.U.L. sont prioritaires sur les ensembles remorqués (avion+planeur, U.L.M.+delta, avion ou U.L.M.+banderole)",point:6},{choice:"les ballons doivent la priorité aux P.U.L",point:-6},{choice:"les P.U.L. biplace sont prioritaires sur les P.U.L monoplace",point:-3}]},{id:60,question:"La cause de formation des nuages, c'est",choices:[{choice:"une forte descendance",point:-6},{choice:"Le réchauffement de l'air ascendant",point:-6},{choice:"le refroidissement de l'air jusqu'à son niveau de condensation",point:6}]},{id:61,question:"En vol, la diminution importante du vent relatif a pour conséquence",choices:[{choice:"une abattée dont l'amplitude peut exiger d'être contrôlée",point:2},{choice:"l'affaiblissement du bruit du vent dans les oreilles",point:2},{choice:"de vous obliger à lever vos mains pour favoriser la reprise de vitesse",point:2},{choice:"de vous obliger à abaisser vos mains pour garder le contact avec l'aile",point:-6}]},{id:62,question:"La traînée sur l'ensemble aile+pilote",choices:[{choice:"se divise en traînée de forme + traînée induite + traînée de frottement",point:6},{choice:"est indépendante de la vitesse-air",point:-6},{choice:"est indépendante de la forme de l'aile",point:-6}]},{id:63,question:"Les relations entre accompagnateur fédéral et écoles de vol libre",choices:[{choice:"sont à éviter absolument",point:-6},{choice:"pourraient nuire à la bonne évolution de l'activité",point:-6},{choice:"sont indispensables dans l'intérêt des pratiquants",point:3},{choice:"améliorent et facilitent le rôle de chacun pour la progression du nouveau pilote",point:3}]},{id:64,question:"La vapeur d'eau",choices:[{choice:"est visible (fines gouttelettes d'eau)",point:-6},{choice:"est invisible",point:4},{choice:"existe uniquement dans l'air maritime",point:-6},{choice:"existe partout dans la troposphère",point:2}]},{id:65,question:"Un thermique pur ou bleu",choices:[{choice:"permet un gain minimum de 1000m",point:-6},{choice:"ne se forme que dans une couche d'air à tendance stable",point:-6},{choice:"est dangereux pour nos ailes",point:-6},{choice:"n'est pas coiffé par un cumulus",point:6}]},{id:66,question:"Dans l'hémisphère nord lorsque vous êtes face au vent, vous avez",choices:[{choice:"les hautes pressions dans votre dos",point:-6},{choice:"les hautes pression à droite",point:-6},{choice:"les basses pressions à droite",point:6}]},{id:67,question:"Vous empruntez l'aile d'un pilote plus lourd que vous",choices:[{choice:"elle sera plus maniable",point:-6},{choice:"Les actions aux commandes seront moins efficaces",point:2},{choice:"elle se refermera plus facilement dans les turbulences",point:2},{choice:"le taux de chute sera légèrement plus favorable",point:2}]},{id:68,question:"Le meilleur profil d'un terrain de décollage est",choices:[{choice:"tel que vous pourrez facilement vous arrêter en cas de problèmes au gonflage",point:2},{choice:"tel que vous pourrez vous éloigner assez vite du relief",point:2},{choice:"concave",point:-6},{choice:"convexe",point:2}]},{id:69,question:"L'assemblée générale d'une association loi 1901 affiliée à la F.F.V.L. (votre club)",choices:[{choice:"est obligatoire tous les ans",point:6},{choice:"est obligatoire tous les 2 ans",point:-6},{choice:"n'est obligatoire qu'à la fondation du club",point:-6}]},{id:70,question:"L'altimètre",choices:[{choice:"ne subit pas l'influence des variations de température",point:-6},{choice:"utilise une échelle d'altitude calibrée pour des valeurs météo moyennes (atmosphère standard)",point:3},{choice:"indique la vitesse à laquelle varie la pression",point:-6},{choice:"même en parfait état est susceptible d'afficher pour une altitude donnée des valeurs qui peuvent varier selon l'heure et le lieu",point:3}]},{id:71,question:"Se relever dans la sellette en finale augmente",choices:[{choice:"la traînée induite",point:-6},{choice:"la traînée d'effet de sol",point:-6},{choice:"la traînée de forme",point:6}]},{id:72,question:"Voler en local d'un atterrissage, c'est",choices:[{choice:"avoir une autonomie qui permet de le rejoindre à tout moment quelles que soient les conditions aérologiques rencontrées",point:6},{choice:"rester sur un site habituel sans faire de distance",point:-6}]},{id:73,question:"Une aile arrive en face de vous, vous effectuez",choices:[{choice:"un virage à droite (l'autre dégage aussi à droite)",point:6},{choice:"une mise en descente (l'autre reste au même niveau)",point:-6},{choice:"un virage à gauche (l'autre dégage aussi à gauche)",point:-6}]},{id:74,question:"Le container du parachute de secours",choices:[{choice:"doit être verrouillé par un nœud",point:-6},{choice:"peut être positionné sous la planche d'assise de la sellette",point:2},{choice:"peut être positionné en position ventrale",point:2},{choice:"peut être positionné au dos de la sellette",point:2}]},{id:75,question:"La formation d'onde de ressaut est favorisée par",choices:[{choice:"une atmosphère humide",point:-6},{choice:"une atmosphère instable",point:-6},{choice:"une atmosphère stable",point:6}]},{id:76,question:"Une aile en vol stabilisé dans une ascendance",choices:[{choice:"descend par rapport à l'air ascendant",point:6},{choice:"monte à la même vitesse que l'air ascendant",point:-6},{choice:"monte par rapport à l'air ascendant",point:-6}]},{id:77,question:"Une école non reconnue par la F.F.V.L.",choices:[{choice:"peut attester le brevet de pilote confirmé",point:-6},{choice:"peut enseigner si les moniteurs possèdent les diplômes requis",point:6},{choice:"peut attester la partie pratique du brevet de pilote",point:-6}]},{id:78,question:"Au décollage, avec 20 km/h de face, vous pouvez gonfler votre voile",choices:[{choice:"dos à l'aile en vous attendant à devoir résister en reculant pour contrôler la vitesse d'ascension du profil",point:3},{choice:"face à l'aile en ordonnant à une aide extérieure de résister avec vous à la traction de votre voile",point:-6},{choice:"face à l'aile en vous attendant à devoir résister en avançant pour contrôler la vitesse d'ascension du profil",point:3},{choice:"dos à l'aile en vous préparant à mettre beaucoup d'énergie pour contrecarrer la force du vent",point:-6}]},{id:79,question:"Le vent météo",choices:[{choice:"s'affaiblit lorsque les isobares se resserrent",point:-6},{choice:"se renforce lorsque les isobares se resserrent",point:6},{choice:"n'a rien à voir avec l'espacement des lignes isobares",point:-6}]},{id:80,question:"Dans une atmosphère à tendance instable",choices:[{choice:"les cumulus ont tendance à se développer",point:3},{choice:"les stratus ont tendance à se développer",point:-6},{choice:"la température décroît rapidement quand on s'élève en altitude",point:3},{choice:"il y a peu d'ascendances",point:-6}]},{id:81,question:"Pour réduire le risque de fermeture en parapente, il faudra",choices:[{choice:"débrider l'aile ou la demi aile concernée",point:-6},{choice:"brider l'aile ou la demi aile concernée",point:3},{choice:"diminuer l'incidence",point:-6},{choice:"augmenter l'incidence",point:3}]},{id:82,question:"30 km/h de vent de face au décollage ; vous êtes seul",choices:[{choice:"un pilote expérimenté peut, sur un site adapté, décoller en gonflant dos au vent",point:-6},{choice:"vous essayez de gonfler car ça partira tout seul sans avoir besoin de courir",point:-6},{choice:"c'est trop ; vous vous abstenez",point:6}]},{id:83,question:"Types de fronts possibles dans une perturbation",choices:[{choice:"tempéré",point:-6},{choice:"chaud",point:2},{choice:"occlus",point:2},{choice:"froid",point:2}]},{id:84,question:"L'allongement d'une aile est égale au carré",choices:[{choice:"de l'envergure divisé par la surface",point:6},{choice:"de la surface divisé par l'envergure",point:-6},{choice:"de la corde divisé par la surface",point:-6}]},{id:85,question:"La finesse-air est le rapport",choices:[{choice:"distance parcourue horizontalement sur distance parcourue verticalement",point:-6},{choice:"portance sur traînée",point:3},{choice:"vitesse-air horizontale sur vitesse-air verticale",point:3},{choice:"traînée sur portance",point:-6}]},{id:86,question:"L'effet pendulaire spécifique au parapente",choices:[{choice:"peut être la cause d'amples mouvements de tangage et de roulis",point:2},{choice:"est une priorité en pilotage pour la sécurité du vol en parapente",point:2},{choice:"génère des mouvements de lacet",point:-6},{choice:"est produit par la différence de vitesse entre le pilote et sa voile",point:2}]},{id:87,question:"Vous vous posez en catastrophe dans un champ de blé non fauché",choices:[{choice:"vous êtes dans votre tort et vous devez régler le prix sur place",point:-6},{choice:"vous allez vous excuser auprès du cultivateur",point:3},{choice:"vous estimez les dégâts et vous le dédommagez immédiatement",point:-6},{choice:"vous demandez au cultivateur d'estimer les dégâts et vous faites une déclaration à l'assureur de la F.F.V.L.",point:3}]},{id:88,question:"Les signes distinctifs du Cumulonimbus et du Nimbostratus sont",choices:[{choice:"le Ns est accompagné d'un orage et le Cb d'un halo",point:-6},{choice:"le Ns donne des averses violentes, le Cb de la pluie continue",point:-6},{choice:"le Ns donne de la pluie continue et le Cb des pluies orageuses, des éclairs et des vents forts tourbillonnants",point:6}]},{id:89,question:"Le vol de pente nécessite",choices:[{choice:"d'être habitué aux effets de dérive imposés par le vent",point:2},{choice:"une observation constante de l'évolution du vent",point:2},{choice:"une maîtrise parfaite de sa trajectoire",point:2}]},{id:90,question:"Peut on voler dans les ZIT mentionnées sur les cartes aéronautiques ?",choices:[{choice:"Il suffit de téléphoner au numéro mentionné pour savoir si l'on peut la traverser",point:-6},{choice:"Il est interdit de pénétrer le volume des ZIT mentionnées sur les cartes aéronautiques",point:6},{choice:"Il est uniquement possible de pénétrer en week-end et jours fériés : interdit en semaine",point:-6}]},{id:91,question:"En situation de fœhn on observe",choices:[{choice:"des turbulences dangereuses",point:3},{choice:"des nuages dérivant avec le vent",point:-6},{choice:"un assèchement de la masse d'air sous le vent des reliefs",point:3}]},{id:92,question:"Sur la polaire des vitesses, les régimes de vol de croisière correspondent",choices:[{choice:"aux incidences inférieures à l'incidence du taux de chute mini",point:6},{choice:"aux incidences supérieures à l'incidence du taux de chute mini",point:-6}]},{id:93,question:"Le centrage d'une aile",choices:[{choice:"est équilibré lorsque le centre de poussée et le centre de gravité sont alignés verticalement sur corde",point:4},{choice:"s'exprime en degrés",point:-6},{choice:"s'exprime en pourcentage",point:2}]},{id:94,question:"Vous êtes dans une masse d'air descendante, la finesse-sol",choices:[{choice:"reste la même",point:-6},{choice:"est améliorée",point:-6},{choice:"est dégradée",point:6}]},{id:95,question:"L'accompagnateur fédéral utilise sa radio",choices:[{choice:"pour guider les pilotes qu'il accompagne tout le long du vol",point:-6},{choice:"uniquement pour les guider au décollage",point:-3},{choice:"comme n'importe quel pilote, sans plus",point:6},{choice:"uniquement pour les guider à l'atterrissage",point:-3}]},{id:96,question:"Le brouillard d'advection se forme",choices:[{choice:"sans vent",point:-6},{choice:"lorsque le sol se refroidit par nuit claire",point:-6},{choice:"lors de l'arrivée d'une masse d'air chaude sur un sol froid",point:6}]},{id:97,question:"Un front froid",choices:[{choice:"est sécurisant (air froid = air stable)",point:-6},{choice:"peut provoquer des coups de vent",point:2},{choice:"peut donner lieu à de fortes précipitations et turbulences",point:4},{choice:"donne peu de vent",point:-6}]},{id:98,question:"En vol si vous ressentez des turbulences",choices:[{choice:"vous les contrez pour conserver votre cap et veillez à conserver de la vitesse",point:2},{choice:"vous restez attentifs aux informations que vous procurent vos commandes",point:2},{choice:"vous pilotez de manière à amortir en priorité les mouvements pendulaires de l'aile",point:2},{choice:"vous restez bras hauts",point:-6}]},{id:99,question:"Une aile vole face au vent; elle avance par rapport au sol ; le vent est",choices:[{choice:"moins fort que la vitesse/air de l'aile",point:6},{choice:"on ne peut pas savoir",point:-6},{choice:"plus fort que la vitesse/air de l'aile",point:-6}]},{id:100,question:"Le décrochage a lieu en général",choices:[{choice:"à une vitesse inférieure à celle du taux de chute mini",point:6},{choice:"à la vitesse de taux de chute mini",point:-6},{choice:"à une vitesse supérieure à celle du taux de chute mini",point:-3}]},{id:101,question:"Le choix d'une voile est guidé par",choices:[{choice:"son coût abaissé par l'absence de contrôle technique",point:-6},{choice:"le niveau du pilote (fiche de progression)",point:3},{choice:"la catégorie de la voile",point:3},{choice:"le site principalement fréquenté",point:0}]},{id:102,question:"La qualification d'accompagnateur fédéral",choices:[{choice:"est un produit fédéral visant à concurrencer les écoles professionnelles",point:-6},{choice:"s'adresse à des bénévoles et n'attribue aucune prérogative pour l'enseignement du vol libre",point:3},{choice:"permet de bénéficier d'allègements de formation du diplôme d'Etat (DEJEPS)",point:-6},{choice:"est un produit fédéral permettant aux club de mieux accueillir et aider les nouveaux pilotes",point:3}]},{id:103,question:"Le brouillard de rayonnement se forme",choices:[{choice:"sans vent ou par vent très faible",point:2},{choice:"lorsque le sol se refroidit par une nuit claire",point:4},{choice:"lors de l'arrivée d'une masse d'air chaude sur un sol froid",point:-6}]},{id:104,question:"Une confluence se rencontre habituellement",choices:[{choice:"au sommet d'une crête entre 2 vallées alimentées chacune par une brise",point:2},{choice:"entre une brise et un vent météo",point:2},{choice:"le long d'un front de brise de mer",point:2}]},{id:105,question:"La surface d'un parapente est généralement donnée par",choices:[{choice:"la projection de la voile gonflée sur un plan",point:3},{choice:"la surface de l'intrados posé à plat",point:3},{choice:"l'envergure multiplié par l'épaisseur du profil",point:-6}]},{id:106,question:"Dans un espace aérien non contrôlé et au dessus de 900 m mer ou 300 m sol en montagne, vous devez avoir",choices:[{choice:"une visibilité de 1500 mètres et rester hors des nuages",point:-6},{choice:"une visibilité de 5 km sous le FL100, 8 km au-dessus et un espacement par rapport aux nuages de 300m verticalement et 1500m horizontalement",point:6},{choice:"une visibilité de 8 km et rester hors des nuages",point:-6}]},{id:107,question:"La portance et la traînée d'une aile sont fonctions, entre autres, de",choices:[{choice:"la vitesse-sol",point:-6},{choice:"la vitesse du vent météo",point:-6},{choice:"la vitesse-air de l'aile",point:6}]},{id:108,question:"Dans un espace aérien non contrôlé et au dessous de 900 m mer et 300 m sol en montagne, la visibilité minimale doit être de",choices:[{choice:"300 mètres",point:-6},{choice:"8000 mètres",point:-6},{choice:"1500 mètres",point:6}]},{id:109,question:"Par une belle journée d'ascendances où des orages sont annoncés, il faut s'inquiéter si",choices:[{choice:"le ciel se couvre rapidement",point:2},{choice:"l'ombre des nuages au sol grandit rapidement",point:2},{choice:"ça monte partout",point:2}]},{id:110,question:"Un vent du 225° est un vent",choices:[{choice:"provenant du cap 225°",point:3},{choice:"soufflant vers le cap 225°",point:-3},{choice:"soufflant vers le sud-ouest",point:-3},{choice:"soufflant vers le nord-est",point:3}]},{id:111,question:"Un thalweg est",choices:[{choice:"un axe de basses pressions",point:6},{choice:"une zone où la pression atmosphérique varie peu",point:-6},{choice:"un axe de hautes pressions",point:-6}]},{id:112,question:"Pour une même aile, un fort accroissement de la charge alaire entraîne une augmentation",choices:[{choice:"du taux de chute",point:2},{choice:"des déformations de l'aile",point:2},{choice:"de la vitesse horizontale",point:2}]},{id:113,question:"Votre voile se replie brusquement côté relief",choices:[{choice:"vous infléchissez energiquement votre trajectoire vers la vallée malgré la demi aile fermée",point:-6},{choice:"vous contrez commande + sellette pour garder votre cap",point:6},{choice:"vous forcez sa réouverture avec un abaissement ample du frein côté fermé",point:-3}]},{id:114,question:"Le calage d'une aile de parapente",choices:[{choice:"peut être modifié par le réglage de la longueur des freins",point:-6},{choice:"est déterminé par la longueur de chaque suspente",point:2},{choice:"peut être fortement modifié par le vieillissement du suspentage",point:2},{choice:"est modifié par une action sur les trims ou l'accélérateur",point:2}]},{id:115,question:"Vous empruntez l'aile d'un pilote plus léger que vous",choices:[{choice:"les réactions de l'aile lors de fermetures seront plus vives",point:3},{choice:"votre vitesse-max sera plus faible",point:-6},{choice:"elle se refermera plus facilement dans les turbulences",point:-6},{choice:"elle se refermera plus rarement dans les turbulences",point:3}]},{id:116,question:"Lors d'un atterrissage en campagne, un pilote breveté, licencié, détruit le pare-brise d'une voiture; c'est",choices:[{choice:"la R.C. du propriétaire de la voiture qui doit rembourser",point:-6},{choice:"le propriétaire de la voiture qui doit payer",point:-6},{choice:"au pilote de payer les dégâts",point:-6},{choice:"la R.C. du pilote qui remboursera",point:6}]},{id:117,question:"On appelle charge alaire, le rapport",choices:[{choice:"poids total (aile+pilote) sur surface de l'aile",point:6},{choice:"envergure au carré sur surface de l'aile",point:-6},{choice:"poids du pilote sur surface de l'aile",point:-6},{choice:"surface de l'aile sur poids total (aile+pilote)",point:-6}]},{id:118,question:"L'effet girouette, c'est la conséquence d'une rotation autour de l'axe de",choices:[{choice:"tangage",point:-6},{choice:"roulis",point:-6},{choice:"lacet",point:6}]},{id:119,question:"Quelles règles dois-je respecter pour survoler une manifestation entrainant un grand rassemblement de personnes ?",choices:[{choice:"A minima, et sauf restrictions particulières, 300m au dessus de l'obstacle le plus élevé dans un rayon de 600m autour de l'aéronef",point:6},{choice:"150m minimum pour pouvoir dégager si besoin",point:-6},{choice:"Pas de minimum en PUL, mais ne pas mettre en danger les biens et les personnes au sol",point:-6}]},{id:120,question:`Aux "oreilles", vous décidez d'utiliser l'accélérateur, cela`,choices:[{choice:"peut être une parade au risque de parachutale",point:3},{choice:"augmente l'incidence",point:-6},{choice:"permet d'augmenter encore plus votre taux de chute",point:3},{choice:"rend l'aile plus stable en roulis",point:-6}]},{id:121,question:"En vol de pente, vous engagez les virages",choices:[{choice:"du côté opposé au relief",point:6},{choice:"du côté de l'aile qui se soulève",point:-6},{choice:"du côté du relief",point:-6}]},{id:122,question:"Le point d'arrêt d'un profil",choices:[{choice:"est la zone où dépression et surpression s'arrêtent",point:-6},{choice:"se déplace en fonction de l'incidence",point:2},{choice:"est le point où la pression statique de l'air est maximale",point:2},{choice:"sépare les écoulements d'intrados et d'extrados",point:2}]},{id:123,question:"Lors du passage d'un front, l'air chaud",choices:[{choice:"soulève l'air froid",point:-6},{choice:"peut être refoulé vers le bas ou soulevé selon la situation",point:-6},{choice:"est soulevé",point:6}]},{id:124,question:"Je me ferai probablement plus plaisir avec une aile",choices:[{choice:"aux performances maximum, mais difficile à piloter pour mon niveau",point:-6},{choice:"que je maîtrise bien aux performances honnêtes",point:6},{choice:"qui gagne en compétition, quel que soit mon niveau",point:-6}]},{id:125,question:"Parmi les nuages ci-dessous, certains produisent généralement des précipitations",choices:[{choice:"nimbostratus",point:3},{choice:"cumulonimbus",point:3},{choice:"cumulus",point:-6}]},{id:126,question:"Pour amener une particule d'air à saturation en humidité, il faut",choices:[{choice:"diminuer sa température",point:6},{choice:"augmenter sa température",point:-6},{choice:"abaisser son altitude",point:-6}]},{id:127,question:"Des commandes réglées trop tendues",choices:[{choice:"peuvent auto brider le bord de fuite lors de l'utilisation de l'accélérateur",point:2},{choice:"créent un risque supplémentaire de phase parachutale",point:2},{choice:"n'ont rien à voir avec les cascades d'incidents",point:-6},{choice:"peuvent empêcher la montée de la voile",point:2}]},{id:128,question:"Les actions de l'accompagnateur fédéral se font auprès",choices:[{choice:"de pilotes licenciés, au minimum fin de niveau vert ayant validés le brevet initial",point:6},{choice:"de pilotes de bon niveau non licenciés",point:-6},{choice:"d'accompagnateurs de club entre eux uniquement",point:-6},{choice:"de pilotes brevetés assurés",point:0}]},{id:129,question:"La finesse-sol",choices:[{choice:"augmente par vent arrière",point:6},{choice:"augmente par vent de face",point:-6},{choice:"diminue par vent arrière",point:-6}]},{id:130,question:"La norme CEN E 926-1 et 2",choices:[{choice:"classe les parapentes en 4 niveaux d'accès dont le plus accessible est noté D",point:-6},{choice:"attribue les lettres A, B, C ou D à 28 manœuvres réalisées en vol par des pilotes test",point:2},{choice:"sépare les parapentes en 4 niveaux de comportements en vol",point:2},{choice:"applique des tests de résistance à 8G, au sol, derrière un véhicule",point:2}]},{id:131,question:"Pour décoller en sécurité, il est préférable de choisir une pente",choices:[{choice:"convexe et progressive",point:3},{choice:"concave suivie d'une cassure nette",point:-6},{choice:"dégagée d'obstacles",point:3}]},{id:132,question:"Un allongement important est facteur",choices:[{choice:"de performance",point:6},{choice:"d'instabilité",point:-3},{choice:"d'effilement",point:-6}]},{id:133,question:"Juste avant le sommet d'une ressource importante",choices:[{choice:"l'effet pendulaire préjuge de l'arrivée d'une abattée",point:2},{choice:"la vitesse-air parvient à un minimum",point:2},{choice:"le facteur de charge est inférieur à",point:12},{choice:"l'assiette est à piquer",point:-6}]},{id:134,question:"On peut rencontrer des turbulences dangereuses pour le vol libre dans les phénomènes observés suivant",choices:[{choice:"à l'interface d'une couche d'inversion recouvrant une masse d'air générant des ascendances",point:3},{choice:"stratus",point:-6},{choice:"rotors d'onde de ressaut",point:3}]},{id:135,question:"Lors du passage d'un front chaud",choices:[{choice:"les pluies sont continues",point:3},{choice:"l'air est très humide et le système nuageux important",point:3},{choice:"les pluies sont intermittentes et violentes",point:-6}]},{id:136,question:"Dans un virage, l'aile s'incline principalement grâce à un mouvement de",choices:[{choice:"roulis",point:6},{choice:"lacet",point:-3},{choice:"tangage",point:-6}]},{id:137,question:"Dans une masse d'air sans nuages, la température est de 15°C au sol et de 12°C 500 mètres au dessus. Cette tranche d'air est",choices:[{choice:"plutôt stable",point:6},{choice:"plutôt instable",point:-6},{choice:"plutôt sélectivement instable",point:-6}]},{id:138,question:"Quelle est l'altitude maximale absolue possible en vol libre.",choices:[{choice:"Le FL 100 ou 1000ft surface en haute montagne",point:-6},{choice:"Le FL 195, dans certaines LTA E Alpes ou Pyrénées",point:6},{choice:"Le FL 115 soit environ 3500m",point:-6}]},{id:139,question:"Vous rentrez dans un thermique et engagez un 360°. Après 90° de virage le variomètre devient négatif",choices:[{choice:"vous continuez le virage jusqu'à 270° puis reprenez une ligne droite pour retrouver l'ascendance",point:3},{choice:"vous inversez le sens du virage",point:3},{choice:"vous diminuez l'inclinaison",point:-6}]},{id:140,question:"Autour d'un profil d'aile, l'écoulement de l'air peut être",choices:[{choice:"résonnant",point:-6},{choice:"décollé",point:2},{choice:"laminaire",point:2},{choice:"turbulent",point:2}]},{id:141,question:"J'accrois les risques",choices:[{choice:"énormément avec la fatigue et/ou les problèmes (cœur, santé, travail, etc.)",point:4},{choice:"pas du tout, je suis en bonne forme physique et psychique",point:0},{choice:"raisonnablement en introduisant une seule nouveauté à la fois",point:2},{choice:"un peu avec la fatigue",point:-6}]},{id:142,question:"Les règles de vol obligent chaque pilote",choices:[{choice:"à dépasser une aile plus lente par la gauche",point:-6},{choice:"à respecter une distance suffisante pour prévenir les abordages",point:3},{choice:"à dégager par la droite en cas de croisement à la même altitude",point:3}]},{id:143,question:"En vol une turbulence ferme brutalement mon aile ; je me sens tomber à droite dans ma sellette",choices:[{choice:"j'utilise mon frein gauche de manière à ralentir un départ en rotation",point:2},{choice:"je résiste au déséquilibre en transférant mon poids à gauche",point:2},{choice:"j'actionne immédiatement ma main droite avec un geste ample et profond pour forcer la réouverture de l'aile",point:-6},{choice:"je regarde mon aile pour évaluer la situation et son évolution",point:2}]},{id:144,question:"A quoi correspondent les valeurs ASFC et AGL, AMSL ?",choices:[{choice:"ASFC et AGL = hauteur sol, AMSL = altitude par rapport au niveau de la mer",point:6},{choice:"Toutes ces valeurs sont variables en fonction de la pression atmosphérique",point:-6},{choice:"Elles expriment les hauteurs et altitudes en mètres à respecter",point:-6}]},{id:145,question:"Le vent de fœhn est caractérisé par",choices:[{choice:"un nuage orographique sur le relief au vent",point:2},{choice:"une descente d'air chaud, sec et très turbulent sous le vent du relief",point:4},{choice:"un refroidissement de la masse d'air sous le vent du relief",point:-6}]},{id:146,question:"Votre voile neuve vire systématiquement à droite, drisses de freins détendues",choices:[{choice:"vous portez votre poids sur votre fesse gauche et vérifiez si une déviation de la trajectoire équivalente du côté opposé se produit",point:3},{choice:"vous tendez d'avantage le cuissard droit",point:-6},{choice:"une fois posé vous décalez le niveau des élévateurs droits sur le harnais",point:-6},{choice:"vous contactez le revendeur pour un contrôle en usine",point:3}]},{id:147,question:"On risque de rencontrer une zone de cisaillement",choices:[{choice:"dans une confluence",point:2},{choice:"en traversant une couche d'inversion",point:2},{choice:"en entrée et sortie de thermique",point:2}]},{id:148,question:"La chaleur se propage par",choices:[{choice:"rayonnement",point:2},{choice:"conduction",point:2},{choice:"convection",point:2}]},{id:149,question:"L'effet girouette remet l'aile",choices:[{choice:"en vol face à son vent relatif",point:3},{choice:"au sol, à l'arrêt, face au vent instantané",point:3},{choice:"en vol face au vent météo",point:-6},{choice:"au sol face au vent moyen",point:-6}]},{id:150,question:"Lorsqu'une particule atmosphérique non saturée s'élève sans échanger de chaleur avec l'air ambiant, sa température",choices:[{choice:"augmente de 1° par 100m",point:-6},{choice:"reste constante",point:-6},{choice:"diminue de 1° par 100m",point:6}]},{id:151,question:"En air calme, si l'on compare deux régimes de vol stabilisé, l'assiette",choices:[{choice:"augmente lorsque l'angle d'incidence augmente",point:3},{choice:"augmente lorsque la vitesse augmente",point:-6},{choice:"diminue lorsque la vitesse diminue",point:-6},{choice:"diminue lorsque l'angle d'incidence diminue",point:3}]},{id:152,question:"Le niveau d'accessibilité d'une voile dépend",choices:[{choice:"des résultats aux tests",point:1},{choice:"de la charge alaire appliquée sur les modèles dont la fourchette de poids est très large",point:2},{choice:"du niveau technique du pilote",point:2},{choice:"des indications du constructeur",point:1}]},{id:153,question:"Lors de la réception d'une aile neuve, vous devez",choices:[{choice:"vérifier les performances et les comportements de l'aile sur un site grand vol connu et en conditions aérologiques calmes",point:3},{choice:"faire quelques essais en pente école pour vérifier les freins, le suspentage et le ressenti de la prise en charge pendant la course",point:3},{choice:"raccourcir les freins pour légèrement diminuer sa vitesse max (bras haut)",point:-6}]},{id:154,question:"La traînée de profil se compose de",choices:[{choice:"la traînée induite",point:-6},{choice:"la traînée de forme",point:3},{choice:"la traînée de frottement",point:3}]},{id:155,question:"Après un accident, la déclaration doit être établie et envoyée à la F.F.V.L.",choices:[{choice:"dans tous les cas par le président du club",point:-6},{choice:"par le pilote breveté ou son entourage",point:3},{choice:"par le moniteur pour un de ses élèves",point:3},{choice:"par la gendarmerie",point:-6}]},{id:156,question:"Si la charge alaire est réduite, l'aile",choices:[{choice:"est moins manœuvrante",point:3},{choice:"a un taux de chute moins important",point:3},{choice:"a une finesse plus élevée",point:-3},{choice:"décolle à une plus grande vitesse",point:-6}]},{id:157,question:"Un halo autour de la lune ou du soleil est souvent",choices:[{choice:"le signe d'une dégradation prochaine du temps",point:2},{choice:"le signe de la présence d'altocumulus",point:-6},{choice:"le signe de la présence de cirrostratus",point:4},{choice:"caractéristique du beau temps qui va durer",point:-6}]},{id:158,question:"Les tendances générales d'un front froid sont",choices:[{choice:"aggravation rapide avec pluie, orages, vents forts, turbulences",point:6},{choice:"temps brumeux couvert avec bruine",point:-6},{choice:"aggravation lente avec pluie modérée",point:-6}]},{id:159,question:"A l'atterrissage",choices:[{choice:"le dernier virage peut se prévoir à 5m/sol et sur 180°",point:-6},{choice:"il faut ralentir sa vitesse très tôt",point:-6},{choice:"il est déconseillé de faire des virages serrés près du sol à cause de l'augmentation du taux de chute",point:3},{choice:"il faut augmenter la vitesse en finale bien avant le freinage",point:3}]},{id:160,question:"En espace de classe E, puis-je néanmoins croiser un trafic IFR ?",choices:[{choice:"Oui, et le trafic IFR est donc prioritaire",point:-6},{choice:"Non, le trafic IFR n'évolue qu'en espaces classés D à minima",point:-6},{choice:"Oui, il est cependant tenu dans ce cas de respecter également les règles VFR",point:6}]},{id:161,question:"Le déclenchement des thermiques",choices:[{choice:"renforce les brises de pente et de vallée",point:4},{choice:"rend la brise de pente irrégulière",point:2},{choice:"permet d'exploiter la brise de pente loin du relief",point:-6}]},{id:162,question:"La finesse-sol est le rapport",choices:[{choice:"vitesse-sol horizontale sur vitesse-sol verticale",point:6},{choice:"vitesse de vol sur taux de chute",point:-3},{choice:"vitesse verticale sur vitesse horizontale",point:-6},{choice:"portance sur traînée",point:-3}]},{id:163,question:"Les isobares sur une carte météo montrent",choices:[{choice:"les niveaux de températures",point:-6},{choice:"les anticyclones et les dépressions",point:6},{choice:"les niveaux des risques de précipitation",point:-6}]},{id:164,question:"L'élève qui réussit son brevet de pilote fédéral",choices:[{choice:"est considéré par son moniteur et par la F.F.V.L. comme un pilote autonome sur sites",point:3},{choice:"peut voler sous sa propre responsabilité sans contrevenir aux règlements fédéraux",point:3},{choice:"peut estimer que sa progression est terminée",point:-6}]},{id:165,question:"Sur une aile en vol, il y a plusieurs types de traînées de natures bien distinctes",choices:[{choice:"la traînée de frottement",point:2},{choice:"la traînée de forme",point:2},{choice:"la traînée induite",point:2}]},{id:166,question:"Vous venez d'acquérir une nouvelle aile, afin de mieux la connaître et comme vous avez un parachute de secours",choices:[{choice:"vous recherchez la phase parachutale",point:-6},{choice:"vous multipliez les vols dans des aérologies standards pour vous la rendre familière",point:3},{choice:"vous effectuez éventuellement une journée de stage en milieu aménagé",point:3},{choice:'après un peu de gain, vous réalisez quelques "360°" engagés afin de mesurer le taux de chute maximal',point:-6}]},{id:167,question:"Comment savoir si je peux franchir une limite d'espace aérien ?",choices:[{choice:"En téléphonant à la DGAC",point:-6},{choice:"Il suffit de voler à moins de 500ft (150m) sol, les autres aéronefs volant au dessus de cette limite",point:-6},{choice:"En me référant aux mentions concernant la nature et le volume de cet espace sur un document aéronautique à jour",point:6}]},{id:168,question:"Un vent de 20 Kt (nœuds) souffle à environ",choices:[{choice:"18 km/h",point:-6},{choice:"36 km/h",point:6},{choice:"20 km/h",point:-6}]},{id:169,question:"Vous volez à une vitesse-air de 35 km/h avec 10 km/h de vent arrière, votre vitesse-sol",choices:[{choice:"reste inchangée",point:-6},{choice:"est d'environ 45 km/h",point:6},{choice:"est d'environ 25 km/h",point:-6}]},{id:170,question:"Pour une sécurité maximale, le dépliage/repliage du parachute de secours doit être effectué",choices:[{choice:"au moins 1 fois par an",point:2},{choice:"à la fréquence des préconisations du constructeur",point:4},{choice:"il faut le laisser tel que l'a plié le revendeur",point:-6}]},{id:171,question:"A 4m/sol vous constatez que vous allez vous poser avec un vent de travers de 45°",choices:[{choice:"vous réalisez un virage pour vous replacer face au vent et freinerez une fois face au vent",point:-6},{choice:"vous ne vous inquiétez pas, vous arrondirez plus tôt et n'envisagez pas de virage",point:-6},{choice:"en utilisant la sellette vous veillez à ce que cet écart ne s'aggrave pas et vous vous préparez à arrondir normalement",point:6}]},{id:172,question:"Les anticyclones sont le siège",choices:[{choice:"d'un mouvement général ascendant des masses d'air",point:-6},{choice:"plutôt de vents forts",point:-6},{choice:"plutôt de vents faibles",point:2},{choice:"d'un mouvement général d'affaissement des masses d'air",point:4}]},{id:173,question:"Un nuage orographique",choices:[{choice:"est dû à une ascendance dynamique",point:3},{choice:"indique une absence de vent",point:-6},{choice:"est fixe par rapport au sol",point:3},{choice:"est dû à une ascendance thermique",point:-6}]},{id:174,question:"Le directeur technique d'une École Française de Vol Libre (EFVL) ou d'un Club-École Français de Vol Libre (CEFVL)",choices:[{choice:"atteste la partie pratique du brevet de pilote",point:3},{choice:"est responsable de toutes les activités pédagogiques de l'école",point:3},{choice:"délivre le brevet de pilote",point:-6}]},{id:175,question:"Le facteur de charge",choices:[{choice:"est égal à 1 en vol rectiligne stabilisé",point:2},{choice:"dépend du poids du pilote et des indications du constructeur",point:-6},{choice:"est supérieur à 1 pendant les virages équilibrés",point:2},{choice:"est inférieur à 1 quand on accélère en vol rectiligne",point:2}]},{id:176,question:"Le décrochage se produit lorsque",choices:[{choice:"la vitesse est trop forte",point:-6},{choice:"l'incidence est trop forte",point:6},{choice:"l'incidence est trop faible",point:-6}]},{id:177,question:"Vous approchez de la base d'un cumulus",choices:[{choice:"vous risquez d'être aspiré car l'ascendance peut se renforcer",point:3},{choice:"il n'y a jamais de risque d'aspiration",point:-6},{choice:"le risque est faible tant que le nuage n'est pas de type congestus ou nimbus",point:-6},{choice:"le danger est aggravé si la base est en dessous des plus hautes crêtes",point:3}]},{id:178,question:"Le parachute de secours",choices:[{choice:"doit être équipé d'aiguilles en plus du velcro",point:3},{choice:"ne peut pas s'ouvrir de manière intempestive",point:-6},{choice:"nécessite une visite prévol",point:3}]},{id:179,question:"Pour avancer de 4800m dans le plan horizontal, vous avez perdu 600m d'altitude ; votre finesse-sol est voisine de",choices:[{choice:"9",point:-6},{choice:"6",point:-6},{choice:"",point:86},{choice:"7",point:-6}]},{id:180,question:"La pression atmosphérique est due",choices:[{choice:"au poids de la colonne d'air située au dessus",point:6},{choice:"à la rotation de la terre sur elle-même",point:-6},{choice:"au réchauffement solaire",point:-6}]},{id:181,question:"En vol de pente, la priorité revient à l'aile qui",choices:[{choice:"est situé au vent du relief",point:-6},{choice:"à la pente à sa gauche",point:-6},{choice:"a la pente à sa droite",point:6},{choice:"est situé sous le vent du relief",point:-6}]},{id:182,question:"Lorsqu'un pilote exploite une bulle thermique pour gagner de l'altitude",choices:[{choice:"il descend continuellement à l'intérieur de la bulle",point:6},{choice:"il aborde la bulle vers sa partie inférieure et ressort au sommet",point:-6},{choice:"il s'élève à la même vitesse que la bulle",point:-6}]},{id:183,question:"Parmi les points suivants, certains améliorent la finesse",choices:[{choice:"profil optimisé pour minimiser la traînée de forme",point:3},{choice:"position debout du pilote",point:-6},{choice:"suspentes fines ou montants de trapèze profilés",point:3}]},{id:184,question:"La rotation de la terre dévie les vents vers leur",choices:[{choice:"gauche dans l'hémisphère nord",point:-6},{choice:"droite dans l'hémisphère sud",point:-6},{choice:"droite dans l'hémisphère nord",point:6}]},{id:185,question:"Où peut-on trouver les horaires d'activation des zones R ?",choices:[{choice:"Au dos de toutes les cartes IGN du SIA au 1/500 000",point:-6},{choice:"Dans le guide VFR édité par le SIA",point:-6},{choice:"Au dos des cartes au 1/250 000 et dans le complément aux cartes édité par le SIA",point:6}]},{id:186,question:"La finesse-sol",choices:[{choice:"ne varie jamais",point:-6},{choice:"est toujours inférieure à la finesse-air",point:-6},{choice:"est identique à la finesse-air dans une masse d'air immobile",point:6}]},{id:187,question:"Une École Française de Vol Libre (EFVL)",choices:[{choice:"signe annuellement une charte garantissant notamment le respect des règles d'enseignement édictées par la F.F.V.L.",point:2},{choice:"est une entreprise privée financièrement indépendante de la F.F.V.L.",point:2},{choice:"est une entreprise privée qui fait l'objet d'un suivi régulier de la part de la F.F.V.L.",point:2}]},{id:188,question:"La traîne d'une perturbation, c'est la zone",choices:[{choice:"d'air froid s'étendant à l'arrière du front froid",point:6},{choice:"d'air chaud compris entre le front chaud et le front froid",point:-6},{choice:"nuageuse très développée arrivant avec le front froid",point:-6}]},{id:189,question:"En soufflerie, lorsque l'angle d'incidence augmente à partir de 0°, la portance",choices:[{choice:"augmente progressivement jusqu'au décrochage",point:-6},{choice:"augmente, passe par un maximum, diminue puis s'effondre brusquement (décrochage)",point:6},{choice:"ne varie pratiquement pas",point:-6}]},{id:190,question:"Une fois que j'ai mis en œuvre les oreilles",choices:[{choice:"je suis sensible à l'éventuelle diminution du vent dans mes oreilles",point:2},{choice:"je peux utiliser l'accélérateur pour descendre encore plus vite",point:2},{choice:"je me donne la possibilité d'étager mon approche lors d'une présentation simultanée de plusieurs ailes à l'atterrissage",point:2},{choice:"je surveille mon aile en permanence pour m'assurer que les « oreilles » restent en place",point:-6}]},{id:191,question:"La restitution est un phénomène",choices:[{choice:"d'inversion des brises de vallée le soir",point:-6},{choice:"d'ascendances plutôt douces, le soir, sur des zones généralement peu propices pendant la journée",point:6},{choice:"d'inversion des brises de pente le soir",point:-6}]},{id:192,question:"L'extraction du parachute de secours et le retour au sol",choices:[{choice:"peuvent s'avérer problématiques dans bien des cas",point:3},{choice:"se passent toujours bien",point:-6},{choice:"sont une formalité et permettent donc un engagement plus important du pilote sous son aile",point:-6},{choice:"nécessitent une bonne information préalable",point:3}]},{id:193,question:"En finale, si la cible descend dans le champ de vision",choices:[{choice:"vous êtes long",point:6},{choice:"vous êtes court",point:-6},{choice:"vous devez ralentir au maximum",point:-6}]},{id:194,question:"Priorités entre P.U.L.",choices:[{choice:"delta et parapente doivent observer les mêmes règles de l'air",point:6},{choice:"le parapente doit la priorité au delta",point:-6},{choice:"le delta doit la priorité au parapente",point:-6}]},{id:195,question:"Un parachute de secours hémisphérique est",choices:[{choice:"un planeur ultra-léger",point:-6},{choice:"un frein aérodynamique",point:6},{choice:"une garantie à 100% de s'en sortir en cas d'accident",point:-6}]},{id:196,question:"En vol, le pilote peut anticiper",choices:[{choice:"l'imminence d'une fermeture du côté où sa commande durcit",point:-6},{choice:"l'arrivée prochaine d'une ressource lorsqu'il se sent « tomber vers l'avant »",point:2},{choice:"l'arrivée d'un mouvement de piqué lorsque sa vitesse diminue",point:2},{choice:"l'arrivée prochaine d'une abattée lorsqu'il se sent « tomber sur le dos »",point:2}]},{id:197,question:"La situation météo la plus favorable à la formation d'orages isolés est",choices:[{choice:"un anticyclone",point:-6},{choice:"une dépression",point:0},{choice:"un marais barométrique",point:6}]},{id:198,question:"Vous volez par fort vent arrière, cela implique",choices:[{choice:"une diminution de la Force Aérodynamique",point:-6},{choice:"une augmentation de l'incidence",point:-6},{choice:"une augmentation de la vitesse-sol",point:3},{choice:"une augmentation de la finesse-sol",point:3}]},{id:199,question:"Dans une atmosphère à tendance stable",choices:[{choice:"la température décroît doucement quand on s'élève en altitude",point:3},{choice:"la température décroît rapidement quand on s'élève en altitude",point:-6},{choice:"la structure de la masse d'air s'oppose au développement des ascendances",point:3},{choice:"il ne peut pas y avoir d'ascendances thermiques",point:-6}]},{id:200,question:"L'accompagnateur fédéral dans un club de plaine",choices:[{choice:"maîtrise les spécificités du treuil",point:3},{choice:"a les mêmes prérogatives que l'accompagnateur fédéral dans un club de montagne",point:3},{choice:"ne peut proposer de sorties montagnes",point:-6}]},{id:201,question:"A surface égale, un pilote plus léger aura",choices:[{choice:"une meilleure pénétration",point:-6},{choice:"une vitesse max plus faible",point:3},{choice:"une vitesse de décrochage identique",point:-6},{choice:"un taux de chute plus faible",point:3}]},{id:202,question:"Une dorsale est",choices:[{choice:"un axe de basses pressions",point:-6},{choice:"une zone où la pression atmosphérique varie peu",point:-6},{choice:"un axe de hautes pressions",point:6}]},{id:203,question:"Par vent soutenu, préalablement à un gonflage face à l'aile",choices:[{choice:"une traction solidement verrouillée des « C » ou des « D » permet une solution d'attente sûre",point:3},{choice:"j'ai pris mes commandes en main comme je l'aurais fais en étant dos à l'aile",point:3},{choice:"un pré gonflage ne s'impose pas",point:-6},{choice:"j'ai soigneusement trié mes suspentes et disposé mon aile au sol avant d'endosser ma sellette",point:0}]},{id:204,question:"La portance en vol rectiligne stabilisé est",choices:[{choice:"perpendiculaire à la trajectoire-air",point:3},{choice:"plus faible que le poids total aile+pilote",point:3},{choice:"constante quelle que soit la vitesse de l'aile",point:-6}]},{id:205,question:"Pour votre sécurité",choices:[{choice:"vous équipez votre sellette d'un kit de secours comprenant au minimum une ficelle résistante de 20m",point:2},{choice:"vous faites vérifier votre aile par le constructeur dès que vous constatez une paresse inhabituelle au gonflage",point:2},{choice:"vous faites vérifier votre aile par le constructeur dès que vous constatez un comportement inhabituel en virage",point:2}]},{id:206,question:"En atmosphère humide, les ascendances",choices:[{choice:"sont souvent matérialisées par des nuages",point:6},{choice:"ne sont généralement pas matérialisées",point:-6},{choice:"sont très faibles car l'atmosphère humide est à tendance stable",point:-6}]},{id:207,question:"La finesse-air maximale est",choices:[{choice:"une valeur qui dépend de la charge alaire",point:-6},{choice:"obtenue à une vitesse supérieure à celle du taux de chute mini",point:6},{choice:"obtenue à une incidence dépendant du vent météo",point:-6}]},{id:208,question:"Quel est le type de carte aéronautique le plus adapté pour le vol libre ?",choices:[{choice:"La carte au 1/250 000, si le secteur où j'évolue est couvert",point:6},{choice:"La carte au 1/1 000 000, car elle couvre tout l'espace aérien",point:-6},{choice:"La carte au 1/500 000 suffit amplement pour voler uniquement jusqu'au FL115",point:-6}]},{id:209,question:"Suis-je soumis aux mêmes règles si mon parapente ou delta est équipé d'un moteur ?",choices:[{choice:"Oui, sous réserve d'avoir une assurance complémentaire",point:-6},{choice:"Oui, sous réserve de n'utiliser le moteur que temporairement",point:-6},{choice:"Non, un delta ou un parapente équipé d'un moteur est soumis aux règles des ULM",point:6}]},{id:210,question:"En traversant une masse d'air turbulent, l'ensemble aile+pilote est soumis à des variations",choices:[{choice:"d'incidence",point:2},{choice:"de vitesse-air",point:2},{choice:"de Force Aérodynamique",point:2},{choice:"de masse",point:-6}]},{id:211,question:"Le phénomène de restitution se rencontre en général",choices:[{choice:"le soir",point:6},{choice:"au centre des vallées toute la journée",point:-6},{choice:"le matin au centre de la vallée",point:-6}]},{id:212,question:"Autour des zones de haute pression, les vents tournent",choices:[{choice:"dans le sens contraire des aiguilles d'une montre dans l'hémisphère nord",point:-6},{choice:"dans le sens des aiguilles d'une montre dans l'hémisphère nord",point:6},{choice:"dans le sens des aiguilles d'une montre dans l'hémisphère sud",point:-6}]},{id:213,question:"Vous gonflez symétriquement dos à l'aile avec un vent de travers droit",choices:[{choice:"votre demi aile droite se lève en premier",point:-3},{choice:"votre demi aile gauche se lève en premier",point:3},{choice:"pour réussir votre gonflage vous vous apprétez à freiner l'arrivée de la demie aile gauche en premier",point:3},{choice:"pour réussir votre gonflage vous vous apprêtez à freiner l'arrivée de la demie aile droite en premier",point:-3}]},{id:214,question:"La traînée totale d'un aéronef se divise en",choices:[{choice:"traînée de frottement",point:2},{choice:"traînée induite",point:2},{choice:"traînée de pression",point:2},{choice:"traînée dynamique",point:-6}]},{id:215,question:"En vol, la dureté de mes commandes",choices:[{choice:"dépend de la vitesse relative de chacune de mes demi ailes",point:2},{choice:"s'accroît avec l'augmentation de la vitesse",point:2},{choice:"faiblie avec l'augmentation de la vitesse",point:-6},{choice:"augmente lorsque je tire sur les freins",point:2}]},{id:216,question:"Vous faites les oreilles",choices:[{choice:"vent de face, votre finesse/sol augmente",point:-6},{choice:"ça n'abîme pas l'aile",point:0},{choice:"c'est un moyen de descente rapide qui peut doubler votre taux de chute",point:6},{choice:"vous augmentez votre finesse/air",point:-6}]},{id:217,question:"Le cône d'autonomie",choices:[{choice:"est une caractéristique de l'aile qui ne dépend pas du vent",point:-6},{choice:"a un axe plus ou moins penché par le vent",point:3},{choice:"correspond à l'ensemble des points les plus éloignés que l'aile peut atteindre en vol plané",point:3}]},{id:218,question:"Quel type de plan de vol sont tenus de déposer les pratiquants de vol libre",choices:[{choice:"Un plan de vol simplifié comprenant uniquement l'itinéraire prévu",point:-6},{choice:"Sauf cas très particulier, les pratiquants de vol libre ne sont pas tenus de déposer un plan de vol",point:6},{choice:"Un plan de vol simplifié comprenant les horaires et lieux de vol prévus",point:-6}]},{id:219,question:"Le variomètre de base mesure",choices:[{choice:"la composante verticale de la vitesse/sol de l'aile",point:6},{choice:"la composante verticale de la vitesse/air de l'aile",point:-6},{choice:"la vitesse du vent s'il est utilisé au sol",point:-6},{choice:"la vitesse ascensionnelle de la masse d'air dans un thermique",point:-6}]},{id:220,question:"Lors d'un décrochage",choices:[{choice:"la portance chute",point:2},{choice:"la traînée augmente fortement",point:4},{choice:"la portance augmente",point:-6},{choice:"la traînée diminue",point:-6}]},{id:221,question:"On appelle inversion de la température la situation suivante",choices:[{choice:"une couche d'air qui bloque le développement des ascendances",point:0},{choice:"une couche d'air froid qui est au dessus d'une couche d'air chaud",point:-6},{choice:"une couche d'air chaud qui est au dessus d'une couche d'air froid",point:6}]},{id:222,question:"La traînée d'une aile est",choices:[{choice:"indépendante de la vitesse-air",point:-6},{choice:"proportionnelle au carré de la vitesse-air",point:6},{choice:"proportionnelle au cube de la vitesse-air",point:-6},{choice:"proportionnelle à la vitesse-air",point:-6}]},{id:223,question:"La vitesse de votre appareil par rapport au sol est",choices:[{choice:"ne change jamais",point:-6},{choice:"plus élevée par vent de face",point:-6},{choice:"plus élevée par vent arrière",point:6}]},{id:224,question:"Lorsque 2 masses d'air de températures différentes se rencontrent",choices:[{choice:"elles se mélangent facilement",point:-6},{choice:"l'air le plus chaud s'élève au dessus de l'air froid",point:6},{choice:"l'air le plus chaud s'infiltre au dessous de l'air froid",point:-6}]},{id:225,question:"Parmi ces nuages, certains annoncent l'arrivée d'un front chaud",choices:[{choice:"altostratus",point:3},{choice:"cirrostratus",point:3},{choice:"cumulus",point:-6},{choice:"cumulonimbus",point:-6}]},{id:226,question:"La déclaration d'accident est nécessaire si",choices:[{choice:"l'aéronef est endommagé",point:-6},{choice:"quand il y a intervention des secours ou hospitalisation",point:3},{choice:"une tierce personne est blessée",point:3}]},{id:227,question:"Un thermique peut",choices:[{choice:"être dévié par le vent",point:2},{choice:"ne donner lieu à aucune matérialisation",point:2},{choice:"être matérialisé par un cumulus bourgeonnant",point:2},{choice:"être matérialisé par un voile de stratus",point:-6}]},{id:228,question:"Les rotors et les lenticulaires semblent fixes par rapport au sol car",choices:[{choice:"leur durée de vie est très brève",point:-6},{choice:"ils se forment à leur partie au vent et se désagrègent à leur partie sous le vent",point:6},{choice:"à leur niveau le vent est nul",point:-6}]},{id:229,question:"Sur une aile en vol rectiligne stabilisé, lorsque le pilote provoque un accroissement de l'incidence, transitoirement",choices:[{choice:"la vitesse sur trajectoire diminue",point:3},{choice:"la vitesse sur trajectoire augmente",point:-6},{choice:"la trajectoire s'incurve vers le bas",point:-6},{choice:"la trajectoire s'incurve vers le haut",point:3}]},{id:230,question:"Pour rendre efficace l'utilisation du parachute de secours je dois",choices:[{choice:"en vol, régulièrement m'exercer à trouver le contact de sa poignée",point:3},{choice:"l'aérer une fois par an au minimum avant de le replier",point:3},{choice:"faire un lavage par an en machine avant de le replier",point:-6}]},{id:231,question:"Un pilote de vol libre peut-il être soumis à un contrôle d'alcoolémie ou de stupéfiants ?",choices:[{choice:"Non, cela ne concerne que la réglementation routière",point:-6},{choice:"Oui, et l'usage de boissons alcoolisées ou de stupéfiants est interdit",point:6},{choice:"Oui, mais la tolérance est identique à la circulation routière",point:-6}]},{id:232,question:"Par une belle journée d'été, la température maximum sera atteinte à (heure solaire, sans tenir compte des 2 heures d'avance sur nos montres)",choices:[{choice:"15h",point:6},{choice:"12h",point:-6},{choice:"14h",point:-2}]},{id:233,question:"Vous êtes le premier à enrouler une ascendance",choices:[{choice:"une aile qui entre dans l'ascendance au même niveau que vous doit spiraler à 180° et dans le même sens",point:3},{choice:"aucune autre aile n'a le droit d'utiliser cette ascendance",point:-6},{choice:"les ailes qui arrivent après vous doivent adopter votre sens de rotation",point:3},{choice:"vous êtes prioritaire sur une aile située en dessous et qui vous rejoint",point:-6}]},{id:234,question:"Vous envisagez d'utiliser une ascendance où se trouve déjà un autre appareil ; vous",choices:[{choice:"faites comme si vous étiez seul",point:-6},{choice:"essayez en jouant sur la vitesse de vous placer de façon diamétralement opposée dans le même sens de rotation",point:6},{choice:"engagez la spirale juste devant lui pour qu'il vous voit bien",point:-6}]},{id:235,question:"Au cas où le vent météo change d'orientation ou d'intensité pendant le vol, il convient",choices:[{choice:"de ralentir au maximum afin de retarder le moment d'un atterrissage qui s'annonce délicat",point:-6},{choice:`de repérer immédiatement des terrains de secours afin de se préparer à l'éventualité d'un atterrissage "aux vaches"`,point:3},{choice:"de mettre le cap immédiatement sur le terrain pour rentrer coûte que coûte",point:-6},{choice:"de changer à temps son plan de vol pour se donner les meilleurs chances de rentrer malgré tout au terrain",point:3}]},{id:236,question:"Sur une aile en vol rectiligne stabilisé, lorsque le pilote provoque une diminution de l'incidence",choices:[{choice:"la vitesse sur trajectoire augmente",point:3},{choice:"la trajectoire s'incurve transitoirement vers le bas",point:3},{choice:"la trajectoire s'incurve transitoirement vers le haut",point:-6},{choice:"la vitesse sur trajectoire diminue",point:-6}]},{id:237,question:"Les zones favorables au déclenchement de la convection sont en général",choices:[{choice:"les zones rocailleuses",point:2},{choice:"les forêts",point:-6},{choice:"les zones urbanisées",point:2},{choice:"les zones sèches",point:2}]},{id:238,question:"Une bonne approche",choices:[{choice:"se prépare suffisamment tôt",point:2},{choice:"tient compte du vent météo et de ses variations possibles",point:2},{choice:"doit être modifiable en cas de nécessité",point:2}]},{id:239,question:"La traînée induite",choices:[{choice:"est la traînée de culot de l'aile",point:-6},{choice:"est due au pilote et aux câbles ou suspentes",point:-6},{choice:"est due aux irrégularités de surface de l'aile",point:-6},{choice:"se manifeste entre autres par des tourbillons marginaux",point:6}]},{id:240,question:"Un moniteur encadre un stage de formation en milieu aménagé (S.I.V., pilotage, acrobatie) dans le cadre d'une école fédérale",choices:[{choice:"sa formation initiale est suffisante",point:-6},{choice:"il doit organiser le stage au dessus de l'eau",point:3},{choice:"il a reçu une formation particulière",point:3}]},{id:241,question:"En région montagneuse, vous recherchez de préférence les ascendances thermiques",choices:[{choice:"sur les rochers ensoleillés",point:6},{choice:"sur les versants à l'abri du soleil et du vent",point:-6},{choice:"dans les fonds de vallée",point:-6}]},{id:242,question:"On appelle anticyclone une zone",choices:[{choice:"de vents faibles",point:0},{choice:"de haute pression",point:6},{choice:"de basse pression",point:-6}]},{id:243,question:"L'emport du parachute de secours",choices:[{choice:"n'exige aucune mesure particulière",point:-6},{choice:"impose une surveillance particulière des velcros et goupilles de fermeture du conteneur",point:3},{choice:"expose le pilote à des risques d'ouverture intempestive",point:3}]},{id:244,question:"Le système de fermeture du container extérieur du parachute",choices:[{choice:"doit se libérer à la première traction de la poignée de parachute (effort compris entre 4 et 9kg)",point:2},{choice:"doit être vérifié avant chaque décollage",point:2},{choice:"est plus fiable si un maillon rapide le verrouille",point:-6},{choice:"est généralement verrouillé par une aiguille souple ou rigide",point:2}]},{id:245,question:"Vous êtes en approche ; une aile est juste en dessous de vous",choices:[{choice:"vous l'observez attentivement car vous lui devez la priorité",point:6},{choice:"vous faites des 360° pour vous poser avant lui",point:-6},{choice:"en approche, il n'y a plus de priorité",point:-6},{choice:"il vous doit la priorité",point:-6}]},{id:246,question:"Une aile de Vol Libre, c'est",choices:[{choice:"un frein aérodynamique",point:-6},{choice:"un parachute",point:-6},{choice:"un planeur ultra-léger",point:3},{choice:"un aéronef non soumis à l'immatriculation",point:3}]},{id:247,question:"Vous êtes 200m sous un gros cumulus, vers son centre, vous observez quelques nuages déchiquetés et un variomètre fortement positif",choices:[{choice:"vous augmentez la vitesse jusqu'à amener le variomètre à 0",point:-6},{choice:"vous pouvez utiliser l'ascendance sur les bords du nuage, en gardant toujours une direction totalement dégagée à toute altitude",point:2},{choice:"vous en profitez pour gagner de l'altitude",point:-6},{choice:"vous dégagez du côté le plus clair pour échapper à l'influence du nuage",point:4}]},{id:248,question:"Les nuages de type stratus",choices:[{choice:"se développent horizontalement",point:3},{choice:"caractérisent des couches plutôt stables",point:3},{choice:"se développent verticalement",point:-6},{choice:"caractérisent des couches plutôt instables",point:-6}]},{id:249,question:"Le brevet de pilote et la qualification biplace sont certifiées par",choices:[{choice:"le président du club où vous êtes affilié",point:-6},{choice:"le responsable régional de la formation (R.R.F.)",point:6},{choice:"le directeur technique de l'école (D.T.E.)",point:-6}]},{id:250,question:"Vous croisez une autre aile ; votre vitesse de croisement est égale à",choices:[{choice:"la somme de vos 2 vitesse/air",point:6},{choice:"la moitié de votre vitesse/air",point:-6},{choice:"votre vitesse/air",point:-6}]},{id:251,question:"Les protections dorsales et latérales de votre sellette",choices:[{choice:"vous autorise à un niveau d'engagement plus fort",point:-6},{choice:"permettent parfois et pour certains modèles d'atténuer les lésions dues au poinçonnement",point:2},{choice:"peuvent améliorer le maintien dorsal",point:2},{choice:"peuvent protéger contre un choc de faible intensité",point:2}]},{id:252,question:"Parmi les nuages ci-dessous, les plus dangereux pour le vol libre sont les",choices:[{choice:"cumulonimbus",point:4},{choice:"strato-cumulus",point:-6},{choice:"nuages de rotors",point:2}]},{id:253,question:"Par vent fort, le vol captif sur point fixe (corde attachée au sol)",choices:[{choice:"peut être utilisé en école",point:-6},{choice:"peut entraîner un verrouillage irrémédiable",point:3},{choice:"n'est jamais dangereux",point:-6},{choice:"est fortement déconseillé",point:3}]},{id:254,question:"En turbulence vous faites les oreilles",choices:[{choice:"vous ne pourrez plus piloter avec vos freins",point:3},{choice:"votre aile sera moins sensible en tangage",point:3},{choice:"c'est fortement déconseillé",point:-6}]},{id:255,question:"Le soleil réchauffe principalement l'atmosphère",choices:[{choice:"indirectement par l'intermédiaire du sol",point:6},{choice:"directement par rayonnement",point:-6},{choice:"directement par convection",point:-6}]},{id:256,question:"En vol vent de travers",choices:[{choice:"le nez de l'aile se met face au vent : c'est l'effet girouette",point:-6},{choice:"l'axe de l'aile fait un angle avec la trajectoire/sol",point:2},{choice:"l'axe de l'aile reste parallèle à la trajectoire/sol",point:-6},{choice:"vous devez adopter un angle de contre-dérive si vous vous dirigez vers un point qui n'est pas dans l'axe du vent",point:4}]},{id:257,question:"Comment savoir si un exercice militaire est en cours ?",choices:[{choice:"En allant vérifier sur le site web du SIA, à la rubrique SUP AIP et NOTAM",point:6},{choice:"En vérifiant l'affichage sur les panneaux d'information du site choisi",point:-6},{choice:"Il suffit d'aller sur les pages espace aérien du site web de la FFVL",point:-6}]},{id:258,question:"Lorsque vous volez vent arrière près du sol, l'impression visuelle tend à modifier votre perception de la vitesse/air, ce qui peut vous conduire à",choices:[{choice:"voler trop lentement en freinant votre aile",point:3},{choice:"voler trop rapidement en accélérant votre aile",point:-6},{choice:"vous rapprocher dangereusement de la vitesses minimum et des risques associés",point:3}]},{id:259,question:"On appelle brise de pente descendante (ou vent catabatique)",choices:[{choice:"un vent froid qui descend la vallée du Rhône",point:-6},{choice:"un vent météo qui descend le long d'une pente",point:-6},{choice:"un air qui s'est refroidi au contact du sol et qui descend par gravité le long d'une pente",point:6}]},{id:260,question:"Vous vous dirigez vers le terrain en vent arrière à vitesse de croisière ; vous voyez les limites les plus rapprochées du terrain monter régulièrement vers vous",choices:[{choice:"vous choisissez immédiatement un atterrissage de secours à meilleure portée",point:6},{choice:"vous ralentissez pour utiliser la finesse/sol importante due au vent arrière",point:-6},{choice:"vous allez arriver au dessus du terrain, faire demi-tour et vous poser vent de face",point:-6},{choice:"vous allez arriver juste au terrain et vous poser vent arrière",point:-6}]},{id:261,question:"Pour un pilote peu expérimenté, un terrain d'atterrissage se découvre",choices:[{choice:"au moment d'atterrir",point:-6},{choice:"en vol, en venant à la verticale pour l'observer",point:-6},{choice:"avant le vol, c'est un minimum",point:6}]},{id:262,question:"Vous affrontez un vent de face de 15 km/h ; pour rentrer au terrain",choices:[{choice:"en prenant des points de repère au sol et en jouant sur votre vitesse, vous essayez de trouver le meilleur angle de plané",point:6},{choice:"vous cherchez à vous maintenir au taux de chute minimum pour avoir plus de temps pour effectuer le trajet",point:-6},{choice:"vous volez aussi rapidement que possible pour avoir une vitesse de pénétration maximum",point:-6}]},{id:263,question:"Pour être précis à l'atterrissage, la visualisation correcte de la pente en finale est indispensable. Cette pente",choices:[{choice:"varie en fonction de l'incidence",point:3},{choice:"ne dépend que des caractéristiques aérodynamiques de l'aile",point:-6},{choice:"varie en fonction de la direction et de la vitesse du vent",point:3}]},{id:264,question:"La partie pratique du brevet de pilote est attribué par",choices:[{choice:"le président de votre club",point:-3},{choice:"le directeur technique d'une école française de vol libre (DTE)",point:6},{choice:"le responsable régional de la formation (R.R.F.)",point:-3}]},{id:265,question:"Le gradient de vent de face à l'atterrissage",choices:[{choice:"augmente le taux de chute",point:2},{choice:"nécessite par sécurité une prise de vitesse préalable",point:2},{choice:"est parfois dangereux car il peut conduire au décrochage en cas de pilotage inadapté",point:2},{choice:"n'a pas d'effet sur la vitesse/air",point:-6}]},{id:266,question:"Par rapport au vent mesuré au décollage à 2m/sol, le vent 20m au dessus risque d'être",choices:[{choice:"de même force",point:-6},{choice:"plus fort",point:6},{choice:"moins fort",point:-6}]},{id:267,question:"Un pilote breveté ayant une pratique loisir irrégulière",choices:[{choice:'peut utiliser une voile classée en "D"',point:-6},{choice:"choisit sa voile selon les conditions aérologiques",point:-6},{choice:"peut utiliser un prototype en air calme",point:-6},{choice:`ne devrait voler qu'avec des voiles classées en "A" ou "B"`,point:6}]},{id:268,question:"La pente d'une aire de décollage doit être",choices:[{choice:"n'a pas à être comparée à la pente de finesse max. de l'aile",point:-6},{choice:"supérieure à la pente de finesse max. de l'aile",point:6},{choice:"inférieure ou égale à la finesse max. de l'aile",point:-6}]},{id:269,question:"A toute altitude dans les espaces aériens classés E et au dessus de 900 m mer ou 300 m sol en montagne dans les espaces aériens non contrôlés, la distance minimale à respecter par rapport aux nuages est de",choices:[{choice:"50 mètres horizontalement et 0 mètre verticalement",point:-6},{choice:"0 mètre",point:-6},{choice:"1500 mètres horizontalement et 300 mètres verticalement",point:6}]},{id:270,question:"Au cours d'un vol de pente en conditions relativement turbulentes",choices:[{choice:"vous vous éloignez un peu du relief et vous augmentez votre vitesse",point:4},{choice:"vous évitez de descendre en dessous des crêtes",point:2},{choice:"vous volez le plus vite possible",point:-6}]},{id:271,question:"En turbulence",choices:[{choice:"vous devez voler le plus lentement possible pour ne pas fatiguer la structure",point:-6},{choice:"les efforts sur la structure augmentent avec la vitesse de vol",point:6},{choice:"vous devez voler bras hauts pour vite sortir de la zone",point:-6}]},{id:272,question:"En vol, un P.U.L. arrive sur votre droite avec une route convergente",choices:[{choice:"vous devez céder la priorité",point:6},{choice:"vous avez la priorité",point:-6},{choice:"la priorité est fonction de la taille respective des aéronefs",point:-6}]},{id:273,question:"C'est mon premier vol de la saison",choices:[{choice:"j'aurais moins de résistance à la fatigue, je n'hésite pas à écourter mon vol pour garder un peu de fraîcheur pour l'atterrissage",point:3},{choice:"j'utilise des conditions faciles pour moi",point:3},{choice:"il n'y a pas de différence, c'est comme le vélo ça ne s'oublie pas",point:-6}]},{id:274,question:"Je m'approche de la base du nuage",choices:[{choice:"j'en profite au maximum, c'est un nuage isolé, ça n'est pas grave si je passe un peu dedans",point:-6},{choice:"je suis très méfiant, il pourrait arriver une masse d'air plus humide qui condense plus bas et me bouche la sortie, j'ai toujours une échappatoire latérale",point:3},{choice:"je suis sur un bord du nuage pour pouvoir m'échapper à tout moment",point:3},{choice:"pas de soucis, j'ai une boussole ou un GPS",point:-6}]},{id:275,question:"Dans un espace aérien non contrôlé et au dessous de 900 m mer ou 300 m sol en montagne, vous devez avoir",choices:[{choice:"une visibilité d'au moins 1500 m et voler hors des nuages",point:6},{choice:"une visibilité d'au moins 8 km et un espacement par rapport aux nuages de 300 m verticalement et 1500 m horizontalement",point:-6},{choice:"une visibilité de 3000 m et maintenir un espacement par rapport aux nuages de 600 m",point:-6}]},{id:276,question:"En conditions turbulentes, il vaut mieux",choices:[{choice:"voler au taux de chute mini",point:-6},{choice:"ne jamais faire d'évolutions serrées",point:3},{choice:"s'éloigner des limites du domaine de vol",point:3}]},{id:277,question:"Pour garder mon parachute en bon état, je dois",choices:[{choice:"le stocker au sec et éviter tout contact avec l'humidité",point:3},{choice:"l'essayer en vol sur mon site préféré au moins deux fois par an",point:-6},{choice:"l'aérer puis le replier une à deux fois par an, et à minima selon les préconisations du constructeur",point:3}]},{id:278,question:"Le gradient de vent de face à l'atterrissage",choices:[{choice:"diminue la vitesse/air",point:3},{choice:"augmente la vitesse/air",point:-6},{choice:"diminue l'incidence",point:-6},{choice:"augmente l'incidence",point:3}]},{id:279,question:"Au décollage, il y a 30 km/h de vent ; mon aile vole à une vitesse maximum de 35 km/h",choices:[{choice:"vous utilisez l'accélérateur dés que possible pour pouvoir vous éloigner du relief",point:-6},{choice:"vous devez courir à 5 km/h pour décoller",point:-6},{choice:"vous vous abstenez de décoller en estimant que la marge de sécurité n'est pas suffisante",point:6}]},{id:280,question:"Vous êtes en finale, face au terrain d'atterrissage ; vous vous apercevez que vous êtes un peu long et haut, vous risquez de dépasser le terrain ; vous choisissez",choices:[{choice:"d'augmenter le trajet à parcourir en déviant votre trajectoire",point:3},{choice:"d'augmenter la traînée parasite en vous relevant",point:3},{choice:"de perdre de l'altitude en parachutant légèrement",point:-6},{choice:"de perdre de l'altitude en accélérant",point:0}]},{id:281,question:"Le passage d'un cumulonimbus dans votre secteur de vol",choices:[{choice:"vous invite à profiter des ascendances larges avant la pluie",point:-6},{choice:"vous impose un atterrissage immédiat",point:3},{choice:"peut rendre de toute façon l'atterrissage problématique",point:3}]},{id:282,question:"Dans un thermique au cours des 360°, le variomètre passe par un maximum puis retombe à des valeurs faiblement positives",choices:[{choice:"vous quittez l'ascendance pour la reprendre d'un autre côté",point:-6},{choice:"vous inversez le sens des 360°",point:-6},{choice:"pour vous recentrer, vous élargissez le virage juste avant le maximum du variomètre et resserrez peu après",point:6}]},{id:283,question:"Pour centrer un thermique",choices:[{choice:"vous diminuez l'inclinaison quand l'ascendance augmente",point:3},{choice:"vous augmentez l'inclinaison quand l'ascendance augmente",point:-3},{choice:"vous pouvez voler très lentement sans risque d'autorotation car l'air ascendant empêchera une abattée éventuelle",point:-6},{choice:"vous augmentez l'inclinaison quand l'ascendance diminue",point:3}]},{id:284,question:"Vous êtes en prise de terrain en S (P.T.S.) ; votre trajectoire s'enfonce sous le plan de descente prévu ; vous devez",choices:[{choice:"accélérer pour ne pas perdre de temps",point:-6},{choice:"raccourcir vos S",point:3},{choice:"s'il le faut vous mettre en ligne droite face au terrain",point:3}]},{id:285,question:"En haute montagne, la densité de l'air diminuant avec l'altitude et pour que votre aile puisse décoller, vous devez vous attendre à courir",choices:[{choice:"moins vite",point:-6},{choice:"plus vite",point:3},{choice:"plus longtemps",point:3},{choice:"moins longtemps",point:-6}]},{id:286,question:"Les parties de l'aile subissant le plus d'efforts en vols sont",choices:[{choice:"la partie avant du profil",point:3},{choice:"la partie arrière du profil",point:-6},{choice:"les suspentes D",point:-6},{choice:"les suspentes A et B",point:3}]},{id:287,question:"Vous risquez de rencontrer de fortes turbulences dangereuses",choices:[{choice:"sous le vent d'un relief par vent fort",point:2},{choice:"dans une ascendance dynamique",point:-6},{choice:"dans les zones de cisaillement",point:2},{choice:"près du relief, lorsque l'activité thermique est maximum",point:2}]},{id:288,question:"Une aile homologuée CEN est obligatoire",choices:[{choice:"pour pratiquer en compétition",point:-6},{choice:"dans le cadre de la pratique loisir",point:-6},{choice:"dans le cadre des écoles labellisées par la fédération",point:6}]},{id:289,question:"Avant de voler sur un site déclaré F.F.V.L. que vous ne connaissez pas, vous devez",choices:[{choice:"lire les panneaux d'informations F.F.V.L. sur ces sites",point:3},{choice:"obtenir l'autorisation du club local",point:-6},{choice:"prendre connaissance de la classification des espaces aériens environnants et de la présence de zones à statut particulier",point:3},{choice:"obtenir l'autorisation de l'école locale",point:-6}]},{id:290,question:"Le vol à l'intérieur des nuages est permis",choices:[{choice:"nulle part",point:6},{choice:"à plus de 900 mètres au dessus du niveau de la mer",point:-6},{choice:"à plus de 300 mètres au dessus de tout relief",point:-6}]},{id:291,question:"A vitesse de taux de chute mini, pour amorcer un virage à droite sans trop perdre de vitesse et ne pas risquer la mise en vrille, vous devez",choices:[{choice:"appliquer mon poids sur les élévateurs de droite",point:3},{choice:"relever le frein gauche",point:3},{choice:"tirer sur le frein droit",point:-6}]},{id:292,question:"Vous voulez rentrer dans une ascendance alors qu'une autre aile spirale 50m en dessous",choices:[{choice:"vous attendez qu'elle passe au dessus de vous pour rentrer car sinon la descendance périphérique risque de vous mettre à la même hauteur",point:0},{choice:"vous enroulez en sens inverse pour pouvoir la surveiller",point:-6},{choice:"vous enroulez dans le même sens qu'elle",point:6}]},{id:293,question:"Lors d'un gonflage par vent fort, la voile commence à vous tirer très fort vers l'arrière, vous risquez d'être traîné au sol",choices:[{choice:"vous lâchez les commandes et vous vous agrippez où vous pouvez pour résister",point:-6},{choice:"vous courez vers l'aile avant d'être déséquilibré et aidez à affaler en tirant sur les freins",point:3},{choice:"vous courez vers l'aile avant d'être déséquilibré et décrochez l'aile à l'aide des élévateurs arrières si vous y arrivez",point:3},{choice:"Vous résistez et simultanément tirez les deux freins à fond pour vous arrêter",point:-6}]},{id:294,question:"Vous évoluez en vol de pente, dans un espace aérien non contrôlé, sur une montagne dont l'altitude est de 1000m. La base des nuages est à 1200m. Le respect des conditions de vol à vue vous permet de monter jusqu'à une altitude de",choices:[{choice:"1200 m",point:6},{choice:"1000 m",point:-6},{choice:"900 m",point:-6}]},{id:295,question:"Loin du relief, vous suivez la même route et au même niveau qu'une autre aile moins rapide ; vous effectuez le dépassement par",choices:[{choice:"la gauche",point:-6},{choice:"la droite",point:6},{choice:"le dessus",point:-6}]},{id:296,question:"L'emport du parachute de secours se justifie par les risques de",choices:[{choice:"abandon du vol par épuisement",point:-6},{choice:"incident de vol irréversible (twist, cravate, etc.)",point:2},{choice:"collision",point:2},{choice:"rupture de l'aile",point:2}]},{id:297,question:"Quelles indications sont portées dans le cartouche d'identification d'un espace ?",choices:[{choice:"Le nom et le type d'espace ainsi que les hauteurs sol du volume correspondant",point:-6},{choice:"Le type, le nom, le plancher et le plafond, ainsi que la fréquence d'appel pour cet espace",point:6},{choice:"Le nom, le type, les horaires, le volume et le numéro de téléphone liés à cet espace",point:-6}]},{id:298,question:"Comment peuvent être exprimées les limites des espaces contrôlés ?",choices:[{choice:"Toujours en altitudes QNH pour prendre en compte les variations de pression",point:-6},{choice:"Selon le cas, en ASFC, AMSL ou FL",point:6},{choice:"En niveaux de vol uniquement à cause du trafic IFR",point:-6}]},{id:299,question:"Dans le cadre fédéral, la présence d'un moniteur est",choices:[{choice:"obligatoire sur la pente école pendant les cours",point:6},{choice:"facultative dans tous les cas",point:-6},{choice:"facultative si les élèves sont accompagnés par un pilote breveté",point:-6}]},{id:300,question:"Vous êtes en vol de pente, le relief est à votre gauche. Une aile arrive en face à la même altitude",choices:[{choice:"elle a priorité",point:6},{choice:"vous avez priorité et maintenez votre cap",point:-6},{choice:"vous tentez de passer en dessous",point:-6}]},{id:301,question:"A l'atterrissage une prise de vitesse est nécessaire en finale car",choices:[{choice:"en présence de vent le risque d'un gradient est propre à soudainement réduire ma vitesse relative",point:3},{choice:"les forces aérodynamiques augmentant au carré de la vitesse, elles favoriseront un freinage efficace",point:3},{choice:"les forces aérodynamiques n'ont pas une incidence directe sur la vitesse de vol",point:-6}]},{id:302,question:"Pour la délivrance d'une licence à un élève, le certificat médical présenté doit être de moins de",choices:[{choice:"1 an",point:-6},{choice:"3 mois",point:6},{choice:"6 mois",point:-6}]},{id:303,question:"Un Club-École Français de Vol Libre (C.E.F.V.L) est",choices:[{choice:"une entreprise privée indépendante de la F.F.V.L.",point:-6},{choice:"une association loi 1901 (sans but lucratif) affiliée à la F.F.V.L.",point:3},{choice:"contrôlé par les adhérents de l'association",point:3}]},{id:304,question:"Le sticker CEN apposé sur un parapente",choices:[{choice:"n'est pas obligatoire sur tous les exemplaires d'un modèle homologué",point:-6},{choice:"donne des indications sur le comportement de ce modèle dans certaines configurations de vol",point:2},{choice:"indique avec quel type de harnais ont été réalisés les essais",point:2},{choice:"permet de se faire une idée sur le niveau de pilotage demandé pour ce modèle",point:2}]},{id:305,question:"Votre demi aile gauche se ferme",choices:[{choice:"de retour au vol droit, si l'aile est toujours fermée, vous pouvez forcer sa réouverture par une action ample et non maintenue du frein gauche",point:2},{choice:"vous chargez la demi aile droite simultanément à la sellette et à la commande",point:2},{choice:"vous freinez à gauche pour forcer la réouverture",point:-6},{choice:'vous freinez du côté opposé pour stabiliser votre trajectoire en évitant le "surcontre"',point:2}]},{id:306,question:"Pour rouvrir les oreilles",choices:[{choice:"je libère les suspentes concernées et regarde le bon déroulement de leur réouverture",point:2},{choice:"si la réouverture ne s'est pas faite d'elle-même, j'applique des actions répétées et rapides de petites amplitudes jusqu'à l'obtention de la réouverture totale",point:-6},{choice:"il est recommandé de procéder demi/aile par demi/aile et de valider à chaque étape la présence du vent relatif",point:2},{choice:"si la réouverture ne s'est pas faite d'elle-même, j'abaisse, côté fermé, amplement et paisiblement ma commande pour la relâcher aussitôt",point:2}]},{id:307,question:"Le choix d'une voile est guidé par",choices:[{choice:"l'avis d'un vendeur spécialisé qui connaît le pilote",point:3},{choice:"le niveau d'accessibilité défini par la presse spécialisée",point:1},{choice:"la catégorie de la voile",point:2},{choice:"le niveau que le pilote veut atteindre",point:-6}]},{id:308,question:"En vol de pente une violente turbulence replie brutalement une demi-aile de votre parapente",choices:[{choice:'vous contrôlez votre départ en rotation tout en gardant une vitesse suffisante pour éviter un "sur contre"',point:6},{choice:"vous regardez la nature du terrain sous vos pieds et vous vous préparez éventuellement à un atterrissage de fortune",point:0},{choice:"vous relevez les bras et prenez un maximum de vitesse pour éviter le décrochage",point:-6},{choice:"vous tirez immédiatement sur le frein correspondant au côté fermé pour en forcer la réouverture",point:-6}]},{id:309,question:"L'emport du parachute de secours",choices:[{choice:"est vivement conseillé quelle que soit la forme de pratique et demande une information pour l'utilisation",point:3},{choice:"nécessite une autorisation d'utilisation",point:-3},{choice:"est obligatoire en compétition FFVL",point:3},{choice:"est obligatoire en sortie club",point:-3}]},{id:310,question:"Suite à une turbulence ou à une entrée de thermique mon aile cabre",choices:[{choice:"je réagis en bridant doucement mon aile",point:-6},{choice:"je me sens “partir” sur le dos",point:2},{choice:"je réagis en relevant brièvement mes mains puis les rabaisse si une abattée s'enchaîne",point:2},{choice:"mon aile est en train de perdre de la vitesse",point:2}]},{id:311,question:"La norme CEN E 926-1 et 2",choices:[{choice:"oblige le constructeur à conserver les caractéristiques techniques sur tous les exemplaires produits",point:3},{choice:"est valable quel que soit le harnais monté sur l'aile",point:-6},{choice:"certifie que tout parapente homologué est utilisable sans risque par n'importe quel pilote (y compris les débutants)",point:-6},{choice:"permet de se faire une idée du comportement de ce modèle",point:3}]},{id:312,question:"En vol, bras hauts, vos freins sont tendus et le bord de fuite est un peu abaissé",choices:[{choice:"c'est mieux pour le gonflage",point:-6},{choice:"ça améliore la finesse sans action sur les commandes",point:-6},{choice:"il faut rallonger et régler les freins pour le prochain vol",point:6},{choice:"cela n'a que peu d'influence sur l'aile",point:-6}]},{id:313,question:"Votre secours est ouvert, vous sentez la traction liée à son déploiement",choices:[{choice:"vous tirez sur un frein pour ramener la voile",point:-6},{choice:"vous regardez vers le bas pour estimer le lieux de l'atterrissage",point:2},{choice:`vous tirez les élévateurs "B" pour stabiliser l'ensemble`,point:2},{choice:"vous vous redressez et vous préparez à amortir le choc",point:2}]},{id:314,question:"En faisant les oreilles, vous",choices:[{choice:"diminuez la finesse/air",point:3},{choice:"augmentez la manœuvrabilité de l'aile",point:-6},{choice:"augmentez le taux de chute",point:3}]},{id:315,question:"Pour faire les oreilles",choices:[{choice:"je vérifie où aboutissent sur mon aile la sélection des suspentes que je dois tirer",point:3},{choice:"je regarde ma voile pour vérifier le bon déroulement de l'opération",point:3},{choice:"je n'oublie pas de préalablement me séparer des freins",point:-6}]},{id:316,question:"Vous êtes en finale face au terrain d'atterrissage ; vous vous apercevez que vous êtes un peu long et haut ; vous risquez de dépasser le terrain",choices:[{choice:"vous lâchez puis retirez les freins plusieurs fois pour secouer l'aile et casser la finesse",point:-6},{choice:"vous augmentez le trajet en faisant un petit S",point:6},{choice:"vous perdez de l'altitude en faisant des 360°",point:-6},{choice:"vous freinez progressivement votre aile jusqu'au point de parachutage",point:-6}]},{id:317,question:"Le gonflage face à la voile",choices:[{choice:"permet de décoller avec un vent supérieur à 30 km/h",point:-6},{choice:"permet de décoller avec des vents modérés à faibles",point:2},{choice:"permet de voir facilement les clefs dans les suspentes",point:2},{choice:"permet de contrôler sa voile facilement pendant qu'elle monte",point:2}]},{id:318,question:"Pour rester dans une ascendance dynamique près du relief",choices:[{choice:"vous volez à la vitesse minimum de l'aile",point:-6},{choice:"vous faites des 360° devant la pente",point:-6},{choice:"vous faites des 8 longs en tournant face au vent",point:6},{choice:"vous faites des 8 longs en tournant face à la pente",point:-6}]},{id:319,question:"Vous êtes dos au relief et votre voile se ferme à 40% sur la gauche ce qui la met en virage à gauche",choices:[{choice:'vous contrez à droite pour vous dégager du relief tout en évitant le "surcontre"',point:6},{choice:"vous freinez à gauche amplement pour regonfler le côté fermé",point:-6},{choice:"vous laissez faire si votre parapente est classé A de la norme CEN",point:-6},{choice:"vous freinez symétriquement des deux côtés",point:0}]},{id:320,question:"Au décollage, le vent est de travers 30°, 3m/s",choices:[{choice:"vous gonflez face à la ligne de pente la plus raide, temporisez, puis prenez de la vitesse en orientant progressivement votre course et votre aile face au vent",point:-6},{choice:"vous gonflez face au vent, temporisez, puis prenez de la vitesse en orientant progressivement votre course et votre aile dans l'axe de la plus grande pente",point:6},{choice:"vous gonflez dans l'axe de la plus grande pente, temporisez, puis accélérez en vous attendant à devoir freiner amplement juste avant de décoller",point:-6}]}]}),actions:{addReminder(t,e){e.id=t,this.qcms.find(n=>n.id===e.qcmId).reminder=e}},getters:{}});function Eu(t){return t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()}function JI(t){const e=t.split("/");return new Date(e[2],e[1]-1,e[0])}function Pr(){return new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()}function Tu(t){const e=JI(t.reminder.answeredDate);return e.setDate(e.getDate()+t.reminder.remindDelay),e}const KM={name:"StatistiquesFFVL",computed:{nbAnswered(){return Vt().qcms.filter(t=>t.reminder!==void 0).length},nbTotal(){return Vt().qcms.length},globalRepartition(){const t={};return Vt().qcms.filter(e=>e.reminder).forEach(e=>{const n=e.reminder.remindDelay;t[n]===void 0?t[n]=1:t[n]++}),t},nextDaysRepartition(){let t=[];Vt().qcms.filter(n=>n.reminder).forEach(n=>{const i=Tu(n);t.includes(i.getTime())||t.push(i.getTime())}),t.sort((n,i)=>n.date-i.date),console.log(t),t=t.slice().reverse();let e={};return t.forEach(n=>{Vt().qcms.filter(i=>i.reminder===void 0?!1:Tu(i).getTime()==n).forEach(i=>{const s=Tu(i);e[Eu(s)]===void 0?e[Eu(s)]=1:e[Eu(s)]++})}),console.log(e),e}}},GM={lass:"globalStats"},QM={class:"globalStatsTable"},YM=se("thead",null,[se("th",null,"Delay"),se("th",null,"Nb")],-1),XM={class:"nextDays"},JM={class:"nextDaysStatsTable"},ZM=se("thead",null,[se("th",null,"Date"),se("th",null,"Nb")],-1);function e6(t,e,n,i,s,r){return Ee(),De(Tt,null,[se("div",GM,[Vs(et(r.nbAnswered)+" / "+et(r.nbTotal)+" questions répondues. ",1),se("div",QM,[se("table",null,[YM,se("tbody",null,[(Ee(!0),De(Tt,null,Wa(r.globalRepartition,(o,a)=>(Ee(),De("tr",null,[se("td",null,et(a),1),se("td",null,et(r.globalRepartition[a]),1)]))),256))])])])]),se("div",XM,[se("div",JM,[se("table",null,[ZM,se("tbody",null,[(Ee(!0),De(Tt,null,Wa(r.nextDaysRepartition,(o,a)=>(Ee(),De("tr",null,[se("td",null,et(a),1),se("td",null,et(r.nextDaysRepartition[a]),1)]))),256))])])])])],64)}const ZI=Yn(KM,[["render",e6]]);const t6={name:"PartyMenuItem",props:["qcms","title"],computed:{nbQuestions(){return this.qcms.length}}},n6={class:"partyMenuItem"};function i6(t,e,n,i,s,r){return Ee(),De("div",n6,[Vs(et(n.title)+" "+et(r.nbQuestions)+" ",1),se("button",{onClick:e[0]||(e[0]=o=>t.$emit("play",n.qcms,!0)),class:"playButton"},"Play")])}const s6=Yn(t6,[["render",i6]]);const r6={name:"PartyMenu",components:{PartyMenuItem:s6,StatistiquesFFVL:ZI,QuestionFFVL:HM},data(){return{qcm:{question:"",choices:[{choice:"",point:0}]},playing:!1,hasAlreadyPlayed:!1,nbQuestions:5,dryrun:!1,refreshLogo:!0,calendarLogoPath:"calendar_crossed.png",showStatistiques:!1}},computed:{nbNonValidated(){return Ht().qcms.filter(t=>!t.validated).length},nbErrors(){return Ht().nbErrors},todayQcms(){return Vt().qcms.filter(t=>t.reminder&&t.reminder.answeredDate==Pr())},todayNewQuestions(){return Vt().qcms.filter(t=>t.reminder&&t.reminder.firstAnsweredDate==Pr())},getRemindQCMsCpt(){return this.getRemindQCMs()},hasReminder(){return this.getRemindQCMs().length}},created(){this.loadReminder()},methods:{async loadReminder(){(await DI(yD(qh,"QcmReminder"+Oh))).forEach(e=>{Vt().addReminder(e.id,e.data())})},getNextQuestion(){if(this.playing&&Ht().qcms.filter(t=>!t.validated).length==0)this.playing=!1,Ht().setNbErrors(0),this.loadReminder();else{let t=Ht().qcms.filter(n=>!n.validated),e=Math.floor(Math.random()*t.length);this.qcm=t[e],this.calendarLogoPath=this.dryrun||this.qcm.answered?"calendar_crossed.png":"calendar.png"}},start(){console.log("dtarr");let t=Vt().qcms.filter(n=>n.reminder===void 0),e=XI(t).slice(0,this.nbQuestions);this.play(e,!1)},replay(){this.play(Ht().qcms,!0)},replayTodaysQuestions(){let t=Vt().qcms.filter(e=>e.reminder&&e.reminder.answeredDate==Pr());this.play(t,!0)},replayTodaysNewQuestions(){let t=Vt().qcms.filter(e=>e.reminder&&e.reminder.firstAnsweredDate==Pr());this.play(t,!0)},getRemindQCMs(){console.log("la");let t=Vt().qcms.filter(e=>e.reminder&&e.reminder.answeredDate!=Pr());return t=t.filter(e=>{let n=JI(e.reminder.answeredDate);return n.setDate(n.getDate()+e.reminder.remindDelay),n<=new Date}),console.log("ici"),console.log(t),t},play(t,e){console.log("play"),console.log(t),console.log(e),this.dryrun=e,t.forEach(function(n){n.answered=!1,n.validated=!1}),Ht().setQCMs(t),this.hasAlreadyPlayed=!0,this.playing=!0,console.log("this.playing"),console.log(this.playing),this.getNextQuestion()},playRemind(){}}},Ri=t=>(Qw("data-v-a6fb96b1"),t=t(),Yw(),t),o6={key:0,class:"partyMenu"},a6={class:"newSession"},c6=Ri(()=>se("span",{class:"subtitile"},"Nouvelle session",-1)),l6=Ri(()=>se("span",null,"Nb Question : ",-1)),u6=Ri(()=>se("option",null,"2",-1)),h6=Ri(()=>se("option",null,"5",-1)),d6=Ri(()=>se("option",null,"10",-1)),f6=Ri(()=>se("option",null,"20",-1)),p6=[u6,h6,d6,f6],m6={key:1},g6=Ri(()=>se("span",null,"Reste : ",-1)),_6=Ri(()=>se("span",null,"Erreurs : ",-1)),v6=["src"];function y6(t,e,n,i,s,r){const o=zi("PartyMenuItem"),a=zi("QuestionFFVL");return Ee(),De(Tt,null,[s.playing?Kt("",!0):(Ee(),De("div",o6,[Qe(o,{title:"todaysQuestions",qcms:r.todayQcms,onPlay:r.play},null,8,["qcms","onPlay"]),Qe(o,{title:"TodayNew",qcms:r.todayNewQuestions,onPlay:r.play},null,8,["qcms","onPlay"]),Qe(o,{title:"PlayRemind",qcms:r.getRemindQCMsCpt,onPlay:r.play},null,8,["qcms","onPlay"]),se("div",a6,[c6,l6,V_(se("select",{"onUpdate:modelValue":e[0]||(e[0]=c=>s.nbQuestions=c)},p6,512),[[vb,s.nbQuestions]]),se("button",{onClick:e[1]||(e[1]=(...c)=>r.start&&r.start(...c))},"Start"),s.hasAlreadyPlayed?(Ee(),De("button",{key:0,onClick:e[2]||(e[2]=(...c)=>r.replay&&r.replay(...c))},"Replay")):Kt("",!0)])])),s.playing?(Ee(),De("div",m6,[g6,Vs(et(r.nbNonValidated)+" ",1),_6,Vs(et(r.nbErrors)+" ",1),se("img",{src:s.calendarLogoPath,class:"calendarLogo"},null,8,v6),Qe(a,{qcm:s.qcm,dryrun:s.dryrun,onGetNextQuestion:r.getNextQuestion},null,8,["qcm","dryrun","onGetNextQuestion"])])):Kt("",!0)],64)}const E6=Yn(r6,[["render",y6],["__scopeId","data-v-a6fb96b1"]]);const T6={name:"Main",components:{StatistiquesFFVL:ZI,PartyMenu:E6,Menu:OM},data(){return{displayQuestionParty:!0,displayStatistique:!1}},methods:{menuclicked(t){t==="play"?(this.displayQuestionParty=!0,this.displayStatistique=!1):t==="statistiques"&&(this.displayQuestionParty=!1,this.displayStatistique=!0)}}},I6={class:"mainPanel"};function w6(t,e,n,i,s,r){const o=zi("Menu"),a=zi("PartyMenu"),c=zi("StatistiquesFFVL");return Ee(),De("div",I6,[Qe(o,{onMenuClicked:r.menuclicked},null,8,["onMenuClicked"]),s.displayQuestionParty?(Ee(),ro(a,{key:0})):Kt("",!0),s.displayStatistique?(Ee(),ro(c,{key:1})):Kt("",!0)])}const b6=Yn(T6,[["render",w6]]),Ll=Tb(xb),R6=!1;Ll.use(EL,{firebaseApp:zf,modules:[yL()]});const qh=yI(zf);Ll.use(bb());const $f=IM({history:VL(),routes:[{path:"/",component:AM},{path:"/main",component:b6,meta:{requiresAuth:!0}}]});$f.beforeEach((t,e,n)=>{t.matched.some(i=>i.meta.requiresAuth)&&!R6?ny().currentUser?n():n("/"):n()});Ll.use($f);Ll.mount("#app");
