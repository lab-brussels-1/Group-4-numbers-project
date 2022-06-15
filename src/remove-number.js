import { numbers } from '../numbers.js';

import { readNumber, display } from '../lib/dom-io.js';

// import { listItems } from './utils/list-items.js';

const removeNumber = () => {
  debugger;

  // read the user's number
  const newNumber = readNumber('the-num');

  // remove the user's number from the array
  numbers.pop(newNumber);

  // display the new list of numbers (use the util function!)
  let numbersList = '';
  for (const num of numbers) {
    if (num !== newNumber) {
      numbersList += `# ${num}\n`;
    }
  }
  display('your-output', numbersList);
};

// !! fill in this blank with the correct DOM ID
document.getElementById('remove-it').addEventListener('click', removeNumber);
