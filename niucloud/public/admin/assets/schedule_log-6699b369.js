import{d as ne,x as se,f as ie,n as j,r as d,h as y,c as A,e,w as l,a as u,t as r,u as o,q as a,F as re,T as ue,s as D,i as g,R as M,cw as ce,cE as de,a5 as B,cF as Y,U as me,cG as pe,aR as fe,a7 as _e,ac as ge,aD as ve,L as he,bI as be,E as xe,M as ye,aw as we,ad as ke,ae as Ce,W as Te,X as Ee,Y as Le}from"./index-b105d502.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                     *//* empty css                  *//* empty css                       *//* empty css                *//* empty css                       */const Ve={class:"main-container"},De={class:"text-large font-600 mr-3"},Be={class:"flex justify-between"},Pe={class:"mt-[20px]"},Re={class:"mb-[10px] flex items-center"},Fe={class:"mt-[16px] flex justify-end"},ze={class:"input-width"},Se={class:"input-width"},Ue={class:"input-width"},$e={class:"input-width"},je={class:"input-width"},Ae={class:"input-width"},Me={class:"dialog-footer"},ua=ne({__name:"schedule_log",setup(Ye){const E=se(),I=ie(),N=E.meta.title,q=()=>{I.push("/tools/schedule")},n=j({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{schedule_id:E.query.id,key:"",status:"all",execute_time:[]}}),P=d([]),R=d(),H=i=>{i&&(i.resetFields(),_())};(async()=>{P.value=await(await ce()).data})();const _=(i=1)=>{n.loading=!0,n.page=i,de({page:n.page,limit:n.limit,...n.searchParam}).then(t=>{n.loading=!1,n.data=t.data.data,n.total=t.data.total}).catch(()=>{n.loading=!1})};_();const w=d(!1),L=d(!0),c=d(!1),k=d(!1),C=d(!1),F={id:"",name:"",key:"",execute_result:"",status_name:"",class:"",job:"",execute_time:""},m=j({...F}),O=i=>{L.value=!0,Object.assign(m,F),i&&Object.keys(m).forEach(t=>{i[t]!=null&&(m[t]=i[t])}),L.value=!1,w.value=!0},G=i=>{B.confirm(a("deleteTips"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{c.value||(c.value=!0,Y({ids:i.id}).then(t=>{t.code==1&&_(),c.value=!1}).catch(()=>{c.value=!1}))})},b=d(),T=d(!1),W=i=>{T.value=!1,z.value.toggleAllSelection()},z=d(),v=d([]),X=i=>{v.value=i,b.value=!1,v.value.length>0&&v.value.length<n.data.length?T.value=!0:T.value=!1,v.value.length==n.data.length&&n.data.length&&v.value.length&&(b.value=!0)},J=()=>{if(v.value.length==0){me({type:"warning",message:`${a("batchEmptySelectedCronLogTips")}`});return}B.confirm(a("batchDeleteTips"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{if(c.value)return;c.value=!0,k.value=!0;const i=[];v.value.forEach(t=>{i.push(t.id)}),Y({ids:i}).then(()=>{_(),b.value=!1,c.value=!1,k.value=!1}).catch(()=>{c.value=!1,k.value=!1})})},K=()=>{B.confirm(a("clearAllTips"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{if(c.value)return;c.value=!0,C.value=!0;const i=E.query.id??"";pe({schedule_id:i}).then(()=>{_(),b.value=!1,c.value=!1,C.value=!1}).catch(()=>{c.value=!1,C.value=!1})})};return(i,t)=>{const Q=fe,V=_e,x=ge,S=ve,p=he,Z=be,h=xe,U=ye,ee=we,f=ke,ae=Ce,te=Te,le=Ee,$=Le;return y(),A("div",Ve,[e(V,{class:"card !border-none",shadow:"never"},{default:l(()=>[e(Q,{icon:i.ArrowLeft,onBack:t[0]||(t[0]=s=>q())},{content:l(()=>[u("span",De,r(o(N)),1)]),_:1},8,["icon"])]),_:1}),e(V,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[e(V,{class:"box-card !border-none mb-[10px] table-search-wrap",shadow:"never"},{default:l(()=>[u("div",Be,[e(U,{inline:!0,model:n.searchParam,ref_key:"searchFormRef",ref:R},{default:l(()=>[e(p,{label:o(a)("name"),prop:"key"},{default:l(()=>[e(S,{modelValue:n.searchParam.key,"onUpdate:modelValue":t[1]||(t[1]=s=>n.searchParam.key=s),placeholder:"全部",filterable:"",remote:"",clearable:""},{default:l(()=>[e(x,{label:"全部",value:"all"}),(y(!0),A(re,null,ue(P.value,s=>(y(),D(x,{key:s.key,label:s.name,value:s.key},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),e(p,{label:o(a)("status"),prop:"status"},{default:l(()=>[e(S,{modelValue:n.searchParam.status,"onUpdate:modelValue":t[2]||(t[2]=s=>n.searchParam.status=s),placeholder:"全部",filterable:"",remote:"",clearable:""},{default:l(()=>[e(x,{label:"全部",value:"all"}),e(x,{label:"成功",value:"success"}),e(x,{label:"失败",value:"error"})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e(p,{label:o(a)("executeTime"),prop:"execute_time"},{default:l(()=>[e(Z,{modelValue:n.searchParam.execute_time,"onUpdate:modelValue":t[3]||(t[3]=s=>n.searchParam.execute_time=s),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":o(a)("startDate"),"end-placeholder":o(a)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),e(p,null,{default:l(()=>[e(h,{type:"primary",onClick:t[4]||(t[4]=s=>_())},{default:l(()=>[g(r(o(a)("search")),1)]),_:1}),e(h,{onClick:t[5]||(t[5]=s=>H(R.value))},{default:l(()=>[g(r(o(a)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])])]),_:1}),u("div",Pe,[u("div",Re,[e(ee,{modelValue:b.value,"onUpdate:modelValue":t[6]||(t[6]=s=>b.value=s),size:"large",class:"px-[14px]",onChange:W,indeterminate:T.value},null,8,["modelValue","indeterminate"]),e(h,{onClick:J,size:"small",loading:k.value},{default:l(()=>[g(r(o(a)("batchDelete")),1)]),_:1},8,["loading"]),e(h,{onClick:K,size:"small",loading:C.value},{default:l(()=>[g(r(o(a)("clearAll")),1)]),_:1},8,["loading"])]),M((y(),D(ae,{data:n.data,size:"large",ref_key:"cronLogListTableRef",ref:z,onSelectionChange:X},{empty:l(()=>[u("span",null,r(n.loading?"":o(a)("emptyData")),1)]),default:l(()=>[e(f,{type:"selection",width:"55"}),e(f,{prop:"id",label:o(a)("id"),"min-width":"80"},null,8,["label"]),e(f,{prop:"name",label:o(a)("name"),"min-width":"150"},null,8,["label"]),e(f,{prop:"key",label:o(a)("key"),"min-width":"150"},null,8,["label"]),e(f,{prop:"class",label:o(a)("class"),"min-width":"150"},null,8,["label"]),e(f,{label:o(a)("executeResult"),"min-width":"150"},{default:l(({row:s})=>[g(r(s.execute_result),1)]),_:1},8,["label"]),e(f,{prop:"status_name",label:o(a)("status"),"min-width":"100"},null,8,["label"]),e(f,{prop:"execute_time",label:o(a)("executeTime"),"min-width":"100"},null,8,["label"]),e(f,{label:o(a)("operation"),align:"right",fixed:"right",width:"130"},{default:l(({row:s})=>[e(h,{type:"primary",link:"",onClick:oe=>O(s)},{default:l(()=>[g(r(o(a)("info")),1)]),_:2},1032,["onClick"]),e(h,{type:"primary",link:"",onClick:oe=>G(s)},{default:l(()=>[g(r(o(a)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[$,n.loading]]),u("div",Fe,[e(te,{"current-page":n.page,"onUpdate:current-page":t[7]||(t[7]=s=>n.page=s),"page-size":n.limit,"onUpdate:page-size":t[8]||(t[8]=s=>n.limit=s),layout:"total, sizes, prev, pager, next, jumper",total:n.total,onSizeChange:t[9]||(t[9]=s=>_()),onCurrentChange:_},null,8,["current-page","page-size","total"])])])]),_:1}),e(le,{modelValue:w.value,"onUpdate:modelValue":t[11]||(t[11]=s=>w.value=s),title:o(a)("cronInfo"),width:"550px","destroy-on-close":!0},{footer:l(()=>[u("span",Me,[e(h,{type:"primary",onClick:t[10]||(t[10]=s=>w.value=!1)},{default:l(()=>[g(r(o(a)("confirm")),1)]),_:1})])]),default:l(()=>[M((y(),D(U,{model:m,"label-width":"110px",ref:"formRef",class:"page-form"},{default:l(()=>[e(p,{label:o(a)("name")},{default:l(()=>[u("div",ze,r(m.name),1)]),_:1},8,["label"]),e(p,{label:o(a)("key")},{default:l(()=>[u("div",Se,r(m.key),1)]),_:1},8,["label"]),e(p,{label:o(a)("class")},{default:l(()=>[u("div",Ue,r(m.class),1)]),_:1},8,["label"]),e(p,{label:o(a)("executeResult")},{default:l(()=>[u("div",$e,r(m.execute_result),1)]),_:1},8,["label"]),e(p,{label:o(a)("status")},{default:l(()=>[u("div",je,r(m.status_name),1)]),_:1},8,["label"]),e(p,{label:o(a)("executeTime")},{default:l(()=>[u("div",Ae,r(m.execute_time),1)]),_:1},8,["label"])]),_:1},8,["model"])),[[$,L.value]])]),_:1},8,["modelValue","title"])])}}});export{ua as default};
