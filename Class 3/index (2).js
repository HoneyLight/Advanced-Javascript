// Recursion function
// function countNumber(n){
//     if (n > 10){
//         return;
//     }
//     console.log(n)
//     countNumber(n + 1);

// }

// countNumber(0)

let btn = document.getElementById('btn');
let dedutNumber = document.getElementById('dedutNumber');
let inputNumber = document.getElementById('number')
let resp = document.getElementById('resp')

function countNumber(n){
    if(n == 0 ){
        return;
    }
    console.log(n)
    resp.innerHTML = `${n}`
    setTimeout(function(){
        countNumber(n - dedutNumber.value);
    }, 1000)
    
}

btn.addEventListener("click", () =>{ 
 countNumber(inputNumber.value)
});

// let list = document.querySelectorAll(".list");
//     function fruits(n){
//         if (n >= list.length){
//             return;
//         }
//         console.log (list[n].innerHTML)
//         list[n].innerHTML;
//         fruits(n + 1)
      
//     }
//     fruits(0)
// function fruits(n){
//     if (n >= list.length){
//         return;
//     }
//     console.log(list[n].innerHTML)
//     fruits(n + 1)
// }
// fruits(0)

// let list = document.querySelectorAll(".list");
// let number = 10;
// let dedutNumber = 2


// function countDown(n) {
//     if (n == 0) {
//         return;
//     }
//     console.log(n)
//     countDown(n - dedutNumber)
// }

// countDown(number)


// let btn = document.getElementById('btn');
// let dedutNumber = document.getElementById('dedutNumber');
// let inputNumber = document.getElementById('number')
// let resp = document.getElementById('resp')

// function calculate(n) {
//     if (n == 0) {
//         return;
//     }
//     console.log(n)
//     resp.innerHTML = `${n}`
//     setTimeout(function () {
//         calculate(n - dedutNumber.value);
//     }, 1000);
// }



// btn.addEventListener('click', (e) => {
//     calculate(inputNumber.value)

// })


// function calculate(n) {
//     if (n > 0) {
//       console.log(n);
//       resp.innerHTML= `${n}`
//       setTimeout(function() {
//         calculate(n - dedutNumber.value);
//       }, 1000);
//     } else {
//       console.log("Time's up!");
//     }
//   }



// btn.addEventListener('click', (e) => {
//     calculate(inputNumber.value)

// })


let crust = "crust" 
function earth(){
    let mantle = "mantle"; 
    function message(){
        let core = "core" 
        console.log ( " the earth is made up of the " + crust +
         " the " + mantle + " and the "+ core  )
    };
    return message
};

 let text = earth();
 text();   