import {filters} from "./constants";

import {getMenu} from "./components/menu";
import {getFilters} from "./components/filters";
import {getSort} from "./components/sorting";
import {getCards} from "./components/card";
import {getCardEdit} from "./components/card-edit";
import {getSearch} from "./components/search";
import {getLoad} from "./components/load-more";
import {getMenuWrapper} from "./components/menu-wrapper";

const main = document.querySelector(`.main`);
const mainControl = document.querySelector(`.main__control`);

const getCardsAll = () => {
  return `
    <div class="board__tasks">
      ${getCards()}
      ${getCardEdit()}
    </div>
  `;
};

const getContent = () => {
  return ` 
    <section class="board container">
      ${getSort()} 
      ${getCardsAll()}
      ${getLoad()}
    </section>
  `;
};

mainControl.insertAdjacentHTML(`beforeend`, getMenuWrapper(getMenu()));
main.insertAdjacentHTML(`beforeend`, getSearch());
main.insertAdjacentHTML(`beforeend`, getFilters(filters));
main.insertAdjacentHTML(`beforeend`, getContent());
