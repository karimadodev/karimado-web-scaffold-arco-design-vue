import axios from '@/api/axios';

export interface CreateRequestForm {
  username: string;
  password: string;
}

export interface CreateRequest {
  form: CreateRequestForm;
}

export interface CreateResponseUserInfo {
  name: string;
  role: string;
}

export interface CreateResponse {
  token: string;
  info: CreateResponseUserInfo;
}

export function create(req: CreateRequest) {
  return axios.post<CreateResponse>('/karimado/auth', req);
}

export function destroy() {
  return axios.delete('/karimado/auth');
}
