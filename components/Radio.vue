<script setup lang="ts">
import { defineComponent } from 'vue'
defineProps(['values', 'modelValue', 'disabled'])
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="vue-form__radio">
    <div class="vue-form__radio-option" v-for="(value, index) in values" :key="index" @click="(e) => {
      const target = <HTMLElement>e.target
      const input = <HTMLInputElement>target.querySelector(`input[type='checkbox']`)
      input?.click()
    }">
      <slot :name="`option-before-${String(index)}`"></slot>
      <div class="vue-form__checkbox">
        <input :disabled="disabled" :checked="modelValue === value" @click="(e) => {
          if (modelValue === value) e.preventDefault()
          else $emit('update:modelValue', value)
        }" type="checkbox" />
        <div class="vue-form__checkbox-inner">
          <slot name="checkbox-inner"></slot>
        </div>
      </div>
      <slot :name="`option-after-${String(index)}`"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "FormRadio",
})
</script>

<style scoped>
.vue-form__radio-option {
  cursor: pointer;
  * {
    pointer-events: none;
  }
}
</style>