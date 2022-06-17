let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closecart = document.querySelector('#close-cart');
            // -------------------   open-cart------------------------------
cartIcon.onclick = () => {
    cart.classList.add("active");
}

// ----------------------close-cart--------------------
closecart.onclick = () => {
    cart.classList.remove("active");
}


// cart workin js

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready);
}else{
    ready();
}


//  Making Function

function ready(){
    // remove Item From Cart
    var removecartButtons = document.getElementsByClassName('cart-remove')
    console.log(removecartButtons)
    for(var i=0; i<removecartButtons.length;i++){
        var button = removecartButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    // quantity changes
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for(var i=0; i<quantityInputs.length;i++){
        var input=quantityInputs[i]   
        input.addEventListener('change', quantitychanged);
    }

    // Add To Cart
    var addCart = document.getElementsByClassName('add-cart')
    for(var i=0; i<addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked)
    }
    // payment card button work 
    document.getElementsByClassName('done')[0].addEventListener('click', buybuttonclicked)
  

}
  // card button
  function buybuttonclicked(){
    alert('your order is placed')
    var cartcontent = document.getElementsByClassName('cart-content')[0]
    while(cartcontent.hasChildNodes()){
        cartcontent.removeChild(cartcontent.firstChild);
    }
    updatetotal()
  }
// remove Item from cart
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();
    updatetotal();
}

//  Quantity Changes
function quantitychanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <=0){
        input.value=1;
    }
    updatetotal()
}
// Add To Cart
function addCartClicked(event){
    var button = event.target
    var shopProducts= button.parentElement
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    // console.log(title,price, productImg);
    addProductToCart(title,price, productImg);
    updatetotal();
}
function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
        alert("Item already added to cart");  // needs changes since it can't read the title
        return;
        }
    }

 var cartBoxContent = `
<img src="${productImg}"
alt="" class="cart-img">
<div class="detail-box">
<div class="cart-product-title">${title}</div>
<div class="cart-price">${price}</div>
<input type="number" value="1" class="cart-quantity">
<!-- <p class="cart-quantity">2</p> -->
</div>

             <!------------- remove-cart ------------------->
<i class='bx bxs-trash-alt cart-remove'></i>`;
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantitychanged);
// quantityChanged
}




// Update Total

function updatetotal(){
    var cartcontent = document.getElementsByClassName('cart-content')[0]
    var cartBoxes = cartcontent.getElementsByClassName('cart-box');
    var total = 0;
    for(var i=0; i<cartBoxes.length;i++){
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName('cart-price')[0]
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace("Rs",""))
        var quantity = quantityElement.value;
        total = total + (price*quantity);
    }
        // if price contain some Cents value
        total = Math.round(total * 100)/100

        document.getElementsByClassName('total-price')[0].innerText='Rs'+ total;

}

// -------------------------payment button-----------------
// var retpage = document.getElementsByClassName('btn-buy') 
// retpage.onclick = () => {
//     cart.classList.add("active");
// }