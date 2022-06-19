
import totalhtml from "./totalhtml.js"
import checkout from "./checkouthtml.js";


function productListCreate( localStorageItems,productlocation,linksPackages){
    // <<<<<<<<<<<<<<<<<<<declare a var to total of all item price>>>>>>>>>>>>>>>>>>>>>>>
    let sum=0;
    productlocation.innerHTML=""

    let showproductdiv=document.createElement("div")
    showproductdiv.setAttribute("id","showproductdiv")

    localStorageItems.forEach(function(el,index){

           //console.log(el.price)
           let sum2=0;
            let productdiv=document.createElement("div")
            productdiv.setAttribute("id","productdiv")

            let imgdiv=document.createElement("div")
            imgdiv.setAttribute("class","imgdiv")
            let img=document.createElement("img")
            img.src=el.image
            imgdiv.append(img)

            let nameAndprice=document.createElement("div")
            nameAndprice.setAttribute("id","nameAndprice")

            let name=document.createElement("h3")
            name.textContent=el.name;

            let allprice=document.createElement("div")
            allprice.setAttribute("class","allprice")
            let price=document.createElement("h5")
            let quanitity=el.quantity || 1
            let sumprice=+el.discountPrice
            sum+=sumprice*quanitity
            sum2+=sumprice*quanitity
            price.textContent="Rs. "+sum2 //><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<this will convert items into number and summ all>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            

            let discountprice=document.createElement("h5")
            discountprice.setAttribute("class","discount")
            discountprice.textContent="Rs. "+((+el.price)*quanitity)
            allprice.append(price,discountprice)
            
            let allbutton=document.createElement("div")
            allbutton.setAttribute("id","allbutton")
            let countsub=document.createElement("button")
            countsub.setAttribute("id","decrese")
            countsub.textContent="-"
            countsub.setAttribute("index",index)

            let count1=document.createElement("h4")
            count1.textContent=el.quantity || 1

            let countadd=document.createElement("button")
            countadd.setAttribute("id","increse")
            countadd.textContent="+"
            countadd.setAttribute("index",index)

            let color=document.createElement("button")
            color.setAttribute("class","color")
            color.textContent=el.color;

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<deletebutton >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            let deletee=document.createElement("div")
            deletee.setAttribute("id","delete")
            deletee.textContent="Delete";
           deletee.setAttribute("index",index)
           
           
            
          
                
              
           
            
            // console.log(removeButton())
            
                
            

            allbutton.append(countsub,count1,countadd,color,deletee)

            nameAndprice.append(name,allprice,allbutton)

            productdiv.append(imgdiv,nameAndprice)
             
            showproductdiv.append(productdiv)

            //console.log(showproductdiv)

           
    })
    

    productlocation.append(showproductdiv)
    productlocation.innerHTML+=totalhtml(sum)  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<append totalhtml and sum to prodctar4ea>>>>>>>>>>>>>>>>>>
    productlocation.innerHTML+=checkout(linksPackages)
  
   
    

}

// export default productListCreate
export default productListCreate


