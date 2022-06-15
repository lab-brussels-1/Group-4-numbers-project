import { numbers } from '../numbers.js';

import { display } from '../lib/dom-io.js';

import { sum } from './utils/sum.js';

const findSum = () => {
  debugger;

  // add together all the saved numbers (use your util function!)
  const sum1 = numbers.reduce((a, b) => a + b);
  // display the sum of all numbers in the DOM
  display('your-output', sum1);
};

// !! fill in this blank with the correct DOM ID
document.getElementById('sum-them').addEventListener('click', findSum);
