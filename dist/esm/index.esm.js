import { openBlock, createElementBlock, renderSlot, createElementVNode, normalizeClass, Fragment, renderList } from 'vue';

var script$5 = {
  name: "FormButton"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", {
    class: "vue-form__button",
    onClick: _cache[0] || (_cache[0] = $event => (_ctx.$emit('click')))
  }, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$4 = "\n.vue-form__button[data-v-8bc7c966] {\r\n  cursor: pointer;\n}\r\n";
styleInject(css_248z$4);

script$5.render = render;
script$5.__scopeId = "data-v-8bc7c966";
script$5.__file = "components/Button.vue";

const _hoisted_1$4 = ["disabled", "checked"];
const _hoisted_2$3 = { class: "vue-form__checkbox-inner" };


const __default__$4 = {
  name: "FormCheckbox",
};


var script$4 = /*#__PURE__*/Object.assign(__default__$4, {
  props: ['modelValue', 'disabled'],
  emits: ['update:modelValue'],
  setup(__props) {

// https://vuejs.org/guide/components/v-model.html



return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", {
    class: "vue-form__checkbox",
    onClick: _cache[1] || (_cache[1] = (e) => {
    e?.target?.querySelector(`input[type='checkbox']`)?.click();
  })
  }, [
    createElementVNode("input", {
      disabled: __props.disabled,
      checked: __props.modelValue,
      onClick: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:modelValue', !__props.modelValue))),
      type: "checkbox"
    }, null, 8 /* PROPS */, _hoisted_1$4),
    createElementVNode("div", _hoisted_2$3, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]))
}
}

});

var css_248z$3 = "\n.vue-form__checkbox[data-v-4755ca9e] {\r\n  cursor: pointer;\n*[data-v-4755ca9e] {\r\n    pointer-events: none;\n}\n}\r\n";
styleInject(css_248z$3);

script$4.__scopeId = "data-v-4755ca9e";
script$4.__file = "components/Checkbox.vue";

const _hoisted_1$3 = { class: "vue-form__file-container" };
const _hoisted_2$2 = ["disabled", "multiple", "files"];


const __default__$3 = {
  name: "FormFileDrop",
  methods: {
    Drop(e) {
      e.preventDefault();
      const files = e.dataTransfer.files;
      this.SetFiles(files);
    },
    SetFiles(files) {
      if(this.validator) {
        for(let file of files) {
          if(!this.validator(file)) {
            this.$emit('error', files);
            this.$emit('update:modelValue', []);
            return
          }
        }
      }
      this.$emit('update:modelValue', files);
      this.DragLeave();
    },
    DragStart(e) {
      e.preventDefault();
    },
    DragOver(e) {
      e.preventDefault();
      this.dragover = true;
    },
    DragLeave() {
      this.dragover = false;
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
};


var script$3 = /*#__PURE__*/Object.assign(__default__$3, {
  props: ['modelValue', 'validator', 'disabled', 'multiple'],
  emits: ['update:modelValue', 'error'],
  setup(__props) {

// https://vuejs.org/guide/components/v-model.html



return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$3, [
    createElementVNode("div", {
      class: normalizeClass(["vue-form__file-drop", _ctx.dropClass]),
      onDrop: _cache[0] || (_cache[0] = (...args) => (_ctx.Drop && _ctx.Drop(...args))),
      onDragstart: _cache[1] || (_cache[1] = (...args) => (_ctx.DragStart && _ctx.DragStart(...args))),
      onDragover: _cache[2] || (_cache[2] = (...args) => (_ctx.DragOver && _ctx.DragOver(...args))),
      onDragleave: _cache[3] || (_cache[3] = (...args) => (_ctx.DragLeave && _ctx.DragLeave(...args)))
    }, [
      renderSlot(_ctx.$slots, "drop")
    ], 34 /* CLASS, HYDRATE_EVENTS */),
    createElementVNode("div", {
      class: "vue-form__file-button",
      onClick: _cache[4] || (_cache[4] = (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.target?.parentNode?.querySelector(`input[type='file']`)?.click();
    })
    }, [
      renderSlot(_ctx.$slots, "button")
    ]),
    createElementVNode("input", {
      disabled: __props.disabled,
      multiple: __props.multiple,
      files: __props.modelValue,
      onInput: _cache[5] || (_cache[5] = $event => (_ctx.SetFiles($event.target.files))),
      type: "file"
    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_2$2)
  ]))
}
}

});

