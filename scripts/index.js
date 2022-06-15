
// Importing Navbar and footer HTML from Components

import {navbar, linkShopPopup, linkMorePopup, shopPopupCards, SearchQuery} from "../components/navbar.js";

//      appending navbar components

document.getElementById("navbar_container").innerHTML = navbar()

//      Showing Popup for Navbar link list title shop

linkShopPopup()

//      Showing Popup for Navbar link list title more -------

linkMorePopup()

    //  Showing Popup cards reaction onClick for Navbar link list title shop

shopPopupCards()

            //  Input Searching Function

SearchQuery()

