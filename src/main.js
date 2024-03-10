import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import "../src/assets/scss/style.scss";
import store from "./assets/store";
import "./filters";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
