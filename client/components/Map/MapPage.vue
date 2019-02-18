<template>
  <v-ons-page>
    <SearchBox v-on:callSetPin="setPin" />
    <GmapMap
      ref="google_map"
      :center="currentLoc"
      :zoom="16"
      map-type-id="terrain"
      style="width: 100%; height: 100%"
      :options="{disableDefaultUI: true, clickableIcons: false, gestureHandling: 'greedy'}"
      @click="setPin"
    >
      <gmap-custom-marker :marker="currentLoc">
        <current-marker />
      </gmap-custom-marker>
      <gmap-custom-marker
        v-for="(marker, i) in markers"
        :key="marker._id"
        :marker="marker"
        :alignment="marker.alignment"
        @click.native="toggleInfoWindow(marker, i)"
      >
        <Pin />
      </gmap-custom-marker>
      <gmap-info-window
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen=false"
      >
        <div>{{ infoContent }}</div>
      </gmap-info-window>
    </GmapMap>
    <search-box />
  </v-ons-page>
</template>

<script>
import GmapCustomMarker from 'vue2-gmap-custom-marker'
import CurrentMarker from '../CurrentMarker'
import SearchBox from '../Map/SearchBox'
import Pin from '../Pin'

export default {
  name: 'MapPage',
  components: {
    CurrentMarker,
    GmapCustomMarker,
    SearchBox,
    Pin
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
      alignment: 'top',
      infoContent: '',
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    }
  },
  computed: {
    src() {
      return this.testText ? this.testText : 'https://vuejs.org/images/logo.png'
    }
  },
  created() {
    if (process.browser) {
      navigator.geolocation.getCurrentPosition(data => {
        this.currentLoc.lat = data.coords.latitude
        this.currentLoc.lng = data.coords.longitude
        // this.$refs.google_map.panTo(this.currentLocation)
      })
    }
  },
  methods: {
    deleteMarker(i) {
      this.markers.splice(i, 1)
    },
    toggleInfoWindow: function(marker, idx) {
      console.log('aaaaaaaaaa')
      this.infoWindowPos = marker.position
      console.log(marker)
      this.infoContent = this.getInfoWindowContent(marker)

      // check if its the same marker that was selected if yes toggle
      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen
      }
      // if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true
        this.currentMidx = idx
      }
    },
    getInfoWindowContent: function(marker) {
      return `<div class="card">
           <div class="card-image">
             <figure class="image is-4by3">
               <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
             </figure>
           </div>
           <div class="card-content">
             <div class="media">
               <div class="media-content">
                 <p class="title is-4">${marker.name}</p>
               </div>
             </div>
             <div class="content">
               ${marker.description}
               <br>
               <time datetime="2016-1-1">${marker.date_build}</time>
             </div>
           </div>
        </div>`
    },
    onMapClick(event) {
      this.markers.push({
        _id: this.ids++,
        latitude: event.latLng.lat(),
        longitude: event.latLng.lng(),
        weather: this.addWeather,
        alignment: 'top'
      })
    },
    setPin(facility) {
      console.log('ccc')
      this.markers.push({
        _id: this.ids++,
        latitude: facility.lat,
        longitude: facility.lon,
        weather: this.addWeather,
        alignment: 'top'
      })
    },
    test: function() {
      console.log('test success')
    }
  }
}
</script>
<style scoped>
.icon-sm {
  z-index: 1000;
}
</style>
