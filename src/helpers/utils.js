import { HOUR_FROM_TIME_OF_DAY } from "./constants";
/**
 * @returns {Number} current hour of the day
 */
export function getCurrentHours() {
  return new Date().getHours();
}
/**
 * @returns {Boolean} if the current time is day or not from pre defined hours range
 */
export function isDayTime() {
  const hourOfTheDay = getCurrentHours();
  // 7am to 6:59pm
  return (
    hourOfTheDay > HOUR_FROM_TIME_OF_DAY.morning &&
    hourOfTheDay < HOUR_FROM_TIME_OF_DAY.night
  );
}

/**
 * @returns {String} Greeting by hour of the day or Hello
 */
export function grretByTimeOfDay() {
  const hourOfTheDay = getCurrentHours();
  let greeting;
  switch (true) {
    // 12am to 11:59am
    case hourOfTheDay >= HOUR_FROM_TIME_OF_DAY.midNight &&
      hourOfTheDay < HOUR_FROM_TIME_OF_DAY.afternoon:
      greeting = "Good Morning";
      break;
    // 12pm to 4:59pm
    case hourOfTheDay >= HOUR_FROM_TIME_OF_DAY.afternoon &&
      hourOfTheDay < HOUR_FROM_TIME_OF_DAY.evening:
      greeting = "Good Afternoon";
      break;
    // 5pm to rest of day
    case hourOfTheDay >= HOUR_FROM_TIME_OF_DAY.evening:
      greeting = "Good Evening";
      break;
    default:
      greeting = "Hello";
      break;
  }
  return `${greeting},`;
}

/**
 * @returns {Boolean} check if window object is present or not
 */
export function isWindowAvailable() {
  return typeof window !== "undefined";
}
