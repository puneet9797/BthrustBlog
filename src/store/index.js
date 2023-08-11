import {createStore} from 'vuex'
export default createStore({
	state: {
		loggedinuser:[],
		loadingstatus:0,
		showMobileMenu:false,
		directorypath:'',
		uploadedimage:'',
		uploadedimageid:[],
		bloodtype:'',
		currentpage:1,
		pageno:1,
		edititem:[],
		products:[],
		donations:[],
		categories:[],
		amountwithtax:0,
		master:[],
		orderconversation:[]
	},	    
	mutations: {
		assignorderconversation(state,u){
			state.orderconversation=u
		},
		assignamountwithtax(state,u){
			state.amountwithtax=u
		},
		assignloadingstatus(state,u){
			state.loadingstatus=u
		},
		assigncategories(state,u){
			state.categories=u
		},
		assigndonations(state,u){
			state.donations=u
		},
		assignproducts(state,u){
			state.products=u
		},
		assignedititem(state,u){
			state.edititem=u
		},
		assignpageno(state,u){
			state.pageno=u
		},
		assignloggedinuser(state,u){
			state.loggedinuser=u
		},
		assigncurrentpage(state,u){
			state.currentpage=u
		},
		assignuploadedimageid(state,u){
			state.uploadedimageid=u
		},
		assignuploadedimage(state,u){
			state.uploadedimage=u
		},
		assigndirectorypath(state,u){
			state.directorypath=u
		},
		assignshowMobileMenu(state,u){
			state.showMobileMenu=u
		},
		assignbloodtype(state,u){
			state.bloodtype=u
		},
		assignmaster(state,u){
			state.master=u
		}

	},
	actions:{
		fetchmaster({ commit }){
			window.axios.post('api/master/fetch/required')
				.then(response=>commit("assignmaster",response.data))
				.catch(error=>console.log(error));
			
		},
		getloggedinuser({ commit }){
			axios.post('api/user/getloggedinuser')
				.then(response=>commit("assignloggedinuser",response.data.user))
				.catch(error=>console.log(error));
		},
		fetchproducts({ commit }){
			axios.post('api/products/fetch')
				.then(response=>commit("assignproducts",response.data))
				.catch(error=>console.log(error));
		},
		fetchcategories({ commit }){
			axios.post('api/category/fetch')
				.then(response=>commit("assigncategories",response.data))
				.catch(error=>console.log(error));
		},
		
	},

	getters: {
		orderconversation:state=>{
			return state.orderconversation
		},
		master:state=>{
			return state.master
		},
		amountwithtax:state=>{
			return state.amountwithtax
		},
		loadingstatus:state=>{
			return state.loadingstatus
		},
		categories:state=>{
			return state.categories
		},
		donations:state=>{
			return state.donations
		},
		products:state=>{
			return state.products
		},
		edititem:state=>{
			return state.edititem
		},
		pageno:state=>{
			return state.pageno
		},
		loggedinuser:state=>{
			return state.loggedinuser
		},
		currentpage:state=>{
			return state.currentpage
		},
		bloodtype:state=>{
			return state.bloodtype
		},
		directorypath:state=>{
			return state.directorypath
		},
		showMobileMenu:state=>{
			return state.showMobileMenu
		},
		uploadedimage:state=>{
			return state.uploadedimage
		},
		uploadedimageid:state=>{
			return state.uploadedimageid
		},
	}
})

