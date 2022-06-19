import {cartCounter} from "./navbar.js"

let mainCartFun = () => {

    let count = 0
    let counterText = document.getElementById("cart_counter")
    counterText.innerText = null
    cartCounter(counterText, count)
}

function addtoCart(ele) {
    let cartdata = JSON.parse(localStorage.getItem("cartsData"))||[]
    if (cartdata!=false){
      var check =false;
  
      for (var i=0;i<cartdata.length;i++){
        if(ele.name==cartdata[i].name){
          check=true;
          break;
  
        }
       
      }
      if (check){
        alert("This product is already added..!")
      }
      else{
        cartdata.push(ele);
        localStorage.setItem("cartsData", JSON.stringify(cartdata));
        alert("Product added successfully.")
      }
    }
    else{
  
    cartdata.push(ele);
  
    localStorage.setItem("cartsData", JSON.stringify(cartdata));
    alert("Product added successfully.");
    
    }
  }

            //   Delete from cart function


  export {mainCartFun,addtoCart};
