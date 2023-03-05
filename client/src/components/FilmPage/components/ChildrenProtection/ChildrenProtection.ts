import { createButton } from 'src/components/ui/Button/Button';
import { toggleScroll } from 'src/components/ui/Modal/no-scroll-on';
import { lockIcon } from 'src/const/icons/icons';
import { route } from 'src/router/route';
import { createElem } from 'src/utils/create-element';
import styles from './ChildrenProtection.module.scss';

export const renderChildrenProtection = () => {
  const protection: HTMLElement = createElem('div', styles['children-protection']);

  const content: HTMLElement = createElem('div', 'children-protection__content');
  const lock: HTMLElement = createElem('div', 'children-protection__lock');
  lock.innerHTML = lockIcon;

  const mes: HTMLElement = createElem('h2', 'children-protection__message');
  mes.innerHTML = 'Этот фильм недоступен в детском режиме';

  const toMainBtn: HTMLElement = createButton(
    'На главную',
    () => {
      toggleScroll();
      route('/');
    },
    'children-protection__btn'
  );

  content.append(lock, mes, toMainBtn);

  protection.append(content);

  return protection;
};
