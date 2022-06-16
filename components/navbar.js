
            //      Navbar Components Function

let navbar = () => {

    return `
        <div class="announcement_bar">
            <a href="./offerPage.html">
                <b class="cursor">Big savings on your favourite boAt products. Grab now!</b>
            </a>
        </div>
                <!-- Sticky Navbar Header Container  -->
        <div id="header_container" class="flex_display">
            <div>
                <a href="./index.html"><img class="header_logo_image" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Boat-Logo_200x_200x_f9c79bf9-9c9a-477d-ab6a-7c889a1f2f70_170x.png?v=1646731229" alt=""></a>
            </div>
            <div>
                <a id="linklist_title_shop" href="#">Shop 
                    <svg class="rotation" focusable="false" width="7" height="10" viewBox="0 0 7 10">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.9394 5L0.469727 1.53033L1.53039 0.469666L6.06072 5L1.53039 9.53032L0.469727 8.46967L3.9394 5Z" fill="currentColor"></path>
                    </svg>
                </a>
                <a class="linklist_title_offerZone" href="./offerPage.html">Offer Zone</a>
                <a id="linklist_title_more" href="#">More
                    <svg class="rotation" focusable="false" width="7" height="10" viewBox="0 0 7 10">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.9394 5L0.469727 1.53033L1.53039 0.469666L6.06072 5L1.53039 9.53032L0.469727 8.46967L3.9394 5Z" fill="currentColor"></path>
                    </svg>
                </a>
            </div>
            <div id="header_icon_list">
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="">
                    <input id="search_one" type="search" placeholder="Search...">
                </div>
                <div class="user_details_icon flex_display">
                    <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/navigation-Icon4.png?v=1655206048" alt="userIcon">
                    <a src="./giftcardPage.html" class="cursor">
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/gift.png?v=1606314809" alt="giftIcon">
                    </a>
                    <img id="cart_icon" class="cursor" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/navigation-Icon-3.png?v=1655206047" alt="cartIcon">
                    <p id="cart_counter" class="cursor"></p>
                    </div>
            </div>
        </div>
        <div id="search_box_container">
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="">
                <input id="search_two" type="search" placeholder="Search...">
            </div>
        </div>
    `
}
            //  Popup Elements of Navbar link list title shop

let shopPopupElements = () => {
    return `
        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_540x.png?v=1612338251" alt="airdopes">
        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271_540x.png?v=1612338387" alt="rokerz">
        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/pro_gear_720x.jpg?v=1648546494" alt="smartwatches">
        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_540x.png?v=1612338356" alt="wiredbassheads">
        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_540x.png?v=1612338436" alt="stonespeakers">
        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_540x.png?v=1622452897" alt="aavante">
        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/bence-boros-253214-unsplash_720x.jpg?v=1648545875" alt="mobileaccessories">
        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/New-Category-Banners_with-Trebal_09_720x.png?v=1615033153" alt="trebel">
        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-limited-edition_540x.png?v=1612338560" alt="limitededition">
        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/MISFIT-shop_720x.png?v=1624859990" alt="misfit">
        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Immortal_category_Image_720x.png?v=1626094103" alt="immortalgaming">
    `
}
            //  Popup Elements of Navbar link list title More

            let morePopupElements = () => {
                return `
                    <ul>
                        <li><a href="./offerPage.html">Daily Deals</a></li>
                        <li><a href="#">Gifting</a></li>
                        <li><a href="#">Do What Floats Your boAt</a></li>
                        <li><a href="#">Meet the boAtheads</a></li>
                        <li><a href="#">Corporate Orders</a></li>
                        <li><a href="#">Deal Rs.100</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                `
            }

    //      Popup Behaviour for Navbar link list title shop

let linkShopPopup = () => {
        let timeId
        
        document.getElementById("linklist_title_shop").addEventListener("mouseover",()=>{
        
            forPopupDisplay()
        })
        document.getElementById("popup_link_list_shop").addEventListener("mouseover",()=>{
        
            let timeId = true
            forPopupHide(timeId)
            forPopupDisplay()
        })
        let forPopupDisplay = ()=>{
            let forDisplay = document.getElementById("popup_link_list_shop")
            forDisplay.style.display = "flex"
        }
        
        document.getElementById("linklist_title_shop").addEventListener("mouseleave",()=>{
        
            timeId = false
            forPopupHide(timeId)
        })
        document.getElementById("popup_link_list_shop").addEventListener("mouseleave",()=>{
        
            let forDisplay = document.getElementById("popup_link_list_shop")
            forDisplay.style.display = "none"
        })
        let forPopupHide = (id) => {
        
            if(id){
                clearTimeout(timeId)
            }
            else{        
                timeId = setTimeout(function(){
                    let forDisplay = document.getElementById("popup_link_list_shop")
                    forDisplay.style.display = "none"
                },500)
            }
        }
}
    //      Popup Behaviour for Navbar link list title More  -------

let linkMorePopup = () => {

    let timeId
    document.getElementById("linklist_title_more").addEventListener("mouseover",()=>{

        forPopupDisplay2()
    })
    document.getElementById("popup_link_list_more").addEventListener("mouseover",()=>{
    
        let timeId = true
        forPopupHide2(timeId)
        forPopupDisplay2()
    })
    let forPopupDisplay2 = ()=>{
        let forDisplay = document.getElementById("popup_link_list_more")
        forDisplay.style.display = "flex"
    }
    
    document.getElementById("linklist_title_more").addEventListener("mouseleave",()=>{
    
        timeId = false
        forPopupHide2(timeId)
    })
    document.getElementById("popup_link_list_more").addEventListener("mouseleave",()=>{
    
        let forDisplay = document.getElementById("popup_link_list_more")
        forDisplay.style.display = "none"
    })
    let forPopupHide2 = (id) => {
    
        if(id){
            clearTimeout(timeId)
        }
        else{        
            timeId = setTimeout(function(){
                let forDisplay = document.getElementById("popup_link_list_more")
                forDisplay.style.display = "none"
            },500)
        }
    }
}
//Popup cards reaction onClick for Navbar link list title shop

let shopPopupCards = () => {
    let category = document.getElementById("popup_link_list_shop").children

    for(let div of category){

        div.addEventListener("click",()=>{

            let productsData = JSON.parse(localStorage.getItem("productsData"))||[]
            let filteredData = productsData.filter((el) =>{
                if(el.category===div.alt){
                    return el;
                }
            })
            localStorage.setItem("categorisedData",JSON.stringify(filteredData))
            //window.location.href = "../productsPage.html"
        })
    }
}
        //      Cart Counter Function

let cartCounter = (counterText, count) => {

    let cartsData = JSON.parse(localStorage.getItem("cartsData"))
    if(cartsData){
        for(let count of cartsData){
            counter++
        }
        counterText.innerText = count
    }
    else{
        counterText.innerText = "0"
    }

}

            //  Input Searching Function

let SearchQuery = () => {
    let data = JSON.parse(localStorage.getItem("productsData"))
    let searchData = data.filter((el)=> {

    })

}



export { navbar, linkShopPopup, linkMorePopup, shopPopupCards, shopPopupElements, morePopupElements, cartCounter, SearchQuery };