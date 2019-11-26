export const getMenu = (caption, item) => {
  return `
    <input type="radio" name="control" id="control__new-task" class="control__input visually-hidden">
    <label for="control__${caption.toLowerCase()}" class="control__label control__label--${caption.toLowerCase()}">${item}</label>
  `;
};

