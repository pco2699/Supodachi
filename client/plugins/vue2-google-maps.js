import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.map_apikey || 'AIzaSyDeUbAtJO563evRNJV4Oke2ltyOwSbYMbI',
    libraries: 'places'
  }
})
