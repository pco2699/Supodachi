<template>
  <img src="../assets/map-icon.png" @click="nextPage">
</template>

<script>
import FacilityDetail from '../components/Detail/FacilityDetail'

export default {
  name: 'Pin',
  methods: {
    nextPage() {
      this.$store.commit('push', FacilityDetail)
    }
  }
}
</script>

<style scoped>
img {
  width: 32px;
}
</style>
