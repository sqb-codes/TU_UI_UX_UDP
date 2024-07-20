// Event Handling - Event Binding
// window.addEventListener("load", function() {
//     console.log("HTML Loaded...");
//     document.getElementById("btn").addEventListener("click", welcome);
// });

window.addEventListener("load", initEvents);

function initEvents() {
    document.getElementById("btn").addEventListener("click", welcome);
}

function welcome() {
    console.log("Button Clicked...");
    var username = document.getElementById("box").value;
    console.log(username);
    document.getElementById("output").innerText = username;
}