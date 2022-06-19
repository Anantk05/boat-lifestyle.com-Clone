function checkout(linksPackages){
    // <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<CHECKOUT AND CONTINE SHOPPING DIV>>>>>>>>>>>>>> -->
   return `<div id="checkout">
       <a id="continueShopping" href="${linksPackages.continueshopp}">Continue Shopping ></a>
       <button id="cash">  <a href="${linksPackages.payCash}">CASH ON DELIVERY/UPI</a></button>
       <button id="payViaCard"><a id="payupi" href="${linksPackages.payUpi}">PAY VIA CARD/OTHERS</a></button>
    </div>`
}
export default checkout