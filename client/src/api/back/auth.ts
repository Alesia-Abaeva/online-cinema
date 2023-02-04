import { LOGIN, PERSON_DATA, REGISTER } from 'src/const/api/url';
import { backCall } from '../api';

export const loginHandler = (body: AuthRequest) => backCall.post<AuthRequest, AuthResponse>(LOGIN, body);

export const registerHandler = (body: AuthRequest) => backCall.post<AuthRequest, AuthResponse>(REGISTER, body);

export const dataPersonHandler = () => backCall.get<AuthGetPersonToken>(PERSON_DATA);
