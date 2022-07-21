import { useStorage } from '@vueuse/core';
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import modules from './modules.json';

const assetsDir = '../assets/';

export function useAssetUrl(assetsPath, fileName) {
  return new URL(assetsPath + fileName, import.meta.url).href
}


export function useAllModules() {
  return modules
    .map((module) => {
      const moduleWithUrl = Object.assign({}, module);
      moduleWithUrl.image.url = useAssetUrl(assetsDir, module.image.file);
      return moduleWithUrl;
    });
}


export function useChosenModules() {
  const reportData = useStorage('report-data', {});
  const chosenModuleNames = reportData.value.basic_questions.report_modules;
  const route = useRoute();

  // watch(route.params, (param) => {
  //   console.log('params changed', param);
  // });

  // TODO: plx refactor this...
  const chosenModules = modules
    .filter((module) => {
      return chosenModuleNames.indexOf(module.key) !== -1;
    })
    .map((module) => {
      const moduleWithUrl = Object.assign({}, module);
      moduleWithUrl.image.url = useAssetUrl(assetsDir, module.image.file);
      return moduleWithUrl;
    });

  const selectedIndex = computed(() => {
    return chosenModuleNames.indexOf(route.params.module_key);
  });

  const selectedModule = computed(() => {
    // return chosenModules[selectedIndex.value];
    console.log('MODULE', selectedModule)
    return chosenModules[selectedIndex.value];
  });

  return { chosenModules, selectedIndex, selectedModule };
}

