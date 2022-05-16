const person = {
    name: 'Tiago',
    lasName: 'Silva',
    myJob: 'Logistic',
    age: 23,
};

console.log(person);

//Old method
// let name = person.name;
// let lastName = person.lasName;


// new method
let { name, lasName, age } = person;
console.log(name, age);