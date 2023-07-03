
function getUser(delUser) {
    fetch('https://6464b81f127ad0b8f8a613c7.mockapi.io/users')
        .then((resp) => resp.json())
        .then((data) => {
            data.forEach((user) => {
                let output = `
            <tr>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td>${user.gender}</td>
                <td>${user.email}</td>
                <td>${user.dob}</td>
                <td><button class="edit-btn"><a href='userForm.html?id=${user.id}'>Edit</a></button></td>
                <td><button class="delete-btn" id=${user.id}>Delete</button></td>
            </tr>
            `;
                document.getElementById('tbody').innerHTML += output;
            });
            delUser();
        })
        .catch((error) => {
            console.log(error);
            document.getElementById('userTable').innerHTML = 'User Unavailable';
        });
}
getUser(deleteUser);

function deleteUser() {
    let btns = document.querySelectorAll('.delete-btn');
    btns.forEach((btn) => {
       let id = btn.id;
       
       btn.onclick = function() {
        alert('work')
        fetch("https://6464b81f127ad0b8f8a613c7.mockapi.io/users/" + id, {
            method: "DELETE",
        }).then((resp) => resp.json()).
        then((data) => {
            console.log(data);
            alert('User Deleted');
            window.location.reload();
        });
       };
    });
};

// function editFunction() {
//     // alert('wow');
//     fetch(`https://6464b81f127ad0b8f8a613c7.mockapi.io/users`, {
//      }).then((resp) => resp.json())
//      .then((data) => {
//         data.forEach((user) => {
//             let output = `
//             <div class="form-group">
//                 <label for="">First Name</label>
//                 <input type="text" id="first_name" value="${user.first_name}">
//             </div>
//             <div class="form-group">
//                 <label for="">Last Name</label>
//                 <input type="text" id="last_name" value="${user.last_name}">
//             </div>
//             <div class="form-group">
//                 <label for="">Gender</label>
//                 <select id="gender">
//                     <option value="">Select</option>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                     <option value="Other">Other</option>
//                 </select>
//             </div>
//             <div class="form-group">
//                 <label for="">Date of Birth</label>
//                 <input type="date" name="" id="dob" value="${user.dob}">
//             </div>
//             <div class="form-group">
//                 <label for="">Email</label>
//                 <input type="text" id="email" value="${user.email}">
//             </div>
//             <div class="form-group">
//                 <label for="">Password</label>
//                 <input type="text" id="password" value="${user.password}">
//             </div>
//             <button id="btn">Create</button>
//             `;
//             form.innerHTML += output;
//         })
//      }).catch((error) => {
//         console.log(error)
//      })
// }
// editFunction();



