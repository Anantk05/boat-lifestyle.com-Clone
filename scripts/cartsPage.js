
// <<<<<<<<<<<<<<<<<<DATA TO IMPORT AND EXPORT>>>>>>>>>>>>>>>>>>>>

let cartbutton="cart_icon"  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<click button for cart visible>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let dataStorage="cartsData"   //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<localstorage key name>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let linkForEmptyCart="../index.html"  
let continueshopp="../index.html"//<<<<<<<<<<<<<<<<<<<<these are checkout links>>>>>>>>>>>>>>>>>
let payCash="../paymentsPage.html"
let payUpi="../paymentsPage.html"

// <<<<<<<<<<<<<links package creation>>>>>>>>>>>>
let linksPackages = {linkForEmptyCart,continueshopp,payCash,payUpi}

// <<<<<<<<<<<Importing all function>>>>>>>>>>>>>>>>>>>>>>>>>

import showMycart from "../cartsComponents/carthtml.js"
import  showProducts from "../cartsComponents/showproducts.js"
import { mainCartFun } from "../components/AddToCart.js"
// import products from "../cart/Temp/data.js"    //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<DELETE THIS THIS IS TEMPRARY DATA>>>>>>>>>>>>>>>>>>>>>>>>>>


// <<<<<<<<<<<<<<<<<CLICK BUTTON TO SHOW CART>>>>>>>>>>>>>>>>>
let showcart=document.getElementById(cartbutton)
showcart.addEventListener("click",()=>{
    
    showcartfunc()                    
})
function showcartfunc(){

showMycart().then((bodydata)=>{
    // <<<<<<<<<<<<<<<<<<<<<<<<GET LOCALSTORAGE DATA FOR CHECK IT IT EMPTY OR FULL>>>>>>>>>>>>>>>>>>>>>>
    let localStorageItems=JSON.parse(localStorage.getItem(dataStorage))||[]  

    
    // <<<<<<<<<<<<show cart data to body in id show >>>>>>>>>>>>>>>>>>>>
    document.getElementById("show").innerHTML=bodydata

    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<THIS FUNCTION WILL CHECK AND SHOW THE STORAGE DATA>>>>>>>>>>>>>>>>>>>>>>
    let productlocation=document.getElementById("productArea")
  //  console.log(productlocation)
  showProducts(localStorageItems,productlocation,linksPackages)
   

          //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<for delete a product>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
           let testMe =  document.querySelectorAll('#delete')

           for(let el of testMe){
            el.addEventListener('click',removebutton)
           }
     
           //><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<for quanitity increse>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
           let increse=document.querySelectorAll("#increse")
           for(let inc of increse){
            inc.addEventListener("click",incresequanity)
           }


            //><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<for quanitity decrese>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
            let decrese=document.querySelectorAll("#decrese")
            for(let dec of decrese){
             dec.addEventListener("click",decresequanity)
            }
        
    
// <<<--------------THIS FUNCTION WILL SHOW CART AFTER CLICKING ON CART BUTTON----->>
    
        
        let getingcart=document.getElementById("cartdiv")
        
        setTimeout(()=>{
            getingcart.style.display="flex"
            getingcart.style.width="400px"
        },100)
            
        let close=document.getElementById("xclose")
        close.addEventListener("click",closefunc)

        // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<THIS FUNCTION WILL CLOSE THE CART AFTER CLICKING ON CART BUTTON>
        function closefunc(){
            let getingcart=document.getElementById("cartdiv")
            getingcart.style.width="0px"
            setTimeout(() => {
                getingcart.style.display="none"
            },300);
    
    }
  
    
})}

function incresequanity(){
        let storageItems=JSON.parse(localStorage.getItem(dataStorage))  
        let index2=(this.getAttribute("index"))
        let valuecount=(storageItems[index2].quantity)
       if(storageItems[index2].quantity===undefined ||storageItems[index2].quantity === 0){
        storageItems[index2].quantity=1
       }
       else{
        storageItems[index2].quantity++
       }

       localStorage.setItem(dataStorage,JSON.stringify(storageItems))

    // // window.location.reload()
        let productlocation=document.getElementById("productArea")
        showProducts(storageItems,productlocation,linksPackages)

        let testMe =  document.querySelectorAll('#delete')

           for(let el of testMe){
            el.addEventListener('click',removebutton)
           }

        let increse=document.querySelectorAll("#increse")
        for(let inc of increse){
         inc.addEventListener("click",incresequanity)
       }      


       let decrese=document.querySelectorAll("#decrese")
       for(let dec of decrese){
        dec.addEventListener("click",decresequanity)
       }

       
}



function decresequanity(){
    let storageItems=JSON.parse(localStorage.getItem(dataStorage))  
    let index2=(this.getAttribute("index"))
   
   if(storageItems[index2].quantity===undefined || storageItems[index2].quantity === 0){
     storageItems[index2].quantity=1
   }
   else{
    storageItems[index2].quantity--
   }

   //console.log( storageItems[index2].quantity)
   localStorage.setItem(dataStorage,JSON.stringify(storageItems))

// // window.location.reload()
    let productlocation=document.getElementById("productArea")
    showProducts(storageItems,productlocation,linksPackages)

    let testMe =  document.querySelectorAll('#delete')
       for(let el of testMe){
        el.addEventListener('click',removebutton)
       }

    let increse=document.querySelectorAll("#increse")
    for(let inc of increse){
     inc.addEventListener("click",incresequanity)
   }

     
   let decrese=document.querySelectorAll("#decrese")
   for(let dec of decrese){
    dec.addEventListener("click",decresequanity)
   }

}
 function removebutton(){
        mainCartFun()

        let storageItems=JSON.parse(localStorage.getItem(dataStorage))  
        let index1=(this.getAttribute("index"))
        storageItems.splice(index1,1)
        localStorage.setItem(dataStorage,JSON.stringify(storageItems))

        let productlocation=document.getElementById("productArea")
        showProducts(storageItems,productlocation,linksPackages)

        let testMe =  document.querySelectorAll('#delete')

           for(let el of testMe){
            el.addEventListener('click',removebutton)
           }

           
        let increse=document.querySelectorAll("#increse")
        for(let inc of increse){
         inc.addEventListener("click",incresequanity)
       }

       let decrese=document.querySelectorAll("#decrese")
       for(let dec of decrese){
        dec.addEventListener("click",decresequanity)
       }

 }




    
    