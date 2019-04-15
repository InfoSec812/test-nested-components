import Vue from "vue";
import App from "./App.vue";

import "./styles/quasar.styl";
import "quasar-framework/dist/quasar.ie.polyfills";
import "quasar-extras/material-icons";
import {
  Quasar,
  QBtn,
  QLayout,
  QLayoutHeader,
  QLayoutDrawer,
  QPage,
  QPageContainer,
  QToolbar,
  QToolbarTitle,
  QList,
  QListHeader,
  QItemSeparator,
  QItem,
  QItemSide,
  QItemMain
} from "quasar";
import Vuelidate from "vuelidate/src";

Vue.use(Quasar, {
  config: {},
  components: {
    QBtn,
    QLayout,
    QLayoutHeader,
    QLayoutDrawer,
    QPage,
    QPageContainer,
    QToolbar,
    QToolbarTitle,
    QList,
    QListHeader,
    QItemSeparator,
    QItem,
    QItemSide,
    QItemMain
  },
  directives: {},
  plugins: {}
});

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
