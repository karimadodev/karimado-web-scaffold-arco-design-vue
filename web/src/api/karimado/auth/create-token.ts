import axios from '@/api/axios';

export interface CreateTokenRequest {
  username: string;
  password: string;
}

export interface CreateTokenResponse {
  access_token: string;
  refresh_token: string;
}

export function createToken(req: CreateTokenRequest) {
  return axios.post<CreateTokenResponse>('/karimado/auth/token', req);
}
