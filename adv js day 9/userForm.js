// function editUser() {
//     let first_name = document.getElementById('first_name');
//     let last_name = document.getElementById('last_name');
//     let dob = document.getElementById('dob');
//     let gender = document.getElementById('gender');
//     let email = document.getElementById('email');
//     let password = document.getElementById('password');

//     if (!first_name.value || !last_name.value || !dob.value || !gender.value || !email.value || !password.value) {
//         alert('Please Fill in your Details');
//         return;
//     }
// // the '.toString' added to the date method will make it select the year, month and date for you.
//     let userObj = {
//         updatedAt: new Date().toString(),
//         first_name: first_name.value,
//         last_name: last_name.value,
//         dob: dob.value,
//         gender: gender.value,
//         email: email.value,
//         password: password.value,
//     };

//     // to update a user on the api, you use the post method and also ensure to add headers cos it's a way of telling the api the kind of content you are sending to it then you also add the body which will carry the user input data. 
//     fetch('https://6464b81f127ad0b8f8a613c7.mockapi.io/users', {
//         method: 'PUT',
//         headers: {"Content-type": "application/json"},
//         body: JSON.stringify(userObj),
//     })
//     .then((resp) => resp.json())
//     .then((data) => {
//         alert('User Created');
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//         alert('User not created');
//     })
// }
// // you're using a form hence you'll always need to do a prevent default.
// document.getElementById('btn').onclick = (e) => {
//     e.preventDefault();
//     createUser();
// };