import {getRandom} from '../utils';

const filterNames = [`all`, `overdue`, `today`, `favourites`, `repeating`, `tags`, `archive`];

const generateFilters = () => {
  return filterNames.map((it) => {
    return {
      name: it,
      count: getRandom(0, 20)
    };
  });
};

export {generateFilters};
