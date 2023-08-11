<template>
<div>
    <div class="headline mb-20">
        <div class="title flex-row-centered">
            <img src="../../assets/box.png" class="img" width="20" height="20">
            <div class="title-span">Add Product</div>
        </div>
        <div class="flex-row-centered">
            <!-- <w-spinner /> -->
        </div>
    </div>
    <div class="mt-30 boxshow ml-30">
        <div class="col-md-12 mt-20">
            <div class="col-md-6">
                <div class="col-md-4">
                    <label for="">Select Category</label>
                </div>
                <div class="col-md-8">
                    <select class="form-control form-cascade-control input-small" v-model="categoryid" >
                        <option value="0">Select</option>
                        <option v-for="item in categories" :key="item.id" :value="item.id">{{ item.name }}</option>
                    </select>
                </div>
                <div class="col-md-4 mt-20">
                    <label for="">Add Product</label>
                </div>
                <div class="col-md-8 mt-20">
                    <input type="text" v-model="name" class="form-control form-cascade-control input-small">
                </div>
                <div class="col-md-4  mt-20">
                    <label for="">Add Price</label>
                </div>
                <div class="col-md-8  mt-20">
                    <input type="number" v-model="sp" class="form-control form-cascade-control input-small">
                </div>
                <div class="col-md-4  mt-20">
                    <label for="">Add Unit</label>
                </div>
                <div class="col-md-8 mt-20">
                    <select v-model="unit" class="form-control form-cascade-control input-small">
                        <option value="0">select</option>
                        <option v-for="option in getmastertype(MASTER_UNIT)" :value="option.labelid" :key="option.labelid">{{ option.label }}</option>
                    </select>
                </div>
                <button type="button" class="btn btn-primary mt-10" @click="submit()">Submit</button>
            </div>
            <!-- <div class="col-md-6">

                <div class="col-md-4 mt-20">
                    <label for="">Tax Percent</label>
                </div>
                <div class="col-md-8 mt-20">
                    <input type="number" step="0.2" v-model="percent" class="form-control form-cascade-control input-small" @input="updatetax()">
                </div>
                <div class="col-md-4 mt-20">
                    <label for="">CGST</label>
                </div>
                <div class="col-md-8 mt-20">
                    <input type="number" step="0.2" v-model="cgst" class="form-control form-cascade-control input-small">
                </div>
                <div class="col-md-4 mt-20">
                    <label for="">SGST</label>
                </div>
                <div class="col-md-8 mt-20">
                    <input type="number" step="0.2" v-model="sgst" class="form-control form-cascade-control input-small">
                </div>
                <div class="col-md-4 mt-20">
                    <label for="">IGST</label>
                </div>
                <div class="col-md-8 mt-20">
                    <input type="number" step="0.2" v-model="igst" class="form-control form-cascade-control input-small">
                </div>
            </div> -->
        </div>
    </div>
    <div class="col-md-12 mt-30">
        <div class="table-responsive">
            <table class="table" style="text-align:center">
                <thead>
                    <th>S.No</th>
                    <th>Category Name</th>
                    <th>Product Name</th>
                    <th>Selling Price</th>
                    <th>Unit</th>
                    <!-- <th>CGST</th>
                    <th>SGST</th>
                    <th>IGST</th> -->
                    <!-- <th>Username</th> -->
                </thead>
                <tbody v-for="(item,index) in product" :key="item.id">
                    <td>{{ ((currentPage-1) * perPage) + (index+1) }}</td>
                    <td>{{ item.category?.name }}</td>
                    <td>{{item.name}}</td>
                    <td>{{ item.sp }}</td>
                    <td>{{getMasterLabelByType(item.unit,MASTER_UNIT)  }}</td>
                    <!-- <td>{{ item.cgst }}</td>
                    <td>{{ item.sgst }}</td>
                    <td>{{ item.igst }}</td> -->
                </tbody>
            </table>
        </div>
        <pagination v-model="currentPage" :records="rows" :per-page="perPage" @paginate="clickCallback"/>
    </div>
</div>
</template>
<script>
import moment from 'moment';
import Pagination from 'v-pagination-3';
import { mapGetters } from 'vuex';
import Constants from '../../components/utilities/Constants.vue';
export default{
    mixins:[Constants],
    data() {
        return {
            product:[],
            rows:0,
            perPage:10,
            moment:moment,
            categoryid:0,
            currentPage:1,
            name:'',
            sp:'',
            unit:0,
            cgst:0.0,
            sgst:0.0,
            igst:0.0,
            percent:0
        }
    },
    components: { Pagination },
    computed: {
        ...mapGetters([
            'currentpage','categories'
        ]),
        
    },
    mounted(){
        this.refresh()
    },
    methods:{
        clickCallback(currentPage) {
            this.currentpage = currentPage
            this.$store.commit("assigncurrentpage", currentPage);
            // this.$store.commit("assigncurrentpage",currentpage);
            this.refresh();
        },
        refresh(){
            this.name=''
            this.$store.dispatch('fetchcategories')
            this.categoryid=0
            this.sp=0
            this.unit=0
            this.cgst=0.0
            this.sgst=0.0
            this.igst=0.0
            axios.post('api/products/fetch')
                .then(response => this.processResponseProduct(response.data))
                .catch(error => console.log(error));
            
        },
        processResponseProduct(data){
            this.product=data
        },
        submit(){
            if(this.name=='' || this.categoryid==0){
                alert('Fill the fields to Submit')
            }else{
                let param = {id:this.id, categoryid:this.categoryid,name:this.name,sp:this.sp,unit:this.unit,
                    cgst:this.cgst,
                    sgst:this.sgst,
                    igst:this.igst,
                    percent:this.percent}
                axios.post('api/product/createupdate', param)
                    .then(response => this.processResponse(response.data))
                    .catch(error => console.log(error));
            }
        },
        processResponse(){
            alert('Saved Successfully')
            this.refresh()
        },
        updatetax(){
            if(this.percent!=0){
                this.cgst= parseInt(this.percent)/2;
                this.sgst= parseInt(this.percent)/2;
                this.igst=this.percent
            }else{
                this.cgst=0.0;
                this.sgst= 0.0;
                this.igst=0.0
            }
        }
    }
}  
</script>