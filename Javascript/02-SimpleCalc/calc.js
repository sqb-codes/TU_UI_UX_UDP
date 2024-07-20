window.addEventListener("load", initEvents);

var fnum;
var snum;

function initEvents() {
    // Global variable by default
    // fnum = document.querySelector("#box_1");
    // snum = document.querySelector("#box_2");

    // Local variable after using var keyword
    
    fnum = document.querySelector("#box_1");
    snum = document.querySelector("#box_2");
    document.querySelector("#btn-1").addEventListener("click", add);
    document.querySelector("#btn-2").addEventListener("click", sub);
    document.querySelector("#btn-3").addEventListener("click", div);
    document.querySelector("#btn-4").addEventListener("click", mul);
}

function add() {
    var result = parseInt(fnum.value) + parseInt(snum.value);
    document.querySelector("#result").innerText = result;
}

function sub() {
    var result = parseInt(fnum.value) - parseInt(snum.value);
    document.querySelector("#result").innerText = result;
}

function div() {
    var result = parseInt(fnum.value) / parseInt(snum.value);
    document.querySelector("#result").innerText = result;
}

function mul() {
    var result = parseInt(fnum.value) * parseInt(snum.value);
    document.querySelector("#result").innerText = result;
}