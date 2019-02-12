<template>
  <div class="facility-carousel">
    <v-ons-carousel
      swipeable
      overscrollable
      :index.sync="carouselIndex"
    >
      <v-ons-carousel-item v-for="(value, index) in items" :key="index" class="carousel-item" :style="{}">
        <facility-card :title="value" />
      </v-ons-carousel-item>
    </v-ons-carousel>
  </div>
</template>

<script>
import FacilityCard from './FacilityCard'

export default {
  name: 'FacilityCarousel',
  components: {
    FacilityCard
  },
  data() {
    return {
      items: ['hoge', 'fuga'],
      carouselIndex: 0
    }
  }
}
</script>

<style scoped>
.facility-carousel {
  height: 200px;
  overflow: visible;

  position: absolute;
  bottom: 12px;
  left: 2%;
  z-index: 1000;
}

.carousel-item {
  width: 180px !important;
}
</style>
