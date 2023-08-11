<template>
<modal name="imagemodal" @before-open="beforeOpen" height="auto" :scrollable="true">
	<div class="" style="padding: 15px 11px;">
		<div class= "txt-decr" style="text-align:left" >
			 <h3>UPLOAD FILES</h3> 
		</div>
			<div class="col-md-12">
				<hr>
				<div class=" fileupload-buttonbar  " style="">
					<div class="row">
						<upload></upload>
						<div class="col-md-5 file_bar" style="margin-top: 20px;" v-if="false">
							<div class=" btn  fileinput-button" style="text-align:center; width:100%">
								<i class="fa fa-cloud-upload fa-5x" > </i>
								<input type="file" id="attach_file" name="files"  @change="processFile($event)">
							</div>
						</div>
						<div class="col-md-7" style="margin-top: 20px;">
							<img v-bind:src="uploadedimage.fullurl"  v-if="uploadedimage!=null" style="width:100%">
						</div>
					</div>
				</div>
			</div>
	</div>
	
	
	<div class="col-md-12">
		<hr>
			<div class="row">
				<div class="col-md-6 " style="text-align: right;">
					
				</div>	
				<div class="col-md-6" style="text-align: right;padding:5px ">
					<button  style="text-align:center" class= "btn btn-primary" @click="saveimage" type="button" v-if="uploadedimage!=null">Save</button>
					<button class= "btn btn-danger" @click="cancel" type="button">Cancel</button> 
				</div>
			</div>
		</div>
		<loading-modal></loading-modal>
</modal>
</template>
    
<script>
import { mapGetters } from 'vuex'
import LoadingModal from "../utilities/LoadingModal";
import Upload from "../upload/Upload.vue";
export default {
        	data(){
        		return {
        			imageuploaded:null
        		}
        	},
			components: {
    LoadingModal,
    Upload
},
        	mounted(){
        		//initialize the array as 0 for each module
        		
        	},
        	computed: {
				...mapGetters([
		     		'uploadedimage'
		    	]),
        		getimagurl:function(){
        			let url = "#";
					//console.log("dasdd",this.uploadedimage)
        			if(this.uploadedimage!=null)
        			{
        				url = window.axios.defaults.baseURL+"/"+this.uploadedimage.path+"/"+this.uploadedimage.name;
        			}
        			return url;
        		}
        	},
        	methods:{
        		beforeOpen () {
        			this.imageuploaded = null;
					this.$store.commit('assignuploadedimage',null)
        		  },
        		saveimage(){
        			//take the category id and post the image id and category id
        			this.$parent.saveimage(this.uploadedimage.id);
        			this.$modal.hide('imagemodal');
        		},
        		onSuccess(){
        			
        			this.$modal.hide('imagemodal');
        			
        		},
        		cancel(){
        			this.$modal.hide('imagemodal');
        		},
        		processFile(event){
					this.$modal.show('loadingmodal');
        			var options = {	headers: { 'Content-Type': 'multipart/form-data'} };
        			let formData = new FormData();
                    formData.append('file', event.target.files[0]);
					console.log("size", event.target.files[0].size )
					const size = event.target.files[0].size;
                	const file = Math.round((size / 1024));
					if (file >= 1024) {
                    alert(
                      "please select a file less than 1mb");
					   this.$modal.hide('loadingmodal');
					   return false;
                	} 
        			this.$http.post('api/upload/image', formData,options)
        			.then((response) => {
    					this.imageuploaded = response.data;
						this.$modal.hide('loadingmodal');
						alert("Photo Uploaded")
    				}).catch((err) => {
    		            console.log('Error in loading image to the server', err)
        		    });
					
        		}
        		
        	}
        };
    </script>
    <style>
	   .file_bar{
	       border: 1px solid #dadada;
	       border-width:4px;  
	       border-style: dashed;
	       margin-top:10px;    
	       height: 150px;
	   }
	   .up_icon{
	       font-size: 32px;
         font-weight: 100;
         padding-top: 14px;
	   }
	</style>