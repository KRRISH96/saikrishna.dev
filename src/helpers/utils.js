import { HOUR_FROM_TIME_OF_DAY } from "./constants";
export function getCurrentHours() {
  return new Date().getHours();
}
export function isDayTime() {
  const hourOfTheDay = getCurrentHours();
  // 7am to 6:59pm
  return (
    hourOfTheDay > HOUR_FROM_TIME_OF_DAY.morning &&
    hourOfTheDay < HOUR_FROM_TIME_OF_DAY.night
  );
}

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

export function isWindowAvailable() {
  return typeof window !== "undefined";
}
