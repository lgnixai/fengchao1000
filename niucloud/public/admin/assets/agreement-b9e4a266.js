import{d as v,x as y,n as x,f as k,h as m,c as E,e as a,w as o,a as i,t as r,u as t,R as C,s as B,q as n,i as p,b_ as N,ad as T,E as D,ae as L,a7 as A,Y as R}from"./index-b105d502.js";/* empty css                   *//* empty css                *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                  *//* empty css                        *//* empty css               */const V={class:"main-container"},j={class:"flex justify-between items-center"},$={class:"text-page-title"},q={class:"mt-[20px]"},X=v({__name:"agreement",setup(z){const _=y().meta.title,e=x({loading:!0,data:[]});(()=>{e.loading=!0,e.data=[],N().then(l=>{Object.keys(l.data).forEach(d=>e.data.push(l.data[d])),e.loading=!1}).catch(()=>{e.loading=!1})})();const u=k(),g=l=>{u.push(`/setting/agreement/edit?key=${l.agreement_key}`)};return(l,d)=>{const s=T,h=D,f=L,b=A,w=R;return m(),E("div",V,[a(b,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[i("div",j,[i("span",$,r(t(_)),1)]),i("div",q,[C((m(),B(f,{data:e.data,size:"large"},{empty:o(()=>[i("span",null,r(e.loading?"":t(n)("emptyData")),1)]),default:o(()=>[a(s,{prop:"type_name",label:t(n)("typeName"),"min-width":"100","show-overflow-tooltip":!0},null,8,["label"]),a(s,{prop:"title",label:t(n)("title"),"min-width":"100","show-overflow-tooltip":!0},null,8,["label"]),a(s,{label:t(n)("updateTime"),"min-width":"180",align:"center"},{default:o(({row:c})=>[p(r(c.update_time||""),1)]),_:1},8,["label"]),a(s,{label:t(n)("operation"),align:"right",fixed:"right",width:"100"},{default:o(({row:c})=>[a(h,{type:"primary",link:"",onClick:Y=>g(c)},{default:o(()=>[p(r(t(n)("config")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[w,e.loading]])])]),_:1})])}}});export{X as default};
