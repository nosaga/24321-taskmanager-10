import {getRandom} from "./utils";

const filters = [
  {name: `All`, num: getRandom(0, 30)},
  {name: `Overdue`, num: getRandom(0, 30)},
  {name: `Today`, num: getRandom(0, 30)},
  {name: `Favourites`, num: getRandom(0, 30)},
  {name: `Repeating`, num: getRandom(0, 30)},
  {name: `Tags`, num: getRandom(0, 30)},
  {name: `Archive`, num: getRandom(0, 30)}
];

export {filters};
