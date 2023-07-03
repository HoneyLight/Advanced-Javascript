let email = document.getElementById('email');
let password = document.getElementById('password');
let loginBtn = document.getElementById('loginBtn');

function validation() {
    if (!email.value || !password.value) {
            alert('Please Fill in your Details');
            return;
        }
}
let storedData = localStorage.getItem('registration');
// let loginDetails = storedData ? JSON.parse : [];

loginBtn.onclick = () => {
    validation();
}