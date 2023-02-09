interface ApiResponse<T> {
  data?: Nullable<T>;
  error?: Nullable<ErrorMessage>;
  isLoading?: boolean;
  isAuth?: boolean;
}
