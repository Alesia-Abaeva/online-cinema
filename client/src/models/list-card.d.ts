interface ListCard {
  title: string;
  imgUrl: string;
  filmsCount: number;
  url: string;
}

interface ListItems {
  item: ResponseFindedMovies;
  pathname: string;
}

interface FolderItems {
  item: ResponseFolder | ResponseUserFolder;
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
