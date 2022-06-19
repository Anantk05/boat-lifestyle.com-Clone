
// Importing Navbar and footer HTML from Components

import {navbar, linkShopPopup, linkMorePopup, shopPopupCards, shopPopupElements, morePopupElements, searchQuery } from "../components/navbar.js";
import footer from "../components/footer.js";
import { mainCartFun, addtoCart } from "../components/AddToCart.js";
import productsData from "../components/productsData.js"

let data = JSON.parse(localStorage.getItem("productsData"))
if(data==false){
  productsData()
}
data = JSON.parse(localStorage.getItem("productsData"))

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

mainCartFun()


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

        //------ Homepage Mainbody Functionality --------------->>>

let slideData = [
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/135-WEB_2000x.jpg?v=1655189587",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/desktop-banner_2000x.png?v=1655295150",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/web34_0dc3ef24-e76e-4587-b21d-948137c138e3_2000x.jpg?v=1654670966",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2000x650_5496c9d9-c8d1-49c1-a7c2-83055a261f8a_1000x.jpg?v=1654509146",
];
let slide = document.getElementById("slide_show")
slideShow(slide, slideData)

function slideShow(slide_add,slide_data) {

    let i = 0
    if(i===0){
        let img = document.createElement("img")
        img.src = slide_data[i]
        slide_add.append(img)
        i++
    }
    setInterval(() => {
        if(i===slide_data.length){
            i=0
        }
        slide_add.innerHTML = null
        let img = document.createElement("img")
        img.src = slide_data[i]
        slide_add.append(img)
        i++
    },3000)        
}

            //----- Best Seller Products --------

let address = document.getElementById("best_seller_products")
let specification = "LimitedEdition"
displayProducts(specification, address)

        //----- For Smart Watches --------
let address2 = document.getElementById("smart_watches")
let specification2 = "SmartWatches"
displayProducts(specification2, address2)

                // For wireless earphones
let address3 = document.getElementById("trending_wireless")
let specification3 = "WirelessHeadphones"
displayProducts(specification3, address3)
                    
                    // For wireless earbuds
let address4 = document.getElementById("trending_earbuds")
let specification4 = "WirelessEarbuds"
displayProducts(specification4, address4)

    //  Function for wireless and earbuds Buttton in Trending wireless category
let wireless = document.getElementById("wireless_btn")
wireless.addEventListener("click",()=>{
    earbuds.style.color = "#FFFFFF"
    earbuds.style.border = "none"
    wireless.style.color = "red"
    wireless.style.borderBottom = "2px solid red"
    address4.style.display = "none"
    address3.style.display = "flex"
})
let earbuds = document.getElementById("earbuds_btn")
earbuds.addEventListener("click",()=>{
    wireless.style.color = "#FFFFFF"
    wireless.style.border = "none"
    earbuds.style.color = "red"
    earbuds.style.borderBottom = "2px solid red"
    address3.style.display = "none"
    address4.style.display = "flex"
})
        // ------ For Trending Wired Headphone ------

let address5 = document.getElementById("trending_wired")
let specification5 = "WiredEarphones"
displayProducts(specification5, address5)

                // ----- For Trending Headphone Catrgory ------->

let address6 = document.getElementById("wireless")
let specification6 = "WirelessHeadphones"
displayProducts(specification6, address6)
                // ----- For Trending ANC -----
let address7 = document.getElementById("anc")
let specification7 = "WirelessEarbuds"
displayProducts(specification7, address7)
                // ----- For Trending Headphones Wired -----
let address8 = document.getElementById("wired")
let specification8 = "WiredEarphones"
displayProducts(specification8, address8)

//  Function for wireless, ANC and wired Buttton in Trending Headphones category 

