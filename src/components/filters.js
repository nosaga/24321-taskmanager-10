import AbstractComponent from './abstract-component.js';

const createFilterMarkup = (filter, isChecked) => {
  const {name, count} = filter;
  return `
    <input type="radio" 
        id="filter__${name.toLowerCase()}" 
        class="filter__input visually-hidden" name="filter" 
        ${isChecked ? `checked` : ``}
      >
      <label for="filter__${name.toLowerCase()} 
        class="filter__label">${name.toUpperCase()}
        <span class="filter__all-count">${count}
        </span>
      </label>

   
  `;
};

const createFilterTemplate = (filters) => {
  const filtersMarkup = filters.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);

  return (
    `<section class="main__filter filter container">
      ${filtersMarkup}
    </section>`
  );
};


export default class Filter extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }
}
