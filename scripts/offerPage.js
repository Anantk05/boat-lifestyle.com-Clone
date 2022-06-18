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



// Import Navbar and footer HTML from Components
let productdetails = JSON.parse(localStorage.getItem("detailsOfProduct"));
var cartdata = JSON.parse(localStorage.getItem("cartsData")) || [];
let data = JSON.parse(localStorage.getItem("productsData"))
console.log(data)


function display(data) {
    document.getElementById("container").innerHTML = null;
  
    data.forEach(function (ele) {
  
      let div = document.createElement("div");
      div.setAttribute("class", "cards");
      div.style.cursor="pointer"
       div.addEventListener("click", function () {
         onclick(ele);
       });
  
       let yousave=document.createElement("div")
       yousave.innerText= "YOU SAVE"+ele.save
       yousave.setAttribute("class","yousave")
  
      let img = document.createElement("img");
      img.src = ele.image;
      img.setAttribute("id", "img");
     
  
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
      div0.append(h4,p);
  
      let divimg = document.createElement("div");
      let img2 = document.createElement("img");
      img2.src = "https://cdn-icons-png.flaticon.com/128/7595/7595571.png";
      divimg.append(img2);
  
      div2.append(img1, div0, divimg);
  
      let hr= document.createElement("h1");
  
      div1.append( div2);
  
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
      btn.innerText = "ADD TO CART";
      btn.style.cursor = "pointer";
      btn.addEventListener("click", function () {
        addtoCart(ele);
      });
  
      div1.append(div2, hr, div3, div4, btn);
      div.append(yousave,img, div1);
  
      document.getElementById("container").append(div);
      
    });
  }
  display(data);

  function addtoCart(ele) {
    cartdata.push(ele);
  
    localStorage.setItem("cartsData", JSON.stringify(cartdata));
  }
  
  function onclick(ele) {
     productdetails.push(ele)
    localStorage.setItem("detailsOfProduct", JSON.stringify(productdetails));
    window.location.href = "./product1.html";
  }

  var Featured = document.getElementById("sortby");

Featured.addEventListener("change", myfun2);

function myfun2() {
  if (Featured.value == "Featured") {
    display(data);
  } else {
    let filtered = data.filter(function (ele) {
      return ele.category == Featured.value;
    });
    display(filtered);
  }
}


