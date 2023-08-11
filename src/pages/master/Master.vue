<template>
    <div>
        <div class="headline mb-20">
            <div class="title flex-row-centered">
                <img src="../../assets/category.png" class="img" width="20" height="20">
                <div class="title-span">Masters</div>
            </div>
            <div class="flex-row-centered">
                <!-- <w-spinner /> -->
            </div>
        </div>
        <div class="col-md-12" v-if="!show">
            <div class="col-md-12">
                <div class="col-md-4 mt-10 mb-20" style="text-align:right;">
                    <select v-model="ajaxtype" class="form-control">
                        <option :value="0">Select</option>
                        <option v-for="(item) in gettypes(0)" :value="item.labelid" :key="item.id">{{ item.label }}</option>
                    </select>
                </div>
                <div class="col-md-4 mt-10 text-center">
                    <button @click="addnew()" class="btn btn-primary"> <span> Add New </span></button>
                </div>
                   
               
            </div>
            <div class="col-md-12">
                <div class="table-responsive">
                    <table class="table" style="text-align:center">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Label</th>
                                <th>LabelId</th>
                                <!-- <th>Sequence</th> -->
                                <th>Value</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in gettypes1" v-bind:key="item.id">
                                <td>{{ index + 1 }}</td>
                                <td>{{ item.label }}</td>
                                <td>{{ item.labelid }}</td>
                                <!-- <td>{{ item.sequence }}</td> -->
                                <td>{{ item.value}}</td>
                                <td><button @click="edit(item)" class="btn btn-primary btn-sm">Edit</button></td>
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
        <div class="col-md-12 boxshow " v-if="show">
            <div class="text-center"><h2>Add New </h2></div>
                <div class="form-group row">
                    <div class="col-md-4">
                        <label> Type</label>
                    </div>
                    <div class="col-md-8">
                        <input type="number" v-model="type"  readonly>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-4">
                        <label> Label</label>
                    </div>
                    <div class="col-md-8">
                        <input type="text" v-model="label">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-4">
                        <label>Label Id</label>
                    </div>
                    <div class="col-md-8">
                        <input type="text" v-model="labelid">
                    </div>
                </div>
                <!-- <div class="form-group row">
                    <div class="col-md-4">
                        <label>Sequence</label>
                    </div>
                    <div class="col-md-8">
                        <input type="text" v-model="sequence">
                    </div>
                </div> -->
                <div class="form-group row">
                    <div class="col-md-4">
                        <label>Value</label>
                    </div>
                    <div class="col-md-8">
                        <input type="text" v-model="value">
                    </div>
                </div>
                <div class="flex-around-row">
                    <button class="btn btn-primary btn-sm" style="width:10%"  @click="onSubmit()">Submit</button>
                    <button type="button" class="btn btn-primary btn-sm" @click="cancel()">Cancel</button>
                </div>
            
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Constants from '../../components/utilities/Constants.vue'
export default {
    mixins: [Constants],
    data() {
        return {
            list: null,
            ajaxtype: 0,
            id: 0, type: 0, label: '', labelid: '', sequence: 0, value: '',
            show:false
        }
    },
    mounted() {
        this.refresh();

    },
    computed: {
        gettypes1() {
            return this.master.filter(block => block.type == this.ajaxtype)
        },
        valuelist() {
            if (this.list != null) {
                if (this.list[this.ajaxtype] == null) {
                    let param = { type: this.ajaxtype };
                    axios.post('api/master/values', param)
                        .then(response => this.processResponse(response.data))
                        .catch(error => this.showError(error));
                }
                if (typeof this.list[this.ajaxtype] !== 'undefined')
                    return this.list[this.ajaxtype].sort(function (a, b) { return a.sequence - b.sequence });
            }
            return []
        },
        valuelistforkey() {
            if (this.list != null) {
                return this.list[0];
            } else
                return [];
        },
        ...mapGetters([
            'master',
        ]),
    },
    methods: {
        gettypes(type) {
            return this.master.filter(block => block.type == type)
        },
        edit(item) {
            //this.form = new Form(item);
            this.label = item.label
            this.labelid = item.labelid
            this.type = item.type
            this.id = item.id
            this.value=item.value
            this.show=true
        },
        onSubmit() {
            let param={
                id:this.id,
                type:this.type,
                label:this.label,
                labelid:this.labelid,
                value:this.value

            }
            axios.post('api/master/createupdate',param)
                .then(response => this.processSubmitResponse(response))
                .catch(error => this.showError(error));
        },
        addnew() {
            this.id= 0 
            this.type= 0
            this.label ='' 
            this.labelid= 0 
            this.sequence= 0
            this.value=''
            this.type = this.ajaxtype;
            this.show=true
        },
        processSubmitResponse(data) {
            if (this.list == null) {
                this.list = {};
            }
            this.list = data;
            this.show=false
            this.refresh()
        },

        refresh() {
            this.$store.dispatch('fetchmaster')
            let param = { type: 0 };
            this.ajaxtype = 0;
            axios.post('api/master/values', param)
                .then(response => this.processResponse(response.data))
                .catch(error => console.log(error));
        },
        showError() {
            this.$store.commit('assignloadingstatus', 0)
            alert("Something went wrong, please try again.")
        },
        cancel(){
            this.show=false
        }
    }
} 
</script>