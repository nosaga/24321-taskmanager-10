export const getFilters = (filters) => {
  return `
    <section class="main__filter filter container">
      ${filters.map((filter) => {
    return `
        <input type="radio" id="filter__${filter.name.toLowerCase()}" class="filter__input visually-hidden" name="filter" checked="">
        <label for="filter__${filter.name.toLowerCase()}}" class="filter__label">${filter.name} <span class="filter__all-count">${filter.num}</span></label>
      `;
  }).join(``)};
    <section>
  `;
};
