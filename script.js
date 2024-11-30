
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



// while loop
let count = 1;

while (count <= 5) {
    console.log(`Count is: ${count}`);
    count++;
}

// do while loop
let increase = 1;

do {
    console.log(`Count is: ${increase}`);
    increase++;
} while (increase <= 5);


// break and continue

// break statement
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Breaking the loop at:", i);
        break; // Exits the loop when i equals 5
    }
    console.log(i);
}

// continue
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Skipping:", i);
        continue; // Skips the current iteration when i equals 5
    }
    console.log(i);
}

// iterable example
const myArray = [1, 2, 3];
for (const value of myArray) {
    console.log(value); 
}
