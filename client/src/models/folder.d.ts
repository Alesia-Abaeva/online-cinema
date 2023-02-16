interface UserFolder {
  _id: number;
  displayedName: string;
  films: number[];
}
interface UserFolders {
  id: number;
  displayedName: string;
  films: number[];
}

type DefaultFoldersNames = 'bookmarks' | 'watched' | 'watchedRecently';

type DefaultFolders = { [name in DefaultFoldersNames]: string };
