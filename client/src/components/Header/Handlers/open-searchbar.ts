import { renderOverlay } from 'src/components/Overlay/Overlay';
import { removeOverlay } from 'src/utils/remove-overlay';
import { renderSearchBox } from '../components/SearchBar/components/SearchBox/SearchBox';
import { toggleSearchBar } from './toggle-search-bar';

export const openSearchbar = async () => {
  toggleSearchBar();
  const app = document.getElementById('app') as HTMLElement;
  const overlay = renderOverlay(() => {
    toggleSearchBar();
    removeOverlay('search-overlay');
  }, 'search-overlay');
  app.append(overlay);
  const searchBoxCont = document.getElementById('search-box') as HTMLElement;
  searchBoxCont.innerHTML = '';
  const searchBox = await renderSearchBox(null);
  searchBoxCont.append(searchBox);
};
