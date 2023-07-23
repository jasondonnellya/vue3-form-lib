# Vue3 Form Library

Vue3 Form Library is a style agnostic component library, with multiple form input components that should cover all needs in a form using Vue3.

The purpose of creating a style agnostic component library is so that developers can write their own CSS in any pre-processor and this lib can easily apply to any project. You can target the
built in classes and have forced consistency in your components. In certain cases, vue3 form lib enhances default HTML elements by defining
HTML and classes for overriding the default HTML inputs like select, input[type="checkbox"] and input[type="file"], and supplies unique slots for adding
vue templates.

Vue3 Form Library tries to use modern practices, by defining the built-in classes using BEM (Block, Element, Modifier) e.g. vue-form__button, this allows you to simply add modifiers like vue-form__button--lavendar to apply new styles. Vue3 Form Library also uses the most up to date practices in Vue3, by using the modern composition API.

Note: vue3-form-lib will only work in Vue3 + Typescript environments.

## INSTALLATION

## USAGE

### Import

Independent Example

```TS
import registerVueFormLibrary from 'vue-form-lib'

registerVueFormLibrary(app)
```

Project Example

```TS
import { createApp } from 'vue'
import App from './App.vue'

import registerVueFormLibrary from 'vue-form-lib'

const app = createApp(App)

registerVueFormLibrary(app)

app.mount('#app')

```

## Components

By default, all components are globally available after calling registerVueFormLibrary on your app so you do not need to import them. All components have default HTML styling until overriden.

### FormButton

#### Props

disabled: Boolean - adds .vue-form__button--disabled to root element and disables click event

```vue
<FormButton @click="() => {

}">
  Click here
</FormButton>
```

```CSS
button.vue-form__button {}
```

### FormCheckbox

#### Props

disabled: Boolean - adds .vue-form__checkbox--disabled to root element and disables input

```vue
<FormCheckbox v-model="form.checkboxValue" />

<!-- FormCheckbox has a slot for adding custom html to the .vue-form__checkbox-inner, sibling to input[type="checkbox"] -->
<FormCheckbox v-model="form.checkboxValue" :disabled="true">
  <img src="tick.png" />
</FormCheckbox>
```

```CSS
div.vue-form__checkbox {
  /* Here you can target the default checkbox, hide it, and the parent styling should still allow you to target it when adding custom styling. */
  input[type="checkbox"] {
    display: none;
  }
}
div.vue-form__checkbox-inner {}
```

### FormFiles

#### Props

validator: Function - a function that fires on each file when added, takes a return value of true or false and emits an error event if any files return false, cancelling the input.

disabled: Boolean - adds .vue-form__files--disabled to root element and disables file input

multiple: Boolean - enables multiple files on the file input

```vue
<!-- The drop slot has custom functionality to take dropped files and apply them to v-model -->
<!-- The button slot has custom functionality to target the input, even if it is hidden, and open the browser file API for selecting a file. -->
<FormFiles v-model="form.filesValue">
  <template v-slot:drop>
    <div>
      Drop here
    </div>
  </template>
  <template v-slot:button>
    <button>
      Upload file
    </button>
  </template>
</FormFiles>
```

```CSS
div.vue-form__files {
  input[type="file"] {}
}
/* vue-form__file-drop and vue-form__file-button are custom parent divs of the template/slots */
div.vue-form__file-drop {}
div.vue-form__file-button {}
```

### FormInput

#### Props

disabled: Boolean - disables input

type: String - applies to input[type]

placeholder: String - applies to input[placeholder]

```vue
<FormInput v-model="form.inputValue" />
```

```CSS
input.vue-form__input {}
input.vue-form__input[disabled] {}
```

### FormRadio

#### Props

values: Array - an array of values to display as checkboxes

disabled: Boolean - adds vue-form__radio--disabled to root element and disables all checkboxes

```vue
<!-- FormRadio contains three custom slots as seen below -->
<!-- <slot :name="`option-before-${String(index)}`"></slot> -->
<!-- <slot :name="`checkbox-inner-${String(index)}`"></slot> -->
<!-- <slot :name="`option-after-${String(index)}`"></slot> -->
<!-- These slots must match their dynamic names exactly but can be used to apply icons to the checkbox-inner HTML or to add text to before or after each radio value. -->
<FormRadio v-model="form.radioValue" :values="arrayOfValues">
  <template v-for="(value, index) in arrayOfValues" v-slot:[`option-before-${index}`]>{{ radioValue }}</template>
</FormRadio>
```

```CSS
div.vue-form__radio {}
div.vue-form__radio-option {}
/* This doubles up with the vue-form__checkbox and vue-form__checkbox-inner so both use the same styling. */
div.vue-form__checkbox {
  input[type="checkbox"] {}
}
div.vue-form__checkbox-inner {}
```

### FormSelect

#### Props

disabled: Boolean - adds vue-form__select--disabled to root element and disables select element

```vue
<!-- FormSelect has 3 slots. A default slot for options and after/before slots to add things like custom arrows.-->
<FormSelect v-model="form.selectValue">
  <template v-slot:before>
    <div></div>
  </template>
  <option>
    Option 1
  </option>
  <option>
    Option 2
  </option>
  <template v-slot:after>
    <div></div>
  </template>
</FormButton>
```

```CSS
div.vue-form__select {
  select {}
}
```