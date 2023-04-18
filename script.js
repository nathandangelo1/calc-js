//VARIABLES
var inputField = document.getElementById("calc-display");

//FUNCTIONS
function InsertNum(num){
  inputField.textContent += num;
}

function ClearInput() {
  inputField.textContent = "";
}

function EraseNum() {
  var expressionLength = inputField.textContent.length;
  var newExpression = inputField.textContent.substring(0,expressionLength-1)
  inputField.textContent = newExpression;
}

function EqualTo() {
  var expression = inputField.textContent;
  var result = eval(inputField.textContent);
  inputField.textContent = result;
}