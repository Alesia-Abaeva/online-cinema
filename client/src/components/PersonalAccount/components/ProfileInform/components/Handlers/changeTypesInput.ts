export const changeInputType = (input: HTMLElement) => {
  const types = (input as HTMLElement).getAttribute('type') === 'password' ? 'text' : 'password';
  input.setAttribute('type', types);
};
