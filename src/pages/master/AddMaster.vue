<template>
    <div>
        <div class=""><h2>Add New </h2></div>
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
                <div class="form-group row">
                    <div class="col-md-4">
                        <label>Sequence</label>
                    </div>
                    <div class="col-md-8">
                        <input type="text" v-model="sequence">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-4">
                        <label>Value</label>
                    </div>
                    <div class="col-md-8">
                        <input type="text" v-model="value1">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-4">
                        <label>Value2</label>
                    </div>
                    <div class="col-md-8">
                        <input type="text" v-model="value2">
                    </div>
                </div>
            <button class="btn btn-primary btn-sm"  @click="submit()">Submit</button>
            <button type="button" class="btn btn-primary btn-sm" @click="cancel()">Cancel</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            type:0,
            label:''
            ,labelid:0,
            sequence:0,
            value1:'',
            value2:''
        }
    },
    methods: {
        submit(){
            
        }
    },
}
</script>