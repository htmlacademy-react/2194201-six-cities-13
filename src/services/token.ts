import { Token } from '../types';
import { APIConfig } from '../constants';

const getToken = (): Token => {
  const token = localStorage.getItem(APIConfig.AuthTokenKey);
  return token ?? '';
};

const saveToken = (token: Token): void => {
  localStorage.setItem(APIConfig.AuthTokenKey, token);
};

const dropToken = (): void => {
  localStorage.removeItem(APIConfig.AuthTokenKey);
};

export { getToken, saveToken, dropToken };
