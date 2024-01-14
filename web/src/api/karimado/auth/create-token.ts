import client, { HttpResponse } from '@/api/client';

export interface AuthCreateTokenRequest {
  username: string;
  password: string;
}

export interface AuthCreateTokenResponse {
  access_token: string;
  refresh_token: string;
}

export function authCreateToken(req: AuthCreateTokenRequest) {
  return client.post<any, HttpResponse<AuthCreateTokenResponse>>(
    '/karimado/auth/token',
    req
  );
}
