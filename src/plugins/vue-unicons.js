import Vue from "vue";
import Unicon from "vue-unicons/dist/vue-unicons-ssr.common.js";
import {
  uniDiscord,
  uniTwitter,
  uniGithub,
  uniAt,
  uniLink,
} from "vue-unicons/src/icons";

Unicon.add([uniDiscord, uniTwitter, uniGithub, uniAt, uniLink]);
Vue.use(Unicon);
