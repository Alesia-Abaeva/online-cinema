interface ListCard {
  title: string;
  imgUrl: string;
  filmsCount: number;
  url: string;
  fn: (options: Options) => Promise<{ data: ResponseFindedMovies }>;
}

interface ListItems {
  item: { data: ResponseFindedMovies };
  pathname: string;
}

interface FilmItems {
  item: { data: ResponseMovie };
  pathname: string;
}

interface PersonItems {
  item: { data: ResponsePerson };
  pathname: string;
}
