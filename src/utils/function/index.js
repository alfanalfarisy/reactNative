export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export function removeDuplicates(array) {
  return array.filter((a, b) => array.indexOf(a) === b);
}
