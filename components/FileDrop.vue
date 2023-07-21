<template>
  <div class="vue-form__file-container">
    <div class="vue-form__file-drop">
      <slot></slot>
    </div>
    <div class="vue-form__file-button">
      <slot></slot>
    </div>
    <input type="file" />
  </div>
</template>

<script>
export default {
  name: "FormFileDrop"
}
</script>