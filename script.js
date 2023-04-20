//VARIABLES
var inputField = document.getElementById("calc-display");


//FUNCTIONS
function InsertNum(num) {
  inputField.textContent += num;
}

function ClearInput() {
  inputField.textContent = "";
}

function EraseNum() {
  let expressionLength = inputField.textContent.length;
  let newExpression = inputField.textContent.substring(0,expressionLength-1)
  inputField.textContent = newExpression;
}

function EqualTo() {
  let mathproblem = new MathProblem();
  let exp = mathproblem.InfixtoPostfix();
  let result = mathproblem.RPNEvaluator(exp)
  inputField.textContent = result;
}