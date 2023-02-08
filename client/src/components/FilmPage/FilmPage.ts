import { createElem } from 'src/utils/create-element';
import { createButton } from '../ui/Button/Button';
import { renderPersons } from './components/Persons/Persons';
import { renderBackgroundPlayer } from './components/BackgroundPlayer/BackgroundPlayer';
import { renderFilmDataTable } from './components/FilmDataTable/FilmDataTable';
import { renderRating } from './components/Rating/Rating';
import { getPersonsWithJob } from './Handlers/film-data-formaters';
import { renderSimilarMovies } from './components/SimilarMovies/SimilarMovies';
import styles from './FilmPage.module.scss';
import { showCover } from './Handlers/showCover';

export const renderFilmPage = (filmData: ResponseMovie): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['film-page']);
  const backdrop: HTMLElement = createElem('div', 'film-page__backdrop');

  if (window.screen.width > 1000) renderBackgroundPlayer(filmData, backdrop, mainContent);
  else showCover(filmData, backdrop, mainContent)();

  console.log(filmData);

  // 1 column - poster
  const filmPoster: HTMLElement = createElem('img', 'film-page__poster');
  const url = `${
    filmData.poster
      ? filmData.poster.url
      : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640'
  }`;
  filmPoster.setAttribute('src', url);

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
  const shortDescriptionText: HTMLElement = createElem('p', 'film-page__desc-text');
  shortDescriptionText.innerHTML = filmData.shortDescription;
  shortDescription.append(shortDescriptionText);

  const filmAbout: HTMLElement = renderFilmDataTable(filmData);
  filmDescription.append(filmHeader, actionBtns, shortDescription, filmAbout);

  const longDescription = filmData.description;
  if (longDescription) {
    const filmLongDesc: HTMLElement = createElem('div', 'film-page__long-desc');
    const longDescTitle: HTMLElement = createElem('h2', 'film-page__about-title');
    longDescTitle.innerHTML = 'Описание';
    const longDescText: HTMLElement = createElem('p', 'film-page__desc-text');
    longDescText.innerHTML = longDescription;
    filmLongDesc.append(longDescTitle, longDescText);
    filmDescription.append(filmLongDesc);
  }

  const { similarMovies } = filmData;
  if (similarMovies.length !== 0) {
    const simiralMoviesSection: HTMLElement = renderSimilarMovies(similarMovies);
    filmDescription.append(simiralMoviesSection);
  }

  // 3 column - actors and rating
  const filmRatingAndActors = createElem('div', 'film-page__desc-aside');

  const rating: HTMLElement = renderRating(filmData.rating.kp);
  filmRatingAndActors.append(rating);

  const actors = getPersonsWithJob(filmData.persons, 'actor');
  if (actors.length !== 0) {
    const actorsSection = renderPersons('В главных ролях:', actors);
    filmRatingAndActors.append(actorsSection);
  }
  const voiceActors = getPersonsWithJob(filmData.persons, 'voice_actor');
  if (voiceActors.length !== 0) {
    const voiceActorsSection = renderPersons('Роли дублировали:', voiceActors);
    filmRatingAndActors.append(voiceActorsSection);
  }

  mainContent.append(filmPoster, filmDescription, filmRatingAndActors);
  mainContainer.append(backdrop, mainContent);
  main.append(mainContainer);

  return main;
};
