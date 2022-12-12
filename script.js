// for (let i = 1; i >= 9; i++) {
//   const numb + i = 1;
// }

let num1 = 0;
let num2 = 0;
let operation = [];
let turn = 0;
let operator = 1; // 1 add , 2 sub , 3 multi , 4 divi
let repeat = 0;

const test = [];
const numbs = document.querySelectorAll(`.numbBtn`);
const addition = document.querySelector(`#add`);
const resultbtn = document.querySelector(`#result`);
const resetbtn = document.querySelector(`#reset`);
const subtraBtn = document.querySelector(`#subtra`);
const multiBtn = document.querySelector(`#multi`);
// console.log(numbs.forEach((a) => test.push(a)));
// console.log(test[0]);

// const test1 = function () {
//   console.log(this.value);
// };
const value = function () {
  if (repeat === 1 && operator === 0) {
    num1 = 0;
    repeat = 0;
  }
  if (turn === 0) {
    num1 += this.value;
  } else {
    num2 += this.value;
  }
  //   operation[0] = { value: [].push(this.value) };
};
numbs.forEach((e) => e.addEventListener(`click`, value));
// test[0].addEventListener(`click`, test1);

const add = function () {
  if (!num2 == 0) {
    operate();
    operator = 1;
    turn = 1;
  }
  turn = 1;
  operator = 1;
};
const substr = function () {
  if (!num2 == 0) {
    operate();
    operator = 2;
    turn = 1;
  }
  turn = 1;
  operator = 2;
};

const multi = function () {
  if (!num2 == 0) {
    operate();
    operator = 3;
    turn = 1;
  }
  turn = 1;
  operator = 3;
};
const operate = function () {
  if (operator === 1) {
    let result = parseFloat(num1) + parseFloat(num2);
    console.log(result);
    num1 = result;
    num2 = 0;
    turn = 0;
    repeat = 1;
    operator = 0;
  } else if (operator === 2) {
    let result = parseFloat(num1) - parseFloat(num2);
    console.log(result);
    num1 = result;
    num2 = 0;
    turn = 0;
    repeat = 1;
    operator = 0;
  } else if (operator === 3) {
    let result = parseFloat(num1) * parseFloat(num2);
    console.log(result);
    num1 = result;
    num2 = 0;
    turn = 0;
    repeat = 1;
    operator = 0;
  } else if (operator === 4) {
    let result = parseFloat(num1) / parseFloat(num2);
    console.log(result);
    num1 = result;
    num2 = 0;
    turn = 0;
    repeat = 1;
    operator = 0;
  }
};

const clear = function () {
  num1 = 0;
  num2 = 0;
  turn = 0;
};
addition.addEventListener(`click`, add);
resultbtn.addEventListener(`click`, operate);
multiBtn.addEventListener(`click`, multi);
resetbtn.addEventListener(`click`, clear);
subtraBtn.addEventListener(`click`, substr);

// const test1 = [1, 2, 3];
// console.log(test1);
// console.log(parseFloat(test1.join("")) + 1);
// This is test for redisign  number input
