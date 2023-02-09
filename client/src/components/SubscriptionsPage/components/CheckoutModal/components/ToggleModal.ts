export const toggleModal = (hostEl: HTMLElement, overlay: HTMLElement): void => {
  if (overlay) overlay.classList.toggle('hidden_overlay');
  if (hostEl) hostEl.classList.toggle('active');
};
