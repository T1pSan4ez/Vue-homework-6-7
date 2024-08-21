import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
    const user = ref(null);
    const isLoggedIn = ref(false);

    function login() {
        user.value = { name: 'Demo User' };
        isLoggedIn.value = true;
    }

    function logout() {
        user.value = null;
        isLoggedIn.value = false;
    }

    return {
        user,
        isLoggedIn,
        login,
        logout,
    };
});
