interface RequestData {
  search: number | string;
  field: string;
  token: string;
  page?: number;
  limit?: number;
  sortField?: string;
  sortType?: number;
  isStrict?: boolean;
}

type ApiPage = ValueOf<typeof import('../../const/api/url').API_REQUEST>;
