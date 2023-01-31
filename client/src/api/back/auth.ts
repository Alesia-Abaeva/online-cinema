import { LOGIN, REGISTER } from 'src/const/api/url';
import { backCall } from '../api';

export const registerHandler = async (body: AuthRequest) => await backCall.post<AuthRequest, AuthRequest>(LOGIN, body);

export const authHandler = async (body: AuthRequest) => await backCall.post<AuthRequest, AuthRequest>(REGISTER, body);
