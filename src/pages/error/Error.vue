<template>
    <div class="text-center">
        <h1>Not Found</h1>
        <button type="button" class="btn btn-primary" @click="goback()">Go back</button>
    </div>
</template>
<script>
export default {
    methods:{
        goback(){
            this.$router.push({name:"login"})
        }
    }
}
</script>