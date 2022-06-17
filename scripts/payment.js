// cart

var cartIcon1 = document.querySelector('.btn-buy2')
var cart1 = document.querySelector('.cart2')
var closecart1 = document.querySelector('.return-pay-page')
// open second cart
// var totalprice = document.getElementsByClassName('total-price').value
var total = document.getElementsByClassName('total')
cartIcon1.onclick = () => {
    cart1.classList.add('active');
   
}
// cartIcon1.addEventListener("click",function(){
//     var data = {
//         totalprice:total.value,
        
//        }
//     //    console.log(totalprice)
//     //    displaydata(data);
//         console.log(data);
// })
// function displaydata(data){

//     var contain = document.getElementById('contain');
//     var totalprice = document.getElementsByClassName('total-price');
//     var box = document.createElement('div');
//     var p1 = document.createElement("p");
//     p1.innerText= data.totalprice;
//     box.append(p1);
//     contain.append(box);
// }

// close second cart
closecart1.onclick = () => {
    cart1.classList.remove('active');
}


function quantitychanged1(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <=0){
        input.value=1;
    }
    updatetotal1()
}

function updatetotal1(){
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
        // if price contain some Cents value
        total = Math.round(total * 100)/100

        document.getElementsByClassName('total-price1')[0].innerText='Rs'+ total;
    }
}
var quantityInput = document.getElementsByClassName('cart-quantity')
for(var i=0; i<quantityInput.length;i++){
    var input=quantityInput[i]   
    input.addEventListener('change', quantitychanged1);
}

{/* <div class="btn-buy2"><a href="#">PAY VIA CARD/OTHERS</a></div>  */}


// complete card payment
function quantitychanged2(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <=0){
        input.value=1;
    }
    updatetotal2()
}

function updatetotal2(){
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
        // if price contain some Cents value
        total = Math.round(total * 100)/100

        document.getElementsByClassName('total-price2')[0].innerText='Rs'+ total;
    }
}
var quantityInput = document.getElementsByClassName('cart-quantity')
for(var i=0; i<quantityInput.length;i++){
    var input=quantityInput[i]   
    input.addEventListener('change', quantitychanged2);
}



   

