/**
 * It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! 
 * There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. 
 * Initial positions increment by 1 from 1 at the front of the line to n at the back.
 * Any person in the queue can bribe the person directly in front of them to swap positions. 
 * If two people swap positions, they still wear the same sticker denoting their original places in line. 
 * One person can bribe at most two others. For example, if n = 8 and Person 5 bribes Person 4, the queue will look like this: 1,2,3,5,4,7,8.
 * Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!
 */

const queue = [2, 1, 5, 3, 4];

const original = [0, 1, 2, 3, 4];
const queueIndex = [1, 0, 4, 2, 3];
const impossible = [0, 4, 1, 2, 3];

function minimumBribes(q) {
  let moves = 0
  let i = 0;
  let j = 0;
  // For better understading, change the person number to be the same as array index
  const queue = q.map(person => person - 1);

  for (i; i < queue.length; i++) {
    if (queue[i] > i + 2) {
      return "Too chaotic";
    } else {
      for (j; j < i; j++) {
        if (queue[j] > queue[i]) {
          moves++;
        }
      }
    }
  }
  return moves;
}



// function minimumBribes(q) {
//   let counter = 0;
//   // On the original queue, the person's sticker is the same number as index + 1.
//   q.map((sticker, index) => {
//     let position = index + 1;
//     if (sticker !== position) {
//       const briber = q.splice(index, 1)[0];
//       q.splice(position, 0, briber);
//       counter++;
//     }
//   })
//   return counter;
// }


console.log(minimumBribes(queue))
// document.getElementById('answer').innerHTML = minimumBribes(queue);