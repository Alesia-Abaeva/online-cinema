interface ResponsePerson {
  age: number | null;
  birthPlace: { value: string }[];
  birthday: string;
  countAwards: number;
  createdAt: string;
  death: string | null;
  deathPlace: { value: string }[];
  enName: string | null;
  facts: { value: string }[];
  growth: number;
  movies: MoviesPerson[];
  name: string;
  photo: string;
  profession: { value: string }[];
  sex: string;
  spouses: string[];
  updatedAt: string;
  id?: number | null;
}

interface MoviesPerson {
  description: string;
  general: boolean;
  id: number;
  name: string;
  rating: number;
}

type FindedPersons = Pick<ResponsePerson, 'age' | 'enName' | 'name' | 'photo' | 'sex' | 'id'>;

interface ResponseFindedPersons extends PageLimit {
  data: FindedPersons[];
}
