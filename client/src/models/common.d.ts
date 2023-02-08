/** Проходит по ключам объекта, создавая utility type */
type ValueOf<T> = T[keyof T];

type Nullable<T> = T | null;

type ReferenceTypes = ValueOf<typeof import('../const/referens').REFERENC>;
