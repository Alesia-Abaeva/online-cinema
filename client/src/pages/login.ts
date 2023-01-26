export const login = (): void => {
  // TODO renderApp(renderLoginPage);
  const appContiner = document.querySelector('#app') as HTMLElement;
  appContiner.innerHTML = '';

  const header: HTMLElement = document.createElement('h1');
  header.innerHTML = 'LOGIN';
  appContiner.append(header);
};
