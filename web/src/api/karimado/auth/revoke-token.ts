import axios from '@/api/axios';

export interface RevokeTokenResponse {}

export function revokeToken() {
  return axios.post<RevokeTokenResponse>('/karimado/auth/token/revoke');
}
