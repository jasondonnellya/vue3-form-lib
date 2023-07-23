<script setup lang="ts">
import { defineComponent } from 'vue'
defineProps(['modelValue', 'disabled'])
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="vue-form__select">
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