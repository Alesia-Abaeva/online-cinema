interface ListCard {
  title: string;
  imgUrl: string;
  filmsCount: number;
  url: string;
  fn: (options: Options) => Promise<ResponseFindedMovies | ErrorMessage>;
}

interface ListItems {
  item: ResponseFindedMovies;
  pathname: string;
}

interface FilmItems {
  item: ResponseMovie;
  pathname: string;
}

interface PersonItems {
  item: { data: ResponsePerson };
  pathname: string;
}
