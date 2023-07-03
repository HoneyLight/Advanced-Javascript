/* 
// Promises
function getData() {
  fetch("https://639dbd3f3542a261304e99c8.mockapi.io/api/users")
    .then((resp) => resp.json())
    .then((data) => console.log(data)).catch((err) => console.log(error))
}
getData(); */

/* // Async Await
async function getUsers() {
  try {
    const resp = await fetch("https://639dbd3f3542a261304e99c8.mockapi.io/api/users");
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getUsers(); */

/* const data = {
  createdAt: new Date(),
  first_name: "Daniel",
  last_name: "Hennesy",
  dob: "2001-01-17",
  gender: "Male",
  email: "danielhennesy@gmail..com",
  password: "dan123",
}; */

const createUser = async () => {
  const resp = await axios.delete("https://639dbd3f3542a261304e99c8.mockapi.io/api/users/10");
  const result = await resp;
  alert("User Deleted");
  console.log(result);
};

document.getElementById("btn").onclick = () => {
  createUser();
};
