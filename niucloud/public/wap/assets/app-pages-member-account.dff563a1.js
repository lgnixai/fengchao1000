import{Y as t,Z as e,_ as s,$ as a,bh as o,aT as n,g as i,h as l,o as r,c,w as u,b as d,a4 as h,P as p,Q as m,ai as f,n as g,f as x,y as _,z as y,D as b,i as w,d as v,r as k,p as C,F as S,u as X,aj as z,ak as T,bq as A,E as Y,a as M,br as I,B as P}from"./index-095bc487.js";import{_ as R}from"./u-icon.ce8b0212.js";import{_ as j}from"./_plugin-vue_export-helper.1b428a4d.js";import{u as $,M as D}from"./useMescroll.846305fe.js";import"./mescroll-i18n.8c56c010.js";const q={props:{show:{type:Boolean,default:()=>t.swipeActionItem.show},name:{type:[String,Number],default:()=>t.swipeActionItem.name},disabled:{type:Boolean,default:()=>t.swipeActionItem.disabled},autoClose:{type:Boolean,default:()=>t.swipeActionItem.autoClose},threshold:{type:Number,default:()=>t.swipeActionItem.threshold},options:{type:Array,default:()=>t.swipeActionItem.rightOptions},duration:{type:[String,Number],default:()=>t.swipeActionItem.duration}}};function F(t){return t.toString().indexOf("s")>=0?t:t>30?t+"ms":t+"s"}function B(t,e,s){e.getState(),s.selectAllComponents(".u-swipe-action-item__right__button"),e.requestAnimationFrame((function(){e.setStyle({transition:"none",transform:"translateX("+t+"px)","-webkit-transform":"translateX("+t+"px)"})}))}function N(t,e){var s=t.getState();e.selectAllComponents(".u-swipe-action-item__right__button");var a=F(s.duration),o=-s.buttonsWidth;t.requestAnimationFrame((function(){t.setStyle({transition:"transform "+a,transform:"translateX("+o+"px)","-webkit-transform":"translateX("+o+"px)"})})),O("open",t,e)}function O(t,e,s){e.getState().status=t,s.callMethod("setState",t)}function H(t,e){var s=t.getState(),a=e.selectAllComponents(".u-swipe-action-item__right__button"),o=a.length,n=F(s.duration);t.requestAnimationFrame((function(){t.setStyle({transition:"transform "+n,transform:"translateX(0px)","-webkit-transform":"translateX(0px)"});for(var e=o-1;e>=0;e--)a[e].setStyle({transition:"transform "+n,transform:"translateX(0px)","-webkit-transform":"translateX(0px)"})})),O("close",t,e)}const U={touchstart:function(t,e){var s=t.instance.getState();if(!s.disabled){var a=t.touches;a&&a.length>1||(s.moving=!0,s.startX=a[0].pageX,s.startY=a[0].pageY,e.callMethod("closeOther"))}},touchmove:function(t,e){var s=t.instance,a=s.getState();if(!a.disabled&&a.moving){var o=t.touches,n=o[0].pageX,i=o[0].pageY,l=n-a.startX,r=i-a.startY,c=a.buttonsWidth;(Math.abs(l)>Math.abs(r)||Math.abs(l)>a.threshold)&&(t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation()),Math.abs(l)<Math.abs(r)||("open"===a.status?(l<0&&(l=0),l>c&&(l=c),B(-c+l,s,e)):(l>0&&(l=0),Math.abs(l)>c&&(l=-c),B(l,s,e)))}},touchend:function(t,e){var s=t.instance,a=s.getState();if(a.moving&&!a.disabled){var o=t.changedTouches?t.changedTouches[0]:{},n=o.pageX;o.pageY;var i=n-a.startX;if("open"===a.status){if(i<0)return;if(0===i)return H(s,e);Math.abs(i)<a.threshold?N(s,e):H(s,e)}else{if(i>0)return;Math.abs(i)<a.threshold?H(s,e):N(s,e)}}},sizeChange:function(t,e,s,a){var o=a.getState();if(o&&t){if(o.disabled=t.disabled,o.duration=t.duration,o.show=t.show,o.threshold=t.threshold,o.buttons=t.buttons,o.buttons)for(var n=o.buttons.length,i=0,l=t.buttons,r=0;r<n;r++)i+=l[r].width;o.buttonsWidth=i}},statusChange:function(t,e,s,a){var o=a.getState();o.disabled||("close"===t&&"open"===o.status?H(a,s):"open"===t&&"close"===o.status&&N(a,s))}},V=t=>{t.$wxs||(t.$wxs=[]),t.$wxs.push("wxs"),t.mixins||(t.mixins=[]),t.mixins.push({beforeCreate(){this.wxs=U}})},W={name:"u-swipe-action-item",emits:["click"],mixins:[e,s,{methods:{getTouchPoint:t=>t?t.touches&&t.touches[0]?{x:t.touches[0].pageX,y:t.touches[0].pageY}:t.changedTouches&&t.changedTouches[0]?{x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY}:{x:t.clientX||0,y:t.clientY||0}:{x:0,y:0},resetTouchStatus(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0},touchStart(t){this.resetTouchStatus();const e=this.getTouchPoint(t);this.startX=e.x,this.startY=e.y},touchMove(t){const e=this.getTouchPoint(t);var s,a;this.deltaX=e.x-this.startX,this.deltaY=e.y-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||(s=this.offsetX,a=this.offsetY,s>a&&s>10?"horizontal":a>s&&a>10?"vertical":"")}}},{methods:{closeHandler(){this.status="close"},setState(t){this.status=t},closeOther(){this.parent&&this.parent.closeOther(this)}}},q],data:()=>({size:{},parentData:{autoClose:!0},status:"close",sliderStyle:{}}),watch:{wxsInit(t,e){this.queryRect()}},computed:{wxsInit(){return[this.disabled,this.autoClose,this.threshold,this.options,this.duration]}},mounted(){this.init()},methods:{addUnit:a,getPx:o,init(){this.updateParentData(),n().then((()=>{this.queryRect()}))},updateParentData(){this.getParentData("u-swipe-action")},queryRect(){this.$uGetRect(".u-swipe-action-item__right__button",!0).then((t=>{this.size={buttons:t,show:this.show,disabled:this.disabled,threshold:this.threshold,duration:this.duration}}))},buttonClickHandler(t,e){this.$emit("click",{index:e,name:this.name})}}};V(W);const E=j(W,[["render",function(t,e,s,a,o,n){const v=i(l("u-icon"),R),k=b,C=w;return r(),c(C,{class:"u-swipe-action-item",ref:"u-swipe-action-item"},{default:u((()=>[d(C,{class:"u-swipe-action-item__right"},{default:u((()=>[h(t.$slots,"button",{},(()=>[(r(!0),p(m,null,f(t.options,((t,e)=>(r(),c(C,{key:e,class:"u-swipe-action-item__right__button",ref_for:!0,ref:`u-swipe-action-item__right__button-${e}`,style:g([{alignItems:t.style&&t.style.borderRadius?"center":"stretch"}]),onClick:s=>n.buttonClickHandler(t,e)},{default:u((()=>[d(C,{class:"u-swipe-action-item__right__button__wrapper",style:g([{backgroundColor:t.style&&t.style.backgroundColor?t.style.backgroundColor:"#C7C6CD",borderRadius:t.style&&t.style.borderRadius?t.style.borderRadius:"0",padding:t.style&&t.style.borderRadius?"0":"0 15px"},t.style])},{default:u((()=>[t.icon?(r(),c(v,{key:0,name:t.icon,color:t.style&&t.style.color?t.style.color:"#ffffff",size:t.iconSize?n.addUnit(t.iconSize):t.style&&t.style.fontSize?1.2*n.getPx(t.style.fontSize):17,customStyle:{marginRight:t.text?"2px":0}},null,8,["name","color","size","customStyle"])):x("v-if",!0),t.text?(r(),c(k,{key:1,class:"u-swipe-action-item__right__button__wrapper__text u-line-1",style:g([{color:t.style&&t.style.color?t.style.color:"#ffffff",fontSize:t.style&&t.style.fontSize?t.style.fontSize:"16px",lineHeight:t.style&&t.style.fontSize?t.style.fontSize:"16px"}])},{default:u((()=>[_(y(t.text),1)])),_:2},1032,["style"])):x("v-if",!0)])),_:2},1032,["style"])])),_:2},1032,["style","onClick"])))),128))]),!0)])),_:3}),d(C,{class:"u-swipe-action-item__content",onTouchstart:t.wxs.touchstart,onTouchmove:t.wxs.touchmove,onTouchend:t.wxs.touchend,status:o.status,"change:status":t.wxs.statusChange,size:o.size,"change:size":t.wxs.sizeChange},{default:u((()=>[h(t.$slots,"default",{},void 0,!0)])),_:3},8,["onTouchstart","onTouchmove","onTouchend","status","change:status","size","change:size"])])),_:3},512)}],["__scopeId","data-v-9e5550f1"]]),G=j(v({__name:"account",setup(t){const{mescrollInit:e,downCallback:s,getMescroll:a}=$(T,z),o=k([]),n=k(!1),h=k("bank"),v=k(null),R=k("get");C((t=>{t.type&&(h.value=t.type),t.mode&&(R.value=t.mode)}));const j=t=>{n.value=!1;let e={page:t.num,limit:t.size,account_type:h.value};A(e).then((e=>{const s=e.data.data;1==t.num&&(o.value=[]),o.value=o.value.concat(s),t.endSuccess(s.length),n.value=!0})).catch((()=>{n.value=!0,t.endErr()}))},q=k([{text:S("delete"),style:{backgroundColor:"#F56C6C"}}]),F=t=>{"get"==R.value?M({url:"/app/pages/member/account_edit",param:{id:t.account_id,type:h.value,mode:R.value},mode:"redirectTo"}):M({url:"/app/pages/member/apply_cash_out",param:{account_id:t.account_id,type:h.value},mode:"redirectTo"})};return(t,s)=>{const a=P,n=w,k=b,C=i(l("u-swipe-action-item"),E);return r(),c(n,{class:"w-screen h-screen bg-[var(--page-bg-color)]",style:g(t.themeColor())},{default:u((()=>[d(D,{ref_key:"mescrollRef",ref:v,onInit:X(e),down:{use:!1},onUp:j},{default:u((()=>[x(" 多嵌套一层是为了微信小程序兼容 "),(r(!0),p(m,null,f(o.value,((t,e)=>(r(),c(n,{class:"sidebar-margin my-[var(--top-m)] rounded-[var(--rounded-big)] overflow-hidden",key:e},{default:u((()=>[d(C,{options:q.value,onClick:t=>(t=>{const e=o.value[t];I(e.account_id).then((()=>{o.value.splice(t,1)})).catch()})(e)},{default:u((()=>[d(n,{class:"card-template flex justify-between"},{default:u((()=>[d(n,{class:"flex items-center"},{default:u((()=>[d(n,{class:"w-[80rpx] h-[80rpx] flex items-center justify-center",onClick:e=>F(t)},{default:u((()=>["bank"==t.account_type?(r(),c(a,{key:0,class:"w-[80rpx] h-[52rpx] align-middle",src:X(Y)("static/resource/images/member/apply_withdrawal/bank-icon.png"),mode:"widthFix"},null,8,["src"])):(r(),c(a,{key:1,class:"h-[78rpx] w-[78rpx] align-middle",src:X(Y)("static/resource/images/member/apply_withdrawal/alipay-icon.png"),mode:"widthFix"},null,8,["src"]))])),_:2},1032,["onClick"]),d(n,{class:"flex flex-col ml-[20rpx]",onClick:e=>F(t)},{default:u((()=>[d(n,{class:"text-[#333] text-[28rpx]"},{default:u((()=>[_(y("bank"==t.account_type?t.bank_name:X(S)("alipayAccountNo")),1)])),_:2},1024),"bank"==t.account_type?(r(),c(n,{key:0,class:"text-[var(--text-color-light9)] text-[24rpx] mt-[12rpx]"},{default:u((()=>[_(y(X(S)("endNumber"))+" "+y(t.account_no.substring(t.account_no.length-4))+y(X(S)("bankCard")),1)])),_:2},1024)):(r(),c(n,{key:1,class:"text-[var(--text-color-light9)] text-[24rpx] mt-[12rpx]"},{default:u((()=>[_(y(t.account_no),1)])),_:2},1024))])),_:2},1032,["onClick"])])),_:2},1024),d(k,{class:"flex items-center nc-iconfont nc-icon-xiugaiV6xx flex-shrink-0 text-[28rpx] p-[20rpx] pr-0",onClick:e=>(t=>{M({url:"/app/pages/member/account_edit",param:{id:t.account_id,type:t.account_type,mode:R.value}})})(t)},null,8,["onClick"])])),_:2},1024)])),_:2},1032,["options","onClick"])])),_:2},1024)))),128)),d(n,{class:"card-template sidebar-margin my-[var(--top-m)] flex items-center",onClick:s[0]||(s[0]=t=>X(M)({url:"/app/pages/member/account_edit",param:{type:h.value,mode:R.value}}))},{default:u((()=>[d(k,{class:"nc-iconfont nc-icon-jiahaoV6xx text-[30rpx]"}),d(k,{class:"text-[28rpx] ml-[10rpx] flex-1"},{default:u((()=>[_(y("bank"==h.value?X(S)("addBankCard"):X(S)("addAlipayAccount")),1)])),_:1}),d(k,{class:"nc-iconfont nc-icon-youV6xx text-[24rpx] text-[var(--text-color-light6)]"})])),_:1})])),_:1},8,["onInit"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-af754c8f"]]);export{G as default};
