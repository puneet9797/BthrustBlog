<script>
import { mapGetters } from 'vuex'
export default{
    data() {
        return {
            MASTER_UNIT:1,
            MASTER_TAX:2,
            MASTER_CONCENTRATION:3,
            MASTER_CHARGES:4,
        }
    },
    computed:{
        ...mapGetters(['bloodtype','master'])
    },
    methods:{
        getMasterLabelByType(labelid,type){
			let param = {labelid:labelid,type:type}
			let found = this.master.find(function(item) {
				for (var key in param) {
					if (item[key] === undefined || item[key] != param[key])
						return false;
				}
				return true;
			})
			if(typeof found!=='undefined')
				return found.label
			return labelid
		},
		getSelectedIdsFromMasterType(ids,type){
			let types = this.master.filter(a=>a.type==type)
			let found = types.filter(a=>ids.includes(a.labelid))
			return found;
		},
		getmastertype(type){
			let types = this.master.filter(a=>a.type==type)
			return types;
		},
        nomineeRelation(item){
            let type=''
            if(item!=null){
                switch (item.nomineerelation) {
                    case 1:
                        type= 'Wife'
                        break;
                    case 2:
                        type= 'Husband'
                        break;
                    case 3:
                        type= 'Father'
                        break;
                    case 4:
                        type= 'Mother'
                        break;
                    case 5:
                        type= 'Sister'
                        break;
                    case 6:
                        type= 'Brother'
                        break;
                    case 7:
                        type= 'Son'
                        break;
                    case 8:
                        type= 'Daughter'
                        break;
                    default:
                        type=''
                        break;
                }
            }
            return type;
        },
        fetchstatus(item){
            let type=''
            if(item!=null){
                switch (item.status) {
                    case 0:
                        type= 'Pending'
                        break;
                    case 1:
                        type= 'Approved'
                        break;
                    case 2:
                        type= 'Rejected'
                        break;
                    case 3:
                        type= 'Order Dispatched'
                        break;
                    case 4:
                        type= 'On the Way'
                        break;
                    case 5:
                        type= 'Delivered'
                        break;
                    default:
                        type=''
                        break;
                }
            }
            return type;
        }
    }
} 
    
</script>