interface AuthRequest {
  email: string;
  password: string;
  name?: string;
}

interface AuthResponse {
  userId: string;
  token: string;
}

interface AuthGetPersonToken {
  token?: string;
  email?: string;
  films?: string[];
  name?: string;
  password?: string;
  updatedAt?: string;
  createdAt?: string;
  avatarUrl?: string;
  lastName?: string;
  tarrif?: string;
  newPassword?: string;
  repeatPassword?: string;
  promocode?: string[];
  parentControls?: string;
}

interface UploadResponse {
  url: string;
}
