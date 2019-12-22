const getRandom = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  const interval = date.getHours() > 11 ? `pm` : `am`;

  return `${hours}:${minutes} ${interval}`;
};

const getExpiredStatus = (date) => date instanceof Date && date < Date.now();

export {
  getRandom,
  castTimeFormat,
  formatTime,
  getExpiredStatus
};
