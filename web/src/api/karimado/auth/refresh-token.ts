import axios from '@/api/axios';

export interface RefreshTokenRequest {
  token: string;
}

export interface RefreshTokenResponse {
  access_token: string;
  refresh_token: string;
}

export function refreshToken(req: RefreshTokenRequest) {
  return axios.post<RefreshTokenResponse>('/karimado/auth/token/refresh', req);
}
