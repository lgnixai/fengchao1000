import{d as x,r as u,n as h,H as w,l as E,Q as i,h as N,s as j,w as d,e as n,a as o,aw as k,K as B,L as C,M as O}from"./index-b105d502.js";/* empty css                     *//* empty css                 *//* empty css                    */const R={class:"flex items-center"},$=o("span",{class:"ml-[10px] el-form-item__label"},"送",-1),F={class:"w-[70px]"},I=o("span",{class:"ml-[15px] el-form-item__label"},"元红包",-1),H=x({__name:"gift-balance",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(p,{expose:_,emit:f}){const c=p,t=u({is_use:0,money:""}),m=u(null),v={required:/[\S]+/,number:/^\d{0,10}$/,digit:/^\d{0,10}(.?\d{0,2})$/,special:/^\d{0,10}(.?\d{0,3})$/},y=h({money:[{validator:(s,e,l)=>{t.value.is_use&&(w.empty(e)?l("请输入红包金额"):isNaN(e)||!v.digit.test(e)?l("红包金额格式错误"):e<=0&&l("红包金额不能小于等于0")),l()},trigger:"blur"}]}),a=E({get(){return c.modelValue},set(s){f("update:modelValue",s)}});return i(()=>a.value,(s,e)=>{(!e||!Object.keys(e).length)&&Object.keys(s).length&&(t.value=a.value)},{immediate:!0}),i(()=>t.value,()=>{a.value=t.value},{deep:!0}),_({verify:async()=>{var e;let s=!0;return await((e=m.value)==null?void 0:e.validate(l=>{s=l})),s}}),(s,e)=>{const l=k,V=B,b=C,g=O;return N(),j(g,{ref_key:"formRef",ref:m,model:t.value,rules:y},{default:d(()=>[n(b,{label:"",prop:"money"},{default:d(()=>[o("div",R,[n(l,{modelValue:t.value.is_use,"onUpdate:modelValue":e[0]||(e[0]=r=>t.value.is_use=r),"true-label":1,"false-label":0,label:"",size:"large"},null,8,["modelValue"]),$,o("div",F,[n(V,{modelValue:t.value.money,"onUpdate:modelValue":e[1]||(e[1]=r=>t.value.money=r),modelModifiers:{trim:!0},maxlength:5,clearable:""},null,8,["modelValue"])]),I])]),_:1})]),_:1},8,["model","rules"])}}});export{H as default};
