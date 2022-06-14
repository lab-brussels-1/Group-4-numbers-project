/**
 * Converts an array if items into a string list.
 *
 * @param {any} [arr=[]] - The items to list.
 * @returns {string} A formatted list of items.
 *
 * @example
 *
 * listItems([1, 2, 3]); //--> "* 1\n* 2\n* 3\n"
 *
 * @example
 *
 * listItems([2, 5, 0, -3]); //--> "* 2\n* 5\n* 0\n* -3\n"
 *
 */
export const listItems = (arr = []) => {
  let str1 = '';
  for (const i of arr) {
    str1 += `# ${i}\n`;
  }
  return str1;
};
