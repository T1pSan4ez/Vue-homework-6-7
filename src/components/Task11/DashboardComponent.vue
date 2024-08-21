<template>
  <div>
    <h1>Dashboard</h1>
    <p>Welcome, {{ userStore.user.name }}!</p>
  </div>
</template>

<script>
import { useUserStore } from  "@/stores/indexStore.js";

export default {
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
};
</script>

<style scoped>

</style>