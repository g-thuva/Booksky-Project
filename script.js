//selecting popup box,popup overlay,button
var popupOverlay=document.querySelector(".popup-overlay")
var popupBox=document.querySelector(".popup-box")
var addPopupButton=document.getElementById("add-popup-button")

addPopupButton.addEventListener("click",function () {
    popupBox.style.display="block"
    popupOverlay.style.display="block"
})

//select cancel button
var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupBox.style.display="none"
    popupOverlay.style.display="none"
})

//select container,add-book,book-title-input,book-author-input,book-description-input
var container=document.querySelector(".container")
var addBook=document.getElementById("add-book")
var bookTitleInput=document.getElementById("book-title-input")
var bookAuthorInput=document.getElementById("book-author-input")
var bookDesInput=document.getElementById("book-description-input")

addBook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${bookTitleInput.value}</h2>
    <h5>${bookAuthorInput.value}</h5>
    <p>${bookDesInput.value}</p>
    <button onclick="deleteBook(event)">Delete</button>`
    container.append(div)
    popupBox.style.display="none"
    popupOverlay.style.display="none"
})

function deleteBook(event) {
    event.target.parentElement.remove()
}