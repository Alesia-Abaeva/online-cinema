import {
  LOGIN,
  PERSON_DATA,
  PERSON_DATA_PARENT,
  PERSON_DATA_PASS,
  PERSON_DATA_TARIFF,
  PERSON_DELETE,
  REGISTER,
  UPLOAD_IMG,
} from 'src/const/api/url';
import { backCall } from '../api';

export const loginHandler = (body: AuthRequest) => backCall.post<AuthRequest, AuthResponse>(LOGIN, body);

export const registerHandler = (body: AuthRequest) => backCall.post<AuthRequest, AuthResponse>(REGISTER, body);

export const dataPersonHandler = () => backCall.get<AuthGetPersonToken>(PERSON_DATA);

export const uploadHandler = (body: FormData) =>
  backCall.post<FormData, AuthGetPersonToken>(UPLOAD_IMG, body, {}, true);

export const updateUser = async (body: Partial<AuthGetPersonToken>) =>
  backCall.put<Partial<AuthGetPersonToken>, AuthGetPersonToken>(PERSON_DATA, body);

export const updateUserPass = async (body: Partial<AuthGetPersonToken>) =>
  backCall.put<Partial<AuthGetPersonToken>, { message: string }>(PERSON_DATA_PASS, body);

export const updateParentsControl = async (body: Partial<AuthGetPersonToken>) =>
  backCall.put<Partial<AuthGetPersonToken>, AuthGetPersonToken>(PERSON_DATA_PARENT, body);

export const updateUserTariff = async (body: Partial<AuthGetPersonToken>) =>
  backCall.put<Partial<AuthGetPersonToken>, AuthGetPersonToken>(PERSON_DATA_TARIFF, body);

export const deleteUser = async () => backCall.delete<void>(PERSON_DELETE);
