function functionInput(element) {
    console.log("element", element);
}
function removeButton(element) {
    console.log(element);
    element.style.display = "none";
element.remove();
}

function messageAlert() {
    window.alert("Bienvenidos a mi sitio web");
}

function changeText(element) {
    element.innerText = "logout";
    const h3 = document.querySelector(".none");
    console.log(h3);
    h3.innerText = "hola";
    h3.remove();
}