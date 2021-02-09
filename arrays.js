"use strict";

document.addEventListener("DOMContentLoaded", init);

let counter = 0;
const arr = [];

function init() {
  arr.unshift(counter);
  console.log(arr);
  counter++;
  if (arr.length > 8) {
    arr.pop();
  }
  if (counter < 100) {
    setTimeout(init, 1000);
  }
}
