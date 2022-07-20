import { computed } from "vue";

export function useFieldProps(type, defaultVal) {
  const formFieldProps = {
    modelValue: {
      required: true,
    },
    label: {
      type: String
    },
    options: {
      type: Array,
    },
    modules: {
      type: Array,
      default: [],
    },
    uuid: {
      type: Number,
      default: 0,
    },
    required: {
      type: Boolean,
      default: false,
    },
    validation: {
      type: Object,
      default: {},
    },
  }

  if (type) {
    formFieldProps.modelValue.type = type;
  }

  if (defaultVal) {
    formFieldProps.modelValue.default = defaultVal;
  }

  return formFieldProps;
}

export function useLabelHtml(props) {
  const labelHtml = computed(() => {
    const requiredHtml = props.required
      ? ' <span class="label--required">*</span>'
      : "";
    return props.label + requiredHtml;
  });

  return { labelHtml };
}
