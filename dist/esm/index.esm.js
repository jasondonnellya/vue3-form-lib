import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, renderSlot, createElementVNode, withDirectives, vShow, ref, Fragment, renderList } from 'vue';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var __default__$5 = defineComponent({
    name: "FormButton"
});
var script$5 = /*#__PURE__*/ defineComponent(__assign(__assign({}, __default__$5), { props: ['disabled'], emits: ['click'], setup: function (__props) {
        var $props = __props;
        var className = computed(function () {
            return $props.disabled ? 'vue-form__button--disabled' : '';
        });
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("button", {
                class: normalizeClass(["vue-form__button", className.value]),
                onClick: _cache[0] || (_cache[0] = function ($event) { return (!__props.disabled ? _ctx.$emit('click') : function () { }); })
            }, [
                renderSlot(_ctx.$slots, "default")
            ], 2 /* CLASS */));
        };
    } }));

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

script$5.__scopeId = "data-v-8bc7c966";
script$5.__file = "components/Button.vue";

var _hoisted_1$4 = ["disabled", "checked"];
var _hoisted_2$1 = { class: "vue-form__checkbox-inner" };
var __default__$4 = defineComponent({
    name: "FormCheckbox",
});
var script$4 = /*#__PURE__*/ defineComponent(__assign(__assign({}, __default__$4), { props: ['modelValue', 'disabled'], emits: ['update:modelValue'], setup: function (__props) {
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", {
                class: "vue-form__checkbox",
                onClick: _cache[1] || (_cache[1] = function (e) {
                    var target = e.target;
                    var checkbox = target.querySelector("input[type='checkbox']");
                    checkbox === null || checkbox === void 0 ? void 0 : checkbox.click();
                })
            }, [
                createElementVNode("input", {
                    disabled: __props.disabled,
                    checked: __props.modelValue,
                    onClick: _cache[0] || (_cache[0] = function ($event) { return (_ctx.$emit('update:modelValue', !__props.modelValue)); }),
                    type: "checkbox"
                }, null, 8 /* PROPS */, _hoisted_1$4),
                withDirectives(createElementVNode("div", _hoisted_2$1, [
                    renderSlot(_ctx.$slots, "default")
                ], 512 /* NEED_PATCH */), [
                    [vShow, __props.modelValue]
                ])
            ]));
        };
    } }));

var css_248z$3 = "\n.vue-form__checkbox[data-v-4755ca9e] {\r\n  cursor: pointer;\n*[data-v-4755ca9e] {\r\n    pointer-events: none;\n}\n}\r\n";
styleInject(css_248z$3);

script$4.__scopeId = "data-v-4755ca9e";
script$4.__file = "components/Checkbox.vue";

var _hoisted_1$3 = ["disabled", "multiple", "files"];
var __default__$3 = defineComponent({
    name: "FormFiles",
});
var script$3 = /*#__PURE__*/ defineComponent(__assign(__assign({}, __default__$3), { props: ['modelValue', 'validator', 'disabled', 'multiple'], emits: ['update:modelValue', 'error'], setup: function (__props, _a) {
        var $emit = _a.emit;
        var $props = __props;
        var dragover = ref(false);
        var Drop = function (e) {
            e.preventDefault();
            var files = e.dataTransfer.files;
            SetFiles(files);
        };
        var SetFiles = function (files) {
            if ($props.validator) {
                for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                    var file = files_1[_i];
                    if (!$props.validator(file)) {
                        $emit('error', files);
                        $emit('update:modelValue', []);
                        return;
                    }
                }
            }
            $emit('update:modelValue', files);
            DragLeave();
        };
        var DragStart = function (e) {
            e.preventDefault();
        };
        var DragOver = function (e) {
            e.preventDefault();
            dragover.value = true;
        };
        var DragLeave = function () {
            dragover.value = false;
        };
        var dropClass = computed(function () {
            return dragover ? 'vue-form__file-drop--hover' : '';
        });
        var className = computed(function () {
            return $props.disabled ? 'vue-form__files--disabled' : '';
        });
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", {
                class: normalizeClass(["vue-form__files", className.value])
            }, [
                createElementVNode("div", {
                    class: normalizeClass(["vue-form__file-drop", dropClass.value]),
                    onDrop: Drop,
                    onDragstart: DragStart,
                    onDragover: DragOver,
                    onDragleave: DragLeave
                }, [
                    renderSlot(_ctx.$slots, "drop")
                ], 34 /* CLASS, HYDRATE_EVENTS */),
                createElementVNode("div", {
                    class: "vue-form__file-button",
                    onClick: _cache[0] || (_cache[0] = function (e) {
                        var _a;
                        e.preventDefault();
                        e.stopPropagation();
                        var target = e.target;
                        var fileInput = (_a = target.parentNode) === null || _a === void 0 ? void 0 : _a.querySelector("input[type='file']");
                        fileInput === null || fileInput === void 0 ? void 0 : fileInput.click();
                    })
                }, [
                    renderSlot(_ctx.$slots, "button")
                ]),
                createElementVNode("input", {
                    disabled: __props.disabled,
                    multiple: __props.multiple,
                    files: __props.modelValue,
                    onInput: _cache[1] || (_cache[1] = function (e) {
                        var target = e.target;
                        var files = target.files;
                        SetFiles(files);
                    }),
                    type: "file"
                }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1$3)
            ], 2 /* CLASS */));
        };
    } }));

