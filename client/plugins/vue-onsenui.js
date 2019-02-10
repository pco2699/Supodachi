// Webpack CSS import
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

// JS import
import Vue from 'vue'

if (process.browser) {
  const VueOnsen = require('vue-onsenui')
  Vue.use(VueOnsen)
}
