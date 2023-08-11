<template>
    <div>
        <div class="container-center" v-if="checkloadingst">
            <img src="../../assets/loading-splash.gif" width="100" height="100">
        </div>
    </div>
</template>
<script>
import Constants from './Constants.vue';
import { mapGetters } from 'vuex'
export default {
    mixins:[Constants],
    ...mapGetters([
			'loadingstatus'
	]),
    computed:{
        checkloadingst(){
            if(this.$store.state.loadingstatus == 1){
                return true;
            }else{
                return false;
            }
        }
    }
}
</script>

    