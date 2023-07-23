<script setup lang="ts">
import { computed, defineComponent } from 'vue'
const $props = defineProps(['disabled'])
defineEmits(['click'])
const className = computed(() => {
  return $props.disabled ? 'vue-form__button--disabled' : ''
})
</script>

<template>
  <button class="vue-form__button" :class="className" @click="!disabled ? $emit('click') : () => {}">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default defineComponent({
  name: "FormButton"
})
</script>

<style scoped>
.vue-form__button {
  cursor: pointer;
}
</style>