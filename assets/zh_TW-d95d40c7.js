import{x as je,aO as te,j as U,ay as $e,N as Se,aS as c,ad as an,am as ln,Y as _e,aZ as Y,a9 as un,as as Q,aq as Pe,a3 as Ve,a_ as wn,Q as on,I as sn,a0 as jn}from"./_plugin-vue_export-helper-bc03d341.js";/**
  * vee-validate v4.7.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function se(e){return typeof e=="function"}function be(e){return e==null}const de=e=>e!==null&&!!e&&typeof e=="object"&&!Array.isArray(e);function dn(e){return Number(e)>=0}function In(e){const n=parseFloat(e);return isNaN(n)?e:n}const cn={};function St(e,n){Cn(e,n),cn[e]=n}function Mn(e){return cn[e]}function Cn(e,n){if(!se(n))throw new Error(`Extension Error: The validator '${e}' must be a function.`)}const pe=Symbol("vee-validate-form"),kn=Symbol("vee-validate-field-instance"),we=Symbol("Default empty value"),Bn=typeof window<"u";function Re(e){return se(e)&&!!e.__locatorRef}function Oe(e){return!!e&&se(e.validate)}function ve(e){return e==="checkbox"||e==="radio"}function Nn(e){return de(e)||Array.isArray(e)}function fn(e){return Array.isArray(e)?e.length===0:de(e)&&Object.keys(e).length===0}function Ie(e){return/^\[.+\]$/i.test(e)}function Rn(e){return vn(e)&&e.multiple}function vn(e){return e.tagName==="SELECT"}function Tn(e,n){const t=![!1,null,void 0,0].includes(n.multiple)&&!Number.isNaN(n.multiple);return e==="select"&&"multiple"in n&&t}function zn(e,n){return!Tn(e,n)&&n.type!=="file"&&!ve(n.type)}function mn(e){return De(e)&&e.target&&"submit"in e.target}function De(e){return e?!!(typeof Event<"u"&&se(Event)&&e instanceof Event||e&&e.srcElement):!1}function Ye(e,n){return n in e&&e[n]!==we}function $(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var t,r,a;if(Array.isArray(e)){if(t=e.length,t!=n.length)return!1;for(r=t;r--!==0;)if(!$(e[r],n[r]))return!1;return!0}if(e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;for(r of e.entries())if(!n.has(r[0]))return!1;for(r of e.entries())if(!$(r[1],n.get(r[0])))return!1;return!0}if(Ze(e)&&Ze(n))return!(e.size!==n.size||e.name!==n.name||e.lastModified!==n.lastModified||e.type!==n.type);if(e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;for(r of e.entries())if(!n.has(r[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(n)){if(t=e.length,t!=n.length)return!1;for(r=t;r--!==0;)if(e[r]!==n[r])return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(a=Object.keys(e),t=a.length,t!==Object.keys(n).length)return!1;for(r=t;r--!==0;)if(!Object.prototype.hasOwnProperty.call(n,a[r]))return!1;for(r=t;r--!==0;){var i=a[r];if(!$(e[i],n[i]))return!1}return!0}return e!==e&&n!==n}function Ze(e){return Bn?e instanceof File:!1}function Qe(e,n,t){typeof t.value=="object"&&(t.value=C(t.value)),!t.enumerable||t.get||t.set||!t.configurable||!t.writable||n==="__proto__"?Object.defineProperty(e,n,t):e[n]=t.value}function C(e){if(typeof e!="object")return e;var n=0,t,r,a,i=Object.prototype.toString.call(e);if(i==="[object Object]"?a=Object.create(e.__proto__||null):i==="[object Array]"?a=Array(e.length):i==="[object Set]"?(a=new Set,e.forEach(function(u){a.add(C(u))})):i==="[object Map]"?(a=new Map,e.forEach(function(u,d){a.set(C(d),C(u))})):i==="[object Date]"?a=new Date(+e):i==="[object RegExp]"?a=new RegExp(e.source,e.flags):i==="[object DataView]"?a=new e.constructor(C(e.buffer)):i==="[object ArrayBuffer]"?a=e.slice(0):i.slice(-6)==="Array]"&&(a=new e.constructor(e)),a){for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)Qe(a,r[n],Object.getOwnPropertyDescriptor(e,r[n]));for(n=0,r=Object.getOwnPropertyNames(e);n<r.length;n++)Object.hasOwnProperty.call(a,t=r[n])&&a[t]===e[t]||Qe(a,t,Object.getOwnPropertyDescriptor(e,t))}return a||e}function Le(e){return Ie(e)?e.replace(/\[|\]/gi,""):e}function R(e,n,t){return e?Ie(n)?e[Le(n)]:(n||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((a,i)=>Nn(a)&&i in a?a[i]:t,e):t}function ae(e,n,t){if(Ie(n)){e[Le(n)]=t;return}const r=n.split(/\.|\[(\d+)\]/).filter(Boolean);let a=e;for(let i=0;i<r.length;i++){if(i===r.length-1){a[r[i]]=t;return}(!(r[i]in a)||be(a[r[i]]))&&(a[r[i]]=dn(r[i+1])?[]:{}),a=a[r[i]]}}function Be(e,n){if(Array.isArray(e)&&dn(n)){e.splice(Number(n),1);return}de(e)&&delete e[n]}function Ee(e,n){if(Ie(n)){delete e[Le(n)];return}const t=n.split(/\.|\[(\d+)\]/).filter(Boolean);let r=e;for(let i=0;i<t.length;i++){if(i===t.length-1){Be(r,t[i]);break}if(!(t[i]in r)||be(r[t[i]]))break;r=r[t[i]]}const a=t.map((i,u)=>R(e,t.slice(0,u).join(".")));for(let i=a.length-1;i>=0;i--)if(fn(a[i])){if(i===0){Be(e,t[0]);continue}Be(a[i-1],t[i-1])}}function q(e){return Object.keys(e)}function qe(e,n=void 0){const t=sn();return(t==null?void 0:t.provides[e])||on(e,n)}function Te(e,n,t){if(Array.isArray(e)){const r=[...e],a=r.findIndex(i=>$(i,n));return a>=0?r.splice(a,1):r.push(n),r}return $(e,n)?t:n}function Xe(e,n=0){let t=null,r=[];return function(...a){return t&&window.clearTimeout(t),t=window.setTimeout(()=>{const i=e(...a);r.forEach(u=>u(i)),r=[]},n),new Promise(i=>r.push(i))}}function Un(e,n){return de(n)&&n.number?In(e):e}function ze(e,n){let t;return async function(...a){const i=e(...a);t=i;const u=await i;return i!==t||(t=void 0,n(u,a)),u}}function $n({get:e,set:n}){const t=Q(C(e()));return Y(e,r=>{$(r,t.value)||(t.value=C(r))},{deep:!0}),Y(t,r=>{$(r,e())||n(C(r))},{deep:!0}),t}const Me=(e,n,t)=>n.slots.default?typeof e=="string"||!e?n.slots.default(t()):{default:()=>{var r,a;return(a=(r=n.slots).default)===null||a===void 0?void 0:a.call(r,t())}}:n.slots.default;function Ne(e){if(hn(e))return e._value}function hn(e){return"_value"in e}function Ge(e){if(!De(e))return e;const n=e.target;if(ve(n.type)&&hn(n))return Ne(n);if(n.type==="file"&&n.files){const t=Array.from(n.files);return n.multiple?t:t[0]}if(Rn(n))return Array.from(n.options).filter(t=>t.selected&&!t.disabled).map(Ne);if(vn(n)){const t=Array.from(n.options).find(r=>r.selected);return t?Ne(t):n.value}return n.value}function yn(e){const n={};return Object.defineProperty(n,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),e?de(e)&&e._$$isNormalized?e:de(e)?Object.keys(e).reduce((t,r)=>{const a=Pn(e[r]);return e[r]!==!1&&(t[r]=Je(a)),t},n):typeof e!="string"?n:e.split("|").reduce((t,r)=>{const a=Dn(r);return a.name&&(t[a.name]=Je(a.params)),t},n):n}function Pn(e){return e===!0?[]:Array.isArray(e)||de(e)?e:[e]}function Je(e){const n=t=>typeof t=="string"&&t[0]==="@"?Ln(t.slice(1)):t;return Array.isArray(e)?e.map(n):e instanceof RegExp?[e]:Object.keys(e).reduce((t,r)=>(t[r]=n(e[r]),t),{})}const Dn=e=>{let n=[];const t=e.split(":")[0];return e.includes(":")&&(n=e.split(":").slice(1).join(":").split(",")),{name:t,params:n}};function Ln(e){const n=t=>R(t,e)||t[e];return n.__locatorRef=e,n}function qn(e){return Array.isArray(e)?e.filter(Re):q(e).filter(n=>Re(e[n])).map(n=>e[n])}const Gn={generateMessage:({field:e})=>`${e} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let Ue=Object.assign({},Gn);const We=()=>Ue,Wn=e=>{Ue=Object.assign(Object.assign({},Ue),e)},_t=Wn;async function gn(e,n,t={}){const r=t==null?void 0:t.bails,a={name:(t==null?void 0:t.name)||"{field}",rules:n,label:t==null?void 0:t.label,bails:r??!0,formData:(t==null?void 0:t.values)||{}},u=(await Hn(a,e)).errors;return{errors:u,valid:!u.length}}async function Hn(e,n){if(Oe(e.rules))return Kn(n,e.rules,{bails:e.bails});if(se(e.rules)||Array.isArray(e.rules)){const u={field:e.label||e.name,name:e.name,label:e.label,form:e.formData,value:n},d=Array.isArray(e.rules)?e.rules:[e.rules],v=d.length,s=[];for(let b=0;b<v;b++){const V=d[b],p=await V(n,u);if(typeof p!="string"&&p)continue;const k=typeof p=="string"?p:Vn(u);if(s.push(k),e.bails)return{errors:s}}return{errors:s}}const t=Object.assign(Object.assign({},e),{rules:yn(e.rules)}),r=[],a=Object.keys(t.rules),i=a.length;for(let u=0;u<i;u++){const d=a[u],v=await Yn(t,n,{name:d,params:t.rules[d]});if(v.error&&(r.push(v.error),e.bails))return{errors:r}}return{errors:r}}async function Kn(e,n,t){var r;return{errors:await n.validate(e,{abortEarly:(r=t.bails)!==null&&r!==void 0?r:!0}).then(()=>[]).catch(i=>{if(i.name==="ValidationError")return i.errors;throw i})}}async function Yn(e,n,t){const r=Mn(t.name);if(!r)throw new Error(`No such validator '${t.name}' exists.`);const a=Zn(t.params,e.formData),i={field:e.label||e.name,name:e.name,label:e.label,value:n,form:e.formData,rule:Object.assign(Object.assign({},t),{params:a})},u=await r(n,a,i);return typeof u=="string"?{error:u}:{error:u?void 0:Vn(i)}}function Vn(e){const n=We().generateMessage;return n?n(e):"Field is invalid"}function Zn(e,n){const t=r=>Re(r)?r(n):r;return Array.isArray(e)?e.map(t):Object.keys(e).reduce((r,a)=>(r[a]=t(e[a]),r),{})}async function Qn(e,n){const t=await e.validate(n,{abortEarly:!1}).then(()=>[]).catch(i=>{if(i.name!=="ValidationError")throw i;return i.inner||[]}),r={},a={};for(const i of t){const u=i.errors;r[i.path]={valid:!u.length,errors:u},u.length&&(a[i.path]=u[0])}return{valid:!t.length,results:r,errors:a}}async function Xn(e,n,t){const a=q(e).map(async s=>{var b,V,p;const w=(b=t==null?void 0:t.names)===null||b===void 0?void 0:b[s],k=await gn(R(n,s),e[s],{name:(w==null?void 0:w.name)||s,label:w==null?void 0:w.label,values:n,bails:(p=(V=t==null?void 0:t.bailsMap)===null||V===void 0?void 0:V[s])!==null&&p!==void 0?p:!0});return Object.assign(Object.assign({},k),{path:s})});let i=!0;const u=await Promise.all(a),d={},v={};for(const s of u)d[s.path]={valid:s.valid,errors:s.errors},s.valid||(i=!1,v[s.path]=s.errors[0]);return{valid:i,results:d,errors:v}}let xe=0;function Jn(e,n){const{value:t,initialValue:r,setInitialValue:a}=bn(e,n.modelValue,n.form),{errorMessage:i,errors:u,setErrors:d}=et(e,n.form),v=xn(t,r,u),s=xe>=Number.MAX_SAFE_INTEGER?0:++xe;function b(V){var p;"value"in V&&(t.value=V.value),"errors"in V&&d(V.errors),"touched"in V&&(v.touched=(p=V.touched)!==null&&p!==void 0?p:v.touched),"initialValue"in V&&a(V.initialValue)}return{id:s,path:e,value:t,initialValue:r,meta:v,errors:u,errorMessage:i,setState:b}}function bn(e,n,t){const r=Q(c(n));function a(){return t?R(t.meta.value.initialValues,c(e),c(r)):c(r)}function i(s){if(!t){r.value=s;return}t.stageInitialValue(c(e),s,!0)}const u=U(a);if(!t)return{value:Q(a()),initialValue:u,setInitialValue:i};const d=n?c(n):R(t.values,c(e),c(u));return t.stageInitialValue(c(e),d,!0),{value:U({get(){return R(t.values,c(e))},set(s){t.setFieldValue(c(e),s)}}),initialValue:u,setInitialValue:i}}function xn(e,n,t){const r=Pe({touched:!1,pending:!1,valid:!0,validated:!!c(t).length,initialValue:U(()=>c(n)),dirty:U(()=>!$(c(e),c(n)))});return Y(t,a=>{r.valid=!a.length},{immediate:!0,flush:"sync"}),r}function et(e,n){function t(a){return a?Array.isArray(a)?a:[a]:[]}if(!n){const a=Q([]);return{errors:a,errorMessage:U(()=>a.value[0]),setErrors:i=>{a.value=t(i)}}}const r=U(()=>n.errorBag.value[c(e)]||[]);return{errors:r,errorMessage:U(()=>r.value[0]),setErrors:a=>{n.setFieldErrorBag(c(e),t(a))}}}function nt(e,n,t){return ve(t==null?void 0:t.type)?it(e,n,t):On(e,n,t)}function On(e,n,t){const{initialValue:r,validateOnMount:a,bails:i,type:u,checkedValue:d,label:v,validateOnValueUpdate:s,uncheckedValue:b,controlled:V,keepValueOnUnmount:p,modelPropName:w,syncVModel:k,form:T}=tt(c(e),t),X=V?qe(pe):void 0,j=T||X;let P=!1;const{id:m,value:h,initialValue:F,meta:y,setState:A,errors:S,errorMessage:N}=Jn(e,{modelValue:r,form:j});k&&at({value:h,prop:w,handleChange:B});const H=()=>{y.touched=!0},x=U(()=>{let f=c(n);const I=c(j==null?void 0:j.schema);return I&&!Oe(I)&&(f=rt(I,c(e))||f),Oe(f)||se(f)||Array.isArray(f)?f:yn(f)});async function ee(f){var I,G;return j!=null&&j.validateSchema?(I=(await j.validateSchema(f)).results[c(e)])!==null&&I!==void 0?I:{valid:!0,errors:[]}:gn(h.value,x.value,{name:c(e),label:c(v),values:(G=j==null?void 0:j.values)!==null&&G!==void 0?G:{},bails:i})}const W=ze(async()=>(y.pending=!0,y.validated=!0,ee("validated-only")),f=>(P&&(f.valid=!0,f.errors=[]),A({errors:f.errors}),y.pending=!1,f)),Z=ze(async()=>ee("silent"),f=>(P&&(f.valid=!0),y.valid=f.valid,f));function z(f){return(f==null?void 0:f.mode)==="silent"?Z():W()}function B(f,I=!0){const G=Ge(f);h.value=G,!s&&I&&W()}an(()=>{if(a)return W();(!j||!j.validateSchema)&&Z()});function D(f){y.touched=f}let K,me=C(h.value);function re(){K=Y(h,(f,I)=>{if($(f,I)&&$(f,me))return;(s?W:Z)(),me=C(f)},{deep:!0})}re();function le(f){var I;K==null||K();const G=f&&"value"in f?f.value:F.value;A({value:C(G),initialValue:C(G),touched:(I=f==null?void 0:f.touched)!==null&&I!==void 0?I:!1,errors:(f==null?void 0:f.errors)||[]}),y.pending=!1,y.validated=!1,Z(),Ve(()=>{re()})}function ce(f){h.value=f}function he(f){A({errors:Array.isArray(f)?f:[f]})}const ie={id:m,name:e,label:v,value:h,meta:y,errors:S,errorMessage:N,type:u,checkedValue:d,uncheckedValue:b,bails:i,keepValueOnUnmount:p,resetField:le,handleReset:()=>le(),validate:z,handleChange:B,handleBlur:H,setState:A,setTouched:D,setErrors:he,setValue:ce};if(ln(kn,ie),_e(n)&&typeof c(n)!="function"&&Y(n,(f,I)=>{$(f,I)||(y.validated?W():Z())},{deep:!0}),!j)return ie;j.register(ie),un(()=>{P=!0,j.unregister(ie)});const Ce=U(()=>{const f=x.value;return!f||se(f)||Oe(f)||Array.isArray(f)?{}:Object.keys(f).reduce((I,G)=>{const ye=qn(f[G]).map(ue=>ue.__locatorRef).reduce((ue,fe)=>{const Ae=R(j.values,fe)||j.values[fe];return Ae!==void 0&&(ue[fe]=Ae),ue},{});return Object.assign(I,ye),I},{})});return Y(Ce,(f,I)=>{if(!Object.keys(f).length)return;!$(f,I)&&(y.validated?W():Z())}),ie}function tt(e,n){const t=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,label:e,validateOnValueUpdate:!0,keepValueOnUnmount:void 0,modelPropName:"modelValue",syncVModel:!0,controlled:!0});if(!n)return t();const r="valueProp"in n?n.valueProp:n.checkedValue,a="standalone"in n?!n.standalone:n.controlled;return Object.assign(Object.assign(Object.assign({},t()),n||{}),{controlled:a??!0,checkedValue:r})}function rt(e,n){if(e)return e[n]}function it(e,n,t){const r=t!=null&&t.standalone?void 0:qe(pe),a=t==null?void 0:t.checkedValue,i=t==null?void 0:t.uncheckedValue;function u(d){const v=d.handleChange,s=U(()=>{const V=c(d.value),p=c(a);return Array.isArray(V)?V.findIndex(w=>$(w,p))>=0:$(p,V)});function b(V,p=!0){var w;if(s.value===((w=V==null?void 0:V.target)===null||w===void 0?void 0:w.checked)){p&&d.validate();return}let k=Ge(V);r||(k=Te(c(d.value),c(a),c(i))),v(k,p)}return Object.assign(Object.assign({},d),{checked:s,checkedValue:a,uncheckedValue:i,handleChange:b})}return u(On(e,n,t))}function at({prop:e,value:n,handleChange:t}){const r=sn();if(!r)return;const a=e||"modelValue",i=`update:${a}`;a in r.props&&(Y(n,u=>{$(u,en(r,a))||r.emit(i,u)}),Y(()=>en(r,a),u=>{if(u===we&&n.value===void 0)return;const d=u===we?void 0:u;$(d,Un(n.value,r.props.modelModifiers))||t(d)}))}function en(e,n){return e.props[n]}const lt=je({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>We().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:we},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1},keepValue:{type:Boolean,default:void 0}},setup(e,n){const t=te(e,"rules"),r=te(e,"name"),a=te(e,"label"),i=te(e,"uncheckedValue"),u=te(e,"keepValue"),{errors:d,value:v,errorMessage:s,validate:b,handleChange:V,handleBlur:p,setTouched:w,resetField:k,handleReset:T,meta:X,checked:j,setErrors:P}=nt(r,t,{validateOnMount:e.validateOnMount,bails:e.bails,standalone:e.standalone,type:n.attrs.type,initialValue:ot(e,n),checkedValue:n.attrs.value,uncheckedValue:i,label:a,validateOnValueUpdate:!1,keepValueOnUnmount:u}),m=function(N,H=!0){V(N,H),n.emit("update:modelValue",v.value)},h=S=>{ve(n.attrs.type)||(v.value=Ge(S))},F=function(N){h(N),n.emit("update:modelValue",v.value)},y=U(()=>{const{validateOnInput:S,validateOnChange:N,validateOnBlur:H,validateOnModelUpdate:x}=ut(e),ee=[p,n.attrs.onBlur,H?b:void 0].filter(Boolean),W=[D=>m(D,S),n.attrs.onInput].filter(Boolean),Z=[D=>m(D,N),n.attrs.onChange].filter(Boolean),z={name:e.name,onBlur:ee,onInput:W,onChange:Z};z["onUpdate:modelValue"]=D=>m(D,x),ve(n.attrs.type)&&j&&(z.checked=j.value);const B=nn(e,n);return zn(B,n.attrs)&&(z.value=v.value),z});function A(){return{field:y.value,value:v.value,meta:X,errors:d.value,errorMessage:s.value,validate:b,resetField:k,handleChange:m,handleInput:F,handleReset:T,handleBlur:p,setTouched:w,setErrors:P}}return n.expose({setErrors:P,setTouched:w,reset:k,validate:b,handleChange:V}),()=>{const S=$e(nn(e,n)),N=Me(S,n,A);return S?Se(S,Object.assign(Object.assign({},n.attrs),y.value),N):N}}});function nn(e,n){let t=e.as||"";return!e.as&&!n.slots.default&&(t="input"),t}function ut(e){var n,t,r,a;const{validateOnInput:i,validateOnChange:u,validateOnBlur:d,validateOnModelUpdate:v}=We();return{validateOnInput:(n=e.validateOnInput)!==null&&n!==void 0?n:i,validateOnChange:(t=e.validateOnChange)!==null&&t!==void 0?t:u,validateOnBlur:(r=e.validateOnBlur)!==null&&r!==void 0?r:d,validateOnModelUpdate:(a=e.validateOnModelUpdate)!==null&&a!==void 0?a:v}}function ot(e,n){return ve(n.attrs.type)?Ye(e,"modelValue")?e.modelValue:void 0:Ye(e,"modelValue")?e.modelValue:n.attrs.value}const wt=lt;let st=0;function dt(e){var n;const t=st++,r=new Set;let a=!1;const i=Q({}),u=Q(!1),d=Q(0),v=[],s=Pe(C(c(e==null?void 0:e.initialValues)||{})),{errorBag:b,setErrorBag:V,setFieldErrorBag:p}=vt(e==null?void 0:e.initialErrors),w=U(()=>q(b.value).reduce((l,o)=>{const g=b.value[o];return g&&g.length&&(l[o]=g[0]),l},{}));function k(l){const o=i.value[l];return Array.isArray(o)?o[0]:o}function T(l){return!!i.value[l]}const X=U(()=>q(i.value).reduce((l,o)=>{const g=k(o);return g&&(l[o]={name:c(g.name)||"",label:c(g.label)||""}),l},{})),j=U(()=>q(i.value).reduce((l,o)=>{var g;const O=k(o);return O&&(l[o]=(g=O.bails)!==null&&g!==void 0?g:!0),l},{})),P=Object.assign({},(e==null?void 0:e.initialErrors)||{}),m=(n=e==null?void 0:e.keepValuesOnUnmount)!==null&&n!==void 0?n:!1,{initialValues:h,originalInitialValues:F,setInitialValues:y}=ft(i,s,e==null?void 0:e.initialValues),A=ct(i,s,F,w),S=U(()=>[...r,...q(i.value)].reduce((l,o)=>{const g=R(s,o);return ae(l,o,g),l},{})),N=e==null?void 0:e.validationSchema,H=Xe(Ke,5),x=Xe(Ke,5),ee=ze(async l=>await l==="silent"?H():x(),(l,[o])=>{const g=B.fieldsByPath.value||{},O=q(B.errorBag.value);return[...new Set([...q(l.results),...q(g),...O])].reduce((E,_)=>{const L=g[_],ne=(l.results[_]||{errors:[]}).errors,J={errors:ne,valid:!ne.length};if(E.results[_]=J,J.valid||(E.errors[_]=J.errors[0]),!L)return re(_,ne),E;if(K(L,ge=>ge.meta.valid=J.valid),o==="silent")return E;const _n=Array.isArray(L)?L.some(ge=>ge.meta.validated):L.meta.validated;return o==="validated-only"&&!_n||K(L,ge=>ge.setState({errors:J.errors})),E},{valid:l.valid,results:{},errors:{}})});function W(l){return function(g,O){return function(E){return E instanceof Event&&(E.preventDefault(),E.stopPropagation()),I(q(i.value).reduce((_,L)=>(_[L]=!0,_),{})),u.value=!0,d.value++,Fe().then(_=>{const L=C(s);if(_.valid&&typeof g=="function"){const ne=C(S.value);return g(l?ne:L,{evt:E,controlledValues:ne,setErrors:le,setFieldError:re,setTouched:I,setFieldTouched:f,setValues:he,setFieldValue:ce,resetForm:ye,resetField:G})}!_.valid&&typeof O=="function"&&O({values:L,evt:E,errors:_.errors,results:_.results})}).then(_=>(u.value=!1,_),_=>{throw u.value=!1,_})}}}const z=W(!1);z.withControlled=W(!0);const B={formId:t,fieldsByPath:i,values:s,controlledValues:S,errorBag:b,errors:w,schema:N,submitCount:d,meta:A,isSubmitting:u,fieldArrays:v,keepValuesOnUnmount:m,validateSchema:c(N)?ee:void 0,validate:Fe,register:Ae,unregister:An,setFieldErrorBag:p,validateField:ke,setFieldValue:ce,setValues:he,setErrors:le,setFieldError:re,setFieldTouched:f,setTouched:I,resetForm:ye,resetField:G,handleSubmit:z,stageInitialValue:En,unsetInitialValue:Fn,setFieldInitialValue:He,useFieldModel:Ce};function D(l){return Array.isArray(l)}function K(l,o){return Array.isArray(l)?l.forEach(o):o(l)}function me(l){Object.values(i.value).forEach(o=>{o&&K(o,l)})}function re(l,o){p(l,o)}function le(l){V(l)}function ce(l,o,{force:g}={force:!1}){var O;const M=i.value[l],E=C(o);if(!M){ae(s,l,E);return}if(D(M)&&((O=M[0])===null||O===void 0?void 0:O.type)==="checkbox"&&!Array.isArray(o)){const L=C(Te(R(s,l)||[],o,void 0));ae(s,l,L);return}let _=E;!D(M)&&M.type==="checkbox"&&!g&&!a&&(_=C(Te(R(s,l),o,c(M.uncheckedValue)))),ae(s,l,_)}function he(l){q(s).forEach(o=>{delete s[o]}),q(l).forEach(o=>{ce(o,l[o])}),v.forEach(o=>o&&o.reset())}function ie(l){const{value:o}=bn(l,void 0,B);return Y(o,()=>{T(c(l))||Fe({mode:"validated-only"})},{deep:!0}),r.add(c(l)),o}function Ce(l){return Array.isArray(l)?l.map(ie):ie(l)}function f(l,o){const g=i.value[l];g&&K(g,O=>O.setTouched(o))}function I(l){q(l).forEach(o=>{f(o,!!l[o])})}function G(l,o){const g=i.value[l];g&&K(g,O=>O.resetField(o))}function ye(l){a=!0,me(g=>g.resetField());const o=l!=null&&l.values?l.values:F.value;y(o),he(o),l!=null&&l.touched&&I(l.touched),le((l==null?void 0:l.errors)||{}),d.value=(l==null?void 0:l.submitCount)||0,Ve(()=>{a=!1})}function ue(l,o){const g=jn(l),O=o;if(!i.value[O]){i.value[O]=g;return}const M=i.value[O];M&&!Array.isArray(M)&&(i.value[O]=[M]),i.value[O]=[...i.value[O],g]}function fe(l,o){const g=o,O=i.value[g];if(O){if(!D(O)&&l.id===O.id){delete i.value[g];return}if(D(O)){const M=O.findIndex(E=>E.id===l.id);if(M===-1)return;O.splice(M,1),O.length||delete i.value[g]}}}function Ae(l){const o=c(l.name);ue(l,o),_e(l.name)&&Y(l.name,async(O,M)=>{await Ve(),fe(l,M),ue(l,O),(w.value[M]||w.value[O])&&(re(M,void 0),ke(O)),await Ve(),T(M)||Ee(s,M)});const g=c(l.errorMessage);g&&(P==null?void 0:P[o])!==g&&ke(o),delete P[o]}function An(l){const o=c(l.name),g=i.value[o],O=!!g&&D(g);fe(l,o),Ve(()=>{var M;const E=(M=c(l.keepValueOnUnmount))!==null&&M!==void 0?M:c(m),_=R(s,o);if(O&&(g===i.value[o]||!i.value[o])&&!E)if(Array.isArray(_)){const ne=_.findIndex(J=>$(J,c(l.checkedValue)));if(ne>-1){const J=[..._];J.splice(ne,1),ce(o,J,{force:!0})}}else _===c(l.checkedValue)&&Ee(s,o);if(!T(o)){if(re(o,void 0),E||O&&Array.isArray(_)&&!fn(_))return;Ee(s,o)}})}async function Fe(l){const o=(l==null?void 0:l.mode)||"force";if(o==="force"&&me(E=>E.meta.validated=!0),B.validateSchema)return B.validateSchema(o);const g=await Promise.all(Object.values(i.value).map(E=>{const _=Array.isArray(E)?E[0]:E;return _?_.validate(l).then(L=>({key:c(_.name),valid:L.valid,errors:L.errors})):Promise.resolve({key:"",valid:!0,errors:[]})})),O={},M={};for(const E of g)O[E.key]={valid:E.valid,errors:E.errors},E.errors.length&&(M[E.key]=E.errors[0]);return{valid:g.every(E=>E.valid),results:O,errors:M}}async function ke(l){const o=i.value[l];return o?Array.isArray(o)?o.map(g=>g.validate())[0]:o.validate():Promise.resolve({errors:[],valid:!0})}function Fn(l){Ee(h.value,l)}function En(l,o,g=!1){ae(s,l,o),He(l,o),g&&!(e!=null&&e.initialValues)&&ae(F.value,l,C(o))}function He(l,o){ae(h.value,l,C(o))}async function Ke(){const l=c(N);return l?Oe(l)?await Qn(l,s):await Xn(l,s,{names:X.value,bailsMap:j.value}):{valid:!0,results:{},errors:{}}}const Sn=z((l,{evt:o})=>{mn(o)&&o.target.submit()});return an(()=>{if(e!=null&&e.initialErrors&&le(e.initialErrors),e!=null&&e.initialTouched&&I(e.initialTouched),e!=null&&e.validateOnMount){Fe();return}B.validateSchema&&B.validateSchema("silent")}),_e(N)&&Y(N,()=>{var l;(l=B.validateSchema)===null||l===void 0||l.call(B,"validated-only")}),ln(pe,B),Object.assign(Object.assign({},B),{handleReset:()=>ye(),submitForm:Sn})}function ct(e,n,t,r){const a={touched:"some",pending:"some",valid:"every"},i=U(()=>!$(n,c(t)));function u(){const v=Object.values(e.value).flat(1).filter(Boolean);return q(a).reduce((s,b)=>{const V=a[b];return s[b]=v[V](p=>p.meta[b]),s},{})}const d=Pe(u());return wn(()=>{const v=u();d.touched=v.touched,d.valid=v.valid,d.pending=v.pending}),U(()=>Object.assign(Object.assign({initialValues:c(t)},d),{valid:d.valid&&!q(r.value).length,dirty:i.value}))}function ft(e,n,t){const r=Q(C(c(t))||{}),a=Q(C(c(t))||{});function i(u,d=!1){r.value=C(u),a.value=C(u),d&&q(e.value).forEach(v=>{const s=e.value[v],b=Array.isArray(s)?s.some(p=>p.meta.touched):s==null?void 0:s.meta.touched;if(!s||b)return;const V=R(r.value,v);ae(n,v,C(V))})}return _e(t)&&Y(t,u=>{i(u,!0)},{deep:!0}),{initialValues:r,originalInitialValues:a,setInitialValues:i}}function vt(e){const n=Q({});function t(i){return Array.isArray(i)?i:i?[i]:[]}function r(i,u){if(!u){delete n.value[i];return}n.value[i]=t(u)}function a(i){n.value=q(i).reduce((u,d)=>{const v=i[d];return v&&(u[d]=t(v)),u},{})}return e&&a(e),{errorBag:n,setErrorBag:a,setFieldErrorBag:r}}const mt=je({name:"Form",inheritAttrs:!1,props:{as:{type:String,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0},keepValues:{type:Boolean,default:!1}},setup(e,n){const t=te(e,"initialValues"),r=te(e,"validationSchema"),a=te(e,"keepValues"),{errors:i,values:u,meta:d,isSubmitting:v,submitCount:s,controlledValues:b,validate:V,validateField:p,handleReset:w,resetForm:k,handleSubmit:T,setErrors:X,setFieldError:j,setFieldValue:P,setValues:m,setFieldTouched:h,setTouched:F,resetField:y}=dt({validationSchema:r.value?r:void 0,initialValues:t,initialErrors:e.initialErrors,initialTouched:e.initialTouched,validateOnMount:e.validateOnMount,keepValuesOnUnmount:a}),A=T((z,{evt:B})=>{mn(B)&&B.target.submit()},e.onInvalidSubmit),S=e.onSubmit?T(e.onSubmit,e.onInvalidSubmit):A;function N(z){De(z)&&z.preventDefault(),w(),typeof n.attrs.onReset=="function"&&n.attrs.onReset()}function H(z,B){return T(typeof z=="function"&&!B?z:B,e.onInvalidSubmit)(z)}function x(){return C(u)}function ee(){return C(d.value)}function W(){return C(i.value)}function Z(){return{meta:d.value,errors:i.value,values:u,isSubmitting:v.value,submitCount:s.value,controlledValues:b.value,validate:V,validateField:p,handleSubmit:H,handleReset:w,submitForm:A,setErrors:X,setFieldError:j,setFieldValue:P,setValues:m,setFieldTouched:h,setTouched:F,resetForm:k,resetField:y,getValues:x,getMeta:ee,getErrors:W}}return n.expose({setFieldError:j,setErrors:X,setFieldValue:P,setValues:m,setFieldTouched:h,setTouched:F,resetForm:k,validate:V,validateField:p,resetField:y,getValues:x,getMeta:ee,getErrors:W}),function(){const B=e.as==="form"?e.as:$e(e.as),D=Me(B,n,Z);if(!e.as)return D;const K=e.as==="form"?{novalidate:!0}:{};return Se(B,Object.assign(Object.assign(Object.assign({},K),n.attrs),{onSubmit:S,onReset:N}),D)}}}),jt=mt;function ht(e){const n=qe(pe,void 0),t=Q([]),r=()=>{},a={fields:t,remove:r,push:r,swap:r,insert:r,update:r,replace:r,prepend:r,move:r};if(!n||!c(e))return a;const i=n.fieldArrays.find(m=>c(m.path)===c(e));if(i)return i;let u=0;function d(){const m=R(n==null?void 0:n.values,c(e),[])||[];t.value=m.map(s),v()}d();function v(){const m=t.value.length;for(let h=0;h<m;h++){const F=t.value[h];F.isFirst=h===0,F.isLast=h===m-1}}function s(m){const h=u++;return{key:h,value:$n({get(){const y=R(n==null?void 0:n.values,c(e),[])||[],A=t.value.findIndex(S=>S.key===h);return A===-1?m:y[A]},set(y){const A=t.value.findIndex(S=>S.key===h);A!==-1&&T(A,y)}}),isFirst:!1,isLast:!1}}function b(m){const h=c(e),F=R(n==null?void 0:n.values,h);if(!F||!Array.isArray(F))return;const y=[...F];y.splice(m,1),n==null||n.unsetInitialValue(h+`[${m}]`),n==null||n.setFieldValue(h,y),t.value.splice(m,1),v()}function V(m){const h=c(e),F=R(n==null?void 0:n.values,h),y=be(F)?[]:F;if(!Array.isArray(y))return;const A=[...y];A.push(m),n==null||n.stageInitialValue(h+`[${A.length-1}]`,m),n==null||n.setFieldValue(h,A),t.value.push(s(m)),v()}function p(m,h){const F=c(e),y=R(n==null?void 0:n.values,F);if(!Array.isArray(y)||!(m in y)||!(h in y))return;const A=[...y],S=[...t.value],N=A[m];A[m]=A[h],A[h]=N;const H=S[m];S[m]=S[h],S[h]=H,n==null||n.setFieldValue(F,A),t.value=S,v()}function w(m,h){const F=c(e),y=R(n==null?void 0:n.values,F);if(!Array.isArray(y)||y.length<m)return;const A=[...y],S=[...t.value];A.splice(m,0,h),S.splice(m,0,s(h)),n==null||n.setFieldValue(F,A),t.value=S,v()}function k(m){const h=c(e);n==null||n.setFieldValue(h,m),d()}function T(m,h){const F=c(e),y=R(n==null?void 0:n.values,F);!Array.isArray(y)||y.length-1<m||(n==null||n.setFieldValue(`${F}[${m}]`,h),n==null||n.validate({mode:"validated-only"}))}function X(m){const h=c(e),F=R(n==null?void 0:n.values,h),y=be(F)?[]:F;if(!Array.isArray(y))return;const A=[m,...y];n==null||n.stageInitialValue(h+`[${A.length-1}]`,m),n==null||n.setFieldValue(h,A),t.value.unshift(s(m)),v()}function j(m,h){const F=c(e),y=R(n==null?void 0:n.values,F),A=be(y)?[]:[...y];if(!Array.isArray(y)||!(m in y)||!(h in y))return;const S=[...t.value],N=S[m];S.splice(m,1),S.splice(h,0,N);const H=A[m];A.splice(m,1),A.splice(h,0,H),n==null||n.setFieldValue(F,A),t.value=S,v()}const P={fields:t,remove:b,push:V,swap:p,insert:w,update:T,replace:k,prepend:X,move:j};return n.fieldArrays.push(Object.assign({path:e,reset:d},P)),un(()=>{const m=n.fieldArrays.findIndex(h=>c(h.path)===c(e));m>=0&&n.fieldArrays.splice(m,1)}),P}je({name:"FieldArray",inheritAttrs:!1,props:{name:{type:String,required:!0}},setup(e,n){const{push:t,remove:r,swap:a,insert:i,replace:u,update:d,prepend:v,move:s,fields:b}=ht(te(e,"name"));function V(){return{fields:b.value,push:t,remove:r,swap:a,insert:i,update:d,replace:u,prepend:v,move:s}}return n.expose({push:t,remove:r,swap:a,insert:i,update:d,replace:u,prepend:v,move:s}),()=>Me(void 0,n,V)}});const yt=je({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(e,n){const t=on(pe,void 0),r=U(()=>t==null?void 0:t.errors.value[e.name]);function a(){return{message:r.value}}return()=>{if(!r.value)return;const i=e.as?$e(e.as):e.as,u=Me(i,n,a),d=Object.assign({role:"alert"},n.attrs);return!i&&(Array.isArray(u)||!u)&&(u!=null&&u.length)?u:(Array.isArray(u)||!u)&&!(u!=null&&u.length)?Se(i||"span",d,r.value):Se(i,d,u)}}}),It=yt;/**
  * vee-validate v4.7.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function gt(e){return!!(e==null||e===""||Array.isArray(e)&&e.length===0)}const Mt=e=>{if(gt(e))return!0;const n=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(e)?e.every(t=>n.test(String(t))):n.test(String(e))};function Vt(e){return e==null}function bt(e){return Array.isArray(e)&&e.length===0}const Ct=e=>Vt(e)||bt(e)||e===!1?!1:!!String(e).trim().length;/**
  * vee-validate v4.7.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function tn(e){return typeof e=="function"}const Ot=e=>e!==null&&!!e&&typeof e=="object"&&!Array.isArray(e);function rn(e,n){return e.replace(/(\d:)?{([^}]+)}/g,function(t,r,a){if(!r||!n.params)return a in n?n[a]:n.params&&a in n.params?n.params[a]:`{${a}}`;if(!Array.isArray(n.params))return a in n.params?n.params[a]:`{${a}}`;const i=Number(r.replace(":",""));return i in n.params?n.params[i]:`${r}{${a}}`})}function pn(e,n){return Object.keys(n).forEach(t=>{if(Ot(n[t])){e[t]||(e[t]={}),pn(e[t],n[t]);return}e[t]=n[t]}),e}class pt{constructor(n,t){this.container={},this.locale=n,this.merge(t)}resolve(n){return this.format(this.locale,n)}getLocaleDefault(n,t){var r,a,i,u,d;return((i=(a=(r=this.container[n])===null||r===void 0?void 0:r.fields)===null||a===void 0?void 0:a[t])===null||i===void 0?void 0:i._default)||((d=(u=this.container[n])===null||u===void 0?void 0:u.messages)===null||d===void 0?void 0:d._default)}format(n,t){var r,a,i,u,d,v,s;let b;const{rule:V,form:p,label:w,name:k}=t,T=w||((a=(r=this.container[n])===null||r===void 0?void 0:r.names)===null||a===void 0?void 0:a[k])||k;return V?(b=((d=(u=(i=this.container[n])===null||i===void 0?void 0:i.fields)===null||u===void 0?void 0:u[k])===null||d===void 0?void 0:d[V.name])||((s=(v=this.container[n])===null||v===void 0?void 0:v.messages)===null||s===void 0?void 0:s[V.name]),b||(b=this.getLocaleDefault(n,k)||`${T} is not valid`),tn(b)?b(t):rn(b,Object.assign(Object.assign({},p),{field:T,params:V.params}))):(b=this.getLocaleDefault(n,k)||`${T} is not valid`,tn(b)?b(t):rn(b,Object.assign(Object.assign({},p),{field:T})))}merge(n){pn(this.container,n)}}let oe;function kt(e,n){oe||(oe=new pt("en",{}));const t=r=>oe.resolve(r);return typeof e=="string"?(oe.locale=e,n&&oe.merge({[e]:n}),t):(oe.merge(e),t)}function Bt(e){oe.locale=e}const At="zh_TW",Ft={_default:"{field} 的值無效",alpha:"{field} 須以英文組成",alpha_dash:"{field} 須以英數、破折號及底線組成",alpha_num:"{field} 須以英數組成",alpha_spaces:"{field} 須以英文及空格組成",between:"{field} 須介於 0:{min} 至 1:{max}之間",confirmed:" {field} 不一致",digits:"{field} 須為 0:{length} 位數字",dimensions:"{field} 圖片尺寸不正確。須為 0:{width} x 1:{height} 像素",email:"{field} 須為有效的電子信箱",not_one_of:"{field} 的選項無效",ext:"{field} 須為有效的檔案",image:"{field} 須為圖片",one_of:"{field} 的選項無效",integer:"{field} 須為整數",length:"{field} 的長度須為 0:{length}",max:"{field} 不能大於 0:{length} 個字元",max_value:"{field} 不得大於 0:{max}",mimes:"{field} 須為有效的檔案類型",min:"{field} 不能小於 0:{length} 個字元",min_value:"{field} 不得小於 0:{min}",numeric:"{field} 須為數字",regex:"{field} 的格式錯誤",required:"{field} 為必填",required_if:"{field} 為必填",size:"{field} 的檔案須小於 0:{size}KB",url:"{field} 須為有效的URL"},Nt={code:At,messages:Ft};export{It as E,jt as F,wt as a,_t as c,St as d,Mt as e,kt as l,Ct as r,Bt as s,Nt as z};
