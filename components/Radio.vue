<script setup>
// https://vuejs.org/guide/components/v-model.html
defineProps(['values', 'modelValue', 'disabled'])
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="vue-form__radio">
    <div class="vue-form__radio-option" v-for="(value, index) in values" :key="index" @click="(e) => {
      e?.target?.querySelector(`input[type='checkbox']`)?.click()
    }">
      <slot :name="`option-before-${index}`"></slot>
      <div class="vue-form__checkbox">
        <input :disabled="disabled" :checked="modelValue === value" @click="(e) => {
          if (modelValue === value) e.preventDefault()
          else $emit('update:modelValue', value)
        }" type="checkbox" />
        <div class="vue-form__checkbox-inner">
          <slot name="checkbox-inner"></slot>
        </div>
      </div>
      <slot :name="`option-after-${index}`"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormRadio",
}
</script>

<style scoped>
.vue-form__radio-option {
  cursor: pointer;
  * {
    pointer-events: none;
  }
}
</style>