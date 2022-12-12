// for (let i = 1; i >= 9; i++) {
//   const numb + i = 1;
// }
// let num1 = 0;
// let num2 = 0;
let num1 = [];
let num2 = [];
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
const divisonBtn = document.querySelector(`#divison`);
const visor = document.querySelector(`.visor`);
const delbtn = document.querySelector(`#del`);
const historyvisor = document.querySelector(`.history`);
// console.log(numbs.forEach((a) => test.push(a)));
// console.log(test[0]);

// const test1 = function () {
//   console.log(this.value);
// };
const value = function () {
  if (operator === 0) {
    num1 = [];
    repeat = 0;
  }
  //   if (turn === 0) {
  //     num1 += this.value;
  //   } else {
  //     num2 += this.value;
  //   }
  if (num1.includes(`.`) && this.value === ".") return;
  if (num2.includes(`.`) && this.value === ".") return;
  if (turn === 0) {
    num1.push(this.value);
    visor.textContent = num1.join("");
    operation.push(num1.join(""));
  } else {
    num2.push(this.value);
    visor.textContent = num2.join("");
    operation.push(num1.join(""));
  }
  //   operation[0] = { value: [].push(this.value) };
};
numbs.forEach((e) => e.addEventListener(`click`, value));
// test[0].addEventListener(`click`, test1);

const add = function () {
  if (!num2.length == 0) {
    operate();
    operator = 1;
    turn = 1;
  }
  turn = 1;
  operator = 1;
  operation.push(" + ");
  historyvisor.textContent = operation.join(" ");
};
const substr = function () {
  if (num1.length === 0 && turn === 0) {
    num1.push("-");
    return;
  }
  if (num2.length === 0 && turn === 1) {
    num2.push("-");
    return;
  }
  if (!num2.length == 0) {
    operate();
    operator = 2;
    turn = 1;
  }
  turn = 1;
  operator = 2;
  operation.push(" - ");
  historyvisor.textContent = operation.join(" ");
};

const multi = function () {
  if (!num2.length == 0) {
    operate();
    operator = 3;
    turn = 1;
  }
  turn = 1;
  operator = 3;
  operation.push(" x ");
  historyvisor.textContent = operation.join(" ");
};
const divison = function () {
  if (!num2.length == 0) {
    operate();
    operator = 4;
    turn = 1;
  }
  turn = 1;
  operator = 4;
  operation.push(" / ");
  historyvisor.textContent = operation.join(" ");
};
const operate = function (e) {
  if (e !== undefined) {
    historyvisor.textContent = operation.join(" ");
  }
  if (operator === 1) {
    let result = parseFloat(num1.join("")) + parseFloat(num2.join(""));
    visor.textContent = result;
    num1 = result.toString().split();
    num2 = [];
    turn = 0;
    repeat = 1;
    operator = 0;
  } else if (operator === 2) {
    let result = parseFloat(num1.join("")) - parseFloat(num2.join(""));
    visor.textContent = result;
    num1 = result.toString().split();
    num2 = [];
    turn = 0;
    repeat = 1;
    operator = 0;
  } else if (operator === 3) {
    let result = parseFloat(num1.join("")) * parseFloat(num2.join(""));
    visor.textContent = result;
    num1 = result.toString().split();
    num2 = [];
    turn = 0;
    repeat = 1;
    operator = 0;
  } else if (operator === 4) {
    if (parseFloat(num1.join("")) === 0 || parseFloat(num2.join("")) === 0) {
      visor.textContent = "ERROR";
      num1 = [];
      num2 = [];
      turn = 0;
      operator = 0;
      return;
    }
    let result = parseFloat(num1.join("")) / parseFloat(num2.join(""));
    visor.textContent = result;
    num1 = result.toString().split();
    num2 = [];
    turn = 0;
    repeat = 1;
    operator = 0;
  }
};

const clear = function () {
  num1 = [];
  num2 = [];
  turn = 0;
  visor.textContent = 0;
};

const del = function () {
  if (turn === 0) {
    num1.pop();
    visor.textContent = num1.join("");
  } else {
    num2.pop();
    visor.textContent = num2.join("");
  }
};

addition.addEventListener(`click`, add);
resultbtn.addEventListener(`click`, operate);
multiBtn.addEventListener(`click`, multi);
resetbtn.addEventListener(`click`, clear);
subtraBtn.addEventListener(`click`, substr);
divisonBtn.addEventListener(`click`, divison);
delbtn.addEventListener(`click`, del);

const test1 = [1, 2, 3];
console.log(test1);
console.log(parseFloat(test1.join("")));
// This is test for redisign  number input
