<template>
  <input class="vue-form__input" v-model="inputVal" :type="type" :placeholder="placeholder" />
</template>

<script>
export default {
  name: "FormInput",
  // https://stackoverflow.com/questions/47311936/v-model-and-child-components
  props: ['value', 'type', 'placeholder'],
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