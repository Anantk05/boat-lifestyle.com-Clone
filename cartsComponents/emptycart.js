function emptycart(linktohtml){
    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Your cart empty or START SHOPPING DIV>>>>>>>>>>>>>>>>>>>>>>>>>>>> 

        return `<div id="empty_cart">
        <p id="content">Your cart is empty</p>
       
        <button id="startShoping"><a href="${linktohtml}"> START SHOPPING</a></button>
    </div>`
            
}
export default emptycart