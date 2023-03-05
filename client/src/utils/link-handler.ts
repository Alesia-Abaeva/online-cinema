import { route } from '../router/route';

export const linkHandler = (e: Event) => {
  e.preventDefault();
  const target = e.target as HTMLLinkElement;
  const link = target.getAttribute('href');
  if (link) route(link);
};
