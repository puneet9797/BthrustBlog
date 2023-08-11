<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return {
            signedurlid:0,
            imageid:[]
        }
    },
    computed:{
        ...mapGetters([
		      'uploadedimage','directorypath','uploadedimageid'
		]),
    },
    methods:{
        processFile(event){
            let file = event.target.files[0];
            let extention = file.name.split('.').pop();
            
            let param = {filetype:extention,size:file.size,directorypath:this.directorypath,companyid:9}
            axios.post('api/image/getpresignedurl/notlogged', param)
                .then(response=> this.processFileResponse(file,response.data))
                .catch(error=>console.log(error));
        },
        processFileResponse(file,data){
            //if everything is fine then upload to the server
            if(!data.success){
                alert(data.message)
            } else {
                this.signedurlid = data.presignedid
                this.uploadImageToS3(file,data)
            }
        },
        uploadImageToS3(file,signedurlobject){
            //this.$modal.show('loadingmodal');
            
            let newfile = new File([file], signedurlobject.filename, { type: file.type });
            let instance = axios.create();
            delete instance.defaults.headers.common['Authorization'];

            
            instance.put(signedurlobject.uploadUrl, newfile, {
                headers: {
                'Content-Type': file.type,
                
                }
            }).then(response=>this.processUploadResponse(response))
                .catch(error=>console.log(error));
            
        },
        processUploadResponse(){
            //create a row in the image folder and save the reference in the signed url also
            let param ={signedid:this.signedurlid}
            axios.post('api/upload/savedtoamazon/notlogged', param)
            .then((response) => {
                this.$store.commit('assignuploadedimage',response.data)
                if(this.uploadedimageid==null && this.uploadedimageid==[]){
                    this.uploadedimageid=response.data.id
                }else{
                    this.uploadedimageid=this.uploadedimageid.push(response.data.id)
                }
                this.$store.commit('assignuploadedimageid',this.uploadedimageid)
                console.log(this.uploadedimageid)
                this.$parent.uploaded();
                //this.$modal.hide('loadingmodal');
            }).catch((err) => {
                console.log('Error in loading image to the server', err)
            });
        },
        uploadImageToLocalServer(event){
            //this.$modal.show('loadingmodal');

            var options = {	headers: { 'Content-Type': 'multipart/form-data'} };
            let formData = new FormData();
            formData.append('file', event.target.files[0]);
            console.log("size", event.target.files[0].size )
            const size = event.target.files[0].size;
            const file = Math.round((size / 1024));
            if (file >= 1024) {
            alert( "please select a file less than 1mb");
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
}
</script>