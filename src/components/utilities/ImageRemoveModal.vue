<template>
<modal name="imageremovemodal" @before-open="beforeOpen" height="auto" :scrollable="true">
    <div class="modal-content">
 <div class="card-header">
        <h5 class="modal-title">Delete Image</h5>
 </div>
<div class="modal-body">



 <div class="marginimage">
 <div class=col-md-12>
<div class="row">
<div class="col-md-2" v-for="(imageitem,index) in getimages">
<ul  style="list-style-type:none;">
	<li>
	<input :value="imageitem.id" name="product" type="checkbox" v-model="checkedimages" />
	<img v-bind:src="getimageurl(imageitem)" width="50" @error="imageLoadError(imageitem)">
	</li>
</ul>
</div>
</div>
</div>
</div>
</div>
 <div class="modal-footer">
	<button  class="btn btn-primary btnformat" @click="saveimage" type="button">Save</button>
	<button  class= "btn btn-danger btnformat" @click="cancel" type="button" style="margin-left: 70px;">Cancel</button>

</div>
</div>
</modal>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	data(){
		return {
			checkedimages:[]
		}
	},
	mounted(){
		console.log("sadsdsd",this.removeitems)
		//initialize the array as 0 for each module
	},
	computed: {
		...mapGetters([
			'removeitems'
		]),
		getimages(){
			if(this.removeitems!=null)
				return this.removeitems.images;
			return [];
		}
	},
	methods:{
		getimageurl(imageitem){
			return window.axios.defaults.baseURL+"/uploads/"+imageitem.name;
		},
		beforeOpen (event) {
			
			},
		saveimage(){
			let params = {imageids:this.checkedimages};
			let self = this;
			axios.post('api/image/remove', params)
				.then((response) => {
					this.$parent.removeitem.images.forEach(function(item,index){
						self.$parent.removeitem.images.splice(index, 1);
					});
				})
				.catch((err) => {
					console.log('', err)
			});
			//take the category id and post the image id and category id
			this.$modal.hide('imageremovemodal');
		},
		cancel(){
			this.$modal.hide('imageremovemodal');
		},
		imageLoadError(){
			
		}
		
	}
};
</script>