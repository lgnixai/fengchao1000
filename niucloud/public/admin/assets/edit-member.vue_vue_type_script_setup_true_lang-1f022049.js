import{d as q,r as s,q as o,l as H,H as J,n as K,h as m,s as i,w as u,a as C,e as d,i as P,t as L,u as r,R as O,B as _,c as k,F as E,T as w,aJ as X,L as z,K as G,bI as Q,ac as W,aD as Z,M as ee,E as le,X as ae,Y as te}from"./index-b105d502.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                     *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                       */import oe from"./index-dab57221.js";import{A as re,B as me,C as ue}from"./member-7c80ec62.js";const ne={key:5},se={class:"text-sm text-gray-400"},ie={class:"dialog-footer"},Ue=q({__name:"edit-member",emits:["complete"],setup(de,{expose:N,emit:T}){const t=s(""),M=s(""),F=s(""),f=s(!1),c=s(!1),g=s(!1),x=s(null),A=s([{id:0,name:o("secrecySex")},{id:1,name:o("manSex")},{id:2,name:o("girlSex")}]),h=s(null);(async()=>{h.value=await(await me()).data})();const U=s([]);re().then(({data:p})=>{U.value=p});const Y=H(()=>({member_level:[{validator:(p,e,v)=>{J.empty(a.member_level)&&v(o("memberLevelPlaceholder")),v()}}]})),a=K({...{headimg:"",nickname:"",member_label:"",member_level:"",sex:"",birthday:""}}),I=async p=>{var e;await((e=x.value)==null?void 0:e.validate(v=>{if(v){if(c.value=!0,g.value)return;g.value=!0;let n=a[t.value];t.value=="member_label"&&(n=a[t.value]&&a[t.value].length?X(a[t.value]).join(",").split(","):"");const b=s({member_id:F.value,field:t.value,value:n});ue(b.value).then(S=>{c.value=!1,g.value=!1,f.value=!1,T("complete")}).catch(()=>{c.value=!1,g.value=!1})}}))};return N({showDialog:f,setDialogType:async(p=null)=>{c.value=!0,t.value=p.type,M.value=p.title,F.value=p.id,a[t.value]=p.data[t.value],t.value=="member_label"&&a[t.value]&&a[t.value].forEach((e,v)=>{let n=!1;for(let b=0;b<h.value.length;b++)if(h.value[b].label_id==e){n=!0;break}n?a[t.value][v]=Number.parseFloat(e):a[t.value].splice(v,1)}),c.value=!1}}),(p,e)=>{const v=oe,n=z,b=G,S=Q,V=W,D=Z,R=ee,B=le,$=ae,j=te;return m(),i($,{modelValue:f.value,"onUpdate:modelValue":e[8]||(e[8]=l=>f.value=l),title:M.value||r(o)("updateMember"),width:"500px","destroy-on-close":!0},{footer:u(()=>[C("span",ie,[d(B,{onClick:e[6]||(e[6]=l=>f.value=!1)},{default:u(()=>[P(L(r(o)("cancel")),1)]),_:1}),d(B,{type:"primary",loading:c.value,onClick:e[7]||(e[7]=l=>I(x.value))},{default:u(()=>[P(L(r(o)("confirm")),1)]),_:1},8,["loading"])])]),default:u(()=>[O((m(),i(R,{model:a,"label-width":"90px",rules:r(Y),ref_key:"formRef",ref:x,class:"page-form"},{default:u(()=>[t.value=="headimg"?(m(),i(n,{key:0,label:r(o)("headimg")},{default:u(()=>[d(v,{modelValue:a.headimg,"onUpdate:modelValue":e[0]||(e[0]=l=>a.headimg=l)},null,8,["modelValue"])]),_:1},8,["label"])):_("",!0),t.value=="nickname"?(m(),i(n,{key:1,label:r(o)("nickname")},{default:u(()=>[d(b,{modelValue:a.nickname,"onUpdate:modelValue":e[1]||(e[1]=l=>a.nickname=l),modelModifiers:{trim:!0},clearable:"",placeholder:r(o)("nickNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):_("",!0),t.value=="birthday"?(m(),i(n,{key:2,label:r(o)("birthday")},{default:u(()=>[d(S,{modelValue:a.birthday,"onUpdate:modelValue":e[2]||(e[2]=l=>a.birthday=l),"value-format":"YYYY-MM-DD",type:"date",placeholder:r(o)("birthdayTip")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):_("",!0),t.value=="sex"?(m(),i(n,{key:3,label:r(o)("sex")},{default:u(()=>[d(D,{modelValue:a.sex,"onUpdate:modelValue":e[3]||(e[3]=l=>a.sex=l),clearable:"",placeholder:r(o)("sexPlaceholder"),class:"input-width"},{default:u(()=>[(m(!0),k(E,null,w(A.value,(l,y)=>(m(),i(V,{label:l.name,value:l.id,key:y},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])):_("",!0),t.value=="member_label"?(m(),i(n,{key:4,label:r(o)("memberLabel")},{default:u(()=>[d(D,{modelValue:a.member_label,"onUpdate:modelValue":e[4]||(e[4]=l=>a.member_label=l),multiple:"","collapse-tags":"",placeholder:r(o)("memberLabelPlaceholder"),class:"input-width"},{default:u(()=>[(m(!0),k(E,null,w(h.value,(l,y)=>(m(),i(V,{label:l.label_name,value:l.label_id,key:y},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])):_("",!0),t.value=="member_level"?(m(),k("div",ne,[d(n,{label:r(o)("memberLevelUpdate"),prop:"member_level"},{default:u(()=>[d(D,{modelValue:a.member_level,"onUpdate:modelValue":e[5]||(e[5]=l=>a.member_level=l),placeholder:r(o)("memberLevelPlaceholder"),class:"input-width"},{default:u(()=>[d(V,{label:r(o)("memberLevelPlaceholder"),value:0},null,8,["label"]),(m(!0),k(E,null,w(U.value,(l,y)=>(m(),i(V,{label:l.level_name,value:l.level_id,key:y},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),C("div",se,L(r(o)("memberLevelUpdateTips")),1)]),_:1},8,["label"])])):_("",!0)]),_:1},8,["model","rules"])),[[j,c.value]])]),_:1},8,["modelValue","title"])}}});export{Ue as _};
