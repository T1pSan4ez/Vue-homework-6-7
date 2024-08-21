<template>
  <div>
    <h1>Slot Component</h1>
    <slot name="header"><h4>Header</h4></slot>
    <slot><h4>Default text if doesn`t receive any data</h4></slot>
    <slot name="body"><h4>Body</h4></slot>
    <slot name="footer"><h4>Footer</h4></slot>
    <ul>
      <slot :items="items"></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SlotComponent',
  data() {
    return {
      items: [1, 'item2', 'item3'],

    }
  }
}
</script>

<style scoped>

</style>