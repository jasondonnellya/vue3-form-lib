<template>
  <button class="vue-form__button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "FormButton"
}
</script>

<style scoped>
.vue-form__button {
  cursor: pointer;
}
</style>