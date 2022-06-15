
            //      Navbar Components Function

let navbar = () => {

    return `
        <div class="announcement_bar">
        <b class="cursor">Big savings on your favourite boAt products. Grab now!</b>
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
            <div id="header_icon_list" class="flex_display">
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="">
                    <input type="search" placeholder="Search...">
                </div>
                <div class="user_details_icon flex_display">
                    <a class="cursor">
                        <svg focusable="false" width="18" height="17" viewBox="0 0 18 17">
                            <circle cx="9" cy="5" r="4" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></circle>
                            <path d="M1 17v0a4 4 0 014-4h8a4 4 0 014 4v0" fill="none" stroke="currentColor" stroke-width="2"></path>
                        </svg>
                    </a>
                    <a src="./giftcardPage.html" class="cursor">
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/gift.png?v=1606314809" alt="">
                    </a>
                    <a class="cursor">
                        <svg focusable="false" width="21" height="20" viewBox="0 0 21 20">
                            <path d="M0 1H4L5 11H17L19 4H8" fill="none" stroke="currentColor" stroke-width="2"></path>
                            <circle cx="6" cy="17" r="2" fill="none" stroke="currentColor" stroke-width="2"></circle>
                            <circle cx="16" cy="17" r="2" fill="none" stroke="currentColor" stroke-width="2"></circle>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div id="search_box_container">
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="">
                <input type="search" placeholder="Search...">
            </div>
        </div>
    `
}

    //      Showing Popup for Navbar link list title shop

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
    //      Showing Popup for Navbar link list title More  -------

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
            window.location.href = "../productsPage.html"
        })
    }
}
            //  Input Searching Function

let SearchQuery = () => {


}



export { navbar, linkShopPopup, linkMorePopup, shopPopupCards, SearchQuery };