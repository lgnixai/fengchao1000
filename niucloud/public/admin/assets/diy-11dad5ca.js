import{bx as d,a3 as i,U as r,q as o,ap as a,a5 as s}from"./index-b105d502.js";const p=d("diy",{state:()=>({id:0,load:!1,currentIndex:-99,currentComponent:"edit-page",pageMode:"diy",editTab:"content",pageTitle:"",name:"",type:"",typeName:"",templateName:"",isDefault:0,predefineColors:["#F4391c","#ff4500","#ff8c00","#FFD009","#ffd700","#19C650","#90ee90","#00ced1","#1e90ff","#c71585","#FF407E","#CFAF70","#A253FF","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"],components:[],position:["top_fixed","right_fixed","bottom_fixed","left_fixed","fixed"],global:{title:"页面",pageStartBgColor:"",pageEndBgColor:"",pageGradientAngle:"to bottom",bgUrl:"",bgHeightScale:0,imgWidth:"",imgHeight:"",topStatusBar:{isShow:!0,bgColor:"#ffffff",rollBgColor:"#ffffff",style:"style-1",styleName:"风格1",textColor:"#333333",rollTextColor:"#333333",textAlign:"center",inputPlaceholder:"请输入搜索关键词",imgUrl:"",link:{name:""}},bottomTabBarSwitch:!0,popWindow:{imgUrl:"",imgWidth:"",imgHeight:"",count:-1,show:0,link:{name:""}},template:{textColor:"#303133",pageStartBgColor:"",pageEndBgColor:"",pageGradientAngle:"to bottom",componentBgUrl:"",componentBgAlpha:2,componentStartBgColor:"",componentEndBgColor:"",componentGradientAngle:"to bottom",topRounded:0,bottomRounded:0,elementBgColor:"",topElementRounded:0,bottomElementRounded:0,margin:{top:0,bottom:0,both:0}}},value:[]}),getters:{editComponent:e=>e.currentIndex==-99?e.global:e.value[e.currentIndex]},actions:{init(){this.global={title:"页面",pageStartBgColor:"",pageEndBgColor:"",pageGradientAngle:"to bottom",bgUrl:"",bgHeightScale:100,imgWidth:"",imgHeight:"",topStatusBar:{isShow:!0,bgColor:"#ffffff",rollBgColor:"#ffffff",style:"style-1",styleName:"风格1",textColor:"#333333",rollTextColor:"#333333",textAlign:"center",inputPlaceholder:"请输入搜索关键词",imgUrl:"",link:{name:""}},bottomTabBarSwitch:!0,popWindow:{imgUrl:"",imgWidth:"",imgHeight:"",count:-1,show:0,link:{name:""}},template:{textColor:"#303133",pageStartBgColor:"",pageEndBgColor:"",pageGradientAngle:"to bottom",componentBgUrl:"",componentBgAlpha:2,componentStartBgColor:"",componentEndBgColor:"",componentGradientAngle:"to bottom",topRounded:0,bottomRounded:0,elementBgColor:"",topElementRounded:0,bottomElementRounded:0,margin:{top:0,bottom:0,both:0}}},this.value=[]},addComponent(e,n){if(!this.load)return;let t=i(n);t.id=this.generateRandom(),t.componentName=e,t.componentTitle=t.title,t.ignore=[],Object.assign(t,t.value),delete t.title,delete t.value,delete t.type,delete t.icon;let l=i(this.global.template);if(Object.assign(t,l),t.template&&(Object.assign(t,t.template),delete t.template),!this.checkComponentIsAdd(t)){r({type:"warning",message:`${t.componentTitle}${o("componentCanOnlyAdd")}${t.uses}${o("piece")}`});return}t.position&&this.position.indexOf(t.position)!=-1?(this.currentIndex=0,this.value.splice(0,0,t)):this.currentIndex===-99?(this.value.push(t),this.currentIndex=this.value.length-1):this.value.splice(++this.currentIndex,0,t),this.currentComponent=t.path},generateRandom(e=5){return Number(Math.random().toString().substr(3,e)+Date.now()).toString(36)},postMessage(){var e=JSON.stringify({pageMode:this.pageMode,currentIndex:this.currentIndex,global:a(this.global),value:a(this.value)});window.previewIframe.contentWindow.postMessage(e,"*")},changeCurrentIndex(e,n=null){this.currentIndex=e,this.currentIndex==-99?this.currentComponent="edit-page":n&&(this.currentComponent=n.path)},delComponent(){this.currentIndex!=-99&&s.confirm(o("delComponentTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning",autofocus:!1}).then(()=>{this.value.splice(this.currentIndex,1),this.value.length===0&&(this.currentIndex=-99),this.currentIndex===this.value.length&&this.currentIndex--;let e=i(this.value[this.currentIndex]);this.changeCurrentIndex(this.currentIndex,e)}).catch(()=>{})},moveUpComponent(){var e=i(this.value[this.currentIndex]);let n=this.currentIndex-1;var t=i(this.value[n]);if(!(this.currentIndex-1<0||t.position&&this.position.indexOf(t.position)!=-1)){if(e.id=this.generateRandom(),t.id=this.generateRandom(),e.position&&this.position.indexOf(e.position)!=-1){r({type:"warning",message:`${o("componentNotMoved")}`});return}this.value[this.currentIndex]=t,this.value[n]=e,this.changeCurrentIndex(n,e)}},moveDownComponent(){if(!(this.currentIndex<-1||this.currentIndex+1>=this.value.length)){var e=this.currentIndex+1,n=i(this.value[this.currentIndex]);n.id=this.generateRandom();var t=i(this.value[e]);if(t.id=this.generateRandom(),n.position&&this.position.indexOf(n.position)!=-1){r({type:"warning",message:`${o("componentNotMoved")}`});return}this.value[this.currentIndex]=t,this.value[e]=n,this.changeCurrentIndex(e,n)}},copyComponent(){if(this.currentIndex<0)return;let e=i(this.value[this.currentIndex]);if(e.id=this.generateRandom(),!this.checkComponentIsAdd(e)){r({type:"warning",message:`${o("notCopy")}，${e.componentTitle}${o("componentCanOnlyAdd")}${e.uses}${o("piece")}`});return}if(e.position&&this.position.indexOf(e.position)!=-1){r({type:"warning",message:`${o("notCopy")}，${e.componentTitle}${o("componentCanOnlyAdd")}1${o("piece")}`});return}var n=this.currentIndex+1;this.value.splice(n,0,e),this.changeCurrentIndex(n,e)},checkComponentIsAdd(e){if(e.uses===0)return!0;var n=0;for(var t in this.value)this.value[t].componentName===e.componentName&&n++;return!(n>=e.uses)},resetComponent(){this.currentIndex<0||s.confirm(o("resetComponentTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning",autofocus:!1}).then(()=>{for(let e=0;e<this.components.length;e++)if(this.components[e].componentName==this.editComponent.componentName){Object.assign(this.editComponent,this.components[e]);break}}).catch(()=>{})},verify(){if(this.pageTitle==="")return r({message:o("diyPageTitlePlaceholder"),type:"warning"}),this.changeCurrentIndex(-99),!1;for(var e=0;e<this.value.length;e++)try{if(this.value[e].verify){var n=this.value[e].verify(e);if(!n.code)return this.changeCurrentIndex(e,this.value[e]),r({message:n.message,type:"warning"}),!1}}catch(t){console.log("verify Error:",t,e,this.value[e])}return!0}}}),u=p;export{u};
