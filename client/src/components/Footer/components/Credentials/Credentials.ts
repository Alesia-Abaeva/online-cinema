import { projectTitle } from '../../../../const/project-title';
import { createElem } from '../../../../utils/create-element';
import { createLink } from '../../../../utils/create-link-element';

export const rederCredentials = (nicknames: string[]): HTMLElement => {
  const footerCredentials: HTMLElement = createElem('div', 'footer__credentials');
  footerCredentials.innerHTML = `${projectTitle} engineered by `;

  nicknames.forEach((name, idx) => {
    const footerGitLink: HTMLElement = createLink(`https://github.com/${name}`, 'footer__link', true, name);
    footerCredentials.append(footerGitLink);
    if (idx !== nicknames.length - 1) {
      footerCredentials.innerHTML = `${footerCredentials.innerHTML} & `;
    }
  });

  return footerCredentials;
};
