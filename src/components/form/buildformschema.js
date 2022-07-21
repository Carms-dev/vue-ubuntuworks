import * as Yup from 'yup';
import TextInput from './TextInput.vue';
import RadioInput from './RadioInput.vue';
import SelectInput from './SelectInput.vue';
import ModuleCheckBoxInput from './ModuleCheckBoxInput.vue';
import { useAllModules } from '../../data/modules';
import SectionHeading from './SectionHeading.vue';

/**
 * Take in array of objects with form question data and convert to
 * schema / component props for formvuelate
 * TODO: replace most of this functionality with formvuelate lookup plugin
 */
export function useFormSchema(formSections) {
  return formSections.flatMap((section) => {
    // console.log(section)
    const sectionSchema = section.questions.map((question, index) => {
      const modelName = question.hasOwnProperty('key')
        ? question.key
        : `${section.key}-field-${index + 1}`;

      const questionSchema = {
        model: modelName,
        label: question.label,
        type: question.type,
        // default: question.initial,
        validations: Yup,
      };
  
      // Map fields based on type
      switch (question.type) {
        case "text-input":
          questionSchema.component = TextInput;
          questionSchema.validations = questionSchema.validations.string();
          break;
        case "multiple-choice":
          questionSchema.component = RadioInput;
          questionSchema.options = question.options;
          questionSchema.validations = questionSchema.validations.string();
          break;
        case "multi-select":
          questionSchema.component = SelectInput;
          questionSchema.options = question.options;
          questionSchema.validations = questionSchema.validations.array();
          break;
        case "module-checkbox-group":
          questionSchema.modules = useAllModules();
          questionSchema.component = ModuleCheckBoxInput;
          questionSchema.validations = questionSchema.validations.array();
          break;
      }
  
      const requiredMessage = question.hasOwnProperty("description")
        ? `Psst! Don't forget to enter ${question.description}.`
        : undefined;
  
      if (question.required) {
        questionSchema.required = true;
        questionSchema.validations = questionSchema.validations.required(requiredMessage);
      }
  
      return questionSchema;
    });

    if (section.sectionHeader) {
      const headerSchema = {
        model: 'section-heading',
        label: section.sectionHeader,
        component: SectionHeading
      };

      sectionSchema.unshift(headerSchema);
    }

    return sectionSchema;
  });
}