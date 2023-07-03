// let arr = [ 'Papaya', 'mango', 'Guava', 'Apple'];
// arr.sort()
// console.log(arr)

// let user = {
//     fName: 'Kenneth',
//     lName:'Lekan',
//     age: 24,
//     gmail: 'male',
//     email: 'kenny@gmail.com',

//     login: function (){
//         console.log(this. email + ' has logged in')
//     },
//      logout: function (){
//         console.log(this. email + ' has logged out')
//     }
// }
// createUser.login

// class is used to create a model that hold a particular activity.
// <!-- class is a like a model that holds everything i want to perform eg the method, etc and they are all grouped together without scaterring everything and no other variable can use the functions if its not created inside that class -->

// <!-- constructor is used to store your variables so that you can refer to them whenever yoy want to use them and its triggered using the 'new' key word and it must be inside the 'class'. -->

class Car {
    constructor(brand, model, year, engineType, turbo, body, rimSize, reliability, price) { // constructor is used to place in the variables that we need 
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.engineType = engineType;
        this.turbo = turbo;
        this.body = body;
        this.rimSize = rimSize;
        this.reliability = reliability;
        this.price = price;
        this.working = true
    }

    drive() {
        if (this.working == true) {
            console.log(this.brand + " " + this.model + 'car driving')
        } else {
            console.log('çar faulty, cannot drive')
        }
    }
}
// after creating the model up there, we can now use it outside the trigering it with a new keyword i.e 'new Car'. this thing is just like when we use 'new Date': the 'Date' model have been created in javascript already so we just use it but in this case, we are creating our own model so we can use. that's what class is all  about.
const newCar = new Car('Toyota', 'camry', 2022, 'v6', '3.0', 'saloon', '8-12 mil', '16inches', '4.9');
const newCar2 = new Car('Ford', 'Mustarg', 2023, 'v12', '3.0', 'coupe', '20-50 mil', '17inches', '4.9');

newCar2.drive()


// let's do another example:

// class User{
//     constructor(fname, lname, age, gender, email, phone, password) {
//         this.fname = fname;
//         this.lname = lname;
//         this.age = age;
//         this.gender = gender;
//         this.email = email;
//         this.phone = phone;
//         this.password = password;
//     }

//     login(email, password) {
//         if (email == this.email && password == this.password) {
//             alert("Congratulations, " + this.fname + " has successfully logged in");
//             return true;
//         }
//         else {
//             alert("Email or password is incorrect");
//             return false;
//         }
//     }
//     logout() {
//         console.log("");
//     }
// }

// let user1 = new User("Penelope", "Obi", 22, "Female", "penelopeobi@gmail.com", "090123456789", "pen123");
// let user2 = new User("Abdul", "Lawal", 28, "Male", "abdullawal@gmail.com", "080100456789", "abdul123");
// let user3 = new User("Tokonih", "Standwell", 36, "Male", "tokonihstandwell@gmail.com", "081120000112", "tk123");

// let users = [user1, user2, user3];

// user3.login("tokonihstandwell@gmail.com", "tk123");

// LET'S DO A CLASSWORK WHERE WE'D DO A REGISTRATION FORM
let first_name = document.getElementById('first_name');
let last_name = document.getElementById('last_name');
let age = document.getElementById('age');
let gender = document.getElementById('gender');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let password = document.getElementById('password');
let btn = document.getElementById('btn');
let loginBtn = document.getElementById('loginBtn');


// if (!first_name.value || !last_name.value || !age.value || !gender.value || !email.value || !phone.value || !password.value) {
//     alert('Please Fill in your Details');
//     return;
// }


function validation() {
    let input = document.querySelectorAll(".input");

    for (let i = 0; i < input.length; i++) {
        if (input[i].value == "" || input[i].value == null) {
            input[i].nextElementSibling.innerHTML = input[i].previousElementSibling.innerHTML + " is required"
        } else {
            input[i].nextElementSibling.innerHTML = "";
        }
    }
}
// the variables inside this constructor is showing or indicating the structure or construction of what you'll have like in an order.
class Person {
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
        }
        else {
            return false;
        }
    }
}


if (btn) {
    btn.onclick = () => {
        if (first_name.value != "" || last_name.value != "" || age.value != "" || gender.value != "" || email.value != "" || phone.value != "" || password.value != "") {

            let newPerson = new Person(first_name.value, last_name.value, age.value, gender.value, email.value, phone.value, password.value);
            // console.log(newClient);

            // for you have the registration inputs stored so that the user can login, you should open an array, then create another object to hold the value of the object above(which is 'newClient') and then push the object you created to the array. afterwards, you set the data to local storage and then get them on the login Js file.
            let arr = [];

            // let personObj = { newClient };
            arr.push(newPerson);
            console.log(arr);

             localStorage.setItem('registration', JSON.stringify(arr));
        }

        validation();
    }
}

// console.log(storedData);


if (loginBtn) {
    loginBtn.onclick = () => {
        // alert('work')
        let getItem = localStorage.getItem('registration');
        let storedData = JSON.parse(getItem);
        if (storedData == null) {
            alert('nothing')
        }
        else {
            for (let i=0; i<storedData.length; i++) {
                if(storedData[i].email == email.value && storedData[i].password == password.value) {
                    alert('ee work');
                }else{
                    alert('omo!')
                }
            }
        }
    }
};

 // let checkLogin = storedData.find((client) => client.login(email.value, password.value) == true);
        // if (checkLogin != undefined) {
        //     alert('Welcome, ' + checkLogin.fname + " you are successfully logged in");
        //     console.log(checkLogin);
        // }
        // else {
        //     alert('Invalid Login Details');
        //     console.log(checkLogin);
        // }
// if (!email.value || !password.value) {
//     alert('Please Fill in your Details');
//     return;
// }