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
  token: string;
  createdAt: string;

  email: string;

  films: string[];

  name: string;

  password: string;

  updatedAt: string;
}
