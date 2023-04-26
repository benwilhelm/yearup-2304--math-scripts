var payRate = 25;
var hoursWorked = 45;

var overtimeThreshold = 40;

// var grossPay = payRate * hoursWorked;
var overtimeHours = hoursWorked - overtimeThreshold;
var overtimeRate = payRate * 1.5;

if (hoursWorked <= overtimeThreshold) {
  console.log('gross pay is', payRate * hoursWorked);
} else {
  var overtimePay = overtimeHours * overtimeRate;
  console.log('overtime pay', overtimePay);
  var basePay = payRate * overtimeThreshold;
  console.log('gross pay is', basePay + overtimePay);
}

console.log('hours worked', hoursWorked);
console.log('overtime hours', overtimeHours);
console.log('base rate', payRate);
