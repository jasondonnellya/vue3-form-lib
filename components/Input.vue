<script setup lang="ts">
import { defineComponent } from 'vue'
defineProps(['modelValue', 'disabled', 'type', 'placeholder'])
defineEmits(['update:modelValue'])
</script>

<template>
  <input class="vue-form__input" :disabled="disabled" :value="modelValue" @input="(e) => {
    const target = <HTMLInputElement>e.target
    $emit('update:modelValue', target?.value)
  }" :type="type" :placeholder="placeholder" />
</template>

<script lang="ts">
export default defineComponent({
  name: "FormInput",
})
</script>