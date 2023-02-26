interface AuthRequest {
  email: string;
  password: string;
  name?: string;
  tariff?: string;
  promocode?: string[];
  parentControls?: string;
}

interface AuthResponse {
  userId: string;
  token: string;
}

interface FoldersType {
  bookmarks: number[];
  watched: number[];
  watchedRecently: number[];
  [key: string]: number[];
}

interface AuthGetPersonToken {
  token?: string;
  email?: string;
  folders?: FoldersType;
  userFolders?: UserFolder[];
  name?: string;
  password?: string;
  updatedAt?: string;
  createdAt?: string;
  avatarUrl?: string;
  lastName?: string;
  tariff?: string;
  newPassword?: string;
  repeatPassword?: string;
  promocode?: string[];
  parentControls?: string;
  message?: string;
  reviews?: GetReviews[];
  user?: ReviewUser;
}

interface UploadResponse {
  url: string;
}
