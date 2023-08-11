
<template>
<div>
    <top-header v-if="!$route.meta.noheader"></top-header>
    <router-view></router-view>
</div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>
<script>
import TopHeader from './pages/TopHeader.vue'
export default {
  components:{ TopHeader },
  mounted() {
    let token = localStorage.getItem("token");
    console.log(token);
    
    console.log("stage5", window.location.pathname)

  },

  methods: {
    processResponse(data) {
      if (data) {
        this.$store.dispatch("getloggedinuser");
        this.$store.dispatch("fetchmaster");
        
        this.$router.push({ name:'dashboard'})
        console.log("login successfully")
      } else {
        localStorage.removeItem("token");
        this.$router.push({name:'/'})
      }
    },
  },
}
</script>
<style scoped>

</style>

