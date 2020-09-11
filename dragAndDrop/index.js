let imgBox = document.querySelector(".imgBox")
let whiteBox = document.getElementsByClassName("whiteBox")
let imgDiv = `<div class="imgBox" draggable="true" ></div>`
let divElement = document.createElement('div')
divElement.setAttribute('class', 'imgBox')
divElement.setAttribute('draggable', 'true')

imgBox.addEventListener("dragstart", (e) => {
    setTimeout(() => {
        e.target.parentNode.removeChild(e.target);
    },0);
});
imgBox.addEventListener("dragend", (e) => {
  

});

for (wBox of whiteBox) {

    wBox.addEventListener("dragover", (e) => {
        // console.log(`draged OVER`);
        e.preventDefault();

    })

    wBox.addEventListener("dragenter", (e) => {})
    wBox.addEventListener("dragleave", (e) => {})

    wBox.addEventListener("drop", (e) => {
        e.target.appendChild(divElement)
          
    })
}






