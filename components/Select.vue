<script setup lang="ts">
import { computed, defineComponent } from 'vue'
const $props = defineProps(['modelValue', 'disabled'])
defineEmits(['update:modelValue'])
const className = computed(() => {
  return $props.disabled ? 'vue-form__select--disabled' : ''
})
</script>

<template>
  <div class="vue-form__select" :class="className">
    <slot name="before"></slot>
    <select :disabled="disabled" :value="modelValue" @input="(e) => {
      const target = <HTMLSelectElement>e.target
      $emit('update:modelValue', target.value)
    }">
      <slot></slot>
    </select>
    <slot name="after"></slot>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "FormSelect",
})
</script>

<style scoped>
.vue-form__select {
  cursor: pointer;
}
</style>