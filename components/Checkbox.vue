<script setup lang="ts">
import { defineComponent } from 'vue'
defineProps(['modelValue', 'disabled'])
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="vue-form__checkbox" @click="(e: Event) => {
    const target = <HTMLElement>e.target
    const checkbox = <HTMLInputElement>target.querySelector(`input[type='checkbox']`)
    checkbox?.click()
  }">
    <input :disabled="disabled" :checked="modelValue" @click="$emit('update:modelValue', !modelValue)" type="checkbox" />
    <div v-show="modelValue" class="vue-form__checkbox-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "FormCheckbox",
})
</script>

<style scoped>
.vue-form__checkbox {
  cursor: pointer;
  * {
    pointer-events: none;
  }
}
</style>