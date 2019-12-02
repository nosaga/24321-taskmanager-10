export const getMenuWrapper = (menuItem) => {
  return `
    <section class="control__btn-wrap">
      ${menuItem(`new-task`, `+ADD NEW TASK`)}
      ${menuItem(`task`, `TASKS`)}
      ${menuItem(`statistics`, `STATISTICS`)}
    </section>
  `;
};
