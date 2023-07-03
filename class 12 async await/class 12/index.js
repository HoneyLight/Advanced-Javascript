// async await
// async function getData(){
//     try{
//         const resp = await fetch("https://6464b5f3043c103502c0b762.mockapi.io/users");
//         const data = await resp.json()
//         console.log(data)
//     } catch(error){
//         console.log(error)
//     }
//     // try and catch is used to manipulate the asyc and wait to be able to catch error
// }
// getData()

// Axious 

const data = {
        createdAt: new Date(),
        First_Name: "standwell",
        Last_Name: "tokonih",
        dob: "2023-05-20",
        Gender: "female",
        email: "tokonihstandwell@gmail.com",
        password: "tk",
        id: "13"
}

// to  post
// const createUser = async () => {
//     const resp =await axios.post('https://6464b5f3043c103502c0b762.mockapi.io/users', data);
//     const result = await resp;
//     console.log(result)
// }


// to delete
const createUser = async () => {
    const resp =await axios.delete('https://6464b5f3043c103502c0b762.mockapi.io/users/14');
    const result = await resp;
    alert('user Delete')
    console.log(result)
}

document.getElementById('btn').onclick = () => {
    createUser()
};