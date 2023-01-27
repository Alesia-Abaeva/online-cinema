interface ResponseMovie {
  ageRating: null | string | number;
  alternativeName: string;
  backdrop: { previewUrl: string; url: string } | null;
  budget: { currency: string; value: number };
  collections: string[]; //????
  countries: ChildeAttribures[];
  createDate: string;
  description: string | null;
  distributors: { distributor: string | null; distributorRelease: string | null };
  enName: string | null;
  externalId: ExternalId;
  facts: ChildeAttribures | null;
  fees: FeesApi;
  genres: ChildeAttribures;
  id: number;
  images: ImagesApi;
  imagesInfo: ImagesApi;
  lists: string[]; // ??????
  logo: { url: string | null };
  movieLength: number;
  name: string;
  names?: ChildeAttribures | null;
  persons: PersonDataApi[];
  poster: { previewUrl: string; url: string };
  premiere: ChildeAttribures;
  productionCompanies: ProductionCompanies;
  rating: RaitingApi;
  ratingMpaa: string;
  seasonsInfo: SeasonsInfo[];
  sequelsAndPrequels: SequelsAndPrequels[];
  shortDescription: string;
  similarMovies: SequelsAndPrequels[];
  slogan: string;
  spokenLanguages: ChildeAttribures;
  status: string;
  technology: { has3D: boolean; hasImax: boolean };
  ticketsOnSale: boolean;
  top10: null; //????
  top250: null | number;
  type: string;
  typeNumber: number;
  updateDates: string[];
  updatedAt: string;
  videos: VideosApi;
  votes: RaitingApi;
  watchability: null; //??????
  year: number;
  releaseYears?: { start: number; end: number }[];
}

interface ChildeAttribures {
  [key: string]: string | number | null;
}

interface ExternalId {
  tmdb?: number | string;
  imdb?: string | number;
  kpHD?: string;
}

interface RaitingApi extends ExternalId {
  kp: number;
  await: number;
  filmCritics: number;
  imdb: number;
  russianFilmCritics: number;
}

interface VideosApi {
  teasers: VideosData[] | null;
  trailers: VideosData[] | null;
}

interface VideosData {
  url: string;
  name: string;
  site: string;
  size?: number;
  type: string;
}

interface FeesApi {
  world: ChildeAttribures;
  russia: ChildeAttribures;
  usa: ChildeAttribures;
}

interface ImagesApi {
  postersCount?: number;
  backdropsCount?: number;
  framesCount?: number;
}

interface ProductionCompanies {
  name: string;
  url: string;
  previewUrl: string;
}

interface PersonDataApi {
  id: number;
  name: string;
  enName: string;
  photo: string;
  enProfesson: string;
  description: string;
}

interface SeasonsInfo {
  number?: number;
  episodesCount?: number;
}

type SequelsAndPrequels = Pick<ResponseMovie, 'alternativeName' | 'enName' | 'id' | 'name' | 'poster' | 'type'>;

type FindedMovies = Pick<
  ResponseMovie,
  | 'alternativeName'
  | 'description'
  | 'enName'
  | 'logo'
  | 'movieLength'
  | 'name'
  | 'names'
  | 'poster'
  | 'rating'
  | 'releaseYears'
  | 'shortDescription'
  | 'type'
  | 'votes'
  | 'watchability'
  | 'year'
  | 'externalId'
>;
interface ResponseFindedMovies extends PageLimit {
  data: FindedMovies[];
}
