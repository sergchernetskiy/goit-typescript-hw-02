/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
  Monday = "monday",
  Tuesday = "tuesday",
  Wednesday = "wednesday",
  Thursday = "thursday",
  Friday = "friday",
  Saturday = "saturday",
  Sunday = "sunday",
}

function isWeekend(day: Days): boolean {
  if (day === "saturday" || day === "sunday") {
    console.log(`${day} - Вихідний день`);
    return true;
  } else {
    console.log(`${day} - Робочий день`);
    return false;
  }
}
isWeekend(Days.Sunday);
