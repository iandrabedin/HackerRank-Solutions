/**
 *
 */

const arr = [6, 4, 1];

function countSwaps(a) {
  const n = a.length;
  let counter = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        counter++;
      }
    }
  }
  console.log(`Array is sorted in ${counter} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[n - 1]}`);
}

console.log(countSwaps(arr));
