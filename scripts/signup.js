// store userdata in the local storage with the key "userDetails"

document.querySelector("form").addEventListener("submit",signup);
let user_arr = JSON.parse(localStorage.getItem("userDetails"))||[];
console.log(user_arr)

function signup(event){
    event.preventDefault()
    let userdata = {
        Fname : document.getElementById("first_name").value ,
        Lname : document.getElementById("Last_name").value,
        email : document.getElementById("Email").value,
        password : document.getElementById("Password").value,
    }
    alert("SignUp Successful")
    window.location.href="login.html"
    localStorage.setItem("userDetails",JSON.stringify(userdata));

}