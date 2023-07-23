<script setup lang="ts">
import { ref, computed, defineComponent } from 'vue';
const $props = defineProps(['modelValue', 'validator', 'disabled', 'multiple'])
const $emit = defineEmits(['update:modelValue', 'error'])
let dragover = ref(false)
const Drop = (e) => {
  e.preventDefault()
  const files = e.dataTransfer.files
  SetFiles(files)
}

const SetFiles = (files) => {
  if ($props.validator) {
    for (let file of files) {
      if (!$props.validator(file)) {
        $emit('error', files)
        $emit('update:modelValue', [])
        return
      }
    }
  }
  $emit('update:modelValue', files)
  DragLeave()
}

const DragStart = (e) => {
  e.preventDefault()
}
const DragOver = (e) => {
  e.preventDefault()
  dragover.value = true
}
const DragLeave = () => {
  dragover.value = false
}
const dropClass = computed(() => {
  return dragover ? 'vue-form__file-drop--hover' : ''
})
</script>

<template>
  <div class="vue-form__file-container">
    <div class="vue-form__file-drop" :class="dropClass" @drop="Drop" @dragstart="DragStart" @dragover="DragOver"
      @dragleave="DragLeave">
      <slot name="drop"></slot>
    </div>
    <div class="vue-form__file-button" @click="(e) => {
      e.preventDefault()
      e.stopPropagation()
      const target = <HTMLElement>e.target
      const fileInput = <HTMLInputElement>target.parentNode?.querySelector(`input[type='file']`)
      fileInput?.click()
    }">
      <slot name="button"></slot>
    </div>
    <input :disabled="disabled" :multiple="multiple" :files="modelValue" @input="(e) => {
      const target = <HTMLInputElement>e.target
      const files = target.files
      SetFiles(files)
    }" type="file" />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "FormFiles",
})
</script>

<style>
.vue-form__file-drop {
  width: 20px;
  height: 20px;
  border: solid;
}

.vue-form__file-button {
  cursor: pointer;
}

.vue-form__file-button * {
  pointer-events: none;
}</style>