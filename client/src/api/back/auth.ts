import { LOGIN, PERSON_DATA, REGISTER, UPLOAD_IMG } from 'src/const/api/url';
import { backCall } from '../api';

export const loginHandler = (body: AuthRequest) => backCall.post<AuthRequest, AuthResponse>(LOGIN, body);

export const registerHandler = (body: AuthRequest) => backCall.post<AuthRequest, AuthResponse>(REGISTER, body);

export const dataPersonHandler = () => backCall.get<AuthGetPersonToken>(PERSON_DATA);

export const uploadHandler = (body: FormData) =>
  backCall.post<FormData, UploadResponse>(
    UPLOAD_IMG,
    body,
    {
      //   headers: { 'Content-Type': 'multipart/form-data' },
    },
    true
  );
