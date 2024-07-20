window.addEventListener("load", initEvents);

var fnum;
var snum;

function initEvents() {
    fnum = document.querySelector("#box_1");
    snum = document.querySelector("#box_2");
    var btnArray = document.querySelectorAll(".btn");

    for (var item of btnArray) {
        item.addEventListener("click", calc);
    }
}

function calc() {
    var opr = this.innerText;
    var expression = fnum.value + opr + snum.value;
    var result = eval(expression);
    document.querySelector("#result").innerText = result;
}
