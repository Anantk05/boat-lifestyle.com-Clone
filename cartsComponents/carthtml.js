async function showMycart(){
    return`
    <div id="cartdiv">
    
        <div id="yourcart">
            <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<TITLE SETION //YOUR CART OR X DIV>>>>>>>>>>>>>>>>>>>>> -->
            <div id="red_cart">
            <div class="inner_your_cart">
                <div id="redcart">Your Cart</div>
                <div id="countcart">(Cart)</div>
            </div>
            <div  class="inner_your_cart">
            <button id="xclose">X</button>
            </div>
        </div>
    <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<OFFER SECTION BELOW THE TITLE  paragraph/Headline>>>>>>>>>>>> -->

        <div id="headline">Free Shipping sitewide | Cash On Delivery available for order value upto ₹3000</div>
    
        <div id="productArea">
        
        </div>
        
        </div>
    </div>`
}
// <<<<<<<<<<<<<<<<<<<<LAST BUTTON M ANCHOR TAG M HOME KA href= DENA H >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export default showMycart;