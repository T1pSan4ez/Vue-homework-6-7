<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-card
              class="mx-auto"
              max-width="400"
          >
            <v-img
                class="align-end text-white"
                height="200"
                :src="product.image"
                cover
            >
            </v-img>
            <v-card-subtitle class="pt-4">
              {{ product.title }}
            </v-card-subtitle>
            <v-card-text>
              <div>{{ product.category }}</div>
              <hr>
              <div>{{ product.price }} $</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
</style>
