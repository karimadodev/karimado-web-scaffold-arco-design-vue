import enUS from '@arco-design/web-vue/es/locale/lang/en-us';

const ARCO_MESSAGES = {
  'en-US': enUS,
};

export const arcoMessages = (locale: string) => {
  return ARCO_MESSAGES[locale as keyof typeof ARCO_MESSAGES];
};
