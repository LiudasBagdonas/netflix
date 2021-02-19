import { AUTH } from './constants';

  export const login = (state) => state[AUTH].token;
  export const logout = (state) => state[AUTH].token;

