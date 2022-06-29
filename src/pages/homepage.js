import pizzaImage from "../images/pizza-g384a22854_1920.jpg"

function homePage() {
    let main = document.querySelector("main")

    let homepage = document.createElement("div")
    homepage.classList.add("homepage")
    let titleDiv = document.createElement("div")
    titleDiv.classList.add("homepage-title")
    let title = document.createElement("h1")
    title.textContent = "pizza nostra"

    let slogan = document.createElement("div")
    slogan.textContent = "enjoy the best pizza in town"

    let pizzaDiv = document.createElement("div")
    pizzaDiv.classList.add("pizza-img-wrapper")
    let pizzaImg = document.createElement("img")
    pizzaImg.src = pizzaImage

    main.appendChild(homepage)
    homepage.appendChild(titleDiv)
    titleDiv.appendChild(title)
    titleDiv.appendChild(slogan)
    homepage.appendChild(pizzaDiv)
    pizzaDiv.appendChild(pizzaImg)
}

export { homePage }
