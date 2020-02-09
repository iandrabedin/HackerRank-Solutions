const input = [1, 12];

function processData(input) {
  let queue = [];

  switch (input[0]) {
    // Enqueue element x into the end of the queue
    case 1:
      queue.push(input[1]);
      break;
    // Dequeue the element at the front of the queue
    case 2:
      queue.shift();
      break;
    //  Print the element at the front of the queue
    case 3:
      console.log(queue[0]);
      break;
    default:
  }
  console.log(queue);
}

console.log(processData(input));
