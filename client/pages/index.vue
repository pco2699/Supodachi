<template>
  <v-ons-page>
    <v-ons-navigator
      :page-stack="pageStack"
    />
  </v-ons-page>
</template>

<script>
import MapPage from '../components/Map/MapPage'

export default {
  data() {
    return {
      pageStack: [MapPage]
    }
  }
}
</script>

<style scoped>
</style>
