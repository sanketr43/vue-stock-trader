<template>
  <div>
    <app-stock v-for="(stock,index) in stocks" :stock="stock" :key="index"></app-stock>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import stock from "./Stock";

export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  },
  components: {
    appStock: stock
  }
};
</script>