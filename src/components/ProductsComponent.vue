<template>
  <div>
    <v-container>
      <div>
        <p>Count: {{ counter.count }}</p>
        <p>Double Count: {{ counter.doubleCount }}</p>
        <v-btn @click="counter.decrement">
          -
        </v-btn>
        <v-btn @click="counter.increment">
          +
        </v-btn>
      </div>
      <h1>Products</h1>
      <v-row>
        <v-col v-for="product in products" :key="product.id"
               cols="12"
               sm="12"
               md="6"
               lg="4"
        >
          <ProductCard
              :product="product"
              @click="goToProduct(product.id)"
              class="product-style"
          />
        </v-col>
      </v-row>
      <v-pagination
          v-model="localPage"
          :length="totalPages"
          @input="changePage"
      ></v-pagination>
    </v-container>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import {mapActions, mapGetters, mapState} from "pinia";
import {useProductStore, useCounterStore} from "@/stores/indexStore.js";


export default {
  name: "ProductsComponent",
  components: {
    ProductCard,
  },
  data() {
    return {
      localPage: 1,
    };
  },
  watch: {
    localPage(newPage) {
      this.changePage(newPage);
    },
  },
  methods: {
    ...mapActions(useProductStore, ['getProducts', 'setCurrentPage']),

    goToProduct(id) {
      this.$router.push({
        name: 'single-product',
        params: {
          id: id
        }
      });
    },
    changePage(page) {
      this.setCurrentPage(page);
    },
  },
  computed: {
    ...mapState(useProductStore, ['products']),
    ...mapGetters(useProductStore, ['totalPages']),
  },

  mounted() {
    this.getProducts();
    this.localPage = this.$pinia.state.value.product.currentPage;
  },
  setup() {
    const counter = useCounterStore();

    return {counter};
  },
};
</script>

<style scoped>
.product-style {
  cursor: pointer;
}

</style>
