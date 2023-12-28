import type { RouteLocationNormalized } from 'vue-router';
import i18n from '@/locale';

export function setWindowTitle(route: RouteLocationNormalized) {
  const siteTitle = 'site.name';
  const pageTitle = route.meta?.title ?? '';
  if (pageTitle) {
    window.document.title = `${i18n.global.t(pageTitle)} - ${i18n.global.t(
      siteTitle
    )}`;
  } else {
    window.document.title = i18n.global.t(siteTitle);
  }
}
