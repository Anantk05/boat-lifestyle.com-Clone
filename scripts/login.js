// Importing Navbar and footer HTML from Components
import footer from "../components/footer.js";
import { navbar, linkShopPopup, linkMorePopup, shopPopupCards, shopPopupElements, morePopupElements, cartCounter, searchQuery } from "../components/navbar.js";
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


//  Input Searching Function    ---------

let searchTermOne = document.getElementById("search_one")
searchTermOne.addEventListener("keypress", () => {

    search(searchTermOne.value)
})
let searchTermTwo = document.getElementById("search_two")
searchTermTwo.addEventListener("keypress", () => {
    search(searchTermTwo.value)
})
let search = (terms) => {
    if (event.key === "Enter") {

        searchQuery(terms)
    }
}
//      User Details Function
let user = document.getElementById("user_icon")
user.addEventListener("click", () => {
    let user_dtails = JSON.parse(localStorage.getItem("loginDetails"))

    if (user_dtails) {
        let user_name = `${user_dtails.Fname} ${user_dtails.Lname}`
        alert(`Hi ${user_name} I Enjoy Shopping..!`)
    }
    else {
        window.location.href = "../signupPage.html"
    }
})

let user_arr = JSON.parse(localStorage.getItem("userDetails"));

document.querySelector("form").addEventListener("submit", login);

function login(e) {
    e.preventDefault();

    let user = JSON.parse(localStorage.getItem("userDetails"))
        

    if(user){
        if (user.email == "" || user.password == "") {
            alert("Enter Credentials")
    
        }
        else if (user.email != user_arr.email || user.password != user_arr.password) {
            
                alert("Enter Valid Email id and Password")
            
        }
        else {
            alert("Login Successful")
            window.location.href = "../index.html"
        }
        localStorage.setItem("loginDetails", JSON.stringify(user_arr));
    }
    else {
        alert("Please Signup First.")
        window.location.href = "../signupPage.html"
    }
}

var modal = document.getElementById("popup");

// Get the button that opens the modal
var btn = document.getElementById("btn");

// Get the <span> element that closes the modal
var close = document.getElementById("close")

// When the user clicks the button, open the modal 

btn.onclick = function () {
    setTimeout(function () {
        modal.style.display = "visible";
    }, 2000)

}

// When the user clicks on <span> (x), close the modal
close.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//// Set the date we're counting down to
var countDownDate = new Date("June 21, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("count").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("count").innerHTML = "EXPIRED";
    }
}, 1000);

document.getElementById("code").addEventListener("click", handle);

function handle() {
    alert("Coupon Copied Successfully")

}


document.getElementById("footer_container").innerHTML = footer()


