// let fname = document.getElementById('fname');
// let lname = document.getElementById('lname');
// let email = document.getElementById('email');
// let phone = document.getElementById('phone');
// let gender = document.getElementById('gender');
// let password = document.getElementById('password');
// let fnameErr = document.getElementById('fnameErr');
// let lnameErr = document.getElementById('lnameErr');
// let emailErr = document.getElementById('emailErr');
// let phoneErr = document.getElementById('phoneErr');
// let genderErr = document.getElementById('genderErr');
// let passwordErr = document.getElementById('passwordErr');
// let btn = document.getElementById('btn');
// let name = document.getElementById('name')

// btn.addEventListener('click', (e)=>{
//     e.preventDefault();
//     validation();
// });

// function validation() {
//     if (fname.value == '' || undefined) {
//         fnameErr.innerHTML = 'first name required';
//         fnameErr.style.color = 'red';
//         return false;
//     }
//     if (lname.value == '' || undefined) {
//         lnameErr.innerHTML = 'last name required';
//         lnameErr.style.color = 'red';
//         return false;
//     }
//     if (email.value == '' || undefined) {
//         emailErr.innerHTML = 'Email required';
//         emailErr.style.color = 'red';
//         return false;
//     }
//     if (email.value == '' || undefined) {
//         phoneErr.innerHTML = 'Phone number required';
//         phoneErr.style.color = 'red';
//         return false;
//     }
//     if (gender.value == '' || undefined) {
//         genderErr.innerHTML = 'Gender required';
//         genderErr.style.color = 'red';
//         return false;
//     }
//     if (password.value == '' || undefined) {
//         passwordErr.innerHTML = 'Password required';
//         passwordErr.style.color = 'red';
//         return false;
//     }
//     return true;
// }

// function validation() {
//         if(fname.value !='' && lname.value !='' && email.value != '' && phone.value != '' && gender.value !='' && password.value != ''){
//             name.innerHTML = fname.value;
//             // document.innerHTML('<h2>Your Details</h2>')
//             // document.innerHTML("First name: " + fname.value +'<br></br>' + "Last name: " + lname.value+'<br></br>' + '<br></br>'+ "Phone number: " + phone.value+'<br></br>' + "Email: "+email.value+'<br></br>' + "Gender: "+gender.value +'<br></br>');
//     }
// }

function validateForm() { 
    let inputs = document.getElementsByClassName('inputs');
    obj = {};
    error = false;

    for(let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "" || inputs[i].value == null) {
            inputs[i].nextElementSibling.innerHTML = inputs[i].previousElementSibling.innerHTML + ' is required';
            error = true;
        }
        else {
            inputs[i].nextElementSibling.innerHTML = "";
            obj[inputs[i].name] = inputs[i].value;
        }
    }
    if (error == false) {
        alert("All Fields are filled");
        let output = `
        <div class = 'details-sub'>
            <div><p>First Name</p><p>${obj.fname}</p></div>
            <div><p>Last Name</p><p>${obj.lname}</p></div>
            <div><p>Email</p><p>${obj.email}</p></div>
            <div><p>Phone number</p><p>${obj.phone}</p></div>
            <div><p>Gender</p><p>${obj.gender}</p></div>
        </div>
        `;
        document.getElementById("details").innerHTML = output;
    }
}

document.getElementById('btn').onclick = function (e) {
    e.preventDefault();
    validateForm();
};
