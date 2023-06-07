// Spread Operator( thios copies)

let persons = ["james", "peter", "Tokoni", "Helen", "Abdul", "Kingley"];
console.log(persons);

let personsArr = [...persons, "Gerald", "chris"];
console.log(personsArr)

// Destructure ( this breaks down aN OBJECT)

let carObj = {
    name: "maybach",
    color: "Black",
    Wheel: 4,
    door: 4,
    engineType: "V8",
};

let { name, color, wheels, doors, engineType}= carObj
console.log("I drive a " + color + name + "which is a " + door + )