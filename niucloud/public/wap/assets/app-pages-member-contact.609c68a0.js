import{d as e,m as s,j as t,r as a,g as n,h as r,o,c as l,w as p,a4 as c,b as d,A as u,y as m,u as i,z as g,bk as x,C as f,D as _,i as h,E as v,n as b,B as y,F as w}from"./index-095bc487.js";import{_ as j}from"./u-popup.15ec8a36.js";import{_ as k}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-transition.99287861.js";import"./u-icon.ce8b0212.js";const C=k(e({__name:"nc-contact",props:{sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""}},setup(e,{expose:v}){const b=e,y=s(),w=t((()=>y.site)),k=a(!1),C=()=>{k.value=!0},M=()=>{x({phoneNumber:w.value.phone})};return v({}),(e,s)=>{const t=f,a=_,x=h,v=n(r("u-popup"),j);return o(),l(x,{class:"contact-wrap"},{default:p((()=>[c(e.$slots,"default",{},void 0,!0),d(t,{type:"default","hover-class":"none","open-type":"contact",class:"contact-button",onClick:C,"send-message-title":b.sendMessageTitle,"send-message-path":b.sendMessagePath,"send-message-img":b.sendMessageImg,"show-message-card":!0},null,8,["send-message-title","send-message-path","send-message-img"]),d(v,{show:k.value,onClose:s[3]||(s[3]=e=>k.value=!1),mode:"center",round:5,safeAreaInsetBottom:!1},{default:p((()=>[d(x,{onTouchmove:s[2]||(s[2]=u((()=>{}),["prevent","stop"]))},{default:p((()=>[d(x,{class:"py-[25rpx] text-sm leading-none border-0 border-solid border-b-[2rpx] border-[#eee] flex items-center justify-between"},{default:p((()=>[d(a,{class:"ml-[30rpx]"},{default:p((()=>[m("联系客服")])),_:1}),d(a,{class:"mr-[20rpx] nc-iconfont nc-icon-guanbiV6xx text-[35rpx]",onClick:s[0]||(s[0]=e=>k.value=!1)})])),_:1}),i(w)&&i(w).phone?(o(),l(x,{key:0,class:"px-6 py-3 w-[480rpx] h-[100rpx] text-sm"},{default:p((()=>[d(x,{class:"mb-[10rpx]"},{default:p((()=>[m("客服电话")])),_:1}),d(x,{onClick:M,class:"text-primary truncate"},{default:p((()=>[m(g(i(w).phone),1)])),_:1})])),_:1})):(o(),l(x,{key:1,class:"px-6 py-3 w-[480rpx] h-[100rpx] leading-[100rpx] text-sm"},{default:p((()=>[m("抱歉，商家暂无客服，请线下联系")])),_:1})),d(t,{onClick:s[1]||(s[1]=e=>k.value=!1),class:"!mx-[30rpx] !mb-[40rpx] !w-auto !h-[70rpx] text-[24rpx] leading-[70rpx] rounded-full text-white !bg-[#ff4500] !text-[#fff]"},{default:p((()=>[m(" 我知道了 ")])),_:1})])),_:1})])),_:1},8,["show"])])),_:3})}}}),[["__scopeId","data-v-a8543210"]]),M=k(e({__name:"contact",setup(e){const s=a(""),t=a(""),c=a("");return c.value=v("static/resource/images/member/contact_service.png"),(e,a)=>{const u=y,x=h,_=f,j=n(r("nc-contact"),C);return o(),l(x,{class:"min-h-[100vh]",style:b(e.themeColor())},{default:p((()=>[d(x,{class:"contact-wrap pt-[22%]"},{default:p((()=>[d(u,{src:i(v)("static/resource/images/member/contact_service.png"),mode:"widthFix"},null,8,["src"]),d(x,{class:"mt-[40rpx] text-[28rpx]"},{default:p((()=>[m("欢迎您联系我们，提供您宝贵的意见！")])),_:1}),d(j,{"send-message-title":s.value,"send-message-path":t.value,"send-message-img":c.value},{default:p((()=>[d(_,{type:"primary",class:"btn-wrap font-500 primary-btn-bg"},{default:p((()=>[m(g(i(w)("customerService")),1)])),_:1})])),_:1},8,["send-message-title","send-message-path","send-message-img"])])),_:1})])),_:1},8,["style"])}}}),[["__scopeId","data-v-0a7f2d9b"]]);export{M as default};