import{h as R}from"./moment.9709ab41.js";import{bO as x,W as _,_ as v,o as l,c,a as s,w as n,v as m,a4 as k,b as r,i as d,r as b,a3 as O,a5 as T,t as $,Y as w,d as y}from"./index.03d082ff.js";import{_ as f}from"./Constants.509ac60c.js";import{r as h}from"./index.esm.eae64ffd.js";const N={props:["clickedNext","currentStep"],mixins:[f],data(){return{status:"",detail:"",shownext:!1,shippingcharges:0,$v:x()}},validations:{status:{required:h},detail:{required:h}},computed:{..._(["loggedinuser","employees","orderconversation"])},watch:{$v:{handler:function(t){!t.$invalid||this.orderconversation.status>=1?this.$emit("can-continue",{value:!0}):this.$emit("can-continue",{value:!1})},deep:!0},clickedNext(t){console.log("clicked next:"+t),t===!0&&this.$v.$touch()}},mounted(){this.orderconversation.status>=1?(this.$emit("can-continue",{value:!0}),console.log("valid data")):(this.$emit("can-continue",{value:!1}),console.log(" In valid data"))},methods:{submit(){if(this.status!=""){let t={transactionid:this.orderconversation.id,description:this.detail,status:this.status,shippingcharges:this.shippingcharges};axios.post("api/sale/status/create",t).then(e=>this.processDetail(e.data)).catch(e=>{console.log("",e)})}else alert("Status is required")},processDetail(){this.$parent.parentrefresh()},checkreject(){this.status==2&&confirm("Do you want to reject this order")&&alert("Order Set to Reject Successfully , Submit to Reject the order")}}},U={class:"col-md-12"},q={key:0,class:"panel panel-cascade"},V={class:"panel-body",style:{"background-color":"#ffffff","box-shadow":"2px 2px 9px 0px darkgrey"}},Y={class:"form-horizontal cascde-forms"},I={class:"form-group row"},H=s("label",{class:"col-lg-4 col-md-3 control-label",style:{color:"#22690b"}},[d(" Conversation"),s("span",{style:{color:"rgba(255, 0, 0, 0.67)"}},"*")],-1),z={class:"col-lg-6 col-md-9"},M={class:"form-group row"},B=s("label",{class:"col-lg-4 col-md-3 control-label",style:{color:"#22690b"}},[d(" Shipping Charges"),s("span",{style:{color:"rgba(255, 0, 0, 0.67)"}},"*")],-1),W={class:"col-lg-6 col-md-9"},A={class:"form-group row"},E=s("label",{class:"col-lg-4 col-md-3 control-label",style:{color:"#22690b"}},[d(" Status"),s("span",{style:{color:"rgba(255,0, 0, 0.67)"}},"*")],-1),F={class:"col-lg-6 col-md-9"},L=s("option",{value:"1"},"Approve",-1),G=s("option",{value:"2"},"Reject",-1),P=[L,G],Q={key:0,class:"help is-danger"},J={class:"form-group row"},K=s("div",{class:"col-md-3"},null,-1),X={class:"col-md-5 flex-around-row"};function Z(t,e,p,u,o,a){return l(),c("div",U,[t.orderconversation.status<=4?(l(),c("div",q,[s("div",V,[s("div",Y,[s("div",I,[H,s("div",z,[n(s("textarea",{class:"form-control form-cascade-control input-small","onUpdate:modelValue":e[0]||(e[0]=i=>o.detail=i),cols:"20",id:"CUSTHINT",name:"CUSTHINT",rows:"2",style:{height:"83px"}},null,512),[[m,o.detail]])])]),s("div",M,[B,s("div",W,[n(s("input",{type:"number",class:"form-control form-cascade input-small","onUpdate:modelValue":e[1]||(e[1]=i=>o.shippingcharges=i)},null,512),[[m,o.shippingcharges]])])]),s("div",A,[E,s("div",F,[n(s("select",{"onUpdate:modelValue":e[2]||(e[2]=i=>o.status=i),class:"form-control form-cascade-control input-small",onChange:e[3]||(e[3]=i=>a.checkreject())},P,544),[[k,o.status]]),o.$v.status.$error?(l(),c("p",Q,"Status is Required")):r("",!0)])])]),s("div",J,[K,s("div",X,[t.orderconversation.status==0&&o.shownext==!1?(l(),c("button",{key:0,type:"button",class:"btn btn-success",style:{"margin-top":"0"},onClick:e[4]||(e[4]=i=>a.submit())}," Submit ")):r("",!0)])])])])):r("",!0)])}const ss=v(N,[["render",Z]]),es={props:["clickedNext","currentStep"],mixins:[f],data(){return{status:3,detail:"",shownext:!1,$v:x()}},validations:{status:{required:h},detail:{required:h}},computed:{..._(["loggedinuser","employees","orderconversation"])},watch:{$v:{handler:function(t){this.orderconversation.status>=1?this.$emit("can-continue",{value:!0}):this.$emit("can-continue",{value:!1})},deep:!0},clickedNext(t){console.log("clicked next"),t===!0&&this.$v.$touch()}},mounted(){this.orderconversation.status<=3?this.$emit("can-continue",{value:!0}):this.$emit("can-continue",{value:!1})},methods:{submit(){if(this.status!=""){let t={transactionid:this.orderconversation.id,description:this.detail,requesttype:4,status:this.status};axios.post("api/sale/status/create",t).then(e=>this.processDetail(e.data)).catch(e=>{console.log("",e)})}},processDetail(){this.shownext=!0,this.$parent.parentrefresh()},checkreject(){this.status==2&&confirm("Do you want to reject this order")&&alert("Order Set to Reject Successfully , Submit to Reject the order")}}},ts={class:"col-md-12"},os={class:"panel panel-cascade"},is={class:"panel-body",style:{"background-color":"#fefefe","box-shadow":"2px 2px 9px 0px darkgrey"}},ls={class:"form-horizontal cascde-forms"},cs={class:"form-group row"},rs=s("label",{class:"col-lg-4 col-md-3 control-label",style:{color:"#22690b"}},[d(" Conversation"),s("span",{style:{color:"rgba(255, 0, 0, 0.67)"}},"*")],-1),as={class:"col-lg-6 col-md-9"},ns={key:0,class:"help is-danger"},ds={class:"form-group row"},us=s("label",{class:"col-lg-4 col-md-3 control-label",style:{color:"#22690b"}},[d(" Status"),s("span",{style:{color:"rgba(255, 0, 0, 0.67)"}},"*")],-1),hs={class:"col-lg-6 col-md-9"},ps=s("option",{value:"3"},"Dispatched Order",-1),ms=s("option",{value:"2"},"Reject Order",-1),_s=[ps,ms],vs={class:"form-group row"},fs=s("div",{class:"col-md-3"},null,-1),gs={class:"col-md-5 flex-around-row"};function bs(t,e,p,u,o,a){return l(),c("div",ts,[s("div",os,[s("div",is,[s("div",ls,[s("div",cs,[rs,s("div",as,[n(s("textarea",{class:"form-control form-cascade-control input-small","onUpdate:modelValue":e[0]||(e[0]=i=>o.detail=i),cols:"20",id:"CUSTHINT",name:"CUSTHINT",rows:"2",style:{height:"83px"}},null,512),[[m,o.detail]]),o.$v.detail.$error?(l(),c("p",ns,"Conversation is Required")):r("",!0)])]),s("div",ds,[us,s("div",hs,[n(s("select",{"onUpdate:modelValue":e[1]||(e[1]=i=>o.status=i),class:"form-control form-cascade-control input-small",onChange:e[2]||(e[2]=i=>a.checkreject())},_s,544),[[k,o.status]])])])]),s("div",vs,[fs,s("div",gs,[t.orderconversation.status<3?(l(),c("button",{key:0,type:"button",class:"btn btn-success",style:{"margin-top":"0"},onClick:e[3]||(e[3]=i=>a.submit())},"Submit")):r("",!0)])])])])])}const $s=v(es,[["render",bs]]),ys={props:["clickedNext","currentStep"],mixins:[f],data(){return{status:4,detail:"",shownext:!1,$v:x()}},validations:{status:{required:h},detail:{required:h}},computed:{..._(["loggedinuser","employees","orderconversation"])},watch:{$v:{handler:function(t){this.$emit("can-continue",{value:!0})},deep:!0},clickedNext(t){console.log("clicked next"),t===!0&&this.$v.$touch()}},mounted(){this.orderconversation.status<=4?this.$emit("can-continue",{value:!0}):this.$emit("can-continue",{value:!1})},methods:{submit(){if(this.status!=""&&this.detail!=""){let t={transactionid:this.orderconversation.id,description:this.detail,requesttype:4,status:this.status};axios.post("api/sale/status/create",t).then(e=>this.processDetail(e.data)).catch(e=>{console.log("",e)})}},processDetail(){this.$parent.parentrefresh()},checkreject(){this.status==2&&confirm("Do you want to reject this order")&&alert("Order Set to Reject Successfully , Submit to Reject the order")}}},xs={class:"col-md-12"},ks={class:"panel panel-cascade"},ws={class:"panel-body",style:{"background-color":"#fbfcfa","box-shadow":"2px 2px 9px 0px darkgrey"}},Ss={class:"form-horizontal cascde-forms"},Ds={class:"form-group row"},Cs=s("label",{class:"col-lg-4 col-md-3 control-label",style:{color:"#22690b"}},[d(" Conversation"),s("span",{style:{color:"rgba(255, 0, 0, 0.67)"}},"*")],-1),js={class:"col-lg-6 col-md-9"},Rs={key:0,class:"help is-danger"},Os={class:"form-group row"},Ts=s("label",{class:"col-lg-4 col-md-3 control-label",style:{color:"#22690b"}},[d(" Status"),s("span",{style:{color:"rgba(255, 0, 0, 0.67)"}},"*")],-1),Ns={class:"col-lg-6 col-md-9"},Us=s("option",{value:"4"},"On the Way",-1),qs=s("option",{value:"2"},"Reject Order",-1),Vs=[Us,qs],Ys={class:"form-group row"},Is=s("div",{class:"col-md-3"},null,-1),Hs={class:"col-md-5 flex-around-row"};function zs(t,e,p,u,o,a){return l(),c("div",xs,[s("div",ks,[s("div",ws,[s("div",Ss,[s("div",Ds,[Cs,s("div",js,[n(s("textarea",{class:"form-control form-cascade-control input-small","onUpdate:modelValue":e[0]||(e[0]=i=>o.detail=i),cols:"20",id:"CUSTHINT",name:"CUSTHINT",rows:"2",style:{height:"83px"}},null,512),[[m,o.detail]]),o.$v.detail.$error?(l(),c("p",Rs," Conversation is Required ")):r("",!0)])]),s("div",Os,[Ts,s("div",Ns,[n(s("select",{"onUpdate:modelValue":e[1]||(e[1]=i=>o.status=i),class:"form-control form-cascade-control input-small",onChange:e[2]||(e[2]=i=>a.checkreject())},Vs,544),[[k,o.status]])])])]),s("div",Ys,[Is,s("div",Hs,[t.orderconversation.status==3?(l(),c("button",{key:0,type:"button",class:"btn btn-success",style:{"margin-top":"0"},onClick:e[3]||(e[3]=i=>a.submit())}," Submit ")):r("",!0)])])])])])}const Ms=v(ys,[["render",zs]]),Bs={props:["clickedNext","currentStep"],mixins:[f],data(){return{status:"",detail:"",$v:x()}},validations:{status:{required:h},detail:{required:h}},computed:{..._(["loggedinuser","employees","orderconversation"])},watch:{$v:{handler:function(t){this.$emit("can-continue",{value:!0})},deep:!0},clickedNext(t){console.log("clicked next"),t===!0&&this.$v.$touch()}},mounted(){this.$emit("can-continue",{value:!0})},methods:{submit(){if(this.status!=""&&this.detail!=""){let t={transactionid:this.orderconversation.id,description:this.detail,requesttype:4,status:this.status};axios.post("api/sale/status/create",t).then(e=>this.processDetail(e.data)).catch(e=>{console.log("",e)})}},processDetail(){this.$parent.parentrefresh()},checkreject(){this.status==6&&confirm("Do you want to reject this order")&&alert("Order Set to Reject Successfully , Submit to Reject the order")}}},Ws={class:"col-md-12"},As={class:"panel panel-cascade"},Es={class:"panel-body",style:{"background-color":"#d0e5cc","box-shadow":"2px 2px 9px 0px darkgrey"}},Fs={class:"form-horizontal cascde-forms"},Ls={class:"form-group row"},Gs=s("label",{class:"col-lg-4 col-md-3 control-label",style:{color:"#22690b"}},[d(" Conversation"),s("span",{style:{color:"rgba(255, 0, 0, 0.67)"}},"*")],-1),Ps={class:"col-lg-6 col-md-9"},Qs={key:0,class:"help is-danger"},Js={class:"form-group row"},Ks=s("label",{class:"col-lg-4 col-md-3 control-label",style:{color:"#22690b"}},[d(" Status"),s("span",{style:{color:"rgba(255, 0, 0, 0.67)"}},"*")],-1),Xs={class:"col-lg-6 col-md-9"},Zs=s("option",{value:"5"},"Order Delivered",-1),se=s("option",{value:"6"},"Order Rejected",-1),ee=[Zs,se],te={class:"form-group row"},oe=s("div",{class:"col-md-3"},null,-1),ie={class:"col-md-5 flex-around-row"};function le(t,e,p,u,o,a){return l(),c("div",Ws,[s("div",As,[s("div",Es,[s("div",Fs,[s("div",Ls,[Gs,s("div",Ps,[n(s("textarea",{class:"form-control form-cascade-control input-small","onUpdate:modelValue":e[0]||(e[0]=i=>o.detail=i),cols:"20",id:"CUSTHINT",name:"CUSTHINT",rows:"2",style:{height:"83px"}},null,512),[[m,o.detail]]),o.$v.detail.$error?(l(),c("p",Qs," Conversation is Required ")):r("",!0)])]),s("div",Js,[Ks,s("div",Xs,[n(s("select",{"onUpdate:modelValue":e[1]||(e[1]=i=>o.status=i),class:"form-control form-cascade-control input-small",onChange:e[2]||(e[2]=i=>a.checkreject())},ee,544),[[k,o.status]])])])]),s("div",te,[oe,s("div",ie,[t.orderconversation.status==4?(l(),c("button",{key:0,type:"button",class:"btn btn-success",style:{"margin-top":"0"},onClick:e[3]||(e[3]=i=>a.submit())}," Submit ")):r("",!0)])])])])])}const ce=v(Bs,[["render",le]]);const re={mixins:[f],props:["item"],components:{StepOne:ss,StepTwo:$s,StepThree:Ms,StepFour:ce},data(){return{id:0,subject:"",detail:"",scheduledate:"",followedid:0,random:!0,list:[],moment:R,requesttype:4,leadtype:0,newleadremark:"",showtable:!1,showdate:!0,modelConfig:{type:"string",mask:"YYYY-MM-DD"},status:"",orderview:0,step1success:!1,step2success:!1,step3success:!1,step4success:!1,isdanger:!1}},mounted(){this.refresh()},computed:{..._(["loggedinuser","employees","orderconversation"])},methods:{parentrefresh(){this.$parent.visitcomments=!1,this.$parent.refresh()},refresh(){let t={transactionid:this.item.id};switch(axios.post("api/sale/status/fetch",t).then(e=>this.processDetailResponse(e.data)).catch(e=>{console.log("",e)}),this.item.status){case 0:console.log("enter in status 0"),this.random?(console.log("enter in status logged 0"),this.orderview=1,this.isdanger=!1):this.orderview=0;break;case 1:this.random?this.orderview=2:this.orderview=0,this.step1success=!0,this.isdanger=!1;break;case 2:this.orderview=0,this.step1success=!1,this.step2success=!1,this.step3success=!1,this.step4success=!1,this.isdanger=!0;break;case 3:this.random?this.orderview=3:this.orderview=0,this.step1success=!0,this.step2success=!0,this.isdanger=!1;break;case 4:this.random?this.orderview=4:this.orderview=0,this.step1success=!0,this.step2success=!0,this.step3success=!0;break;case 5:this.step1success=!0,this.step2success=!0,this.step3success=!0,this.step4success=!0;break;case 6:this.orderview=0,this.isdanger=!0;break}},processDetailResponse(t){this.$store.commit("assignloadingstatus",0),this.list=t},submit(){var e,p;let t={transactionid:this.item.id,detail:(e=this.orderconversation)==null?void 0:e.detail,requesttype:this.requesttype,status:(p=this.orderconversation)==null?void 0:p.status};axios.post("api/sale/status/create",t).then(u=>this.processDetail(u.data)).catch(u=>{console.log("",u)})},processDetail(){this.$parent.visitcomments=!1;let t={id:this.item.id,column:"status",value:this.status};axios.post("api/leads/updatefield",t).then(e=>this.processUpdateResponse(e.data)).catch(e=>{console.log("",e)}),this.$parent.refresh()},processLeadResponse(){this.$store.commit("assignloadingstatus",0),this.$parent.refresh()},requestmethod(t){let e="";switch(t.requesttype){case 1:e="QUERY";break;case 2:e="Complaint";break;case 3:e="Feedback";break;case 4:e="ORDER";break}return e},ordermethod(t){let e="";switch(t.status){case 0:e="Pending Order";break;case 1:e="Approved";break;case 2:e="Rejected";break;case 3:e="Order Dispatch";break;case 4:e="On the Way";break;case 5:e="Order Delivered";break;case 6:e="Order Rejected";break}return e},disposeoff(){if(this.random){if(confirm("Do You Really Want To Dispose")==!0){let t={transactionid:this.item.id,detail:this.detail,scheduledate:this.scheduledate,requesttype:this.requesttype,leadremark:this.newleadremark,followedid:this.followedid,status:this.status};axios.post("api/leads/conversation/dispose",t).then(e=>this.processDetailDispose(e.data)).catch(e=>{console.log("",e)})}}else alert("You dont have right to Dispose")},dispose(){if(confirm("DO you really  Disposed ")==!0){let t={transactionid:this.item.id,detail:this.detail,requesttype:4};axios.post("api/leads/conversation/dispose",t).then(e=>this.processDetailDispose(e.data)).catch(e=>{console.log("",e)})}},processDetailDispose(){this.$parent.visitcomments=!1,this.$parent.refresh()}}},ae=s("h3",{class:"text-center"},"Order Status",-1),ne={class:"table table-bordered table-font",style:{"margin-bottom":"0",color:"#fcfcfc","font-size":"13px!important"}},de=s("thead",null,[s("tr",null,[s("th",null,"S.No"),s("th",null,"Conversation"),s("th",null,"Status"),s("th",null,"Date")])],-1),ue={class:"col-md-12 p-0"},he={class:"panel panel-cascade"},pe={class:"panel-body",style:{"background-color":"#ffffff","box-shadow":"2px 2px 9px 0px darkgrey"}},me={class:"container"},_e={class:"columns"},ve={class:"column is-8 is-offset-2"},fe={class:"col-md-12 p-20 bg-white"},ge={class:"col-md-12 steps-wrapper"},be={class:"step"},$e={class:"circle"},ye={key:0,class:"bx bx-lock-open icon-success"},xe={key:1,class:"bx bx-lock-alt icon-i"},ke={key:2,class:"bx bx-lock-alt icon-i icon-danger"},we=s("div",{class:"step-title"},[s("h4",null,"Approve/Rejected")],-1),Se=s("hr",{class:"line1"},null,-1),De={class:"step"},Ce={class:"circle"},je=s("div",{class:"step-title"},[s("h4",null,"Order Dispatched")],-1),Re=s("hr",{class:"line2"},null,-1),Oe={class:"step"},Te={class:"circle"},Ne=s("div",{class:"step-title"},[s("h4",null,"On the way")],-1),Ue=s("hr",{class:"line3"},null,-1),qe={class:"step"},Ve={class:"circle"},Ye=s("div",{class:"step-title"},[s("h4",null,"Delivered/Rejected")],-1);function Ie(t,e,p,u,o,a){const i=b("step-one"),S=b("step-two"),D=b("step-three"),C=b("step-four");return l(),c("div",null,[ae,s("table",ne,[de,s("tbody",null,[(l(!0),c(O,null,T(o.list,(g,j)=>(l(),c("tr",{key:g.id},[s("td",null,$(j+1),1),s("td",null,$(g.description),1),s("td",null,$(t.fetchstatus(g)),1),s("td",null,$(o.moment(g.statusdate).format("DD-MM-YYYY")),1)]))),128))])]),s("div",ue,[s("div",he,[s("div",pe,[s("div",me,[s("div",_e,[s("div",ve,[s("div",fe,[s("div",ge,[s("div",be,[s("div",$e,[o.step1success?(l(),c("i",ye)):r("",!0),o.step1success!=!0&&!o.isdanger?(l(),c("i",xe)):r("",!0),o.isdanger?(l(),c("i",ke)):r("",!0)]),we]),Se,s("div",De,[s("div",Ce,[s("i",{class:w(["bx bxs-cart-download icon-i",o.step2success==!0?"icon-success":""])},null,2)]),je]),Re,s("div",Oe,[s("div",Te,[s("i",{class:w(["bx bx-walk icon-i",o.step3success==!0?"icon-success":""])},null,2)]),Ne]),Ue,s("div",qe,[s("div",Ve,[s("i",{class:w(["bx bx-package icon-i",o.step4success==!0?"icon-success":""])},null,2)]),Ye])]),o.orderview==1?(l(),y(i,{key:0})):r("",!0),o.orderview==2?(l(),y(S,{key:1})):r("",!0),o.orderview==3?(l(),y(D,{key:2})):r("",!0),o.orderview==4?(l(),y(C,{key:3})):r("",!0)])])])])])])])])}const We=v(re,[["render",Ie]]);export{We as S};