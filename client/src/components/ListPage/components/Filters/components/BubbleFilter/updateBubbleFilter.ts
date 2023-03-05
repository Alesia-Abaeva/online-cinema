export const updateBubbleFilter = (bubbleFilter: HTMLElement, active: SortTypes) => {
  const bubbles = Array.from(bubbleFilter.children);
  bubbles.forEach((el) => {
    el.classList.remove('bubble-filter__item_active');
    if (el.id === active) {
      el.classList.add('bubble-filter__item_active');
    }
  });
};