var css_248z$2 = "\n.vue-form__file-drop {\r\n  width: 20px;\r\n  height: 20px;\r\n  border: solid;\n}\n.vue-form__file-button {\r\n  cursor: pointer;\n}\n.vue-form__file-button * {\r\n  pointer-events: none;\n}\r\n";
styleInject(css_248z$2);

script$3.__file = "components/FileDrop.vue";

const _hoisted_1$2 = ["disabled", "value", "type", "placeholder"];


const __default__$2 = {
  name: "FormInput",
};


var script$2 = /*#__PURE__*/Object.assign(__default__$2, {
  props: ['modelValue', 'disabled', 'type', 'placeholder'],
  emits: ['update:modelValue'],
  setup(__props) {

// https://vuejs.org/guide/components/v-model.html



return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("input", {
    class: "vue-form__input",
    disabled: __props.disabled,
    value: __props.modelValue,
    onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:modelValue', $event.target.value))),
    type: __props.type,
    placeholder: __props.placeholder
  }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1$2))
}
}

});

script$2.__file = "components/Input.vue";

const _hoisted_1$1 = { class: "vue-form__radio" };
const _hoisted_2$1 = { class: "vue-form__checkbox" };
const _hoisted_3 = ["disabled", "checked", "onClick"];
const _hoisted_4 = { class: "vue-form__checkbox-inner" };


const __default__$1 = {
  name: "FormRadio",
};


var script$1 = /*#__PURE__*/Object.assign(__default__$1, {
  props: ['values', 'modelValue', 'disabled'],
  emits: ['update:modelValue'],
  setup(__props) {

// https://vuejs.org/guide/components/v-model.html



return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(__props.values, (value, index) => {
      return (openBlock(), createElementBlock("div", {
        class: "vue-form__radio-option",
        key: index,
        onClick: _cache[0] || (_cache[0] = (e) => {
      e?.target?.querySelector(`input[type='checkbox']`)?.click();
    })
      }, [
        renderSlot(_ctx.$slots, `option-before-${index}`),
        createElementVNode("div", _hoisted_2$1, [
          createElementVNode("input", {
            disabled: __props.disabled,
            checked: __props.modelValue === value,
            onClick: (e) => {
          if (__props.modelValue === value) e.preventDefault();
          else _ctx.$emit('update:modelValue', value);
        },
            type: "checkbox"
          }, null, 8 /* PROPS */, _hoisted_3),
          createElementVNode("div", _hoisted_4, [
            renderSlot(_ctx.$slots, "checkbox-inner")
          ])
        ]),
        renderSlot(_ctx.$slots, `option-after-${index}`)
      ]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}
}

});

var css_248z$1 = "\n.vue-form__radio-option[data-v-69296ba0] {\r\n  cursor: pointer;\n*[data-v-69296ba0] {\r\n    pointer-events: none;\n}\n}\r\n";
styleInject(css_248z$1);

script$1.__scopeId = "data-v-69296ba0";
script$1.__file = "components/Radio.vue";

const _hoisted_1 = { class: "vue-form__select" };
const _hoisted_2 = ["disabled", "value"];


const __default__ = {
  name: "FormSelect",
};


var script = /*#__PURE__*/Object.assign(__default__, {
  props: ['modelValue', 'disabled'],
  emits: ['update:modelValue'],
  setup(__props) {

// https://vuejs.org/guide/components/v-model.html



return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "before"),
    createElementVNode("select", {
      disabled: __props.disabled,
      value: __props.modelValue,
      onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:modelValue', $event.target.value)))
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_2),
    renderSlot(_ctx.$slots, "after")
  ]))
}
}

});

var css_248z = "\n.vue-form__select[data-v-42093417] {\r\n  cursor: pointer;\n}\r\n";
styleInject(css_248z);

script.__scopeId = "data-v-42093417";
script.__file = "components/Select.vue";

var registerVueFormLibrary = function (app) {
    app.component(script$5.name, script$5);
    app.component(script$4.name, script$4);
    app.component(script$3.name, script$3);
    app.component(script$2.name, script$2);
    app.component(script$1.name, script$1);
    app.component(script.name, script);
};

export { registerVueFormLibrary as default };
