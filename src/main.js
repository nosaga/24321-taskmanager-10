import {generateFilters} from "./mock/filters";

import {createBoardTemplate} from "./components/board";
import {createFilterTemplate} from "./components/filters";
import {getSort} from "./components/sorting";
import {getCard} from "./components/task";
import {getCardEdit} from "./components/card-edit";
import {getSearch} from "./components/search";
import {getLoad} from "./components/load-more";
import {createSiteMenuTemplate} from "./components/menu";
import {getMenuWrapper} from "./components/menu-wrapper";
import {generateTasks} from './mock/task.js';
import {createTaskTemplate} from "./components/task";


const TASK_COUNT = 22;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElementl = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElementl, createSiteMenuTemplate(), `beforeend`);

const filters = generateFilters();
render(siteMainElement, createFilterTemplate(filters), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const tasks = generateTasks(TASK_COUNT);
console.log(`tasks `, tasks);
tasks.slice(1).forEach((task) => render(taskListElement, createTaskTemplate(task), `beforeend`));
/*
render(siteMainElement, createBoardTemplate(), `beforeend`);

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const tasks = generateTasks(TASK_COUNT);
tasks.slice(1).forEach((task) => render(taskListElement, createTaskTemplate(task), `beforeend`));



const filters = generateFilters();
*/

