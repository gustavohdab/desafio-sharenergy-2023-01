/**
 * This function takes a function as an argument, and calls it with a random number between two
 * numbers.
 * @param setStatusCode - (statusCode: number) => void
 * @param {number} min - The minimum number you want to generate
 * @param {number} max - number - The maximum number of the range
 */
export const setRandomStatusCode = (
  setStatusCode: (statusCode: number) => void,
  min: number,
  max: number
) => {
  const randomStatusCode = Math.floor(Math.random() * (max - min + 1)) + min;
  setStatusCode(randomStatusCode);
};
