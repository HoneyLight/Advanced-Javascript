// CallBack
// Promises
// async await

// console.log('Martha');
// setTimeout(() => {
//     console.log('data');
// }, 500);
// console.log('Harry');
// console.log('Paul');
function getData(arr){
    let tbody = document.getElementById('tbody');
    let output = '';
    arr.forEach((data) => {
        output += `
            <tr>
                <td>${data.name}</td>
                <td>${data.age}</td>
                <td>${data.gender}</td>
            </tr>
        `;
        tbody.innerHTML += output;
    });
}

function createData(Callback){
    let name = document.getElementById('name');
    let age = document.getElementById('age');
    let gender = document.getElementById('gender');
    let personArr = [];

    if(!name.value && !age.value && !gender.value){
        alert('Please fill in the required details');
        return;
    }
    let obj = {
        name: name.value,
        age: age.value,
        gender: gender.value,
    };
    personArr.push(obj);
    Callback(personArr);
}

// Explanation: The createData function needs to run for the getData function to run. if there is an error in createData, the getData would not work.

document.getElementById('btn').onclick = (e) => {
    e.preventDefault();
    createData(getData)
};

function calNum(a, b){
    console.log(a + b);
}
calNum(2, 5);

// ASSIGNMENT
// Build up on today's calss, let the data persist and do a proper validation. Also, let the data appear on cards.  