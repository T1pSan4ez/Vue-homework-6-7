<template>
  <div>
    <h1>Login</h1>
    <p>User is {{ userStore.isLoggedIn ? 'logged in' : 'not logged in' }}.</p>
    <v-btn @click="loginUser">
      Login as Demo User
    </v-btn>

  </div>
</template>

<script>
import { useUserStore } from '@/stores/indexStore.js';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const userStore = useUserStore();
    const router = useRouter();

    const loginUser = () => {
      userStore.login();
      router.push({ name: 'Dashboard' }); // Перенаправление на Dashboard после успешного входа
    };

    return {
      userStore,
      loginUser,
    };
  },
};
</script>

<style scoped>

</style>