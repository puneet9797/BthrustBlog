<template>
<div>
    <input type="file"  id="attach_file" name="files"  @change="processFile($event)" style="padding-top: 17px;padding-bottom: 29px;" >
</div>
</template>
<script>
import UploadMixinVue from '../utilities/UploadMixin.vue'
export default {
    mixins:[UploadMixinVue]
}
</script>