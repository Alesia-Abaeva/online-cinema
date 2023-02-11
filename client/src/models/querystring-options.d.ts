interface Options {
  id?: string;
  limit?: number;
  page?: number;
  sort?: SortTypes;
  // Опции для функций запросов
}
interface DefOptions {
  limit: number;
  page: number;
  sort: SortTypes;
  // Опции для функций запросов
}

interface ListPagination {
  limit: number;
  page: number;
  total: number;
}
