import {defineStore} from "pinia";
import axiosInstance from "@/services/axios.js";
import {useCounterStore} from "@/stores/counter.js";


export const useProductStore = defineStore('product', {
    state: () => ({
        productsState: [],
        currentPage: 1,
        itemsPerPage: 5,
    }),
    actions: {
        async getProducts() {
            try {
                const response = await axiosInstance.get('/products')
                this.productsState = response.data;

                console.log(response);
                const counterStore = useCounterStore();
                counterStore.setCount(this.productsState.length);
            } catch (error) {
                console.error(error);
            }
        },
        setCurrentPage(page) {
            this.currentPage = page;
        },
    },
    getters: {
        products: (state) => {
            const start = (state.currentPage - 1) * state.itemsPerPage;
            const end = start + state.itemsPerPage;
            return state.productsState.slice(start, end);
        },
        totalPages: (state) => {
            return Math.ceil(state.productsState.length / state.itemsPerPage);
        },
    },
});