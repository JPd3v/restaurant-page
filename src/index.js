import {createElements} from './functions/staticDomElements';
import { homePage } from "./pages/homepage";
import { createHeader } from "./pages/header";
import { createMenu } from "./pages/menu";
import {createAbout} from "./pages/about";
import {cleanDom} from "./functions/clean-dom";
import "./styles/menu.css"
import "./styles/home.css"
import "./styles/about.css"
import "./styles/header.css"

createElements()
createHeader()
homePage()

let buttonHome = document.querySelector(".home");
let buttonMenu = document.querySelector(".menu");
let buttonAbout = document.querySelector(".about");

buttonHome.addEventListener("click", () => {
    cleanDom()
    homePage()
})

buttonMenu.addEventListener("click", () => {
    cleanDom()
    createMenu()
 })

 buttonAbout.addEventListener("click", () => {
    cleanDom()
    createAbout()
 })
