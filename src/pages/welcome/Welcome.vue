<template>
    <!-- <h1>Hello Page</h1>
    <button class="btn btn-success" @click="openform()">Register Form</button>
     <q-btn color="deep-orange" glossy label="Deep Orange" /> -->
  <q-layout view="hHh lpR fFf">

    
    <q-page-container style="padding-bottom:150px" class="flagimage">
        <!-- <img src="../../assets/flag.png" alt="" width="50" height="120"> -->
        <carousel></carousel>
        <!-- <img src="../../assets/flag.png" alt="" width="50" height="120"> -->
        <div class="col-md-12">
            <div class="col-md-6"></div>
            <div class="col-md-6" style="text-align:center"><button class="clickform" @click="openform()">Enter Quiz<i class='bx bxs-arrow-from-left'></i></button></div>
        </div>
        
    </q-page-container>
    
  </q-layout>
</template>
<script>
import Carousel from './carousel.vue';
export default {
    components: { Carousel },
    data() {
        return {};
        // slide:''
    },
    methods: {
        openform() {
            this.$router.push({ path: "quiz" });
        }
    },
    
}
</script>
<style scoped>
.flagimage{
    background-image: url(../../assets/background.jpg);
    background-repeat: no-repeat;
    background-size:cover ;
}
.clickform{
    background: green;
    font-size: 25px;
    color: white;
}
.clickform:hover{
    background: white;
    font-size: 25px;
    color: green;
    border:1px green solid;
}
</style>