import {RenderPosition, render} from './utils';

import {generateTasks} from './mock/task.js';
import {generateFilters} from './mock/filters';

import FilterComponent from './components/filters';
import LoadMoreButtonComponent from './components/load-more';
import TaskEditComponent from './components/task-edit';
import TaskComponent from './components/task';
import TasksComponent from './components/tasks';
import SiteMenuComponent from './components/menu';
import SearchComponent from './components/search';
import BoardComponent from './components/board';
import SortComponent from './components/sorting';
import NoTasksComponent from './components/no-tasks';

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const renderTask = (taskListElement, task) => {
  const taskComponent = new TaskComponent(task);
  const taskEditComponent = new TaskEditComponent(task);

  const replaceEditToTask = () => {
    taskListElement.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
  };

  const replaceTaskToEdit = () => {
    taskListElement.replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
  };

  const onEscKeyDown = (evt) => {
    const isEscKey = evt.code === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      replaceEditToTask();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  const editButtonElement = taskComponent.getElement().querySelector(`.card__btn--edit`);
  editButtonElement.addEventListener(`click`, () => {
    replaceTaskToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  const editFormElement = taskEditComponent.getElement().querySelector(`form`);
  editFormElement.addEventListener(`submit`, replaceEditToTask);
  render(taskListElement, taskComponent.getElement(), RenderPosition.BEFOREEND);
};


render(siteHeaderElement, new SiteMenuComponent().getElement(), RenderPosition.BEFOREEND);

const search = new SearchComponent();
render(siteMainElement, search.getElement(), RenderPosition.BEFOREEND);

const filters = generateFilters();
render(siteMainElement, new FilterComponent(filters).getElement(), RenderPosition.BEFOREEND);

const boardComponent = new BoardComponent();
render(siteMainElement, boardComponent.getElement(), RenderPosition.BEFOREEND);

const tasks = generateTasks(TASK_COUNT);
const isAllTasksArchived = tasks.every((task) => task.isArchive);

if (isAllTasksArchived) {
  render(boardComponent.getElement(), new NoTasksComponent().getElement(), RenderPosition.BEFOREEND);
} else {
  render(boardComponent.getElement(), new SortComponent().getElement(), RenderPosition.BEFOREEND);
  render(boardComponent.getElement(), new TasksComponent().getElement(), RenderPosition.BEFOREEND);

  const taskListElement = boardComponent.getElement().querySelector(`.board__tasks`);

  let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
  tasks.slice(0, showingTasksCount)
    .forEach((task) => {
      renderTask(taskListElement, task);
    });

  const loadMoreButtonComponent = new LoadMoreButtonComponent();
  render(boardComponent.getElement(), loadMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);

  loadMoreButtonComponent.getElement().addEventListener(`click`, () => {
    const prevTasksCount = showingTasksCount;
    showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

    tasks.slice(prevTasksCount, showingTasksCount)
      .forEach((task) => renderTask(taskListElement, task));

    if (showingTasksCount >= tasks.length) {
      loadMoreButtonComponent.getElement().remove();
      loadMoreButtonComponent.removeElement();
    }
  });
}

