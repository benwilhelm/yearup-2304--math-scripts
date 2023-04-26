var payRate = 25;
var hoursWorked = 45;
var filingStatus = 'single';

// ------

var overtimeThreshold = 40;

// var grossPay = payRate * hoursWorked;
var overtimeHours = hoursWorked - overtimeThreshold;
var overtimeRate = payRate * 1.5;

var grossWeeklyPay;
if (hoursWorked <= overtimeThreshold) {
  grossWeeklyPay = hoursWorked * overtimeThreshold;
} else {
  var basePay = payRate * overtimeThreshold;
  var overtimePay = overtimeHours * overtimeRate;
  grossWeeklyPay = basePay + overtimePay;
}

// grossWeeklyPay
var grossAnnualPay = grossWeeklyPay * 52;
var taxRate;
if (filingStatus == 'single') {
  if (grossAnnualPay < 12000) {
    taxRate = 0.05;
  } else if (grossAnnualPay < 25000) {
    taxRate = 0.1;
  } else if (grossAnnualPay < 75000) {
    taxRate = 0.15;
  } else {
    taxRate = 0.2;
  }
} else if (filingStatus == 'joint') {
  if (grossAnnualPay < 12000) {
    taxRate = 0;
  } else if (grossAnnualPay < 25000) {
    taxRate = 0.06;
  } else if (grossAnnualPay < 75000) {
    taxRate = 0.11;
  } else {
    taxRate = 0.2;
  }
} else {
  console.log('unknown filing status', filingStatus);
}

var weeklyTaxWithheld = grossWeeklyPay * taxRate;
var netWeeklyPay = grossWeeklyPay - weeklyTaxWithheld;

console.log(`You worked ${hoursWorked} hours this period`);
console.log(
  `Because you earn ${payRate} per hour, your gross pay is $ ${grossWeeklyPay.toFixed(2)}`
);
console.log(`Your filing status is ${filingStatus}`);
console.log(`Your tax withholding this period is $ ${weeklyTaxWithheld.toFixed(2)}`);
console.log(`Your net pay is $ ${netWeeklyPay.toFixed(2)}`);
