import { numbers } from '../numbers.js';

import { display } from '../lib/dom-io.js';

// import { sum } from './utils/sum.js';

const findSum = () => {
  // add together all the saved numbers (use your util function!)
  let sum = 0;
  for (const i of numbers) {
    sum += i;
  }
  // display the sum of all numbers in the DOM
  display('your-output', 'sum: ' + sum);
};

// !! fill in this blank with the correct DOM ID
document.getElementById('sum-them').addEventListener('click', findSum);
