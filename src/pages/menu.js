import mozzarellaImage from "../images/mozzarella.jpg"
import pepperoniPizzaImage from "../images/Pepperoni.jpg"
import mushroomPizzaImage from "../images/mushroom.jpg"
import meatPizzaImage from "../images/meat.jpg"

function createMenu(){
    let content = document.querySelector("main")
    
    let menu = document.createElement("div")
    menu.classList.add("menu-module")

    let pizza1 = document.createElement("div")
    let pizza1Header = document.createElement("h3")
    let pizza1Img = document.createElement("img")
    let pizza1Price = document.createElement("div")
    let pizza1Text = document.createElement("p")

    pizza1.classList.add("card")
    pizza1Header.textContent= "Mozzarella pizza"
    pizza1Img.src = mozzarellaImage
    pizza1Price.textContent= "$10"
    pizza1Text.textContent= "lorem ipsum dolor sit amet, consectetur adip"

    let pizza2 = document.createElement("div")
    let pizza2Header = document.createElement("h3")
    let pizza2Img = document.createElement("img")
    let pizza2Price = document.createElement("div")
    let pizza2Text = document.createElement("p")

    pizza2.classList.add("card")
    pizza2Header.textContent= "Pepperoni pizza"
    pizza2Img.src = pepperoniPizzaImage
    pizza2Price.textContent="$13"
    pizza2Text.textContent= "lorem ipsum dolor sit amet, consectetur adip"

    let pizza3 = document.createElement("div")
    let pizza3Header = document.createElement("h3")
    let pizza3Img = document.createElement("img")
    let pizza3Price = document.createElement("div")
    let pizza3Text = document.createElement("p")

    pizza3.classList.add("card")
    pizza3Header.textContent= "Mushroom pizza"
    pizza3Img.src = mushroomPizzaImage
    pizza3Price.textContent="$15"
    pizza3Text.textContent= "lorem ipsum dolor sit amet, consectetur adip"

    let pizza4 = document.createElement("div")
    let pizza4Header = document.createElement("h3")
    let pizza4Img = document.createElement("img")
    let pizza4Price = document.createElement("div")
    let pizza4Text = document.createElement("p")
    
    pizza4.classList.add("card")
    pizza4Header.textContent= "Meat pizza"
    pizza4Img.src = meatPizzaImage
    pizza4Price.textContent="$20"
    pizza4Text.textContent= "lorem ipsum dolor sit amet, consectetur adip"


    content.appendChild(menu)

    menu.appendChild(pizza1)
    pizza1.appendChild(pizza1Header)
    pizza1.appendChild(pizza1Img)
    pizza1.appendChild(pizza1Price)
    pizza1.appendChild(pizza1Text)

    menu.appendChild(pizza2)
    pizza2.appendChild(pizza2Header)
    pizza2.appendChild(pizza2Img)
    pizza2.appendChild(pizza2Price)
    pizza2.appendChild(pizza2Text)

    menu.appendChild(pizza3)
    pizza3.appendChild(pizza3Header)
    pizza3.appendChild(pizza3Img)
    pizza3.appendChild(pizza3Price)
    pizza3.appendChild(pizza3Text)

    menu.appendChild(pizza4)
    pizza4.appendChild(pizza4Header)
    pizza4.appendChild(pizza4Img)
    pizza4.appendChild(pizza4Price)
    pizza4.appendChild(pizza4Text)
}

export {createMenu}
