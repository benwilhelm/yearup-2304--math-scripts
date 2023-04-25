// cost of food
var billTotal = 100;

// eg. 15%
var tipPercentage = 15;
var tipPctAsDecimal = tipPercentage / 100;

// perform calculation
var tipAmount = billTotal * tipPctAsDecimal;

// print output
console.log(`A ${tipPercentage}% tip on a $${billTotal} bill is $${tipAmount}`);
