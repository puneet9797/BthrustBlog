<template>
<div>
    <div class="col-md-6" >
       <button class="badge btn-success btn-xs">
           <a style="color:white" :href="idproofurl" target="_blank" v-if="idproofurl!=null">View</a></button> 
    </div>
</div>
</template>
<script>
import IdProofMixin from './IdProofMixin.vue'
export default {
    mixins:[IdProofMixin],
    props:['labelid','frontorback'],
    mounted() {
        this.$store.dispatch("fetchmaster")
    },
}

</script>