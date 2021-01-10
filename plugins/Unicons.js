import Vue from 'vue'
import Unicon from 'vue-unicons/dist/vue-unicons-ssr.common.js'
import { uniLayerGroupMonochrome, uniCarWash } from 'vue-unicons/src/icons'
import 'vue-unicons/dist/vue-unicons-ssr.css'

Unicon.add([uniLayerGroupMonochrome, uniCarWash])
Vue.use(Unicon)
