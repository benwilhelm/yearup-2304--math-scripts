// gather inputs
var loanAmount = document.getElementById('loanAmount').value;
var interestRate = document.getElementById('interestRate').value;
var term = document.getElementById('term').value;

// calculations
var monthlyPayment; /* = calculate monthly payment */
var lifetimeCost; /* = calculate lifetime cost */

// write output
document.getElementById('monthlyPayment').innerHTML = monthlyPayment;
document.getElementById('lifetimeCost').innerHTML = lifetimeCost;
