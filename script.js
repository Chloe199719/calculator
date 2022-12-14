// variables
let num1 = [];
let num2 = [];
let operation = [];
let turn = 0;
let operator = 1; // 1 add , 2 sub , 3 multi , 4 divi
let repeat = 0;
// Dom selectors
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

// Numbers variable
const value = function () {
  if (repeat === 1 && operator === 0) {
    num1 = [];
    repeat = 0;
    operation = [];
    historyvisor.textContent = 0;
  }
  if (num1.includes(`.`) && this.value === "." && turn === 0) return;
  if (num2.includes(`.`) && this.value === ".") return;
  if (turn === 0) {
    num1.push(this.value);
    visor.textContent = num1.join("");
    operation.push(this.value);
  } else {
    num2.push(this.value);
    visor.textContent = num2.join("");
    operation.push(this.value);
  }
};

// Event for Numbers
numbs.forEach((e) => e.addEventListener(`click`, value));

// addition
const add = function () {
  if (!num2.length == 0) {
    operate();
    operator = 1;
    turn = 1;
  }
  turn = 1;
  operator = 1;
  operation.push(" + ");
  historyvisor.textContent = operation.join("");
};

// Substraction , also - Sign
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
  historyvisor.textContent = operation.join("");
};

// Multiply
const multi = function () {
  if (!num2.length == 0) {
    operate();
    operator = 3;
    turn = 1;
  }
  turn = 1;
  operator = 3;
  operation.push(" x ");
  historyvisor.textContent = operation.join("");
};

// Division
const divison = function () {
  if (!num2.length == 0) {
    operate();
    operator = 4;
    turn = 1;
  }
  turn = 1;
  operator = 4;
  operation.push(" / ");
  historyvisor.textContent = operation.join("");
};

// Operation

const operate = function (e) {
  if (e !== undefined) {
    historyvisor.textContent = operation.join("");
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
// Clear Button Function
const clear = function () {
  num1 = [];
  num2 = [];
  turn = 0;
  visor.textContent = 0;
  historyvisor.textContent = 0;
  operation = [];
};

// Delete last digit
const del = function () {
  if (turn === 0) {
    num1.pop();
    visor.textContent = num1.join("");
  } else {
    num2.pop();
    visor.textContent = num2.join("");
  }
};
// Events for operation buttons
addition.addEventListener(`click`, add);
resultbtn.addEventListener(`click`, operate);
multiBtn.addEventListener(`click`, multi);
resetbtn.addEventListener(`click`, clear);
subtraBtn.addEventListener(`click`, substr);
divisonBtn.addEventListener(`click`, divison);
delbtn.addEventListener(`click`, del);

// Year Footer
const yeartxt = document.querySelector(`#year`);
const now = new Date();
const yearNow = now.getFullYear();

yeartxt.textContent = yearNow;
