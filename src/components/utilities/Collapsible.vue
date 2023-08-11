<template>
<div>
    <div class="header">
        <span v-if="open" @click="open = !open">
            Customer
        </span>
        <span v-if="!open" @click="open = !open">
            Customer1
        </span>
    </div>
    <slot v-if="open">
        
    </slot>
</div>
</template>
<script>
export default {
    data(){
        return {open:true}
    }
}
</script>
