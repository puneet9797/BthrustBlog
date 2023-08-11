<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters([
		      'uploadedimage','edititem','idproofs'
		]),
        idproofurl(){
            if(this.item!=null){
                if(this.frontorback==1){
                    if(this.item.fronturl!=null){
                        return this.item.fronturl
                    }
                } else {
                    if(this.item.backurl!=null){
                        return this.item.backurl
                    }
                }
            }
            return null
        },
        item(){
            let found = null
            if(this.idproofs!=null){
                found = this.idproofs.find(block=>block.labelid==this.labelid)
            }
            return found
        }
    },
    methods:{
        uploaded(){
            //take the uploaded image from the store and post to the server
            //console.log("Hello")
            let param = {labelid:this.labelid,userid:this.edititem==null?0:this.edititem.id,uploadedid:this.uploadedimage.id,frontorback:this.frontorback}
            this.$http.post('api/idproof/saveuploaded',param)
				.then(response=>this.processResponse(response.data))
				.catch(error=>console.log(error));
        },
        processResponse(data){
            this.$store.commit("updateappendidproofs",data)
        }
    }
}
</script>