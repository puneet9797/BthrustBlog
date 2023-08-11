<template>
<div class="container">
    <div class="row" style="padding:25px">
        <div class="col-lg-3 col-md-2"></div>
        <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-key">
                <i class="fa fa-key"></i>
            </div>
            <div class="col-lg-12 login-title">
                ADMIN PANEL
            </div>

            <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form">
                    <div class="form-group">
                        <label class="form-control-label">EMAIL</label>
                        <input type="text" v-model="email" class="form-control">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label">PASSWORD</label>
                        <input type="password" v-model="password" class="form-control">
                    </div>
                    <span v-if="displayError">{{message}}</span>
                    <div class="col-lg-12 loginbttm">
                         
                        <div class="col-lg-12 login-btm login-button">
                            <q-spinner-bars v-if="spinner"
                                color="primary"
                                size="2em"
                            />
                            <button v-if="!spinner" type="submit" class="btn btn-outline-primary" @click="loginwithemailpassword()" >LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-2"></div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            email:'',
            password:'',
            displayError:false,
            message:'',
            spinner:false
        }
    },
    methods: {
        loginwithemailpassword(){
            this.spinner=true
            // this.$store.commit('assignloadingstatus',1)
            let param = {email:this.email,password:this.password}
    		axios.post('api/loginwithemailpassword',param)
				.then(response=>this.processResponse(response.data))                
				.catch(error=>this.errorFound(error));
    	},
        errorFound(error){
            this.spinner=false
            this.displayError = true;
            this.message = "Something Went Wrong, Connection Error"
        },
        processResponse(data){
            this.spinner=false
            if(data.success){
				Ls.set('token',data.access_token)
				Ls.set('user',data.user)
				this.$store.commit('assignloggedinuser',data.user)
				// this.$notify({text:"login successfully",type:"success"})
				this.$router.push({name:"dashboard"})
				// this.$store.commit('assignloadingstatus',0)
			} else {
				this.displayError = true;
                this.message = "Email/Password Not Correct"
                localStorage.removeItem("token");
				// this.$notify({text:"Invalid Credentials",type:"error"})
				// this.$store.commit('assignloadingstatus',0)
            }
      	},
    },
}
</script>
<style scoped>
input[type=text] {
    background-color: #fff;
    border: none;
    border-bottom: 2px solid #0DB8DE;
    border-top: 0px;
    border-radius: 0px;
    font-weight: bold;
    outline: 0;
    margin-bottom: 20px;
    padding-left: 5px;
    color: black;
}

input[type=password] {
    background-color: #fff;
    border: none;
    border-bottom: 2px solid #0DB8DE;
    border-top: 0px;
    border-radius: 0px;
    font-weight: bold;
    outline: 0;
    padding-left: 5px;
    margin-bottom: 20px;
    color: black;
}

</style>