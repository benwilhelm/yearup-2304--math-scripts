var currentHour = 21;
var greeting;

if (currentHour < 10) {
  greeting = 'Good Morning';
} else if (currentHour < 17) {
  greeting = 'Good Day!';
} else {
  greeting = 'Good Evening!';
}

console.log(greeting);
