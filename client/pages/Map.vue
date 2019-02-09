<template>
  <v-ons-page>
    <GmapMap
      ref="google_map"
      :center="currentLoc"
      :zoom="16"
      map-type-id="terrain"
      style="width: 100%; height: 100%"
      :options="{disableDefaultUI: true, clickableIcons: false}"
      @click="onMapClick"
    >
      <gmap-custom-marker :marker="currentLoc">
        <current-marker />
      </gmap-custom-marker>
      <gmap-custom-marker
        v-for="(marker, i) in markers"
        :key="marker._id"
        :delay-repaint="marker.weather ? 250 : 0"
        :marker="marker"
        :alignment="marker.alignment"
        @click.native="deleteMarker(i)"
      >
        <facility-marker v-if="marker.weather" :coords="marker" />
      </gmap-custom-marker>
    </GmapMap>
    <facility-card />
  </v-ons-page>
</template>

<script>
import GmapCustomMarker from 'vue2-gmap-custom-marker'
import FacilityMarker from '../components/FacilityMarker'
import FacilityCard from '../components/FacilityCard'
import CurrentMarker from '../components/CurrentMarker'

export default {
  name: 'Map',
  components: {
    FacilityCard,
    GmapCustomMarker,
    FacilityMarker,
    CurrentMarker
  },
  data() {
    return {
      testText: '',
      markerCenter: {
        lat: 50.6272265,
        lng: 3.0571581
      },
      currentLoc: {
        lat: 35.658034,
        lng: 139.701636
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
  created() {
    navigator.geolocation.getCurrentPosition(data => {
      this.currentLoc.lat = data.coords.latitude
      this.currentLoc.lng = data.coords.longitude
      // this.$refs.google_map.panTo(this.currentLocation)
    })
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
