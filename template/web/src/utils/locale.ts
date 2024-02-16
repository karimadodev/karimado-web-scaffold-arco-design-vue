const LOCALE_KEY = 'karimado.app.locale';

export function getLocale() {
  return localStorage.getItem(LOCALE_KEY);
}

export function setLocale(locale: string) {
  localStorage.setItem(LOCALE_KEY, locale);
}
