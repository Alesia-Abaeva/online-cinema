export const notFound = (): void => {
  // TODO renderApp(renderNotFoundPage);
  const appContiner = document.querySelector('#app') as HTMLElement;
  appContiner.innerHTML = '';

  const header: HTMLElement = document.createElement('h1');
  header.innerHTML = 'PAGE NOT FOUND 404';
  appContiner.append(header);
};
