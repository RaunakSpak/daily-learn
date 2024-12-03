// create a map() in javascript
const fruits = new Map([
    ['Apple', 500],
    ['Banana', 60],
    ['Orange', 100],
]);

console.log(fruits);

// regular expression
const text = "Hello World!";
const regex = /world/i;

console.log(regex.test(text));


// try, catch & throw block in js example
try {
    let jsonData = '{"name": "John", "age": 30}';
    let user = JSON.parse(jsonData);
    console.log(user.name); 
} catch (error) {
    console.log("Invalid JSON data");
} finally {
    console.log("Parsing complete");
}
