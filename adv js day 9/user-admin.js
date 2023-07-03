let form = document.getElementById('form');

function getUser() {
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
                <button onclick="editFunction('${user.id}')" class="edit">Edit</button>
                <button onclick="deleteFunction('${user.id}')" class="delete">Delete</button>
            </div>
            `;
                document.getElementById('userContainer').innerHTML += output;
            })
        })
        .catch((error) => {
            console.log(error);
            document.getElementById('userContainer').innerHTML = 'User Unavailable';
        });

}
getUser();

function deleteFunction(userId) {
    fetch(`https://6464b81f127ad0b8f8a613c7.mockapi.io/users/${userId}`, {
        method: 'DELETE',
    }).then((resp) => {
        if (resp.ok) {
            window.location.reload();
            alert('user successfully deleted');
        } else {
            alert('failed to delete user');
        }
    }).catch((error) => {
        console.error(error)
    })
}

function editFunction() {
    // alert('wow');
    fetch(`https://6464b81f127ad0b8f8a613c7.mockapi.io/users`, {
     }).then((resp) => resp.json())
     .then((data) => {
        data.forEach((user) => {
            let output = `
            <div class="form-group">
                <label for="">First Name</label>
                <input type="text" id="first_name" value="${user.first_name}">
            </div>
            <div class="form-group">
                <label for="">Last Name</label>
                <input type="text" id="last_name" value="${user.last_name}">
            </div>
            <div class="form-group">
                <label for="">Gender</label>
                <select id="gender">
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div class="form-group">
                <label for="">Date of Birth</label>
                <input type="date" name="" id="dob" value="${user.dob}">
            </div>
            <div class="form-group">
                <label for="">Email</label>
                <input type="text" id="email" value="${user.email}">
            </div>
            <div class="form-group">
                <label for="">Password</label>
                <input type="text" id="password" value="${user.password}">
            </div>
            <button id="btn">Create</button>
            `;
            form.innerHTML += output;
        })
     }).catch((error) => {
        console.log(error)
     })
}
editFunction();



