import Vue from "vue";
import moment from "moment";

Vue.mixin({
  methods: {
    getDate(date) {
      const now = moment();
      const createdAt = moment(date);
      const diff = now.diff(createdAt, "days");

      if (diff === 0) return "Bugün";
      else if (diff === 1) return "Dün";
      else if (diff <= 30) return `${diff} gün önce`;
      else if (diff >= 30 && diff <= 90)
        return `${Math.floor(diff / 30)} ay önce`;
      else return createdAt.format("MMMM DD, YYYY");
    },
  },
});
