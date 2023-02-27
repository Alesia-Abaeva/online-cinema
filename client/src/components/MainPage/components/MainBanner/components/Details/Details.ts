import { createElem } from 'src/utils/create-element';
import { renderBannerRatung } from '../BannerRating/BannerRating';
import styles from './Details.module.scss';

export const renderDetails = (
  res: ResponseMovie,
  userReview: {
    data: UserFilmReviewResponse;
    response: Response;
  } | null
): HTMLElement => {
  const details: HTMLElement = createElem('div', styles.filmDetails);
  const description = res.description ? res.description : 'Нет описания';
  const title = res.logo && res.logo.url ? `<img src="${res.logo.url}" alt="${res.name}" />` : res.name;
  const raiting = res.rating.kp ? res.rating.kp.toFixed(1) : '';
  const votes = res.votes.kp ? res.votes.kp : 0;

  const detailsLinkSvg = `<svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class=${styles.filmDetails__link__svg} fill="#fff" data-tid="9aedcbf3"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.501 3.664h11.834v11.833h-2V7.078L5 16.413l-1.414-1.414 9.335-9.335H4.5v-2Z"></path></svg>`;

  const createListItem = (text: string, id: number) => {
    const listItem = `<li class=${styles.body__right__item}><a class=${
      styles.filmDetails__person__link
    } data-id=${id} href=name/${id}>${text || ''}</a></li>`;
    return listItem;
  };

  const actors = res.persons
    .filter((el) => el.enProfession === 'actor')
    .slice(0, 10)
    .map((el) => {
      return { name: el.name, id: el.id };
    });
  const directors = res.persons
    .filter((el) => el.enProfession === 'director')
    .slice(0, 2)
    .map((el) => {
      return { name: el.name, id: el.id };
    });

  const detailsTemplate = `

  <div class=${styles.filmDetails__body}>
  <div class=${styles.filmDetails__body__left}>
  <div class=${styles.filmDetails__title}>
  <h1>${title}</h1>
</div>
  <div class=${styles.filmDetails__meta}>
  <div class=${styles.filmDetails__meta__base}>
    <div class=${styles.filmDetails__rating}>
      <div class=${styles.filmDetails__rating__value}>
        ${raiting}
      </div>
      <div class=${styles.filmDetails__rating__votes}>
      ${votes} оценок
      </div>
    </div>
    <div class=${styles.filmDetails__rating__userVotes}></div>
  </div>
</div>
<p class=${styles.filmDetails__description}>${description}</p>
<a class=${styles.filmDetails__link} data-id=${res.id}>Подробнее на RS FILMS${detailsLinkSvg}</a>
  </div>
<div class=${styles.filmDetails__body__right}>
  <div  class=${styles.body__right__container}>
    <div  class=${styles.body__right__block}>
      <div class=${styles.body__right__title}>В главных ролях</div>
      <ul class=${styles.body__right__list}>
        ${actors.map((el) => createListItem(el.name, el.id)).join('')}
      </ul>
    </div>
    <div  class=${styles.body__right__block}>
      <div class=${styles.body__right__title}>Режиссёры</div>
      <ul class=${styles.body__right__list}>
        ${directors.map((el) => createListItem(el.name, el.id)).join('')}
      </ul>
    </div>
  </div>
</div>
</div>
`;

  details.innerHTML = detailsTemplate;

  const ratingBlock = details.querySelector('.filmDetails__rating__userVotes') as HTMLElement;
  if (ratingBlock && userReview && userReview.data.review) {
    const userVote = renderBannerRatung(userReview.data.review.stars);
    const myVote = createElem('span');
    myVote.innerHTML = 'мой отзыв';

    ratingBlock.innerHTML = '';
    ratingBlock.append(userVote, myVote);
  }

  return details;
};
