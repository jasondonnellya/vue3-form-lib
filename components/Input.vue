<script setup>
// https://vuejs.org/guide/components/v-model.html
defineProps(['modelValue', 'disabled', 'type', 'placeholder'])
defineEmits(['update:modelValue'])
</script>

<template>
  <input class="vue-form__input" :disabled="disabled" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :type="type" :placeholder="placeholder" />
</template>

<script>
export default {
  name: "FormInput",
}
</script>