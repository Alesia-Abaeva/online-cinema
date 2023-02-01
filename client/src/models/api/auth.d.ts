interface AuthRequest {
  email: string;
  password: string;
  name?: string;
}

interface AuthResponse {
  userId: string;
  token: string;
}
