//Source chatGPT

export function getTimeDifferenceInMinutes(timeString1, timeString2) {
  // Parse time strings into hours, minutes, and seconds
  const [hours1, minutes1, seconds1] = timeString1.split(":").map(Number);
  const [hours2, minutes2, seconds2] = timeString2.split(":").map(Number);

  // Calculate total seconds from midnight for each time
  const totalSeconds1 = hours1 * 3600 + minutes1 * 60 + seconds1;
  const totalSeconds2 = hours2 * 3600 + minutes2 * 60 + seconds2;

  // Calculate the difference in seconds
  const differenceSeconds = totalSeconds1 - totalSeconds2;

  // Convert difference to minutes
  const differenceMinutes = Math.floor(differenceSeconds / 60);

  return differenceMinutes;
}
