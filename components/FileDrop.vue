<template>
  <div class="vue-form__file-container">
    <div class="vue-form__file-drop">
      <slot name="drop"></slot>
    </div>
    <button class="vue-form__file-button">
      <slot name="button"></slot>
    </button>
    <input type="file" />
  </div>
</template>

<script>
export default {
  name: "FormFileDrop"
}
</script>