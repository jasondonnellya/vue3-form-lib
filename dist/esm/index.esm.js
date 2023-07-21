import { openBlock, createElementBlock, renderSlot, withDirectives, createElementVNode, vModelCheckbox, vModelText, vModelSelect } from 'vue';

var script$5 = {
  name: "FormButton"
};

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", {
    onClick: _cache[0] || (_cache[0] = $event => (_ctx.$emit('click')))
  }, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script$5.render = render$5;
script$5.__file = "components/Button.vue";

var script$4 = {
  name: "FormCheckbox",
  // https://stackoverflow.com/questions/47311936/v-model-and-child-components
  props: ['value', 'disabled'],
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
};

const _hoisted_1$1 = ["disabled"];

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    onClick: _cache[1] || (_cache[1] = (e) => {
      e?.target?.children[0]?.click();
    })
  }, [
    withDirectives(createElementVNode("input", {
      disabled: $props.disabled,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($options.inputVal) = $event)),
      type: "checkbox"
    }, null, 8 /* PROPS */, _hoisted_1$1), [
      [vModelCheckbox, $options.inputVal]
    ])
  ]))
}

script$4.render = render$4;
script$4.__file = "components/Checkbox.vue";

var script$3 = {
  name: "FormDatePicker",
  props: {
    value: [String, Number]
  },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
};

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($options.inputVal) = $event)),
    type: "date"
  }, null, 512 /* NEED_PATCH */)), [
    [vModelText, $options.inputVal]
  ])
}

script$3.render = render$3;
script$3.__file = "components/DatePicker.vue";

var script$2 = {
  name: "FormFileDrop"
};

const _hoisted_1 = /*#__PURE__*/createElementVNode("input", { type: "file" }, null, -1 /* HOISTED */);
const _hoisted_2 = [
  _hoisted_1
];

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", null, _hoisted_2))
}

script$2.render = render$2;
script$2.__file = "components/FileDrop.vue";

var script$1 = {
  name: "FormInput",
  // https://stackoverflow.com/questions/47311936/v-model-and-child-components
  props: ['value'],
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($options.inputVal) = $event)),
    placeholder: "Type"
  }, null, 512 /* NEED_PATCH */)), [
    [vModelText, $options.inputVal]
  ])
}

script$1.render = render$1;
script$1.__file = "components/Input.vue";

var script = {
  name: "FormSelect",
  // https://stackoverflow.com/questions/47311936/v-model-and-child-components
  props: {
    value: [String, Number]
  },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("select", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($options.inputVal) = $event))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 512 /* NEED_PATCH */)), [
    [vModelSelect, $options.inputVal]
  ])
}

script.render = render;
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
