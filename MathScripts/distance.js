// gather inputs
var x1 = 2;
var y1 = 4;

var x2 = 4;
var y2 = 6;

// calculate
// d = squareRoot of (distanceX squared + distanceY squared)
var distanceX = x2 - x1;
var distanceY = y2 - y1;
var distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

// print output
console.log(`The distance from (${x1}, ${y1}) to (${x2}, ${y2}) is ${distance}`);
