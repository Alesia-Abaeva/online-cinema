interface Options {
  id?: string;
  limit?: number;
  page?: number;
  // listName?: string;
  // Опции для функций запросов
}
interface DefOptions {
  limit: number;
  page: number;
  // Опции для функций запросов
}

interface ListPagination {
  limit: number;
  page: number;
  total: number;
}
