import { computed, ref } from "vue";

export const formFieldProps = {
    modelValue: {
        type: String,
        required: true,
        default: ""
    },
    label: {
        type: String,
        required: true
    },
    options: {
        type: Array,
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
        default: {}
    }
};

export function useLabelHtml(props) {
    const labelHtml = computed(() => {
        const requiredHtml =
          props.required
            ? ' <span class="label--required">*</span>'
            : "";
        return props.label + requiredHtml;
    });

    return { labelHtml };
}