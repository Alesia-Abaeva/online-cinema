export enum AuthTypes {
  INIT = 'INIT',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
}

export enum UserTypes {
  PERSON = 'PERSON',
  SET_PASS_INFO = 'SET_PASS_INFO',
  ERROR_PASS = 'ERROR_PASS',
}

export enum UiConfigTypes {
  SET_VIEW_TYPE = 'SET_VIEW_TYPE',
  SET_AUTH = 'SET_AUTH',
}

export enum Modals {
  FILM = 'FILM',
}
// тип для редакса

export enum AgeTypes {
  CHILD = 'CHILD',
  PARENT = 'PARENT',
}

export enum SliderType {
  SET_SLIDER = 'SET_SLIDER',
}

export enum PromocodeType {
  SET_PERSONAL_PROMOCODE = 'SET_PERSONAL_PROMOCODE',
  ACTIVATE_PROMOCODE = 'ACTIVATE_PROMOCODE',
}

export enum ReviewType {
  SET_PERSONAL_REVIEWS = 'SET_PERSONAL_REVIEWS',
  SET_FILM_REVIEWS = 'SET_FILM_REVIEWS',
  CREATE_REVIEW = 'CREATE_REVIEW',
  UPDATE_REVIEW = 'UPDATE_REVIEW',
  DELETE_REVIEW = 'DELETE_REVIEW',
}
