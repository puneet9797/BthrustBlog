<template>
    <div class="q-pa-md" style="text-align: -webkit-center;">
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = true"
        @mouseleave="autoplay = true"
        style="height:530px;width:70%"
        class="caroselheight"
        >
            <q-carousel-slide :name="1" img-src="https://amritratna.s3.ap-south-1.amazonaws.com/static/slide5.jpeg" />
            <q-carousel-slide :name="2" img-src="https://amritratna.s3.ap-south-1.amazonaws.com/static/slide1.jpeg" />
            <q-carousel-slide :name="3" img-src="https://amritratna.s3.ap-south-1.amazonaws.com/static/slide2.jpeg" />
            <q-carousel-slide :name="4" img-src="https://amritratna.s3.ap-south-1.amazonaws.com/static/slide3.jpeg" />
            <q-carousel-slide :name="5" img-src="https://amritratna.s3.ap-south-1.amazonaws.com/static/slide4.jpeg" />
        </q-carousel>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}
</script>
<style scoped>
@media screen and (max-width: 768px){
    .caroselheight{
        height: 400px !important;
    }
} 
.caroselheight{
    height:530px;
}
.q-carousel__slides-container {
    height: 100%;
    width: 70% !important;
}
</style>
