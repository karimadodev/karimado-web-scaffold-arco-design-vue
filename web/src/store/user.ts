import { useStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { createToken } from '@/api/karimado/auth/create-token';
import { revokeToken } from '@/api/karimado/auth/revoke-token';
import { setToken, clearToken } from '@/utils/auth';
import type { CreateTokenRequest } from '@/api/karimado/auth/create-token';

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

  const login = async (req: CreateTokenRequest) => {
    try {
      const res = await createToken(req);
      setToken(res.data);
      info.value = { ...USER_INFO_DEFAULE };
    } catch (err) {
      clearToken();
      throw err;
    }
  };

  const logout = async () => {
    try {
      await revokeToken();
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
