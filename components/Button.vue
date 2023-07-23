<template>
  <button class="vue-form__button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "FormButton"
})
</script>

<style scoped>
.vue-form__button {
  cursor: pointer;
}
</style>