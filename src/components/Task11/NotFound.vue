<script>

import {defineComponent} from "vue";
import SlotComponent from "@/components/Lesson7/SlotComponent.vue";

export default defineComponent({
  components: {SlotComponent}
})
</script>

<template>
  <div>
    <h1>Not Found</h1>
    <h2>404</h2>
    <router-link to="/dashboard">
      Go to Home
    </router-link>
    <v-row>
      <v-col>
        <slot-component>
          <p>Text in slot from NotFound</p>
        </slot-component>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>

</style>