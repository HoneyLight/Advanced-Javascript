let users = [
    { firstName: 'martha', lastNaame: "Jonas", age: 26, gender: "female", email: "tokonihstandwell@gmail.com", phone: "07048299390", location: "Abuja", maritalStatus: "single" },
    { firstName: 'Debby', lastName: "Chika", age: 46, gender: "female", email: "deddy@gmail.com", phone: "07048299390", location: "Delta", maritalStatus: "married" },
    { firstName: 'Gerald', lastName: "fakaa", age: 14, gender: "male", email: "badboyFaka@gmail.com", phone: "07048299390", location: "enugu", maritalStatus: "single" },
    { firstName: 'Bivan', lastName: "Nath", age: 20, gender: "male", email: "bivannath@gmail.com", phone: "07048299390", location: "Kaduna", maritalStatus: "married" },
    { firstName: 'kingsley', lastName: "man", age: 26, gender: "male", email: "kingsley@gmail.com", phone: "07048299390", location: "Edo", maritalStatus: "single" },
    { firstName: 'Jahnedu', lastName: "Ibekwuelu", age: 36, gender: "male", email: "Jahnedu@gmail.com", phone: "07048299390", location: "Anambra", maritalStatus: "single" },
    { firstName: 'Abdul', lastName: "Shakul", age: 19, gender: "male", email: "Abdulshakul@gmail.com", phone: "07048299390", location: "Zamfara", maritalStatus: "single" },
    { firstName: 'Aisha', lastName: "Shakul", age: 18, gender: "female", email: "Aisha@gmail.com", phone: "07048299390", location: "Abuja", maritalStatus: "single" },
    { firstName: "Alice", lastName: "Smith", age: 25, gender: "female", email: "alice@gmail.com", phone: "123-456-7890", location: "New York", maritalStatus: "single" },
    { firstName: "Bob", lastName: "Jones", age: 32, gender: "male", email: "bob@yahoo.com", phone: "987-654-3210", location: "Los Angeles", maritalStatus: "married" },
    { firstName: "Charlie", lastName: "Brown", age: 28, gender: "male", email: "charlie@outlook.com", phone: "555-555-5555", location: "Chicago", maritalStatus: "divorced" },
    { firstName: "David", lastName: "Lee", age: 30, gender: "male", email: "david@gmail.com", phone: "111-111-1111", location: "Boston", maritalStatus: "single" },
    { firstName: "Emma", lastName: "Watson", age: 31, gender: "female", email: "emma@outlook.com", phone: "222-222-2222", location: "London", maritalStatus: "married" },
    { firstName: "Frank", lastName: "Liu", age: 29, gender: "male", email: "frank@yahoo.com", phone: "333-333-3333", location: "San Francisco", maritalStatus: "divorced" },
    { firstName: "Grace", lastName: "Kim", age: 27, gender: "female", email: "grace@outlook.com", phone: "444-444-4444", location: "Seoul", maritalStatus: "single" },
    { firstName: "Harry", lastName: "Potter", age: 33, gender: "male", email: "harry@outlook.com", phone: "5555555555", location: "Hogwarts", maritalStatus: "married" },
    { firstName: "Irene", lastName: "Adler", age: 35, gender: "female", email: "irene@gmail.com", phone: "666-666-6666", location: "London", maritalStatus: "single" }

];
let tbody = document.getElementById('tbody')
// HOF HEIGHER OTHER Function. they always have parameters
// NorMal loop method

// for (let i=0; i<users.length; i++){
//     console.log(users[i].age);
//     let output = `

//     `
// }


// using HOF 
// user
// users.forEach((result) =>{
//     let output = `
//     <tr>
//         <td>${result.firstName}</td>
//         <td>${result.lastName}</td>
//         <td>${result.age}</td>
//         <td>${result.gender}</td>
//         <td>${result.email}</td>
//         <td>${result.phone}</td>
//         <td>${result.location}</td>
//         <td>${result.maritalStatus}</td>

//     </tr>`;
//     tbody.innerHTML += output
// })



// to get just users that are more that age 30 
// for(let i=0; i<users.length; i++){
//     if(users[i].age >= 30){
//           let output = `
//      <tr>
//         <td>${users[i].firstName}</td>
//          <td>${users[i].lastNaame}</td>
//         <td>${users[i].age}</td>
//         <td>${users[i].gender}</td>
//          <td>${users[i].email}</td>
//          <td>${users[i].phone}</td>
//         <td>${users[i].location}</td>
//         <td>${users[i].maritalStatus}</td>

//      </tr>`;
//     tbody.innerHTML += output

//         // console.log(users[i
//     }
//     // console.log(users[i])
// }




// USING HOF TO FILTER array
const get30andOlder = users.filter(function(result){
    if(result.age >=30) {
        let output = `
     <tr>
        <td>${result.firstName}</td>
         <td>${result.lastName}</td>
        <td>${result.age}</td>
        <td>${result.gender}</td>
         <td>${result.email}</td>
         <td>${result.phone}</td>
        <td>${result.location}</td>
        <td>${result.maritalStatus}</td>

      </tr>`;
    tbody.innerHTML += output
    }
})

console.log(get30andOlder)

// or we use
// const get30andOlder = users.filter((result) => {
//     return result.age >=30
// })
// console.log(get30andOlder)

// or we use
// const get30andOlder = users.filter((result) => result.age >=30w)
// console.log(get30andOlder)



// Destructing
// const get30andOlder = users.filter(({age}) => age >=30)
// console.log(get30andOlder)



// HOF MAP

// const get30andOlder = users.map((result) => {
// return result >=30})
// console.log(get30andOlder)

// const getUsers = users.map((result) => result.firstName)

// console.log(getUsers)


const ages = users.map((result) => result.age)
// console.log(ages)
// // To add all the ages in Array, use do

// function sumArr(arr) {
//     let total = 0;

//     if (arr) {
//         for (let i = 0; i < arr.length; i++) {
//             total += arr[i]
//         }
//     }
//     return total;
// }

// let sum = sumArr(ages)
// console.log(sum)



// Using Higher order function to add an array

const sum = ages.reduce((a, b) => {
    return a + b; 
},0)
console.log(sum)



// // Using Map to add up an array
// const sumAges = users.map((result) => result.age).reduce((a, b) => a + b);
// console.log(sumAges)


// const getuser = users.find((user) =>{
//     return user.email == "tokonihstandwell@gmail.com";
// });

// if (getuser){
//     alert("sucessfully logged in");
// }else alert(" invalid email address")


// let login = document.getElementById('login')



document.getElementById('login').onclick = function () {

    let email = document.getElementById("email")
    let phone = document.getElementById('phone')

    const getUser = users.find((user) => {
        return user.email == email.value && user.phone == phone.value
    })

    if (getUser) {
        alert('login successful');
    }
    else alert('wrong details')

    // getUser ? alert ('user logged in ') : alert('invalid login details')

}

