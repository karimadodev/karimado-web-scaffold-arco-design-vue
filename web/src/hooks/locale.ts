import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { setLocale } from '@/utils/locale';

export default function useLocale() {
  const i18n = useI18n();

  const currentLocale = computed(() => {
    return i18n.locale.value;
  });

  const changeLocale = (value: string) => {
    i18n.locale.value = value;
    setLocale(value);
  };

  return {
    currentLocale,
    changeLocale,
  };
}
