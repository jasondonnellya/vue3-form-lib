<template>
  <select class="vue-form__select" v-model="inputVal">
    <slot></slot>
  </select>
</template>

<script>
export default {
  name: "FormSelect",
  // https://stackoverflow.com/questions/47311936/v-model-and-child-components
  props: {
    value: [String, Number]
  },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
}
</script>