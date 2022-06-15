import { numbers } from '../numbers.js';

import { display } from '../lib/dom-io.js';

import { average } from './utils/average.js';

const findAverage = () => {
  debugger;

  // calculate the average of all saved numbers  (use your util function!)
  const sum = numbers.reduce((a, b) => a + b);

  // return Math.floor(sum / numbers.length);
  // display the average in the UI
  const average1 = Math.floor(sum / numbers.length);

  display('your-output', average1);
};
// !! fill in this blank with the correct DOM ID
document.getElementById('average-them').addEventListener('click', findAverage);
