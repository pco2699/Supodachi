import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCbdQw6fCxgA_D1r3n8CxtjpdTkhYIcb48',
    libraries: 'places'
  }
})
