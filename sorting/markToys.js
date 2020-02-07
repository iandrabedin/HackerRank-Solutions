/**
 *
 */

const prices = [1, 12, 5, 111, 200, 1000, 10];
const amount = 50;

function maximumToys(prices, k) {
  prices.sort((a, b) => a - b);
  let sum = 0;
  let counter = 0;

  for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
    if (sum < k) {
      counter++;
    }
  }

  return counter;
}

console.log(maximumToys(prices, amount));
