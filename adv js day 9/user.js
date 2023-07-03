function getUser(){
    fetch('https://6464b81f127ad0b8f8a613c7.mockapi.io/users')
    .then((resp) => resp.json()) 
    .then((data) => {
        data.forEach((user) => {
            let output = `
            <div class="user-grid">
                <h2>${user.first_name} ${user.last_name}</h2>
                <p>${user.gender}</p>
                <p>${user.email}</p>
                <p>${user.dob}</p>
            </div>
            `;
            document.getElementById('userContainer').innerHTML += output;
        })
    })
    .catch((error) => {
        console.log(error);
        document.getElementById('userContainer').innerHTML = 'User Unavailable';
    })
}
getUser();