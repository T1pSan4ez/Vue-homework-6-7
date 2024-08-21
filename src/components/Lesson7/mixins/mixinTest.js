export default {
    methods: {
        helloMixin() {
            return 'Hello from mixin!';
        },
        calculateSum() {
            return 5 + 10;
        },
    },

    created() {
        this.helloMixin();
        this.calculateSum();
    },
    beforeDestroy() {
        console.log(`${this.$options.name} компонент буде знищений`);
    },

}