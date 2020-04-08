import { daysInPeriod } from "../constants";
const msInDay = 24 * 60 * 60 * 1000;

function randomNumber(min, max) {
  return (min - 0.5 + Math.random() * (max - min + 1)).toFixed(2);
}

let cache = {};

function* generateRandomData(period, step) {
  const date = Date.now();
  let pastDate = date - period * step;
  while (pastDate < date) {
    yield {
      date: new Date(pastDate).toISOString(),
      yield: randomNumber(10, 30),
      spread: randomNumber(120, 140),
      price: randomNumber(30, 50),
    };
    pastDate += step;
  }
}

export const getRandomData = (id, period, step = msInDay) => {
  if (cache[id] && cache[id][period]) {
    return cache[id][period];
  }
  const periodInDays = daysInPeriod[period];
  const data = Array.from(generateRandomData(periodInDays, step));
  cache[id] = { ...cache[id], [period]: data };
  return data;
};
