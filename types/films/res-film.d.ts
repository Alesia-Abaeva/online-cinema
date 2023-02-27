interface ResponseMovie {
  ageRating: null | string | number;
  alternativeName: string;
  backdrop: { previewUrl: string; url: string } | null;
  budget: { currency: string; value: number };
  collections: string[];
  countries: ChildeAttribures[];
  createDate: string;
  description: string | null;
  distributors: {
    distributor: string | null;
    distributorRelease: string | null;
  };
  enName: string | null;
  externalId: ExternalId;
  facts: ChildeAttribures | null;
  fees: FeesApi;
  genres: ChildeAttribures[];
  id: number;
  images: ImagesApi;
  imagesInfo: ImagesApi;
  lists: string[];
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
  top10: null;
  top250: null | number;
  type: string;
  typeNumber: number;
  updateDates: string[];
  updatedAt: string;
  videos: VideosApi;
  votes: RaitingApi;
  watchability: null;
  year: number;
  releaseYears?: { start: number; end: number }[];
}

export type FindedMoviesBack = Pick<
  ResponseMovie,
  | "alternativeName"
  | "description"
  | "enName"
  | "logo"
  | "movieLength"
  | "name"
  | "names"
  | "poster"
  | "rating"
  | "releaseYears"
  | "shortDescription"
  | "type"
  | "votes"
  | "watchability"
  | "year"
  | "externalId"
  | "id"
>;