let wirelessT = document.getElementById("wireless_btn2")
let anc = document.getElementById("anc_btn")
let wired = document.getElementById("wired_btn")
wirelessT.addEventListener("click",()=>{
    address6.style.display = "flex"
    address7.style.display = "none"
    address8.style.display = "none"
    wirelessT.style.color = "red"
    wirelessT.style.borderBottom = "2px solid red"
    anc.style.color = "#FFFFFF"
    anc.style.borderBottom = "none"
    wired.style.color = "#FFFFFF"
    wired.style.borderBottom = "none"
})
anc.addEventListener("click",()=>{
    address6.style.display = "none"
    address8.style.display = "none"
    address7.style.display = "flex"
    anc.style.color = "red"
    anc.style.borderBottom = "2px solid red"
    wired.style.color = "#FFFFFF"
    wired.style.borderBottom = "none"
    wirelessT.style.color = "#FFFFFF"
    wirelessT.style.borderBottom = "none"
})
wired.addEventListener("click",()=>{
    address6.style.display = "none"
    address8.style.display = "flex"
    address7.style.display = "none"
    wired.style.color = "red"
    wired.style.borderBottom = "2px solid red"
    anc.style.color = "#FFFFFF"
    anc.style.borderBottom = "none"
    wirelessT.style.color = "#FFFFFF"
    wirelessT.style.borderBottom = "none"
})

                //----- For Gaming --------
let address9 = document.getElementById("gaming")
let specification9 = "Gaming"
displayProducts(specification9, address9)

                //-------- Display Products Function ---------->>>>>

function displayProducts(speci, address) {

    data.forEach(function (ele) {
        if(ele.category==speci){
            let div = document.createElement("div");
            div.setAttribute("class", "cards");
            div.style.cursor="pointer"
            

            let yousave=document.createElement("div")
            yousave.innerText= "YOU SAVE"+ele.save
            yousave.setAttribute("class","yousave")

            let img = document.createElement("img");
            img.src = ele.image;
            img.setAttribute("id", "img");
            img.addEventListener("click", function () {
                onclick(ele);
            });
            

            let div1 = document.createElement("div");
            div1.setAttribute("class", "content");
            div1.style.cursor="pointer"

            let h4 = document.createElement("h4");
            h4.innerText = ele.name;

            let div2 = document.createElement("div");
            div2.setAttribute("class", "row1");

            let img1 = document.createElement("img");
            img1.src =
            "https://t4.ftcdn.net/jpg/01/07/90/75/240_F_107907549_nGPdxVXnDgHqQ1lSJlYKidLLfWb6PuN2.jpg";

            let div0 = document.createElement("div");
            let p = document.createElement("p");
            p.innerText = "4.8 | 915 reviews";
            div0.append(p);

            let divimg = document.createElement("div");
            let img2 = document.createElement("img");
            img2.src = "https://cdn-icons-png.flaticon.com/128/7595/7595571.png";
            divimg.append(img2);

            div2.append(img1, div0, divimg);

            let hr = document.createElement("hr");

            div1.append(h4, div2);

            let div3 = document.createElement("div");
            div3.setAttribute("class", "row2");

            let dp = document.createElement("div");
            dp.innerText = "₹" + ele.discountPrice;

            let price = document.createElement("div");
            price.innerText = "₹" + ele.price;

            div3.append(dp, price);

            let div4 = document.createElement("div");
            div4.innerText = "You Save :₹ " + ele.yousave;
            div4.setAttribute("class", "row3");

            let btn = document.createElement("button");
            btn.className = "cart_button"
            btn.innerText = "ADD TO CART";
            btn.style.cursor = "pointer";
            btn.addEventListener("click", function () {
                addtoCart(ele)
                mainCartFun()
            });

            div1.append(div2, hr, div3, div4, btn);
            div.append(yousave,img, div1);

            address.append(div);
        }        
    });
}
        //  ------ Indivisual Product page

function onclick(ele) {

    localStorage.setItem("detailsOfProduct", JSON.stringify(ele));
    window.location.href = "../product1.html"
  }


            //  -----Getting Footer Elements ---------------

document.getElementById("footer_container").innerHTML = footer()