function createElements() {
    let content = document.querySelector("#content")
    let header =document.createElement("header")
    let main = document.createElement("main")

    
    content.appendChild(header)
    content.appendChild(main)

}

export {createElements}