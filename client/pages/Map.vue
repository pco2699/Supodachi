<template>
  <v-ons-page>
    <GmapMap
      :center="{lat:10, lng:10}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100%; height: 100%"
    >
      <GmapMarker
        v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </v-ons-page>
</template>

<script>
export default {
  name: 'Map',
  data() {
    return {
      markers: [
        { position: { lng: 10.2, lat: 10 } },
        { position: { lng: 10.1, lat: 10 } }
      ]
    }
  }
}
</script>
<style scoped>
</style>
