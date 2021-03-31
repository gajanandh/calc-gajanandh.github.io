const numberButtons = document.querySelectorAll(".numButton");
const screen = document.querySelector(".screen")
const operator = document.querySelectorAll(".operatorButton")
const equal = document.querySelector(".equalbtn")
const clear = document.querySelector(".clear")
const deletebtn = document.querySelector(".delete")
const pointButton = document.querySelector(".pointbutton")
const signbtn = document.querySelector(".sign")

window.addEventListener("keydown", setkey);
function setkey(e) {
  if (e.key >= 0 && e.key <= 9) addnumscree(e.key);
  if (e.key == "+") addoperator(e.key);
  if (e.key == "-") {
    if (screen.textContent == "") changeign();
    else addoperator(e.key);
  }
  if (e.key == "*") addoperator("x");
  if (e.key == "/") addoperator("÷");
  if (e.key == "=" || e.key == "Enter") temp();
  if (e.key == "Backspace") backspcae();
  if (e.key == "Delete") clearbutton();
}
signbtn.addEventListener("click", changeign);
function changeign() {
  if (screen.textContent == "")
    screen.textContent = ("-" + screen.textContent);
}
clear.addEventListener("click", clearbutton)
function clearbutton() {
  firstoperand = "";
  secondoperand = "";
  currentOperation = "";
  screen.textContent = "";
}
deletebtn.addEventListener("click", backspcae)
function backspcae() {
  screen.textContent = screen.textContent.toString().slice(0, -1);
}
pointButton.addEventListener("click", () => {
  screen.textContent = screen.textContent + "."
})

numberButtons.forEach((button) =>
  button.addEventListener("click", () => addnumscree(button.textContent)));

operator.forEach((button) =>
  button.addEventListener("click", () => addoperator(button.textContent)));
let firstoperand = "";
let secondoperand = "";
let currentOperation = ""
let reset = false

function addnumscree(num) {
  screen.textContent += num
}
function addoperator(opertor) {
  currentOperation = opertor
  firstoperand = screen.textContent
  reset = true
  clearscreen(reset)
}
function clearscreen(reset) {
  if (reset = true)
    screen.textContent = "";
}
equal.addEventListener("click", temp);
function temp() {
  secondoperand = screen.textContent;
  clearscreen(true)
  screen.textContent = solve(firstoperand, currentOperation, secondoperand)
}
function solve(a, operator1, b) {
  a = Number(a);
  b = Number(b);
  switch (operator1) {
    case "+":
      return (a + b);
    case "-":
      return (a - b);
    case "x":
      return (a * b);
    case "÷":
      if (b === 0) return ("cant divide by 0");
      else return (a / b);
    default:
      return null;
  }
}