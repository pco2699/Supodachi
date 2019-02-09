<template>
  <v-ons-page>
    <GmapMap
      :center="markerCenter"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100%; height: 100%"
      :options="{disableDefaultUI: true}"
      @click="onMapClick"
    >
      <gmap-custom-marker
        v-for="(marker, i) in markers"
        :key="marker._id"
        :delay-repaint="marker.weather ? 250 : 0"
        :marker="marker"
        :alignment="marker.alignment"
        @click.native="deleteMarker(i)"
      >
        <facility-marker v-if="marker.weather" :coords="marker" />
        <img v-else :title="JSON.stringify(marker)" class="icon-sm" :src="src" height="45">
      </gmap-custom-marker>
    </GmapMap>
    <facility-card />
    <facility-card />
  </v-ons-page>
</template>

<script>
import GmapCustomMarker from 'vue2-gmap-custom-marker'
import FacilityMarker from '../components/FacilityMarker'
import FacilityCard from '../components/FacilityCard'

export default {
  name: 'Map',
  components: {
    FacilityCard,
    GmapCustomMarker,
    FacilityMarker
  },
  data() {
    return {
      testText: '',
      markerCenter: {
        lat: 50.6272265,
        lng: 3.0571581
      },
      addWeather: true,
      addMode: false,
      markers: [],
      ids: 0,
      alignment: 'top'
    }
  },
  computed: {
    src() {
      return this.testText ? this.testText : 'https://vuejs.org/images/logo.png'
    }
  },
  methods: {
    deleteMarker(i) {
      this.markers.splice(i, 1)
    },
    onMapClick(event) {
      this.markers.push({
        _id: this.ids++,
        latitude: event.latLng.lat(),
        longitude: event.latLng.lng(),
        weather: this.addWeather,
        alignment: this.alignment
      })
    }
  }
}
</script>
<style scoped>
</style>
