import { authCreateToken } from './create-token';
import { authRevokeToken } from './revoke-token';

const authAPI = {
  createToken: authCreateToken,
  revokeToken: authRevokeToken,
};

export * from './create-token';
export * from './revoke-token';
export default authAPI;
