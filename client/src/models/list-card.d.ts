interface ListCard {
  title: string;
  imgUrl: string;
  filmsCount: number;
  url: string;
  fn: () => Promise<ResponseFindedMovies | ResErrorMes>;
}

interface ListItems {
  item: ResponseFindedMovies;
  pathname: string;
}

interface FilmItems {
  item: ResponseMovie;
  pathname: string;
}
