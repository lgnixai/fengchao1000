import{d as V,x as N,f as B,r as d,aK as S,h as T,c as j,e as o,w as s,a as t,t as n,u as e,q as a,i as h,A as q,ay as R,az as I,E as M,aL as $,aM as z,aN as D,J as F,aO as J,a7 as K}from"./index-b105d502.js";/* empty css                *//* empty css               *//* empty css                 *//* empty css                        *//* empty css                *//* empty css                  *//* empty css                    */import{g as L}from"./aliapp-4c1c324c.js";const O={class:"main-container"},P={class:"flex justify-between items-center"},Q={class:"text-page-title"},U={class:"p-[20px]"},G={class:"panel-title !text-sm"},H={class:"text-[14px] font-[700]"},W={class:"text-[#999]"},X={class:"mt-[20px] mb-[40px] h-[32px]"},Y={class:"text-[14px] font-[700]"},Z={class:"text-[#999]"},tt={class:"mt-[20px] mb-[40px] h-[32px]"},et={class:"text-[14px] font-[700]"},st={class:"text-[#999]"},at=t("div",{class:"mt-[20px] mb-[40px] h-[32px]"},null,-1),ot={class:"text-[14px] font-[700]"},nt={class:"text-[#999]"},lt={class:"flex justify-center"},ct={class:"w-[100%] h-[100%] flex items-center justify-center bg-[#f5f7fa]"},pt={class:"mt-[22px] text-center"},it={class:"text-[12px]"},bt=V({__name:"access",setup(_t){const f=N(),m=B(),v=f.meta.title,_=d("/channel/aliapp");d(2);const p=d("");S(async()=>{const c=await L();p.value=c.data.qr_code});const w=c=>{window.open(c,"_blank")},b=c=>{m.push({path:_.value})};return(c,l)=>{const g=R,y=I,u=M,i=$,C=z,x=D,E=F,k=J,A=K;return T(),j("div",O,[o(A,{class:"card !border-none",shadow:"never"},{default:s(()=>[t("div",P,[t("span",Q,n(e(v)),1)]),o(y,{modelValue:_.value,"onUpdate:modelValue":l[0]||(l[0]=r=>_.value=r),class:"my-[20px]",onTabChange:b},{default:s(()=>[o(g,{label:e(a)("weappAccessFlow"),name:"/channel/aliapp"},null,8,["label"])]),_:1},8,["modelValue"]),t("div",U,[t("h3",G,n(e(a)("weappInlet")),1),o(k,null,{default:s(()=>[o(x,{span:20},{default:s(()=>[o(C,{active:4,direction:"vertical"},{default:s(()=>[o(i,null,{title:s(()=>[t("p",H,n(e(a)("weappAttestation")),1)]),description:s(()=>[t("span",W,n(e(a)("weappAttest")),1),t("div",X,[o(u,{type:"primary",onClick:l[1]||(l[1]=r=>w("https://open.alipay.com/develop/manage"))},{default:s(()=>[h(n(e(a)("clickAccess")),1)]),_:1})])]),_:1}),o(i,null,{title:s(()=>[t("p",Y,n(e(a)("weappSetting")),1)]),description:s(()=>[t("span",Z,n(e(a)("emplace")),1),t("div",tt,[o(u,{type:"primary",plain:"",onClick:l[2]||(l[2]=r=>e(m).push("/channel/aliapp/config"))},{default:s(()=>[h(n(e(a)("weappSettingBtn")),1)]),_:1})])]),_:1}),o(i,null,{title:s(()=>[t("p",et,n(e(a)("uploadVersion")),1)]),description:s(()=>[t("span",st,n(e(a)("releaseCourse")),1),at]),_:1}),o(i,null,{title:s(()=>[t("p",ot,n(e(a)("completeAccess")),1)]),description:s(()=>[t("span",nt,n(e(a)("releaseCourse")),1)]),_:1})]),_:1})]),_:1}),o(x,{span:4},{default:s(()=>[t("div",lt,[o(E,{class:"w-[180px] h-[180px]",src:p.value?e(q)(p.value):""},{error:s(()=>[t("div",ct,[t("span",null,n(p.value?e(a)("fileErr"):e(a)("emptyQrCode")),1)])]),_:1},8,["src"])]),t("div",pt,[t("p",it,n(e(a)("clickAccess2")),1)])]),_:1})]),_:1})])]),_:1})])}}});export{bt as default};