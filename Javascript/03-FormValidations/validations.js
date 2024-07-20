window.addEventListener("load", initEvents);

function initEvents() {
    var username = document.querySelector("#username");
    username.addEventListener("blur", validateName);
    // username.addEventListener("change", validateName);

    var usermail = document.querySelector("#usermail");
    usermail.addEventListener("keyup", validateEmail);

    var userPwd = document.querySelector("#userpwd");
    userPwd.addEventListener("keyup", validatePassword);

    var confPwd = document.querySelector("#confpwd");
    confPwd.addEventListener("change", confirmPassword);

    var reg_form = document.querySelector("#reg-form");
    // reg_form.addEventListener("submit", validateForm);
    reg_form.addEventListener("submit", function(event) {
        event.preventDefault();
        validateForm();
    });

}

function validateName() {
    // alert("Enter username");
    var span = document.querySelector("#userErr");
    if(this.value == "") {
        span.innerText = "Please enter your name";
        this.style.border = "1px solid red";
    }
    else {
        span.innerText = "";
        this.style.border = "1px solid green";
    }
}

function validateEmail() {
    const emailRegEx=  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegEx.test(this.value)) {
        document.querySelector("#mailErr").innerText = "Invalid Email ID";
    }
    else {
        document.querySelector("#mailErr").innerText = "Valid Email ID";
    }
}

function validatePassword() {
    var password = this.value;
    var span = document.querySelector("#pwdErr")
    if(password == "") {
        span.innerText = "Please Enter the Password"
    } else if(password.length < 5) {
        span.innerText = "Weak Password";
    } else if(password.length >=5 && password.length < 8) {
        span.innerText = "Average Password";
    } else if(password.length >= 8) {
        span.innerText = "Strong Password";
    }
}

function confirmPassword() {
    var userpwd = document.querySelector("#userpwd").value;
    var confPwd = this.value;
    if(userpwd == confPwd) {
        document.querySelector("#confErr").innerText = "Password Match...";
    }
    else {
        document.querySelector("#confErr").innerText = "Password do not Match...";
    }
}

function validateForm() {
    let dob = document.querySelector("#userdob").value;
    const today = new Date();
    const dobDate = new Date(dob);
    const age = today.getFullYear() - dobDate.getFullYear();
    console.log("Age is :",age);
    if(!age || age < 18) {
        document.querySelector("#dobErr").innerText = "Must be greater than 18";
    } else {
        document.querySelector("#dobErr").innerText = "Verified User";
    }
}