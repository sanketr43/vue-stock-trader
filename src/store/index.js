import Vue from "vue";
import Vuex from "vuex";
import stocks from "./modules/stocks";
import portfolio from "./modules/portfolio";
import * as actions from "./actions";
Vue.use(Vuex);

Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

export default new Vuex.Store({
  actions,
  modules: {
    stocks,
    portfolio
  }
});
