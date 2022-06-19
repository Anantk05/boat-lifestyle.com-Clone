function totalhtml(sum){
    return` <div id="shippingdiv">
        <div id="freediv">
            <h4>Shipping:</h4>
            <h4>FREE</h4>
        </div>
        <div id="totaldiv">
            <h4>Total:</h4>
            <h4 id="totalamount">Rs. ${sum}</h4>
        </div> 
    </div>`
}

export default totalhtml