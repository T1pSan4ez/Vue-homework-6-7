<template>
  <div>
      <v-tabs
          v-model="tab"
          align-tabs="end"
          color="deep-purple-accent-4"
      >
        <router-link to="/products">
          <v-tab :value="1">Products</v-tab>
        </router-link>
        <router-link to="/asdasdasd">
          <v-tab :value="2">404</v-tab>
        </router-link>
      </v-tabs>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    tab: null,
  }),
};
</script>

<style scoped>

</style>
