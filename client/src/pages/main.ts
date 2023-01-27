export const app = (): void => {
  // TODO renderApp(renderMainPage);
  const appContiner = document.querySelector('#app') as HTMLElement;
  // appContiner.innerHTML = '';

  const header: HTMLElement = document.createElement('h1');
  header.innerHTML = 'APP';
  appContiner.append(header);
};
