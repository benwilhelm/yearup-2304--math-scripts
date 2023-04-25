// gather inputs
var interestRate = 5;
var principal = 500;

// perform calculation
var yearsToDouble = 72 / interestRate;
var doubleAmount = principal * 2;

// print output
console.log(
  `at ${interestRate}% interest rate, your savings account will be worth $${doubleAmount.toFixed(
    2
  )} in ${yearsToDouble} years`
);
