<template>
    <div>
        <!-- <div class="col-md-12 text-right pt-10"><button class="login" @click="login()">LogIn</button></div> -->
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            logintrue:false
        }
    },
    mounted() {
        console.log(this.loggedinuser)
        if(localStorage.token!=null){
            this.logintrue=true
        }else{
            this.logintrue=false
        }
    },
    computed:{
        ...mapGetters(['loggedinuser']),
        loginnav:function(){
            if(localStorage['token']!=null){
              return  this.logintrue=true
            }else{
               return  this.logintrue=false
            }
        }
    },
    methods: {
        login(){
            this.$router.push({name:'login'})
        },
        logout(){
            localStorage.removeItem("token");
            this.$router.push({name:'login'})
        }
    },
}
</script>
<style scoped>
.login{
    font-weight: 700;
    background: #000080;
    color: white;
}
</style>
<!-- <template>
<div>
    <div class="nav-menu"> 
        <span style="font-size:30px"><i class="fas fa-bars" @click="showMenu()"></i></span>
        <div lass="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'"> 
            <div class="logo">Logo</div>
            <ul class="nav-items">
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div class="login-button">Login</div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            showMobileMenu: false,
        };
    },
    computed:{
        ...mapGetters(['showMobileMenu'])
    },
    methods: {
        showMenu() {
            this.showMobileMenu = !this.showMobileMenu;
            this.$store.commit('assignshowMobileMenu',this.showMobileMenu)
        },
    },
};
</script>

<style scoped>
.nav-menu {
    background-color: white;
}
.nav-content {
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    align-items: center;
}
.nav-items {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;

}
li {
    padding: 0 10px;
}
i {
    display: none;
}
@media screen and (max-width: 768px) {
    .nav-menu {
        padding-top: 10px;
        position: absolute;
        width: 100%;
    }
    .open-menu {
        opacity: 1;
        height: 150px;
    }
    .closed-menu {
        opacity: 0;
        height: 0;
        padding: 0;
    }
    .nav-content {
        flex-direction: column;
        z-index: 100;
        position: relative;
        transition: all 0.2s ease-out;
    }
    .nav-items {
        flex-direction: column;
    }
    i {
        display: block;
        text-align: right;
        padding: 0 10px 10px 0;
    }
}
</style> -->