export const removeOverlay = (id: string) => {
  const overlay = document.getElementById(id) as HTMLElement;
  overlay.remove();
};
