<template>
  <v-ons-page>
    <GmapMap
      ref="google_map"
      :center="currentLoc"
      :zoom="16"
      map-type-id="terrain"
      style="width: 100%; height: 100%"
      :options="{disableDefaultUI: true, clickableIcons: false, gestureHandling: 'greedy'}"
    >
      <gmap-custom-marker :marker="currentLoc">
        <current-marker />
      </gmap-custom-marker>
      <gmap-custom-marker
        v-for="(marker, i) in markers"
        :key="marker._id"
        :marker="marker"
        :alignment="marker.alignment"
        @click.native="toggleMarker(i)"
      >
        <div class="marker">
          <info-window class="info" v-if="marker.show" :name="marker.name" :description="marker.description" />
          <Pin class="pin" />
        </div>
      </gmap-custom-marker>
    </GmapMap>
    <search-box @request="request" @deleteAllMarker="deleteAllMarker" />
  </v-ons-page>
</template>

<script>
import GmapCustomMarker from 'vue2-gmap-custom-marker'
import CurrentMarker from '../components/Map/CurrentMarker'
import SearchBox from '../components/Map/SearchBox'
import Pin from '../components/Map/Pin'
import InfoWindow from '../components/Map/InfoWindow'

export default {
  name: 'MapPage',
  components: {
    CurrentMarker,
    GmapCustomMarker,
    SearchBox,
    Pin,
    InfoWindow
  },
  data() {
    return {
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
    toggleMarker(i) {
      this.markers[i].show = !this.markers[i].show
    },
    deleteAllMarker() {
      this.markers = []
      this.ids = 0
    },
    setPin(facility) {
      this.markers.push({
        _id: this.ids++,
        name: facility.name,
        description: facility.administrator,
        latitude: facility.lat,
        longitude: facility.lon,
        show: false,
        alignment: 'top'
      })
    },
    request(params) {
      this.$axios
        .$get('https://supodachi-backend.herokuapp.com/api/v1/map', {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: 'Bearer ' + 'hogehoge'
          },
          params: params
        })
        .then(response => {
          response.forEach(r => {
            this.setPin(r)
          })
        })
    }
  }
}
</script>
<style scoped>
.marker {
  width: 120px;
  height: 150px;
}

.info {
  position: absolute;
  bottom: 20px;
}

.pin {
  position: absolute;
  bottom: 0;
  left: 58px;
}
</style>
