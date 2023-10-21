import { idDict } from "@/app/dictionaries/id.js";
import { enDict } from "@/app/dictionaries/en.js";
import type { Locale } from "@/app/i18n.config";

const dictionaries = {
  en: enDict,
  id: idDict
}

export const getDictionary = async (locale: Locale) => {
  const dictionaryFunction = dictionaries[locale];
  if (dictionaryFunction) {
    return dictionaryFunction;
  } else {
    return null;
  }
}

