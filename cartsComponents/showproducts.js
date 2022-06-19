
// <<<<<<<<<<<<<<<<<<<IMPORT EMPTY CART SHOW IT  >>>>>>>>>>>>>>>

import emptycart from "./emptycart.js";
import productListCreate from "./productlistcreation.js";

// <<<<<<<<<<<<<<<<<<<<<<<<<<CHECKING STORAGEDAT AND APPEND IT TO PRODUCTLIST>>>>>>>>>>>>>>>>>>>>>>>>
async function showProducts(localStorageItems,productlocation,linksPackages){
   //console.log(productlocation,emptycart())
   //console.log(productlocation)
    //   console.log(linksPackages)
//    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<IF STORAGEIT EMPTY>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    if(localStorageItems.length===0){
        productlocation.innerHTML=emptycart(linksPackages.linkForEmptyCart)
        
    }
    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<ELSE STORAGE IS NOT EMPTY>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
    else{
       
        productListCreate(localStorageItems,productlocation,linksPackages)
         
        
 
       
        
    }
}


// export default showProducts
export default showProducts