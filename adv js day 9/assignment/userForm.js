let url = window.location.search;
let urlParams = new URLSearchParams(url);
let id = urlParams.get('id');
let first_name = document.getElementById('first_name');
    let last_name = document.getElementById('last_name');
    let dob = document.getElementById('dob');
    let gender = document.getElementById('gender');
    let email = document.getElementById('email');
    let password = document.getElementById('password');

const getData = () => {
    fetch("https://6464b81f127ad0b8f8a613c7.mockapi.io/users/" + id)
    .then((resp) => resp.json())
    .then((data) => {
        first_name.value = data.first_name;
        last_name.value = data.last_name;
        gender.value = data.gender;
        dob.value = data.dob;
        email.value = data.email;
        password.value = data.password;
    })
    .catch((error) => {
        console.log(error);
    });
}
getData();

function editUser() {
    let userObj = {
        first_name: first_name.value,
        last_name: last_name.value,
        dob: dob.value,
        gender: gender.value,
        email: email.value,
        password: password.value,
    };

    // to edit a user on the api, you use the put method and also ensure to add headers cos it's a way of telling the api the kind of content you are sending to it then you also add the body which will carry the user input data. 
    fetch('https://6464b81f127ad0b8f8a613c7.mockapi.io/users', {
        method: 'PUT',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(userObj),
    })
    .then((resp) => resp.json())
    .then((data) => {
        alert('User Updated');
        console.log(data);
        window.location.reload();
    })
    .catch((err) => {
        console.log(err);
        alert('User not updated');
    });
}

document.getElementById('btn').onclick = (e) => {
    e.preventDefault();
    editUser();
};