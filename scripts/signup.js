// Importing Navbar and footer HTML from Components

import {navbar, linkShopPopup, linkMorePopup, shopPopupCards, shopPopupElements, morePopupElements, cartCounter, searchQuery } from "../components/navbar.js";
import productsData from "../components/productsData.js"
productsData()

//      appending navbar components

document.getElementById("navbar_container").innerHTML = navbar()

//      Showing Popup for Navbar link list title shop

document.getElementById("popup_link_list_shop").innerHTML = shopPopupElements()
linkShopPopup()

//      Showing Popup for Navbar link list title more -------

document.getElementById("popup_link_list_more").innerHTML = morePopupElements()
linkMorePopup()

    //  Popup cards reaction onClick for Navbar link list title shop

shopPopupCards()

            //      Add to Cart Button --------------------

//document.getElementById("cartbutton").addEventListener("click",() => {

    let count = 0
    let counterText = document.getElementById("cart_counter")
    counterText.innerText = null
    cartCounter(counterText, count)
//})

            //  Input Searching Function    ---------

let searchTermOne = document.getElementById("search_one")
searchTermOne.addEventListener("keypress", ()=> {
    
    search(searchTermOne.value)
})
let searchTermTwo = document.getElementById("search_two")
searchTermTwo.addEventListener("keypress", () => {
    search(searchTermTwo.value)
})
let search = (terms) => {
    if(event.key==="Enter"){
        
        searchQuery(terms)
    }
}





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