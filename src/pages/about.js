import RestaurantImage from "../images/pizza restaurant.jpg"
import chefImage from "../images/pizza chef.jpg"

function createAbout(){
    let main = document.querySelector("main")

    let about = document.createElement("div")
    about.classList.add("about-module")

    let contactDiv= document.createElement("div");
    let address = document.createElement("div"); 
    let phoneNumber=document.createElement("div")
    
    contactDiv.classList.add("about-information")
    address.textContent="Visit our establishment: 123 Fake Street"
    phoneNumber.textContent="Call us: 012-345-6789"
    
    let pizzaRestaurantDiv = document.createElement("div")
    let pizzaRestaurantText = document.createElement("p")
    let pizzaRestaurantIMg = document.createElement("img")
    let chefImg = document.createElement("img")

    pizzaRestaurantDiv.classList.add("about-img-wrapper")
    pizzaRestaurantIMg.src = RestaurantImage
    chefImg.src = chefImage

    main.appendChild(about)
    about.appendChild(contactDiv)
    contactDiv.appendChild(phoneNumber)
    contactDiv.appendChild(address)
    about.appendChild(pizzaRestaurantDiv)
    pizzaRestaurantDiv.appendChild(pizzaRestaurantText)
    pizzaRestaurantDiv.appendChild(pizzaRestaurantIMg)
    pizzaRestaurantDiv.appendChild(chefImg)
}

export {createAbout}

   
   

