const getRandom = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};


import moment from 'moment';

const formatTime = (date) => {
  return moment(date).format(`hh:mm A`);
};

const formatDate = (date) => {
  return moment(date).format(`DD MMMM`);
};

const getExpiredStatus = (date) => date instanceof Date && date < Date.now();

export {
  getRandom,
  castTimeFormat,
  formatTime,
  formatDate,
  getExpiredStatus
};
