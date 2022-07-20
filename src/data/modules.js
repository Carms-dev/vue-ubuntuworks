import modules from './modules.json';

const assetsDir = '../assets/';

export function useAssetUrl(assetsPath, fileName) {
  return new URL(assetsPath + fileName, import.meta.url).href
}


export function useModules() {
  return modules.map((module) => {
    const moduleWithUrl = Object.assign({}, module);
    moduleWithUrl.image.url = useAssetUrl(assetsDir, module.image.file);
    return moduleWithUrl;
  })
}

