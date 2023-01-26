export const film = (films: TestData): void => {
  // TODO renderApp(renderFilmPage);
  const appContiner = document.querySelector('#app') as HTMLElement;
  appContiner.innerHTML = '';

  const header: HTMLElement = document.createElement('h1');
  header.innerHTML = `${films.name}`;
  appContiner.append(header);
};
