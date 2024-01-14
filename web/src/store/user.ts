import { useStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { karimadoAPI } from '@/api';
import { setToken, clearToken } from '@/utils/auth';
import type { AuthCreateTokenRequest } from '@/api/karimado';

interface UserInfo {
  name: string;
  role: string;
}

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

  const login = async (req: AuthCreateTokenRequest) => {
    try {
      const res = await karimadoAPI.auth.createToken(req);
      setToken(res.data!);
      info.value = { ...USER_INFO_DEFAULE };
    } catch (err) {
      clearToken();
      throw err;
    }
  };

  const logout = async () => {
    try {
      await karimadoAPI.auth.revokeToken();
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
