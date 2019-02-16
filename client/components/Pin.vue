<template>
  <img onclick="nextPage" src="../assets/map-icon.png">
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
