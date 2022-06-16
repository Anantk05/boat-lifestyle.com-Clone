
// Importing Navbar and footer HTML from Components

import {navbar, linkShopPopup, linkMorePopup, shopPopupCards, shopPopupElements, morePopupElements, cartCounter, SearchQuery } from "../components/navbar";

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

        //SearchQuery()
        console.log(terms)
    }
}

        //------ Homepage Mainbody Functionality --------------

    let slideShow = () => {

        let slideData = [
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/135-WEB_2000x.jpg?v=1655189587",
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/desktop-banner_2000x.png?v=1655295150",
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/desktop-banner_2000x.png?v=1655295150",
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2000x650_5496c9d9-c8d1-49c1-a7c2-83055a261f8a_1000x.jpg?v=1654509146"
        ]
        let slide = document.getElementById("slide_show")
        let i = 0
        if(i===0){
            let img = document.createElement("img")
            img.src = slideData[i]
            slide.append(img)
            i++
        }
        setInterval(() => {
            if(i===slideData.length-1){
                i=0
            }
            slide.innerHTML = null
            let img = document.createElement("img")
            img.src = slideData[i]
            slide.append(img)
            i++
        },3000)        
    }
slideShow()

