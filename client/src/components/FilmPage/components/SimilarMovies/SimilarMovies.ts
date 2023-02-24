import { createElem } from 'src/utils/create-element';
import styles from './SimilarMovies.module.scss';

export const renderSimilarMovies = (movies: SequelsAndPrequels[]): HTMLElement => {
  const similarMoviesSection: HTMLElement = createElem('div', styles['similar-movies']);
  const title: HTMLElement = createElem('h2', 'film-page__about-title');
  title.innerHTML = 'Вам может понравиться';

  const moviesGrid: HTMLElement = createElem('div', 'similar-movies__content');
  const shortList = movies.sort(() => Math.random() - 0.5).slice(0, 5);
  shortList.forEach((el) => {
    const movieCard: HTMLElement = createElem('a', 'similar-movies__card');
    movieCard.setAttribute('href', `/films/${el.id}`);

    const movieImgCont: HTMLElement = createElem('div', 'similar-movies__img-cont');
    const movieImg: HTMLElement = createElem('img', 'similar-movies__img');
    const url = `${
      el.poster
        ? el.poster.previewUrl
        : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640'
    }`;
    movieImg.setAttribute('src', url);
    movieImg.classList.add('skeleton');

    movieImgCont.append(movieImg);

    const movieDesc: HTMLElement = createElem('div', 'similar-movies__card-desc');
    const movieTitle: HTMLElement = createElem('div', 'similar-movies__card-title');
    movieTitle.innerText = el.name || '';
    const movieSubTitle: HTMLElement = createElem('div', 'similar-movies__card-sub-title');
    movieSubTitle.innerText = el.alternativeName || '';

    movieDesc.append(movieTitle, movieSubTitle);

    movieCard.append(movieImgCont, movieDesc);

    moviesGrid.append(movieCard);
  });

  similarMoviesSection.append(title, moviesGrid);
  return similarMoviesSection;
};
