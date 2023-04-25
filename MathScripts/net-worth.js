// gather inputs
var valueOfHouse = 100_000;
var bankBalance = 50_000;

var mortgage = 50_000;
var studentDebt = 10_000;

// perform calculation
var totalAssets = valueOfHouse + bankBalance;
var totalDebt = mortgage + studentDebt;
var netWorth = totalAssets - totalDebt;

// write output
console.log('Your net worth is', netWorth);
