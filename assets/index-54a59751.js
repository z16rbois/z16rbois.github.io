(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function wh(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const we={},ci=[],Wt=()=>{},fI=()=>!1,pI=/^on[^a-z]/,Il=t=>pI.test(t),Ah=t=>t.startsWith("onUpdate:"),dt=Object.assign,Rh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},_I=Object.prototype.hasOwnProperty,le=(t,e)=>_I.call(t,e),$=Array.isArray,ui=t=>_o(t)==="[object Map]",wl=t=>_o(t)==="[object Set]",xf=t=>_o(t)==="[object Date]",Y=t=>typeof t=="function",We=t=>typeof t=="string",Ai=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",kg=t=>(Ee(t)||Y(t))&&Y(t.then)&&Y(t.catch),Ng=Object.prototype.toString,_o=t=>Ng.call(t),gI=t=>_o(t).slice(8,-1),Dg=t=>_o(t)==="[object Object]",Ch=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ha=wh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Al=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},mI=/-(\w)/g,dn=Al(t=>t.replace(mI,(e,n)=>n?n.toUpperCase():"")),yI=/\B([A-Z])/g,js=Al(t=>t.replace(yI,"-$1").toLowerCase()),Rl=Al(t=>t.charAt(0).toUpperCase()+t.slice(1)),Pc=Al(t=>t?`on${Rl(t)}`:""),Os=(t,e)=>!Object.is(t,e),da=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Aa=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ra=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Mf;const uu=()=>Mf||(Mf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ur(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=We(s)?II(s):Ur(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(We(t)||Ee(t))return t}const vI=/;(?![^(]*\))/g,EI=/:([^]+)/,TI=/\/\*[^]*?\*\//g;function II(t){const e={};return t.replace(TI,"").split(vI).forEach(n=>{if(n){const s=n.split(EI);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function $i(t){let e="";if(We(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=$i(t[n]);s&&(e+=s+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const wI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",AI=wh(wI);function Og(t){return!!t||t===""}function RI(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Cl(t[s],e[s]);return n}function Cl(t,e){if(t===e)return!0;let n=xf(t),s=xf(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Ai(t),s=Ai(e),n||s)return t===e;if(n=$(t),s=$(e),n||s)return n&&s?RI(t,e):!1;if(n=Ee(t),s=Ee(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Cl(t[o],e[o]))return!1}}return String(t)===String(e)}function CI(t,e){return t.findIndex(n=>Cl(n,e))}const Me=t=>We(t)?t:t==null?"":$(t)||Ee(t)&&(t.toString===Ng||!Y(t.toString))?JSON.stringify(t,xg,2):String(t),xg=(t,e)=>e&&e.__v_isRef?xg(t,e.value):ui(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:wl(e)?{[`Set(${e.size})`]:[...e.values()]}:Ee(e)&&!$(e)&&!Dg(e)?String(e):e;let Ct;class Mg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){Ct=this}off(){Ct=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Sl(t){return new Mg(t)}function SI(t,e=Ct){e&&e.active&&e.effects.push(t)}function Sh(){return Ct}function Lg(t){Ct&&Ct.cleanups.push(t)}const bh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Vg=t=>(t.w&ss)>0,Fg=t=>(t.n&ss)>0,bI=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ss},PI=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Vg(i)&&!Fg(i)?i.delete(t):e[n++]=i,i.w&=~ss,i.n&=~ss}e.length=n}},Ca=new WeakMap;let _r=0,ss=1;const hu=30;let Mt;const Ss=Symbol(""),du=Symbol("");class Ph{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,SI(this,s)}run(){if(!this.active)return this.fn();let e=Mt,n=Gn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Mt,Mt=this,Gn=!0,ss=1<<++_r,_r<=hu?bI(this):Lf(this),this.fn()}finally{_r<=hu&&PI(this),ss=1<<--_r,Mt=this.parent,Gn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Mt===this?this.deferStop=!0:this.active&&(Lf(this),this.onStop&&this.onStop(),this.active=!1)}}function Lf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Gn=!0;const Ug=[];function ji(){Ug.push(Gn),Gn=!1}function qi(){const t=Ug.pop();Gn=t===void 0?!0:t}function It(t,e,n){if(Gn&&Mt){let s=Ca.get(t);s||Ca.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=bh()),Bg(i)}}function Bg(t,e){let n=!1;_r<=hu?Fg(t)||(t.n|=ss,n=!Vg(t)):n=!t.has(Mt),n&&(t.add(Mt),Mt.deps.push(t))}function Pn(t,e,n,s,i,r){const o=Ca.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||!Ai(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?Ch(n)&&a.push(o.get("length")):(a.push(o.get(Ss)),ui(t)&&a.push(o.get(du)));break;case"delete":$(t)||(a.push(o.get(Ss)),ui(t)&&a.push(o.get(du)));break;case"set":ui(t)&&a.push(o.get(Ss));break}if(a.length===1)a[0]&&fu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);fu(bh(l))}}function fu(t,e){const n=$(t)?t:[...t];for(const s of n)s.computed&&Vf(s);for(const s of n)s.computed||Vf(s)}function Vf(t,e){(t!==Mt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function kI(t,e){var n;return(n=Ca.get(t))==null?void 0:n.get(e)}const NI=wh("__proto__,__v_isRef,__isVue"),Wg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ai)),Ff=DI();function DI(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ce(this);for(let r=0,o=this.length;r<o;r++)It(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ce)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ji();const s=ce(this)[e].apply(this,n);return qi(),s}}),t}function OI(t){const e=ce(this);return It(e,"has",t),e.hasOwnProperty(t)}class $g{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const i=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw"&&s===(i?r?zI:zg:r?Hg:qg).get(e))return e;const o=$(e);if(!i){if(o&&le(Ff,n))return Reflect.get(Ff,n,s);if(n==="hasOwnProperty")return OI}const a=Reflect.get(e,n,s);return(Ai(n)?Wg.has(n):NI(n))||(i||It(e,"get",n),r)?a:Pe(a)?o&&Ch(n)?a:a.value:Ee(a)?i?Kg(a):Pl(a):a}}class jg extends $g{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(Ri(r)&&Pe(r)&&!Pe(s))return!1;if(!this._shallow&&(!Sa(s)&&!Ri(s)&&(r=ce(r),s=ce(s)),!$(e)&&Pe(r)&&!Pe(s)))return r.value=s,!0;const o=$(e)&&Ch(n)?Number(n)<e.length:le(e,n),a=Reflect.set(e,n,s,i);return e===ce(i)&&(o?Os(s,r)&&Pn(e,"set",n,s):Pn(e,"add",n,s)),a}deleteProperty(e,n){const s=le(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Pn(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Ai(n)||!Wg.has(n))&&It(e,"has",n),s}ownKeys(e){return It(e,"iterate",$(e)?"length":Ss),Reflect.ownKeys(e)}}class xI extends $g{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const MI=new jg,LI=new xI,VI=new jg(!0),kh=t=>t,bl=t=>Reflect.getPrototypeOf(t);function jo(t,e,n=!1,s=!1){t=t.__v_raw;const i=ce(t),r=ce(e);n||(Os(e,r)&&It(i,"get",e),It(i,"get",r));const{has:o}=bl(i),a=s?kh:n?Oh:Br;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function qo(t,e=!1){const n=this.__v_raw,s=ce(n),i=ce(t);return e||(Os(t,i)&&It(s,"has",t),It(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ho(t,e=!1){return t=t.__v_raw,!e&&It(ce(t),"iterate",Ss),Reflect.get(t,"size",t)}function Uf(t){t=ce(t);const e=ce(this);return bl(e).has.call(e,t)||(e.add(t),Pn(e,"add",t,t)),this}function Bf(t,e){e=ce(e);const n=ce(this),{has:s,get:i}=bl(n);let r=s.call(n,t);r||(t=ce(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Os(e,o)&&Pn(n,"set",t,e):Pn(n,"add",t,e),this}function Wf(t){const e=ce(this),{has:n,get:s}=bl(e);let i=n.call(e,t);i||(t=ce(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Pn(e,"delete",t,void 0),r}function $f(){const t=ce(this),e=t.size!==0,n=t.clear();return e&&Pn(t,"clear",void 0,void 0),n}function zo(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ce(o),l=e?kh:t?Oh:Br;return!t&&It(a,"iterate",Ss),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Ko(t,e,n){return function(...s){const i=this.__v_raw,r=ce(i),o=ui(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?kh:e?Oh:Br;return!e&&It(r,"iterate",l?du:Ss),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Bn(t){return function(...e){return t==="delete"?!1:this}}function FI(){const t={get(r){return jo(this,r)},get size(){return Ho(this)},has:qo,add:Uf,set:Bf,delete:Wf,clear:$f,forEach:zo(!1,!1)},e={get(r){return jo(this,r,!1,!0)},get size(){return Ho(this)},has:qo,add:Uf,set:Bf,delete:Wf,clear:$f,forEach:zo(!1,!0)},n={get(r){return jo(this,r,!0)},get size(){return Ho(this,!0)},has(r){return qo.call(this,r,!0)},add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear"),forEach:zo(!0,!1)},s={get(r){return jo(this,r,!0,!0)},get size(){return Ho(this,!0)},has(r){return qo.call(this,r,!0)},add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear"),forEach:zo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ko(r,!1,!1),n[r]=Ko(r,!0,!1),e[r]=Ko(r,!1,!0),s[r]=Ko(r,!0,!0)}),[t,n,e,s]}const[UI,BI,WI,$I]=FI();function Nh(t,e){const n=e?t?$I:WI:t?BI:UI;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(le(n,i)&&i in s?n:s,i,r)}const jI={get:Nh(!1,!1)},qI={get:Nh(!1,!0)},HI={get:Nh(!0,!1)},qg=new WeakMap,Hg=new WeakMap,zg=new WeakMap,zI=new WeakMap;function KI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function GI(t){return t.__v_skip||!Object.isExtensible(t)?0:KI(gI(t))}function Pl(t){return Ri(t)?t:Dh(t,!1,MI,jI,qg)}function QI(t){return Dh(t,!1,VI,qI,Hg)}function Kg(t){return Dh(t,!0,LI,HI,zg)}function Dh(t,e,n,s,i){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=GI(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Qn(t){return Ri(t)?Qn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ri(t){return!!(t&&t.__v_isReadonly)}function Sa(t){return!!(t&&t.__v_isShallow)}function Gg(t){return Qn(t)||Ri(t)}function ce(t){const e=t&&t.__v_raw;return e?ce(e):t}function kl(t){return Aa(t,"__v_skip",!0),t}const Br=t=>Ee(t)?Pl(t):t,Oh=t=>Ee(t)?Kg(t):t;function Qg(t){Gn&&Mt&&(t=ce(t),Bg(t.dep||(t.dep=bh())))}function Yg(t,e){t=ce(t);const n=t.dep;n&&fu(n)}function Pe(t){return!!(t&&t.__v_isRef===!0)}function Yn(t){return Xg(t,!1)}function YI(t){return Xg(t,!0)}function Xg(t,e){return Pe(t)?t:new XI(t,e)}class XI{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ce(e),this._value=n?e:Br(e)}get value(){return Qg(this),this._value}set value(e){const n=this.__v_isShallow||Sa(e)||Ri(e);e=n?e:ce(e),Os(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Br(e),Yg(this))}}function Jg(t){return Pe(t)?t.value:t}function In(t){return Y(t)?t():Jg(t)}const JI={get:(t,e,n)=>Jg(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Zg(t){return Qn(t)?t:new Proxy(t,JI)}function ZI(t){const e=$(t)?new Array(t.length):{};for(const n in t)e[n]=em(t,n);return e}class ew{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return kI(ce(this._object),this._key)}}class tw{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function nw(t,e,n){return Pe(t)?t:Y(t)?new tw(t):Ee(t)&&arguments.length>1?em(t,e,n):Yn(t)}function em(t,e,n){const s=t[e];return Pe(s)?s:new ew(t,e,n)}class sw{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ph(e,()=>{this._dirty||(this._dirty=!0,Yg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ce(this);return Qg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function iw(t,e,n=!1){let s,i;const r=Y(t);return r?(s=t,i=Wt):(s=t.get,i=t.set),new sw(s,i,r||!i,n)}function Xn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Nl(r,e,n)}return i}function $t(t,e,n,s){if(Y(t)){const r=Xn(t,e,n,s);return r&&kg(r)&&r.catch(o=>{Nl(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push($t(t[r],e,n,s));return i}function Nl(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Xn(l,null,10,[t,o,a]);return}}rw(t,n,i,s)}function rw(t,e,n,s=!0){console.error(t)}let Wr=!1,pu=!1;const lt=[];let Zt=0;const hi=[];let wn=null,ys=0;const tm=Promise.resolve();let xh=null;function nm(t){const e=xh||tm;return t?e.then(this?t.bind(this):t):e}function ow(t){let e=Zt+1,n=lt.length;for(;e<n;){const s=e+n>>>1,i=lt[s],r=$r(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function Mh(t){(!lt.length||!lt.includes(t,Wr&&t.allowRecurse?Zt+1:Zt))&&(t.id==null?lt.push(t):lt.splice(ow(t.id),0,t),sm())}function sm(){!Wr&&!pu&&(pu=!0,xh=tm.then(rm))}function aw(t){const e=lt.indexOf(t);e>Zt&&lt.splice(e,1)}function lw(t){$(t)?hi.push(...t):(!wn||!wn.includes(t,t.allowRecurse?ys+1:ys))&&hi.push(t),sm()}function jf(t,e=Wr?Zt+1:0){for(;e<lt.length;e++){const n=lt[e];n&&n.pre&&(lt.splice(e,1),e--,n())}}function im(t){if(hi.length){const e=[...new Set(hi)];if(hi.length=0,wn){wn.push(...e);return}for(wn=e,wn.sort((n,s)=>$r(n)-$r(s)),ys=0;ys<wn.length;ys++)wn[ys]();wn=null,ys=0}}const $r=t=>t.id==null?1/0:t.id,cw=(t,e)=>{const n=$r(t)-$r(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function rm(t){pu=!1,Wr=!0,lt.sort(cw);const e=Wt;try{for(Zt=0;Zt<lt.length;Zt++){const n=lt[Zt];n&&n.active!==!1&&Xn(n,null,14)}}finally{Zt=0,lt.length=0,im(),Wr=!1,xh=null,(lt.length||hi.length)&&rm()}}function uw(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||we;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||we;d&&(i=n.map(p=>We(p)?p.trim():p)),h&&(i=n.map(Ra))}let a,l=s[a=Pc(e)]||s[a=Pc(dn(e))];!l&&r&&(l=s[a=Pc(js(e))]),l&&$t(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,$t(c,t,6,i)}}function om(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!Y(t)){const l=c=>{const u=om(c,e,!0);u&&(a=!0,dt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ee(t)&&s.set(t,null),null):($(r)?r.forEach(l=>o[l]=null):dt(o,r),Ee(t)&&s.set(t,o),o)}function Dl(t,e){return!t||!Il(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,js(e))||le(t,e))}let ze=null,Ol=null;function ba(t){const e=ze;return ze=t,Ol=t&&t.type.__scopeId||null,e}function xl(t){Ol=t}function Ml(){Ol=null}function fa(t,e=ze,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&ep(-1);const r=ba(e);let o;try{o=t(...i)}finally{ba(r),s._d&&ep(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function kc(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:m}=t;let v,D;const V=ba(t);try{if(n.shapeFlag&4){const R=i||s;v=Jt(u.call(R,R,h,r,p,d,g)),D=l}else{const R=e;v=Jt(R.length>1?R(r,{attrs:l,slots:a,emit:c}):R(r,null)),D=e.props?l:hw(l)}}catch(R){Cr.length=0,Nl(R,t,1),v=Le(is)}let N=v;if(D&&m!==!1){const R=Object.keys(D),{shapeFlag:G}=N;R.length&&G&7&&(o&&R.some(Ah)&&(D=dw(D,o)),N=Si(N,D))}return n.dirs&&(N=Si(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),v=N,ba(V),v}const hw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Il(n))&&((e||(e={}))[n]=t[n]);return e},dw=(t,e)=>{const n={};for(const s in t)(!Ah(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function fw(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?qf(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Dl(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?qf(s,o,c):!0:!!o;return!1}function qf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Dl(n,r))return!0}return!1}function pw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const am="components";function tn(t,e){return gw(am,t,!0,e)||t}const _w=Symbol.for("v-ndc");function gw(t,e,n=!0,s=!1){const i=ze||Ue;if(i){const r=i.type;if(t===am){const a=l0(r,!1);if(a&&(a===e||a===dn(e)||a===Rl(dn(e))))return r}const o=Hf(i[t]||r[t],e)||Hf(i.appContext[t],e);return!o&&s?r:o}}function Hf(t,e){return t&&(t[e]||t[dn(e)]||t[Rl(dn(e))])}const mw=t=>t.__isSuspense;function yw(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):lw(t)}const Go={};function wr(t,e,n){return lm(t,e,n)}function lm(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=we){var a;const l=Sh()===((a=Ue)==null?void 0:a.scope)?Ue:null;let c,u=!1,h=!1;if(Pe(t)?(c=()=>t.value,u=Sa(t)):Qn(t)?(c=()=>t,s=!0):$(t)?(h=!0,u=t.some(R=>Qn(R)||Sa(R)),c=()=>t.map(R=>{if(Pe(R))return R.value;if(Qn(R))return Ts(R);if(Y(R))return Xn(R,l,2)})):Y(t)?e?c=()=>Xn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),$t(t,l,3,[p])}:c=Wt,e&&s){const R=c;c=()=>Ts(R())}let d,p=R=>{d=V.onStop=()=>{Xn(R,l,4)}},g;if(Hr)if(p=Wt,e?n&&$t(e,l,3,[c(),h?[]:void 0,p]):c(),i==="sync"){const R=h0();g=R.__watcherHandles||(R.__watcherHandles=[])}else return Wt;let m=h?new Array(t.length).fill(Go):Go;const v=()=>{if(V.active)if(e){const R=V.run();(s||u||(h?R.some((G,de)=>Os(G,m[de])):Os(R,m)))&&(d&&d(),$t(e,l,3,[R,m===Go?void 0:h&&m[0]===Go?[]:m,p]),m=R)}else V.run()};v.allowRecurse=!!e;let D;i==="sync"?D=v:i==="post"?D=()=>yt(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),D=()=>Mh(v));const V=new Ph(c,D);e?n?v():m=V.run():i==="post"?yt(V.run.bind(V),l&&l.suspense):V.run();const N=()=>{V.stop(),l&&l.scope&&Rh(l.scope.effects,V)};return g&&g.push(N),N}function vw(t,e,n){const s=this.proxy,i=We(t)?t.includes(".")?cm(s,t):()=>s[t]:t.bind(s,s);let r;Y(e)?r=e:(r=e.handler,n=e);const o=Ue;bi(this);const a=lm(i,r.bind(s),n);return o?bi(o):Ps(),a}function cm(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Ts(t,e){if(!Ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Pe(t))Ts(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Ts(t[n],e);else if(wl(t)||ui(t))t.forEach(n=>{Ts(n,e)});else if(Dg(t))for(const n in t)Ts(t[n],e);return t}function Pa(t,e){const n=ze;if(n===null)return t;const s=Ul(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=we]=e[r];o&&(Y(o)&&(o={mounted:o,updated:o}),o.deep&&Ts(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function ps(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(ji(),$t(l,n,8,[t.el,a,t,e]),qi())}}const Ar=t=>!!t.type.__asyncLoader,um=t=>t.type.__isKeepAlive;function Ew(t,e){hm(t,"a",e)}function Tw(t,e){hm(t,"da",e)}function hm(t,e,n=Ue){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ll(e,s,n),n){let i=n.parent;for(;i&&i.parent;)um(i.parent.vnode)&&Iw(s,e,n,i),i=i.parent}}function Iw(t,e,n,s){const i=Ll(e,t,s,!0);Lh(()=>{Rh(s[e],i)},n)}function Ll(t,e,n=Ue,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ji(),bi(n);const a=$t(e,n,t,o);return Ps(),qi(),a});return s?i.unshift(r):i.push(r),r}}const Vn=t=>(e,n=Ue)=>(!Hr||t==="sp")&&Ll(t,(...s)=>e(...s),n),ww=Vn("bm"),dm=Vn("m"),Aw=Vn("bu"),Rw=Vn("u"),Cw=Vn("bum"),Lh=Vn("um"),fm=Vn("sp"),Sw=Vn("rtg"),bw=Vn("rtc");function Pw(t,e=Ue){Ll("ec",t,e)}function ka(t,e,n,s){let i;const r=n&&n[s];if($(t)||We(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ee(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function kw(t,e,n={},s,i){if(ze.isCE||ze.parent&&Ar(ze.parent)&&ze.parent.isCE)return e!=="default"&&(n.name=e),Le("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),J();const o=r&&pm(r(n)),a=Ci(Ye,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function pm(t){return t.some(e=>Am(e)?!(e.type===is||e.type===Ye&&!pm(e.children)):!0)?t:null}const _u=t=>t?Cm(t)?Ul(t)||t.proxy:_u(t.parent):null,Rr=dt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_u(t.parent),$root:t=>_u(t.root),$emit:t=>t.emit,$options:t=>Vh(t),$forceUpdate:t=>t.f||(t.f=()=>Mh(t.update)),$nextTick:t=>t.n||(t.n=nm.bind(t.proxy)),$watch:t=>vw.bind(t)}),Nc=(t,e)=>t!==we&&!t.__isScriptSetup&&le(t,e),Nw={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Nc(s,e))return o[e]=1,s[e];if(i!==we&&le(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&le(c,e))return o[e]=3,r[e];if(n!==we&&le(n,e))return o[e]=4,n[e];gu&&(o[e]=0)}}const u=Rr[e];let h,d;if(u)return e==="$attrs"&&It(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==we&&le(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,le(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Nc(i,e)?(i[e]=n,!0):s!==we&&le(s,e)?(s[e]=n,!0):le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==we&&le(t,o)||Nc(e,o)||(a=r[0])&&le(a,o)||le(s,o)||le(Rr,o)||le(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function zf(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let gu=!0;function Dw(t){const e=Vh(t),n=t.proxy,s=t.ctx;gu=!1,e.beforeCreate&&Kf(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:m,deactivated:v,beforeDestroy:D,beforeUnmount:V,destroyed:N,unmounted:R,render:G,renderTracked:de,renderTriggered:me,errorCaptured:j,serverPrefetch:Z,expose:Te,inheritAttrs:At,components:Gt,directives:Ys,filters:ir}=e;if(c&&Ow(c,s,null),o)for(const ke in o){const ye=o[ke];Y(ye)&&(s[ke]=ye.bind(n))}if(i){const ke=i.call(n,n);Ee(ke)&&(t.data=Pl(ke))}if(gu=!0,r)for(const ke in r){const ye=r[ke],ds=Y(ye)?ye.bind(n,n):Y(ye.get)?ye.get.bind(n,n):Wt,Wo=!Y(ye)&&Y(ye.set)?ye.set.bind(n):Wt,fs=$h({get:ds,set:Wo});Object.defineProperty(s,ke,{enumerable:!0,configurable:!0,get:()=>fs.value,set:Qt=>fs.value=Qt})}if(a)for(const ke in a)_m(a[ke],s,n,ke);if(l){const ke=Y(l)?l.call(n):l;Reflect.ownKeys(ke).forEach(ye=>{Uw(ye,ke[ye])})}u&&Kf(u,t,"c");function pe(ke,ye){$(ye)?ye.forEach(ds=>ke(ds.bind(n))):ye&&ke(ye.bind(n))}if(pe(ww,h),pe(dm,d),pe(Aw,p),pe(Rw,g),pe(Ew,m),pe(Tw,v),pe(Pw,j),pe(bw,de),pe(Sw,me),pe(Cw,V),pe(Lh,R),pe(fm,Z),$(Te))if(Te.length){const ke=t.exposed||(t.exposed={});Te.forEach(ye=>{Object.defineProperty(ke,ye,{get:()=>n[ye],set:ds=>n[ye]=ds})})}else t.exposed||(t.exposed={});G&&t.render===Wt&&(t.render=G),At!=null&&(t.inheritAttrs=At),Gt&&(t.components=Gt),Ys&&(t.directives=Ys)}function Ow(t,e,n=Wt){$(t)&&(t=mu(t));for(const s in t){const i=t[s];let r;Ee(i)?"default"in i?r=bs(i.from||s,i.default,!0):r=bs(i.from||s):r=bs(i),Pe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Kf(t,e,n){$t($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function _m(t,e,n,s){const i=s.includes(".")?cm(n,s):()=>n[s];if(We(t)){const r=e[t];Y(r)&&wr(i,r)}else if(Y(t))wr(i,t.bind(n));else if(Ee(t))if($(t))t.forEach(r=>_m(r,e,n,s));else{const r=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(r)&&wr(i,r,t)}}function Vh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Na(l,c,o,!0)),Na(l,e,o)),Ee(e)&&r.set(e,l),l}function Na(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Na(t,r,n,!0),i&&i.forEach(o=>Na(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=xw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const xw={data:Gf,props:Qf,emits:Qf,methods:gr,computed:gr,beforeCreate:_t,created:_t,beforeMount:_t,mounted:_t,beforeUpdate:_t,updated:_t,beforeDestroy:_t,beforeUnmount:_t,destroyed:_t,unmounted:_t,activated:_t,deactivated:_t,errorCaptured:_t,serverPrefetch:_t,components:gr,directives:gr,watch:Lw,provide:Gf,inject:Mw};function Gf(t,e){return e?t?function(){return dt(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function Mw(t,e){return gr(mu(t),mu(e))}function mu(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _t(t,e){return t?[...new Set([].concat(t,e))]:e}function gr(t,e){return t?dt(Object.create(null),t,e):e}function Qf(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:dt(Object.create(null),zf(t),zf(e??{})):e}function Lw(t,e){if(!t)return e;if(!e)return t;const n=dt(Object.create(null),t);for(const s in e)n[s]=_t(t[s],e[s]);return n}function gm(){return{app:null,config:{isNativeTag:fI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vw=0;function Fw(t,e){return function(s,i=null){Y(s)||(s=dt({},s)),i!=null&&!Ee(i)&&(i=null);const r=gm(),o=new WeakSet;let a=!1;const l=r.app={_uid:Vw++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:d0,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Y(c.install)?(o.add(c),c.install(l,...u)):Y(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Le(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Ul(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){jr=l;try{return c()}finally{jr=null}}};return l}}let jr=null;function Uw(t,e){if(Ue){let n=Ue.provides;const s=Ue.parent&&Ue.parent.provides;s===n&&(n=Ue.provides=Object.create(s)),n[t]=e}}function bs(t,e,n=!1){const s=Ue||ze;if(s||jr){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:jr._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Y(e)?e.call(s&&s.proxy):e}}function Bw(){return!!(Ue||ze||jr)}function Ww(t,e,n,s=!1){const i={},r={};Aa(r,Fl,1),t.propsDefaults=Object.create(null),mm(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:QI(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function $w(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ce(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Dl(t.emitsOptions,d))continue;const p=e[d];if(l)if(le(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const g=dn(d);i[g]=yu(l,a,g,p,t,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{mm(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!le(e,h)&&((u=js(h))===h||!le(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=yu(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!le(e,h))&&(delete r[h],c=!0)}c&&Pn(t,"set","$attrs")}function mm(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ha(l))continue;const c=e[l];let u;i&&le(i,u=dn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Dl(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ce(n),c=a||we;for(let u=0;u<r.length;u++){const h=r[u];n[h]=yu(i,l,h,c[h],t,!le(c,h))}}return o}function yu(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Y(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(bi(i),s=c[n]=l.call(null,e),Ps())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===js(n))&&(s=!0))}return s}function ym(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!Y(t)){const u=h=>{l=!0;const[d,p]=ym(h,e,!0);dt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ee(t)&&s.set(t,ci),ci;if($(r))for(let u=0;u<r.length;u++){const h=dn(r[u]);Yf(h)&&(o[h]=we)}else if(r)for(const u in r){const h=dn(u);if(Yf(h)){const d=r[u],p=o[h]=$(d)||Y(d)?{type:d}:dt({},d);if(p){const g=Zf(Boolean,p.type),m=Zf(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||le(p,"default"))&&a.push(h)}}}const c=[o,a];return Ee(t)&&s.set(t,c),c}function Yf(t){return t[0]!=="$"}function Xf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Jf(t,e){return Xf(t)===Xf(e)}function Zf(t,e){return $(e)?e.findIndex(n=>Jf(n,t)):Y(e)&&Jf(e,t)?0:-1}const vm=t=>t[0]==="_"||t==="$stable",Fh=t=>$(t)?t.map(Jt):[Jt(t)],jw=(t,e,n)=>{if(e._n)return e;const s=fa((...i)=>Fh(e(...i)),n);return s._c=!1,s},Em=(t,e,n)=>{const s=t._ctx;for(const i in t){if(vm(i))continue;const r=t[i];if(Y(r))e[i]=jw(i,r,s);else if(r!=null){const o=Fh(r);e[i]=()=>o}}},Tm=(t,e)=>{const n=Fh(e);t.slots.default=()=>n},qw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ce(e),Aa(e,"_",n)):Em(e,t.slots={})}else t.slots={},e&&Tm(t,e);Aa(t.slots,Fl,1)},Hw=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=we;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(dt(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Em(e,i)),o=e}else e&&(Tm(t,e),o={default:1});if(r)for(const a in i)!vm(a)&&o[a]==null&&delete i[a]};function vu(t,e,n,s,i=!1){if($(t)){t.forEach((d,p)=>vu(d,e&&($(e)?e[p]:e),n,s,i));return}if(Ar(s)&&!i)return;const r=s.shapeFlag&4?Ul(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===we?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(We(c)?(u[c]=null,le(h,c)&&(h[c]=null)):Pe(c)&&(c.value=null)),Y(l))Xn(l,a,12,[o,u]);else{const d=We(l),p=Pe(l);if(d||p){const g=()=>{if(t.f){const m=d?le(h,l)?h[l]:u[l]:l.value;i?$(m)&&Rh(m,r):$(m)?m.includes(r)||m.push(r):d?(u[l]=[r],le(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,le(h,l)&&(h[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,yt(g,n)):g()}}}const yt=yw;function zw(t){return Kw(t)}function Kw(t,e){const n=uu();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Wt,insertStaticContent:g}=t,m=(f,_,y,E=null,T=null,S=null,O=!1,C=null,b=!!_.dynamicChildren)=>{if(f===_)return;f&&!or(f,_)&&(E=$o(f),Qt(f,T,S,!0),f=null),_.patchFlag===-2&&(b=!1,_.dynamicChildren=null);const{type:A,ref:U,shapeFlag:L}=_;switch(A){case Vl:v(f,_,y,E);break;case is:D(f,_,y,E);break;case Dc:f==null&&V(_,y,E,O);break;case Ye:Gt(f,_,y,E,T,S,O,C,b);break;default:L&1?G(f,_,y,E,T,S,O,C,b):L&6?Ys(f,_,y,E,T,S,O,C,b):(L&64||L&128)&&A.process(f,_,y,E,T,S,O,C,b,Xs)}U!=null&&T&&vu(U,f&&f.ref,S,_||f,!_)},v=(f,_,y,E)=>{if(f==null)s(_.el=a(_.children),y,E);else{const T=_.el=f.el;_.children!==f.children&&c(T,_.children)}},D=(f,_,y,E)=>{f==null?s(_.el=l(_.children||""),y,E):_.el=f.el},V=(f,_,y,E)=>{[f.el,f.anchor]=g(f.children,_,y,E,f.el,f.anchor)},N=({el:f,anchor:_},y,E)=>{let T;for(;f&&f!==_;)T=d(f),s(f,y,E),f=T;s(_,y,E)},R=({el:f,anchor:_})=>{let y;for(;f&&f!==_;)y=d(f),i(f),f=y;i(_)},G=(f,_,y,E,T,S,O,C,b)=>{O=O||_.type==="svg",f==null?de(_,y,E,T,S,O,C,b):Z(f,_,T,S,O,C,b)},de=(f,_,y,E,T,S,O,C)=>{let b,A;const{type:U,props:L,shapeFlag:B,transition:Q,dirs:ee}=f;if(b=f.el=o(f.type,S,L&&L.is,L),B&8?u(b,f.children):B&16&&j(f.children,b,null,E,T,S&&U!=="foreignObject",O,C),ee&&ps(f,null,E,"created"),me(b,f,f.scopeId,O,E),L){for(const _e in L)_e!=="value"&&!ha(_e)&&r(b,_e,null,L[_e],S,f.children,E,T,En);"value"in L&&r(b,"value",null,L.value),(A=L.onVnodeBeforeMount)&&Xt(A,E,f)}ee&&ps(f,null,E,"beforeMount");const ve=Gw(T,Q);ve&&Q.beforeEnter(b),s(b,_,y),((A=L&&L.onVnodeMounted)||ve||ee)&&yt(()=>{A&&Xt(A,E,f),ve&&Q.enter(b),ee&&ps(f,null,E,"mounted")},T)},me=(f,_,y,E,T)=>{if(y&&p(f,y),E)for(let S=0;S<E.length;S++)p(f,E[S]);if(T){let S=T.subTree;if(_===S){const O=T.vnode;me(f,O,O.scopeId,O.slotScopeIds,T.parent)}}},j=(f,_,y,E,T,S,O,C,b=0)=>{for(let A=b;A<f.length;A++){const U=f[A]=C?jn(f[A]):Jt(f[A]);m(null,U,_,y,E,T,S,O,C)}},Z=(f,_,y,E,T,S,O)=>{const C=_.el=f.el;let{patchFlag:b,dynamicChildren:A,dirs:U}=_;b|=f.patchFlag&16;const L=f.props||we,B=_.props||we;let Q;y&&_s(y,!1),(Q=B.onVnodeBeforeUpdate)&&Xt(Q,y,_,f),U&&ps(_,f,y,"beforeUpdate"),y&&_s(y,!0);const ee=T&&_.type!=="foreignObject";if(A?Te(f.dynamicChildren,A,C,y,E,ee,S):O||ye(f,_,C,null,y,E,ee,S,!1),b>0){if(b&16)At(C,_,L,B,y,E,T);else if(b&2&&L.class!==B.class&&r(C,"class",null,B.class,T),b&4&&r(C,"style",L.style,B.style,T),b&8){const ve=_.dynamicProps;for(let _e=0;_e<ve.length;_e++){const De=ve[_e],xt=L[De],Js=B[De];(Js!==xt||De==="value")&&r(C,De,xt,Js,T,f.children,y,E,En)}}b&1&&f.children!==_.children&&u(C,_.children)}else!O&&A==null&&At(C,_,L,B,y,E,T);((Q=B.onVnodeUpdated)||U)&&yt(()=>{Q&&Xt(Q,y,_,f),U&&ps(_,f,y,"updated")},E)},Te=(f,_,y,E,T,S,O)=>{for(let C=0;C<_.length;C++){const b=f[C],A=_[C],U=b.el&&(b.type===Ye||!or(b,A)||b.shapeFlag&70)?h(b.el):y;m(b,A,U,null,E,T,S,O,!0)}},At=(f,_,y,E,T,S,O)=>{if(y!==E){if(y!==we)for(const C in y)!ha(C)&&!(C in E)&&r(f,C,y[C],null,O,_.children,T,S,En);for(const C in E){if(ha(C))continue;const b=E[C],A=y[C];b!==A&&C!=="value"&&r(f,C,A,b,O,_.children,T,S,En)}"value"in E&&r(f,"value",y.value,E.value)}},Gt=(f,_,y,E,T,S,O,C,b)=>{const A=_.el=f?f.el:a(""),U=_.anchor=f?f.anchor:a("");let{patchFlag:L,dynamicChildren:B,slotScopeIds:Q}=_;Q&&(C=C?C.concat(Q):Q),f==null?(s(A,y,E),s(U,y,E),j(_.children,y,U,T,S,O,C,b)):L>0&&L&64&&B&&f.dynamicChildren?(Te(f.dynamicChildren,B,y,T,S,O,C),(_.key!=null||T&&_===T.subTree)&&Im(f,_,!0)):ye(f,_,y,U,T,S,O,C,b)},Ys=(f,_,y,E,T,S,O,C,b)=>{_.slotScopeIds=C,f==null?_.shapeFlag&512?T.ctx.activate(_,y,E,O,b):ir(_,y,E,T,S,O,b):Un(f,_,b)},ir=(f,_,y,E,T,S,O)=>{const C=f.component=s0(f,E,T);if(um(f)&&(C.ctx.renderer=Xs),i0(C),C.asyncDep){if(T&&T.registerDep(C,pe),!f.el){const b=C.subTree=Le(is);D(null,b,_,y)}return}pe(C,f,_,y,T,S,O)},Un=(f,_,y)=>{const E=_.component=f.component;if(fw(f,_,y))if(E.asyncDep&&!E.asyncResolved){ke(E,_,y);return}else E.next=_,aw(E.update),E.update();else _.el=f.el,E.vnode=_},pe=(f,_,y,E,T,S,O)=>{const C=()=>{if(f.isMounted){let{next:U,bu:L,u:B,parent:Q,vnode:ee}=f,ve=U,_e;_s(f,!1),U?(U.el=ee.el,ke(f,U,O)):U=ee,L&&da(L),(_e=U.props&&U.props.onVnodeBeforeUpdate)&&Xt(_e,Q,U,ee),_s(f,!0);const De=kc(f),xt=f.subTree;f.subTree=De,m(xt,De,h(xt.el),$o(xt),f,T,S),U.el=De.el,ve===null&&pw(f,De.el),B&&yt(B,T),(_e=U.props&&U.props.onVnodeUpdated)&&yt(()=>Xt(_e,Q,U,ee),T)}else{let U;const{el:L,props:B}=_,{bm:Q,m:ee,parent:ve}=f,_e=Ar(_);if(_s(f,!1),Q&&da(Q),!_e&&(U=B&&B.onVnodeBeforeMount)&&Xt(U,ve,_),_s(f,!0),L&&bc){const De=()=>{f.subTree=kc(f),bc(L,f.subTree,f,T,null)};_e?_.type.__asyncLoader().then(()=>!f.isUnmounted&&De()):De()}else{const De=f.subTree=kc(f);m(null,De,y,E,f,T,S),_.el=De.el}if(ee&&yt(ee,T),!_e&&(U=B&&B.onVnodeMounted)){const De=_;yt(()=>Xt(U,ve,De),T)}(_.shapeFlag&256||ve&&Ar(ve.vnode)&&ve.vnode.shapeFlag&256)&&f.a&&yt(f.a,T),f.isMounted=!0,_=y=E=null}},b=f.effect=new Ph(C,()=>Mh(A),f.scope),A=f.update=()=>b.run();A.id=f.uid,_s(f,!0),A()},ke=(f,_,y)=>{_.component=f;const E=f.vnode.props;f.vnode=_,f.next=null,$w(f,_.props,E,y),Hw(f,_.children,y),ji(),jf(),qi()},ye=(f,_,y,E,T,S,O,C,b=!1)=>{const A=f&&f.children,U=f?f.shapeFlag:0,L=_.children,{patchFlag:B,shapeFlag:Q}=_;if(B>0){if(B&128){Wo(A,L,y,E,T,S,O,C,b);return}else if(B&256){ds(A,L,y,E,T,S,O,C,b);return}}Q&8?(U&16&&En(A,T,S),L!==A&&u(y,L)):U&16?Q&16?Wo(A,L,y,E,T,S,O,C,b):En(A,T,S,!0):(U&8&&u(y,""),Q&16&&j(L,y,E,T,S,O,C,b))},ds=(f,_,y,E,T,S,O,C,b)=>{f=f||ci,_=_||ci;const A=f.length,U=_.length,L=Math.min(A,U);let B;for(B=0;B<L;B++){const Q=_[B]=b?jn(_[B]):Jt(_[B]);m(f[B],Q,y,null,T,S,O,C,b)}A>U?En(f,T,S,!0,!1,L):j(_,y,E,T,S,O,C,b,L)},Wo=(f,_,y,E,T,S,O,C,b)=>{let A=0;const U=_.length;let L=f.length-1,B=U-1;for(;A<=L&&A<=B;){const Q=f[A],ee=_[A]=b?jn(_[A]):Jt(_[A]);if(or(Q,ee))m(Q,ee,y,null,T,S,O,C,b);else break;A++}for(;A<=L&&A<=B;){const Q=f[L],ee=_[B]=b?jn(_[B]):Jt(_[B]);if(or(Q,ee))m(Q,ee,y,null,T,S,O,C,b);else break;L--,B--}if(A>L){if(A<=B){const Q=B+1,ee=Q<U?_[Q].el:E;for(;A<=B;)m(null,_[A]=b?jn(_[A]):Jt(_[A]),y,ee,T,S,O,C,b),A++}}else if(A>B)for(;A<=L;)Qt(f[A],T,S,!0),A++;else{const Q=A,ee=A,ve=new Map;for(A=ee;A<=B;A++){const Rt=_[A]=b?jn(_[A]):Jt(_[A]);Rt.key!=null&&ve.set(Rt.key,A)}let _e,De=0;const xt=B-ee+1;let Js=!1,Nf=0;const rr=new Array(xt);for(A=0;A<xt;A++)rr[A]=0;for(A=Q;A<=L;A++){const Rt=f[A];if(De>=xt){Qt(Rt,T,S,!0);continue}let Yt;if(Rt.key!=null)Yt=ve.get(Rt.key);else for(_e=ee;_e<=B;_e++)if(rr[_e-ee]===0&&or(Rt,_[_e])){Yt=_e;break}Yt===void 0?Qt(Rt,T,S,!0):(rr[Yt-ee]=A+1,Yt>=Nf?Nf=Yt:Js=!0,m(Rt,_[Yt],y,null,T,S,O,C,b),De++)}const Df=Js?Qw(rr):ci;for(_e=Df.length-1,A=xt-1;A>=0;A--){const Rt=ee+A,Yt=_[Rt],Of=Rt+1<U?_[Rt+1].el:E;rr[A]===0?m(null,Yt,y,Of,T,S,O,C,b):Js&&(_e<0||A!==Df[_e]?fs(Yt,y,Of,2):_e--)}}},fs=(f,_,y,E,T=null)=>{const{el:S,type:O,transition:C,children:b,shapeFlag:A}=f;if(A&6){fs(f.component.subTree,_,y,E);return}if(A&128){f.suspense.move(_,y,E);return}if(A&64){O.move(f,_,y,Xs);return}if(O===Ye){s(S,_,y);for(let L=0;L<b.length;L++)fs(b[L],_,y,E);s(f.anchor,_,y);return}if(O===Dc){N(f,_,y);return}if(E!==2&&A&1&&C)if(E===0)C.beforeEnter(S),s(S,_,y),yt(()=>C.enter(S),T);else{const{leave:L,delayLeave:B,afterLeave:Q}=C,ee=()=>s(S,_,y),ve=()=>{L(S,()=>{ee(),Q&&Q()})};B?B(S,ee,ve):ve()}else s(S,_,y)},Qt=(f,_,y,E=!1,T=!1)=>{const{type:S,props:O,ref:C,children:b,dynamicChildren:A,shapeFlag:U,patchFlag:L,dirs:B}=f;if(C!=null&&vu(C,null,y,f,!0),U&256){_.ctx.deactivate(f);return}const Q=U&1&&B,ee=!Ar(f);let ve;if(ee&&(ve=O&&O.onVnodeBeforeUnmount)&&Xt(ve,_,f),U&6)dI(f.component,y,E);else{if(U&128){f.suspense.unmount(y,E);return}Q&&ps(f,null,_,"beforeUnmount"),U&64?f.type.remove(f,_,y,T,Xs,E):A&&(S!==Ye||L>0&&L&64)?En(A,_,y,!1,!0):(S===Ye&&L&384||!T&&U&16)&&En(b,_,y),E&&Pf(f)}(ee&&(ve=O&&O.onVnodeUnmounted)||Q)&&yt(()=>{ve&&Xt(ve,_,f),Q&&ps(f,null,_,"unmounted")},y)},Pf=f=>{const{type:_,el:y,anchor:E,transition:T}=f;if(_===Ye){hI(y,E);return}if(_===Dc){R(f);return}const S=()=>{i(y),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(f.shapeFlag&1&&T&&!T.persisted){const{leave:O,delayLeave:C}=T,b=()=>O(y,S);C?C(f.el,S,b):b()}else S()},hI=(f,_)=>{let y;for(;f!==_;)y=d(f),i(f),f=y;i(_)},dI=(f,_,y)=>{const{bum:E,scope:T,update:S,subTree:O,um:C}=f;E&&da(E),T.stop(),S&&(S.active=!1,Qt(O,f,_,y)),C&&yt(C,_),yt(()=>{f.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},En=(f,_,y,E=!1,T=!1,S=0)=>{for(let O=S;O<f.length;O++)Qt(f[O],_,y,E,T)},$o=f=>f.shapeFlag&6?$o(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),kf=(f,_,y)=>{f==null?_._vnode&&Qt(_._vnode,null,null,!0):m(_._vnode||null,f,_,null,null,null,y),jf(),im(),_._vnode=f},Xs={p:m,um:Qt,m:fs,r:Pf,mt:ir,mc:j,pc:ye,pbc:Te,n:$o,o:t};let Sc,bc;return e&&([Sc,bc]=e(Xs)),{render:kf,hydrate:Sc,createApp:Fw(kf,Sc)}}function _s({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Gw(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Im(t,e,n=!1){const s=t.children,i=e.children;if($(s)&&$(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=jn(i[r]),a.el=o.el),n||Im(o,a)),a.type===Vl&&(a.el=o.el)}}function Qw(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Yw=t=>t.__isTeleport,Ye=Symbol.for("v-fgt"),Vl=Symbol.for("v-txt"),is=Symbol.for("v-cmt"),Dc=Symbol.for("v-stc"),Cr=[];let Vt=null;function J(t=!1){Cr.push(Vt=t?null:[])}function Xw(){Cr.pop(),Vt=Cr[Cr.length-1]||null}let qr=1;function ep(t){qr+=t}function wm(t){return t.dynamicChildren=qr>0?Vt||ci:null,Xw(),qr>0&&Vt&&Vt.push(t),t}function re(t,e,n,s,i,r){return wm(x(t,e,n,s,i,r,!0))}function Ci(t,e,n,s,i){return wm(Le(t,e,n,s,i,!0))}function Am(t){return t?t.__v_isVNode===!0:!1}function or(t,e){return t.type===e.type&&t.key===e.key}const Fl="__vInternal",Rm=({key:t})=>t??null,pa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||Pe(t)||Y(t)?{i:ze,r:t,k:e,f:!!n}:t:null);function x(t,e=null,n=null,s=0,i=null,r=t===Ye?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rm(e),ref:e&&pa(e),scopeId:Ol,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ze};return a?(Uh(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=We(n)?8:16),qr>0&&!o&&Vt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Vt.push(l),l}const Le=Jw;function Jw(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===_w)&&(t=is),Am(t)){const a=Si(t,e,!0);return n&&Uh(a,n),qr>0&&!r&&Vt&&(a.shapeFlag&6?Vt[Vt.indexOf(t)]=a:Vt.push(a)),a.patchFlag|=-2,a}if(c0(t)&&(t=t.__vccOpts),e){e=Zw(e);let{class:a,style:l}=e;a&&!We(a)&&(e.class=$i(a)),Ee(l)&&(Gg(l)&&!$(l)&&(l=dt({},l)),e.style=Ur(l))}const o=We(t)?1:mw(t)?128:Yw(t)?64:Ee(t)?4:Y(t)?2:0;return x(t,e,n,s,i,o,r,!0)}function Zw(t){return t?Gg(t)||Fl in t?dt({},t):t:null}function Si(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?e0(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Rm(a),ref:e&&e.ref?n&&i?$(i)?i.concat(pa(e)):[i,pa(e)]:pa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ye?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Si(t.ssContent),ssFallback:t.ssFallback&&Si(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function di(t=" ",e=0){return Le(Vl,null,t,e)}function vt(t="",e=!1){return e?(J(),Ci(is,null,t)):Le(is,null,t)}function Jt(t){return t==null||typeof t=="boolean"?Le(is):$(t)?Le(Ye,null,t.slice()):typeof t=="object"?jn(t):Le(Vl,null,String(t))}function jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Si(t)}function Uh(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Uh(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Fl in e)?e._ctx=ze:i===3&&ze&&(ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:ze},n=32):(e=String(e),s&64?(n=16,e=[di(e)]):n=8);t.children=e,t.shapeFlag|=n}function e0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=$i([e.class,s.class]));else if(i==="style")e.style=Ur([e.style,s.style]);else if(Il(i)){const r=e[i],o=s[i];o&&r!==o&&!($(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Xt(t,e,n,s=null){$t(t,e,7,[n,s])}const t0=gm();let n0=0;function s0(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||t0,r={uid:n0++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ym(s,i),emitsOptions:om(s,i),emit:null,emitted:null,propsDefaults:we,inheritAttrs:s.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=uw.bind(null,r),t.ce&&t.ce(r),r}let Ue=null;const Bh=()=>Ue||ze;let Wh,Zs,tp="__VUE_INSTANCE_SETTERS__";(Zs=uu()[tp])||(Zs=uu()[tp]=[]),Zs.push(t=>Ue=t),Wh=t=>{Zs.length>1?Zs.forEach(e=>e(t)):Zs[0](t)};const bi=t=>{Wh(t),t.scope.on()},Ps=()=>{Ue&&Ue.scope.off(),Wh(null)};function Cm(t){return t.vnode.shapeFlag&4}let Hr=!1;function i0(t,e=!1){Hr=e;const{props:n,children:s}=t.vnode,i=Cm(t);Ww(t,n,i,e),qw(t,s);const r=i?r0(t,e):void 0;return Hr=!1,r}function r0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=kl(new Proxy(t.ctx,Nw));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?a0(t):null;bi(t),ji();const r=Xn(s,t,0,[t.props,i]);if(qi(),Ps(),kg(r)){if(r.then(Ps,Ps),e)return r.then(o=>{np(t,o,e)}).catch(o=>{Nl(o,t,0)});t.asyncDep=r}else np(t,r,e)}else Sm(t,e)}function np(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=Zg(e)),Sm(t,n)}let sp;function Sm(t,e,n){const s=t.type;if(!t.render){if(!e&&sp&&!s.render){const i=s.template||Vh(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=dt(dt({isCustomElement:r,delimiters:a},o),l);s.render=sp(i,c)}}t.render=s.render||Wt}{bi(t),ji();try{Dw(t)}finally{qi(),Ps()}}}function o0(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return It(t,"get","$attrs"),e[n]}}))}function a0(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return o0(t)},slots:t.slots,emit:t.emit,expose:e}}function Ul(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Zg(kl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rr)return Rr[n](t)},has(e,n){return n in e||n in Rr}}))}function l0(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function c0(t){return Y(t)&&"__vccOpts"in t}const $h=(t,e)=>iw(t,e,Hr),u0=Symbol.for("v-scx"),h0=()=>bs(u0),d0="3.3.8",f0="http://www.w3.org/2000/svg",vs=typeof document<"u"?document:null,ip=vs&&vs.createElement("template"),p0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?vs.createElementNS(f0,t):vs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>vs.createTextNode(t),createComment:t=>vs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ip.innerHTML=s?`<svg>${t}</svg>`:t;const a=ip.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_0=Symbol("_vtc");function g0(t,e,n){const s=t[_0];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const m0=Symbol("_vod");function y0(t,e,n){const s=t.style,i=We(n);if(n&&!i){if(e&&!We(e))for(const r in e)n[r]==null&&Eu(s,r,"");for(const r in n)Eu(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),m0 in t&&(s.display=r)}}const rp=/\s*!important$/;function Eu(t,e,n){if($(n))n.forEach(s=>Eu(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=v0(t,e);rp.test(n)?t.setProperty(js(s),n.replace(rp,""),"important"):t[s]=n}}const op=["Webkit","Moz","ms"],Oc={};function v0(t,e){const n=Oc[e];if(n)return n;let s=dn(e);if(s!=="filter"&&s in t)return Oc[e]=s;s=Rl(s);for(let i=0;i<op.length;i++){const r=op[i]+s;if(r in t)return Oc[e]=r}return e}const ap="http://www.w3.org/1999/xlink";function E0(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ap,e.slice(6,e.length)):t.setAttributeNS(ap,e,n);else{const r=AI(e);n==null||r&&!Og(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function T0(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Og(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Es(t,e,n,s){t.addEventListener(e,n,s)}function I0(t,e,n,s){t.removeEventListener(e,n,s)}const lp=Symbol("_vei");function w0(t,e,n,s,i=null){const r=t[lp]||(t[lp]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=A0(e);if(s){const c=r[e]=S0(s,i);Es(t,a,c,l)}else o&&(I0(t,a,o,l),r[e]=void 0)}}const cp=/(?:Once|Passive|Capture)$/;function A0(t){let e;if(cp.test(t)){e={};let s;for(;s=t.match(cp);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):js(t.slice(2)),e]}let xc=0;const R0=Promise.resolve(),C0=()=>xc||(R0.then(()=>xc=0),xc=Date.now());function S0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;$t(b0(s,n.value),e,5,[s])};return n.value=t,n.attached=C0(),n}function b0(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const up=/^on[a-z]/,P0=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?g0(t,s,i):e==="style"?y0(t,n,s):Il(e)?Ah(e)||w0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):k0(t,e,s,i))?T0(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),E0(t,e,s,i))};function k0(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&up.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||up.test(e)&&We(n)?!1:e in t}const Da=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>da(e,n):e};function N0(t){t.target.composing=!0}function hp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fi=Symbol("_assign"),Tu={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[fi]=Da(i);const r=s||i.props&&i.props.type==="number";Es(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Ra(a)),t[fi](a)}),n&&Es(t,"change",()=>{t.value=t.value.trim()}),e||(Es(t,"compositionstart",N0),Es(t,"compositionend",hp),Es(t,"change",hp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t[fi]=Da(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Ra(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},D0={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=wl(e);Es(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ra(Oa(o)):Oa(o));t[fi](t.multiple?i?new Set(r):r:r[0])}),t[fi]=Da(s)},mounted(t,{value:e}){dp(t,e)},beforeUpdate(t,e,n){t[fi]=Da(n)},updated(t,{value:e}){dp(t,e)}};function dp(t,e){const n=t.multiple;if(!(n&&!$(e)&&!wl(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=Oa(r);if(n)$(e)?r.selected=CI(e,o)>-1:r.selected=e.has(o);else if(Cl(Oa(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Oa(t){return"_value"in t?t._value:t.value}const O0=["ctrl","shift","alt","meta"],x0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>O0.some(n=>t[`${n}Key`]&&!e.includes(n))},M0=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=x0[e[i]];if(r&&r(n,e))return}return t(n,...s)},L0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Iu=(t,e)=>n=>{if(!("key"in n))return;const s=js(n.key);if(e.some(i=>i===s||L0[i]===s))return t(n)},V0=dt({patchProp:P0},p0);let fp;function F0(){return fp||(fp=zw(V0))}const U0=(...t)=>{const e=F0().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=B0(s);if(!i)return;const r=e._component;!Y(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function B0(t){return We(t)?document.querySelector(t):t}var W0=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let bm;const Bl=t=>bm=t,Pm=Symbol();function wu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Sr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Sr||(Sr={}));function $0(){const t=Sl(!0),e=t.run(()=>Yn({}));let n=[],s=[];const i=kl({install(r){Bl(i),i._a=r,r.provide(Pm,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!W0?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const km=()=>{};function pp(t,e,n,s=km){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Sh()&&Lg(i),i}function ei(t,...e){t.slice().forEach(n=>{n(...e)})}const j0=t=>t();function Au(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];wu(i)&&wu(s)&&t.hasOwnProperty(n)&&!Pe(s)&&!Qn(s)?t[n]=Au(i,s):t[n]=s}return t}const q0=Symbol();function H0(t){return!wu(t)||!t.hasOwnProperty(q0)}const{assign:$n}=Object;function z0(t){return!!(Pe(t)&&t.effect)}function K0(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=ZI(n.state.value[t]);return $n(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=kl($h(()=>{Bl(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return l=Nm(t,c,e,n,s,!0),l}function Nm(t,e,n={},s,i,r){let o;const a=$n({actions:{}},n),l={deep:!0};let c,u,h=[],d=[],p;const g=s.state.value[t];!r&&!g&&(s.state.value[t]={}),Yn({});let m;function v(j){let Z;c=u=!1,typeof j=="function"?(j(s.state.value[t]),Z={type:Sr.patchFunction,storeId:t,events:p}):(Au(s.state.value[t],j),Z={type:Sr.patchObject,payload:j,storeId:t,events:p});const Te=m=Symbol();nm().then(()=>{m===Te&&(c=!0)}),u=!0,ei(h,Z,s.state.value[t])}const D=r?function(){const{state:Z}=n,Te=Z?Z():{};this.$patch(At=>{$n(At,Te)})}:km;function V(){o.stop(),h=[],d=[],s._s.delete(t)}function N(j,Z){return function(){Bl(s);const Te=Array.from(arguments),At=[],Gt=[];function Ys(pe){At.push(pe)}function ir(pe){Gt.push(pe)}ei(d,{args:Te,name:j,store:G,after:Ys,onError:ir});let Un;try{Un=Z.apply(this&&this.$id===t?this:G,Te)}catch(pe){throw ei(Gt,pe),pe}return Un instanceof Promise?Un.then(pe=>(ei(At,pe),pe)).catch(pe=>(ei(Gt,pe),Promise.reject(pe))):(ei(At,Un),Un)}}const R={_p:s,$id:t,$onAction:pp.bind(null,d),$patch:v,$reset:D,$subscribe(j,Z={}){const Te=pp(h,j,Z.detached,()=>At()),At=o.run(()=>wr(()=>s.state.value[t],Gt=>{(Z.flush==="sync"?u:c)&&j({storeId:t,type:Sr.direct,events:p},Gt)},$n({},l,Z)));return Te},$dispose:V},G=Pl(R);s._s.set(t,G);const me=(s._a&&s._a.runWithContext||j0)(()=>s._e.run(()=>(o=Sl()).run(e)));for(const j in me){const Z=me[j];if(Pe(Z)&&!z0(Z)||Qn(Z))r||(g&&H0(Z)&&(Pe(Z)?Z.value=g[j]:Au(Z,g[j])),s.state.value[t][j]=Z);else if(typeof Z=="function"){const Te=N(j,Z);me[j]=Te,a.actions[j]=Z}}return $n(G,me),$n(ce(G),me),Object.defineProperty(G,"$state",{get:()=>s.state.value[t],set:j=>{v(Z=>{$n(Z,j)})}}),s._p.forEach(j=>{$n(G,o.run(()=>j({store:G,app:s._a,pinia:s,options:a})))}),g&&r&&n.hydrate&&n.hydrate(G.$state,g),c=!0,u=!0,G}function Dm(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=Bw();return a=a||(c?bs(Pm,null):null),a&&Bl(a),a=bm,a._s.has(s)||(r?Nm(s,e,i,a):K0(s,i,a)),a._s.get(s)}return o.$id=s,o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t,e){if(!t)throw Hi(e)},Hi=function(t){return new Error("Firebase Database ("+Om.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},G0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Wl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):G0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Q0;const d=r<<2|a>>4;if(s.push(d),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Q0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mm=function(t){const e=xm(t);return Wl.encodeByteArray(e,!0)},xa=function(t){return Mm(t).replace(/\./g,"")},Ma=function(t){try{return Wl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t){return Lm(void 0,t)}function Lm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!X0(n)||(t[n]=Lm(t[n],e[n]));return t}function X0(t){return t!=="__proto__"}/**
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
 */function J0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Z0=()=>J0().__FIREBASE_DEFAULTS__,eA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ma(t[1]);return e&&JSON.parse(e)},jh=()=>{try{return Z0()||eA()||tA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vm=t=>{var e,n;return(n=(e=jh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nA=t=>{const e=Vm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Fm=()=>{var t;return(t=jh())===null||t===void 0?void 0:t.config},Um=t=>{var e;return(e=jh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function sA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[xa(JSON.stringify(n)),xa(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function iA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Bm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rA(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Wm(){return Om.NODE_ADMIN===!0}function $m(){try{return typeof indexedDB=="object"}catch{return!1}}function oA(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="FirebaseError";class yn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=aA,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zi.prototype.create)}}class zi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?lA(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new yn(i,a,s)}}function lA(t,e){return t.replace(cA,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const cA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(t){return JSON.parse(t)}function Je(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Kr(Ma(r[0])||""),n=Kr(Ma(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},uA=function(t){const e=jm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},hA=function(t){const e=jm(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Pi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ru(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function La(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Va(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(_p(r)&&_p(o)){if(!Va(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function _p(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function fA(t,e){const n=new pA(t,e);return n.subscribe.bind(n)}class pA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");_A(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Mc),i.error===void 0&&(i.error=Mc),i.complete===void 0&&(i.complete=Mc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _A(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mc(){}function gA(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,P(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$l=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function wt(t){return t&&t._delegate?t._delegate:t}class qt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const gs="[DEFAULT]";/**
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
 */class yA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new zr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(EA(e))try{this.getOrInitializeService({instanceIdentifier:gs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=gs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gs){return this.instances.has(e)}getOptions(e=gs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:vA(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=gs){return this.component?this.component.multipleInstances?e:gs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vA(t){return t===gs?void 0:t}function EA(t){return t.instantiationMode==="EAGER"}/**
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
 */class TA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const IA={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},wA=te.INFO,AA={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},RA=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=AA[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class go{constructor(e){this.name=e,this._logLevel=wA,this._logHandler=RA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const CA=(t,e)=>e.some(n=>t instanceof n);let gp,mp;function SA(){return gp||(gp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bA(){return mp||(mp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qm=new WeakMap,Cu=new WeakMap,Hm=new WeakMap,Lc=new WeakMap,Hh=new WeakMap;function PA(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Jn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qm.set(n,t)}).catch(()=>{}),Hh.set(e,t),e}function kA(t){if(Cu.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Cu.set(t,e)}let Su={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function NA(t){Su=t(Su)}function DA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Vc(this),e,...n);return Hm.set(s,e.sort?e.sort():[e]),Jn(s)}:bA().includes(t)?function(...e){return t.apply(Vc(this),e),Jn(qm.get(this))}:function(...e){return Jn(t.apply(Vc(this),e))}}function OA(t){return typeof t=="function"?DA(t):(t instanceof IDBTransaction&&kA(t),CA(t,SA())?new Proxy(t,Su):t)}function Jn(t){if(t instanceof IDBRequest)return PA(t);if(Lc.has(t))return Lc.get(t);const e=OA(t);return e!==t&&(Lc.set(t,e),Hh.set(e,t)),e}const Vc=t=>Hh.get(t);function xA(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Jn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Jn(o.result),l.oldVersion,l.newVersion,Jn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const MA=["get","getKey","getAll","getAllKeys","count"],LA=["put","add","delete","clear"],Fc=new Map;function yp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fc.get(e))return Fc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=LA.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||MA.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Fc.set(e,r),r}NA(t=>({...t,get:(e,n,s)=>yp(e,n)||t.get(e,n,s),has:(e,n)=>!!yp(e,n)||t.has(e,n)}));/**
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
 */class VA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FA(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function FA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bu="@firebase/app",vp="0.9.23";/**
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
 */const xs=new go("@firebase/app"),UA="@firebase/app-compat",BA="@firebase/analytics-compat",WA="@firebase/analytics",$A="@firebase/app-check-compat",jA="@firebase/app-check",qA="@firebase/auth",HA="@firebase/auth-compat",zA="@firebase/database",KA="@firebase/database-compat",GA="@firebase/functions",QA="@firebase/functions-compat",YA="@firebase/installations",XA="@firebase/installations-compat",JA="@firebase/messaging",ZA="@firebase/messaging-compat",eR="@firebase/performance",tR="@firebase/performance-compat",nR="@firebase/remote-config",sR="@firebase/remote-config-compat",iR="@firebase/storage",rR="@firebase/storage-compat",oR="@firebase/firestore",aR="@firebase/firestore-compat",lR="firebase",cR="10.6.0";/**
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
 */const Pu="[DEFAULT]",uR={[bu]:"fire-core",[UA]:"fire-core-compat",[WA]:"fire-analytics",[BA]:"fire-analytics-compat",[jA]:"fire-app-check",[$A]:"fire-app-check-compat",[qA]:"fire-auth",[HA]:"fire-auth-compat",[zA]:"fire-rtdb",[KA]:"fire-rtdb-compat",[GA]:"fire-fn",[QA]:"fire-fn-compat",[YA]:"fire-iid",[XA]:"fire-iid-compat",[JA]:"fire-fcm",[ZA]:"fire-fcm-compat",[eR]:"fire-perf",[tR]:"fire-perf-compat",[nR]:"fire-rc",[sR]:"fire-rc-compat",[iR]:"fire-gcs",[rR]:"fire-gcs-compat",[oR]:"fire-fst",[aR]:"fire-fst-compat","fire-js":"fire-js",[lR]:"fire-js-all"};/**
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
 */const Fa=new Map,ku=new Map;function hR(t,e){try{t.container.addComponent(e)}catch(n){xs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fn(t){const e=t.name;if(ku.has(e))return xs.debug(`There were multiple attempts to register component ${e}.`),!1;ku.set(e,t);for(const n of Fa.values())hR(n,t);return!0}function zh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const dR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zn=new zi("app","Firebase",dR);/**
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
 */class fR{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
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
 */const cs=cR;function zm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Pu,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Zn.create("bad-app-name",{appName:String(i)});if(n||(n=Fm()),!n)throw Zn.create("no-options");const r=Fa.get(i);if(r){if(Va(n,r.options)&&Va(s,r.config))return r;throw Zn.create("duplicate-app",{appName:i})}const o=new TA(i);for(const l of ku.values())o.addComponent(l);const a=new fR(n,s,o);return Fa.set(i,a),a}function Kh(t=Pu){const e=Fa.get(t);if(!e&&t===Pu&&Fm())return zm();if(!e)throw Zn.create("no-app",{appName:t});return e}function St(t,e,n){var s;let i=(s=uR[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xs.warn(a.join(" "));return}fn(new qt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const pR="firebase-heartbeat-database",_R=1,Gr="firebase-heartbeat-store";let Uc=null;function Km(){return Uc||(Uc=xA(pR,_R,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gr)}}}).catch(t=>{throw Zn.create("idb-open",{originalErrorMessage:t.message})})),Uc}async function gR(t){try{return await(await Km()).transaction(Gr).objectStore(Gr).get(Gm(t))}catch(e){if(e instanceof yn)xs.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xs.warn(n.message)}}}async function Ep(t,e){try{const s=(await Km()).transaction(Gr,"readwrite");await s.objectStore(Gr).put(e,Gm(t)),await s.done}catch(n){if(n instanceof yn)xs.warn(n.message);else{const s=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xs.warn(s.message)}}}function Gm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mR=1024,yR=30*24*60*60*1e3;class vR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TR(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Tp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=yR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Tp(),{heartbeatsToSend:s,unsentEntries:i}=ER(this._heartbeatsCache.heartbeats),r=xa(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Tp(){return new Date().toISOString().substring(0,10)}function ER(t,e=mR){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ip(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ip(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class TR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $m()?oA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ep(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ep(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ip(t){return xa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function IR(t){fn(new qt("platform-logger",e=>new VA(e),"PRIVATE")),fn(new qt("heartbeat",e=>new vR(e),"PRIVATE")),St(bu,vp,t),St(bu,vp,"esm2017"),St("fire-js","")}IR("");function Gh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Qm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wR=Qm,Ym=new zi("auth","Firebase",Qm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=new go("@firebase/auth");function AR(t,...e){Ua.logLevel<=te.WARN&&Ua.warn(`Auth (${cs}): ${t}`,...e)}function _a(t,...e){Ua.logLevel<=te.ERROR&&Ua.error(`Auth (${cs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,...e){throw Qh(t,...e)}function an(t,...e){return Qh(t,...e)}function Xm(t,e,n){const s=Object.assign(Object.assign({},wR()),{[e]:n});return new zi("auth","Firebase",s).create(e,{appName:t.name})}function RR(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&pn(t,"argument-error"),Xm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ym.create(t,...e)}function K(t,e,...n){if(!t)throw Qh(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _a(e),new Error(e)}function On(t,e){t||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function CR(){return wp()==="http:"||wp()==="https:"}function wp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CR()||iA()||"connection"in navigator)?navigator.onLine:!0}function bR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=qh()||Bm()}get(){return SR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=new mo(3e4,6e4);function Xh(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gi(t,e,n,s,i={}){return Zm(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ki(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Jm.fetch()(ey(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Zm(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},PR),e);try{const i=new DR(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Qo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Qo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Qo(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Xm(t,u,c);pn(t,u)}}catch(i){if(i instanceof yn)throw i;pn(t,"network-request-failed",{message:String(i)})}}async function NR(t,e,n,s,i={}){const r=await Gi(t,e,n,s,i);return"mfaPendingCredential"in r&&pn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function ey(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Yh(t.config,i):`${t.config.apiScheme}://${i}`}class DR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(an(this.auth,"network-request-failed")),kR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=an(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OR(t,e){return Gi(t,"POST","/v1/accounts:delete",e)}async function xR(t,e){return Gi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MR(t,e=!1){const n=wt(t),s=await n.getIdToken(e),i=Jh(s);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:br(Bc(i.auth_time)),issuedAtTime:br(Bc(i.iat)),expirationTime:br(Bc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Bc(t){return Number(t)*1e3}function Jh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return _a("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ma(n);return i?JSON.parse(i):(_a("Failed to decode base64 JWT payload"),null)}catch(i){return _a("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function LR(t){const e=Jh(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof yn&&VR(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function VR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=br(this.lastLoginAt),this.creationTime=br(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ba(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Qr(t,xR(n,{idToken:s}));K(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?WR(r.providerUserInfo):[],a=BR(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ty(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function UR(t){const e=wt(t);await Ba(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BR(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function WR(t){return t.map(e=>{var{providerId:n}=e,s=Gh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(t,e){const n=await Zm(t,{},async()=>{const s=Ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=ey(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Jm.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function jR(t,e){return Gi(t,"POST","/v2/accounts:revokeToken",Xh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):LR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await $R(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Yr;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(K(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yr,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ks{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Gh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ty(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Qr(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return MR(this,e)}reload(){return UR(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ks(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ba(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Qr(this,OR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,D=(c=n.createdAt)!==null&&c!==void 0?c:void 0,V=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:R,isAnonymous:G,providerData:de,stsTokenManager:me}=n;K(N&&me,e,"internal-error");const j=Yr.fromJSON(this.name,me);K(typeof N=="string",e,"internal-error"),Wn(h,e.name),Wn(d,e.name),K(typeof R=="boolean",e,"internal-error"),K(typeof G=="boolean",e,"internal-error"),Wn(p,e.name),Wn(g,e.name),Wn(m,e.name),Wn(v,e.name),Wn(D,e.name),Wn(V,e.name);const Z=new ks({uid:N,auth:e,email:d,emailVerified:R,displayName:h,isAnonymous:G,photoURL:g,phoneNumber:p,tenantId:m,stsTokenManager:j,createdAt:D,lastLoginAt:V});return de&&Array.isArray(de)&&(Z.providerData=de.map(Te=>Object.assign({},Te))),v&&(Z._redirectEventId=v),Z}static async _fromIdTokenResponse(e,n,s=!1){const i=new Yr;i.updateFromServerResponse(n);const r=new ks({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ba(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=new Map;function Cn(t){On(t instanceof Function,"Expected a class definition");let e=Ap.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ap.set(t,e),e)}/**
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
 */class ny{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ny.type="NONE";const Rp=ny;/**
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
 */function ga(t,e,n){return`firebase:${t}:${e}:${n}`}class pi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ga(this.userKey,i.apiKey,r),this.fullPersistenceKey=ga("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ks._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new pi(Cn(Rp),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Cn(Rp);const o=ga(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=ks._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new pi(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new pi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ry(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ay(e))return"Blackberry";if(ly(e))return"Webos";if(Zh(e))return"Safari";if((e.includes("chrome/")||iy(e))&&!e.includes("edge/"))return"Chrome";if(oy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function sy(t=ft()){return/firefox\//i.test(t)}function Zh(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iy(t=ft()){return/crios\//i.test(t)}function ry(t=ft()){return/iemobile/i.test(t)}function oy(t=ft()){return/android/i.test(t)}function ay(t=ft()){return/blackberry/i.test(t)}function ly(t=ft()){return/webos/i.test(t)}function jl(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qR(t=ft()){var e;return jl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HR(){return rA()&&document.documentMode===10}function cy(t=ft()){return jl(t)||oy(t)||ly(t)||ay(t)||/windows phone/i.test(t)||ry(t)}function zR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(t,e=[]){let n;switch(t){case"Browser":n=Cp(ft());break;case"Worker":n=`${Cp(ft())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cs}/${s}`}/**
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
 */class KR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function GR(t,e={}){return Gi(t,"GET","/v2/passwordPolicy",Xh(t,e))}/**
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
 */const QR=6;class YR{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:QR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sp(this),this.idTokenSubscription=new Sp(this),this.beforeStateQueue=new KR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ym,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await pi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ba(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?wt(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GR(this),n=new YR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await jR(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await pi.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&AR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ql(t){return wt(t)}class Sp{constructor(e){this.auth=e,this.observer=null,this.addObserver=fA(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ZR(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=an("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",JR().appendChild(s)})}function eC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t,e){const n=zh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Va(r,e??{}))return i;pn(i,"already-initialized")}return n.initialize({options:e})}function nC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function sC(t,e,n){const s=ql(t);K(s._canInitEmulator,s,"emulator-config-failed"),K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=hy(e),{host:o,port:a}=iC(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||rC()}function hy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iC(t){const e=hy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:bp(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:bp(o)}}}function bp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function rC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t,e){return NR(t,"POST","/v1/accounts:signInWithIdp",Xh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC="http://localhost";class Ms extends dy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ms(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Gh(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ms(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _i(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,_i(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_i(e,n)}buildRequest(){const e={requestUri:oC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ki(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yo extends ed{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends yo{constructor(){super("facebook.com")}static credential(e){return Ms._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends yo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ms._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return An.credential(n,s)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends yo{constructor(){super("github.com")}static credential(e){return Ms._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends yo{constructor(){super("twitter.com")}static credential(e,n){return Ms._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return zn.credential(n,s)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await ks._fromIdTokenResponse(e,s,i),o=Pp(s);return new ki({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Pp(s);return new ki({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Pp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends yn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Wa.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Wa(e,n,s,i)}}function fy(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Wa._fromErrorAndOperation(t,r,e,s):r})}async function aC(t,e,n=!1){const s=await Qr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ki._forOperation(t,"link",s)}/**
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
 */async function lC(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Qr(t,fy(s,i,e,t),n);K(r.idToken,s,"internal-error");const o=Jh(r.idToken);K(o,s,"internal-error");const{sub:a}=o;return K(t.uid===a,s,"user-mismatch"),ki._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&pn(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cC(t,e,n=!1){const s="signIn",i=await fy(t,s,e),r=await ki._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function uC(t,e,n,s){return wt(t).onIdTokenChanged(e,n,s)}function hC(t,e,n){return wt(t).beforeAuthStateChanged(e,n)}function dC(t,e,n,s){return wt(t).onAuthStateChanged(e,n,s)}const $a="__sak";/**
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
 */class py{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($a,"1"),this.storage.removeItem($a),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(){const t=ft();return Zh(t)||jl(t)}const pC=1e3,_C=10;class _y extends py{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fC()&&zR(),this.fallbackToPolling=cy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);HR()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_C):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},pC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_y.type="LOCAL";const gC=_y;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy extends py{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gy.type="SESSION";const my=gy;/**
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
 */function mC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Hl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Hl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await mC(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class yC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=td("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function vC(t){ln().location.href=t}/**
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
 */function yy(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function EC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function IC(){return yy()?self:null}/**
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
 */const vy="firebaseLocalStorageDb",wC=1,ja="firebaseLocalStorage",Ey="fbase_key";class vo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zl(t,e){return t.transaction([ja],e?"readwrite":"readonly").objectStore(ja)}function AC(){const t=indexedDB.deleteDatabase(vy);return new vo(t).toPromise()}function Du(){const t=indexedDB.open(vy,wC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ja,{keyPath:Ey})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ja)?e(s):(s.close(),await AC(),e(await Du()))})})}async function kp(t,e,n){const s=zl(t,!0).put({[Ey]:e,value:n});return new vo(s).toPromise()}async function RC(t,e){const n=zl(t,!1).get(e),s=await new vo(n).toPromise();return s===void 0?null:s.value}function Np(t,e){const n=zl(t,!0).delete(e);return new vo(n).toPromise()}const CC=800,SC=3;class Ty{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Du(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>SC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hl._getInstance(IC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await EC(),!this.activeServiceWorker)return;this.sender=new yC(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Du();return await kp(e,$a,"1"),await Np(e,$a),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>kp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>RC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Np(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=zl(i,!1).getAll();return new vo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ty.type="LOCAL";const bC=Ty;new mo(3e4,6e4);/**
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
 */function Iy(t,e){return e?Cn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class nd extends dy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PC(t){return cC(t.auth,new nd(t),t.bypassAuthState)}function kC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),lC(n,new nd(t),t.bypassAuthState)}async function NC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),aC(n,new nd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PC;case"linkViaPopup":case"linkViaRedirect":return NC;case"reauthViaPopup":case"reauthViaRedirect":return kC;default:pn(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=new mo(2e3,1e4);async function OC(t,e,n){const s=ql(t);RR(t,e,ed);const i=Iy(s,n);return new Is(s,"signInViaPopup",e,i).executeNotNull()}class Is extends wy{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Is.currentPopupAction&&Is.currentPopupAction.cancel(),Is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=td();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DC.get())};e()}}Is.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC="pendingRedirect",ma=new Map;class MC extends wy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ma.get(this.auth._key());if(!e){try{const s=await LC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ma.set(this.auth._key(),e)}return this.bypassAuthState||ma.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LC(t,e){const n=UC(e),s=FC(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function VC(t,e){ma.set(t._key(),e)}function FC(t){return Cn(t._redirectPersistence)}function UC(t){return ga(xC,t.config.apiKey,t.name)}async function BC(t,e,n=!1){const s=ql(t),i=Iy(s,e),o=await new MC(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=10*60*1e3;class $C{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ay(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(an(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dp(e))}saveEventToCache(e){this.cachedEventUids.add(Dp(e)),this.lastProcessedEventTime=Date.now()}}function Dp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ay({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ay(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qC(t,e={}){return Gi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zC=/^https?/;async function KC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qC(t);for(const n of e)try{if(GC(n))return}catch{}pn(t,"unauthorized-domain")}function GC(t){const e=Nu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!zC.test(n))return!1;if(HC.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const QC=new mo(3e4,6e4);function Op(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YC(t){return new Promise((e,n)=>{var s,i,r;function o(){Op(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Op(),n(an(t,"network-request-failed"))},timeout:QC.get()})}if(!((i=(s=ln().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=ln().gapi)===null||r===void 0)&&r.load)o();else{const a=eC("iframefcb");return ln()[a]=()=>{gapi.load?o():n(an(t,"network-request-failed"))},ZR(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ya=null,e})}let ya=null;function XC(t){return ya=ya||YC(t),ya}/**
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
 */const JC=new mo(5e3,15e3),ZC="__/auth/iframe",eS="emulator/auth/iframe",tS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sS(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yh(e,eS):`https://${t.config.authDomain}/${ZC}`,s={apiKey:e.apiKey,appName:t.name,v:cs},i=nS.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Ki(s).slice(1)}`}async function iS(t){const e=await XC(t),n=ln().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:sS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tS,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),a=ln().setTimeout(()=>{r(o)},JC.get());function l(){ln().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const rS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oS=500,aS=600,lS="_blank",cS="http://localhost";class xp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uS(t,e,n,s=oS,i=aS){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},rS),{width:s.toString(),height:i.toString(),top:r,left:o}),c=ft().toLowerCase();n&&(a=iy(c)?lS:n),sy(c)&&(e=e||cS,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(qR(c)&&a!=="_self")return hS(e||"",a),new xp(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new xp(h)}function hS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const dS="__/auth/handler",fS="emulator/auth/handler",pS=encodeURIComponent("fac");async function Mp(t,e,n,s,i,r){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:cs,eventId:i};if(e instanceof ed){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ru(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof yo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${pS}=${encodeURIComponent(l)}`:"";return`${_S(t)}?${Ki(a).slice(1)}${c}`}function _S({config:t}){return t.emulator?Yh(t,fS):`https://${t.authDomain}/${dS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="webStorageSupport";class gS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=my,this._completeRedirectFn=BC,this._overrideRedirectResult=VC}async _openPopup(e,n,s,i){var r;On((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Mp(e,n,s,Nu(),i);return uS(e,o,td())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Mp(e,n,s,Nu(),i);return vC(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(On(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await iS(e),s=new $C(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wc,{type:Wc},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Wc];o!==void 0&&n(!!o),pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cy()||Zh()||jl()}}const mS=gS;var Lp="@firebase/auth",Vp="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ES(t){fn(new qt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uy(t)},c=new XR(s,i,r,l);return nC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),fn(new qt("auth-internal",e=>{const n=ql(e.getProvider("auth").getImmediate());return(s=>new yS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),St(Lp,Vp,vS(t)),St(Lp,Vp,"esm2017")}/**
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
 */const TS=5*60,IS=Um("authIdTokenMaxAge")||TS;let Fp=null;const wS=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>IS)return;const i=n==null?void 0:n.token;Fp!==i&&(Fp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qa(t=Kh()){const e=zh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=tC(t,{popupRedirectResolver:mS,persistence:[bC,gC,my]}),s=Um("authTokenSyncURL");if(s){const r=wS(s);hC(n,r,()=>r(n.currentUser)),uC(n,o=>r(o))}const i=Vm("auth");return i&&sC(n,`http://${i}`),n}ES("Browser");const Kt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},AS={name:"Register",data(){return{signingIn:!1,errorMessage:""}},methods:{async signInWithGoogle(){if(this.signingIn)return;this.signingIn=!0,this.errorMessage="";const t=new An,e=qa();try{await OC(e,t)}catch(n){this.errorMessage=this.messageFor(n)}finally{this.signingIn=!1}},messageFor(t){switch(t.code){case"auth/popup-closed-by-user":case"auth/cancelled-popup-request":return"";case"auth/popup-blocked":return"Le navigateur a bloqué la fenêtre de connexion. Autorisez les pop-ups pour ce site, puis réessayez.";case"auth/unauthorized-domain":return"Ce domaine n'est pas autorisé dans la console Firebase (Authentication > Settings > Authorized domains).";case"auth/network-request-failed":return"Connexion réseau impossible. Vérifiez votre accès à Internet.";default:return`Échec de la connexion (${t.code||t.message}).`}}}},RS=t=>(xl("data-v-8a3b28e4"),t=t(),Ml(),t),CS={class:"registerPanel"},SS=RS(()=>x("div",{class:"registerTitle"},"Quizzify",-1)),bS=["disabled"],PS={key:0,class:"registerError"};function kS(t,e,n,s,i,r){return J(),re("div",CS,[SS,x("button",{class:"registerButton",disabled:i.signingIn,onClick:e[0]||(e[0]=(...o)=>r.signInWithGoogle&&r.signInWithGoogle(...o))},Me(i.signingIn?"Connexion...":"Se connecter avec Google"),9,bS),i.errorMessage?(J(),re("div",PS,Me(i.errorMessage),1)):vt("",!0)])}const NS=Kt(AS,[["render",kS],["__scopeId","data-v-8a3b28e4"]]);const DS={name:"MenuItem",props:["name","beforeSelected","afterSelected","selected","unselected"],methods:{menuClicked(){this.$emit("menuClicked",this.name)}},computed:{getMenuSrc(){return"menu_"+this.name+(this.selected?"":"_unselected")+".png"}}},OS=["src"];function xS(t,e,n,s,i,r){return J(),re("div",{onClick:e[0]||(e[0]=o=>r.menuClicked(n.name)),class:$i(["menuItem",{afterSelected:n.afterSelected,beforeSelected:n.beforeSelected,selected:n.selected,unselected:n.unselected}])},[x("img",{class:"img_menu",src:r.getMenuSrc},null,8,OS)],2)}const MS=Kt(DS,[["render",xS]]);const LS={name:"Menu",components:{MenuItem:MS},data(){return{menuItems:[{item:"play",selected:!0},{item:"statistiques",selected:!1}]}},methods:{menuClicked(t){this.menuItems.find(e=>e.item===t).selected=!0,this.menuItems.filter(e=>e.item!==t).forEach(e=>e.selected=!1),this.$emit("menuClicked",t)},itemSelected(t){return this.menuItems.find(e=>e.item===t).selected},itemUnselected(t){return this.menuItems.find(e=>e.item===t).selected===!1},isBeforeSelected(t){const e=this.menuItems.findIndex(n=>n.selected);return this.menuItems[e-1]!==void 0&&this.menuItems[e-1].item===t},isAfterSelected(t){const e=this.menuItems.findIndex(n=>n.selected);return this.menuItems[e+1]!==void 0&&this.menuItems[e+1].item===t}}},VS={class:"menuPanel"};function FS(t,e,n,s,i,r){const o=tn("MenuItem");return J(),re("div",VS,[(J(!0),re(Ye,null,ka(i.menuItems,a=>(J(),Ci(o,{name:a.item,beforeSelected:r.isBeforeSelected(a.item),afterSelected:r.isAfterSelected(a.item),selected:r.itemSelected(a.item),unselected:r.itemUnselected(a.item),onMenuClicked:r.menuClicked},null,8,["name","beforeSelected","afterSelected","selected","unselected","onMenuClicked"]))),256))])}const US=Kt(LS,[["render",FS]]),it=Dm({id:"partyVocab",state:()=>({words:[],newWords:[],nbErrors:0,hasAlreadyPlayed:!1}),actions:{setAnswered(t){this.words.find(e=>e.id===t).answered=!0},setValidated(t){this.words.find(e=>e.id===t).validated=!0},setWords(t){this.words=t},setNewWords(t){this.newWords=t},setNbErrors(t){this.nbErrors=t}},getters:{}});var BS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k,sd=sd||{},H=BS||self;function Kl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Eo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function WS(t){return Object.prototype.hasOwnProperty.call(t,$c)&&t[$c]||(t[$c]=++$S)}var $c="closure_uid_"+(1e9*Math.random()>>>0),$S=0;function jS(t,e,n){return t.call.apply(t.bind,arguments)}function qS(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ut(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ut=jS:ut=qS,ut.apply(null,arguments)}function Yo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ge(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function us(){this.s=this.s,this.o=this.o}var HS=0;us.prototype.s=!1;us.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),HS!=0)&&WS(this)};us.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ry=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function id(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Up(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Kl(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function ht(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var zS=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",()=>{},e),H.removeEventListener("test",()=>{},e)}catch{}return t}();function Xr(t){return/^[\s\xa0]*$/.test(t)}function Gl(){var t=H.navigator;return t&&(t=t.userAgent)?t:""}function en(t){return Gl().indexOf(t)!=-1}function rd(t){return rd[" "](t),t}rd[" "]=function(){};function KS(t,e){var n=Ub;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var GS=en("Opera"),Ni=en("Trident")||en("MSIE"),Cy=en("Edge"),Ou=Cy||Ni,Sy=en("Gecko")&&!(Gl().toLowerCase().indexOf("webkit")!=-1&&!en("Edge"))&&!(en("Trident")||en("MSIE"))&&!en("Edge"),QS=Gl().toLowerCase().indexOf("webkit")!=-1&&!en("Edge");function by(){var t=H.document;return t?t.documentMode:void 0}var xu;e:{var jc="",qc=function(){var t=Gl();if(Sy)return/rv:([^\);]+)(\)|;)/.exec(t);if(Cy)return/Edge\/([\d\.]+)/.exec(t);if(Ni)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(QS)return/WebKit\/(\S+)/.exec(t);if(GS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(qc&&(jc=qc?qc[1]:""),Ni){var Hc=by();if(Hc!=null&&Hc>parseFloat(jc)){xu=String(Hc);break e}}xu=jc}var Mu;if(H.document&&Ni){var Bp=by();Mu=Bp||parseInt(xu,10)||void 0}else Mu=void 0;var YS=Mu;function Jr(t,e){if(ht.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Sy){e:{try{rd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:XS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Jr.$.h.call(this)}}Ge(Jr,ht);var XS={2:"touch",3:"pen",4:"mouse"};Jr.prototype.h=function(){Jr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var To="closure_listenable_"+(1e6*Math.random()|0),JS=0;function ZS(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++JS,this.fa=this.ia=!1}function Ql(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function od(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function eb(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Py(t){const e={};for(const n in t)e[n]=t[n];return e}const Wp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ky(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Wp.length;r++)n=Wp[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Yl(t){this.src=t,this.g={},this.h=0}Yl.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Vu(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new ZS(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function Lu(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Ry(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Ql(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Vu(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var ad="closure_lm_"+(1e6*Math.random()|0),zc={};function Ny(t,e,n,s,i){if(s&&s.once)return Oy(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ny(t,e[r],n,s,i);return null}return n=ud(n),t&&t[To]?t.O(e,n,Eo(s)?!!s.capture:!!s,i):Dy(t,e,n,!1,s,i)}function Dy(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Eo(i)?!!i.capture:!!i,a=cd(t);if(a||(t[ad]=a=new Yl(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=tb(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)zS||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(My(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function tb(){function t(n){return e.call(t.src,t.listener,n)}const e=nb;return t}function Oy(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Oy(t,e[r],n,s,i);return null}return n=ud(n),t&&t[To]?t.P(e,n,Eo(s)?!!s.capture:!!s,i):Dy(t,e,n,!0,s,i)}function xy(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)xy(t,e[r],n,s,i);else s=Eo(s)?!!s.capture:!!s,n=ud(n),t&&t[To]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Vu(r,n,s,i),-1<n&&(Ql(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=cd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Vu(e,n,s,i)),(n=-1<t?e[t]:null)&&ld(n))}function ld(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[To])Lu(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(My(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=cd(e))?(Lu(n,t),n.h==0&&(n.src=null,e[ad]=null)):Ql(t)}}}function My(t){return t in zc?zc[t]:zc[t]="on"+t}function nb(t,e){if(t.fa)t=!0;else{e=new Jr(e,this);var n=t.listener,s=t.la||t.src;t.ia&&ld(t),t=n.call(s,e)}return t}function cd(t){return t=t[ad],t instanceof Yl?t:null}var Kc="__closure_events_fn_"+(1e9*Math.random()>>>0);function ud(t){return typeof t=="function"?t:(t[Kc]||(t[Kc]=function(e){return t.handleEvent(e)}),t[Kc])}function Ke(){us.call(this),this.i=new Yl(this),this.S=this,this.J=null}Ge(Ke,us);Ke.prototype[To]=!0;Ke.prototype.removeEventListener=function(t,e,n,s){xy(this,t,e,n,s)};function et(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new ht(e,t);else if(e instanceof ht)e.target=e.target||t;else{var i=e;e=new ht(s,t),ky(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Xo(o,s,!0,e)&&i}if(o=e.g=t,i=Xo(o,s,!0,e)&&i,i=Xo(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Xo(o,s,!1,e)&&i}Ke.prototype.N=function(){if(Ke.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ql(n[s]);delete t.g[e],t.h--}}this.J=null};Ke.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ke.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Xo(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Lu(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var hd=H.JSON.stringify;class sb{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function ib(){var t=dd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class rb{constructor(){this.h=this.g=null}add(e,n){const s=Ly.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ly=new sb(()=>new ob,t=>t.reset());class ob{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ab(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function lb(t){H.setTimeout(()=>{throw t},0)}let Zr,eo=!1,dd=new rb,Vy=()=>{const t=H.Promise.resolve(void 0);Zr=()=>{t.then(cb)}};var cb=()=>{for(var t;t=ib();){try{t.h.call(t.g)}catch(n){lb(n)}var e=Ly;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}eo=!1};function Xl(t,e){Ke.call(this),this.h=t||1,this.g=e||H,this.j=ut(this.qb,this),this.l=Date.now()}Ge(Xl,Ke);k=Xl.prototype;k.ga=!1;k.T=null;k.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),et(this,"tick"),this.ga&&(fd(this),this.start()))}};k.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function fd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}k.N=function(){Xl.$.N.call(this),fd(this),delete this.g};function pd(t,e,n){if(typeof t=="function")n&&(t=ut(t,n));else if(t&&typeof t.handleEvent=="function")t=ut(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function Fy(t){t.g=pd(()=>{t.g=null,t.i&&(t.i=!1,Fy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ub extends us{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Fy(this)}N(){super.N(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function to(t){us.call(this),this.h=t,this.g={}}Ge(to,us);var $p=[];function Uy(t,e,n,s){Array.isArray(n)||(n&&($p[0]=n.toString()),n=$p);for(var i=0;i<n.length;i++){var r=Ny(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function By(t){od(t.g,function(e,n){this.g.hasOwnProperty(n)&&ld(e)},t),t.g={}}to.prototype.N=function(){to.$.N.call(this),By(this)};to.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Jl(){this.g=!0}Jl.prototype.Ea=function(){this.g=!1};function hb(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function db(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function oi(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+pb(t,n)+(s?" "+s:"")})}function fb(t,e){t.info(function(){return"TIMEOUT: "+e})}Jl.prototype.info=function(){};function pb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return hd(n)}catch{return e}}var qs={},jp=null;function Zl(){return jp=jp||new Ke}qs.Ta="serverreachability";function Wy(t){ht.call(this,qs.Ta,t)}Ge(Wy,ht);function no(t){const e=Zl();et(e,new Wy(e))}qs.STAT_EVENT="statevent";function $y(t,e){ht.call(this,qs.STAT_EVENT,t),this.stat=e}Ge($y,ht);function mt(t){const e=Zl();et(e,new $y(e,t))}qs.Ua="timingevent";function jy(t,e){ht.call(this,qs.Ua,t),this.size=e}Ge(jy,ht);function Io(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var ec={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},qy={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function _d(){}_d.prototype.h=null;function qp(t){return t.h||(t.h=t.i())}function Hy(){}var wo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function gd(){ht.call(this,"d")}Ge(gd,ht);function md(){ht.call(this,"c")}Ge(md,ht);var Fu;function tc(){}Ge(tc,_d);tc.prototype.g=function(){return new XMLHttpRequest};tc.prototype.i=function(){return{}};Fu=new tc;function Ao(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new to(this),this.P=_b,t=Ou?125:void 0,this.V=new Xl(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new zy}function zy(){this.i=null,this.g="",this.h=!1}var _b=45e3,Uu={},Ha={};k=Ao.prototype;k.setTimeout=function(t){this.P=t};function Bu(t,e,n){t.L=1,t.v=sc(xn(e)),t.s=n,t.S=!0,Ky(t,null)}function Ky(t,e){t.G=Date.now(),Ro(t),t.A=xn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),tv(n.i,"t",s),t.C=0,n=t.l.J,t.h=new zy,t.g=Iv(t.l,n?e:null,!t.s),0<t.O&&(t.M=new ub(ut(t.Pa,t,t.g),t.O)),Uy(t.U,t.g,"readystatechange",t.nb),e=t.I?Py(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),no(),hb(t.j,t.u,t.A,t.m,t.W,t.s)}k.nb=function(t){t=t.target;const e=this.M;e&&nn(t)==3?e.l():this.Pa(t)};k.Pa=function(t){try{if(t==this.g)e:{const u=nn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Ou||this.g&&(this.h.h||this.g.ja()||Gp(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?no(3):no(2)),nc(this);var n=this.g.da();this.ca=n;t:if(Gy(this)){var s=Gp(this.g);t="";var i=s.length,r=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ws(this),Pr(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,db(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Xr(a)){var c=a;break t}}c=null}if(n=c)oi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wu(this,n);else{this.i=!1,this.o=3,mt(12),ws(this),Pr(this);break e}}this.S?(Qy(this,u,o),Ou&&this.i&&u==3&&(Uy(this.U,this.V,"tick",this.mb),this.V.start())):(oi(this.j,this.m,o,null),Wu(this,o)),u==4&&ws(this),this.i&&!this.J&&(u==4?yv(this.l,this):(this.i=!1,Ro(this)))}else Lb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,mt(12)):(this.o=0,mt(13)),ws(this),Pr(this)}}}catch{}finally{}};function Gy(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Qy(t,e,n){let s=!0,i;for(;!t.J&&t.C<n.length;)if(i=gb(t,n),i==Ha){e==4&&(t.o=4,mt(14),s=!1),oi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Uu){t.o=4,mt(15),oi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else oi(t.j,t.m,i,null),Wu(t,i);Gy(t)&&i!=Ha&&i!=Uu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,mt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),wd(e),e.M=!0,mt(11))):(oi(t.j,t.m,n,"[Invalid Chunked Response]"),ws(t),Pr(t))}k.mb=function(){if(this.g){var t=nn(this.g),e=this.g.ja();this.C<e.length&&(nc(this),Qy(this,t,e),this.i&&t!=4&&Ro(this))}};function gb(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ha:(n=Number(e.substring(n,s)),isNaN(n)?Uu:(s+=1,s+n>e.length?Ha:(e=e.slice(s,s+n),t.C=s+n,e)))}k.cancel=function(){this.J=!0,ws(this)};function Ro(t){t.Y=Date.now()+t.P,Yy(t,t.P)}function Yy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Io(ut(t.lb,t),e)}function nc(t){t.B&&(H.clearTimeout(t.B),t.B=null)}k.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(fb(this.j,this.A),this.L!=2&&(no(),mt(17)),ws(this),this.o=2,Pr(this)):Yy(this,this.Y-t)};function Pr(t){t.l.H==0||t.J||yv(t.l,t)}function ws(t){nc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,fd(t.V),By(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Wu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||$u(n.i,t))){if(!t.K&&$u(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ga(n),oc(n);else break e;Id(n),mt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Io(ut(n.ib,n),6e3));if(1>=iv(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else As(n,11)}else if((t.K||n.g==t)&&Ga(n),!Xr(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.i;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(yd(r,r.h),r.h=null))}if(s.F){const m=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.Da=m,Re(s.I,s.F,m))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Tv(s,s.J?s.pa:null,s.Y),o.K){rv(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(nc(a),Ro(a)),s.g=o}else gv(s);0<n.j.length&&ac(n)}else c[0]!="stop"&&c[0]!="close"||As(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?As(n,7):Td(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}no(4)}catch{}}function mb(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Kl(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function yb(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Kl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Xy(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Kl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=yb(t),s=mb(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Jy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ns(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ns){this.h=t.h,za(this,t.j),this.s=t.s,this.g=t.g,Ka(this,t.m),this.l=t.l;var e=t.i,n=new so;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Hp(this,n),this.o=t.o}else t&&(e=String(t).match(Jy))?(this.h=!1,za(this,e[1]||"",!0),this.s=mr(e[2]||""),this.g=mr(e[3]||"",!0),Ka(this,e[4]),this.l=mr(e[5]||"",!0),Hp(this,e[6]||"",!0),this.o=mr(e[7]||"")):(this.h=!1,this.i=new so(null,this.h))}Ns.prototype.toString=function(){var t=[],e=this.j;e&&t.push(yr(e,zp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(yr(e,zp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(yr(n,n.charAt(0)=="/"?Ib:Tb,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",yr(n,Ab)),t.join("")};function xn(t){return new Ns(t)}function za(t,e,n){t.j=n?mr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ka(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Hp(t,e,n){e instanceof so?(t.i=e,Rb(t.i,t.h)):(n||(e=yr(e,wb)),t.i=new so(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function sc(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function mr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function yr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Eb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Eb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var zp=/[#\/\?@]/g,Tb=/[#\?:]/g,Ib=/[#\?]/g,wb=/[#\?@]/g,Ab=/#/g;function so(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function hs(t){t.g||(t.g=new Map,t.h=0,t.i&&vb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}k=so.prototype;k.add=function(t,e){hs(this),this.i=null,t=Qi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Zy(t,e){hs(t),e=Qi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ev(t,e){return hs(t),e=Qi(t,e),t.g.has(e)}k.forEach=function(t,e){hs(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};k.ta=function(){hs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};k.Z=function(t){hs(this);let e=[];if(typeof t=="string")ev(this,t)&&(e=e.concat(this.g.get(Qi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};k.set=function(t,e){return hs(this),this.i=null,t=Qi(this,t),ev(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};k.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function tv(t,e,n){Zy(t,e),0<n.length&&(t.i=null,t.g.set(Qi(t,e),id(n)),t.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Qi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Rb(t,e){e&&!t.j&&(hs(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Zy(this,s),tv(this,i,n))},t)),t.j=e}var Cb=class{constructor(t,e){this.g=t,this.map=e}};function nv(t){this.l=t||Sb,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ka&&H.g.Ka()&&H.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Sb=10;function sv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function iv(t){return t.h?1:t.g?t.g.size:0}function $u(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function yd(t,e){t.g?t.g.add(e):t.h=e}function rv(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}nv.prototype.cancel=function(){if(this.i=ov(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ov(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return id(t.i)}var bb=class{stringify(t){return H.JSON.stringify(t,void 0)}parse(t){return H.JSON.parse(t,void 0)}};function Pb(){this.g=new bb}function kb(t,e,n){const s=n||"";try{Xy(t,function(i,r){let o=i;Eo(i)&&(o=hd(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Nb(t,e){const n=new Jl;if(H.Image){const s=new Image;s.onload=Yo(Jo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Yo(Jo,n,s,"TestLoadImage: error",!1,e),s.onabort=Yo(Jo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Yo(Jo,n,s,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Jo(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Co(t){this.l=t.ec||null,this.j=t.ob||!1}Ge(Co,_d);Co.prototype.g=function(){return new ic(this.l,this.j)};Co.prototype.i=function(t){return function(){return t}}({});function ic(t,e){Ke.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=vd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ge(ic,Ke);var vd=0;k=ic.prototype;k.open=function(t,e){if(this.readyState!=vd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,io(this)};k.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||H).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,So(this)),this.readyState=vd};k.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,io(this)),this.g&&(this.readyState=3,io(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;av(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function av(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}k.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?So(this):io(this),this.readyState==3&&av(this)}};k.Za=function(t){this.g&&(this.response=this.responseText=t,So(this))};k.Ya=function(t){this.g&&(this.response=t,So(this))};k.ka=function(){this.g&&So(this)};function So(t){t.readyState=4,t.l=null,t.j=null,t.A=null,io(t)}k.setRequestHeader=function(t,e){this.v.append(t,e)};k.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function io(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ic.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Db=H.JSON.parse;function Ne(t){Ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=lv,this.L=this.M=!1}Ge(Ne,Ke);var lv="",Ob=/^https?$/i,xb=["POST","PUT"];k=Ne.prototype;k.Oa=function(t){this.M=t};k.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Fu.g(),this.C=this.u?qp(this.u):qp(Fu),this.g.onreadystatechange=ut(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Kp(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=H.FormData&&t instanceof H.FormData,!(0<=Ry(xb,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{hv(this),0<this.B&&((this.L=Mb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ut(this.ua,this)):this.A=pd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Kp(this,r)}};function Mb(t){return Ni&&typeof t.timeout=="number"&&t.ontimeout!==void 0}k.ua=function(){typeof sd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function Kp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,cv(t),rc(t)}function cv(t){t.F||(t.F=!0,et(t,"complete"),et(t,"error"))}k.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),rc(this))};k.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),rc(this,!0)),Ne.$.N.call(this)};k.La=function(){this.s||(this.G||this.v||this.l?uv(this):this.kb())};k.kb=function(){uv(this)};function uv(t){if(t.h&&typeof sd<"u"&&(!t.C[1]||nn(t)!=4||t.da()!=2)){if(t.v&&nn(t)==4)pd(t.La,0,t);else if(et(t,"readystatechange"),nn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(Jy)[1]||null;!i&&H.self&&H.self.location&&(i=H.self.location.protocol.slice(0,-1)),s=!Ob.test(i?i.toLowerCase():"")}n=s}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var r=2<nn(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",cv(t)}}finally{rc(t)}}}}function rc(t,e){if(t.g){hv(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||et(t,"ready");try{n.onreadystatechange=s}catch{}}}function hv(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}k.isActive=function(){return!!this.g};function nn(t){return t.g?t.g.readyState:0}k.da=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}};k.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Db(e)}};function Gp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case lv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Lb(t){const e={};t=(t.g&&2<=nn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(Xr(t[s]))continue;var n=ab(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}eb(e,function(s){return s.join(", ")})}k.Ia=function(){return this.m};k.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function dv(t){let e="";return od(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ed(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=dv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function ar(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function fv(t){this.Ga=0,this.j=[],this.l=new Jl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ar("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ar("baseRetryDelayMs",5e3,t),this.hb=ar("retryDelaySeedMs",1e4,t),this.eb=ar("forwardChannelMaxRetries",2,t),this.xa=ar("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new nv(t&&t.concurrentRequestLimit),this.Ja=new Pb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}k=fv.prototype;k.ra=8;k.H=1;function Td(t){if(pv(t),t.H==3){var e=t.W++,n=xn(t.I);if(Re(n,"SID",t.K),Re(n,"RID",e),Re(n,"TYPE","terminate"),bo(t,n),e=new Ao(t,t.l,e),e.L=2,e.v=sc(xn(n)),n=!1,H.navigator&&H.navigator.sendBeacon)try{n=H.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=Iv(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ro(e)}Ev(t)}function oc(t){t.g&&(wd(t),t.g.cancel(),t.g=null)}function pv(t){oc(t),t.u&&(H.clearTimeout(t.u),t.u=null),Ga(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function ac(t){if(!sv(t.i)&&!t.m){t.m=!0;var e=t.Na;Zr||Vy(),eo||(Zr(),eo=!0),dd.add(e,t),t.C=0}}function Vb(t,e){return iv(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Io(ut(t.Na,t,e),vv(t,t.C)),t.C++,!0)}k.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ao(this,this.l,t);let r=this.s;if(this.U&&(r?(r=Py(r),ky(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=_v(this,i,e),n=xn(this.I),Re(n,"RID",t),Re(n,"CVER",22),this.F&&Re(n,"X-HTTP-Session-Id",this.F),bo(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(dv(r)))+"&"+e:this.o&&Ed(n,this.o,r)),yd(this.i,i),this.bb&&Re(n,"TYPE","init"),this.P?(Re(n,"$req",e),Re(n,"SID","null"),i.aa=!0,Bu(i,n,null)):Bu(i,n,e),this.H=2}}else this.H==3&&(t?Qp(this,t):this.j.length==0||sv(this.i)||Qp(this))};function Qp(t,e){var n;e?n=e.m:n=t.W++;const s=xn(t.I);Re(s,"SID",t.K),Re(s,"RID",n),Re(s,"AID",t.V),bo(t,s),t.o&&t.s&&Ed(s,t.o,t.s),n=new Ao(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=_v(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),yd(t.i,n),Bu(n,s,e)}function bo(t,e){t.na&&od(t.na,function(n,s){Re(e,s,n)}),t.h&&Xy({},function(n,s){Re(e,s,n)})}function _v(t,e,n){n=Math.min(t.j.length,n);var s=t.h?ut(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=r,0>c)r=Math.max(0,i[l].g-100),a=!1;else try{kb(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function gv(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Zr||Vy(),eo||(Zr(),eo=!0),dd.add(e,t),t.A=0}}function Id(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Io(ut(t.Ma,t),vv(t,t.A)),t.A++,!0)}k.Ma=function(){if(this.u=null,mv(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Io(ut(this.jb,this),t)}};k.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,mt(10),oc(this),mv(this))};function wd(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function mv(t){t.g=new Ao(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=xn(t.wa);Re(e,"RID","rpc"),Re(e,"SID",t.K),Re(e,"AID",t.V),Re(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Re(e,"TO",t.qa),Re(e,"TYPE","xmlhttp"),bo(t,e),t.o&&t.s&&Ed(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=sc(xn(e)),n.s=null,n.S=!0,Ky(n,t)}k.ib=function(){this.v!=null&&(this.v=null,oc(this),Id(this),mt(19))};function Ga(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function yv(t,e){var n=null;if(t.g==e){Ga(t),wd(t),t.g=null;var s=2}else if($u(t.i,e))n=e.F,rv(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;s=Zl(),et(s,new jy(s,n)),ac(t)}else gv(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(s==1&&Vb(t,e)||s==2&&Id(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:As(t,5);break;case 4:As(t,10);break;case 3:As(t,6);break;default:As(t,2)}}}function vv(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function As(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=ut(t.pb,t);n||(n=new Ns("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||za(n,"https"),sc(n)),Nb(n.toString(),s)}else mt(2);t.H=0,t.h&&t.h.za(e),Ev(t),pv(t)}k.pb=function(t){t?(this.l.info("Successfully pinged google.com"),mt(2)):(this.l.info("Failed to ping google.com"),mt(1))};function Ev(t){if(t.H=0,t.ma=[],t.h){const e=ov(t.i);(e.length!=0||t.j.length!=0)&&(Up(t.ma,e),Up(t.ma,t.j),t.i.i.length=0,id(t.j),t.j.length=0),t.h.ya()}}function Tv(t,e,n){var s=n instanceof Ns?xn(n):new Ns(n);if(s.g!="")e&&(s.g=e+"."+s.g),Ka(s,s.m);else{var i=H.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Ns(null);s&&za(r,s),e&&(r.g=e),i&&Ka(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&Re(s,n,e),Re(s,"VER",t.ra),bo(t,s),s}function Iv(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ne(new Co({ob:!0})):new Ne(t.va),e.Oa(t.J),e}k.isActive=function(){return!!this.h&&this.h.isActive(this)};function wv(){}k=wv.prototype;k.Ba=function(){};k.Aa=function(){};k.za=function(){};k.ya=function(){};k.isActive=function(){return!0};k.Va=function(){};function Qa(){if(Ni&&!(10<=Number(YS)))throw Error("Environmental error: no available transport.")}Qa.prototype.g=function(t,e){return new Pt(t,e)};function Pt(t,e){Ke.call(this),this.g=new fv(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Xr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Xr(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Yi(this)}Ge(Pt,Ke);Pt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;mt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Tv(t,null,t.Y),ac(t)};Pt.prototype.close=function(){Td(this.g)};Pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=hd(t),t=n);e.j.push(new Cb(e.fb++,t)),e.H==3&&ac(e)};Pt.prototype.N=function(){this.g.h=null,delete this.j,Td(this.g),delete this.g,Pt.$.N.call(this)};function Av(t){gd.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ge(Av,gd);function Rv(){md.call(this),this.status=1}Ge(Rv,md);function Yi(t){this.g=t}Ge(Yi,wv);Yi.prototype.Ba=function(){et(this.g,"a")};Yi.prototype.Aa=function(t){et(this.g,new Av(t))};Yi.prototype.za=function(t){et(this.g,new Rv)};Yi.prototype.ya=function(){et(this.g,"b")};function Fb(){this.blockSize=-1}function Ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ge(Ht,Fb);Ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Gc(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}Ht.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)Gc(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){Gc(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){Gc(this,s),i=0;break}}this.h=i,this.i+=e};Ht.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function fe(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var Ub={};function Ad(t){return-128<=t&&128>t?KS(t,function(e){return new fe([e|0],0>e?-1:0)}):new fe([t|0],0>t?-1:0)}function sn(t){if(isNaN(t)||!isFinite(t))return gi;if(0>t)return Xe(sn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=ju;return new fe(e,0)}function Cv(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Xe(Cv(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=sn(Math.pow(e,8)),s=gi,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=sn(Math.pow(e,r)),s=s.R(r).add(sn(o))):(s=s.R(n),s=s.add(sn(o)))}return s}var ju=4294967296,gi=Ad(0),qu=Ad(1),Yp=Ad(16777216);k=fe.prototype;k.ea=function(){if(kt(this))return-Xe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:ju+s)*e,e*=ju}return t};k.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Sn(this))return"0";if(kt(this))return"-"+Xe(this).toString(t);for(var e=sn(Math.pow(t,6)),n=this,s="";;){var i=Xa(n,e).g;n=Ya(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Sn(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};k.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Sn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function kt(t){return t.h==-1}k.X=function(t){return t=Ya(this,t),kt(t)?-1:Sn(t)?0:1};function Xe(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new fe(n,~t.h).add(qu)}k.abs=function(){return kt(this)?Xe(this):this};k.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new fe(n,n[n.length-1]&-2147483648?-1:0)};function Ya(t,e){return t.add(Xe(e))}k.R=function(t){if(Sn(this)||Sn(t))return gi;if(kt(this))return kt(t)?Xe(this).R(Xe(t)):Xe(Xe(this).R(t));if(kt(t))return Xe(this.R(Xe(t)));if(0>this.X(Yp)&&0>t.X(Yp))return sn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,Zo(n,2*s+2*i),n[2*s+2*i+1]+=r*l,Zo(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,Zo(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,Zo(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new fe(n,0)};function Zo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function lr(t,e){this.g=t,this.h=e}function Xa(t,e){if(Sn(e))throw Error("division by zero");if(Sn(t))return new lr(gi,gi);if(kt(t))return e=Xa(Xe(t),e),new lr(Xe(e.g),Xe(e.h));if(kt(e))return e=Xa(t,Xe(e)),new lr(Xe(e.g),e.h);if(30<t.g.length){if(kt(t)||kt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=qu,s=e;0>=s.X(t);)n=Xp(n),s=Xp(s);var i=ti(n,1),r=ti(s,1);for(s=ti(s,2),n=ti(n,2);!Sn(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=ti(s,1),n=ti(n,1)}return e=Ya(t,i.R(e)),new lr(i,e)}for(i=gi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=sn(n),o=r.R(e);kt(o)||0<o.X(t);)n-=s,r=sn(n),o=r.R(e);Sn(r)&&(r=qu),i=i.add(r),t=Ya(t,o)}return new lr(i,t)}k.gb=function(t){return Xa(this,t).h};k.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new fe(n,this.h&t.h)};k.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new fe(n,this.h|t.h)};k.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new fe(n,this.h^t.h)};function Xp(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new fe(n,t.h)}function ti(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new fe(i,t.h)}Qa.prototype.createWebChannel=Qa.prototype.g;Pt.prototype.send=Pt.prototype.u;Pt.prototype.open=Pt.prototype.m;Pt.prototype.close=Pt.prototype.close;ec.NO_ERROR=0;ec.TIMEOUT=8;ec.HTTP_ERROR=6;qy.COMPLETE="complete";Hy.EventType=wo;wo.OPEN="a";wo.CLOSE="b";wo.ERROR="c";wo.MESSAGE="d";Ke.prototype.listen=Ke.prototype.O;Ne.prototype.listenOnce=Ne.prototype.P;Ne.prototype.getLastError=Ne.prototype.Sa;Ne.prototype.getLastErrorCode=Ne.prototype.Ia;Ne.prototype.getStatus=Ne.prototype.da;Ne.prototype.getResponseJson=Ne.prototype.Wa;Ne.prototype.getResponseText=Ne.prototype.ja;Ne.prototype.send=Ne.prototype.ha;Ne.prototype.setWithCredentials=Ne.prototype.Oa;Ht.prototype.digest=Ht.prototype.l;Ht.prototype.reset=Ht.prototype.reset;Ht.prototype.update=Ht.prototype.j;fe.prototype.add=fe.prototype.add;fe.prototype.multiply=fe.prototype.R;fe.prototype.modulo=fe.prototype.gb;fe.prototype.compare=fe.prototype.X;fe.prototype.toNumber=fe.prototype.ea;fe.prototype.toString=fe.prototype.toString;fe.prototype.getBits=fe.prototype.D;fe.fromNumber=sn;fe.fromString=Cv;var Bb=function(){return new Qa},Wb=function(){return Zl()},Qc=ec,$b=qy,jb=qs,Jp={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},qb=Co,ea=Hy,Hb=Ne,zb=Ht,mi=fe;const Zp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xi="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new go("@firebase/firestore");function cr(){return Ls.logLevel}function M(t,...e){if(Ls.logLevel<=te.DEBUG){const n=e.map(Rd);Ls.debug(`Firestore (${Xi}): ${t}`,...n)}}function Mn(t,...e){if(Ls.logLevel<=te.ERROR){const n=e.map(Rd);Ls.error(`Firestore (${Xi}): ${t}`,...n)}}function Di(t,...e){if(Ls.logLevel<=te.WARN){const n=e.map(Rd);Ls.warn(`Firestore (${Xi}): ${t}`,...n)}}function Rd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function q(t="Unexpected state"){const e=`FIRESTORE (${Xi}) INTERNAL ASSERTION FAILED: `+t;throw Mn(e),new Error(e)}function Ce(t,e){t||q()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Kb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class Gb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Qb{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new kn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ce(typeof s.accessToken=="string"),new Sv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new st(e)}}class Yb{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=st.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Xb{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new Yb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Jb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=r=>{r.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.R=n.token,new Jb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=eP(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ue(t,e){return t<e?-1:t>e?1:0}function Oi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ve(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new Ve(0,0))}static max(){return new z(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n,s){n===void 0?n=0:n>e.length&&q(),s===void 0?s=e.length-n:s>e.length-n&&q(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ro.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ro?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends ro{construct(e,n,s){return new be(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new F(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new be(n)}static emptyPath(){return new be([])}}const tP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends ro{construct(e,n,s){return new Ze(e,n,s)}static isValidIdentifier(e){return tP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new F(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new F(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new F(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(be.fromString(e))}static fromName(e){return new W(be.fromString(e).popFirst(5))}static empty(){return new W(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new be(e.slice()))}}function nP(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=z.fromTimestamp(s===1e9?new Ve(n+1,0):new Ve(n,s));return new rs(i,W.empty(),e)}function sP(t){return new rs(t.readTime,t.key,-1)}class rs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new rs(z.min(),W.empty(),-1)}static max(){return new rs(z.max(),W.empty(),-1)}}function iP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==rP)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,s)=>{n(e)})}static reject(e){return new w((n,s)=>{s(e)})}static waitFor(e){return new w((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=w.resolve(!1);for(const s of e)n=n.next(i=>i?w.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new w((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new w((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function ko(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Cd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.se(s),this.oe=s=>n.writeSequenceNumber(s))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Cd._e=-1;function lc(t){return t==null}function Ja(t){return t===0&&1/t==-1/0}function aP(t){return typeof t=="number"&&Number.isInteger(t)&&!Ja(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ji(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Pv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fe=class Hu{constructor(e,n){this.comparator=e,this.root=n||es.EMPTY}insert(e,n){return new Hu(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,es.BLACK,null,null))}remove(e){return new Hu(this.comparator,this.root.remove(e,this.comparator).copy(null,null,es.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ta(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ta(this.root,e,this.comparator,!1)}getReverseIterator(){return new ta(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ta(this.root,e,this.comparator,!0)}},ta=class{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},es=class Tn{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Tn.RED,this.left=i??Tn.EMPTY,this.right=r??Tn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Tn(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Tn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Tn.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}};es.EMPTY=null,es.RED=!0,es.BLACK=!1;es.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,n,s,i,r){return this}insert(e,n,s){return new es(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new t_(this.data.getIterator())}getIteratorFrom(e){return new t_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class t_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new tt(Ze.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Oi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class kv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new kv("Invalid base64 string: "+r):r}}(e);return new pt(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const lP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function os(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=lP.exec(t);if(Ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vs(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function bd(t){const e=t.mapValue.fields.__previous_value__;return Sd(e)?bd(e):e}function oo(t){const e=os(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e,n,s,i,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class ao{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ao("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ao&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Fs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sd(t)?4:uP(t)?9007199254740991:10:q()}function _n(t,e){if(t===e)return!0;const n=Fs(t);if(n!==Fs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oo(t).isEqual(oo(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=os(i.timestampValue),a=os(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return Vs(i.bytesValue).isEqual(Vs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return xe(i.geoPointValue.latitude)===xe(r.geoPointValue.latitude)&&xe(i.geoPointValue.longitude)===xe(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return xe(i.integerValue)===xe(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=xe(i.doubleValue),a=xe(r.doubleValue);return o===a?Ja(o)===Ja(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Oi(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(e_(o)!==e_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!_n(o[l],a[l])))return!1;return!0}(t,e);default:return q()}}function lo(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function xi(t,e){if(t===e)return 0;const n=Fs(t),s=Fs(e);if(n!==s)return ue(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=xe(r.integerValue||r.doubleValue),l=xe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return n_(t.timestampValue,e.timestampValue);case 4:return n_(oo(t),oo(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(r,o){const a=Vs(r),l=Vs(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ue(a[c],l[c]);if(u!==0)return u}return ue(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=ue(xe(r.latitude),xe(o.latitude));return a!==0?a:ue(xe(r.longitude),xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=xi(a[c],l[c]);if(u)return u}return ue(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===na.mapValue&&o===na.mapValue)return 0;if(r===na.mapValue)return 1;if(o===na.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=ue(l[h],u[h]);if(d!==0)return d;const p=xi(a[l[h]],c[u[h]]);if(p!==0)return p}return ue(l.length,u.length)}(t.mapValue,e.mapValue);default:throw q()}}function n_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=os(t),s=os(e),i=ue(n.seconds,s.seconds);return i!==0?i:ue(n.nanos,s.nanos)}function Mi(t){return zu(t)}function zu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=os(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Vs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=zu(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${zu(n.fields[o])}`;return i+"}"}(t.mapValue):q()}function Ku(t){return!!t&&"integerValue"in t}function Pd(t){return!!t&&"arrayValue"in t}function s_(t){return!!t&&"nullValue"in t}function i_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function va(t){return!!t&&"mapValue"in t}function kr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ji(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=kr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=kr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function uP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!va(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=kr(n)}setAll(e){let n=Ze.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=kr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());va(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];va(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Ji(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Nt(kr(this.value))}}function Nv(t){const e=[];return Ji(t.fields,(n,s)=>{const i=new Ze([n]);if(va(s)){const r=Nv(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Ft(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new rt(e,0,z.min(),z.min(),z.min(),Nt.empty(),0)}static newFoundDocument(e,n,s,i){return new rt(e,1,n,z.min(),s,i,0)}static newNoDocument(e,n){return new rt(e,2,n,z.min(),z.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,z.min(),z.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Za{constructor(e,n){this.position=e,this.inclusive=n}}function r_(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=W.comparator(W.fromName(o.referenceValue),n.key):s=xi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function o_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class el{constructor(e,n="asc"){this.field=e,this.dir=n}}function hP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Dv{}class Be extends Dv{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new fP(e,n,s):n==="array-contains"?new gP(e,s):n==="in"?new mP(e,s):n==="not-in"?new yP(e,s):n==="array-contains-any"?new vP(e,s):new Be(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new pP(e,s):new _P(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(xi(n,this.value)):n!==null&&Fs(this.value)===Fs(n)&&this.matchesComparison(xi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gn extends Dv{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new gn(e,n)}matches(e){return Ov(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Ov(t){return t.op==="and"}function xv(t){return dP(t)&&Ov(t)}function dP(t){for(const e of t.filters)if(e instanceof gn)return!1;return!0}function Gu(t){if(t instanceof Be)return t.field.canonicalString()+t.op.toString()+Mi(t.value);if(xv(t))return t.filters.map(e=>Gu(e)).join(",");{const e=t.filters.map(n=>Gu(n)).join(",");return`${t.op}(${e})`}}function Mv(t,e){return t instanceof Be?function(s,i){return i instanceof Be&&s.op===i.op&&s.field.isEqual(i.field)&&_n(s.value,i.value)}(t,e):t instanceof gn?function(s,i){return i instanceof gn&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&Mv(o,i.filters[a]),!0):!1}(t,e):void q()}function Lv(t){return t instanceof Be?function(n){return`${n.field.canonicalString()} ${n.op} ${Mi(n.value)}`}(t):t instanceof gn?function(n){return n.op.toString()+" {"+n.getFilters().map(Lv).join(" ,")+"}"}(t):"Filter"}class fP extends Be{constructor(e,n,s){super(e,n,s),this.key=W.fromName(s.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class pP extends Be{constructor(e,n){super(e,"in",n),this.keys=Vv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class _P extends Be{constructor(e,n){super(e,"not-in",n),this.keys=Vv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Vv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>W.fromName(s.referenceValue))}class gP extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pd(n)&&lo(n.arrayValue,this.value)}}class mP extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&lo(this.value.arrayValue,n)}}class yP extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!lo(this.value.arrayValue,n)}}class vP extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>lo(this.value.arrayValue,s))}}/**
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
 */class EP{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ce=null}}function a_(t,e=null,n=[],s=[],i=null,r=null,o=null){return new EP(t,e,n,s,i,r,o)}function kd(t){const e=X(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Gu(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),lc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Mi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Mi(s)).join(",")),e.ce=n}return e.ce}function Nd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Mv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!o_(t.startAt,e.startAt)&&o_(t.endAt,e.endAt)}function Qu(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function TP(t,e,n,s,i,r,o,a){return new cc(t,e,n,s,i,r,o,a)}function uc(t){return new cc(t)}function l_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function IP(t){return t.collectionGroup!==null}function Nr(t){const e=X(t);if(e.le===null){e.le=[];const n=new Set;for(const r of e.explicitOrderBy)e.le.push(r),n.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new tt(Ze.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.le.push(new el(r,s))}),n.has(Ze.keyField().canonicalString())||e.le.push(new el(Ze.keyField(),s))}return e.le}function cn(t){const e=X(t);return e.he||(e.he=wP(e,Nr(t))),e.he}function wP(t,e){if(t.limitType==="F")return a_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new el(i.field,r)});const n=t.endAt?new Za(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Za(t.startAt.position,t.startAt.inclusive):null;return a_(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Yu(t,e,n){return new cc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hc(t,e){return Nd(cn(t),cn(e))&&t.limitType===e.limitType}function Fv(t){return`${kd(cn(t))}|lt:${t.limitType}`}function si(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>Lv(i)).join(", ")}]`),lc(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>Mi(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>Mi(i)).join(",")),`Target(${s})`}(cn(t))}; limitType=${t.limitType})`}function dc(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):W.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of Nr(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,a,l){const c=r_(o,a,l);return o.inclusive?c<=0:c<0}(s.startAt,Nr(s),i)||s.endAt&&!function(o,a,l){const c=r_(o,a,l);return o.inclusive?c>=0:c>0}(s.endAt,Nr(s),i))}(t,e)}function AP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Uv(t){return(e,n)=>{let s=!1;for(const i of Nr(t)){const r=RP(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function RP(t,e,n){const s=t.field.isKeyField()?W.comparator(e.key,n.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?xi(l,c):q()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ji(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Pv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP=new Fe(W.comparator);function Ln(){return CP}const Bv=new Fe(W.comparator);function vr(...t){let e=Bv;for(const n of t)e=e.insert(n.key,n);return e}function Wv(t){let e=Bv;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Rs(){return Dr()}function $v(){return Dr()}function Dr(){return new Zi(t=>t.toString(),(t,e)=>t.isEqual(e))}const SP=new Fe(W.comparator),bP=new tt(W.comparator);function ne(...t){let e=bP;for(const n of t)e=e.add(n);return e}const PP=new tt(ue);function kP(){return PP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ja(e)?"-0":e}}function qv(t){return{integerValue:""+t}}function NP(t,e){return aP(e)?qv(e):jv(t,e)}/**
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
 */class fc{constructor(){this._=void 0}}function DP(t,e,n){return t instanceof tl?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Sd(r)&&(r=bd(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof co?zv(t,e):t instanceof uo?Kv(t,e):function(i,r){const o=Hv(i,r),a=c_(o)+c_(i.Ie);return Ku(o)&&Ku(i.Ie)?qv(a):jv(i.serializer,a)}(t,e)}function OP(t,e,n){return t instanceof co?zv(t,e):t instanceof uo?Kv(t,e):n}function Hv(t,e){return t instanceof nl?function(s){return Ku(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class tl extends fc{}class co extends fc{constructor(e){super(),this.elements=e}}function zv(t,e){const n=Gv(e);for(const s of t.elements)n.some(i=>_n(i,s))||n.push(s);return{arrayValue:{values:n}}}class uo extends fc{constructor(e){super(),this.elements=e}}function Kv(t,e){let n=Gv(e);for(const s of t.elements)n=n.filter(i=>!_n(i,s));return{arrayValue:{values:n}}}class nl extends fc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function c_(t){return xe(t.integerValue||t.doubleValue)}function Gv(t){return Pd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function xP(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof co&&i instanceof co||s instanceof uo&&i instanceof uo?Oi(s.elements,i.elements,_n):s instanceof nl&&i instanceof nl?_n(s.Ie,i.Ie):s instanceof tl&&i instanceof tl}(t.transform,e.transform)}class MP{constructor(e,n){this.version=e,this.transformResults=n}}class Nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nn}static exists(e){return new Nn(void 0,e)}static updateTime(e){return new Nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ea(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pc{}function Qv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xv(t.key,Nn.none()):new No(t.key,t.data,Nn.none());{const n=t.data,s=Nt.empty();let i=new tt(Ze.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Hs(t.key,s,new Ft(i.toArray()),Nn.none())}}function LP(t,e,n){t instanceof No?function(i,r,o){const a=i.value.clone(),l=h_(i.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Hs?function(i,r,o){if(!Ea(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=h_(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(Yv(i)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Or(t,e,n,s){return t instanceof No?function(r,o,a,l){if(!Ea(r.precondition,o))return a;const c=r.value.clone(),u=d_(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Hs?function(r,o,a,l){if(!Ea(r.precondition,o))return a;const c=d_(r.fieldTransforms,l,o),u=o.data;return u.setAll(Yv(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(r,o,a){return Ea(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function VP(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Hv(s.transform,i||null);r!=null&&(n===null&&(n=Nt.empty()),n.set(s.field,r))}return n||null}function u_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Oi(s,i,(r,o)=>xP(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class No extends pc{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Hs extends pc{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Yv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function h_(t,e,n){const s=new Map;Ce(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,OP(o,a,n[i]))}return s}function d_(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,DP(r,o,e))}return s}class Xv extends pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class FP extends pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&LP(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Or(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Or(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=$v();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=Qv(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Oi(this.mutations,e.mutations,(n,s)=>u_(n,s))&&Oi(this.baseMutations,e.baseMutations,(n,s)=>u_(n,s))}}class Dd{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Ce(e.mutations.length===s.length);let i=function(){return SP}();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Dd(e,n,s,i)}}/**
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
 */class BP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class WP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,ie;function $P(t){switch(t){default:return q();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Jv(t){if(t===void 0)return Mn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Oe.OK:return I.OK;case Oe.CANCELLED:return I.CANCELLED;case Oe.UNKNOWN:return I.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return I.INTERNAL;case Oe.UNAVAILABLE:return I.UNAVAILABLE;case Oe.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Oe.NOT_FOUND:return I.NOT_FOUND;case Oe.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Oe.ABORTED:return I.ABORTED;case Oe.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Oe.DATA_LOSS:return I.DATA_LOSS;default:return q()}}(ie=Oe||(Oe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function jP(){return new TextEncoder}/**
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
 */const qP=new mi([4294967295,4294967295],0);function f_(t){const e=jP().encode(t),n=new zb;return n.update(e),new Uint8Array(n.digest())}function p_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new mi([n,s],0),new mi([i,r],0)]}class Od{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Er(`Invalid padding: ${n}`);if(s<0)throw new Er(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Er(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Er(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=mi.fromNumber(this.Te)}de(e,n,s){let i=e.add(n.multiply(mi.fromNumber(s)));return i.compare(qP)===1&&(i=new mi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=f_(e),[s,i]=p_(n);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);if(!this.Ae(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Od(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=f_(e),[s,i]=p_(n);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);this.Re(o)}}Re(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Er extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Do.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new _c(z.min(),i,new Fe(ue),Ln(),ne())}}class Do{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Do(s,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n,s,i){this.Ve=e,this.removedTargetIds=n,this.key=s,this.me=i}}class Zv{constructor(e,n){this.targetId=e,this.fe=n}}class eE{constructor(e,n,s=pt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class __{constructor(){this.ge=0,this.pe=m_(),this.ye=pt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ne(),n=ne(),s=ne();return this.pe.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:q()}}),new Do(this.ye,this.we,e,n,s)}Fe(){this.Se=!1,this.pe=m_()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class HP{constructor(e){this.Le=e,this.ke=new Map,this.qe=Ln(),this.Qe=g_(),this.Ke=new Fe(ue)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const s=this.ze(n);switch(e.state){case 0:this.je(n)&&s.Ce(e.resumeToken);break;case 1:s.Ne(),s.be||s.Fe(),s.Ce(e.resumeToken);break;case 2:s.Ne(),s.be||this.removeTarget(n);break;case 3:this.je(n)&&(s.Be(),s.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),s.Ce(e.resumeToken));break;default:q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((s,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,s=e.fe.count,i=this.Ye(n);if(i){const r=i.target;if(Qu(r))if(s===0){const o=new W(r.path);this.We(n,o,rt.newNoDocument(o,z.min()))}else Ce(s===1);else{const o=this.Ze(n);if(o!==s){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=n;let o,a;try{o=Vs(s).toUint8Array()}catch(l){if(l instanceof kv)return Di("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Od(o,i,r)}catch(l){return Di(l instanceof Er?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,s){return n.fe.count===s-this.rt(e,n.targetId)?0:2}rt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let i=0;return s.forEach(r=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.We(n,r,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((r,o)=>{const a=this.Ye(o);if(a){if(r.current&&Qu(a.target)){const l=new W(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,rt.newNoDocument(l,e))}r.De&&(n.set(o,r.ve()),r.Fe())}});let s=ne();this.Qe.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.qe.forEach((r,o)=>o.setReadTime(e));const i=new _c(e,n,this.Ke,this.qe,s);return this.qe=Ln(),this.Qe=g_(),this.Ke=new Fe(ue),i}Ue(e,n){if(!this.je(e))return;const s=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,s),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,s){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),s&&(this.qe=this.qe.insert(n,s))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new __,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new tt(ue),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||M("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new __),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function g_(){return new Fe(W.comparator)}function m_(){return new Fe(W.comparator)}const zP=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),KP=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),GP=(()=>({and:"AND",or:"OR"}))();class QP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xu(t,e){return t.useProto3Json||lc(e)?e:{value:e}}function sl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function YP(t,e){return sl(t,e.toTimestamp())}function un(t){return Ce(!!t),z.fromTimestamp(function(n){const s=os(n);return new Ve(s.seconds,s.nanos)}(t))}function xd(t,e){return function(s){return new be(["projects",s.projectId,"databases",s.database])}(t).child("documents").child(e).canonicalString()}function nE(t){const e=be.fromString(t);return Ce(oE(e)),e}function Ju(t,e){return xd(t.databaseId,e.path)}function Yc(t,e){const n=nE(e);if(n.get(1)!==t.databaseId.projectId)throw new F(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(sE(n))}function Zu(t,e){return xd(t.databaseId,e)}function XP(t){const e=nE(t);return e.length===4?be.emptyPath():sE(e)}function eh(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sE(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function y_(t,e,n){return{name:Ju(t,e),fields:n.value.mapValue.fields}}function JP(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(Ce(u===void 0||typeof u=="string"),pt.fromBase64String(u||"")):(Ce(u===void 0||u instanceof Uint8Array),pt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?I.UNKNOWN:Jv(c.code);return new F(u,c.message||"")}(o);n=new eE(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Yc(t,s.document.name),r=un(s.document.updateTime),o=s.document.createTime?un(s.document.createTime):z.min(),a=new Nt({mapValue:{fields:s.document.fields}}),l=rt.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Ta(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Yc(t,s.document),r=s.readTime?un(s.readTime):z.min(),o=rt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Ta([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Yc(t,s.document),r=s.removedTargetIds||[];n=new Ta([],r,i,null)}else{if(!("filter"in e))return q();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new WP(i,r),a=s.targetId;n=new Zv(a,o)}}return n}function ZP(t,e){let n;if(e instanceof No)n={update:y_(t,e.key,e.value)};else if(e instanceof Xv)n={delete:Ju(t,e.key)};else if(e instanceof Hs)n={update:y_(t,e.key,e.data),updateMask:lk(e.fieldMask)};else{if(!(e instanceof FP))return q();n={verify:Ju(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof tl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof co)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof uo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof nl)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw q()}(0,s))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:YP(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:q()}(t,e.precondition)),n}function ek(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(i,r){let o=i.updateTime?un(i.updateTime):un(r);return o.isEqual(z.min())&&(o=un(r)),new MP(o,i.transformResults||[])}(n,e))):[]}function tk(t,e){return{documents:[Zu(t,e.path)]}}function nk(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Zu(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Zu(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return rE(gn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:ii(h.field),direction:rk(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Xu(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function sk(t){let e=XP(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Ce(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(h){const d=iE(h);return d instanceof gn&&xv(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new el(ri(g.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,lc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new Za(p,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,p=h.values||[];return new Za(p,d)}(n.endAt)),TP(e,i,o,r,a,"F",l,c)}function ik(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function iE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=ri(n.unaryFilter.field);return Be.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=ri(n.unaryFilter.field);return Be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ri(n.unaryFilter.field);return Be.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ri(n.unaryFilter.field);return Be.create(o,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(t):t.fieldFilter!==void 0?function(n){return Be.create(ri(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return gn.create(n.compositeFilter.filters.map(s=>iE(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q()}}(n.compositeFilter.op))}(t):q()}function rk(t){return zP[t]}function ok(t){return KP[t]}function ak(t){return GP[t]}function ii(t){return{fieldPath:t.canonicalString()}}function ri(t){return Ze.fromServerFormat(t.fieldPath)}function rE(t){return t instanceof Be?function(n){if(n.op==="=="){if(i_(n.value))return{unaryFilter:{field:ii(n.field),op:"IS_NAN"}};if(s_(n.value))return{unaryFilter:{field:ii(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(i_(n.value))return{unaryFilter:{field:ii(n.field),op:"IS_NOT_NAN"}};if(s_(n.value))return{unaryFilter:{field:ii(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ii(n.field),op:ok(n.op),value:n.value}}}(t):t instanceof gn?function(n){const s=n.getFilters().map(i=>rE(i));return s.length===1?s[0]:{compositeFilter:{op:ak(n.op),filters:s}}}(t):q()}function lk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function oE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,s,i,r=z.min(),o=z.min(),a=pt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e){this.ut=e}}function uk(t){const e=sk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yu(e,e.limit,"L"):e}/**
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
 */class hk{constructor(){this.on=new dk}addToCollectionParentIndex(e,n){return this.on.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}deleteAllFieldIndexes(e){return w.resolve()}createTargetIndexes(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(rs.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(rs.min())}updateCollectionGroup(e,n,s){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class dk{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new tt(be.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new tt(be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Li(0)}static Nn(){return new Li(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(){this.changes=new Zi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?w.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Or(s.mutation,i,Ft.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ne()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ne()){const i=Rs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=vr();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Rs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ne()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Ln();const o=Dr(),a=function(){return Dr()}();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Hs)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Or(u.mutation,c,u.mutation.getFieldMask(),Ve.now())):o.set(c.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new pk(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Dr();let i=new Fe((o,a)=>o-a),r=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Ft.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||ne()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=$v();u.forEach(d=>{if(!r.has(d)){const p=Qv(n.get(d),s.get(d));p!==null&&h.set(d,p),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return w.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):IP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,i):this.getDocumentsMatchingCollectionQuery(e,n,s,i)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):w.resolve(Rs());let a=-1,l=r;return o.next(c=>w.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?w.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,ne())).next(u=>({batchId:a,changes:Wv(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(s=>{let i=vr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s,i){const r=n.collectionGroup;let o=vr();return this.indexManager.getCollectionParents(e,r).next(a=>w.forEach(a,l=>{const c=function(h,d){return new cc(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s,i).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r,i))).next(o=>{r.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,rt.newInvalidDocument(u)))});let a=vr();return o.forEach((l,c)=>{const u=r.get(l);u!==void 0&&Or(u.mutation,c,Ft.empty(),Ve.now()),dc(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return w.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:un(i.createTime)}}(n)),w.resolve()}getNamedQuery(e,n){return w.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:uk(i.bundledQuery),readTime:un(i.readTime)}}(n)),w.resolve()}}/**
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
 */class mk{constructor(){this.overlays=new Fe(W.comparator),this.lr=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Rs();return w.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.lt(e,n,r)}),w.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.lr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.lr.delete(s)),w.resolve()}getOverlaysForCollection(e,n,s){const i=Rs(),r=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return w.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Fe((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=Rs(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Rs(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return w.resolve(a)}lt(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(s.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new BP(n,s));let r=this.lr.get(n);r===void 0&&(r=ne(),this.lr.set(n,r)),this.lr.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.hr=new tt(je.Pr),this.Ir=new tt(je.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const s=new je(e,n);this.hr=this.hr.add(s),this.Ir=this.Ir.add(s)}Er(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.dr(new je(e,n))}Ar(e,n){e.forEach(s=>this.removeReference(s,n))}Rr(e){const n=new W(new be([])),s=new je(n,e),i=new je(n,e+1),r=[];return this.Ir.forEachInRange([s,i],o=>{this.dr(o),r.push(o.key)}),r}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new W(new be([])),s=new je(n,e),i=new je(n,e+1);let r=ne();return this.Ir.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new je(e,0),s=this.hr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class je{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return W.comparator(e.key,n.key)||ue(e.gr,n.gr)}static Tr(e,n){return ue(e.gr,n.gr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new tt(je.Pr)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new UP(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new je(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Sr(s),r=i<0?0:i;return w.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new je(n,0),i=new je(n,Number.POSITIVE_INFINITY),r=[];return this.yr.forEachInRange([s,i],o=>{const a=this.wr(o.gr);r.push(a)}),w.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new tt(ue);return n.forEach(i=>{const r=new je(i,0),o=new je(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([r,o],a=>{s=s.add(a.gr)})}),w.resolve(this.br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;W.isDocumentKey(r)||(r=r.child(""));const o=new je(new W(r),0);let a=new tt(ue);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.gr)),!0)},o),w.resolve(this.br(a))}br(e){const n=[];return e.forEach(s=>{const i=this.wr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ce(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.yr;return w.forEach(n.mutations,i=>{const r=new je(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=s})}Fn(e){}containsKey(e,n){const s=new je(n,0),i=this.yr.firstAfterOrEqual(s);return w.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e){this.Cr=e,this.docs=function(){return new Fe(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return w.resolve(s?s.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let s=Ln();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():rt.newInvalidDocument(i))}),w.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Ln();const o=n.path,a=new W(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||iP(sP(u),s)<=0||(i.has(u.key)||dc(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return w.resolve(r)}getAllFromCollectionGroup(e,n,s,i){q()}vr(e,n){return w.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Ek(this)}getSize(e){return w.resolve(this.size)}}class Ek extends fk{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(s)}),w.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e){this.persistence=e,this.Fr=new Zi(n=>kd(n),Nd),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Md,this.targetCount=0,this.Nr=Li.On()}forEachTarget(e,n){return this.Fr.forEach((s,i)=>n(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Mr&&(this.Mr=n),w.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Li(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.kn(n),w.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Fr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),w.waitFor(r).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const s=this.Fr.get(n)||null;return w.resolve(s)}addMatchingKeys(e,n,s){return this.Or.Er(n,s),w.resolve()}removeMatchingKeys(e,n,s){this.Or.Ar(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),w.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),w.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Or.mr(n);return w.resolve(s)}containsKey(e,n){return w.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Cd(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new Tk(this),this.indexManager=new hk,this.remoteDocumentCache=function(i){return new vk(i)}(s=>this.referenceDelegate.Qr(s)),this.serializer=new ck(n),this.Kr=new gk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Br[e.toKey()];return s||(s=new yk(n,this.referenceDelegate),this.Br[e.toKey()]=s),s}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,s){M("MemoryPersistence","Starting transaction:",e);const i=new wk(this.Lr.next());return this.referenceDelegate.$r(),s(i).next(r=>this.referenceDelegate.Ur(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Wr(e,n){return w.or(Object.values(this.Br).map(s=>()=>s.containsKey(e,n)))}}class wk extends oP{constructor(e){super(),this.currentSequenceNumber=e}}class Ld{constructor(e){this.persistence=e,this.Gr=new Md,this.zr=null}static jr(e){return new Ld(e)}get Hr(){if(this.zr)return this.zr;throw q()}addReference(e,n,s){return this.Gr.addReference(s,n),this.Hr.delete(s.toString()),w.resolve()}removeReference(e,n,s){return this.Gr.removeReference(s,n),this.Hr.add(s.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),w.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Hr.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Hr,s=>{const i=W.fromPath(s);return this.Jr(e,i).next(r=>{r||n.removeEntry(i,z.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(s=>{s?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return w.or([()=>w.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.ki=s,this.qi=i}static Qi(e,n){let s=ne(),i=ne();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Vd(e,n.fromCache,s,i)}}/**
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
 */class Ak{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Rk{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,s,i){const r={result:null};return this.zi(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.ji(e,n,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new Ak;return this.Hi(e,n,o).next(a=>{if(r.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>r.result)}Ji(e,n,s,i){return s.documentReadCount<this.Ui?(cr()<=te.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",si(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),w.resolve()):(cr()<=te.DEBUG&&M("QueryEngine","Query:",si(n),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Wi*i?(cr()<=te.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",si(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cn(n))):w.resolve())}zi(e,n){if(l_(n))return w.resolve(null);let s=cn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Yu(n,null,"F"),s=cn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=ne(...r);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Yi(n,a);return this.Zi(n,c,o,l.readTime)?this.zi(e,Yu(n,null,"F")):this.Xi(e,c,n,l)}))})))}ji(e,n,s,i){return l_(n)||i.isEqual(z.min())?w.resolve(null):this.Gi.getDocuments(e,s).next(r=>{const o=this.Yi(n,r);return this.Zi(n,o,s,i)?w.resolve(null):(cr()<=te.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),si(n)),this.Xi(e,o,n,nP(i,-1)).next(a=>a))})}Yi(e,n){let s=new tt(Uv(e));return n.forEach((i,r)=>{dc(e,r)&&(s=s.add(r))}),s}Zi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Hi(e,n,s){return cr()<=te.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",si(n)),this.Gi.getDocumentsMatchingQuery(e,n,rs.min(),s)}Xi(e,n,s,i){return this.Gi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e,n,s,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new Fe(ue),this.ns=new Zi(r=>kd(r),Nd),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(s)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _k(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function Sk(t,e,n,s){return new Ck(t,e,n,s)}async function aE(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.os(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=ne();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function bk(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let p=w.resolve();return d.forEach(g=>{p=p.next(()=>u.getEntry(l,g)).next(m=>{const v=c.docVersions.get(g);Ce(v!==null),m.version.compareTo(v)<0&&(h.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let l=ne();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function lE(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function Pk(t,e){const n=X(t),s=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(r,u.addedDocuments,h)));let p=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(pt.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),i=i.insert(h,p),function(m,v,D){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(d,p,u)&&a.push(n.qr.updateTargetData(r,p))});let l=Ln(),c=ne();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(kk(r,o,e.documentUpdates).next(u=>{l=u.us,c=u.cs})),!s.isEqual(z.min())){const u=n.qr.getLastRemoteSnapshotVersion(r).next(h=>n.qr.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return w.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.ts=i,r))}function kk(t,e,n){let s=ne(),i=ne();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Ln();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:i}})}function Nk(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Dk(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.qr.getTargetData(s,e).next(r=>r?(i=r,w.resolve(i)):n.qr.allocateTargetId(s).next(o=>(i=new Kn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.qr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.ts.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(s.targetId,s),n.ns.set(e,s.targetId)),s})}async function th(t,e,n){const s=X(t),i=s.ts.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ko(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ts=s.ts.remove(e),s.ns.delete(i.target)}function v_(t,e,n){const s=X(t);let i=z.min(),r=ne();return s.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=X(l),d=h.ns.get(u);return d!==void 0?w.resolve(h.ts.get(d)):h.qr.getTargetData(c,u)}(s,o,cn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.es.getDocumentsMatchingQuery(o,e,n?i:z.min(),n?r:ne())).next(a=>(Ok(s,AP(e),a),{documents:a,ls:r})))}function Ok(t,e,n){let s=t.rs.get(e)||z.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.rs.set(e,s)}class E_{constructor(){this.activeTargetIds=kP()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xk{constructor(){this.eo=new E_,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,s){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new E_,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Mk{ro(e){}shutdown(){}}/**
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
 */class T_{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let sa=null;function Xc(){return sa===null?sa=function(){return 268435456+Math.round(2147483648*Math.random())}():sa++,"0x"+sa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="WebChannelConnection";class Fk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=s+"://"+n.host,this.fo=`projects/${i}/databases/${r}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get yo(){return!1}wo(n,s,i,r,o){const a=Xc(),l=this.So(n,s);M("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,r,o),this.Do(n,l,c,i).then(u=>(M("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Di("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}Co(n,s,i,r,o,a){return this.wo(n,s,i,r,o)}bo(n,s,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>n[o]=r),i&&i.headers.forEach((r,o)=>n[o]=r)}So(n,s){const i=Lk[n];return`${this.mo}/v1/${s}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,s,i){const r=Xc();return new Promise((o,a)=>{const l=new Hb;l.setWithCredentials(!0),l.listenOnce($b.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Qc.NO_ERROR:const u=l.getResponseJson();M(nt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Qc.TIMEOUT:M(nt,`RPC '${e}' ${r} timed out`),a(new F(I.DEADLINE_EXCEEDED,"Request time out"));break;case Qc.HTTP_ERROR:const h=l.getStatus();if(M(nt,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const g=function(v){const D=v.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(D)>=0?D:I.UNKNOWN}(p.status);a(new F(g,p.message))}else a(new F(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new F(I.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{M(nt,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);M(nt,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}vo(e,n,s){const i=Xc(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Bb(),a=Wb(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new qb({})),this.bo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=r.join("");M(nt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,p=!1;const g=new Vk({co:v=>{p?M(nt,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(M(nt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),M(nt,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},lo:()=>h.close()}),m=(v,D,V)=>{v.listen(D,N=>{try{V(N)}catch(R){setTimeout(()=>{throw R},0)}})};return m(h,ea.EventType.OPEN,()=>{p||M(nt,`RPC '${e}' stream ${i} transport opened.`)}),m(h,ea.EventType.CLOSE,()=>{p||(p=!0,M(nt,`RPC '${e}' stream ${i} transport closed`),g.Ro())}),m(h,ea.EventType.ERROR,v=>{p||(p=!0,Di(nt,`RPC '${e}' stream ${i} transport errored:`,v),g.Ro(new F(I.UNAVAILABLE,"The operation could not be completed")))}),m(h,ea.EventType.MESSAGE,v=>{var D;if(!p){const V=v.data[0];Ce(!!V);const N=V,R=N.error||((D=N[0])===null||D===void 0?void 0:D.error);if(R){M(nt,`RPC '${e}' stream ${i} received error:`,R);const G=R.status;let de=function(Z){const Te=Oe[Z];if(Te!==void 0)return Jv(Te)}(G),me=R.message;de===void 0&&(de=I.INTERNAL,me="Unknown error status: "+G+" with message "+R.message),p=!0,g.Ro(new F(de,me)),h.close()}else M(nt,`RPC '${e}' stream ${i} received:`,V),g.Vo(V)}}),m(a,jb.STAT_EVENT,v=>{v.stat===Jp.PROXY?M(nt,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===Jp.NOPROXY&&M(nt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.Ao()},0),g}}function Jc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(t){return new QP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,n,s=1e3,i=1.5,r=6e4){this.si=e,this.timerId=n,this.Fo=s,this.Mo=i,this.xo=r,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),s=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-s);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,n,s,i,r,o,a,l){this.si=e,this.Ko=s,this.$o=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new cE(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Uo===n&&this.s_(s,i)},s=>{e(()=>{const i=new F(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.o_(i)})})}s_(e,n){const s=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{s(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{s(()=>this.o_(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Uk extends uE{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=JP(this.serializer,e),s=function(r){if(!("targetChange"in r))return z.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?z.min():o.readTime?un(o.readTime):z.min()}(e);return this.listener.a_(n,s)}u_(e){const n={};n.database=eh(this.serializer),n.addTarget=function(r,o){let a;const l=o.target;if(a=Qu(l)?{documents:tk(r,l)}:{query:nk(r,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=tE(r,o.resumeToken);const c=Xu(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(z.min())>0){a.readTime=sl(r,o.snapshotVersion.toTimestamp());const c=Xu(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const s=ik(this.serializer,e);s&&(n.labels=s),this.e_(n)}c_(e){const n={};n.database=eh(this.serializer),n.removeTarget=e,this.e_(n)}}class Bk extends uE{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=ek(e.writeResults,e.commitTime),s=un(e.commitTime);return this.listener.I_(s,n)}return Ce(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=eh(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>ZP(this.serializer,s))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new F(I.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.wo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(I.UNKNOWN,i.toString())})}Co(e,n,s,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Co(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new F(I.UNKNOWN,r.toString())})}terminate(){this.d_=!0}}class $k{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Mn(n),this.f_=!1):M("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=r,this.F_.ro(o=>{s.enqueueAndForget(async()=>{zs(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=X(l);c.C_.add(4),await Oo(c),c.M_.set("Unknown"),c.C_.delete(4),await mc(c)}(this))})}),this.M_=new $k(s,i)}}async function mc(t){if(zs(t))for(const e of t.v_)await e(!0)}async function Oo(t){for(const e of t.v_)await e(!1)}function hE(t,e){const n=X(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Bd(n)?Ud(n):er(n).Ho()&&Fd(n,e))}function dE(t,e){const n=X(t),s=er(n);n.D_.delete(e),s.Ho()&&fE(n,e),n.D_.size===0&&(s.Ho()?s.Zo():zs(n)&&n.M_.set("Unknown"))}function Fd(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}er(t).u_(e)}function fE(t,e){t.x_.Oe(e),er(t).c_(e)}function Ud(t){t.x_=new HP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),er(t).start(),t.M_.g_()}function Bd(t){return zs(t)&&!er(t).jo()&&t.D_.size>0}function zs(t){return X(t).C_.size===0}function pE(t){t.x_=void 0}async function qk(t){t.D_.forEach((e,n)=>{Fd(t,e)})}async function Hk(t,e){pE(t),Bd(t)?(t.M_.w_(e),Ud(t)):t.M_.set("Unknown")}async function zk(t,e,n){if(t.M_.set("Online"),e instanceof eE&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(s){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await il(t,s)}else if(e instanceof Ta?t.x_.$e(e):e instanceof Zv?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(z.min()))try{const s=await lE(t.localStore);n.compareTo(s)>=0&&await function(r,o){const a=r.x_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.D_.get(c);u&&r.D_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.D_.get(l);if(!u)return;r.D_.set(l,u.withResumeToken(pt.EMPTY_BYTE_STRING,u.snapshotVersion)),fE(r,l);const h=new Kn(u.target,l,c,u.sequenceNumber);Fd(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){M("RemoteStore","Failed to raise snapshot:",s),await il(t,s)}}async function il(t,e,n){if(!ko(e))throw e;t.C_.add(1),await Oo(t),t.M_.set("Offline"),n||(n=()=>lE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await mc(t)})}function _E(t,e){return e().catch(n=>il(t,n,e))}async function yc(t){const e=X(t),n=as(e);let s=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;Kk(e);)try{const i=await Nk(e.localStore,s);if(i===null){e.b_.length===0&&n.Zo();break}s=i.batchId,Gk(e,i)}catch(i){await il(e,i)}gE(e)&&mE(e)}function Kk(t){return zs(t)&&t.b_.length<10}function Gk(t,e){t.b_.push(e);const n=as(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function gE(t){return zs(t)&&!as(t).jo()&&t.b_.length>0}function mE(t){as(t).start()}async function Qk(t){as(t).E_()}async function Yk(t){const e=as(t);for(const n of t.b_)e.P_(n.mutations)}async function Xk(t,e,n){const s=t.b_.shift(),i=Dd.from(s,e,n);await _E(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await yc(t)}async function Jk(t,e){e&&as(t).h_&&await async function(s,i){if(function(o){return $P(o)&&o!==I.ABORTED}(i.code)){const r=s.b_.shift();as(s).Yo(),await _E(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await yc(s)}}(t,e),gE(t)&&mE(t)}async function I_(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const s=zs(n);n.C_.add(3),await Oo(n),s&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await mc(n)}async function Zk(t,e){const n=X(t);e?(n.C_.delete(2),await mc(n)):e||(n.C_.add(2),await Oo(n),n.M_.set("Unknown"))}function er(t){return t.O_||(t.O_=function(n,s,i){const r=X(n);return r.A_(),new Uk(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{ho:qk.bind(null,t),Io:Hk.bind(null,t),a_:zk.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Bd(t)?Ud(t):t.M_.set("Unknown")):(await t.O_.stop(),pE(t))})),t.O_}function as(t){return t.N_||(t.N_=function(n,s,i){const r=X(n);return r.A_(),new Bk(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{ho:Qk.bind(null,t),Io:Jk.bind(null,t),T_:Yk.bind(null,t),I_:Xk.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await yc(t)):(await t.N_.stop(),t.b_.length>0&&(M("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Wd(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $d(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),ko(t))return new F(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||W.comparator(n.key,s.key):(n,s)=>W.comparator(n.key,s.key),this.keyedMap=vr(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new yi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new yi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.B_=new Fe(W.comparator)}track(e){const n=e.doc.key,s=this.B_.get(n);s?e.type!==0&&s.type===3?this.B_=this.B_.insert(n,e):e.type===3&&s.type!==1?this.B_=this.B_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.B_=this.B_.remove(n):e.type===1&&s.type===2?this.B_=this.B_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):q():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Vi{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Vi(e,n,yi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(){this.k_=void 0,this.listeners=[]}}class tN{constructor(){this.queries=new Zi(e=>Fv(e),hc),this.onlineState="Unknown",this.q_=new Set}}async function jd(t,e){const n=X(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new eN),i)try{r.k_=await n.onListen(s)}catch(o){const a=$d(o,`Initialization of query '${si(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Q_(n.onlineState),r.k_&&e.K_(r.k_)&&Hd(n)}async function qd(t,e){const n=X(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function nN(t,e){const n=X(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.K_(i)&&(s=!0);o.k_=i}}s&&Hd(n)}function sN(t,e,n){const s=X(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Hd(t){t.q_.forEach(e=>{e.next()})}class zd{constructor(e,n,s){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=s||{}}K_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Vi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.J_||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Vi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.key=e}}class vE{constructor(e){this.key=e}}class iN{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=ne(),this.mutatedKeys=ne(),this._a=Uv(e),this.aa=new yi(this._a)}get ua(){return this.ia}ca(e,n){const s=n?n.la:new w_,i=n?n.aa:this.aa;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),p=dc(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),m=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;d&&p?d.data.isEqual(p.data)?g!==m&&(s.track({type:3,doc:p}),v=!0):this.ha(d,p)||(s.track({type:2,doc:p}),v=!0,(l&&this._a(p,l)>0||c&&this._a(p,c)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),v=!0):d&&!p&&(s.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(p?(o=o.add(p),r=m?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{aa:o,la:s,Zi:a,mutatedKeys:r}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const r=e.la.L_();r.sort((c,u)=>function(d,p){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return g(d)-g(p)}(c.type,u.type)||this._a(c.doc,u.doc)),this.Pa(s);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,l=a!==this.sa;return this.sa=a,r.length!==0||l?{snapshot:new Vi(this.query,e.aa,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new w_,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=ne(),this.aa.forEach(s=>{this.Ea(s.key)&&(this.oa=this.oa.add(s.key))});const n=[];return e.forEach(s=>{this.oa.has(s)||n.push(new vE(s))}),this.oa.forEach(s=>{e.has(s)||n.push(new yE(s))}),n}da(e){this.ia=e.ls,this.oa=ne();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Vi.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class rN{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class oN{constructor(e){this.key=e,this.Ra=!1}}class aN{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Zi(a=>Fv(a),hc),this.fa=new Map,this.ga=new Set,this.pa=new Fe(W.comparator),this.ya=new Map,this.wa=new Md,this.Sa={},this.ba=new Map,this.Da=Li.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function lN(t,e){const n=yN(t);let s,i;const r=n.ma.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Aa();else{const o=await Dk(n.localStore,cn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await cN(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&hE(n.remoteStore,o)}return i}async function cN(t,e,n,s,i){t.va=(h,d,p)=>async function(m,v,D,V){let N=v.view.ca(D);N.Zi&&(N=await v_(m.localStore,v.query,!1).then(({documents:de})=>v.view.ca(de,N)));const R=V&&V.targetChanges.get(v.targetId),G=v.view.applyChanges(N,m.isPrimaryClient,R);return R_(m,v.targetId,G.Ta),G.snapshot}(t,h,d,p);const r=await v_(t.localStore,e,!0),o=new iN(e,r.ls),a=o.ca(r.documents),l=Do.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);R_(t,n,c.Ta);const u=new rN(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),c.snapshot}async function uN(t,e){const n=X(t),s=n.ma.get(e),i=n.fa.get(s.targetId);if(i.length>1)return n.fa.set(s.targetId,i.filter(r=>!hc(r,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await th(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),dE(n.remoteStore,s.targetId),nh(n,s.targetId)}).catch(Po)):(nh(n,s.targetId),await th(n.localStore,s.targetId,!0))}async function hN(t,e,n){const s=vN(t);try{const i=await function(o,a){const l=X(o),c=Ve.now(),u=a.reduce((p,g)=>p.add(g.key),ne());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let g=Ln(),m=ne();return l.ss.getEntries(p,u).next(v=>{g=v,g.forEach((D,V)=>{V.isValidDocument()||(m=m.add(D))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,g)).next(v=>{h=v;const D=[];for(const V of a){const N=VP(V,h.get(V.key).overlayedDocument);N!=null&&D.push(new Hs(V.key,N,Nv(N.value.mapValue),Nn.exists(!0)))}return l.mutationQueue.addMutationBatch(p,c,D,a)}).next(v=>{d=v;const D=v.applyToLocalDocumentSet(h,m);return l.documentOverlayCache.saveOverlays(p,v.batchId,D)})}).then(()=>({batchId:d.batchId,changes:Wv(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Sa[o.currentUser.toKey()];c||(c=new Fe(ue)),c=c.insert(a,l),o.Sa[o.currentUser.toKey()]=c}(s,i.batchId,n),await xo(s,i.changes),await yc(s.remoteStore)}catch(i){const r=$d(i,"Failed to persist write");n.reject(r)}}async function EE(t,e){const n=X(t);try{const s=await Pk(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.ya.get(r);o&&(Ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?Ce(o.Ra):i.removedDocuments.size>0&&(Ce(o.Ra),o.Ra=!1))}),await xo(n,s,e)}catch(s){await Po(s)}}function A_(t,e,n){const s=X(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ma.forEach((r,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=X(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(c=!0)}),c&&Hd(l)}(s.eventManager,e),i.length&&s.Va.a_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function dN(t,e,n){const s=X(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.ya.get(e),r=i&&i.key;if(r){let o=new Fe(W.comparator);o=o.insert(r,rt.newNoDocument(r,z.min()));const a=ne().add(r),l=new _c(z.min(),new Map,new Fe(ue),o,a);await EE(s,l),s.pa=s.pa.remove(r),s.ya.delete(e),Kd(s)}else await th(s.localStore,e,!1).then(()=>nh(s,e,n)).catch(Po)}async function fN(t,e){const n=X(t),s=e.batch.batchId;try{const i=await bk(n.localStore,e);IE(n,s,null),TE(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await xo(n,i)}catch(i){await Po(i)}}async function pN(t,e,n){const s=X(t);try{const i=await function(o,a){const l=X(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Ce(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(s.localStore,e);IE(s,e,n),TE(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await xo(s,i)}catch(i){await Po(i)}}function TE(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function IE(t,e,n){const s=X(t);let i=s.Sa[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.Sa[s.currentUser.toKey()]=i}}function nh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.fa.get(e))t.ma.delete(s),n&&t.Va.Fa(s,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(s=>{t.wa.containsKey(s)||wE(t,s)})}function wE(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(dE(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Kd(t))}function R_(t,e,n){for(const s of n)s instanceof yE?(t.wa.addReference(s.key,e),_N(t,s)):s instanceof vE?(M("SyncEngine","Document no longer in limbo: "+s.key),t.wa.removeReference(s.key,e),t.wa.containsKey(s.key)||wE(t,s.key)):q()}function _N(t,e){const n=e.key,s=n.path.canonicalString();t.pa.get(n)||t.ga.has(s)||(M("SyncEngine","New document in limbo: "+n),t.ga.add(s),Kd(t))}function Kd(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new W(be.fromString(e)),s=t.Da.next();t.ya.set(s,new oN(n)),t.pa=t.pa.insert(n,s),hE(t.remoteStore,new Kn(cn(uc(n.path)),s,"TargetPurposeLimboResolution",Cd._e))}}async function xo(t,e,n){const s=X(t),i=[],r=[],o=[];s.ma.isEmpty()||(s.ma.forEach((a,l)=>{o.push(s.va(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Vd.Qi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.Va.a_(i),await async function(l,c){const u=X(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>w.forEach(c,d=>w.forEach(d.ki,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>w.forEach(d.qi,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!ko(h))throw h;M("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const p=u.ts.get(d),g=p.snapshotVersion,m=p.withLastLimboFreeSnapshotVersion(g);u.ts=u.ts.insert(d,m)}}}(s.localStore,r))}async function gN(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const s=await aE(n.localStore,e);n.currentUser=e,function(r,o){r.ba.forEach(a=>{a.forEach(l=>{l.reject(new F(I.CANCELLED,o))})}),r.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await xo(n,s._s)}}function mN(t,e){const n=X(t),s=n.ya.get(e);if(s&&s.Ra)return ne().add(s.key);{let i=ne();const r=n.fa.get(e);if(!r)return i;for(const o of r){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function yN(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=EE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dN.bind(null,e),e.Va.a_=nN.bind(null,e.eventManager),e.Va.Fa=sN.bind(null,e.eventManager),e}function vN(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pN.bind(null,e),e}class C_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=gc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Sk(this.persistence,new Rk,e.initialUser,this.serializer)}createPersistence(e){return new Ik(Ld.jr,this.serializer)}createSharedClientState(e){return new xk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class EN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>A_(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=gN.bind(null,this.syncEngine),await Zk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tN}()}createDatastore(e){const n=gc(e.databaseInfo.databaseId),s=function(r){return new Fk(r)}(e.databaseInfo);return function(r,o,a,l){return new Wk(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,a){return new jk(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>A_(this.syncEngine,n,0),function(){return T_.D()?new T_:new Mk}())}createSyncEngine(e,n){return function(i,r,o,a,l,c,u){const h=new aN(i,r,o,a,l,c);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const s=X(n);M("RemoteStore","RemoteStore shutting down."),s.C_.add(5),await Oo(s),s.F_.shutdown(),s.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=st.UNAUTHENTICATED,this.clientId=bv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{M("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(M("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=$d(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Zc(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await aE(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function S_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wN(t);M("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>I_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>I_(e.remoteStore,r)),t._onlineComponents=e}function IN(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function wN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!IN(n))throw n;Di("Error using user provided cache. Falling back to memory cache: "+n),await Zc(t,new C_)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await Zc(t,new C_);return t._offlineComponents}async function AE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await S_(t,t._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await S_(t,new EN))),t._onlineComponents}function AN(t){return AE(t).then(e=>e.syncEngine)}async function rl(t){const e=await AE(t),n=e.eventManager;return n.onListen=lN.bind(null,e.syncEngine),n.onUnlisten=uN.bind(null,e.syncEngine),n}function RN(t,e,n={}){const s=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new Gd({next:d=>{o.enqueueAndForget(()=>qd(r,h));const p=d.docs.has(a);!p&&d.fromCache?c.reject(new F(I.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&l&&l.source==="server"?c.reject(new F(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new zd(uc(a.path),u,{includeMetadataChanges:!0,J_:!0});return jd(r,h)}(await rl(t),t.asyncQueue,e,n,s)),s.promise}function CN(t,e,n={}){const s=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new Gd({next:d=>{o.enqueueAndForget(()=>qd(r,h)),d.fromCache&&l.source==="server"?c.reject(new F(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new zd(a,u,{includeMetadataChanges:!0,J_:!0});return jd(r,h)}(await rl(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function RE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t,e,n){if(!n)throw new F(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function SN(t,e,n,s){if(e===!0&&s===!0)throw new F(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function P_(t){if(!W.isDocumentKey(t))throw new F(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function k_(t){if(W.isDocumentKey(t))throw new F(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function hn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qd(t);throw new F(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new F(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}SN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=RE((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new F(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new F(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new F(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vc{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new N_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new N_(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Kb;switch(s.type){case"firstParty":return new Xb(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new F(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=b_.get(n);s&&(M("ComponentProvider","Removing Datastore"),b_.delete(n),s.terminate())}(this),Promise.resolve()}}function bN(t,e,n,s={}){var i;const r=(t=hn(t,vc))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Di("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=st.MOCK_USER;else{a=sA(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new F(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new st(c)}t._authCredentials=new Gb(new Sv(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Mo(this.firestore,e,this._query)}}class Tt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class ts extends Mo{constructor(e,n,s){super(e,n,uc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new W(e))}withConverter(e){return new ts(this.firestore,e,this._path)}}function D_(t,e,...n){if(t=wt(t),CE("collection","path",e),t instanceof vc){const s=be.fromString(e,...n);return k_(s),new ts(t,null,s)}{if(!(t instanceof Tt||t instanceof ts))throw new F(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(be.fromString(e,...n));return k_(s),new ts(t.firestore,null,s)}}function xr(t,e,...n){if(t=wt(t),arguments.length===1&&(e=bv.newId()),CE("doc","path",e),t instanceof vc){const s=be.fromString(e,...n);return P_(s),new Tt(t,null,new W(s))}{if(!(t instanceof Tt||t instanceof ts))throw new F(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(be.fromString(e,...n));return P_(s),new Tt(t.firestore,t instanceof ts?t.converter:null,new W(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new cE(this,"async_queue_retry"),this.iu=()=>{const n=Jc();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Jc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Jc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new kn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!ko(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(s=>{this.eu=s,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw Mn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.tu=!1,s))));return this.Ja=n,n}enqueueAfterDelay(e,n,s){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=Wd.createAndSchedule(this,e,n,s,r=>this.au(r));return this.Xa.push(i),i}su(){this.eu&&q()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function O_(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const i=n;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Fi extends vc{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=function(){return new PN}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||bE(this),this._firestoreClient.terminate()}}function SE(t,e){const n=typeof t=="object"?t:Kh(),s=typeof t=="string"?t:e||"(default)",i=zh(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=nA("firestore");r&&bN(i,...r)}return i}function Ec(t){return t._firestoreClient||bE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function bE(t){var e,n,s;const i=t._freezeSettings(),r=function(a,l,c,u){return new cP(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,RE(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new TN(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ui(pt.fromBase64String(e))}catch(n){throw new F(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ui(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN=/^__.*__$/;class NN{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Hs(e,this.data,this.fieldMask,n,this.fieldTransforms):new No(e,this.data,n,this.fieldTransforms)}}function kE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Xd{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Pu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Xd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:s,du:!1});return i.Au(e),i}Ru(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:s,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return ol(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(kE(this.Iu)&&kN.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class DN{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||gc(e)}pu(e,n,s,i=!1){return new Xd({Iu:e,methodName:n,gu:s,path:Ze.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ON(t){const e=t._freezeSettings(),n=gc(t._databaseId);return new DN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xN(t,e,n,s,i,r={}){const o=t.pu(r.merge||r.mergeFields?2:0,e,n,i);xE("Data must be an object, but it was:",o,s);const a=DE(s,o);let l,c;if(r.merge)l=new Ft(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=MN(e,h,n);if(!o.contains(d))throw new F(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);VN(u,d)||u.push(d)}l=new Ft(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new NN(new Nt(a),l,c)}function NE(t,e){if(OE(t=wt(t)))return xE("Unsupported field value:",e,t),DE(t,e);if(t instanceof PE)return function(s,i){if(!kE(i.Iu))throw i.mu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let l=NE(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(t,e)}return function(s,i){if((s=wt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return NP(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=Ve.fromDate(s);return{timestampValue:sl(i.serializer,r)}}if(s instanceof Ve){const r=new Ve(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:sl(i.serializer,r)}}if(s instanceof Tc)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ui)return{bytesValue:tE(i.serializer,s._byteString)};if(s instanceof Tt){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:xd(s.firestore._databaseId||i.databaseId,s._key.path)}}throw i.mu(`Unsupported field value: ${Qd(s)}`)}(t,e)}function DE(t,e){const n={};return Pv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ji(t,(s,i)=>{const r=NE(i,e.Eu(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function OE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof Tc||t instanceof Ui||t instanceof Tt||t instanceof PE)}function xE(t,e,n){if(!OE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const s=Qd(n);throw s==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+s)}}function MN(t,e,n){if((e=wt(e))instanceof Yd)return e._internalPath;if(typeof e=="string")return ME(t,e);throw ol("Field path arguments must be of type string or ",t,!1,void 0,n)}const LN=new RegExp("[~\\*/\\[\\]]");function ME(t,e,n){if(e.search(LN)>=0)throw ol(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yd(...e.split("."))._internalPath}catch{throw ol(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ol(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new F(I.INVALID_ARGUMENT,a+t+l)}function VN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(VE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class FN extends LE{data(){return super.data()}}function VE(t,e){return typeof e=="string"?ME(t,e):e instanceof Yd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class UN{convertValue(e,n="none"){switch(Fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Ji(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Tc(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=bd(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(oo(e));default:return null}}convertTimestamp(e){const n=os(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=be.fromString(e);Ce(oE(s));const i=new ao(s.get(1),s.get(3)),r=new W(s.popFirst(5));return i.isEqual(n)||Mn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class UE extends LE{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ia(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(VE("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ia extends UE{data(e={}){return super.data(e)}}class BE{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Tr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ia(this._firestore,this._userDataWriter,s.key,s,new Tr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Ia(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Tr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new Ia(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Tr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:WN(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function WN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(t){t=hn(t,Tt);const e=hn(t.firestore,Fi);return RN(Ec(e),t._key).then(n=>$E(e,t,n))}class Jd extends UN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ui(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function wa(t){t=hn(t,Mo);const e=hn(t.firestore,Fi),n=Ec(e),s=new Jd(e);return FE(t._query),CN(n,t._query).then(i=>new BE(e,s,t,i))}function Mr(t,e,n){t=hn(t,Tt);const s=hn(t.firestore,Fi),i=BN(t.converter,e,n);return $N(s,[xN(ON(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Nn.none())])}function Zd(t,...e){var n,s,i;t=wt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||O_(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(O_(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof Tt)c=hn(t.firestore,Fi),u=uc(t._key.path),l={next:h=>{e[o]&&e[o]($E(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=hn(t,Mo);c=hn(h.firestore,Fi),u=h._query;const d=new Jd(c);l={next:p=>{e[o]&&e[o](new BE(c,d,h,p))},error:e[o+1],complete:e[o+2]},FE(t._query)}return function(d,p,g,m){const v=new Gd(m),D=new zd(p,v,g);return d.asyncQueue.enqueueAndForget(async()=>jd(await rl(d),D)),()=>{v.Na(),d.asyncQueue.enqueueAndForget(async()=>qd(await rl(d),D))}}(Ec(c),u,a,l)}function $N(t,e){return function(s,i){const r=new kn;return s.asyncQueue.enqueueAndForget(async()=>hN(await AN(s),i,r)),r.promise}(Ec(t),e)}function $E(t,e,n){const s=n.docs.get(e._key),i=new Jd(t);return new UE(t,i,e._key,s,new Tr(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Xi=i})(cs),fn(new qt("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new Fi(new Qb(s.getProvider("auth-internal")),new Zb(s.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new F(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ao(c.options.projectId,u)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),St(Zp,"4.3.2",e),St(Zp,"4.3.2","esm2017")})();let ia;const jN=new Uint8Array(16);function qN(){if(!ia&&(ia=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ia))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ia(jN)}const Qe=[];for(let t=0;t<256;++t)Qe.push((t+256).toString(16).slice(1));function HN(t,e=0){return Qe[t[e+0]]+Qe[t[e+1]]+Qe[t[e+2]]+Qe[t[e+3]]+"-"+Qe[t[e+4]]+Qe[t[e+5]]+"-"+Qe[t[e+6]]+Qe[t[e+7]]+"-"+Qe[t[e+8]]+Qe[t[e+9]]+"-"+Qe[t[e+10]]+Qe[t[e+11]]+Qe[t[e+12]]+Qe[t[e+13]]+Qe[t[e+14]]+Qe[t[e+15]]}const zN=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),x_={randomUUID:zN};function jE(t,e,n){if(x_.randomUUID&&!e&&!t)return x_.randomUUID();t=t||{};const s=t.random||(t.rng||qN)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=s[i];return e}return HN(s)}var KN="firebase",GN="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St(KN,GN,"app");const ef=zm({apiKey:"AIzaSyD3_PR3stakqPCdQaVutT5fORlmXsMNPM0",authDomain:"quizzify-d3053.firebaseapp.com",projectId:"quizzify-d3053",storageBucket:"quizzify-d3053.appspot.com",messagingSenderId:"955132845389",appId:"1:955132845389:web:3346cc1457aeeaa97b2b04"});SE(ef);const vi=window.location.href.includes("localhost")?"_dev":"";function M_(t){return t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()}function qE(t){const e=t.split("/");return new Date(e[2],e[1]-1,e[0])}function Ei(){return new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()}function ra(t){const e=qE(t.reminder.answeredDate);return e.setDate(e.getDate()+t.reminder.remindDelay),e}const al="exact",ll="accent",cl="wrong";function ho(t){return String(t??"").normalize("NFC").trim().toLowerCase().replace(/\s+/g," ")}function L_(t){return ho(t).split("ñ").map(e=>e.normalize("NFD").replace(/\p{Mn}/gu,"")).join("ñ").replace(/[¿?¡!.,;:]/g,"").replace(/\s+/g," ").trim()}function QN(t,e){if(ho(t)===ho(e))return al;const n=L_(t);return n!==""&&n===L_(e)?ll:cl}function YN(t,e){const n=[e.es,...e.alt||[]];let s={status:cl,expected:e.es};for(const i of n){const r=QN(t,i);if(r===al)return{status:al,expected:i};r===ll&&s.status===cl&&(s={status:ll,expected:i})}return s}const XN={name:"SpecialCharsKeyboard",emits:["insert"],data(){return{specialChars:["ñ","á","é","í","ó","ú","ü","¿","¡"]}}},JN={class:"specialCharsZone"},ZN=["onClick"];function eD(t,e,n,s,i,r){return J(),re("div",JN,[(J(!0),re(Ye,null,ka(i.specialChars,o=>(J(),re("button",{key:o,type:"button",class:"specialCharButton",tabindex:"-1",onClick:a=>t.$emit("insert",o)},Me(o),9,ZN))),128))])}const HE=Kt(XN,[["render",eD],["__scopeId","data-v-a26ece02"]]);const tD={name:"QuestionVocab",components:{SpecialCharsKeyboard:HE},props:["word","dryrun"],watch:{word:{handler:function(t,e){t.id!==e.id&&this.updateCalendarLogoPath(t)},deep:!0}},data(){return{answer:"",answerStatus:"",validated:!1,headerColor:"",headerBackgroundColor:"",resultMessage:"",expected:"",otherAccepted:[],delayResult:"",hasBeenAnswered:!0,calendarLogoPath:"calendar.png"}},created(){this.updateCalendarLogoPath(this.word)},mounted(){this.focusInput()},methods:{onEnter(){this.validated?this.getNextQuestion():this.validate()},focusInput(){this.$nextTick(()=>{this.$refs.answerInput&&this.$refs.answerInput.focus()})},insertChar(t){const e=this.$refs.answerInput,n=e?e.selectionStart:this.answer.length,s=e?e.selectionEnd:this.answer.length;this.answer=this.answer.slice(0,n)+t+this.answer.slice(s),this.$nextTick(()=>{if(e){const i=n+t.length;e.focus(),e.setSelectionRange(i,i)}})},validate(){this.hasBeenAnswered=this.word.answered,this.validated=!0;const t=YN(this.answer,this.word),e=t.status!==cl;this.answerStatus=t.status,this.expected=t.expected,this.otherAccepted=[this.word.es,...this.word.alt||[]].filter(i=>ho(i)!==ho(t.expected)),t.status===al?(this.headerColor="#3c763d",this.headerBackgroundColor="#dff0d8",this.resultMessage="Correct"):t.status===ll?(this.headerColor="#AA6C00",this.headerBackgroundColor="#FFE5C1",this.resultMessage="Presque, attention aux accents"):(this.headerColor="#a94442",this.headerBackgroundColor="#f2dede",this.resultMessage="Faux"),e&&it().setValidated(this.word.id);let n=this.word.reminder===void 0?"New":this.word.reminder.remindDelay,s=n;if(!this.word.answered){const i=this.getReminderDelay(e),r=Ei();this.word.reminder===void 0&&!this.dryrun?(s=i,this.insertWordReminder(i,r)):this.word.reminder!==void 0&&r!==this.word.reminder.answeredDate&&!this.dryrun&&(s=i,this.updateWordReminder(i,r))}!this.word.answered&&!e&&it().setNbErrors(it().nbErrors+1),it().setAnswered(this.word.id),this.delayResult=`${n} => ${s}`,this.$nextTick(()=>{this.$refs.nextButton&&this.$refs.nextButton.focus()})},async reset(){await Mr(xr(wi,"WordReminder"+vi,this.word.reminder.id),{answeredDate:Ei(),firstAnsweredDate:Ei(),wordId:this.word.id,remindDelay:0}),it().setValidated(this.word.id),this.getNextQuestion()},getReminderDelay(t){if(this.word.reminder===void 0)return t?1:0;const e=[0,1,2,3,5,8,13,21,34,55],n=e.indexOf(this.word.reminder.remindDelay);return t?n===e.length-1?55:e[n+1]:n<=0?0:e[n-1]},getNextQuestion(){this.resetcss(),this.$emit("getNextQuestion"),this.updateCalendarLogoPath(this.word),this.focusInput()},updateCalendarLogoPath(t){this.calendarLogoPath=this.dryrun||t&&t.answered?"calendar_crossed.png":"calendar.png"},resetcss(){this.answer="",this.answerStatus="",this.validated=!1,this.headerColor="",this.headerBackgroundColor="",this.resultMessage="",this.expected="",this.otherAccepted=[],this.delayResult=""},async insertWordReminder(t,e){await Mr(xr(wi,"WordReminder"+vi,jE()),{answeredDate:e,firstAnsweredDate:e,wordId:this.word.id,remindDelay:t})},async updateWordReminder(t,e){await Mr(xr(wi,"WordReminder"+vi,this.word.reminder.id),{answeredDate:e,firstAnsweredDate:this.word.reminder.firstAnsweredDate,wordId:this.word.id,remindDelay:t})}}},nD=t=>(xl("data-v-68894767"),t=t(),Ml(),t),sD={class:"questionAsked"},iD={class:"questionText"},rD={class:"calendarDiv"},oD=["src"],aD={class:"answerZone"},lD=nD(()=>x("label",{class:"answerLabel",for:"answerInput"},"En espagnol :",-1)),cD=["disabled"],uD={key:0,class:"specialCharsZone"},hD={key:1,class:"resultPanel"},dD={class:"expectedAnswer"},fD={key:0,class:"otherAccepted"},pD={key:1,class:"delayResult"},_D={class:"buttonsPanel"};function gD(t,e,n,s,i,r){const o=tn("SpecialCharsKeyboard");return J(),re("div",{class:"questionPanel",onKeydown:e[4]||(e[4]=Iu(M0((...a)=>r.onEnter&&r.onEnter(...a),["prevent"]),["enter"]))},[x("div",sD,[x("div",{class:"questionHeader",style:Ur({color:i.headerColor,"background-color":i.headerBackgroundColor})},[x("span",iD,Me(n.word.fr),1),x("div",null,[x("div",rD,[x("img",{src:i.calendarLogoPath,class:"calendarLogo",style:{float:"right"}},null,8,oD)])])],4),x("div",aD,[lD,Pa(x("input",{id:"answerInput",ref:"answerInput",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",class:$i(["answerInput",i.answerStatus]),disabled:i.validated,"onUpdate:modelValue":e[0]||(e[0]=a=>i.answer=a)},null,10,cD),[[Tu,i.answer]])]),i.validated?vt("",!0):(J(),re("div",uD,[Le(o,{onInsert:r.insertChar},null,8,["onInsert"])])),i.validated?(J(),re("div",hD,[x("div",{class:"resultMessage",style:Ur({color:i.headerColor})},Me(i.resultMessage),5),x("div",dD,Me(i.expected),1),i.otherAccepted.length?(J(),re("div",fD," aussi accepté : "+Me(i.otherAccepted.join(", ")),1)):vt("",!0),i.delayResult?(J(),re("div",pD,"Délai : "+Me(i.delayResult),1)):vt("",!0)])):vt("",!0)]),x("div",_D,[i.validated?vt("",!0):(J(),re("button",{key:0,class:"button-4 actionButton",onClick:e[1]||(e[1]=(...a)=>r.validate&&r.validate(...a))},"OK")),!i.validated&&n.word.reminder!==void 0?(J(),re("button",{key:1,class:"button-4 actionButton",onClick:e[2]||(e[2]=(...a)=>r.reset&&r.reset(...a))},"Reset")):vt("",!0),i.validated?(J(),re("button",{key:2,ref:"nextButton",class:"button-4 actionButton",onClick:e[3]||(e[3]=(...a)=>r.getNextQuestion&&r.getNextQuestion(...a))},"Next",512)):vt("",!0)])],32)}const mD=Kt(tD,[["render",gD],["__scopeId","data-v-68894767"]]),gt=Dm({id:"globalVocab",state:()=>({words:[]}),actions:{addReminder(t,e){e.id=t;const n=this.words.find(s=>String(s.id)===String(e.wordId));n&&(n.reminder=e)},addWord(t,e){if(this.words.some(s=>s.id===t))return;const n={id:t,fr:e.fr,es:e.es};e.alt&&(n.alt=e.alt),this.words.push(n)}},getters:{}}),yD=[{id:1,fr:"la maison",es:"la casa"},{id:2,fr:"le chien",es:"el perro"},{id:3,fr:"la chanson",es:"la canción"},{id:4,fr:"la voiture",es:"el coche",alt:["el carro","el auto"]},{id:5,fr:"l'année",es:"el año"}],vD={name:"PartyMenuItem",props:["words","title","dryrun"],computed:{nbWords(){return this.words.length}}},ED={class:"partyMenuItem"},TD={class:"partyMenuItemPanel"},ID={class:"pmiTitle"},wD={class:"pmiDefinition"},AD={class:"pmiNbWords"},RD={style:{"font-weight":"bold"}},CD={key:0,class:"pmiActions"},SD=["src"];function bD(t,e,n,s,i,r){return J(),re("div",ED,[x("div",TD,[x("div",ID,Me(n.title)+" :",1),x("div",wD,[kw(t.$slots,"default")]),x("span",AD,[x("span",RD,Me(r.nbWords),1),di(" mots")])]),r.nbWords>0?(J(),re("div",CD,[x("img",{src:"play.png",onClick:e[0]||(e[0]=o=>t.$emit("play",n.words,n.dryrun)),class:"playButton"},null,8,SD)])):vt("",!0)])}const PD=Kt(vD,[["render",bD]]);function V_(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}const kD={name:"PartyMenuNewSeries",data(){return{nbWords:5}},computed:{nbWordsRemains(){return gt().words.filter(t=>t.reminder===void 0).length},hasAlreadyPlayed(){return it().hasAlreadyPlayed}},methods:{playNewSession(){let t=gt().words.filter(n=>n.reminder===void 0),e=V_(t.slice()).slice(0,this.nbWords);it().hasAlreadyPlayed=!0,it().setNewWords(e),this.$emit("play",e,!1)},replaySession(){this.$emit("play",it().newWords,!0)},testSession(){let t=gt().words.filter(n=>n.reminder===void 0),e=V_(t.slice()).slice(0,this.nbWords);this.$emit("play",e,!0)}}},ND={class:"partyMenuItem"},DD={class:"partyMenuItemPanel"},OD=x("div",{class:"pmiTitle"},"Nouvelle série :",-1),xD={class:"pmiDefinition"},MD=x("span",null,"Nb mots : ",-1),LD=x("option",null,"2",-1),VD=x("option",null,"5",-1),FD=x("option",null,"10",-1),UD=x("option",null,"20",-1),BD=[LD,VD,FD,UD],WD={class:"pmiNbWords"},$D={style:{"font-weight":"bold"}},jD={class:"pmiActions"},qD=["src"],HD=["src"],zD=x("rect",{x:"9",y:"2",width:"6",height:"2",fill:"#1F4972"},null,-1),KD=x("rect",{x:"10.5",y:"4",width:"3",height:"6",fill:"#1F4972"},null,-1),GD=x("path",{d:"M10.5 10 L6 19 A2 2 0 0 0 8 22 H16 A2 2 0 0 0 18 19 L13.5 10 Z",fill:"#1F4972"},null,-1),QD=[zD,KD,GD];function YD(t,e,n,s,i,r){return J(),re("div",ND,[x("div",DD,[OD,x("div",xD,[MD,Pa(x("select",{"onUpdate:modelValue":e[0]||(e[0]=o=>i.nbWords=o)},BD,512),[[D0,i.nbWords]])]),x("span",WD,[x("span",$D,Me(r.nbWordsRemains),1),di(" mots")])]),x("div",jD,[x("img",{onClick:e[1]||(e[1]=(...o)=>r.playNewSession&&r.playNewSession(...o)),src:"play.png",class:"playButton"},null,8,qD),r.hasAlreadyPlayed?(J(),re("img",{key:0,style:{"margin-top":"20px"},onClick:e[2]||(e[2]=(...o)=>r.replaySession&&r.replaySession(...o)),src:"replay.png",class:"playButton"},null,8,HD)):vt("",!0),(J(),re("svg",{onClick:e[3]||(e[3]=(...o)=>r.testSession&&r.testSession(...o)),style:{"margin-top":"20px"},class:"playButton",viewBox:"0 0 24 24",title:"Tester (aucune réponse n'est enregistrée)"},QD))])])}const XD=Kt(kD,[["render",YD]]);const JD={name:"AddWord",components:{SpecialCharsKeyboard:HE},data(){return{showForm:!1,fr:"",es:"",saving:!1,error:""}},methods:{open(){this.showForm=!0,this.$nextTick(()=>{this.$refs.frInput&&this.$refs.frInput.focus()})},cancel(){this.showForm=!1,this.fr="",this.es="",this.error=""},insertEsChar(t){const e=this.$refs.esInput,n=e?e.selectionStart:this.es.length,s=e?e.selectionEnd:this.es.length;this.es=this.es.slice(0,n)+t+this.es.slice(s),this.$nextTick(()=>{if(e){const i=n+t.length;e.focus(),e.setSelectionRange(i,i)}})},async save(){const t=this.fr.trim(),e=this.es.trim();if(!t||!e){this.error="Les deux champs sont obligatoires.";return}this.saving=!0;const n=jE();await Mr(xr(wi,"Vocab"+vi,n),{fr:t,es:e}),gt().addWord(n,{fr:t,es:e}),this.saving=!1,this.cancel()}}},tf=t=>(xl("data-v-1f7bb065"),t=t(),Ml(),t),ZD={class:"addWordPanel"},eO={key:1,class:"addWordForm"},tO=tf(()=>x("div",{class:"addWordTitle"},"Nouveau mot :",-1)),nO=tf(()=>x("label",{class:"addWordLabel",for:"addWordFr"},"Français",-1)),sO=tf(()=>x("label",{class:"addWordLabel",for:"addWordEs"},"Espagnol",-1)),iO={class:"specialCharsZone"},rO={key:0,class:"addWordError"},oO={class:"addWordActions"},aO=["disabled"];function lO(t,e,n,s,i,r){const o=tn("SpecialCharsKeyboard");return J(),re("div",ZD,[i.showForm?(J(),re("div",eO,[tO,nO,Pa(x("input",{id:"addWordFr",ref:"frInput","onUpdate:modelValue":e[1]||(e[1]=a=>i.fr=a),type:"text",autocomplete:"off",autocorrect:"off",spellcheck:"false",class:"addWordInput",onKeydown:e[2]||(e[2]=Iu((...a)=>r.save&&r.save(...a),["enter"]))},null,544),[[Tu,i.fr]]),sO,Pa(x("input",{id:"addWordEs",ref:"esInput","onUpdate:modelValue":e[3]||(e[3]=a=>i.es=a),type:"text",autocomplete:"off",autocorrect:"off",spellcheck:"false",class:"addWordInput",onKeydown:e[4]||(e[4]=Iu((...a)=>r.save&&r.save(...a),["enter"]))},null,544),[[Tu,i.es]]),x("div",iO,[Le(o,{onInsert:r.insertEsChar},null,8,["onInsert"])]),i.error?(J(),re("div",rO,Me(i.error),1)):vt("",!0),x("div",oO,[x("button",{type:"button",class:"addWordActionButton",onClick:e[5]||(e[5]=(...a)=>r.cancel&&r.cancel(...a))},"Annuler"),x("button",{type:"button",class:"addWordActionButton",disabled:i.saving,onClick:e[6]||(e[6]=(...a)=>r.save&&r.save(...a))},"Enregistrer",8,aO)])])):(J(),re("button",{key:0,type:"button",class:"addWordButton",onClick:e[0]||(e[0]=(...a)=>r.open&&r.open(...a)),"aria-label":"Ajouter un mot"},"+"))])}const cO=Kt(JD,[["render",lO],["__scopeId","data-v-1f7bb065"]]);const uO={name:"PartyMenu",components:{AddWord:cO,PartyMenuItem:PD,PartyMenuNewSeries:XD,QuestionVocab:mD},data(){return{word:{fr:"",es:""},playing:!1,dryrun:!1}},computed:{nbNonValidated(){return it().words.filter(t=>!t.validated).length},nbErrors(){return it().nbErrors},todayWords(){return gt().words.filter(t=>t.reminder&&t.reminder.answeredDate===Ei())},todayNewWords(){return gt().words.filter(t=>t.reminder&&t.reminder.firstAnsweredDate===Ei())},getRemindWordsCpt(){return this.getRemindWords()}},async created(){await this.loadWords(),this.loadReminder()},methods:{showmenu(){this.playing=!1},async loadWords(){const t=D_(wi,"Vocab"+vi);let e=await wa(t);e.empty&&(await this.seedInitialVocab(t),e=await wa(t)),e.forEach(n=>{gt().addWord(n.id,n.data())})},async seedInitialVocab(t){await Promise.all(yD.map(({id:e,...n})=>Mr(xr(t,String(e)),n)))},async loadReminder(){(await wa(D_(wi,"WordReminder"+vi))).forEach(e=>{gt().addReminder(e.id,e.data())})},getNextQuestion(){if(this.playing&&it().words.filter(t=>!t.validated).length===0)this.playing=!1,it().setNbErrors(0),this.loadReminder();else{let t=it().words.filter(n=>!n.validated),e=Math.floor(Math.random()*t.length);this.word=t[e]}},getRemindWords(){let t=gt().words.filter(e=>e.reminder&&e.reminder.answeredDate!==Ei());return t=t.filter(e=>{let n=qE(e.reminder.answeredDate);return n.setDate(n.getDate()+e.reminder.remindDelay),n<=new Date}),t},play(t,e){this.dryrun=e,t.forEach(function(n){n.answered=!1,n.validated=!1}),it().setWords(t),it().setNbErrors(0),this.playing=!0,this.getNextQuestion()}}},hO={key:0,class:"partyMenu"},dO={key:1},fO={class:"partyHeader"},pO={style:{float:"right"}};function _O(t,e,n,s,i,r){const o=tn("AddWord"),a=tn("PartyMenuItem"),l=tn("PartyMenuNewSeries"),c=tn("QuestionVocab");return J(),re(Ye,null,[i.playing?vt("",!0):(J(),re("div",hO,[Le(o),Le(a,{title:"Rappels",words:r.getRemindWordsCpt,dryrun:!1,onPlay:r.play},{default:fa(()=>[di("Mots à réviser aujourd'hui.")]),_:1},8,["words","onPlay"]),Le(a,{title:"Rejeux",words:r.todayWords,dryrun:!0,onPlay:r.play},{default:fa(()=>[di("Mots déjà révisés aujourd'hui.")]),_:1},8,["words","onPlay"]),Le(a,{title:"Nouveautés",words:r.todayNewWords,dryrun:!0,onPlay:r.play},{default:fa(()=>[di("Mots découverts aujourd'hui.")]),_:1},8,["words","onPlay"]),Le(l,{onPlay:r.play},null,8,["onPlay"])])),i.playing?(J(),re("div",dO,[x("div",fO,[x("span",null,"Reste : "+Me(r.nbNonValidated),1),x("span",pO,"Erreurs : "+Me(r.nbErrors),1)]),Le(c,{word:i.word,dryrun:i.dryrun,onGetNextQuestion:r.getNextQuestion,ref:"questionVocab"},null,8,["word","dryrun","onGetNextQuestion"])])):vt("",!0)],64)}const gO=Kt(uO,[["render",_O]]);const mO={name:"StatistiquesVocab",computed:{nbAnswered(){return gt().words.filter(t=>t.reminder!==void 0).length},nbTotal(){return gt().words.length},globalRepartition(){const t={};return gt().words.filter(e=>e.reminder).forEach(e=>{const n=e.reminder.remindDelay;t[n]===void 0?t[n]=1:t[n]++}),t},nextDaysRepartition(){const t=[];gt().words.filter(n=>n.reminder).forEach(n=>{const s=ra(n);t.includes(s.getTime())||t.push(s.getTime())}),t.sort((n,s)=>n-s);const e={};return t.forEach(n=>{gt().words.filter(s=>s.reminder!==void 0&&ra(s).getTime()===n).forEach(s=>{const i=M_(ra(s));e[i]===void 0?e[i]=1:e[i]++})}),e}},methods:{play(t){let e=gt().words.filter(n=>n.reminder!==void 0&&M_(ra(n))===t);this.$emit("forceplay",e)}}},zE=t=>(xl("data-v-901db848"),t=t(),Ml(),t),yO={class:"globalStats"},vO={class:"totalstats"},EO={class:"globalStatsTable"},TO=zE(()=>x("thead",null,[x("th",null,"Delais"),x("th",null,"Nombre")],-1)),IO={class:"nextDays"},wO=zE(()=>x("div",{class:"nextDaysTitle"},"Mots des prochains jours.",-1)),AO={class:"nextDaysStatsTable"},RO={class:"nextDayRow"},CO={class:"nextDayDiv"},SO={class:"nextDayDiv nexDayNb"},bO={class:"nextDayDiv"},PO=["src","onClick"];function kO(t,e,n,s,i,r){return J(),re(Ye,null,[x("div",yO,[x("div",vO,Me(r.nbAnswered)+" / "+Me(r.nbTotal)+" mots découverts. ",1),x("div",EO,[x("table",null,[TO,x("tbody",null,[(J(!0),re(Ye,null,ka(r.globalRepartition,(o,a)=>(J(),re("tr",null,[x("td",null,Me(a),1),x("td",null,Me(r.globalRepartition[a]),1)]))),256))])])])]),x("div",IO,[wO,x("div",AO,[(J(!0),re(Ye,null,ka(r.nextDaysRepartition,(o,a)=>(J(),re("div",RO,[x("span",CO,Me(a),1),x("span",SO,Me(r.nextDaysRepartition[a]),1),x("span",bO,[x("img",{src:"play.png",onClick:l=>r.play(a),class:"playButton"},null,8,PO)])]))),256))])])],64)}const NO=Kt(mO,[["render",kO],["__scopeId","data-v-901db848"]]);const DO={name:"Main",components:{StatistiquesVocab:NO,PartyMenu:gO,Menu:US},data(){return{displayWordParty:!0,displayStatistique:!1}},methods:{menuclicked(t){t==="play"?(this.displayWordParty=!0,this.displayStatistique=!1,this.$refs.partyMenu.loadReminder()):t==="statistiques"&&(this.$refs.partyMenu.showmenu(),this.displayWordParty=!1,this.displayStatistique=!0)},forceplay(t){this.$refs.menu.menuClicked("play"),this.$refs.partyMenu.play(t,!0)}}},OO={class:"mainPanel"};function xO(t,e,n,s,i,r){const o=tn("Menu"),a=tn("PartyMenu"),l=tn("StatistiquesVocab");return J(),re("div",OO,[Le(o,{ref:"menu",onMenuClicked:r.menuclicked},null,8,["onMenuClicked"]),x("div",{class:$i({hide:!i.displayWordParty}),style:{height:"100%"}},[Le(a,{ref:"partyMenu"},null,512)],2),i.displayStatistique?(J(),Ci(l,{key:0,onForceplay:r.forceplay},null,8,["onForceplay"])):vt("",!0)])}const MO=Kt(DO,[["render",xO]]);const LO={__name:"App",setup(t){const e=Yn(qa().currentUser),n=$h(()=>!!e.value);let s;return dm(()=>{s=dC(qa(),i=>{e.value=i})}),Lh(()=>s==null?void 0:s()),(i,r)=>n.value?(J(),Ci(MO,{key:0})):(J(),Ci(NS,{key:1}))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO=new Map,FO={activated:!1,tokenObservers:[]};function zt(t){return VO.get(t)||Object.assign({},FO)}const F_={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new zr,await BO(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new zr,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function BO(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},ul=new zi("appCheck","AppCheck",WO);function KE(t){if(!zt(t).activated)throw ul.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O="firebase-app-check-database",jO=1,sh="firebase-app-check-store";let oa=null;function qO(){return oa||(oa=new Promise((t,e)=>{try{const n=indexedDB.open($O,jO);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(ul.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(sh,{keyPath:"compositeKey"})}}}catch(n){e(ul.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),oa)}function HO(t,e){return zO(KO(t),e)}async function zO(t,e){const s=(await qO()).transaction(sh,"readwrite"),r=s.objectStore(sh).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(ul.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function KO(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=new go("@firebase/app-check");function U_(t,e){return $m()?HO(t,e).catch(n=>{ih.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO={error:"UNKNOWN_ERROR"};function QO(t){return Wl.encodeString(JSON.stringify(t),!1)}async function rh(t,e=!1){const n=t.app;KE(n);const s=zt(n);let i=s.token,r;if(i&&!Ir(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(Ir(l)?i=l:await U_(n,void 0))}if(!e&&i&&Ir(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await zt(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?ih.warn(l.message):ih.error(l),r=l}let a;return i?r?Ir(i)?a={token:i.token,internalError:r}:a=W_(r):(a={token:i.token},s.token=i,await U_(n,i)):a=W_(r),o&&ZO(n,a),a}async function YO(t){const e=t.app;KE(e);const{provider:n}=zt(e);{const{token:s}=await n.getToken();return{token:s}}}function XO(t,e,n,s){const{app:i}=t,r=zt(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Ir(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),B_(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>B_(t))}function GE(t,e){const n=zt(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function B_(t){const{app:e}=t,n=zt(e);let s=n.tokenRefresher;s||(s=JO(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function JO(t){const{app:e}=t;return new UO(async()=>{const n=zt(e);let s;if(n.token?s=await rh(t,!0):s=await rh(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=zt(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},F_.RETRIAL_MIN_WAIT,F_.RETRIAL_MAX_WAIT)}function ZO(t,e){const n=zt(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Ir(t){return t.expireTimeMillis-Date.now()>0}function W_(t){return{token:QO(GO),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=zt(this.app);for(const n of e)GE(this.app,n.next);return Promise.resolve()}}function t1(t,e){return new e1(t,e)}function n1(t){return{getToken:e=>rh(t,e),getLimitedUseToken:()=>YO(t),addTokenListener:e=>XO(t,"INTERNAL",e),removeTokenListener:e=>GE(t.app,e)}}const s1="@firebase/app-check",i1="0.8.0",r1="app-check",$_="app-check-internal";function o1(){fn(new qt(r1,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return t1(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider($_).initialize()})),fn(new qt($_,t=>{const e=t.getProvider("app-check").getImmediate();return n1(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),St(s1,i1)}o1();const QE=Symbol("firebaseApp");function nf(t){return Bh()&&bs(QE,null)||Kh(t)}const rn=()=>{};function sf(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function a1(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function Ks(t){return!!t&&typeof t=="object"}const l1=Object.prototype;function c1(t){return Ks(t)&&Object.getPrototypeOf(t)===l1}function rf(t){return Ks(t)&&t.type==="document"}function u1(t){return Ks(t)&&t.type==="collection"}function h1(t){return rf(t)||u1(t)}function d1(t){return Ks(t)&&t.type==="query"}function f1(t){return Ks(t)&&"ref"in t}function p1(t){return Ks(t)&&typeof t.bucket=="string"}function _1(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const g1=Symbol.for("v-scx");function m1(){return Bh(),!!bs(g1,0)}const aa=new WeakMap;function y1(t,e){if(!aa.has(t)){const n=Sl(!0);aa.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),aa.delete(t)}}return aa.get(t)}const j_="@firebase/database",q_="1.0.1";/**
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
 */let YE="";function v1(t){YE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Je(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Kr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Fn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new E1(e)}}catch{}return new T1},Cs=XE("localStorage"),oh=XE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new go("@firebase/database"),I1=function(){let t=1;return function(){return t++}}(),JE=function(t){const e=mA(t),n=new dA;n.update(e);const s=n.digest();return Wl.encodeByteArray(s)},Lo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Lo.apply(null,s):typeof s=="object"?e+=Je(s):e+=s,e+=" "}return e};let Ds=null,H_=!0;const w1=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ti.logLevel=te.VERBOSE,Ds=Ti.log.bind(Ti),e&&oh.set("logging_enabled",!0)):typeof t=="function"?Ds=t:(Ds=null,oh.remove("logging_enabled"))},ot=function(...t){if(H_===!0&&(H_=!1,Ds===null&&oh.get("logging_enabled")===!0&&w1(!0)),Ds){const e=Lo.apply(null,t);Ds(e)}},Vo=function(t){return function(...e){ot(t,...e)}},ah=function(...t){const e="FIREBASE INTERNAL ERROR: "+Lo(...t);Ti.error(e)},Us=function(...t){const e=`FIREBASE FATAL ERROR: ${Lo(...t)}`;throw Ti.error(e),new Error(e)},bt=function(...t){const e="FIREBASE WARNING: "+Lo(...t);Ti.warn(e)},A1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&bt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ZE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},R1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Bi="[MIN_NAME]",Bs="[MAX_NAME]",tr=function(t,e){if(t===e)return 0;if(t===Bi||e===Bs)return-1;if(e===Bi||t===Bs)return 1;{const n=z_(t),s=z_(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},C1=function(t,e){return t===e?0:t<e?-1:1},ur=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Je(e))},of=function(t){if(typeof t!="object"||t===null)return Je(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Je(e[s]),n+=":",n+=of(t[e[s]]);return n+="}",n},eT=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ot(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const tT=function(t){P(!ZE(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},S1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},b1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},P1=new RegExp("^-?(0*)\\d{1,10}$"),k1=-2147483648,N1=2147483647,z_=function(t){if(P1.test(t)){const e=Number(t);if(e>=k1&&e<=N1)return e}return null},Fo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw bt("Exception was thrown by user callback.",n),e},Math.floor(0))}},D1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Lr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class O1{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){bt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',bt(e)}}class lh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}lh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="5",nT="v",sT="s",iT="r",rT="f",oT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,aT="ls",lT="p",ch="ac",cT="websocket",uT="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Cs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Cs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function L1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function hT(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let s;if(e===cT)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===uT)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);L1(t)&&(n.ns=t.namespace);const i=[];return Ot(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(){this.counters_={}}incrementCounter(e,n=1){Fn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Y0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu={},tu={};function lf(t){const e=t.toString();return eu[e]||(eu[e]=new V1),eu[e]}function F1(t,e){const n=t.toString();return tu[n]||(tu[n]=e()),tu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Fo(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_="start",B1="close",W1="pLPCommand",$1="pRTLPCB",dT="id",fT="pw",pT="ser",j1="cb",q1="seg",H1="ts",z1="d",K1="dframe",_T=1870,gT=30,G1=_T-gT,Q1=25e3,Y1=3e4;class ai{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vo(e),this.stats_=lf(n),this.urlFn=l=>(this.appCheckToken&&(l[ch]=this.appCheckToken),hT(n,uT,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new U1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Y1)),R1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new cf((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===K_)this.id=a,this.password=l;else if(o===B1)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[K_]="t",s[pT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[j1]=this.scriptTagHolder.uniqueCallbackIdentifier),s[nT]=af,this.transportSessionId&&(s[sT]=this.transportSessionId),this.lastSessionId&&(s[aT]=this.lastSessionId),this.applicationId&&(s[lT]=this.applicationId),this.appCheckToken&&(s[ch]=this.appCheckToken),typeof location<"u"&&location.hostname&&oT.test(location.hostname)&&(s[iT]=rT);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ai.forceAllow_=!0}static forceDisallow(){ai.forceDisallow_=!0}static isAvailable(){return ai.forceAllow_?!0:!ai.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!S1()&&!b1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Mm(n),i=eT(s,G1);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[K1]="t",s[dT]=e,s[fT]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Je(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class cf{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=I1(),window[W1+this.uniqueCallbackIdentifier]=e,window[$1+this.uniqueCallbackIdentifier]=n,this.myIFrame=cf.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ot("frame writing exception"),a.stack&&ot(a.stack),ot(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ot("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[dT]=this.myID,e[fT]=this.myPW,e[pT]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gT+s.length<=_T;){const o=this.pendingSegs.shift();s=s+"&"+q1+i+"="+o.seg+"&"+H1+i+"="+o.ts+"&"+z1+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Q1)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=16384,J1=45e3;let hl=null;typeof MozWebSocket<"u"?hl=MozWebSocket:typeof WebSocket<"u"&&(hl=WebSocket);class Lt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vo(this.connId),this.stats_=lf(n),this.connURL=Lt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[nT]=af,typeof location<"u"&&location.hostname&&oT.test(location.hostname)&&(o[iT]=rT),n&&(o[sT]=n),s&&(o[aT]=s),i&&(o[ch]=i),r&&(o[lT]=r),hT(e,cT,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Cs.set("previous_websocket_failure",!0);try{let s;Wm(),this.mySock=new hl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Lt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&hl!==null&&!Lt.forceDisallow_}static previouslyFailed(){return Cs.isInMemoryStorage||Cs.get("previous_websocket_failure")===!0}markConnectionHealthy(){Cs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Kr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=eT(n,X1);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(J1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Lt.responsesRequiredToBeHealthy=2;Lt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ai,Lt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Lt&&Lt.isAvailable();let s=n&&!Lt.previouslyFailed();if(e.webSocketOnly&&(n||bt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Lt];else{const i=this.transports_=[];for(const r of fo.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);fo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=6e4,ex=5e3,tx=10*1024,nx=100*1024,nu="t",G_="d",sx="s",Q_="r",ix="e",Y_="o",X_="a",J_="n",Z_="p",rx="h";class ox{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vo("c:"+this.id+":"),this.transportManager_=new fo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Lr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>nx?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(nu in e){const n=e[nu];n===X_?this.upgradeIfSecondaryHealthy_():n===Q_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Y_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ur("t",e),s=ur("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Z_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:X_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:J_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ur("t",e),s=ur("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ur(nu,e);if(G_ in e){const s=e[G_];if(n===rx){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===J_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===sx?this.onConnectionShutdown_(s):n===Q_?this.onReset_(s):n===ix?ah("Server Error: "+s):n===Y_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ah("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),af!==s&&bt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Lr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Z1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Lr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ex))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Z_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Cs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl extends yT{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!qh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new dl}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=32,tg=768;class Se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ge(){return new Se("")}function oe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ls(t){return t.pieces_.length-t.pieceNum_}function Ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Se(t.pieces_,e)}function vT(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ax(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ET(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function TT(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Se(e,0)}function He(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Se)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Se(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function Dt(t,e){const n=oe(t),s=oe(e);if(n===null)return e;if(n===s)return Dt(Ae(t),Ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function IT(t,e){if(ls(t)!==ls(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ut(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(ls(t)>ls(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class lx{constructor(e,n){this.errorPrefix_=n,this.parts_=ET(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=$l(this.parts_[s]);wT(this)}}function cx(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=$l(e),wT(t)}function ux(t){const e=t.parts_.pop();t.byteLength_-=$l(e),t.parts_.length>0&&(t.byteLength_-=1)}function wT(t){if(t.byteLength_>tg)throw new Error(t.errorPrefix_+"has a key path longer than "+tg+" bytes ("+t.byteLength_+").");if(t.parts_.length>eg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+eg+") or object contains a cycle "+ms(t))}function ms(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf extends yT{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new uf}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=1e3,hx=60*5*1e3,ng=30*1e3,dx=1.3,fx=3e4,px="server_kill",sg=3;class Dn extends mT{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Dn.nextPersistentConnectionId_++,this.log_=Vo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=hr,this.maxReconnectDelay_=hx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Wm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");uf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&dl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Je(r)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new zr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Dn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Fn(e,"w")){const s=Pi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();bt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||hA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ng)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=uA(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Je(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ah("Unrecognized action received from server: "+Je(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=hr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=hr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>fx&&(this.reconnectDelay_=hr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*dx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Dn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ot("getToken() completed but was canceled"):(ot("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new ox(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{bt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(px)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&bt(h),l())}}}interrupt(e){ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ru(this.interruptReasons_)&&(this.reconnectDelay_=hr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>of(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Se(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ot("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=sg&&(this.reconnectDelay_=ng,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ot("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=sg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+YE.replace(/\./g,"-")]=1,qh()?e["framework.cordova"]=1:Bm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=dl.getInstance().currentlyOnline();return Ru(this.interruptReasons_)&&e}}Dn.nextPersistentConnectionId_=0;Dn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ae(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ae(Bi,e),i=new ae(Bi,n);return this.compare(s,i)!==0}minPost(){return ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let la;class AT extends Ic{static get __EMPTY_NODE(){return la}static set __EMPTY_NODE(e){la=e}compare(e,n){return tr(e.name,n.name)}isDefinedOn(e){throw Hi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ae.MIN}maxPost(){return new ae(Bs,la)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,la)}toString(){return".key"}}const Ii=new AT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class qe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??qe.RED,this.left=i??Et.EMPTY_NODE,this.right=r??Et.EMPTY_NODE}copy(e,n,s,i,r){return new qe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Et.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Et.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}qe.RED=!0;qe.BLACK=!1;class _x{copy(e,n,s,i,r){return this}insert(e,n,s){return new qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Et{constructor(e,n=Et.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Et(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,qe.BLACK,null,null))}remove(e){return new Et(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ca(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ca(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ca(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ca(this.root_,null,this.comparator_,!0,e)}}Et.EMPTY_NODE=new _x;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(t,e){return tr(t.name,e.name)}function hf(t,e){return tr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uh;function mx(t){uh=t}const RT=function(t){return typeof t=="number"?"number:"+tT(t):"string:"+t},CT=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Fn(e,".sv"),"Priority must be a string or number.")}else P(t===uh||t.isEmpty(),"priority of unexpected type.");P(t===uh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ig;class $e{constructor(e,n=$e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),CT(this.priorityNode_)}static set __childrenNodeConstructor(e){ig=e}static get __childrenNodeConstructor(){return ig}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:oe(e)===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:$e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=oe(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(P(s!==".priority"||ls(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,$e.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+RT(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=tT(this.value_):e+=this.value_,this.lazyHash_=JE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $e.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=$e.VALUE_TYPE_ORDER.indexOf(n),r=$e.VALUE_TYPE_ORDER.indexOf(s);return P(i>=0,"Unknown leaf type: "+n),P(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}$e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ST,bT;function yx(t){ST=t}function vx(t){bT=t}class Ex extends Ic{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?tr(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(Bs,new $e("[PRIORITY-POST]",bT))}makePost(e,n){const s=ST(e);return new ae(n,new $e("[PRIORITY-POST]",s))}toString(){return".priority"}}const ct=new Ex;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx=Math.log(2);class Ix{constructor(e){const n=r=>parseInt(Math.log(r)/Tx,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fl=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new qe(d,h.node,qe.BLACK,null,null);{const p=parseInt(u/2,10)+l,g=i(l,p),m=i(p+1,c);return h=t[p],d=n?n(h):h,new qe(d,h.node,qe.BLACK,g,m)}},r=function(l){let c=null,u=null,h=t.length;const d=function(g,m){const v=h-g,D=h;h-=g;const V=i(v+1,D),N=t[v],R=n?n(N):N;p(new qe(R,N.node,m,null,V))},p=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const m=l.nextBitIsOne(),v=Math.pow(2,l.count-(g+1));m?d(v,qe.BLACK):(d(v,qe.BLACK),d(v,qe.RED))}return u},o=new Ix(t.length),a=r(o);return new Et(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let su;const ni={};class bn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(ni&&ct,"ChildrenNode.ts has not been loaded"),su=su||new bn({".priority":ni},{".priority":ct}),su}get(e){const n=Pi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Et?n:null}hasIndex(e){return Fn(this.indexSet_,e.toString())}addIndex(e,n){P(e!==Ii,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ae.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=fl(s,e.getCompare()):a=ni;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new bn(u,c)}addToIndexes(e,n){const s=La(this.indexes_,(i,r)=>{const o=Pi(this.indexSet_,r);if(P(o,"Missing index implementation for "+r),i===ni)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ae.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),fl(a,o.getCompare())}else return ni;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ae(e.name,a))),l.insert(e,e.node)}});return new bn(s,this.indexSet_)}removeFromIndexes(e,n){const s=La(this.indexes_,i=>{if(i===ni)return i;{const r=n.get(e.name);return r?i.remove(new ae(e.name,r)):i}});return new bn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr;class he{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&CT(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return dr||(dr=new he(new Et(hf),null,bn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||dr}updatePriority(e){return this.children_.isEmpty()?this:new he(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?dr:n}}getChild(e){const n=oe(e);return n===null?this:this.getImmediateChild(n).getChild(Ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ae(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?dr:this.priorityNode_;return new he(i,o,r)}}updateChild(e,n){const s=oe(e);if(s===null)return n;{P(oe(e)!==".priority"||ls(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ae(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ct,(o,a)=>{n[o]=a.val(e),s++,r&&he.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+RT(this.getPriority().val())+":"),this.forEachChild(ct,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":JE(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ae(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ae(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ae.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Uo?-1:0}withIndex(e){if(e===Ii||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new he(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ii||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ct),i=n.getIterator(ct);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ii?null:this.indexMap_.get(e.toString())}}he.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class wx extends he{constructor(){super(new Et(hf),he.EMPTY_NODE,bn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return he.EMPTY_NODE}isEmpty(){return!1}}const Uo=new wx;Object.defineProperties(ae,{MIN:{value:new ae(Bi,he.EMPTY_NODE)},MAX:{value:new ae(Bs,Uo)}});AT.__EMPTY_NODE=he.EMPTY_NODE;$e.__childrenNodeConstructor=he;mx(Uo);vx(Uo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax=!0;function at(t,e=null){if(t===null)return he.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new $e(n,at(e))}if(!(t instanceof Array)&&Ax){const n=[];let s=!1;if(Ot(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=at(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ae(o,l)))}}),n.length===0)return he.EMPTY_NODE;const r=fl(n,gx,o=>o.name,hf);if(s){const o=fl(n,ct.getCompare());return new he(r,at(e),new bn({".priority":o},{".priority":ct}))}else return new he(r,at(e),bn.Default)}else{let n=he.EMPTY_NODE;return Ot(t,(s,i)=>{if(Fn(t,s)&&s.substring(0,1)!=="."){const r=at(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(at(e))}}yx(at);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx extends Ic{constructor(e){super(),this.indexPath_=e,P(!se(e)&&oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?tr(e.name,n.name):r}makePost(e,n){const s=at(e),i=he.EMPTY_NODE.updateChild(this.indexPath_,s);return new ae(n,i)}maxPost(){const e=he.EMPTY_NODE.updateChild(this.indexPath_,Uo);return new ae(Bs,e)}toString(){return ET(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx extends Ic{compare(e,n){const s=e.node.compareTo(n.node);return s===0?tr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,n){const s=at(e);return new ae(n,s)}toString(){return".value"}}const Sx=new Cx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bx(t){return{type:"value",snapshotNode:t}}function Px(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function kx(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function rg(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Nx(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ct}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Bi}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Bs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ct}copy(){const e=new df;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function og(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ct?n="$priority":t.index_===Sx?n="$value":t.index_===Ii?n="$key":(P(t.index_ instanceof Rx,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Je(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Je(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Je(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Je(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Je(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ag(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ct&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends mT{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Vo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=pl.getListenId_(e,s),a={};this.listens_[o]=a;const l=og(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Pi(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=pl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=og(e._queryParams),s=e._path.toString(),i=new zr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ki(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Kr(a.responseText)}catch{bt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&bt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(){this.rootNode_=he.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(){return{value:null,children:new Map}}function PT(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=oe(e);t.children.has(s)||t.children.set(s,_l());const i=t.children.get(s);e=Ae(e),PT(i,e,n)}}function hh(t,e,n){t.value!==null?n(e,t.value):Ox(t,(s,i)=>{const r=new Se(e.toString()+"/"+s);hh(i,r,n)})}function Ox(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ot(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=10*1e3,Mx=30*1e3,Lx=5*60*1e3;class Vx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new xx(e);const s=lg+(Mx-lg)*Math.random();Lr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ot(e,(i,r)=>{r>0&&Fn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Lr(this.reportStats_.bind(this),Math.floor(Math.random()*2*Lx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var on;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(on||(on={}));function kT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function NT(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function DT(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=on.ACK_USER_WRITE,this.source=kT()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Se(e));return new gl(ge(),n,this.revert)}}else return P(oe(this.path)===e,"operationForChild called for unrelated child."),new gl(Ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=on.OVERWRITE}operationForChild(e){return se(this.path)?new Ws(this.source,ge(),this.snap.getImmediateChild(e)):new Ws(this.source,Ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=on.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new Se(e));return n.isEmpty()?null:n.value?new Ws(this.source,ge(),n.value):new po(this.source,ge(),n)}else return P(oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new po(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=oe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Fx(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Nx(o.childName,o.snapshotNode))}),fr(t,i,"child_removed",e,s,n),fr(t,i,"child_added",e,s,n),fr(t,i,"child_moved",r,s,n),fr(t,i,"child_changed",e,s,n),fr(t,i,"value",e,s,n),i}function fr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Bx(t,a,l)),o.forEach(a=>{const l=Ux(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Ux(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Bx(t,e,n){if(e.childName==null||n.childName==null)throw Hi("Should only compare child_ events.");const s=new ae(e.childName,e.snapshotNode),i=new ae(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(t,e){return{eventCache:t,serverCache:e}}function Vr(t,e,n,s){return OT(new ff(e,n,s),t.serverCache)}function xT(t,e,n,s){return OT(t.eventCache,new ff(e,n,s))}function dh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function $s(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iu;const Wx=()=>(iu||(iu=new Et(C1)),iu);class Ie{constructor(e,n=Wx()){this.value=e,this.children=n}static fromObject(e){let n=new Ie(null);return Ot(e,(s,i)=>{n=n.set(new Se(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ge(),value:this.value};if(se(e))return null;{const s=oe(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ae(e),n);return r!=null?{path:He(new Se(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=oe(e),s=this.children.get(n);return s!==null?s.subtree(Ae(e)):new Ie(null)}}set(e,n){if(se(e))return new Ie(n,this.children);{const s=oe(e),r=(this.children.get(s)||new Ie(null)).set(Ae(e),n),o=this.children.insert(s,r);return new Ie(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const n=oe(e),s=this.children.get(n);if(s){const i=s.remove(Ae(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ie(null):new Ie(this.value,r)}else return this}}get(e){if(se(e))return this.value;{const n=oe(e),s=this.children.get(n);return s?s.get(Ae(e)):null}}setTree(e,n){if(se(e))return n;{const s=oe(e),r=(this.children.get(s)||new Ie(null)).setTree(Ae(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ie(this.value,o)}}fold(e){return this.fold_(ge(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(He(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ge(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(se(e))return null;{const r=oe(e),o=this.children.get(r);return o?o.findOnPath_(Ae(e),He(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ge(),n)}foreachOnPath_(e,n,s){if(se(e))return this;{this.value&&s(n,this.value);const i=oe(e),r=this.children.get(i);return r?r.foreachOnPath_(Ae(e),He(n,i),s):new Ie(null)}}foreach(e){this.foreach_(ge(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(He(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.writeTree_=e}static empty(){return new jt(new Ie(null))}}function Fr(t,e,n){if(se(e))return new jt(new Ie(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Dt(i,e);return r=r.updateChild(o,n),new jt(t.writeTree_.set(i,r))}else{const i=new Ie(n),r=t.writeTree_.setTree(e,i);return new jt(r)}}}function cg(t,e,n){let s=t;return Ot(n,(i,r)=>{s=Fr(s,He(e,i),r)}),s}function ug(t,e){if(se(e))return jt.empty();{const n=t.writeTree_.setTree(e,new Ie(null));return new jt(n)}}function fh(t,e){return Gs(t,e)!=null}function Gs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Dt(n.path,e)):null}function hg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ct,(s,i)=>{e.push(new ae(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ae(s,i.value))}),e}function ns(t,e){if(se(e))return t;{const n=Gs(t,e);return n!=null?new jt(new Ie(n)):new jt(t.writeTree_.subtree(e))}}function ph(t){return t.writeTree_.isEmpty()}function Wi(t,e){return MT(ge(),t.writeTree_,e)}function MT(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(P(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=MT(He(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(He(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(t,e){return WT(e,t)}function $x(t,e,n,s,i){P(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Fr(t.visibleWrites,e,n)),t.lastWriteId=s}function jx(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function qx(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Hx(a,s.path)?i=!1:Ut(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return zx(t),!0;if(s.snap)t.visibleWrites=ug(t.visibleWrites,s.path);else{const a=s.children;Ot(a,l=>{t.visibleWrites=ug(t.visibleWrites,He(s.path,l))})}return!0}else return!1}function Hx(t,e){if(t.snap)return Ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ut(He(t.path,n),e))return!0;return!1}function zx(t){t.visibleWrites=VT(t.allWrites,Kx,ge()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Kx(t){return t.visible}function VT(t,e,n){let s=jt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Ut(n,o)?(a=Dt(n,o),s=Fr(s,a,r.snap)):Ut(o,n)&&(a=Dt(o,n),s=Fr(s,ge(),r.snap.getChild(a)));else if(r.children){if(Ut(n,o))a=Dt(n,o),s=cg(s,a,r.children);else if(Ut(o,n))if(a=Dt(o,n),se(a))s=cg(s,ge(),r.children);else{const l=Pi(r.children,oe(a));if(l){const c=l.getChild(Ae(a));s=Fr(s,ge(),c)}}}else throw Hi("WriteRecord should have .snap or .children")}}return s}function FT(t,e,n,s,i){if(!s&&!i){const r=Gs(t.visibleWrites,e);if(r!=null)return r;{const o=ns(t.visibleWrites,e);if(ph(o))return n;if(n==null&&!fh(o,ge()))return null;{const a=n||he.EMPTY_NODE;return Wi(o,a)}}}else{const r=ns(t.visibleWrites,e);if(!i&&ph(r))return n;if(!i&&n==null&&!fh(r,ge()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ut(c.path,e)||Ut(e,c.path))},a=VT(t.allWrites,o,e),l=n||he.EMPTY_NODE;return Wi(a,l)}}}function Gx(t,e,n){let s=he.EMPTY_NODE;const i=Gs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ct,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=ns(t.visibleWrites,e);return n.forEachChild(ct,(o,a)=>{const l=Wi(ns(r,new Se(o)),a);s=s.updateImmediateChild(o,l)}),hg(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ns(t.visibleWrites,e);return hg(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Qx(t,e,n,s,i){P(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=He(e,n);if(fh(t.visibleWrites,r))return null;{const o=ns(t.visibleWrites,r);return ph(o)?i.getChild(n):Wi(o,i.getChild(n))}}function Yx(t,e,n,s){const i=He(e,n),r=Gs(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=ns(t.visibleWrites,i);return Wi(o,s.getNode().getImmediateChild(n))}else return null}function Xx(t,e){return Gs(t.visibleWrites,e)}function Jx(t,e,n,s,i,r,o){let a;const l=ns(t.visibleWrites,e),c=Gs(l,ge());if(c!=null)a=c;else if(n!=null)a=Wi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function Zx(){return{visibleWrites:jt.empty(),allWrites:[],lastWriteId:-1}}function _h(t,e,n,s){return FT(t.writeTree,t.treePath,e,n,s)}function UT(t,e){return Gx(t.writeTree,t.treePath,e)}function dg(t,e,n,s){return Qx(t.writeTree,t.treePath,e,n,s)}function ml(t,e){return Xx(t.writeTree,He(t.treePath,e))}function eM(t,e,n,s,i,r){return Jx(t.writeTree,t.treePath,e,n,s,i,r)}function pf(t,e,n){return Yx(t.writeTree,t.treePath,e,n)}function BT(t,e){return WT(He(t.treePath,e),t.writeTree)}function WT(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,rg(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,kx(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Px(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,rg(s,e.snapshotNode,i.oldSnap));else throw Hi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const $T=new nM;class _f{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ff(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pf(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$s(this.viewCache_),r=eM(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function sM(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function iM(t,e,n,s,i){const r=new tM;let o,a;if(n.type===on.OVERWRITE){const c=n;c.source.fromUser?o=gh(t,e,c.path,c.snap,s,i,r):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!se(c.path),o=yl(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===on.MERGE){const c=n;c.source.fromUser?o=oM(t,e,c.path,c.children,s,i,r):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=mh(t,e,c.path,c.children,s,i,a,r))}else if(n.type===on.ACK_USER_WRITE){const c=n;c.revert?o=cM(t,e,c.path,s,i,r):o=aM(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===on.LISTEN_COMPLETE)o=lM(t,e,n.path,s,r);else throw Hi("Unknown operation type: "+n.type);const l=r.getChanges();return rM(e,o,l),{viewCache:o,changes:l}}function rM(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=dh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(bx(dh(e)))}}function jT(t,e,n,s,i,r){const o=e.eventCache;if(ml(s,n)!=null)return e;{let a,l;if(se(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=$s(e),u=c instanceof he?c:he.EMPTY_NODE,h=UT(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=_h(s,$s(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=oe(n);if(c===".priority"){P(ls(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=dg(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ae(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=dg(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=pf(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Vr(e,a,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function yl(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(se(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=oe(n);if(!l.isCompleteForPath(n)&&ls(n)>1)return e;const g=Ae(n),v=l.getNode().getImmediateChild(p).updateChild(g,s);p===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),p,v,g,$T,null)}const h=xT(e,c,l.isFullyInitialized()||se(n),u.filtersNodes()),d=new _f(i,h,r);return jT(t,h,n,i,d,a)}function gh(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new _f(i,e,r);if(se(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Vr(e,c,!0,t.filter.filtersNodes());else{const h=oe(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Vr(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Ae(n),p=a.getNode().getImmediateChild(h);let g;if(se(d))g=s;else{const m=u.getCompleteChild(h);m!=null?vT(d)===".priority"&&m.getChild(TT(d)).isEmpty()?g=m:g=m.updateChild(d,s):g=he.EMPTY_NODE}if(p.equals(g))l=e;else{const m=t.filter.updateChild(a.getNode(),h,g,d,u,o);l=Vr(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function fg(t,e){return t.eventCache.isCompleteForChild(e)}function oM(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=He(n,l);fg(e,oe(u))&&(a=gh(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=He(n,l);fg(e,oe(u))||(a=gh(t,a,u,c,i,r,o))}),a}function pg(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function mh(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;se(n)?c=s:c=new Ie(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),g=pg(t,p,d);l=yl(t,l,new Se(h),g,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const g=e.serverCache.getNode().getImmediateChild(h),m=pg(t,g,d);l=yl(t,l,new Se(h),m,i,r,o,a)}}),l}function aM(t,e,n,s,i,r,o){if(ml(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(se(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return yl(t,e,n,l.getNode().getChild(n),i,r,a,o);if(se(n)){let c=new Ie(null);return l.getNode().forEachChild(Ii,(u,h)=>{c=c.set(new Se(u),h)}),mh(t,e,n,c,i,r,a,o)}else return e}else{let c=new Ie(null);return s.foreach((u,h)=>{const d=He(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),mh(t,e,n,c,i,r,a,o)}}function lM(t,e,n,s,i){const r=e.serverCache,o=xT(e,r.getNode(),r.isFullyInitialized()||se(n),r.isFiltered());return jT(t,o,n,s,$T,i)}function cM(t,e,n,s,i,r){let o;if(ml(s,n)!=null)return e;{const a=new _f(s,e,i),l=e.eventCache.getNode();let c;if(se(n)||oe(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=_h(s,$s(e));else{const h=e.serverCache.getNode();P(h instanceof he,"serverChildren would be complete if leaf node"),u=UT(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=oe(n);let h=pf(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ae(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,he.EMPTY_NODE,Ae(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=_h(s,$s(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ml(s,ge())!=null,Vr(e,c,o,t.filter.filtersNodes())}}function uM(t,e){const n=$s(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(oe(e)).isEmpty())?n.getChild(e):null}function _g(t,e,n,s){e.type===on.MERGE&&e.source.queryId!==null&&(P($s(t.viewCache_),"We should always have a full cache before handling merges"),P(dh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=iM(t.processor_,i,e,n,s);return sM(t.processor_,r.viewCache),P(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,hM(t,r.changes,r.viewCache.eventCache.getNode(),null)}function hM(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Fx(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gg;function dM(t){P(!gg,"__referenceConstructor has already been defined"),gg=t}function gf(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return P(r!=null,"SyncTree gave us an op for an invalid query."),_g(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(_g(o,e,n,s));return r}}function mf(t,e){let n=null;for(const s of t.views.values())n=n||uM(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mg;function fM(t){P(!mg,"__referenceConstructor has already been defined"),mg=t}class yg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=Zx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function pM(t,e,n,s,i){return $x(t.pendingWriteTree_,e,n,s,i),i?Ac(t,new Ws(kT(),e,n)):[]}function li(t,e,n=!1){const s=jx(t.pendingWriteTree_,e);if(qx(t.pendingWriteTree_,e)){let r=new Ie(null);return s.snap!=null?r=r.set(ge(),!0):Ot(s.children,o=>{r=r.set(new Se(o),!0)}),Ac(t,new gl(s.path,r,n))}else return[]}function wc(t,e,n){return Ac(t,new Ws(NT(),e,n))}function _M(t,e,n){const s=Ie.fromObject(n);return Ac(t,new po(NT(),e,s))}function gM(t,e,n,s){const i=KT(t,s);if(i!=null){const r=GT(i),o=r.path,a=r.queryId,l=Dt(o,e),c=new Ws(DT(a),l,n);return QT(t,o,c)}else return[]}function mM(t,e,n,s){const i=KT(t,s);if(i){const r=GT(i),o=r.path,a=r.queryId,l=Dt(o,e),c=Ie.fromObject(n),u=new po(DT(a),l,c);return QT(t,o,u)}else return[]}function qT(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Dt(o,e),c=mf(a,l);if(c)return c});return FT(i,e,r,n,!0)}function Ac(t,e){return HT(e,t.syncPointTree_,null,LT(t.pendingWriteTree_,ge()))}function HT(t,e,n,s){if(se(t.path))return zT(t,e,n,s);{const i=e.get(ge());n==null&&i!=null&&(n=mf(i,ge()));let r=[];const o=oe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=BT(s,o);r=r.concat(HT(a,l,c,u))}return i&&(r=r.concat(gf(i,t,s,n))),r}}function zT(t,e,n,s){const i=e.get(ge());n==null&&i!=null&&(n=mf(i,ge()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=BT(s,o),u=t.operationForChild(o);u&&(r=r.concat(zT(u,a,l,c)))}),i&&(r=r.concat(gf(i,t,s,n))),r}function KT(t,e){return t.tagToQueryMap.get(e)}function GT(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Se(t.substr(0,e))}}function QT(t,e,n){const s=t.syncPointTree_.get(e);P(s,"Missing sync point for query tag that we're tracking");const i=LT(t.pendingWriteTree_,e);return gf(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new yf(n)}node(){return this.node_}}class vf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=He(this.path_,e);return new vf(this.syncTree_,n)}node(){return qT(this.syncTree_,this.path_)}}const yM=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},vg=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return vM(t[".sv"],e,n);if(typeof t[".sv"]=="object")return EM(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},vM=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},EM=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&P(!1,"Unexpected increment value: "+s);const i=e.node();if(P(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},TM=function(t,e,n,s){return Ef(e,new vf(n,t),s)},IM=function(t,e,n){return Ef(t,new yf(e),n)};function Ef(t,e,n){const s=t.getPriority().val(),i=vg(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=vg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new $e(a,at(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new $e(i))),o.forEachChild(ct,(a,l)=>{const c=Ef(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function If(t,e){let n=e instanceof Se?e:new Se(e),s=t,i=oe(n);for(;i!==null;){const r=Pi(s.node.children,i)||{children:{},childCount:0};s=new Tf(i,s,r),n=Ae(n),i=oe(n)}return s}function nr(t){return t.node.value}function YT(t,e){t.node.value=e,yh(t)}function XT(t){return t.node.childCount>0}function wM(t){return nr(t)===void 0&&!XT(t)}function Rc(t,e){Ot(t.node.children,(n,s)=>{e(new Tf(n,t,s))})}function JT(t,e,n,s){n&&!s&&e(t),Rc(t,i=>{JT(i,e,!0,s)}),n&&s&&e(t)}function AM(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Bo(t){return new Se(t.parent===null?t.name:Bo(t.parent)+"/"+t.name)}function yh(t){t.parent!==null&&RM(t.parent,t.name,t)}function RM(t,e,n){const s=wM(n),i=Fn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,yh(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,yh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CM=/[\[\].#$\/\u0000-\u001F\u007F]/,SM=/[\[\].#$\u0000-\u001F\u007F]/,ru=10*1024*1024,ZT=function(t){return typeof t=="string"&&t.length!==0&&!CM.test(t)},bM=function(t){return typeof t=="string"&&t.length!==0&&!SM.test(t)},PM=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),bM(t)},eI=function(t,e,n){const s=n instanceof Se?new lx(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ms(s));if(typeof e=="function")throw new Error(t+"contains a function "+ms(s)+" with contents = "+e.toString());if(ZE(e))throw new Error(t+"contains "+e.toString()+" "+ms(s));if(typeof e=="string"&&e.length>ru/3&&$l(e)>ru)throw new Error(t+"contains a string greater than "+ru+" utf8 bytes "+ms(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ot(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ZT(o)))throw new Error(t+" contains an invalid key ("+o+") "+ms(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);cx(s,o),eI(t,a,s),ux(s)}),i&&r)throw new Error(t+' contains ".value" child '+ms(s)+" in addition to actual children.")}},kM=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ZT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!PM(n))throw new Error(gA(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function DM(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!IT(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Qs(t,e,n){DM(t,n),OM(t,s=>Ut(s,e)||Ut(e,s))}function OM(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(xM(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function xM(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ds&&ot("event: "+n.toString()),Fo(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM="repo_interrupt",LM=25;class VM{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new NM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_l(),this.transactionQueueTree_=new Tf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function FM(t,e,n){if(t.stats_=lf(t.repoInfo_),t.forceRestClient_||D1())t.server_=new pl(t.repoInfo_,(s,i,r,o)=>{Eg(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Tg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Je(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Dn(t.repoInfo_,e,(s,i,r,o)=>{Eg(t,s,i,r,o)},s=>{Tg(t,s)},s=>{BM(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=F1(t.repoInfo_,()=>new Vx(t.stats_,t.server_)),t.infoData_=new Dx,t.infoSyncTree_=new yg({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=wc(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),wf(t,"connected",!1),t.serverSyncTree_=new yg({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Qs(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function UM(t){const n=t.infoData_.getNode(new Se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function tI(t){return yM({timestamp:UM(t)})}function Eg(t,e,n,s,i){t.dataUpdateCount++;const r=new Se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=La(n,c=>at(c));o=mM(t.serverSyncTree_,r,l,i)}else{const l=at(n);o=gM(t.serverSyncTree_,r,l,i)}else if(s){const l=La(n,c=>at(c));o=_M(t.serverSyncTree_,r,l)}else{const l=at(n);o=wc(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Rf(t,r)),Qs(t.eventQueue_,a,o)}function Tg(t,e){wf(t,"connected",e),e===!1&&$M(t)}function BM(t,e){Ot(e,(n,s)=>{wf(t,n,s)})}function wf(t,e,n){const s=new Se("/.info/"+e),i=at(n);t.infoData_.updateSnapshot(s,i);const r=wc(t.infoSyncTree_,s,i);Qs(t.eventQueue_,s,r)}function WM(t){return t.nextWriteId_++}function $M(t){nI(t,"onDisconnectEvents");const e=tI(t),n=_l();hh(t.onDisconnect_,ge(),(i,r)=>{const o=TM(i,r,t.serverSyncTree_,e);PT(n,i,o)});let s=[];hh(n,ge(),(i,r)=>{s=s.concat(wc(t.serverSyncTree_,i,r));const o=zM(t,i);Rf(t,o)}),t.onDisconnect_=_l(),Qs(t.eventQueue_,ge(),s)}function jM(t){t.persistentConnection_&&t.persistentConnection_.interrupt(MM)}function nI(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ot(n,...e)}function sI(t,e,n){return qT(t.serverSyncTree_,e,n)||he.EMPTY_NODE}function Af(t,e=t.transactionQueueTree_){if(e||Cc(t,e),nr(e)){const n=rI(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&qM(t,Bo(e),n)}else XT(e)&&Rc(e,n=>{Af(t,n)})}function qM(t,e,n){const s=n.map(c=>c.currentWriteId),i=sI(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];P(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Dt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{nI(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(li(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Cc(t,If(t.transactionQueueTree_,e)),Af(t,t.transactionQueueTree_),Qs(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Fo(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{bt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Rf(t,e)}},o)}function Rf(t,e){const n=iI(t,e),s=Bo(n),i=rI(t,n);return HM(t,i,s),s}function HM(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Dt(n,l.path);let u=!1,h;if(P(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(li(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=LM)u=!0,h="maxretry",i=i.concat(li(t.serverSyncTree_,l.currentWriteId,!0));else{const d=sI(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){eI("transaction failed: Data returned ",p,l.path);let g=at(p);typeof p=="object"&&p!=null&&Fn(p,".priority")||(g=g.updatePriority(d.getPriority()));const v=l.currentWriteId,D=tI(t),V=IM(g,d,D);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=V,l.currentWriteId=WM(t),o.splice(o.indexOf(v),1),i=i.concat(pM(t.serverSyncTree_,l.path,V,l.currentWriteId,l.applyLocally)),i=i.concat(li(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",i=i.concat(li(t.serverSyncTree_,l.currentWriteId,!0))}Qs(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Cc(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Fo(s[a]);Af(t,t.transactionQueueTree_)}function iI(t,e){let n,s=t.transactionQueueTree_;for(n=oe(e);n!==null&&nr(s)===void 0;)s=If(s,n),e=Ae(e),n=oe(e);return s}function rI(t,e){const n=[];return oI(t,e,n),n.sort((s,i)=>s.order-i.order),n}function oI(t,e,n){const s=nr(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Rc(e,i=>{oI(t,i,n)})}function Cc(t,e){const n=nr(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,YT(e,n.length>0?n:void 0)}Rc(e,s=>{Cc(t,s)})}function zM(t,e){const n=Bo(iI(t,e)),s=If(t.transactionQueueTree_,e);return AM(s,i=>{ou(t,i)}),ou(t,s),JT(s,i=>{ou(t,i)}),n}function ou(t,e){const n=nr(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(li(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?YT(e,void 0):n.length=r+1,Qs(t.eventQueue_,Bo(e),i);for(let o=0;o<s.length;o++)Fo(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KM(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function GM(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):bt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ig=function(t,e){const n=QM(t),s=n.namespace;n.domain==="firebase.com"&&Us(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Us("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||A1();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new M1(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Se(n.pathString)}},QM=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=KM(t.substring(u,h)));const d=GM(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return se(this._path)?null:vT(this._path)}get ref(){return new sr(this._repo,this._path)}get _queryIdentifier(){const e=ag(this._queryParams),n=of(e);return n==="{}"?"default":n}get _queryObject(){return ag(this._queryParams)}isEqual(e){if(e=wt(e),!(e instanceof Cf))return!1;const n=this._repo===e._repo,s=IT(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ax(this._path)}}class sr extends Cf{constructor(e,n){super(e,n,new df,!1)}get parent(){const e=TT(this._path);return e===null?null:new sr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}dM(sr);fM(sr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM="FIREBASE_DATABASE_EMULATOR_HOST",vh={};let XM=!1;function JM(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Us("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ot("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ig(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[YM]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Ig(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new lh(lh.OWNER):new x1(t.name,t.options,e);kM("Invalid Firebase Database URL",o),se(o.path)||Us("Database URL must point to the root of a Firebase Database (not including a child path).");const h=eL(a,t,u,new O1(t.name,n));return new tL(h,t)}function ZM(t,e){const n=vh[e];(!n||n[t.key]!==t)&&Us(`Database ${e}(${t.repoInfo_}) has already been deleted.`),jM(t),delete n[t.key]}function eL(t,e,n,s){let i=vh[e.name];i||(i={},vh[e.name]=i);let r=i[t.toURLString()];return r&&Us("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new VM(t,XM,n,s),i[t.toURLString()]=r,r}class tL{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(FM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new sr(this._repo,ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ZM(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Us("Cannot call "+e+" on a deleted database.")}}/**
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
 */function nL(t){v1(cs),fn(new qt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return JM(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),St(j_,q_,t),St(j_,q_,"esm2017")}Dn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Dn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};nL();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="firebasestorage.googleapis.com",sL="storageBucket",iL=2*60*1e3,rL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends yn{constructor(e,n,s=0){super(au(e),`Firebase Storage: ${n} (${au(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,vn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return au(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var mn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(mn||(mn={}));function au(t){return"storage/"+t}function oL(){const t="An unknown error occurred, please check the error payload for server response.";return new vn(mn.UNKNOWN,t)}function aL(){return new vn(mn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function lL(){return new vn(mn.CANCELED,"User canceled the upload/download.")}function cL(t){return new vn(mn.INVALID_URL,"Invalid URL '"+t+"'.")}function uL(t){return new vn(mn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function wg(t){return new vn(mn.INVALID_ARGUMENT,t)}function lI(){return new vn(mn.APP_DELETED,"The Firebase app was deleted.")}function hL(t){return new vn(mn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Bt.makeFromUrl(e,n)}catch{return new Bt(e,"")}if(s.path==="")return s;throw uL(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(R){R.path_=decodeURIComponent(R.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},m=n===aI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",D=new RegExp(`^https?://${m}/${i}/${v}`,"i"),N=[{regex:a,indices:l,postModify:r},{regex:p,indices:g,postModify:c},{regex:D,indices:{bucket:1,path:2},postModify:c}];for(let R=0;R<N.length;R++){const G=N[R],de=G.regex.exec(e);if(de){const me=de[G.indices.bucket];let j=de[G.indices.path];j||(j=""),s=new Bt(me,j),G.postModify(s);break}}if(s==null)throw cL(e);return s}}class dL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fL(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(p,l())},v)}function d(){r&&clearTimeout(r)}function p(v,...D){if(c){d();return}if(v){d(),u.call(null,v,...D);return}if(l()||o){d(),u.call(null,v,...D);return}s<64&&(s*=2);let N;a===1?(a=2,N=0):N=(s+Math.random())*1e3,h(N)}let g=!1;function m(v){g||(g=!0,d(),!c&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,m(!0)},n),m}function pL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _L(t){return t!==void 0}function Ag(t,e,n,s){if(s<e)throw wg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw wg(`Invalid value for '${t}'. Expected ${n} or less.`)}function gL(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(vl||(vl={}));/**
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
 */function mL(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ua(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===vl.NO_ERROR,l=r.getStatus();if(!a||mL(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===vl.ABORT;s(!1,new ua(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new ua(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());_L(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=oL();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?lI():lL();o(l)}else{const l=aL();o(l)}};this.canceled_?n(!1,new ua(!1,null,!0)):this.backoffId_=fL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&pL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ua{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function vL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function EL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function TL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function IL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function wL(t,e,n,s,i,r,o=!0){const a=gL(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return TL(c,e),vL(c,n),EL(c,r),IL(c,s),new yL(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function RL(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class El{constructor(e,n){this._service=e,n instanceof Bt?this._location=n:this._location=Bt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new El(e,n)}get root(){const e=new Bt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return RL(this._location.path)}get storage(){return this._service}get parent(){const e=AL(this._location.path);if(e===null)return null;const n=new Bt(this._location.bucket,e);return new El(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw hL(e)}}function Rg(t,e){const n=e==null?void 0:e[sL];return n==null?null:Bt.makeFromBucketSpec(n,t)}class CL{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=aI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=iL,this._maxUploadRetryTime=rL,this._requests=new Set,i!=null?this._bucket=Bt.makeFromBucketSpec(i,this._host):this._bucket=Rg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Bt.makeFromBucketSpec(this._url,e):this._bucket=Rg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ag("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ag("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new El(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new dL(lI());{const o=wL(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Cg="@firebase/storage",Sg="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SL="storage";function bL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new CL(n,s,i,e,cs)}function PL(){fn(new qt(SL,bL,"PUBLIC").setMultipleInstances(!0)),St(Cg,Sg,""),St(Cg,Sg,"esm2017")}PL();const lu=new WeakMap;function cI(t,e){return lu.has(e)||lu.set(e,t||{f:{},r:{},s:{},u:{}}),lu.get(e)}function kL(t,e,n,s){if(!t)return n;const[i,r]=uI(t);if(!i)return n;const o=cI(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function NL(t,e,n,s){if(!t)return;const[i,r]=uI(t);if(!i)return;const o=cI(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(rn),a}function uI(t){return h1(t)||d1(t)?["f",t.path]:f1(t)?["r",t.toString()]:p1(t)?["s",t.toString()]:[]}const cu=new WeakMap;function DL(t,e,n){const s=nf();cu.has(s)||cu.set(s,new Map);const i=cu.get(s),r=NL(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):rn}const OL={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Eh(t,e,n,s){if(!c1(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(p=>{const g=Object.getOwnPropertyDescriptor(a,p);g&&!g.enumerable&&Object.defineProperty(h,p,g)});for(const p in a){const g=a[p];if(g==null||g instanceof Date||g instanceof Ve||g instanceof Tc)h[p]=g;else if(rf(g)){const m=c+p;h[p]=m in n?l[p]:g.path,d[m]=g.converter?g:g.withConverter(s.converter)}else if(Array.isArray(g)){h[p]=Array(g.length);for(let m=0;m<g.length;m++){const v=g[m];v&&v.path in r&&(h[p][m]=r[v.path])}o(g,l[p]||h[p],c+p+".",[h[p],d])}else Ks(g)?(h[p]={},o(g,l[p],c+p+".",[h[p],d])):h[p]=g}}return o(t,e,"",i),i}const Sf={reset:!1,wait:!0,maxRefDepth:2,converter:OL,snapshotOptions:{serverTimestamps:"estimate"}};function Tl(t){for(const e in t)t[e].unsub()}function Th(t,e,n,s,i,r,o,a,l){const[c,u]=Eh(s.data(t.snapshotOptions),sf(e,n),i,t);r.set(e,n,c),Ih(t,e,n,i,u,r,o,a,l)}function xL({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const l=Object.create(null);let c=rn;return a.once?WE(t).then(u=>{u.exists()?Th(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())}).catch(r):c=Zd(t,u=>{u.exists()?Th(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())},r),()=>{c(),Tl(l)}}function Ih(t,e,n,s,i,r,o,a,l){const c=Object.keys(i);if(Object.keys(s).filter(m=>c.indexOf(m)<0).forEach(m=>{s[m].unsub(),delete s[m]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,p=Object.create(null);function g(m){m in p&&++h>=d&&a(n)}c.forEach(m=>{const v=s[m],D=i[m],V=`${n}.${m}`;if(p[V]=!0,v)if(v.path!==D.path)v.unsub();else return;s[m]={data:()=>sf(e,V),unsub:xL({ref:D,target:e,path:V,depth:o,ops:r,resolve:g.bind(null,V),reject:l},t),path:D.path}})}function ML(t,e,n,s,i,r){const o=Object.assign({},Sf,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=Yn(c?[]:t.value);c||n.set(t,h,[]);const p=s;let g,m=rn;const v=[],D={added:({newIndex:N,doc:R})=>{v.splice(N,0,Object.create(null));const G=v[N],[de,me]=Eh(R.data(l),void 0,G,o);n.add(In(d),N,de),Ih(o,d,`${h}.${N}`,G,me,n,0,s.bind(null,R),i)},modified:({oldIndex:N,newIndex:R,doc:G})=>{const de=In(d),me=v[N],j=de[N],[Z,Te]=Eh(G.data(l),j,me,o);v.splice(R,0,me),n.remove(de,N),n.add(de,R,Z),Ih(o,d,`${h}.${R}`,me,Te,n,0,s,i)},removed:({oldIndex:N})=>{const R=In(d);n.remove(R,N),Tl(v.splice(N,1)[0])}};function V(N){const R=N.docChanges(a);if(!g&&R.length){g=!0;let G=0;const de=R.length,me=Object.create(null);for(let j=0;j<de;j++)me[R[j].doc.id]=!0;s=j=>{j&&j.id in me&&++G>=de&&(c&&(n.set(t,h,In(d)),d=t),p(In(d)),s=rn)}}R.forEach(G=>{D[G.type](G)}),R.length||(c&&(n.set(t,h,In(d)),d=t),s(In(d)))}return u?wa(e).then(V).catch(i):m=Zd(e,V,i),N=>{if(m(),N){const R=typeof N=="function"?N():[];n.set(t,h,R)}v.forEach(Tl)}}function LL(t,e,n,s,i,r){const o=Object.assign({},Sf,r),a="value",l=Object.create(null);s=_1(s,()=>sf(t,a));let c=rn;function u(h){h.exists()?Th(o,t,a,h,l,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?WE(e).then(u).catch(i):c=Zd(e,u,i),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}Tl(l)}}const bg=Symbol();function VL(t,e){let n=rn;const s=Object.assign({},Sf,e),i=In(t),r=s.target||Yn();m1()&&(s.once=!0);const o=kL(i,s.ssrKey,bg,nf()),a=o!==bg;a&&(r.value=o);let l=!a;const c=Yn(!1),u=Yn(),h=YI(),d=Sh();let p=rn;function g(){let D=In(t);const V=new Promise((N,R)=>{if(n(s.reset),!D)return n=rn,N(null);c.value=l,l=!0,D.converter||(D=D.withConverter(s.converter)),n=(rf(D)?LL:ML)(r,D,FL,N,R,s)}).catch(N=>(h.value===V&&(u.value=N),Promise.reject(N))).finally(()=>{h.value===V&&(c.value=!1)});h.value=V}let m=rn;Pe(t)&&(m=wr(t,g)),g(),i&&(p=DL(h.value,i,s.ssrKey)),Bh()&&fm(()=>h.value),d&&Lg(v);function v(D=s.reset){m(),p(),n(D)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>v}})}const FL={set:(t,e,n)=>a1(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)},pr=new WeakMap;function UL(t,e,n){e&&e[t]&&(e[t](n),delete e[t])}const BL={bindName:"$firestoreBind",unbindName:"$firestoreUnbind"},WL=function(e,n,s){const i=Object.assign({},BL,n),{bindName:r,unbindName:o}=i,a=e.config.globalProperties;a[o]=function(c,u){UL(c,pr.get(this),u),delete this.$firestoreRefs[c]},a[r]=function(c,u,h){const d=Object.assign({},i,h),p=nw(this.$data,c);pr.has(this)||pr.set(this,{});const g=pr.get(this);g[c]&&g[c](d.reset);const m=y1(s||nf(),e).run(()=>Sl()),{promise:v,stop:D}=e.runWithContext(()=>m.run(()=>VL(u,{target:p,...d}))),V=N=>{D(N),m.stop()};return g[c]=V,this.$firestoreRefs[c]=u,v.value},e.mixin({beforeCreate(){this.$firestoreRefs=Object.create(null)},created(){const{firestore:l}=this.$options,c=typeof l=="function"?l.call(this):l;if(c)for(const u in c)this[r](u,c[u],i)},beforeUnmount(){const l=pr.get(this);if(l)for(const c in l)l[c]();this.$firestoreRefs=null}})};function $L(t){return(e,n)=>WL(n,t,e)}function jL(t,{firebaseApp:e,modules:n=[]}){t.provide(QE,e);for(const s of n)s(e,t)}const qL="1788211776",Pg="quizzify_version_reload";async function HL(){try{const t=await fetch(`/version.json?t=${Date.now()}`,{cache:"no-store"});if(!t.ok)return!1;const{version:e}=await t.json();if(e&&e!==qL)return sessionStorage.getItem(Pg)===e?!1:(sessionStorage.setItem(Pg,e),window.location.href=`${window.location.pathname}?v=${e}`,!0)}catch{}return!1}function zL(){if(!window.location.search.includes("v="))return;const t=new URL(window.location.href);t.searchParams.delete("v"),window.history.replaceState({},"",t)}zL();const bf=U0(LO);bf.use(jL,{firebaseApp:ef,modules:[$L()]});const wi=SE(ef);bf.use($0());HL().then(async t=>{t||(await qa().authStateReady(),bf.mount("#app"))});
