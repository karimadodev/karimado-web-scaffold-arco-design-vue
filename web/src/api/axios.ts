import axios from 'axios';
import qs from 'qs';
import { Message } from '@arco-design/web-vue';
import { getToken } from '@/utils/auth';
import { getLocale } from '@/utils/locale';

export interface HttpResponse<T = unknown> {
  code: number;
  message: string;
  data?: T;
  errors?: Record<string, string>;
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  paramsSerializer: {
    serialize: (params) => {
      return qs.stringify(params, { arrayFormat: 'brackets' });
    },
  },
});

instance.interceptors.request.use(
  // Do something before request is sent
  (config) => {
    if (!config.headers) {
      config.headers = new axios.AxiosHeaders({});
    }

    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const locale = getLocale();
    if (locale) {
      config.headers['Accept-Language'] = locale;
    }

    return config;
  },
  // Do something with request error
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  (response) => {
    const res = response.data;
    if (res.code === 0) return res; // Ok
    if (Object.keys(res.errors || {}).length !== 0) return res; // Err, with detailed error messages

    // Err, with only summary error messages
    Message.error({
      content: res.message || 'Error',
      duration: 5 * 1000,
    });
    return Promise.reject(new Error(res.message || 'Error'));
  },
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  (error) => {
    Message.error({
      content: error.message || 'Request Error',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default instance;
