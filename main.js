// console.error("Helo Dear, How are you? ");
// alert("Hello user")

// let Gender;
// Gender = "female";
// console.log(Gender);

// const firstName = "Anyanwu";
// const lastName = "Chris";
// const age = 30;
// const isAdmin = false;
// const x = null;
// const y = undefined;

// console.log("My name is " + firstName + lastName + " I am " + age + " years old");

// console.log(`My name is ${firstName} ${ lastName} I am ${age} years old`);

// console.log(firstName.toUpperCase());
// const title = "welcome, ICT, Laptop, Router";

// console.log(title);

// console.log(title.length);

// console.log(title.toLowerCase());
// console.log(title.split(","));

// const students = ["wed", "home", "kitchen", 6, true];
// students.pop();
// students.unshift("Computer");
// students.push("table", "house", "maize");
// students[7] = "gate";
// console.log(students);

const person = {
  firstName: "Henry",
  lastName: "peter",
  score: 40.5,
  isAdmin: false,
  hobbies: ["cooking", "bet9ja", "reading"],
  adderss: {
    city: "owerri",
    lga: "owerri-west",
    postalcode: 46013,
  },
};

const { firstName, lastName } = person;
console.log(firstName, lastName);
// console.log(JSON.stringify(person));
