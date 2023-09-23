import type { Locale } from "@/app/i18n.config";

const dictionaries = {
  en: () => import('@/app/dictionaries/en.json').then(module => module.default),
  id: () => import('@/app/dictionaries/id.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => {
  const dictionaryFunction = dictionaries[locale];
  if (dictionaryFunction) {
    return dictionaryFunction();
  } else {
    return null;
  }
}

