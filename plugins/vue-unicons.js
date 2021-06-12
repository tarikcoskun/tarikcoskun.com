import Vue from "vue";
import Unicon from "vue-unicons/dist/vue-unicons-vue2.umd";
import {
  uniDiscord,
  uniTwitter,
  uniGithub,
  uniBrightness,
  uniMoon,
  uniCheck,
  uniTimes,
} from "vue-unicons/dist/icons";
import { uniCrowdin } from "./custom-icons";

Unicon.add([
  uniDiscord,
  uniTwitter,
  uniGithub,
  uniBrightness,
  uniMoon,
  uniCrowdin,
  uniCheck,
  uniTimes,
]);
Vue.use(Unicon);
