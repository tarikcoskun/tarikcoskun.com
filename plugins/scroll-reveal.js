import Vue from "vue";
import VueScrollReveal from "vue-scroll-reveal";

Vue.use(VueScrollReveal, {
  class: "v-scroll-reveal",
  duration: 1500,
  scale: 1,
  distance: "24px",
  mobile: false,
  interval: 500,
});
