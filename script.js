let startMenuImg = document.getElementById("startMenuImg")
let startMenu = document.getElementById("startMenu")

let showOrHideStartMenu = () => {
    if (startMenuImg.hidden) {
        startMenuImg.hidden = !startMenuImg.hidden;
        startMenu.className = "showStartMenu"
    }
    else {
        startMenuImg.hidden = !startMenuImg.hidden;
        startMenu.className = "hideStartMenu"
    }
}