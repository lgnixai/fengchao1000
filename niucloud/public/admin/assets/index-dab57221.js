import{d as M,l as B,n as h,Q as P,r as E,aK as q,a$ as _,h as o,c as r,a as i,v as A,$ as v,u as n,e as a,A as w,Z as J,s as T,w as D,t as F,q as L,F as y,T as K,B as N,J as Q,bk as G,ap as O}from"./index-b105d502.js";/* empty css                        */import{_ as H}from"./index.vue_vue_type_style_index_0_lang-754edd49.js";import{_ as U}from"./index.vue_vue_type_script_setup_true_lang-1d01a37b.js";/* empty css                 */import{S as W}from"./sortable.esm-be94e56d.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                  */import"./attachment-6065afe8.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-f5e778e2.js";/* empty css                     *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-928f90a0.js";/* empty css                   */const Y={class:"flex flex-wrap"},ee={key:0,class:"w-full h-full relative"},te={class:"w-full h-full flex items-center justify-center"},ie={class:"absolute z-[1] flex items-center justify-center w-full h-full inset-0 bg-black bg-opacity-60 operation"},le={class:"w-full h-full flex items-center justify-center flex-col content-wrap"},oe={class:"leading-none text-xs mt-[10px] text-secondary"},ae={class:"w-full h-full relative"},se={class:"w-full h-full flex items-center justify-center"},ne={class:"absolute z-[1] flex items-center justify-center w-full h-full inset-0 bg-black bg-opacity-60 operation"},re={class:"w-full h-full flex items-center justify-center flex-col content-wrap"},ce={class:"leading-none text-xs mt-[10px] text-secondary"},me=M({__name:"index",props:{type:{type:String,default:"image"},imageFit:{type:String,default:"contain"},modelValue:{type:String,default:""},width:{type:String,default:"100px"},height:{type:String,default:"100px"},imageText:{type:String},limit:{type:Number,default:1}},emits:["update:modelValue","change"],setup(l,{emit:b}){const c=l,m=B({get(){return c.modelValue},set(e){b("update:modelValue",e)}}),t=h({data:[]});let k=h([]);const f=()=>{m.value=O(t.data).toString(),k=O(t.data).map(e=>e.indexOf("data:image")!=-1?e:w(e))};P(()=>m.value,()=>{m.value.indexOf("data:image")!=-1?t.data=[m.value]:t.data=[...m.value.split(",").filter(e=>e)],f()},{immediate:!0});const x=B(()=>({width:c.width,height:c.height})),C=e=>{c.limit==1?(t.data.splice(0,1),e&&t.data.push(e.url)):(e.forEach(s=>{t.data.length<c.limit&&t.data.push(s.url)}),_(()=>{V()})),f(),_(()=>{b("change",m.value)})},S=(e=0)=>{t.data.splice(e,1),f()},u=h({show:!1,index:0}),z=(e=0)=>{u.show=!0,u.index=e},I=E(null);q(()=>{_(()=>{V()})}),E([]);const V=()=>{c.limit!=1&&W.create(I.value,{group:"image-wrap",animation:300,onEnd:e=>{const s=t.data[e.oldIndex];t.data.splice(e.oldIndex,1),t.data.splice(e.newIndex,0,s),f()}})};return(e,s)=>{const $=Q,d=U,j=H,R=G;return o(),r(y,null,[i("div",Y,[l.limit==1?(o(),r("div",{key:0,class:A(["rounded cursor-pointer overflow-hidden relative border border-solid border-color image-wrap mr-[10px]",{"rounded-full":l.type=="avatar"}]),style:v(n(x))},[t.data.length?(o(),r("div",ee,[i("div",te,[a($,{class:"w-full h-full",src:t.data[0].indexOf("data:image")!=-1?t.data[0]:n(w)(t.data[0]),fit:l.imageFit},null,8,["src","fit"])]),i("div",ie,[a(d,{name:"element ZoomIn",color:"#fff",size:"18px",class:"mr-[10px]",onClick:s[0]||(s[0]=p=>z())}),a(d,{name:"element Delete",color:"#fff",size:"18px",onClick:J(S,["stop"])},null,8,["onClick"])])])):(o(),T(j,{key:1,limit:l.limit,onConfirm:C},{default:D(()=>[i("div",le,[a(d,{name:"element Plus",size:"20px",color:"var(--el-text-color-secondary)"}),i("div",oe,F(l.imageText||n(L)("upload.root")),1)])]),_:1},8,["limit"]))],6)):(o(),r(y,{key:1},[i("div",{class:"flex flex-wrap",ref_key:"imgListRef",ref:I},[(o(!0),r(y,null,K(t.data,(p,g)=>(o(),r("div",{class:"rounded cursor-pointer overflow-hidden relative border border-solid border-color image-wrap mr-[10px] mb-[10px]",style:v(n(x)),key:p+g},[i("div",ae,[i("div",se,[a($,{src:n(w)(p),fit:"contain"},null,8,["src"])]),i("div",ne,[a(d,{name:"element ZoomIn",color:"#fff",size:"18px",class:"mr-[10px]",onClick:Z=>z(g)},null,8,["onClick"]),a(d,{name:"element Delete",color:"#fff",size:"18px",onClick:Z=>S(g)},null,8,["onClick"])])])],4))),128))],512),t.data.length<l.limit?(o(),r("div",{key:0,class:"rounded cursor-pointer overflow-hidden relative border border-dashed border-color",style:v(n(x))},[a(j,{limit:l.limit,onConfirm:C},{default:D(()=>[i("div",re,[a(d,{name:"element Plus",size:"20px",color:"var(--el-text-color-secondary)"}),i("div",ce,F(l.imageText||n(L)("upload.root")),1)])]),_:1},8,["limit"])],4)):N("",!0)],64))]),u.show?(o(),T(R,{key:0,"url-list":n(k),onClose:s[1]||(s[1]=p=>u.show=!1),"initial-index":u.index,"zoom-rate":1},null,8,["url-list","initial-index"])):N("",!0)],64)}}});const Ze=X(me,[["__scopeId","data-v-672bf006"]]);export{Ze as default};
