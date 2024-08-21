import { createPinia } from 'pinia';
import { useCounterStore} from "@/stores/counter.js";
import { useProductStore } from "@/stores/ProductStore.js";
import { useUserStore } from "@/stores/userAuth.js";


const pinia = createPinia();

export { pinia, useCounterStore, useProductStore, useUserStore};