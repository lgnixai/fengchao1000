import{d as I,f as V,j as R,r as y,n as M,R as N,h as l,c as x,a as e,t as s,u as a,q as o,e as u,w as c,F as T,T as j,A as D,s as O,i as P,B as k,bO as b,G as w,E as U,J as q,aa as z,bP as G,ab as J,Y,p as $,g as H}from"./index-b105d502.js";/* empty css                   *//* empty css                 *//* empty css                */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                 *//* empty css                        *//* empty css                  */import{_ as K}from"./apply_empty-cdca3e85.js";import{g as Q}from"./addon-37cb5ad5.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";const X=""+new URL("app_store_default-c0531792.png",import.meta.url).href,f=d=>($("data-v-cd580eb6"),d=d(),H(),d),Z={class:"box-border pt-[68px] px-[76px] overview-top"},ee={key:0},te={class:"flex justify-between items-center"},se={class:"font-[600] text-[26px] text-[#222] leading-[37px]"},ae={class:"font-[500] text-[14px] text-[#222] leading-[20px] mt-[12px]"},oe=f(()=>e("div",{class:"mr-[9px] text-[#3F3F3F] iconfont iconxiazai01"},null,-1)),ne={class:"font-[600] text-[14px] text-[#222] leading-[20px]"},pe={class:"flex flex-wrap mt-[40px]"},ce=["onClick"],ie={class:"bg-[#F7FAFB] py-[18px] px-[24px] flex items-center app-item-head"},re=f(()=>e("div",{class:"image-slot"},[e("img",{class:"w-[40px] h-[40px] rounded-[8px]",src:X})],-1)),le={class:"py-[18px] px-[24px]"},de={class:"font-[600] leading-[1] text-[14px] text-[#222]"},_e={class:"text-[13px] text-[#6D7278] leading-[18px] mt-[6px] truncate"},xe=f(()=>e("div",{class:"w-[230px] mx-auto"},[e("img",{src:K,class:"max-w-full",alt:""})],-1)),ue={class:"flex items-center"},me=I({__name:"app_manage",setup(d){const v=V(),m=R(),n=y(!0),_=M({appList:[]}),h=y({});(()=>{n.value=!0,Q().then(p=>{Object.values(p.data).forEach((t,i)=>{t.type=="app"&&_.appList.push(t)}),m.routers.forEach((t,i)=>{t.children&&t.children.length?(t.name=b(t.children),h.value[t.meta.app]=b(t.children)):h.value[t.meta.app]=t.name}),n.value=!1}).catch(()=>{n.value=!1})})();const L=p=>{w.set({key:"menuAppStorage",data:p.key}),w.set({key:"plugMenuTypeStorage",data:""});const t=m.appMenuList;t.push(p.key),m.setAppMenuList(t);const i=h.value[p.key];v.push({name:i})},g=()=>{v.push("/app_manage/app_store")};return(p,t)=>{const i=U,F=q,E=z,S=G,A=J,B=Y;return N((l(),x("div",Z,[_.appList&&!n.value?(l(),x("div",ee,[e("div",te,[e("div",null,[e("div",se,s(a(o)("app")),1),e("div",ae,s(a(o)("versionInfo"))+" "+s(a(o)("currentVersion")),1)]),u(i,{onClick:g,class:"px-[15px]"},{default:c(()=>[oe,e("span",ne,s(a(o)("appStore")),1)]),_:1})]),e("div",pe,[(l(!0),x(T,null,j(_.appList,(r,C)=>(l(),x("div",{key:C,class:"app-item w-[280px] box-border !bg-[#fff] rounded-[6px] cursor-pointer mr-[20px] mb-[20px] overflow-hidden",onClick:fe=>L(r)},[e("div",ie,[u(F,{class:"w-[44px] h-[44px] rounded-[8px]",src:a(D)(r.icon),fit:"contain"},{error:c(()=>[re]),_:2},1032,["src"])]),e("div",le,[e("div",de,s(r.title),1),u(E,{class:"box-item",effect:"light",content:r.desc,placement:"bottom-start"},{default:c(()=>[e("div",_e,s(r.desc),1)]),_:2},1032,["content"])])],8,ce))),128)),!_.appList.length&&!n.value?(l(),O(A,{key:0,class:"mx-auto overview-empty"},{image:c(()=>[xe]),description:c(()=>[e("p",ue,[e("span",null,s(a(o)("descriptionLeft")),1),u(S,{type:"primary",onClick:g,class:"mx-[5px]"},{default:c(()=>[P(s(a(o)("link")),1)]),_:1}),e("span",null,s(a(o)("descriptionRight")),1)])]),_:1})):k("",!0)])])):k("",!0)])),[[B,n.value]])}}});const Ce=W(me,[["__scopeId","data-v-cd580eb6"]]);export{Ce as default};
