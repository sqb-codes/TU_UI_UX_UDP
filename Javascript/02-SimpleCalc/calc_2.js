window.addEventListener("load", initEvents);

var fnum;
var snum;

function initEvents() {
    fnum = document.querySelector("#box_1");
    snum = document.querySelector("#box_2");
    // document.querySelector(".btn");
    var btnArray = document.querySelectorAll(".btn");
    // for(var i = 0; i < btnArray.length; i++) {
    //     btnArray[i].addEventListener("click", calc);
    // }

    for (var item of btnArray) {
        // console.log(item);
        item.addEventListener("click", calc);
    }
}

function calc() {
    // console.log(this);
    var opr = this.innerText;
    if(opr == "+") {
        var result = parseInt(fnum.value) + parseInt(snum.value);
    }
    else if(opr == "-") {
        var result = parseInt(fnum.value) - parseInt(snum.value);
    }
    else if(opr == "/") {
        var result = parseInt(fnum.value) / parseInt(snum.value);
    }
    else if(opr == "*") {
        var result = parseInt(fnum.value) * parseInt(snum.value);
    }
    else {
        var result = "Please Enter a Number";
    }
    
    document.querySelector("#result").innerText = result;
}
