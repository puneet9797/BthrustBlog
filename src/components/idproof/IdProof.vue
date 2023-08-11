<template>
<div>
    <div v-for="(item) in getSelectedIdsFromMasterType(idtypes,MASTER_ID_PROOF_TYPE)" v-bind:key="item.id">
        {{ item.label }}
        <div class="row">
            <div class="col-md-4" style="padding-top:15px;">
                <span style="margin-left:16px;color:#495b79;" ><i class="fa fa fa-user">  </i>Front Image</span>
                <id-proof-front :labelid="item.labelid" frontorback="1"></id-proof-front>
            </div>
            <div class="col-md-4" style="padding-top:15px;">
                 <span style="margin-left:16px;color:#495b79;" ><i class="fa fa fa-user">  </i>Back Image</span>
                 <id-proof-front :labelid="item.labelid" frontorback="2"></id-proof-front>
            </div>
        </div>
    </div>
    <div v-for="(item) in getSelectedIdsFromMasterType(contracttypes,MASTER_ID_PROOF_TYPE)" v-bind:key="item.id">
        {{ item.label }}
        
            <div class="col-md-4 row" style="padding-top:15px;">
                <span style="margin-left:16px;color:#495b79;" ><i class="fa fa fa-user">  </i>Front Image</span>
                <id-proof-front :labelid="item.labelid" frontorback="1"></id-proof-front>
            </div>
     </div>
</div>
</template>
<script>
import Constants from '../../components/utilities/Constants.vue'
import IdProofFront from './IdProofFrontBack.vue'
export default {
  components: { IdProofFront },
    mixins:[Constants],
    data(){
        return {
            idtypes:[1,2],
            contracttypes:[3,4,5,6]
        }
    },
}
</script>
