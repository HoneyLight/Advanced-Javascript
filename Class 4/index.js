// Spread Operator( thios copies)

// let persons = ["james", "peter", "Tokoni", "Helen", "Abdul", "Kingley"];
// console.log(persons);

// let personsArr = [...persons, "Gerald", "chris"];
// console.log(personsArr)

// Destructure ( this breaks down aN OBJECT)

// let carObj = {
//     name: "maybach",
//     color: "Black",
//     Wheel: 4,
//     door: 4,
//     engineType: "V8",
// };

// let { name, color, wheels, door, engineType}= carObj;

// console.log("I drive a " + color + name + "which is a " + door )

// CLOSURE is the abilty for a child function to access a parent function even if the parent function is closed 



function points(){
    let points = 0;
    let counter = document.getElementById("counter")
    counter.innerHTML = points;

 

    const increasePoint = () => {
        points++;
        counter.innerHTML = points
    }

    const decrease = () => {
        if ( points > 0){
             points--;
             counter.innerHTML= points
        }

    }

    const reset = () => {
        points = 0
        counter.innerHTML = points
    }

   

   

    return {increasePoint, decrease,reset };

}
let {increasePoint, decrease, reset} = points();

document.getElementById("increaseBtn").onclick = function() {
    increasePoint()
}

document.getElementById("decrease").onclick = function() {
    decrease()
}

document.getElementById("reset").onclick = function() {
    reset()
}




function point(){
    
}