import{h as v}from"./moment.9709ab41.js";import{P as f}from"./vue-pagination-2.min.a2874229.js";import{_ as b,W as y,r as P,o as i,c as n,a as t,w as c,a4 as u,a3 as a,a5 as d,t as r,v as h,j as S,k}from"./index.03d082ff.js";import{_ as V}from"./Constants.509ac60c.js";import{_ as U}from"./box.7a0b6726.js";const w={mixins:[V],data(){return{product:[],rows:0,perPage:10,moment:v,categoryid:0,currentPage:1,name:"",sp:"",unit:0,cgst:0,sgst:0,igst:0,percent:0}},components:{Pagination:f},computed:{...y(["currentpage","categories"])},mounted(){this.refresh()},methods:{clickCallback(e){this.currentpage=e,this.$store.commit("assigncurrentpage",e),this.refresh()},refresh(){this.name="",this.$store.dispatch("fetchcategories"),this.categoryid=0,this.sp=0,this.unit=0,this.cgst=0,this.sgst=0,this.igst=0,axios.post("api/products/fetch").then(e=>this.processResponseProduct(e.data)).catch(e=>console.log(e))},processResponseProduct(e){this.product=e},submit(){if(this.name==""||this.categoryid==0)alert("Fill the fields to Submit");else{let e={id:this.id,categoryid:this.categoryid,name:this.name,sp:this.sp,unit:this.unit,cgst:this.cgst,sgst:this.sgst,igst:this.igst,percent:this.percent};axios.post("api/product/createupdate",e).then(o=>this.processResponse(o.data)).catch(o=>console.log(o))}},processResponse(){alert("Saved Successfully"),this.refresh()},updatetax(){this.percent!=0?(this.cgst=parseInt(this.percent)/2,this.sgst=parseInt(this.percent)/2,this.igst=this.percent):(this.cgst=0,this.sgst=0,this.igst=0)}}},x=k('<div class="headline mb-20"><div class="title flex-row-centered"><img src="'+U+'" class="img" width="20" height="20"><div class="title-span">Add Product</div></div><div class="flex-row-centered"></div></div>',1),N={class:"mt-30 boxshow ml-30"},A={class:"col-md-12 mt-20"},C={class:"col-md-6"},R=t("div",{class:"col-md-4"},[t("label",{for:""},"Select Category")],-1),T={class:"col-md-8"},M=t("option",{value:"0"},"Select",-1),B=["value"],I=t("div",{class:"col-md-4 mt-20"},[t("label",{for:""},"Add Product")],-1),E={class:"col-md-8 mt-20"},D=t("div",{class:"col-md-4 mt-20"},[t("label",{for:""},"Add Price")],-1),F={class:"col-md-8 mt-20"},L=t("div",{class:"col-md-4 mt-20"},[t("label",{for:""},"Add Unit")],-1),j={class:"col-md-8 mt-20"},G=t("option",{value:"0"},"select",-1),W=["value"],q={class:"col-md-12 mt-30"},z={class:"table-responsive"},H={class:"table",style:{"text-align":"center"}},J=t("thead",null,[t("th",null,"S.No"),t("th",null,"Category Name"),t("th",null,"Product Name"),t("th",null,"Selling Price"),t("th",null,"Unit")],-1);function K(e,o,O,Q,l,p){const g=P("pagination");return i(),n("div",null,[x,t("div",N,[t("div",A,[t("div",C,[R,t("div",T,[c(t("select",{class:"form-control form-cascade-control input-small","onUpdate:modelValue":o[0]||(o[0]=s=>l.categoryid=s)},[M,(i(!0),n(a,null,d(e.categories,s=>(i(),n("option",{key:s.id,value:s.id},r(s.name),9,B))),128))],512),[[u,l.categoryid]])]),I,t("div",E,[c(t("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=s=>l.name=s),class:"form-control form-cascade-control input-small"},null,512),[[h,l.name]])]),D,t("div",F,[c(t("input",{type:"number","onUpdate:modelValue":o[2]||(o[2]=s=>l.sp=s),class:"form-control form-cascade-control input-small"},null,512),[[h,l.sp]])]),L,t("div",j,[c(t("select",{"onUpdate:modelValue":o[3]||(o[3]=s=>l.unit=s),class:"form-control form-cascade-control input-small"},[G,(i(!0),n(a,null,d(e.getmastertype(e.MASTER_UNIT),s=>(i(),n("option",{value:s.labelid,key:s.labelid},r(s.label),9,W))),128))],512),[[u,l.unit]])]),t("button",{type:"button",class:"btn btn-primary mt-10",onClick:o[4]||(o[4]=s=>p.submit())},"Submit")])])]),t("div",q,[t("div",z,[t("table",H,[J,(i(!0),n(a,null,d(l.product,(s,_)=>{var m;return i(),n("tbody",{key:s.id},[t("td",null,r((l.currentPage-1)*l.perPage+(_+1)),1),t("td",null,r((m=s.category)==null?void 0:m.name),1),t("td",null,r(s.name),1),t("td",null,r(s.sp),1),t("td",null,r(e.getMasterLabelByType(s.unit,e.MASTER_UNIT)),1)])}),128))])]),S(g,{modelValue:l.currentPage,"onUpdate:modelValue":o[5]||(o[5]=s=>l.currentPage=s),records:l.rows,"per-page":l.perPage,onPaginate:p.clickCallback},null,8,["modelValue","records","per-page","onPaginate"])])])}const st=b(w,[["render",K]]);export{st as default};
