import { numbers } from '../numbers.js';

import { display } from '../lib/dom-io.js';

// import { average } from './utils/average.js';

const findAverage = () => {
  // calculate the average of all saved numbers  (use your util function!)
  let sum = 0;
  for (let i of numbers) {
    sum += i;
  }
  const avg = sum / numbers.length;
  // display the average in the UI
  display('your-output', 'average: ' + avg);
};

// !! fill in this blank with the correct DOM ID
document.getElementById('average-them').addEventListener('click', findAverage);
