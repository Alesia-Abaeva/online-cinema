import { createElem } from 'src/utils/create-element';
import { createButton } from '../ui/Button/Button';
import styles from './FilmPage.module.scss';
import { renderPersons } from './components/Persons/Persons';
import { renderBackgroundPlayer } from './components/BackgroundPlayer/BackgroundPlayer';
import { renderFilmDataTable } from './components/FilmDataTable/FilmDataTable';
import { renderRating } from './components/Rating/Rating';

export const renderFilmPage = (filmData: ResponseMovie): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['film-page']);
  const backdrop: HTMLElement = createElem('div', 'film-page__backdrop');

  renderBackgroundPlayer(filmData, backdrop, mainContent);

  // TODO: ADD placeholders
  // 1 column - poster
  const filmPoster: HTMLElement = createElem('img', 'film-page__poster');
  filmPoster.setAttribute('src', filmData.poster.url);

  // 2 column - film data
  const filmDescription: HTMLElement = createElem('div', 'film-page__description');
  const filmHeader: HTMLElement = createElem('div', 'film-page__header');
  const filmTitle: HTMLElement = createElem('h1', 'film-page__title');

  const year = filmData.year ? `(${filmData.year})` : '';
  filmTitle.innerHTML = `${filmData.name} ${year}`;

  const enName = filmData.alternativeName ? `${filmData.alternativeName}` : '';
  const filmEnTitle: HTMLElement = createElem('div', 'film-page__sub-title');
  const age = filmData.ageRating;
  filmEnTitle.innerHTML = `${enName} ${age ? `${age}+` : ''}`;

  filmHeader.append(filmTitle, filmEnTitle);

  const actionBtns: HTMLElement = createElem('div', 'film-page__action');
  const wantToWatchBtn: HTMLElement = createButton('Буду смотреть', undefined, 'film-page__action-want-to-watch');
  const moreActionsBtn: HTMLElement = createButton('', undefined, 'film-page__action-more');

  actionBtns.append(wantToWatchBtn, moreActionsBtn);

  const shortDescription: HTMLElement = createElem('div', 'film-page__short-desc');
  const shortDescriptionText: HTMLElement = createElem('p', 'film-page__short-desc-text');
  shortDescriptionText.innerHTML = filmData.shortDescription;
  shortDescription.append(shortDescriptionText);

  const filmAbout: HTMLElement = renderFilmDataTable(filmData);

  filmDescription.append(filmHeader, actionBtns, shortDescription, filmAbout);

  // 3 column - actors and rating
  const filmRatingAndActors = createElem('div', 'film-page__desc-aside');

  const rating: HTMLElement = renderRating(filmData.rating.kp);
  const actorsSection = renderPersons('В главных ролях:', filmData.persons, 'actor');
  const voiceActorsSection = renderPersons('Роли дублировали:', filmData.persons, 'voice_actor');

  filmRatingAndActors.append(rating, actorsSection, voiceActorsSection);

  mainContent.append(filmPoster, filmDescription, filmRatingAndActors);
  mainContainer.append(backdrop, mainContent);
  main.append(mainContainer);

  return main;
};
