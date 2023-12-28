import { useStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import {
  create as authCreate,
  destroy as authDestroy,
} from '@/api/karimado/auth';
import { setToken, clearToken } from '@/utils/auth';
import type {
  CreateRequestForm as AuthCreateRequestForm,
  CreateRequest as AuthCreateRequest,
  CreateResponseUserInfo as UserInfo,
} from '@/api/karimado/auth';

const USER_INFO_KEY = 'karimado.user.info';
const USER_INFO_DEFAULE = {
  name: 'unknown',
  role: 'unknown',
};

const useUserStore = defineStore('user', () => {
  const info = useStorage<UserInfo>(
    USER_INFO_KEY,
    USER_INFO_DEFAULE,
    localStorage,
    { mergeDefaults: true }
  );

  const login = async (formData: AuthCreateRequestForm) => {
    try {
      const res = await authCreate({ form: formData } as AuthCreateRequest);
      setToken(res.data.token);
      info.value = { ...USER_INFO_DEFAULE, ...res.data.info };
    } catch (err) {
      clearToken();
      throw err;
    }
  };

  const logout = async () => {
    try {
      await authDestroy();
    } finally {
      clearToken();
    }
  };

  return {
    info,

    login,
    logout,
  };
});

export default useUserStore;
