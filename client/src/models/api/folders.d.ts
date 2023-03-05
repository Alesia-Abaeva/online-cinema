interface FolderData {
  folderName: string;
  id: number;
}

interface UserFolderData {
  id: number;
  displayedName?: string;
  filmId?: number;
}

interface PromiseFolderRes {
  id: string;
  stateSnapshot: {
    data: AuthGetPersonToken;
    response: Response;
  };
  start: number;
  stop: number;
  duration: number;
}

interface ResponseFolder {
  folderName: string;
  data: ResponseMovie[];
}

interface ResponseUserFolder {
  displayedName: string;
  films: ResponseMovie[];
  _id: number;
}
