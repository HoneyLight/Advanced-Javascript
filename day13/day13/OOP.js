class User {
  constructor(fname, lname, age, gender, email, phone, password) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.gender = gender;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }
  login(email, password) {
    if (email == this.email && password == this.password) {
      return true;
    } else {
      return false;
    }
  }
}
let user1 = new User("Penelope", "Obi", 22, "Female", "penelopeobi@gmail.com", "09012345678", "pen123");
let user2 = new User("Abdul", "Lawal", 55, "Male", "abdullawal@gmail.com", "08016271829", "abdul1");
let user3 = new User("Tokonih", "Standwell", 34, "Male", "tokonihstandwell@gmail.com", "07027162738", "tk123");
let users = [user1, user2, user3];

let email = document.getElementById("email");
let pwd = document.getElementById("password");
let btn = document.getElementById("btn");

btn.onclick = () => {
  if (!email.value && !pwd.value) {
    alert("Fill in the details");
  }
  let checkLogin = users.find((user) => user.login(email.value, pwd.value) == true);
  if (checkLogin != undefined) {
    alert("Welcome, " + checkLogin.fname + " you are successfully logged in");
    console.log(checkLogin);
  } else {
    alert("Invalid Login Details");
    console.log(checkLogin);
  }
};

let arr = [
  { name: "John", email: "john@gmail.com" },
  { name: "Faith", email: "faith@gmail.com" },
  { name: "Peace", email: "peace@gmail.com" },
];
let persons = arr.map((person) => {
  if (person.email == "faith@gmail.com") {
    person = { ...person, gender: "Female", age: 23 };
  }
  return person;
});

console.log(persons);
