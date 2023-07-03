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

class Car{ 
    constructor(brand, model, year,engineType, turbo, body, rimSize,reliability,price    ){ // constructor is used to place in the variables that we need 
        this.brand =brand ;
        this.model = model ;
        this.year = year ;
        this.engineType =engineType ;
        this.turbo = turbo ;
        this.body = body ;
        this.rimSize = rimSize ;
        this.reliability = reliability;
        this.price = price ;
        this.working = true
    }

    drive(){
        if(this.working == true ){
            console.log(this.brand + " " + this.model + 'car driving')
        }else{
            console.log('çar faulty, cannot drive')
        }
    }
}
// after creating the model up there, we can now use it outside the trigering it with a new keyword i.e 'new Car'. this thing is just like when we use 'new Date': the 'Date' model have been created in javascript already so we just use it but in this case, we are creating our own model so we can use. that's what class is all  about.
const newCar = new Car( 'Toyota', 'camry', 2022, 'v6', '3.0', 'saloon', '8-12 mil', '16inches', '4.9');
const newCar2 = new Car('Ford', 'Mustarg', 2023, 'v12', '3.0', 'coupe', '20-50 mil', '17inches', '4.9');

newCar2.drive()