export {cleanDom}

function cleanDom() {
    let parent = document.querySelector("main");
    let child = parent.lastElementChild;
    while (child) {
        parent.removeChild(child);
        child = parent.lastElementChild;
    }
}