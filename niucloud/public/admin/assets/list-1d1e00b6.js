import{d as Q,f as Z,x as ee,n as D,l as te,q as a,r as g,bF as ae,h as d,c as v,e as o,w as r,a as b,t as i,u as l,i as m,F as L,T as M,s as y,R as le,B as E,A as oe,bG as re,a5 as ne,E as se,K as ie,L as pe,ac as de,aD as ue,M as me,a7 as ce,ad as fe,al as ye,ae as _e,W as ge,X as ve,Y as be}from"./index-b105d502.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                     *//* empty css                  */import{c as he,d as Pe,m as ke,f as we,h as xe,b as Ce}from"./poster-972f12fe.js";const Te={class:"main-container"},Ve={class:"flex justify-between items-center"},De={class:"text-page-title"},Ee={key:0,class:"text-primary"},$e={key:1},Fe={class:"mt-[16px] flex justify-end"},Ne={class:"dialog-footer"},Be={key:0},Re=["src"],lt=Q({__name:"list",setup(Ue){const $=Z(),j=ee().meta.title,h=D({}),c=D({name:"",type:""}),I=te(()=>({name:[{required:!0,message:a("posterNamePlaceholder"),trigger:"blur"}],type:[{required:!0,message:a("posterTypePlaceholder"),trigger:"blur"}]})),F=g(),P=g(!1),A=async s=>{s&&await s.validate(async e=>{if(e){const u={type:c.type,name:c.name},x=$.resolve({path:"/poster/edit",query:u});window.open(x.href),P.value=!1,c.name="",c.type=""}})};(()=>{he({}).then(s=>{for(let e in h)delete h[e];for(const e in s.data)h[e]=s.data[e]})})();const n=D({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{name:"",type:""}}),N=g(),f=(s=1)=>{n.loading=!0,n.page=s,Pe({page:n.page,limit:n.limit,...n.searchParam}).then(e=>{n.loading=!1,n.data=e.data.data,n.total=e.data.total,re(n.page,n.limit,n.searchParam)}).catch(()=>{n.loading=!1})};f(ae(n.searchParam).page);const G=s=>{const e=$.resolve({path:"/poster/edit",query:{id:s.id}});window.open(e.href)},p=g(!1),B=(s,e)=>{p.value||(p.value=!0,ke({id:s,status:e}).then(u=>{f(),p.value=!1}))},K=s=>{p.value||(p.value=!0,we({id:s}).then(e=>{f(),p.value=!1}))},O=s=>{ne.confirm(a("diyPosterDeleteTips"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{p.value||(p.value=!0,xe(s).then(()=>{f(),p.value=!1}).catch(()=>{p.value=!1}))})},C=g(!1),T=g(""),W=s=>{p.value||(p.value=!0,Ce({id:s.id,type:s.type}).then(e=>{e.data&&(T.value=e.data,C.value=!0),p.value=!1}))},X=s=>{s&&(s.resetFields(),f())};return(s,e)=>{const u=se,x=ie,k=pe,V=de,R=ue,U=me,S=ce,_=fe,z=ye,Y=_e,H=ge,q=ve,J=be;return d(),v("div",Te,[o(S,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[b("div",Ve,[b("span",De,i(l(j)),1),o(u,{type:"primary",class:"w-[100px]",onClick:e[0]||(e[0]=t=>P.value=!0)},{default:r(()=>[m(i(l(a)("添加海报")),1)]),_:1})]),o(S,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:r(()=>[o(U,{inline:!0,model:n.searchParam,ref_key:"searchFormDiyPosterRef",ref:N},{default:r(()=>[o(k,{label:l(a)("posterName"),prop:"name"},{default:r(()=>[o(x,{modelValue:n.searchParam.name,"onUpdate:modelValue":e[1]||(e[1]=t=>n.searchParam.name=t),modelModifiers:{trim:!0},placeholder:l(a)("posterNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(k,{label:l(a)("posterType"),prop:"type"},{default:r(()=>[o(R,{modelValue:n.searchParam.type,"onUpdate:modelValue":e[2]||(e[2]=t=>n.searchParam.type=t),placeholder:l(a)("posterTypePlaceholder")},{default:r(()=>[o(V,{label:l(a)("all"),value:""},null,8,["label"]),(d(!0),v(L,null,M(h,t=>(d(),y(V,{label:t.name,value:t.type,key:t.type},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),o(k,null,{default:r(()=>[o(u,{type:"primary",onClick:e[3]||(e[3]=t=>f())},{default:r(()=>[m(i(l(a)("search")),1)]),_:1}),o(u,{onClick:e[4]||(e[4]=t=>X(N.value))},{default:r(()=>[m(i(l(a)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),le((d(),y(Y,{data:n.data,size:"large"},{empty:r(()=>[b("span",null,i(n.loading?"":l(a)("emptyData")),1)]),default:r(()=>[o(_,{prop:"name",label:l(a)("posterName"),"min-width":"120"},null,8,["label"]),o(_,{prop:"type_name",label:l(a)("posterType"),"min-width":"80"},null,8,["label"]),o(_,{label:l(a)("status"),"min-width":"80"},{default:r(({row:t})=>[t.status==1?(d(),y(z,{key:0,type:"success",onClick:w=>B(t.id,0),class:"cursor-pointer"},{default:r(()=>[m(i(l(a)("启用")),1)]),_:2},1032,["onClick"])):(d(),y(z,{key:1,type:"info",onClick:w=>B(t.id,1),class:"cursor-pointer"},{default:r(()=>[m(i(l(a)("未启用")),1)]),_:2},1032,["onClick"]))]),_:1},8,["label"]),o(_,{label:l(a)("isDefault"),"min-width":"80"},{default:r(({row:t})=>[t.is_default==1?(d(),v("span",Ee,i(l(a)("defaultPoster")),1)):(d(),v("span",$e,i(l(a)("noDefault")),1))]),_:1},8,["label"]),o(_,{prop:"update_time",label:l(a)("updateTime"),"min-width":"120"},null,8,["label"]),o(_,{label:l(a)("operation"),fixed:"right",align:"right","min-width":"160"},{default:r(({row:t})=>[o(u,{type:"primary",link:"",onClick:w=>W(t)},{default:r(()=>[m(i(l(a)("preview")),1)]),_:2},1032,["onClick"]),t.is_default==0?(d(),y(u,{key:0,type:"primary",link:"",onClick:w=>K(t.id)},{default:r(()=>[m(i(l(a)("modifyDefault")),1)]),_:2},1032,["onClick"])):E("",!0),o(u,{type:"primary",link:"",onClick:w=>G(t)},{default:r(()=>[m(i(l(a)("edit")),1)]),_:2},1032,["onClick"]),t.is_default==0?(d(),y(u,{key:1,type:"primary",link:"",onClick:w=>O(t.id)},{default:r(()=>[m(i(l(a)("delete")),1)]),_:2},1032,["onClick"])):E("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[J,n.loading]]),b("div",Fe,[o(H,{"current-page":n.page,"onUpdate:current-page":e[5]||(e[5]=t=>n.page=t),"page-size":n.limit,"onUpdate:page-size":e[6]||(e[6]=t=>n.limit=t),layout:"total, sizes, prev, pager, next, jumper",total:n.total,onSizeChange:e[7]||(e[7]=t=>f()),onCurrentChange:f},null,8,["current-page","page-size","total"])])]),_:1}),o(q,{modelValue:P.value,"onUpdate:modelValue":e[12]||(e[12]=t=>P.value=t),title:l(a)("addPosterTitle"),width:"350px"},{footer:r(()=>[b("span",Ne,[o(u,{onClick:e[10]||(e[10]=t=>P.value=!1)},{default:r(()=>[m(i(l(a)("cancel")),1)]),_:1}),o(u,{type:"primary",onClick:e[11]||(e[11]=t=>A(F.value))},{default:r(()=>[m(i(l(a)("confirm")),1)]),_:1})])]),default:r(()=>[o(U,{model:c,"label-width":"90px",ref_key:"formRef",ref:F,rules:l(I)},{default:r(()=>[o(k,{label:l(a)("posterName"),prop:"name"},{default:r(()=>[o(x,{modelValue:c.name,"onUpdate:modelValue":e[8]||(e[8]=t=>c.name=t),modelModifiers:{trim:!0},placeholder:l(a)("posterNamePlaceholder"),clearable:"",maxlength:"12","show-word-limit":"",class:"w-full"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(k,{label:l(a)("posterType"),prop:"type"},{default:r(()=>[o(R,{modelValue:c.type,"onUpdate:modelValue":e[9]||(e[9]=t=>c.type=t),placeholder:l(a)("posterTypePlaceholder"),class:"!w-full"},{default:r(()=>[(d(!0),v(L,null,M(h,t=>(d(),y(V,{label:t.name,value:t.type,key:t.type},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),o(q,{modelValue:C.value,"onUpdate:modelValue":e[13]||(e[13]=t=>C.value=t),title:l(a)("previewDialogTitle"),width:"400px",height:"640px"},{default:r(()=>[T.value?(d(),v("div",Be,[b("img",{src:l(oe)(T.value),class:"w-[360px] h-[640px]"},null,8,Re)])):E("",!0)]),_:1},8,["modelValue","title"])])}}});export{lt as default};
