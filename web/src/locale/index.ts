import { createI18n as _createI18n } from 'vue-i18n';
import { getLocale, setLocale } from '@/utils/locale';
import { LOCALE, LOCALE_OPTIONS } from './base';
import { MESSAGES } from './lang';

const i18n = (() => {
  let locale = getLocale();
  if (locale == null || MESSAGES[locale as keyof typeof MESSAGES] == null) {
    locale = LOCALE;
    setLocale(locale);
  }

  return _createI18n({
    legacy: false,
    locale,
    fallbackLocale: LOCALE,
    allowComposition: true,
    messages: MESSAGES,
  });
})();

export { LOCALE_OPTIONS };
export default i18n;
