export const setPaginationBtns = (
  prevBtn: HTMLElement,
  nextBtn: HTMLElement,
  page: number,
  limit: number,
  total: number
): void => {
  if (page * limit < total) {
    nextBtn.classList.remove('disabled');
  } else {
    nextBtn.classList.add('disabled');
  }
  if (page > 1) {
    prevBtn.classList.remove('disabled');
  } else {
    prevBtn.classList.add('disabled');
  }
};
