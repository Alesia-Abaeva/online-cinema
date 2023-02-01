import { LOGIN, REGISTER } from 'src/const/api/url';
import { backCall } from '../api';

export const loginHandler = (body: AuthRequest) => backCall.post<AuthRequest, AuthResponse>(LOGIN, body);

export const registerHandler = (body: AuthRequest) => backCall.post<AuthRequest, AuthResponse>(REGISTER, body);
