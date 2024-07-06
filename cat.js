



let catImg = document.querySelector(".cat-img")
let bulbImg = document.querySelector(".bulb-img")
let switchStatus = document.querySelector(".Switched")
let onBtn = document.querySelector(".btnon")
let offBtn = document.querySelector(".btnoff")

function switchoff(){
    bulbImg.src  = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    catImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    Switched.textContent = "Switched OFF"
    onBtn.style.backgroundColor = "green"
    offBtn.style.backgroundColor = "grey"
}
function switchon(){
    bulbImg.src  = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    catImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    Switched.textContent = "Switched ON"
    onBtn.style.backgroundColor = "grey"
    offBtn.style.backgroundColor = "red"

}