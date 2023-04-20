
class MathProblem {
  // Created an empty array
  stackarr = [];

  // Variable topp initialized with -1
  topp = -1;

  // Push function for pushing
  // elements inside stack
  push = function(e) {
    this.topp++;
    this.stackarr[this.topp] = e;
  }

  // Pop function for returning top element
  pop = function() {
    if (this.topp == -1)
      return 0;
    else {
      var popped_ele = this.stackarr[this.topp];
      this.topp--;
      return popped_ele;
    }
  }

  // Function to check whether the passed
  // character is operator or not
  operator=function(op) {
    if (op == '+' || op == '-' ||
      op == '^' || op == '*' ||
      op == '/' || op == '(' ||
      op == ')') {
      return true;
    }
    else
      return false;
  }

  // Function to return the precedency of operator
  precedency=function(pre) {
    if (pre == '@' || pre == '(' || pre == ')') {
      return 1;
    }
    else if (pre == '+' || pre == '-') {
      return 2;
    }
    else if (pre == '/' || pre == '*') {
      return 3;
    }
    else if (pre == '^') {
      return 4;
    }
    else
      return 0;
  }

  // Function to convert Infix to Postfix
  InfixtoPostfix=function() {

    // Postfix array created
    var postfix = [];
    var temp = 0;
    this.push('@');
    let infixval = document.getElementById("calc-display").textContent;

    // Iterate on infix string
    for (var i = 0; i < infixval.length; i++) {
      var el = infixval[i];

      // Checking whether operator or not
      if (this.operator(el)) {
        if (el == ')') {
          while (this.stackarr[this.topp] != "(") {
            postfix[temp++] = this.pop();
          }
          this.pop();
        }

        // Checking whether el is (  or not
        else if (el == '(') {
          this.push(el);
        }

        // Comparing precedency of el and
        // stackarr[topp]
        else if (this.precedency(el) > this.precedency(this.stackarr[this.topp])) {
          this.push(el);
        }
        else {
          while (this.precedency(el) <=
            this.precedency(this.stackarr[this.topp]) && this.topp > -1) {
            postfix[temp++] = this.pop();
          }
          this.push(el);
        }
      }
      else {
        postfix[temp++] = el;
      }
    }

    // Adding character until stackarr[topp] is @
    while (this.stackarr[this.topp] != '@') {
      postfix[temp++] = this.pop();
    }

    // String to store postfix expression
    var st = "";
    for (var i = 0; i < postfix.length; i++)
      st += postfix[i];

    return st;
  }

  RPNEvaluator = (input) => {
    const stack = [];

    const handleToken = (token) => {
      if (!isNaN(parseFloat(token))) {
        stack.push(token);
        return;
      }

      const right = parseFloat(stack.pop());
      const left = parseFloat(stack.pop());

      switch (token) {
        case '+': // Addition
          stack.push(left + right);
          return;
        case '-': // Subtraction
          stack.push(left - right);
          return;
        case '*': // Multiplication
          stack.push(left * right);
          return;
        case '/': // Division
          stack.push(left / right);
          return;
        case '^': // Exponentiation
          stack.push(left ** right);
          return;
        default:
          throw new Error(`Invalid token: ${token}`);
      }
    };

    for (let i of input) {
      if (i === ' ') continue;

      handleToken(i);
    }

    return stack.pop();
  };

}


