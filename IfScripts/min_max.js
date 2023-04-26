var a = 234987;
var b = 23289;
var c = 90909239;

var min;
if (a <= b && a <= c) {
  min = a;
} else if (b <= a && b <= c) {
  min = b;
} else {
  min = c;
}
console.log(`The min of ${a}, ${b}, ${c} is ${min}`);

var max;
if (a >= b && a >= c) {
  max = a;
} else if (b >= a && b >= c) {
  max = b;
} else {
  max = c;
}
console.log(`The max of ${a}, ${b}, ${c} is ${max}`);
