// import { getSlider } from 'src/api/back/sliders';
// import { MAIN_SLIDERS } from 'src/const/main-page-data';
import { renderApp } from '../components/App/App';
import { renderMainPage } from '../components/MainPage/MainPage';

export const app = async (): Promise<void> => {
  // const promises = Promise.all(
  //   MAIN_SLIDERS.map(async (el) => {
  //     const data = await getSlider({ id: el, page: 1, limit: 10 });
  //     return {
  //       title: el,
  //       data,
  //     };
  //   })
  // );

  // const data = await promises;
  renderApp(() => renderMainPage());
};
