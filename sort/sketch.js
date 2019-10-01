let array = Array(64);
let bubbleDelayAmount = 17;
let selectionDelayAmount = 17;
let insertionDelayAmount = 17;
let running;
let sortMethod;
let interval;

//FOR BUBBLE SORT
let amountSorted;
let index;

//FOR SELECTION SORT
let selectionIndex;
let smallestIndex;
let smallestNumber;
let selectionSorted;

//FOR INSERTION SORT
let currIndex;
let amountOrdered;

function setup() {
  createCanvas(960, 550);
  background(color(255));

  reset();

  interval = setInterval(drawIt, 0);
  for (let i = 0; i < array.length; i++) {
    array[i] = floor(random(50)) + 1;
  }
  sel = createSelect();
  sel.option('Bubble Sort');
  sel.option('Selection Sort');
  sel.option('Insertion Sort');
  mix = createButton('Mix/Reset');
  mix.mousePressed(mixArray);
  start = createButton('Start');
  start.mousePressed(startSort);
}

function drawIt() {
  clear();
  background(color(255));
  for (let i = 0; i < array.length; i++) {
    let rectColor = color(0, 0, 255 - array[i] * 5 + 10);
    noStroke();
    fill(rectColor);
    rect(i * 15, 0, 15, array[i] * 10);
  }
  if (running) {
    if (sortMethod == 'Bubble Sort') {
      bubbleSort();
      index++;
      if (array.length - amountSorted - 1 == index) {
        amountSorted++;
        index = 0;
      }
    } else if (sortMethod == 'Selection Sort') {
      selectionSort();
      selectionIndex++;
      if (selectionIndex == array.length) {
        selectionSwap();
        selectionSorted++;
        selectionIndex = selectionSorted;
        smallestIndex = selectionIndex;
        smallestNumber = 9999;
      }
    } else if (sortMethod == 'Insertion Sort') {
      insertionSort();
      currIndex--;
      if (
        currIndex == 0 ||
        (array[currIndex] >= array[currIndex - 1] &&
          array[currIndex] <= array[currIndex + 1])
      ) {
        amountOrdered++;
        currIndex = amountOrdered;
      }
    }
  }
}

function bubbleSort() {
  if (amountSorted + 1 >= array.length) {
    running = false;
    return;
  }

  let rectColor = color(255, 0, 0);
  noStroke();
  fill(rectColor);
  rect(index * 15, 0, 15, array[index] * 10);
  rect((index + 1) * 15, 0, 15, array[index + 1] * 10);

  let temp = array[index + 1];
  if (temp < array[index]) {
    array[index + 1] = array[index];
    array[index] = temp;
  }
}

function selectionSort() {
  if (selectionSorted >= array.length - 1) {
    running = false;
    return;
  }

  if (array[selectionIndex] < smallestNumber) {
    smallestNumber = array[selectionIndex];
    smallestIndex = selectionIndex;
  }

  let rectColor = color(255, 0, 0);
  noStroke();
  fill(rectColor);
  rect(selectionIndex * 15, 0, 15, array[selectionIndex] * 10);
  rect(smallestIndex * 15, 0, 15, array[smallestIndex] * 10);
}

function selectionSwap() {
  let rectColor = color(255, 0, 0);
  noStroke();
  fill(rectColor);
  rect(selectionSorted * 15, 0, 15, array[selectionSorted] * 10);
  rect(smallestIndex * 15, 0, 15, array[smallestIndex] * 10);

  let temp = array[selectionSorted];
  array[selectionSorted] = array[smallestIndex];
  array[smallestIndex] = temp;
}

function insertionSort() {
  if (amountOrdered >= array.length) {
    running = false;
    return;
  }

  let rectColor = color(255, 0, 0);
  noStroke();
  fill(rectColor);
  rect(currIndex * 15, 0, 15, array[currIndex] * 10);
  rect((currIndex - 1) * 15, 0, 15, array[currIndex - 1] * 10);

  let temp = array[currIndex - 1];
  if (temp > array[currIndex]) {
    array[currIndex - 1] = array[currIndex];
    array[currIndex] = temp;
  }
}

function startSort() {
  if (running == false) {
    reset();
    clearInterval(interval);
    running = true;
    sortMethod = sel.value();
    if (sortMethod == 'Bubble Sort') {
      interval = setInterval(drawIt, bubbleDelayAmount);
    } else if (sortMethod == 'Selection Sort') {
      interval = setInterval(drawIt, selectionDelayAmount);
    } else if (sortMethod == 'Insertion Sort') {
      interval = setInterval(drawIt, insertionDelayAmount);
    }
  }
}

function mixArray() {
  reset();
  for (let i = 0; i < array.length; i++) {
    array[i] = floor(random(50)) + 1;
  }
}

function reset() {
  amountSorted = 0;
  index = 0;

  selectionSorted = 0;
  selectionIndex = 0;
  smallestIndex = 0;
  smallestNumber = 9999;

  currIndex = 1;
  amountOrdered = 1;

  running = false;
}
