import { useStorage } from '@vueuse/core';
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
  // TODO: plx refactor this...
  return modules
    .filter((module) => {
      return chosenModuleNames.indexOf(module.key) !== -1;
    })
    .map((module) => {
      const moduleWithUrl = Object.assign({}, module);
      moduleWithUrl.image.url = useAssetUrl(assetsDir, module.image.file);
      return moduleWithUrl;
    });
}

