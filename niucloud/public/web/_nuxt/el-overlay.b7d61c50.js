import{t as ht,d as wa,f as Me,a as Pe,F as Fa,u as bt,E as ja,__tla as qa}from"./index.fc8f14c7.js";import{b4 as wt,b5 as Ft,b6 as jt,aJ as Aa,b7 as xa,aN as Ce,M as me,b8 as Oa,O as Re,b9 as ce,aG as Ea,B as ee,ba as ka,ag as qt,bb as At,L as T,bc as Sa,bd as _a,be as Ma,bf as Pa,aS as Ie,J as te,bg as xt,ah as re,aX as Ca,Q as Be,bh as $e,x as D,i as _,f as Y,P as Le,a1 as Ot,bi as Et,o as G,k as fe,r as N,C as W,u,D as ge,a0 as ne,bj as Ra,N as Ia,m as J,Z as Ba,ap as De,A as kt,bk as $a,bl as ze,w as X,c as he,at as St,E as be,p as La,t as Ne,y as de,l as ae,aW as Da,F as _t,G as za,bm as Na,bn as Wa,am as Va,U as Ua,bo as Ya,an as Xa,bp as Ga,R as Ja,bq as Za,br as Mt,S as Ta,aC as Ha,b0 as Qa,W as Ka,X as eo,aw as to,__tla as ro}from"./entry.a7668388.js";import{a as Pt,__tla as no}from"./use-form-item.5f33d493.js";import{u as We,__tla as ao}from"./index.2a1233df.js";import{c as we,k as Ct,a as Ve,b as Rt,s as oo,d as so,e as lo,f as io,h as It,i as uo,j as Ue,n as Fe,l as Bt,m as co,o as fo,p as po,q as vo,S as yo,r as mo,t as go,U as $t,__tla as ho}from"./el-input.436b7afb.js";import{P as Ye,__tla as bo}from"./vnode.53e96e04.js";let Lt,Dt,zt,oe,wo=Promise.all([(()=>{try{return qa}catch{}})(),(()=>{try{return ro}catch{}})(),(()=>{try{return no}catch{}})(),(()=>{try{return ao}catch{}})(),(()=>{try{return ho}catch{}})(),(()=>{try{return bo}catch{}})()]).then(async()=>{function Nt(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}function je(){if(!arguments.length)return[];var e=arguments[0];return wt(e)?e:[e]}function Wt(e,r){return e&&we(r,Ct(r),e)}function Vt(e,r){return e&&we(r,Ve(r),e)}function Ut(e,r){return we(e,Rt(e),r)}var Yt=Object.getOwnPropertySymbols,Xt=Yt?function(e){for(var r=[];e;)so(r,Rt(e)),e=lo(e);return r}:oo;const Xe=Xt;function Gt(e,r){return we(e,Xe(e),r)}function Jt(e){return io(e,Ve,Xe)}var Zt=Object.prototype,Tt=Zt.hasOwnProperty;function Ht(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&Tt.call(e,"index")&&(t.index=e.index,t.input=e.input),t}function Qt(e,r){var t=r?It(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var Kt=/\w*$/;function er(e){var r=new e.constructor(e.source,Kt.exec(e));return r.lastIndex=e.lastIndex,r}var Ge=Ft?Ft.prototype:void 0,Je=Ge?Ge.valueOf:void 0;function tr(e){return Je?Object(Je.call(e)):{}}var rr="[object Boolean]",nr="[object Date]",ar="[object Map]",or="[object Number]",sr="[object RegExp]",lr="[object Set]",ir="[object String]",ur="[object Symbol]",cr="[object ArrayBuffer]",fr="[object DataView]",dr="[object Float32Array]",pr="[object Float64Array]",vr="[object Int8Array]",yr="[object Int16Array]",mr="[object Int32Array]",gr="[object Uint8Array]",hr="[object Uint8ClampedArray]",br="[object Uint16Array]",wr="[object Uint32Array]";function Fr(e,r,t){var n=e.constructor;switch(r){case cr:return It(e);case rr:case nr:return new n(+e);case fr:return Qt(e,t);case dr:case pr:case vr:case yr:case mr:case gr:case hr:case br:case wr:return uo(e,t);case ar:return new n;case or:case ir:return new n(e);case sr:return er(e);case lr:return new n;case ur:return tr(e)}}var jr="[object Map]";function qr(e){return jt(e)&&Ue(e)==jr}var Ze=Fe&&Fe.isMap,Ar=Ze?Bt(Ze):qr;const xr=Ar;var Or="[object Set]";function Er(e){return jt(e)&&Ue(e)==Or}var Te=Fe&&Fe.isSet,kr=Te?Bt(Te):Er;const Sr=kr;var _r=1,Mr=2,Pr=4,He="[object Arguments]",Cr="[object Array]",Rr="[object Boolean]",Ir="[object Date]",Br="[object Error]",Qe="[object Function]",$r="[object GeneratorFunction]",Lr="[object Map]",Dr="[object Number]",Ke="[object Object]",zr="[object RegExp]",Nr="[object Set]",Wr="[object String]",Vr="[object Symbol]",Ur="[object WeakMap]",Yr="[object ArrayBuffer]",Xr="[object DataView]",Gr="[object Float32Array]",Jr="[object Float64Array]",Zr="[object Int8Array]",Tr="[object Int16Array]",Hr="[object Int32Array]",Qr="[object Uint8Array]",Kr="[object Uint8ClampedArray]",en="[object Uint16Array]",tn="[object Uint32Array]",k={};k[He]=k[Cr]=k[Yr]=k[Xr]=k[Rr]=k[Ir]=k[Gr]=k[Jr]=k[Zr]=k[Tr]=k[Hr]=k[Lr]=k[Dr]=k[Ke]=k[zr]=k[Nr]=k[Wr]=k[Vr]=k[Qr]=k[Kr]=k[en]=k[tn]=!0,k[Br]=k[Qe]=k[Ur]=!1,oe=function(e,r,t,n,a,o){var s,l=r&_r,m=r&Mr,h=r&Pr;if(t&&(s=a?t(e,n,a,o):t(e)),s!==void 0)return s;if(!Aa(e))return e;var c=wt(e);if(c){if(s=Ht(e),!l)return co(e,s)}else{var y=Ue(e),d=y==Qe||y==$r;if(fo(e))return po(e,l);if(y==Ke||y==He||d&&!a){if(s=m||d?{}:vo(e),!l)return m?Gt(e,Vt(s,e)):Ut(e,Wt(s,e))}else{if(!k[y])return a?e:{};s=Fr(e,y,l)}}o||(o=new yo);var q=o.get(e);if(q)return q;o.set(e,s),Sr(e)?e.forEach(function(i){s.add(oe(i,r,t,i,e,o))}):xr(e)&&e.forEach(function(i,x){s.set(x,oe(i,r,t,x,e,o))});var v=h?m?Jt:mo:m?Ve:Ct,b=c?void 0:v(e);return Nt(b||e,function(i,x){b&&(x=i,i=e[x]),xa(s,x,oe(i,r,t,x,e,o))}),s};var rn=4;function et(e){return oe(e,rn)}const nn=(...e)=>r=>{e.forEach(t=>{Ce(t)?t(r):t.value=r})},an=(e,r,t)=>{let n={offsetX:0,offsetY:0};const a=l=>{const m=l.clientX,h=l.clientY,{offsetX:c,offsetY:y}=n,d=e.value.getBoundingClientRect(),q=d.left,v=d.top,b=d.width,i=d.height,x=document.documentElement.clientWidth,p=document.documentElement.clientHeight,f=-q+c,j=-v+y,M=x-q-b+c,A=p-v-i+y,C=$=>{const O=Math.min(Math.max(c+$.clientX-m,f),M),I=Math.min(Math.max(y+$.clientY-h,j),A);n={offsetX:O,offsetY:I},e.value.style.transform=`translate(${ce(O)}, ${ce(I)})`},E=()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",C),document.addEventListener("mouseup",E)},o=()=>{r.value&&e.value&&r.value.addEventListener("mousedown",a)},s=()=>{r.value&&e.value&&r.value.removeEventListener("mousedown",a)};me(()=>{Oa(()=>{t.value?o():s()})}),Re(()=>{s()})},on=(e,r={})=>{Ea(e)||ht("[useLockscreen]","You need to pass a ref param to this function");const t=r.ns||ee("popup"),n=ka(()=>t.bm("parent","hidden"));if(!qt||At(document.body,n.value))return;let a=0,o=!1,s="0";const l=()=>{setTimeout(()=>{Pa(document==null?void 0:document.body,n.value),o&&document&&(document.body.style.width=s)},200)};T(e,m=>{if(!m){l();return}o=!At(document.body,n.value),o&&(s=document.body.style.width),a=go(t.namespace.value);const h=document.documentElement.clientHeight<document.body.scrollHeight,c=Sa(document.body,"overflowY");a>0&&(h||c==="scroll")&&o&&(document.body.style.width=`calc(100% - ${a}px)`),_a(document.body,n.value)}),Ma(()=>l())},tt=e=>{if(!e)return{onClick:Ie,onMousedown:Ie,onMouseup:Ie};let r=!1,t=!1;return{onClick:n=>{r&&t&&e(n),r=t=!1},onMousedown:n=>{r=n.target===n.currentTarget},onMouseup:n=>{t=n.target===n.currentTarget}}},sn=te({size:{type:String,values:xt},disabled:Boolean}),ln=te({...sn,model:Object,rules:{type:re(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:{type:Boolean,default:!1},scrollToError:Boolean,scrollIntoViewOptions:{type:[Object,Boolean]}}),un={validate:(e,r,t)=>(Ca(e)||Be(e))&&$e(r)&&Be(t)};function cn(){const e=D([]),r=_(()=>{if(!e.value.length)return"0";const o=Math.max(...e.value);return o?`${o}px`:""});function t(o){const s=e.value.indexOf(o);return s===-1&&r.value,s}function n(o,s){if(o&&s){const l=t(s);e.value.splice(l,1,o)}else o&&e.value.push(o)}function a(o){const s=t(o);s>-1&&e.value.splice(s,1)}return{autoLabelWidth:r,registerLabelWidth:n,deregisterLabelWidth:a}}const pe=(e,r)=>{const t=je(r);return t.length>0?e.filter(n=>n.prop&&t.includes(n.prop)):e},fn="ElForm",dn=Y({name:fn}),pn=Y({...dn,props:ln,emits:un,setup(e,{expose:r,emit:t}){const n=e,a=[],o=Pt(),s=ee("form"),l=_(()=>{const{labelPosition:p,inline:f}=n;return[s.b(),s.m(o.value||"default"),{[s.m(`label-${p}`)]:p,[s.m("inline")]:f}]}),m=p=>{a.push(p)},h=p=>{p.prop&&a.splice(a.indexOf(p),1)},c=(p=[])=>{n.model&&pe(a,p).forEach(f=>f.resetField())},y=(p=[])=>{pe(a,p).forEach(f=>f.clearValidate())},d=_(()=>!!n.model),q=p=>{if(a.length===0)return[];const f=pe(a,p);return f.length?f:[]},v=async p=>i(void 0,p),b=async(p=[])=>{if(!d.value)return!1;const f=q(p);if(f.length===0)return!0;let j={};for(const M of f)try{await M.validate("")}catch(A){j={...j,...A}}return Object.keys(j).length===0?!0:Promise.reject(j)},i=async(p=[],f)=>{const j=!Ce(f);try{const M=await b(p);return M===!0&&(f==null||f(M)),M}catch(M){if(M instanceof Error)throw M;const A=M;return n.scrollToError&&x(Object.keys(A)[0]),f==null||f(!1,A),j&&Promise.reject(A)}},x=p=>{var f;const j=pe(a,p)[0];j&&((f=j.$el)==null||f.scrollIntoView(n.scrollIntoViewOptions))};return T(()=>n.rules,()=>{n.validateOnRuleChange&&v().catch(p=>wa())},{deep:!0}),Le(Me,Ot({...Et(n),emit:t,resetFields:c,clearValidate:y,validateField:i,addField:m,removeField:h,...cn()})),r({validate:v,validateField:i,resetFields:c,clearValidate:y,scrollToField:x}),(p,f)=>(G(),fe("form",{class:W(u(l))},[N(p.$slots,"default")],2))}});var vn=ge(pn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Z.apply(this,arguments)}function yn(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,se(e,r)}function qe(e){return qe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},qe(e)}function se(e,r){return se=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},se(e,r)}function mn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ve(e,r,t){return mn()?ve=Reflect.construct.bind():ve=function(n,a,o){var s=[null];s.push.apply(s,a);var l=Function.bind.apply(n,s),m=new l;return o&&se(m,o.prototype),m},ve.apply(null,arguments)}function gn(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function Ae(e){var r=typeof Map=="function"?new Map:void 0;return Ae=function(t){if(t===null||!gn(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof r<"u"){if(r.has(t))return r.get(t);r.set(t,n)}function n(){return ve(t,arguments,qe(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),se(n,t)},Ae(e)}var hn=/%[sdj%]/g,bn=function(){};typeof process<"u"&&process.env;function xe(e){if(!e||!e.length)return null;var r={};return e.forEach(function(t){var n=t.field;r[n]=r[n]||[],r[n].push(t)}),r}function z(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var a=0,o=t.length;if(typeof e=="function")return e.apply(null,t);if(typeof e=="string"){var s=e.replace(hn,function(l){if(l==="%%")return"%";if(a>=o)return l;switch(l){case"%s":return String(t[a++]);case"%d":return Number(t[a++]);case"%j":try{return JSON.stringify(t[a++])}catch{return"[Circular]"}break;default:return l}});return s}return e}function wn(e){return e==="string"||e==="url"||e==="hex"||e==="email"||e==="date"||e==="pattern"}function P(e,r){return!!(e==null||r==="array"&&Array.isArray(e)&&!e.length||wn(r)&&typeof e=="string"&&!e)}function Fn(e,r,t){var n=[],a=0,o=e.length;function s(l){n.push.apply(n,l||[]),a++,a===o&&t(n)}e.forEach(function(l){r(l,s)})}function rt(e,r,t){var n=0,a=e.length;function o(s){if(s&&s.length){t(s);return}var l=n;n=n+1,l<a?r(e[l],o):t([])}o([])}function jn(e){var r=[];return Object.keys(e).forEach(function(t){r.push.apply(r,e[t]||[])}),r}var nt=function(e){yn(r,e);function r(t,n){var a;return a=e.call(this,"Async Validation Error")||this,a.errors=t,a.fields=n,a}return r}(Ae(Error));function qn(e,r,t,n,a){if(r.first){var o=new Promise(function(d,q){var v=function(i){return n(i),i.length?q(new nt(i,xe(i))):d(a)},b=jn(e);rt(b,t,v)});return o.catch(function(d){return d}),o}var s=r.firstFields===!0?Object.keys(e):r.firstFields||[],l=Object.keys(e),m=l.length,h=0,c=[],y=new Promise(function(d,q){var v=function(b){if(c.push.apply(c,b),h++,h===m)return n(c),c.length?q(new nt(c,xe(c))):d(a)};l.length||(n(c),d(a)),l.forEach(function(b){var i=e[b];s.indexOf(b)!==-1?rt(i,t,v):Fn(i,t,v)})});return y.catch(function(d){return d}),y}function An(e){return!!(e&&e.message!==void 0)}function xn(e,r){for(var t=e,n=0;n<r.length;n++){if(t==null)return t;t=t[r[n]]}return t}function at(e,r){return function(t){var n;return e.fullFields?n=xn(r,e.fullFields):n=r[t.field||e.fullField],An(t)?(t.field=t.field||e.fullField,t.fieldValue=n,t):{message:typeof t=="function"?t():t,fieldValue:n,field:t.field||e.fullField}}}function ot(e,r){if(r){for(var t in r)if(r.hasOwnProperty(t)){var n=r[t];typeof n=="object"&&typeof e[t]=="object"?e[t]=Z({},e[t],n):e[t]=n}}return e}var st=function(e,r,t,n,a,o){e.required&&(!t.hasOwnProperty(e.field)||P(r,o||e.type))&&n.push(z(a.messages.required,e.fullField))},On=function(e,r,t,n,a){(/^\s+$/.test(r)||r==="")&&n.push(z(a.messages.whitespace,e.fullField))},ye,En=function(){if(ye)return ye;var e="[a-fA-F\\d:]",r=function(f){return f&&f.includeBoundaries?"(?:(?<=\\s|^)(?="+e+")|(?<="+e+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",a=(`
(?:
(?:`+n+":){7}(?:"+n+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+n+":){6}(?:"+t+"|:"+n+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+n+":){5}(?::"+t+"|(?::"+n+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+n+":){4}(?:(?::"+n+"){0,1}:"+t+"|(?::"+n+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+n+":){3}(?:(?::"+n+"){0,2}:"+t+"|(?::"+n+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+n+":){2}(?:(?::"+n+"){0,3}:"+t+"|(?::"+n+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+n+":){1}(?:(?::"+n+"){0,4}:"+t+"|(?::"+n+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+n+"){0,5}:"+t+"|(?::"+n+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),o=new RegExp("(?:^"+t+"$)|(?:^"+a+"$)"),s=new RegExp("^"+t+"$"),l=new RegExp("^"+a+"$"),m=function(f){return f&&f.exact?o:new RegExp("(?:"+r(f)+t+r(f)+")|(?:"+r(f)+a+r(f)+")","g")};m.v4=function(f){return f&&f.exact?s:new RegExp(""+r(f)+t+r(f),"g")},m.v6=function(f){return f&&f.exact?l:new RegExp(""+r(f)+a+r(f),"g")};var h="(?:(?:[a-z]+:)?//)",c="(?:\\S+(?::\\S*)?@)?",y=m.v4().source,d=m.v6().source,q="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",v="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",b="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",i="(?::\\d{2,5})?",x='(?:[/?#][^\\s"]*)?',p="(?:"+h+"|www\\.)"+c+"(?:localhost|"+y+"|"+d+"|"+q+v+b+")"+i+x;return ye=new RegExp("(?:^"+p+"$)","i"),ye},lt={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},le={integer:function(e){return le.number(e)&&parseInt(e,10)===e},float:function(e){return le.number(e)&&!le.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!le.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(lt.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(En())},hex:function(e){return typeof e=="string"&&!!e.match(lt.hex)}},kn=function(e,r,t,n,a){if(e.required&&r===void 0){st(e,r,t,n,a);return}var o=["integer","float","array","regexp","object","method","email","number","date","url","hex"],s=e.type;o.indexOf(s)>-1?le[s](r)||n.push(z(a.messages.types[s],e.fullField,e.type)):s&&typeof r!==e.type&&n.push(z(a.messages.types[s],e.fullField,e.type))},Sn=function(e,r,t,n,a){var o=typeof e.len=="number",s=typeof e.min=="number",l=typeof e.max=="number",m=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,h=r,c=null,y=typeof r=="number",d=typeof r=="string",q=Array.isArray(r);if(y?c="number":d?c="string":q&&(c="array"),!c)return!1;q&&(h=r.length),d&&(h=r.replace(m,"_").length),o?h!==e.len&&n.push(z(a.messages[c].len,e.fullField,e.len)):s&&!l&&h<e.min?n.push(z(a.messages[c].min,e.fullField,e.min)):l&&!s&&h>e.max?n.push(z(a.messages[c].max,e.fullField,e.max)):s&&l&&(h<e.min||h>e.max)&&n.push(z(a.messages[c].range,e.fullField,e.min,e.max))},H="enum",_n=function(e,r,t,n,a){e[H]=Array.isArray(e[H])?e[H]:[],e[H].indexOf(r)===-1&&n.push(z(a.messages[H],e.fullField,e[H].join(", ")))},Mn=function(e,r,t,n,a){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||n.push(z(a.messages.pattern.mismatch,e.fullField,r,e.pattern));else if(typeof e.pattern=="string"){var o=new RegExp(e.pattern);o.test(r)||n.push(z(a.messages.pattern.mismatch,e.fullField,r,e.pattern))}}},F={required:st,whitespace:On,type:kn,range:Sn,enum:_n,pattern:Mn},Pn=function(e,r,t,n,a){var o=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(P(r,"string")&&!e.required)return t();F.required(e,r,n,o,a,"string"),P(r,"string")||(F.type(e,r,n,o,a),F.range(e,r,n,o,a),F.pattern(e,r,n,o,a),e.whitespace===!0&&F.whitespace(e,r,n,o,a))}t(o)},Cn=function(e,r,t,n,a){var o=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(P(r)&&!e.required)return t();F.required(e,r,n,o,a),r!==void 0&&F.type(e,r,n,o,a)}t(o)},Rn=function(e,r,t,n,a){var o=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(r===""&&(r=void 0),P(r)&&!e.required)return t();F.required(e,r,n,o,a),r!==void 0&&(F.type(e,r,n,o,a),F.range(e,r,n,o,a))}t(o)},In=function(e,r,t,n,a){var o=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(P(r)&&!e.required)return t();F.required(e,r,n,o,a),r!==void 0&&F.type(e,r,n,o,a)}t(o)},Bn=function(e,r,t,n,a){var o=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(P(r)&&!e.required)return t();F.required(e,r,n,o,a),P(r)||F.type(e,r,n,o,a)}t(o)},$n=function(e,r,t,n,a){var o=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(P(r)&&!e.required)return t();F.required(e,r,n,o,a),r!==void 0&&(F.type(e,r,n,o,a),F.range(e,r,n,o,a))}t(o)},Ln=function(e,r,t,n,a){var o=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(P(r)&&!e.required)return t();F.required(e,r,n,o,a),r!==void 0&&(F.type(e,r,n,o,a),F.range(e,r,n,o,a))}t(o)},Dn=function(e,r,t,n,a){var o=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(r==null&&!e.required)return t();F.required(e,r,n,o,a,"array"),r!=null&&(F.type(e,r,n,o,a),F.range(e,r,n,o,a))}t(o)},zn=function(e,r,t,n,a){var o=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(P(r)&&!e.required)return t();F.required(e,r,n,o,a),r!==void 0&&F.type(e,r,n,o,a)}t(o)},Nn="enum",Wn=function(e,r,t,n,a){var o=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(P(r)&&!e.required)return t();F.required(e,r,n,o,a),r!==void 0&&F[Nn](e,r,n,o,a)}t(o)},Vn=function(e,r,t,n,a){var o=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(P(r,"string")&&!e.required)return t();F.required(e,r,n,o,a),P(r,"string")||F.pattern(e,r,n,o,a)}t(o)},Un=function(e,r,t,n,a){var o=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(P(r,"date")&&!e.required)return t();if(F.required(e,r,n,o,a),!P(r,"date")){var l;r instanceof Date?l=r:l=new Date(r),F.type(e,l,n,o,a),l&&F.range(e,l.getTime(),n,o,a)}}t(o)},Yn=function(e,r,t,n,a){var o=[],s=Array.isArray(r)?"array":typeof r;F.required(e,r,n,o,a,s),t(o)},Oe=function(e,r,t,n,a){var o=e.type,s=[],l=e.required||!e.required&&n.hasOwnProperty(e.field);if(l){if(P(r,o)&&!e.required)return t();F.required(e,r,n,s,a,o),P(r,o)||F.type(e,r,n,s,a)}t(s)},Xn=function(e,r,t,n,a){var o=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(P(r)&&!e.required)return t();F.required(e,r,n,o,a)}t(o)},ie={string:Pn,method:Cn,number:Rn,boolean:In,regexp:Bn,integer:$n,float:Ln,array:Dn,object:zn,enum:Wn,pattern:Vn,date:Un,url:Oe,hex:Oe,email:Oe,required:Yn,any:Xn};function Ee(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var ke=Ee(),ue=function(){function e(t){this.rules=null,this._messages=ke,this.define(t)}var r=e.prototype;return r.define=function(t){var n=this;if(!t)throw new Error("Cannot configure a schema with no rules");if(typeof t!="object"||Array.isArray(t))throw new Error("Rules must be an object");this.rules={},Object.keys(t).forEach(function(a){var o=t[a];n.rules[a]=Array.isArray(o)?o:[o]})},r.messages=function(t){return t&&(this._messages=ot(Ee(),t)),this._messages},r.validate=function(t,n,a){var o=this;n===void 0&&(n={}),a===void 0&&(a=function(){});var s=t,l=n,m=a;if(typeof l=="function"&&(m=l,l={}),!this.rules||Object.keys(this.rules).length===0)return m&&m(null,s),Promise.resolve(s);function h(v){var b=[],i={};function x(f){if(Array.isArray(f)){var j;b=(j=b).concat.apply(j,f)}else b.push(f)}for(var p=0;p<v.length;p++)x(v[p]);b.length?(i=xe(b),m(b,i)):m(null,s)}if(l.messages){var c=this.messages();c===ke&&(c=Ee()),ot(c,l.messages),l.messages=c}else l.messages=this.messages();var y={},d=l.keys||Object.keys(this.rules);d.forEach(function(v){var b=o.rules[v],i=s[v];b.forEach(function(x){var p=x;typeof p.transform=="function"&&(s===t&&(s=Z({},s)),i=s[v]=p.transform(i)),typeof p=="function"?p={validator:p}:p=Z({},p),p.validator=o.getValidationMethod(p),p.validator&&(p.field=v,p.fullField=p.fullField||v,p.type=o.getType(p),y[v]=y[v]||[],y[v].push({rule:p,value:i,source:s,field:v}))})});var q={};return qn(y,l,function(v,b){var M;var i=v.rule,x=(i.type==="object"||i.type==="array")&&(typeof i.fields=="object"||typeof i.defaultField=="object");x=x&&(i.required||!i.required&&v.value),i.field=v.field;function p(A,C){return Z({},C,{fullField:i.fullField+"."+A,fullFields:i.fullFields?[].concat(i.fullFields,[A]):[A]})}function f(A){A===void 0&&(A=[]);var C=Array.isArray(A)?A:[A];!l.suppressWarning&&C.length&&e.warning("async-validator:",C),C.length&&i.message!==void 0&&(C=[].concat(i.message));var E=C.map(at(i,s));if(l.first&&E.length)return q[i.field]=1,b(E);if(!x)b(E);else{if(i.required&&!v.value)return i.message!==void 0?E=[].concat(i.message).map(at(i,s)):l.error&&(E=[l.error(i,z(l.messages.required,i.field))]),b(E);var $={};i.defaultField&&Object.keys(v.value).map(function(R){$[R]=i.defaultField}),$=Z({},$,v.rule.fields);var O={};Object.keys($).forEach(function(R){var S=$[R],V=Array.isArray(S)?S:[S];O[R]=V.map(p.bind(null,R))});var I=new e(O);I.messages(l.messages),v.rule.options&&(v.rule.options.messages=l.messages,v.rule.options.error=l.error),I.validate(v.value,v.rule.options||l,function(R){var S=[];E&&E.length&&S.push.apply(S,E),R&&R.length&&S.push.apply(S,R),b(S.length?S:null)})}}var j;if(i.asyncValidator)j=i.asyncValidator(i,v.value,f,v.source,l);else if(i.validator){try{j=i.validator(i,v.value,f,v.source,l)}catch(A){(M=console.error)==null||M.call(console,A),l.suppressValidatorError||setTimeout(function(){throw A},0),f(A.message)}j===!0?f():j===!1?f(typeof i.message=="function"?i.message(i.fullField||i.field):i.message||(i.fullField||i.field)+" fails"):j instanceof Array?f(j):j instanceof Error&&f(j.message)}j&&j.then&&j.then(function(){return f()},function(A){return f(A)})},function(v){h(v)},s)},r.getType=function(t){if(t.type===void 0&&t.pattern instanceof RegExp&&(t.type="pattern"),typeof t.validator!="function"&&t.type&&!ie.hasOwnProperty(t.type))throw new Error(z("Unknown rule type %s",t.type));return t.type||"string"},r.getValidationMethod=function(t){if(typeof t.validator=="function")return t.validator;var n=Object.keys(t),a=n.indexOf("message");return a!==-1&&n.splice(a,1),n.length===1&&n[0]==="required"?ie.required:ie[this.getType(t)]||void 0},e}();ue.register=function(e,r){if(typeof r!="function")throw new Error("Cannot register a validator by type, validator is not a function");ie[e]=r},ue.warning=bn,ue.messages=ke,ue.validators=ie;const Gn=["","error","validating","success"],Jn=te({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:re([String,Array])},required:{type:Boolean,default:void 0},rules:{type:re([Object,Array])},error:String,validateStatus:{type:String,values:Gn},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:xt}}),it="ElLabelWrap";var Zn=Y({name:it,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(e,{slots:r}){const t=ne(Me,void 0),n=ne(Pe);n||ht(it,"usage: <el-form-item><label-wrap /></el-form-item>");const a=ee("form"),o=D(),s=D(0),l=()=>{var c;if((c=o.value)!=null&&c.firstElementChild){const y=window.getComputedStyle(o.value.firstElementChild).width;return Math.ceil(Number.parseFloat(y))}else return 0},m=(c="update")=>{De(()=>{r.default&&e.isAutoWidth&&(c==="update"?s.value=l():c==="remove"&&(t==null||t.deregisterLabelWidth(s.value)))})},h=()=>m("update");return me(()=>{h()}),Re(()=>{m("remove")}),Ra(()=>h()),T(s,(c,y)=>{e.updateAll&&(t==null||t.registerLabelWidth(c,y))}),Ia(_(()=>{var c,y;return(y=(c=o.value)==null?void 0:c.firstElementChild)!=null?y:null}),h),()=>{var c,y;if(!r)return null;const{isAutoWidth:d}=e;if(d){const q=t==null?void 0:t.autoLabelWidth,v=n==null?void 0:n.hasLabel,b={};if(v&&q&&q!=="auto"){const i=Math.max(0,Number.parseInt(q,10)-s.value),x=t.labelPosition==="left"?"marginRight":"marginLeft";i&&(b[x]=`${i}px`)}return J("div",{ref:o,class:[a.be("item","label-wrap")],style:b},[(c=r.default)==null?void 0:c.call(r)])}else return J(Ba,{ref:o},[(y=r.default)==null?void 0:y.call(r)])}}});const Tn=["role","aria-labelledby"],Hn=Y({name:"ElFormItem"}),Qn=Y({...Hn,props:Jn,setup(e,{expose:r}){const t=e,n=kt(),a=ne(Me,void 0),o=ne(Pe,void 0),s=Pt(void 0,{formItem:!1}),l=ee("form-item"),m=We().value,h=D([]),c=D(""),y=$a(c,100),d=D(""),q=D();let v,b=!1;const i=_(()=>{if((a==null?void 0:a.labelPosition)==="top")return{};const g=ce(t.labelWidth||(a==null?void 0:a.labelWidth)||"");return g?{width:g}:{}}),x=_(()=>{if((a==null?void 0:a.labelPosition)==="top"||a!=null&&a.inline)return{};if(!t.label&&!t.labelWidth&&$)return{};const g=ce(t.labelWidth||(a==null?void 0:a.labelWidth)||"");return!t.label&&!n.label?{marginLeft:g}:{}}),p=_(()=>[l.b(),l.m(s.value),l.is("error",c.value==="error"),l.is("validating",c.value==="validating"),l.is("success",c.value==="success"),l.is("required",V.value||t.required),l.is("no-asterisk",a==null?void 0:a.hideRequiredAsterisk),(a==null?void 0:a.requireAsteriskPosition)==="right"?"asterisk-right":"asterisk-left",{[l.m("feedback")]:a==null?void 0:a.statusIcon}]),f=_(()=>$e(t.inlineMessage)?t.inlineMessage:(a==null?void 0:a.inlineMessage)||!1),j=_(()=>[l.e("error"),{[l.em("error","inline")]:f.value}]),M=_(()=>t.prop?Be(t.prop)?t.prop:t.prop.join("."):""),A=_(()=>!!(t.label||n.label)),C=_(()=>t.for||h.value.length===1?h.value[0]:void 0),E=_(()=>!C.value&&A.value),$=!!o,O=_(()=>{const g=a==null?void 0:a.model;if(!(!g||!t.prop))return ze(g,t.prop).value}),I=_(()=>{const{required:g}=t,w=[];t.rules&&w.push(...je(t.rules));const B=a==null?void 0:a.rules;if(B&&t.prop){const L=ze(B,t.prop).value;L&&w.push(...je(L))}if(g!==void 0){const L=w.map((U,K)=>[U,K]).filter(([U])=>Object.keys(U).includes("required"));if(L.length>0)for(const[U,K]of L)U.required!==g&&(w[K]={...U,required:g});else w.push({required:g})}return w}),R=_(()=>I.value.length>0),S=g=>I.value.filter(w=>!w.trigger||!g?!0:Array.isArray(w.trigger)?w.trigger.includes(g):w.trigger===g).map(({trigger:w,...B})=>B),V=_(()=>I.value.some(g=>g.required)),va=_(()=>{var g;return y.value==="error"&&t.showMessage&&((g=a==null?void 0:a.showMessage)!=null?g:!0)}),yt=_(()=>`${t.label||""}${(a==null?void 0:a.labelSuffix)||""}`),Q=g=>{c.value=g},ya=g=>{var w,B;const{errors:L,fields:U}=g;(!L||!U)&&console.error(g),Q("error"),d.value=L?(B=(w=L==null?void 0:L[0])==null?void 0:w.message)!=null?B:`${t.prop} is required`:"",a==null||a.emit("validate",t.prop,!1,d.value)},ma=()=>{Q("success"),a==null||a.emit("validate",t.prop,!0,"")},ga=async g=>{const w=M.value;return new ue({[w]:g}).validate({[w]:O.value},{firstFields:!0}).then(()=>(ma(),!0)).catch(B=>(ya(B),Promise.reject(B)))},mt=async(g,w)=>{if(b||!t.prop)return!1;const B=Ce(w);if(!R.value)return w==null||w(!1),!1;const L=S(g);return L.length===0?(w==null||w(!0),!0):(Q("validating"),ga(L).then(()=>(w==null||w(!0),!0)).catch(U=>{const{fields:K}=U;return w==null||w(!1,K),B?!1:Promise.reject(K)}))},Se=()=>{Q(""),d.value="",b=!1},gt=async()=>{const g=a==null?void 0:a.model;if(!g||!t.prop)return;const w=ze(g,t.prop);b=!0,w.value=et(v),await De(),Se(),b=!1},ha=g=>{h.value.includes(g)||h.value.push(g)},ba=g=>{h.value=h.value.filter(w=>w!==g)};T(()=>t.error,g=>{d.value=g||"",Q(g?"error":"")},{immediate:!0}),T(()=>t.validateStatus,g=>Q(g||""));const _e=Ot({...Et(t),$el:q,size:s,validateState:c,labelId:m,inputIds:h,isGroup:E,hasLabel:A,addInputId:ha,removeInputId:ba,resetField:gt,clearValidate:Se,validate:mt});return Le(Pe,_e),me(()=>{t.prop&&(a==null||a.addField(_e),v=et(O.value))}),Re(()=>{a==null||a.removeField(_e)}),r({size:s,validateMessage:d,validateState:c,validate:mt,clearValidate:Se,resetField:gt}),(g,w)=>{var B;return G(),fe("div",{ref_key:"formItemRef",ref:q,class:W(u(p)),role:u(E)?"group":void 0,"aria-labelledby":u(E)?u(m):void 0},[J(u(Zn),{"is-auto-width":u(i).width==="auto","update-all":((B=u(a))==null?void 0:B.labelWidth)==="auto"},{default:X(()=>[u(A)?(G(),he(St(u(C)?"label":"div"),{key:0,id:u(m),for:u(C),class:W(u(l).e("label")),style:be(u(i))},{default:X(()=>[N(g.$slots,"label",{label:u(yt)},()=>[La(Ne(u(yt)),1)])]),_:3},8,["id","for","class","style"])):de("v-if",!0)]),_:3},8,["is-auto-width","update-all"]),ae("div",{class:W(u(l).e("content")),style:be(u(x))},[N(g.$slots,"default"),J(Da,{name:`${u(l).namespace.value}-zoom-in-top`},{default:X(()=>[u(va)?N(g.$slots,"error",{key:0,error:d.value},()=>[ae("div",{class:W(u(j))},Ne(d.value),3)]):de("v-if",!0)]),_:3},8,["name"])],6)],10,Tn)}}});var ut=ge(Qn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);let ct,ft,dt;Dt=_t(vn,{FormItem:ut}),Lt=za(ut),ct=te({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:re([String,Array,Object])},zIndex:{type:re([String,Number])}}),ft={click:e=>e instanceof MouseEvent},dt="overlay";var Kn=Y({name:"ElOverlay",props:ct,emits:ft,setup(e,{slots:r,emit:t}){const n=ee(dt),a=m=>{t("click",m)},{onClick:o,onMousedown:s,onMouseup:l}=tt(e.customMaskEvent?void 0:a);return()=>e.mask?J("div",{class:[n.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:o,onMousedown:s,onMouseup:l},[N(r,"default")],Ye.STYLE|Ye.CLASS|Ye.PROPS,["onClick","onMouseup","onMousedown"]):Na("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[N(r,"default")])}});const ea=Kn,pt=Symbol("dialogInjectionKey"),vt=te({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:Wa},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),ta={close:()=>!0},ra=["aria-label"],na=["id"],aa=Y({name:"ElDialogContent"}),oa=Y({...aa,props:vt,emits:ta,setup(e){const r=e,{t}=Va(),{Close:n}=Ya,{dialogRef:a,headerRef:o,bodyId:s,ns:l,style:m}=ne(pt),{focusTrapRef:h}=ne(Fa),c=nn(h,a),y=_(()=>r.draggable);return an(a,o,y),(d,q)=>(G(),fe("div",{ref:u(c),class:W([u(l).b(),u(l).is("fullscreen",d.fullscreen),u(l).is("draggable",u(y)),u(l).is("align-center",d.alignCenter),{[u(l).m("center")]:d.center},d.customClass]),style:be(u(m)),tabindex:"-1"},[ae("header",{ref_key:"headerRef",ref:o,class:W(u(l).e("header"))},[N(d.$slots,"header",{},()=>[ae("span",{role:"heading",class:W(u(l).e("title"))},Ne(d.title),3)]),d.showClose?(G(),fe("button",{key:0,"aria-label":u(t)("el.dialog.close"),class:W(u(l).e("headerbtn")),type:"button",onClick:q[0]||(q[0]=v=>d.$emit("close"))},[J(u(Ua),{class:W(u(l).e("close"))},{default:X(()=>[(G(),he(St(d.closeIcon||u(n))))]),_:1},8,["class"])],10,ra)):de("v-if",!0)],2),ae("div",{id:u(s),class:W(u(l).e("body"))},[N(d.$slots,"default")],10,na),d.$slots.footer?(G(),fe("footer",{key:0,class:W(u(l).e("footer"))},[N(d.$slots,"footer")],2)):de("v-if",!0)],6))}});var sa=ge(oa,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const la=te({...vt,appendToBody:{type:Boolean,default:!1},beforeClose:{type:re(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),ia={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[$t]:e=>$e(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},ua=(e,r)=>{const t=Ja().emit,{nextZIndex:n}=Xa();let a="";const o=We(),s=We(),l=D(!1),m=D(!1),h=D(!1),c=D(e.zIndex||n());let y,d;const q=Ga("namespace",Za),v=_(()=>{const S={},V=`--${q.value}-dialog`;return e.fullscreen||(e.top&&(S[`${V}-margin-top`]=e.top),e.width&&(S[`${V}-width`]=ce(e.width))),S}),b=_(()=>e.alignCenter?{display:"flex"}:{});function i(){t("opened")}function x(){t("closed"),t($t,!1),e.destroyOnClose&&(h.value=!1)}function p(){t("close")}function f(){d==null||d(),y==null||y(),e.openDelay&&e.openDelay>0?{stop:y}=Mt(()=>C(),e.openDelay):C()}function j(){y==null||y(),d==null||d(),e.closeDelay&&e.closeDelay>0?{stop:d}=Mt(()=>E(),e.closeDelay):E()}function M(){function S(V){V||(m.value=!0,l.value=!1)}e.beforeClose?e.beforeClose(S):j()}function A(){e.closeOnClickModal&&M()}function C(){qt&&(l.value=!0)}function E(){l.value=!1}function $(){t("openAutoFocus")}function O(){t("closeAutoFocus")}function I(S){var V;((V=S.detail)==null?void 0:V.focusReason)==="pointer"&&S.preventDefault()}e.lockScroll&&on(l);function R(){e.closeOnPressEscape&&M()}return T(()=>e.modelValue,S=>{S?(m.value=!1,f(),h.value=!0,c.value=e.zIndex?c.value++:n(),De(()=>{t("open"),r.value&&(r.value.scrollTop=0)})):l.value&&j()}),T(()=>e.fullscreen,S=>{r.value&&(S?(a=r.value.style.transform,r.value.style.transform=""):r.value.style.transform=a)}),me(()=>{e.modelValue&&(l.value=!0,h.value=!0,f())}),{afterEnter:i,afterLeave:x,beforeLeave:p,handleClose:M,onModalClick:A,close:j,doClose:E,onOpenAutoFocus:$,onCloseAutoFocus:O,onCloseRequested:R,onFocusoutPrevented:I,titleId:o,bodyId:s,closed:m,style:v,overlayDialogStyle:b,rendered:h,visible:l,zIndex:c}},ca=["aria-label","aria-labelledby","aria-describedby"],fa=Y({name:"ElDialog",inheritAttrs:!1}),da=Y({...fa,props:la,emits:ia,setup(e,{expose:r}){const t=e,n=kt();bt({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},_(()=>!!n.title)),bt({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},_(()=>!!t.customClass));const a=ee("dialog"),o=D(),s=D(),l=D(),{visible:m,titleId:h,bodyId:c,style:y,overlayDialogStyle:d,rendered:q,zIndex:v,afterEnter:b,afterLeave:i,beforeLeave:x,handleClose:p,onModalClick:f,onOpenAutoFocus:j,onCloseAutoFocus:M,onCloseRequested:A,onFocusoutPrevented:C}=ua(t,o);Le(pt,{dialogRef:o,headerRef:s,bodyId:c,ns:a,rendered:q,style:y});const E=tt(f),$=_(()=>t.draggable&&!t.fullscreen);return r({visible:m,dialogContentRef:l}),(O,I)=>(G(),he(to,{to:"body",disabled:!O.appendToBody},[J(eo,{name:"dialog-fade",onAfterEnter:u(b),onAfterLeave:u(i),onBeforeLeave:u(x),persisted:""},{default:X(()=>[Ta(J(u(ea),{"custom-mask-event":"",mask:O.modal,"overlay-class":O.modalClass,"z-index":u(v)},{default:X(()=>[ae("div",{role:"dialog","aria-modal":"true","aria-label":O.title||void 0,"aria-labelledby":O.title?void 0:u(h),"aria-describedby":u(c),class:W(`${u(a).namespace.value}-overlay-dialog`),style:be(u(d)),onClick:I[0]||(I[0]=(...R)=>u(E).onClick&&u(E).onClick(...R)),onMousedown:I[1]||(I[1]=(...R)=>u(E).onMousedown&&u(E).onMousedown(...R)),onMouseup:I[2]||(I[2]=(...R)=>u(E).onMouseup&&u(E).onMouseup(...R))},[J(u(ja),{loop:"",trapped:u(m),"focus-start-el":"container",onFocusAfterTrapped:u(j),onFocusAfterReleased:u(M),onFocusoutPrevented:u(C),onReleaseRequested:u(A)},{default:X(()=>[u(q)?(G(),he(sa,Ha({key:0,ref_key:"dialogContentRef",ref:l},O.$attrs,{"custom-class":O.customClass,center:O.center,"align-center":O.alignCenter,"close-icon":O.closeIcon,draggable:u($),fullscreen:O.fullscreen,"show-close":O.showClose,title:O.title,onClose:u(p)}),Qa({header:X(()=>[O.$slots.title?N(O.$slots,"title",{key:1}):N(O.$slots,"header",{key:0,close:u(p),titleId:u(h),titleClass:u(a).e("title")})]),default:X(()=>[N(O.$slots,"default")]),_:2},[O.$slots.footer?{name:"footer",fn:X(()=>[N(O.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):de("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,ca)]),_:3},8,["mask","overlay-class","z-index"]),[[Ka,u(m)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var pa=ge(da,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);zt=_t(pa)});export{Lt as E,wo as __tla,Dt as a,zt as b,oe as c};