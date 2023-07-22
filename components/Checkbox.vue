<script setup>
// https://vuejs.org/guide/components/v-model.html
defineProps(['modelValue', 'disabled'])
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="vue-form__checkbox" @click="(e) => {
    e?.target?.querySelector(`input[type='checkbox']`)?.click()
  }">
    <input :disabled="disabled" :checked="modelValue" @click="$emit('update:modelValue', !modelValue)" type="checkbox" />
    <div class="vue-form__checkbox-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormCheckbox",
}
</script>

<style scoped>
.vue-form__checkbox {
  cursor: pointer;
  * {
    pointer-events: none;
  }
}
</style>