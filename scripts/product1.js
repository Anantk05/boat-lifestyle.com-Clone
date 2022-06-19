
import {navbar, linkShopPopup, linkMorePopup, shopPopupCards, shopPopupElements, morePopupElements, searchQuery } from "../components/navbar.js";
import footer from "../components/footer.js";
import { mainCartFun, addtoCart } from "../components/AddToCart.js";

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


//---increment function--//

let plus=document.getElementById("plus")
plus.addEventListener("click",incfun)
plus.style.cursor="pointer"

let qty=1;
function incfun(){
    qty++;
    document.getElementById("count").innerText=qty
}

//---decrement function --//

let minus=document.getElementById("minus")
minus.addEventListener("click",decfun)
minus.style.cursor="pointer"

function decfun(){
    qty--;
    if (qty<=1){
        qty=1
        document.getElementById("count").innerText = qty;
        minus.innerText="-"

    }
    else{
        document.getElementById("count").innerText = qty;
        minus.innerText = "-";
    }
}


//--add to cart functionality--//

let submit= document.getElementById("cartbutton")
submit.addEventListener("click",addtocart)

let image= document.getElementById("bigimg").src
let name=document.getElementById("name").innerText;
let category=document.getElementById("category").innerText
let offprice=document.getElementById("off_price").innerText
let save_price=document.getElementById("savedprice").innerText
let color=document.getElementById("color").innerText;
let original=document.getElementById("original").innerText 

let offprice1 ="";

for (var a=0;a<offprice.length;a++){
    offprice1=offprice1+offprice[a];
}
offprice1= +(offprice1)

var product_arr=[];


function addtocart(){

    let productobj = {
      image: image,
      name: name,
      category: category,
      discountPrice:offprice1,
      price:original,
      yousave:save_price,
      color:color,
      quantity:qty

    };
    if (product_arr != false) {
      var check = false;

      for (var i = 0; i < product_arr.length; i++) {
        if (ele.name == cartdata[i].name) {
          check = true;
          break;
        }
      }
      if (check) {
        alert("This product is already added..!");
      } else {
        product_arr.push(productobj);
        localStorage.setItem("cartsData", JSON.stringify(product_arr));
        alert("Product added successfully.");
      }
    }
    else{
    product_arr.push(productobj)
    localStorage.setItem("cartsData",JSON.stringify(product_arr))
    alert("Product added successfully.");
    }

}

//-- on scroll function....----//

let img1= document.getElementById("img1").src
let name1=document.getElementById("name").innerText
let offp=document.getElementById("off_price").innerText
let col=document.getElementById("color").innerText
window.onscroll = function () {myFunction()};

function myFunction(){
  if (document.documentElement.scrollTop > 500){
    document.getElementById("scroll").innerText = null;


    let div0=document.createElement("div")
    div0.setAttribute("id","div0")

    let div1= document.createElement("div")
    div1.setAttribute("id","div1")

    let img=document.createElement("img")
    img.src=img1

    let p=document.createElement("p")
    p.innerText=name1;

    let p1=document.createElement("p")
    p1.innerText="RS- "+offp+" /-"

    let p2=document.createElement("p")
    p2.innerText=col
    p2.setAttribute("class","p2")

    let btn=document.createElement("button")
    btn.innerText="ADD TO CART"
    btn.id="btn"

    div1.append(img,p,p1,p2,btn)

    div0.append(div1)
    document.getElementById("scroll").append(div0)

  }
  else{
    document.getElementById("scroll").innerText=null;
  }
}


///------on click  function to the images..---///

let image1=document.getElementById("img1")
image1.addEventListener("click", myfun1)
image1.style.cursor="pointer";

function myfun1(){
  document
    .getElementById("bigimg")
    .setAttribute(
      "src",
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_600x.png?v=1642405569"
    );

}


let image2 = document.getElementById("img2");
image2.addEventListener("click", myfun2);
image2.style.cursor = "pointer";


function myfun2() {
  document
    .getElementById("bigimg")
    .setAttribute(
      "src",
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ad131FIAD131TypeC_37968676-3283-4a82-aec8-7260bd2825f6_800x.jpg?v=1655462913"
    );
}

let image3= document.getElementById("img3");
image3.addEventListener("click",myfun3);
image3.style.cursor = "pointer";

function myfun3(){
  document
    .getElementById("bigimg")
    .setAttribute(
      "src",
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ad131FIAD131IWP_d27215b9-5b2c-43b4-b61d-72d9961456a2_800x.jpg?v=1655462913"
    );
}

let image4 = document.getElementById("img4");
image4.addEventListener("click", myfun4);
image4.style.cursor = "pointer";

function myfun4() {
  document
    .getElementById("bigimg")
    .setAttribute(
      "src",
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ad131FIAD1314XCharge_5388947b-853f-4955-a969-f74753c9bb37_800x.jpg?v=1655462913"
    );
}


let image5 = document.getElementById("img5");
image5.addEventListener("click", myfun5);
image5.style.cursor = "pointer";

function myfun5() {
  document
    .getElementById("bigimg")
    .setAttribute(
      "src",
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ad131FIAD131BV5.0_203c1651-4d8f-48d2-9ecf-fca05d5b53f8_800x.jpg?v=1655462913"
    );
}



//  -----Getting Footer Elements ---------------

document.getElementById("footer_container").innerHTML = footer()


