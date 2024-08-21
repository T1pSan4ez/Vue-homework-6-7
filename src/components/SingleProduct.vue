<template>
  <div>
    <v-container>
      <h1>Product</h1>
      <v-row>
        <v-col>
          <product-card v-if="product"
                        :product="product"

          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <slot-component>
            <template v-slot:header>
              <h2>Text in header slot from single product</h2>
            </template>
            <template v-slot:body>
              <v-btn>
                Button in slot from single product
              </v-btn>
            </template>
            <template v-slot:footer>
              <h2>Text in footer slot from single product</h2>
            </template>
            <template v-slot:default="slotProps">
              <li v-for="item in slotProps.items" :key="item">
                {{ item }}
              </li>
            </template>
          </slot-component>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="showModal = true">Відкрити Модальне Вікно</v-btn>
          <ModalSlot :isVisible="showModal">
            <template v-slot:header>
              <h2>Заголовок Модального Вікна</h2>
            </template>
            <template v-slot:body>
              <p>Дата</p>
              <input type="date">
            </template>
            <template v-slot:footer>
              <v-btn @click="showModal = false">Закрити</v-btn>
            </template>
          </ModalSlot>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p>{{ helloMixin() }}</p>
          <p>Summ 5 + 10: {{ calculateSum() }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <form @submit.prevent="submitForm">
            <div>
              <label v-tooltip="'750 uah'" for="name">Ім'я:</label>
              <input type="text" v-model="form.name"
                     @blur="validateField('name', form.name, { required: true, minLength: 3 })">
              <span v-if="errors.name" class="error">{{ errors.name[0] }}</span>
            </div>

            <div>
              <label v-color-param="'uppercase'" for="email">Email:</label>
              <input type="email" v-model="form.email"
                     @blur="validateField('email', form.email, { required: true, email: true })">
              <span v-if="errors.email" class="error">{{ errors.email[0] }}</span>
            </div>

            <v-btn v-color="'green'" type="submit">Відправити</v-btn>
          </form>
        </v-col>
      </v-row>
    </v-container>
    <div>
      <div v-draggable class="draggable-box">Перетягніть мене!</div>
    </div>
  </div>
</template>

<script>
import {useProductStore} from "@/stores/ProductStore.js";
import {mapActions, mapState} from "pinia";
import ProductCard from "@/components/ProductCard.vue";
import SlotComponent from "@/components/Lesson7/SlotComponent.vue";
import ModalSlot from "@/components/Lesson7/ModalSlot.vue";
import {green} from "vuetify/util/colors";
import tooltipDirective from "@/components/Lesson7/directives/tooltipDirective.js";
import mixinTest from "@/components/Lesson7/mixins/mixinTest.js";

export default {
  name: "SingleProduct",
  components: {SlotComponent, ProductCard, ModalSlot},
  mixins: [mixinTest],
  data() {
    return {
      showModal: false,
      form: {
        name: '',
        email: '',
      },
    };
  },
  directives: {
    tooltip: tooltipDirective,

    colorParam(el, binding) {
      const action = binding.value;

      switch (action) {
        case 'red':
          el.style.color = 'red';
          break;
        case 'green':
          el.style.color = 'green';
          break;
        case 'uppercase':
          el.style.textTransform = 'uppercase';
          break;
        case 'lowercase':
          el.style.textTransform = 'lowercase';
          break;
        default:
          el.style.color = 'black';
      }
    }
  },

  methods: {
    ...mapActions(useProductStore, ['getProducts']),

    submitForm() {
      const fields = {
        name: {value: this.form.name, rules: {required: true, minLength: 3}},
        email: {value: this.form.email, rules: {required: true, email: true}},
      };

      if (this.validateForm(fields)) {
        alert('Form is valid');
        console.log('Form is valid:', this.form);
      } else {
        console.log('Form has errors');
      }
    },
  },

  computed: {
    green() {
      return green
    },
    ...mapState(useProductStore, ['products']),
    product() {
      let id = +this.$route.params.id;
      return this.products.find(product => product.id === id);
    }
  },
  async created() {
    if (!this.products.length) {
      await this.getProducts();
    }
  },

};
</script>

<style scoped>
.error {
  color: red;
}
.draggable-box {
  width: 150px;
  height: 150px;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}
</style>
