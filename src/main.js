import {RenderPosition, render, remove, replace} from './utils/render';

import {generateTasks} from './mock/task.js';
import {generateFilters} from './mock/filters';

import FilterComponent from './components/filters';
import BoardController from './controllers/board.js';
import SiteMenuComponent from './components/menu';
import SearchComponent from './components/search';
import BoardComponent from './components/board';

const TASK_COUNT = 22;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, new SiteMenuComponent(), RenderPosition.BEFOREEND);

const search = new SearchComponent();
render(siteMainElement, search, RenderPosition.BEFOREEND);

const filters = generateFilters();
render(siteMainElement, new FilterComponent(filters), RenderPosition.BEFOREEND);


const boardComponent = new BoardComponent();
render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);

const tasks = generateTasks(TASK_COUNT);
const boardController = new BoardController(boardComponent);
boardController.render(tasks);
