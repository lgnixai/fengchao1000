import{_ as t}from"./top-tabbar.0a675bbf.js";import{bM as a,d as e,r as s,p as l,o as r,c as o,w as n,b as u,u as c,R as i,y as p,z as m,f,n as d,a as x,bN as _,g as v,h as b,D as y,i as h,C as g,F as j,ac as T}from"./index-095bc487.js";import{_ as w}from"./u-loading-icon.d25d2d54.js";import{_ as C}from"./u-modal.f5bff0ab.js";import{t as R}from"./topTabbar.dfc733b1.js";import"./manifest.fa825040.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-line.41143955.js";import"./u-popup.15ec8a36.js";import"./u-transition.99287861.js";import"./u-icon.ce8b0212.js";const k=e({__name:"result",setup(e){const k=s(null),P=s(!1);let S="",$=0,z=0;let B=R().setTopTabbarParam({title:"",isBack:!1});l((t=>{S=t.trade_type,$=t.trade_id,E()}));const E=()=>{(function(t,e){return a.get(`pay/info/${t}/${e}`,{},{showErrorMessage:!0})})(S,$).then((t=>{if(!uni.$u.test.isEmpty(t.data)){if(1==t.data.status&&z<5)return P.value=!0,z++,void setTimeout((()=>{E()}),1e3);k.value=t.data,P.value=!1}}))},L=()=>{var t;const a=decodeURIComponent(uni.getStorageSync("payReturn"));x(a?{url:a,mode:"reLaunch"}:{url:_(),param:{code:null==(t=k.value)?void 0:t.out_trade_no},mode:"reLaunch"})};return(a,e)=>{const s=v(b("top-tabbar"),t),l=y,x=h,_=g,R=v(b("u-loading-icon"),w),S=v(b("u-modal"),C);return r(),o(x,{style:d(a.themeColor())},{default:n((()=>[k.value?(r(),o(x,{key:0,class:"w-screen h-screen flex flex-col items-center"},{default:n((()=>[u(s,{ref:"topTabbarRef",data:c(B)},null,8,["data"]),u(x,{class:"flex-1 flex flex-col items-center w-full pt-[180rpx]"},{default:n((()=>[u(x,{class:i(["flex items-baseline",{"text-[#06c05d]":2==k.value.status,"text-red":2!=k.value.status}])},{default:n((()=>[u(l,{class:i(["nc-iconfont -mb-[4rpx] !text-[32rpx]",{"nc-icon-duihaoV6mm":2==k.value.status,"nc-icon-tanhaoV6mm":2!=k.value.status}])},null,8,["class"]),u(l,{class:"text-[36rpx] ml-[16rpx] font-500"},{default:n((()=>[p(m(2==k.value.status?"支付成功":"支付失败"),1)])),_:1})])),_:1},8,["class"]),u(x,{class:"text-[56rpx] font-500 mt-[60rpx] price-font"},{default:n((()=>[u(l,{class:"text-[36rpx] mr-[6rpx]"},{default:n((()=>[p(m(c(j)("currency")),1)])),_:1}),u(l,null,{default:n((()=>[p(m(c(T)(k.value.money)),1)])),_:1})])),_:1})])),_:1}),u(x,{class:"pb-[260rpx]"},{default:n((()=>[u(_,{class:"w-[380rpx] !border-0 h-[80rpx] text-[28rpx] text-[#333] !bg-[#f2f2f2] flex-center font-500 rounded-[20rpx]",plain:!0,onClick:L},{default:n((()=>[p(m(2==k.value.status?c(j)("complete"):c(j)("close")),1)])),_:1})])),_:1})])),_:1})):f("v-if",!0),u(S,{show:P.value,showCancelButton:!0,confirmText:c(j)("pay.completePay"),cancelText:c(j)("pay.incompletePay"),onCancel:L,confirmColor:"var(--primary-color)"},{default:n((()=>[u(x,{class:"py-[20rpx]"},{default:n((()=>[u(R,{text:c(j)("pay.getting"),textSize:"16",mode:"circle",vertical:!0},null,8,["text"])])),_:1})])),_:1},8,["show","confirmText","cancelText"])])),_:1},8,["style"])}}});export{k as default};