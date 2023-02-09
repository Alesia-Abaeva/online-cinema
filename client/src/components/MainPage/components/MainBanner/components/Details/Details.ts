import { createElem } from 'src/utils/create-element';
import styles from './Details.module.scss';

export const renderDetails = (res: ResponseMovie): HTMLElement => {
  const details: HTMLElement = createElem('div', styles.filmDetails);
  const description = res.description ? res.description : 'Нет описания';
  const title = res.logo.url ? `<img src="${res.logo.url}" alt="${res.name}" />` : res.name;
  const raiting = res.rating.kp ? res.rating.kp.toFixed(1) : '';
  const votes = res.votes.kp ? res.votes.kp : 0;

  const createListItem = (text: string) => {
    const listItem = `<li  class=${styles.body__right__item}>${text}</li>`;
    return listItem;
  };

  const actors = res.persons
    .filter((el) => el.enProfession === 'actor')
    .slice(0, 10)
    .map((el) => el.name);
  const directors = res.persons
    .filter((el) => el.enProfession === 'director')
    .slice(0, 2)
    .map((el) => el.name);

  const detailsTemplate = `
  <div class=${styles.filmDetails__title}>
    <h1>${title}</h1>
  </div>
  <div class=${styles.filmDetails__body}>
  <div class=${styles.filmDetails__body__left}>
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
  </div>
</div>
<p class=${styles.filmDetails__description}>${description}</p>
  </div>
<div class=${styles.filmDetails__body__right}>
  <div  class=${styles.body__right__container}>
    <div  class=${styles.body__right__block}>
      <div class=${styles.body__right__title}>В главных ролях</div>
      <ul  class=${styles.body__right__list}>
        ${actors.map((el) => createListItem(el)).join(' ')}
      </ul>
    </div>
    <div  class=${styles.body__right__block}>
      <div  class=${styles.body__right__title}>Режиссёры</div>
      <ul  class=${styles.body__right__list}>
        ${directors.map((el) => createListItem(el)).join(' ')}
      </ul>
    </div>
  </div>
</div>
</div>
`;

  details.innerHTML = detailsTemplate;
  return details;
};
