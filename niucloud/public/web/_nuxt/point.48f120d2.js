import{_ as C,E as P,v as S,__tla as k}from"./el-loading.1bcc71c3.js";import{E,a as I,b as O,__tla as T}from"./el-select.5bcd2cda.js";import{f as U,a1 as q,o as p,k as m,S as A,m as r,w as c,l as s,t as B,u as e,bw as D,q as n,__tla as L}from"./entry.a7668388.js";import{__tla as N}from"./el-popper.be779017.js";import{__tla as Q}from"./el-input.436b7afb.js";import{_ as F}from"./_plugin-vue_export-helper.c27b6911.js";import{__tla as G}from"./use-form-item.5f33d493.js";import{__tla as H}from"./index.fc8f14c7.js";import{__tla as J}from"./index.2a1233df.js";import{__tla as K}from"./debounce.07c7c217.js";import{__tla as M}from"./vnode.53e96e04.js";let u,R=Promise.all([(()=>{try{return k}catch{}})(),(()=>{try{return T}catch{}})(),(()=>{try{return L}catch{}})(),(()=>{try{return N}catch{}})(),(()=>{try{return Q}catch{}})(),(()=>{try{return G}catch{}})(),(()=>{try{return H}catch{}})(),(()=>{try{return J}catch{}})(),(()=>{try{return K}catch{}})(),(()=>{try{return M}catch{}})()]).then(async()=>{const d={class:"w-full h-full bg-page pt-6"},f={class:"main-container flex justify-between"},h={class:"card-header"},g={class:"px-6"},y={class:"mt-[16px] flex justify-end"},b=U({__name:"point",setup(V){const t=q({page:1,limit:10,total:0,loading:!0,data:[]}),i=(a=1)=>{t.loading=!0,t.page=a,D({page:t.page,limit:t.limit}).then(l=>{t.loading=!1,t.data=l.data.data,t.total=l.data.total}).catch(()=>{t.loading=!1})};return i(),(a,l)=>{const v=C,_=E,w=I,x=O,z=P,j=S;return p(),m("div",d,[A((p(),m("div",f,[r(v),r(z,{class:"box-card flex-1 ml-4",shadow:"never"},{header:c(()=>[s("div",h,[s("span",null,B(("t"in a?a.t:e(n))("myPoint")),1)])]),default:c(()=>[s("div",g,[r(w,{data:t.data,stripe:""},{default:c(()=>[r(_,{prop:"account_type_name",label:("t"in a?a.t:e(n))("accountType"),width:"180"},null,8,["label"]),r(_,{prop:"account_data",label:("t"in a?a.t:e(n))("changeInAmount"),width:"120"},null,8,["label"]),r(_,{prop:"from_type_name",label:("t"in a?a.t:e(n))("modeOfOccurrence"),width:"180"},null,8,["label"]),r(_,{prop:"memo",label:("t"in a?a.t:e(n))("remark"),width:"180"},null,8,["label"]),r(_,{prop:"create_time",label:("t"in a?a.t:e(n))("occurrenceTime")},null,8,["label"])]),_:1},8,["data"]),s("div",y,[r(x,{"current-page":t.page,"onUpdate:currentPage":l[0]||(l[0]=o=>t.page=o),"page-size":t.limit,"onUpdate:pageSize":l[1]||(l[1]=o=>t.limit=o),layout:"total, sizes, prev, pager, next, jumper",total:t.total,onSizeChange:l[2]||(l[2]=o=>i()),onCurrentChange:i},null,8,["current-page","page-size","total"])])])]),_:1})])),[[j,t.loading]])])}}});u=F(b,[["__scopeId","data-v-4bf0c926"]])});export{R as __tla,u as default};
