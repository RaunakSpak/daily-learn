
// if statement
if (new Date().getHours() < 18) {
    document.getElementById("demo").innerHTML += "1 Good day!" + "<br>";
}

// else statement
const hour = new Date().getHours();
let greeting;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
document.getElementById("demo").innerHTML += 2 + " " + greeting + "<br>";


//else if statement
const time = new Date().getHours();
let msg;
if (time < 10) {
    msg = "Good morning";
} else if (time < 20) {
    msg = "Good day";
} else {
    msg = "Good evening";
}
document.getElementById("demo").innerHTML += msg + "<br>";


// switch statement
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
document.getElementById("demo").innerHTML += "Today is " + day + "<br>";


// default statement
let text;
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}
document.getElementById("demo").innerHTML += text + "<br>";

// Loop Example
// for loop example
let a = "";

for (let i = 0; i < 5; i++) {
  a += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML += a;



