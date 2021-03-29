import Vue from 'vue'
import Unicon from 'vue-unicons/dist/vue-unicons-ssr.common.js'
import {
  uniDesktop,
  uniBrightness,
  uniMoon,
  uniDiscord,
  uniTwitter,
  uniGithub,
  uniAt,
  uniStar,
  uniExclamationTriangle
} from 'vue-unicons/src/icons'

Unicon.add([
  uniDesktop,
  uniBrightness,
  uniMoon,
  uniDiscord,
  uniTwitter,
  uniGithub,
  uniAt,
  uniStar,
  uniExclamationTriangle
])
Vue.use(Unicon)
