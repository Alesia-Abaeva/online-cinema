/** Проходит по ключам объекта, создавая utility type */
type ValueOf<T> = T[keyof T];