var css_248z$2 = "\n.vue-form__file-drop {\r\n  width: 20px;\r\n  height: 20px;\r\n  border: solid;\n}\n.vue-form__file-button {\r\n  cursor: pointer;\n}\n.vue-form__file-button * {\r\n  pointer-events: none;\n}";
styleInject(css_248z$2);

script$3.__file = "components/Files.vue";

var _hoisted_1$2 = ["disabled", "value", "type", "placeholder"];
var __default__$2 = defineComponent({
    name: "FormInput",
});
var script$2 = /*#__PURE__*/ defineComponent(__assign(__assign({}, __default__$2), { props: ['modelValue', 'disabled', 'type', 'placeholder'], emits: ['update:modelValue'], setup: function (__props) {
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("input", {
                class: "vue-form__input",
                disabled: __props.disabled,
                value: __props.modelValue,
                onInput: _cache[0] || (_cache[0] = function (e) {
                    var target = e.target;
                    _ctx.$emit('update:modelValue', target === null || target === void 0 ? void 0 : target.value);
                }),
                type: __props.type,
                placeholder: __props.placeholder
            }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1$2));
        };
    } }));

script$2.__file = "components/Input.vue";

var _hoisted_1$1 = { class: "vue-form__checkbox" };
var _hoisted_2 = ["disabled", "checked", "onClick"];
var _hoisted_3 = { class: "vue-form__checkbox-inner" };
var __default__$1 = defineComponent({
    name: "FormRadio",
});
var script$1 = /*#__PURE__*/ defineComponent(__assign(__assign({}, __default__$1), { props: ['values', 'modelValue', 'disabled'], emits: ['update:modelValue'], setup: function (__props) {
        var $props = __props;
        var className = computed(function () {
            return $props.disabled ? 'vue-form__radio--disabled' : '';
        });
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", {
                class: normalizeClass(["vue-form__radio", className.value])
            }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.values, function (value, index) {
                    return (openBlock(), createElementBlock("div", {
                        class: "vue-form__radio-option",
                        key: index,
                        onClick: _cache[0] || (_cache[0] = function (e) {
                            var target = e.target;
                            var input = target.querySelector("input[type='checkbox']");
                            input === null || input === void 0 ? void 0 : input.click();
                        })
                    }, [
                        renderSlot(_ctx.$slots, "option-before-".concat(String(index))),
                        createElementVNode("div", _hoisted_1$1, [
                            createElementVNode("input", {
                                disabled: __props.disabled,
                                checked: __props.modelValue === value,
                                onClick: function (e) {
                                    if (__props.modelValue === value)
                                        e.preventDefault();
                                    else
                                        _ctx.$emit('update:modelValue', value);
                                },
                                type: "checkbox"
                            }, null, 8 /* PROPS */, _hoisted_2),
                            createElementVNode("div", _hoisted_3, [
                                renderSlot(_ctx.$slots, "checkbox-inner-".concat(String(index)))
                            ])
                        ]),
                        renderSlot(_ctx.$slots, "option-after-".concat(String(index)))
                    ]));
                }), 128 /* KEYED_FRAGMENT */))
            ], 2 /* CLASS */));
        };
    } }));

var css_248z$1 = "\n.vue-form__radio-option[data-v-69296ba0] {\r\n  cursor: pointer;\n*[data-v-69296ba0] {\r\n    pointer-events: none;\n}\n}\r\n";
styleInject(css_248z$1);

script$1.__scopeId = "data-v-69296ba0";
script$1.__file = "components/Radio.vue";

var _hoisted_1 = ["disabled", "value"];
var __default__ = defineComponent({
    name: "FormSelect",
});
var script = /*#__PURE__*/ defineComponent(__assign(__assign({}, __default__), { props: ['modelValue', 'disabled'], emits: ['update:modelValue'], setup: function (__props) {
        var $props = __props;
        var className = computed(function () {
            return $props.disabled ? 'vue-form__select--disabled' : '';
        });
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", {
                class: normalizeClass(["vue-form__select", className.value])
            }, [
                renderSlot(_ctx.$slots, "before"),
                createElementVNode("select", {
                    disabled: __props.disabled,
                    value: __props.modelValue,
                    onInput: _cache[0] || (_cache[0] = function (e) {
                        var target = e.target;
                        _ctx.$emit('update:modelValue', target.value);
                    })
                }, [
                    renderSlot(_ctx.$slots, "default")
                ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1),
                renderSlot(_ctx.$slots, "after")
            ], 2 /* CLASS */));
        };
    } }));

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
