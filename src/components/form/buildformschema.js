import * as Yup from 'yup';
import TextInput from './TextInput.vue';
import RadioInput from './RadioInput.vue';
import SelectInput from './SelectInput.vue';
import ModuleCheckBoxInput from './ModuleCheckBoxInput.vue';

/**
 * Take in array of objects with form question data and convert to
 * schema for formvuelate
 */
export function useFormSchema(questionList) {
  return questionList.map((question) => {
    const fieldSchema = {
      model: question.key,
      label: question.label,
      // default: question.initial,
      validations: Yup,
    };

    // Map fields based on type
    switch (question.type) {
      case "text-input":
        fieldSchema.component = TextInput;
        fieldSchema.validations = fieldSchema.validations.string();
        break;
      case "multiple-choice":
        fieldSchema.component = RadioInput;
        fieldSchema.options = question.options;
        fieldSchema.validations = fieldSchema.validations.string();
        break;
      case "multi-select":
        fieldSchema.component = SelectInput;
        fieldSchema.options = question.options;
        fieldSchema.validations = fieldSchema.validations.array();
        break;
      case "module-checkbox-group":
        fieldSchema.component = ModuleCheckBoxInput;
        fieldSchema.validations = fieldSchema.validations.array();
        break;
    }

    const requiredMessage = question.hasOwnProperty("description")
      ? `Psst! Don't forget to enter ${question.description}`
      : undefined;

    if (question.required) {
      fieldSchema.required = true;
      fieldSchema.validations =
        fieldSchema.validations.required(requiredMessage);
    }

    return fieldSchema;
  });
}