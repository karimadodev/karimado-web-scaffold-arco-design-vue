import client, { HttpResponse } from '@/api/client';

export interface AuthRevokeTokenResponse {}

export function authRevokeToken() {
  return client.post<any, HttpResponse<AuthRevokeTokenResponse>>(
    '/karimado/auth/token/revoke'
  );
}
