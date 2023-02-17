import { ViewType } from 'src/const/main-page-data';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import styles from './AnimationLayer.module.scss';

export const renderHeaderAnimation = (): HTMLElement => {
  const { viewType } = store.getState().uiConfig;

  const wrapper = createElem('div', styles.headerAnimation);
  const layer1 = createElem('div', styles.headerAnimation__layer1);
  const layer2 = createElem('div', styles.headerAnimation__layer2);
  const layer3 = createElem('div', styles.headerAnimation__layer3);

  if (viewType === ViewType.CHILD) {
    wrapper.append(layer1, layer2, layer3);
  }

  return wrapper;
};
