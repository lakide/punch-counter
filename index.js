//document.getElementById("count-el").innerText = 5

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let img = document.getElementById("img")

let count = 0

function increment() {
  count += 1
  countEl.textContent = count
    normalImg();
  
}

function save() {
    let countStr = count + " + "


   saveEl.textContent += " " +  countStr
   count = 0
   countEl.textContent = count

    console.log(count)
    changeImg()
}
function changeImg() {
    img.src = "normal.jpg"
  
    img.src ="punched.jpg"
  

} 
function normalImg() {
  img.src = "normal.jpg"
  
}




