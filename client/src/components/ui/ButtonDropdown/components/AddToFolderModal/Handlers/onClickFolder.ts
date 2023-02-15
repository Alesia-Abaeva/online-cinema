import { tick } from 'src/const/icons/icons';
import { formatRuWord } from 'src/utils/formatRUWorld';

export const onClickFolder = (e: Event): void => {
  const target = e.target as HTMLElement;
  if (target.classList.contains('all-folders__folder')) {
    const amountOfFilms = target.querySelector('.all-folders__folder-film-counter') as HTMLElement;
    const { checked } = target.dataset;

    target.dataset.checked = checked === 'true' ? 'false' : 'true';

    const filmCount = target.dataset.length ? +target.dataset.length : 0;

    amountOfFilms.innerHTML =
      checked === 'true' ? `${tick}` : `${filmCount} ${formatRuWord(filmCount, ['фильм', 'фильма', 'фильмов'])}`;
  }
};
