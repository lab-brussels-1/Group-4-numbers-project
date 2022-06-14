import { numbers } from '../numbers.js';

import { readNumber, display } from '../lib/dom-io.js';

import { listItems } from './utils/list-items.js';

const removeNumber = () => {
  // read the user's number
  const number1 = readNumber('the-num');

  // remove the user's number from the array
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === number1) {
      numbers.splice(i, 1);
      --i;
    }
  }

  // display the new list of numbers (use the util function!)
  display('your-output', listItems(numbers));
};

// !! fill in this blank with the correct DOM ID
document.getElementById('remove-it').addEventListener('click', removeNumber);
