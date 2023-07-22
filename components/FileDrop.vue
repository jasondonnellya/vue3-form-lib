<script setup>
// https://vuejs.org/guide/components/v-model.html
defineProps(['modelValue', 'validator', 'disabled', 'multiple'])
defineEmits(['update:modelValue', 'error'])
</script>

<template>
  <div class="vue-form__file-container">
    <div class="vue-form__file-drop" :class="dropClass" @drop="Drop" @dragstart="DragStart" @dragover="DragOver" @dragleave="DragLeave">
      <slot name="drop"></slot>
    </div>
    <div class="vue-form__file-button" @click="(e) => {
      e.preventDefault()
      e.stopPropagation()
      e.target?.parentNode?.querySelector(`input[type='file']`)?.click()
    }">
      <slot name="button"></slot>
    </div>
    <input :disabled="disabled" :multiple="multiple" :files="modelValue" @input="SetFiles($event.target.files)" type="file" />
  </div>
</template>

<script>
export default {
  name: "FormFileDrop",
  methods: {
    Drop(e) {
      e.preventDefault()
      const files = e.dataTransfer.files
      this.SetFiles(files)
    },
    SetFiles(files) {
      if(this.validator) {
        for(let file of files) {
          if(!this.validator(file)) {
            this.$emit('error', files)
            this.$emit('update:modelValue', [])
            return
          }
        }
      }
      this.$emit('update:modelValue', files)
      this.DragLeave()
    },
    DragStart(e) {
      e.preventDefault()
    },
    DragOver(e) {
      e.preventDefault()
      this.dragover = true
    },
    DragLeave() {
      this.dragover = false
    }
  },
  data() {
    return {
      dragover: false
    }
  },
  computed: {
    dropClass() {
      if(this.dragover) return 'vue-form__file-drop--hover'
    }
  }
}
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
}
</style>