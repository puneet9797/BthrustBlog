import{_ as T}from"./Constants.509ac60c.js";import{_ as q}from"./category.f4509476.js";import{_ as D,o as d,c as _,a as t,t as s,a3 as k,a5 as N,i as e}from"./index.03d082ff.js";const B="/assets/back.6928687b.png",C={mixins:[T],data(){return{transactions:[]}},mounted(){this.refresh()},computed:{},methods:{setquantity(){var i,a,c;let l=0;return console.log("called"),console.log((i=this.transactions)==null?void 0:i.saleitems),(c=(a=this.transactions)==null?void 0:a.saleitems)==null||c.forEach(o=>{console.log(o.quantity),l=l+parseFloat(o.quantity)}),l},refresh(){var i,a;console.log("router :"+((i=this.$route.params)==null?void 0:i.saleid));let l={transactionid:(a=this.$route.params)==null?void 0:a.saleid};axios.post("api/sale/details",l).then(c=>this.processDetails(c.data)).catch(c=>console.log(c))},processDetails(l){console.log("cc"),this.transactions=l.saletransaction}}},V={class:"headline mb-20"},A=t("div",{class:"title flex-row-centered"},[t("img",{src:q,class:"img",width:"20",height:"20"}),t("div",{class:"title-span"},"Sale Details")],-1),E={class:"flex-row-centered"},I={class:"btn"},M={class:"mt-30 boxshow ml-30"},z={class:"col-md-12 flex-between-row gap-20 mt-20"},F={class:"col-md-6 p-0"},L=t("div",{class:"col-md-3 p-0"},[t("label",{class:"width-30"},"Patient Name :")],-1),P={class:"col-md-7 p-0"},U={class:"col-md-6 p-0"},G=t("div",{class:"col-md-4 p-0"},[t("label",{for:""},"Physician Name Dr:")],-1),Q={class:"col-md-6 p-0"},R={class:"col-md-12 flex-between-row gap-20 mt-20"},j={class:"col-md-6 p-0"},H=t("div",{class:"col-md-3 p-0"},[t("label",{class:"width-30"},"Mobile No.")],-1),J={class:"col-md-7 p-0"},K={class:"col-md-6 p-0"},O=t("div",{class:"col-md-4 p-0"},[t("label",{for:""},"Invoice No :")],-1),W={class:"col-md-6 p-0"},X={class:"col-md-12"},Y={class:"table-responsive"},Z={class:"table",style:{"text-align":"center"}},$=t("thead",null,[t("tr",null,[t("th",null,"S.No"),t("th",null,"Category"),t("th",null,"Item"),t("th",null,"Quantity"),t("th",null,"Unit")])],-1),tt=t("td",null,null,-1),st=t("td",null,null,-1),ot=t("td",null,null,-1),lt={for:""},et=t("td",null,null,-1),nt={class:"col-md-4 mt-20"},it={class:"table-responsive"},ct={class:"table",style:{"text-align":"center"}},at=t("thead",null,[t("tr",null,[t("th",null,"Vial"),t("th",null,"Concentration")])],-1),dt=t("input",{type:"checkbox",checked:"",readonly:""},null,-1),_t={class:"col-md-12 text-right",style:{"font-size":"16px"}},rt=t("label",{for:""},"Total Vial :",-1),ht=t("div",{class:"col-md-4"},null,-1),ut={class:"col-md-4 text-right boxshow",style:{"font-size":"18px"}},mt={class:"col-md-12"},pt={for:""},bt=e("Amount : "),vt=t("i",{class:"bx bx-rupee"},null,-1),xt={class:"col-md-12 mt-10"},gt={for:""},ft=t("i",{class:"bx bx-rupee"},null,-1),yt={class:"col-md-12 mt-10"},wt={for:""},kt=e("Shipping Charges : "),Nt=t("i",{class:"bx bx-rupee"},null,-1),St={class:"col-md-12 mt-10"},Tt={for:""},qt=e("Total Amount : "),Dt=t("i",{class:"bx bx-rupee"},null,-1);function Bt(l,i,a,c,o,S){var h,u,m,p,b,v,x,g,f;return d(),_("div",null,[t("div",V,[A,t("div",E,[t("button",I,[t("img",{src:B,width:"50",height:"50",onClick:i[0]||(i[0]=n=>this.$router.back(-1))})])])]),t("div",M,[t("div",z,[t("div",F,[L,t("div",P,s((u=(h=o.transactions)==null?void 0:h.patient)==null?void 0:u.name),1)]),t("div",U,[G,t("div",Q,s((p=(m=o.transactions)==null?void 0:m.doctor)==null?void 0:p.name),1)])]),t("div",R,[t("div",j,[H,t("div",J,s((v=(b=o.transactions)==null?void 0:b.patient)==null?void 0:v.mobile),1)]),t("div",K,[O,t("div",W,s((x=o.transactions)==null?void 0:x.id),1)])])]),t("div",X,[t("div",Y,[t("table",Z,[$,t("tbody",null,[(d(!0),_(k,null,N(o.transactions.saleitems,(n,r)=>{var y,w;return d(),_("tr",{key:n.id},[t("td",null,s(r+1),1),t("td",null,s((y=n.category)==null?void 0:y.name),1),t("td",null,s((w=n.product)==null?void 0:w.name),1),t("td",null,s(n.quantity),1),t("td",null,s(l.getMasterLabelByType(n.unit,l.MASTER_UNIT)),1)])}),128)),t("tr",null,[tt,st,ot,t("td",null,[t("label",lt,s(S.setquantity()),1)]),et])])])])]),t("div",nt,[t("div",it,[t("table",ct,[at,t("tbody",null,[(d(!0),_(k,null,N((g=o.transactions)==null?void 0:g.selectedvial,(n,r)=>(d(),_("tr",{key:n.id},[t("td",null,[e(s(r+1)+". ",1),dt]),t("td",null,s(n.concentration),1)]))),128))])]),t("div",_t,[rt,e(" "+s(o.transactions.totalvial),1)])])]),ht,t("div",ut,[t("div",mt,[t("label",pt,[bt,vt,e(s(o.transactions.amount),1)])]),t("div",xt,[t("label",gt,[e("GST ("+s(o.transactions.taxpercent)+")% : ",1),ft,e(s(o.transactions.taxes),1)])]),t("div",yt,[t("label",wt,[kt,Nt,e(s((f=o.transactions)==null?void 0:f.shippingcharges),1)])]),t("div",St,[t("label",Tt,[qt,Dt,e(s(o.transactions.amountwithtax),1)])])])])}const Et=D(C,[["render",Bt]]);export{Et as default};