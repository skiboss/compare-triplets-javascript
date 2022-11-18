// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function compareTriplets(a, b) {
  let result = [];
  let arr = 0;
  let brr = 0;
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      // for (let j = 0; j < b.length; j++) {
      console.log(a[i]);
      console.log(b[i]);
      if (a[i] > b[i]) {
        arr += 1;
      }
      if (b[i] > a[i]) {
        brr += 1;
      }
      // }
      // console.log(arr);
    }
    // console.log(arr);
    // console.log(brr);
  }

  result.push(arr);
  result.push(brr);
  return result;
}

console.log(compareTriplets([1, 2, 3, 9, 2, 3, 4], [4, 2, 1, 11, 1, 1, 1]));
