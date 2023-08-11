<template>
<div>
    <button class="badge btn-success btn-xs">
        <a style="color:white" :href="idproofurl" target="_blank" v-if="idproofurl!=null">View</a></button> 
    <upload></upload>
</div>
</template>
<script>
import Upload from '../upload/Upload.vue'

import IdProofMixin from './IdProofMixin.vue'
export default {
    mixins:[IdProofMixin],
    components: { Upload },
    props:['labelid','frontorback'],
}
</script>