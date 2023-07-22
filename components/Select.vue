<script setup>
// https://vuejs.org/guide/components/v-model.html
defineProps(['modelValue', 'disabled'])
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="vue-form__select">
    <slot name="before"></slot>
    <select :disabled="disabled" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
      <slot></slot>
    </select>
    <slot name="after"></slot>
  </div>
</template>

<script>
export default {
  name: "FormSelect",
}
</script>

<style scoped>
.vue-form__select {
  cursor: pointer;
}
</style>