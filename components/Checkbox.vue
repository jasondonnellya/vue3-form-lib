<template>
  <div
    class="vue-form__checkbox"
    @click="(e) => {
      e?.target?.children[0]?.click()
    }">
    <input :disabled="disabled" v-model="inputVal" type="checkbox" />
  </div>
</template>

<script>
export default {
  name: "FormCheckbox",
  // https://stackoverflow.com/questions/47311936/v-model-and-child-components
  props: ['value', 'disabled'],
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