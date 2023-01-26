export const register = (): void => {
  // TODO renderApp(renderRegisterPage);
  const appContiner = document.querySelector('#app') as HTMLElement;
  appContiner.innerHTML = '';

  const header: HTMLElement = document.createElement('h1');
  header.innerHTML = 'REGISTER';
  appContiner.append(header);
};
