import{d as G,x as H,f as Q,r as g,n as N,q as t,h as s,c as m,e as l,w as a,u as n,aQ as X,R as Y,s as J,a as _,t as p,F as W,T as Z,B as v,i as f,aR as ee,a7 as oe,K as le,L as te,ac as ae,aD as ne,E as re,au as de,av as se,M as pe,X as ie,Y as me}from"./index-b105d502.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                     *//* empty css                       *//* empty css                 *//* empty css                  */import{_ as ue}from"./index.vue_vue_type_script_setup_true_lang-1d01a37b.js";import{_ as ce}from"./index.vue_vue_type_style_index_0_lang-502baf4e.js";import _e from"./index-dab57221.js";/* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                *//* empty css                       */import{c as fe,d as ye,f as ge}from"./wechat-fe63c6e1.js";import ve from"./reply-form-2f5c52c3.js";import{_ as he}from"./news-card.vue_vue_type_script_setup_true_lang-d42f1e87.js";import"./index.vue_vue_type_script_setup_true_lang-f5e778e2.js";import"./index.vue_vue_type_style_index_0_lang-754edd49.js";import"./attachment-6065afe8.js";/* empty css                        *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-928f90a0.js";/* empty css                   */import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";import"./upload-media.vue_vue_type_script_setup_true_lang-ee7b2187.js";import"./select-wechat-media.vue_vue_type_script_setup_true_lang-c3681da2.js";/* empty css                 */const xe={class:"main-container"},we={class:"form-tip"},be={class:"flex flex-col"},Ve={class:"flex items-center"},ke={key:0,class:"w-[300px] bg-page p-[10px] mr-[10px] mb-[10px] rounded leading-none"},Re={key:1,class:"w-[300px] bg-page p-[10px] mr-[10px] mb-[10px] rounded"},Ce={key:2,class:"w-[300px] bg-page p-[10px] mr-[10px] mb-[10px] rounded"},Ee={key:3,class:"w-[300px] bg-page p-[10px] mr-[10px] mb-[10px] rounded"},Ue={key:4,class:"w-[300px] bg-page p-[10px] mr-[10px] mb-[10px] rounded"},Ne={class:"mt-[10px]"},Me={class:"fixed-footer-wrap"},$e={class:"fixed-footer"},Be={class:"dialog-footer"},bo=G({__name:"keyword_reply_edit",setup(De){const b=H(),M=Q(),$=b.meta.title,B=()=>{M.push("/channel/wechat/reply")},y=g(!1),r=N({id:0,name:"",keyword:"",content:[],matching_type:"full",reply_method:"all"}),h=g({}),V=g(null),D=()=>{var d;(d=V.value)==null||d.verify().then(e=>{e&&(r.content.push(h.value),h.value={},y.value=!1)})},P=d=>{r.content.splice(d,1)},k=g(),q=N({name:[{required:!0,message:t("ruleNamePlaceholder"),trigger:"blur"}],keyword:[{required:!0,message:t("keywordPlaceholder"),trigger:"blur"}],content:[{validator:(d,e,u)=>{r.content.length||u(new Error(t("contentPlaceholder"))),u()},trigger:"blur"}]}),i=g(!1);b.query.id?fe(b.query.id).then(({data:d})=>{Object.keys(r).forEach(e=>{d[e]!=null&&(r[e]=d[e])}),i.value=!1}).catch():i.value=!1;const F=async d=>{i.value||!d||await d.validate(async e=>{if(e){const u=r.id?ye:ge;i.value=!0,u(r).then(()=>{i.value=!1}).catch(()=>{i.value=!1})}})};return(d,e)=>{const u=ee,R=oe,C=le,x=te,E=ae,K=ne,I=_e,L=ce,T=ue,w=re,U=de,z=se,O=pe,S=ie,j=me;return s(),m("div",xe,[l(R,{class:"card !border-none",shadow:"never"},{default:a(()=>[l(u,{content:n($),icon:n(X),onBack:e[0]||(e[0]=o=>B())},null,8,["content","icon"])]),_:1}),Y((s(),J(O,{class:"page-form mt-[15px]",model:r,"label-width":"150px",ref_key:"formRef",ref:k,rules:q},{default:a(()=>[l(R,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[l(x,{label:n(t)("ruleName"),prop:"name"},{default:a(()=>[l(C,{modelValue:r.name,"onUpdate:modelValue":e[1]||(e[1]=o=>r.name=o),modelModifiers:{trim:!0},placeholder:n(t)("ruleNamePlaceholder"),class:"input-width",clearable:"",maxlength:"60"},null,8,["modelValue","placeholder"]),_("div",we,p(n(t)("ruleNameTips")),1)]),_:1},8,["label"]),l(x,{label:n(t)("keyword"),prop:"keyword"},{default:a(()=>[l(C,{modelValue:r.keyword,"onUpdate:modelValue":e[3]||(e[3]=o=>r.keyword=o),modelModifiers:{trim:!0},placeholder:n(t)("keywordPlaceholder"),class:"input-width",clearable:""},{prepend:a(()=>[l(K,{modelValue:r.matching_type,"onUpdate:modelValue":e[2]||(e[2]=o=>r.matching_type=o),style:{width:"115px"}},{default:a(()=>[l(E,{label:n(t)("allMatching"),value:"full"},null,8,["label"]),l(E,{label:n(t)("fuzzyMatching"),value:"like"},null,8,["label"])]),_:1},8,["modelValue"])]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(x,{label:n(t)("content"),prop:"content"},{default:a(()=>[_("div",be,[(s(!0),m(W,null,Z(r.content,(o,A)=>(s(),m("div",Ve,[o.msgtype=="text"?(s(),m("div",ke,p(o.text.content),1)):v("",!0),o.msgtype=="image"?(s(),m("div",Re,[l(I,{limit:1,width:"120px",height:"120px",modelValue:o.image.url,"onUpdate:modelValue":c=>o.image.url=c},null,8,["modelValue","onUpdate:modelValue"])])):v("",!0),o.msgtype=="video"?(s(),m("div",Ce,[l(L,{limit:1,width:"120px",height:"120px",modelValue:o.video.url,"onUpdate:modelValue":c=>o.video.url=c},null,8,["modelValue","onUpdate:modelValue"])])):v("",!0),o.msgtype=="mpnewsarticle"?(s(),m("div",Ee,[l(he,{modelValue:o.mpnewsarticle,"onUpdate:modelValue":c=>o.mpnewsarticle=c,mode:"show"},null,8,["modelValue","onUpdate:modelValue"])])):v("",!0),o.msgtype=="miniprogrampage"?(s(),m("div",Ue," 小程序卡片【"+p(o.miniprogrampage.appid)+"】 ",1)):v("",!0),l(T,{name:"element Delete",class:"cursor-pointer",onClick:c=>P(A)},null,8,["onClick"])]))),256)),_("div",Ne,[l(w,{type:"primary",onClick:e[4]||(e[4]=o=>y.value=!0)},{default:a(()=>[f(p(n(t)("addReplyContent")),1)]),_:1})])])]),_:1},8,["label"]),l(x,{label:n(t)("replyMethod"),prop:"reply_method"},{default:a(()=>[l(z,{modelValue:r.reply_method,"onUpdate:modelValue":e[5]||(e[5]=o=>r.reply_method=o)},{default:a(()=>[l(U,{label:"all"},{default:a(()=>[f(p(n(t)("replyMethodAll")),1)]),_:1}),l(U,{label:"rand"},{default:a(()=>[f(p(n(t)("replyMethodRand")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1},8,["model","rules"])),[[j,i.value]]),_("div",Me,[_("div",$e,[l(w,{type:"primary",loading:i.value,onClick:e[6]||(e[6]=o=>F(k.value))},{default:a(()=>[f(p(n(t)("save")),1)]),_:1},8,["loading"])])]),l(S,{modelValue:y.value,"onUpdate:modelValue":e[9]||(e[9]=o=>y.value=o),title:n(t)("addReplyContent"),width:"60%","destroy-on-close":!0},{footer:a(()=>[_("span",Be,[l(w,{onClick:e[8]||(e[8]=o=>y.value=!1)},{default:a(()=>[f(p(n(t)("cancel")),1)]),_:1}),l(w,{type:"primary",onClick:D},{default:a(()=>[f(p(n(t)("confirm")),1)]),_:1})])]),default:a(()=>[l(ve,{modelValue:h.value,"onUpdate:modelValue":e[7]||(e[7]=o=>h.value=o),ref_key:"ReplyRef",ref:V},null,8,["modelValue"])]),_:1},8,["modelValue","title"])])}}});export{bo as default};