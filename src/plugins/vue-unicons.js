import Vue from "vue";
import Unicon from "vue-unicons/dist/vue-unicons-vue2.umd";
import {
  uniDiscord,
  uniTwitter,
  uniGithub,
  uniAt,
  uniBrightness,
  uniMoon,
} from "vue-unicons/dist/icons";

Unicon.add([uniDiscord, uniTwitter, uniGithub, uniAt, uniBrightness, uniMoon]);
Vue.use(Unicon);
