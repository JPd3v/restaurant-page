function createHeader() {
    let main = document.querySelector("header")


    let navbar = document.createElement("div")
    navbar.classList.add("navbar")

    let restaurantNamediv = document.createElement("div")
    restaurantNamediv.classList.add("logo")

    let restaurantName = document.createElement("p")
    restaurantName.textContent = "pizza nostra"

    let buttonsWrapper = document.createElement("div")
    buttonsWrapper.classList.add("buttons-wrapper")

    let buttonHome = document.createElement("button")
    buttonHome.classList.add("home")
    buttonHome.textContent = "Home"

    let buttonMenu = document.createElement("button")
    buttonMenu.classList.add("menu")
    buttonMenu.textContent = "Menu"

    let buttonAbout = document.createElement("button")

    buttonAbout.classList.add("about")
    buttonAbout.textContent = "About"

    main.appendChild(navbar)
    navbar.appendChild(restaurantNamediv)
    restaurantNamediv.appendChild(restaurantName)
    navbar.appendChild(buttonsWrapper)
    buttonsWrapper.appendChild(buttonHome)
    buttonsWrapper.appendChild(buttonMenu)
    buttonsWrapper.appendChild(buttonAbout)


}

export { createHeader }
