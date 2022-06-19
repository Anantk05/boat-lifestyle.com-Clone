

// Importing Navbar and footer HTML from Components
import footer from "../components/footer.js";
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


            // Function for updating cart items -----

document.getElementById("cart_icon").addEventListener("click",()=>{
    
    document.getElementById("xclose").addEventListener("click", ()=>{
        mainCartFun()
    })
    
})


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

                //      User Details Function
let user = document.getElementById("user_icon")
user.addEventListener("click",()=>{
    let user_dtails = JSON.parse(localStorage.getItem("loginDetails"))
    if(user_dtails){
        let user_name = `${user_dtails.Fname} ${user_dtails.Lname}`
        alert(`Hi ${user_name} I Enjoy Shopping..!`)
    }
    else{
        window.location.href = "../signupPage.html"
    }
})

// store userdata in the local storage with the key "userDetails"

document.querySelector("form").addEventListener("submit",signup);

function signup(event){
    event.preventDefault()
    let userdata = {
        Fname : document.getElementById("first_name").value,
        Lname : document.getElementById("Last_name").value,
        email : document.getElementById("Email").value,
        password : document.getElementById("Password").value,
    }
    alert("SignUp Successful")
    window.location.href="../loginPage.html"
    localStorage.setItem("userDetails",JSON.stringify(userdata));

}


document.getElementById("footer_container").innerHTML = footer()

