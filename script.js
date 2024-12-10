// Javascript Objects literal
const person = {
    firstName: "Shubham",
    lastName: "Gawade",
    address: "Virar",
    age: 24,
    eyeColor: "blue",
    skill: function () {
        return {
            languages: ["Hindi", "Marathi", "English"],
            isEmployee: true,
        };
    }
};
console.log(person.skill());




// JavaScript empty object create
const car = {};
car.name = "BMW";
car.color = "Black";
car.model = "F90 m5 cs";
car.oil = "Petrol";



// JavaScript object using new Object()
const person1 = new Object();
person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 50;
person1.eyeColor = "blue";





function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
const myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather);

