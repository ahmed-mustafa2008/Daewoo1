
var inputUserName2 = document.getElementById("inputUserName2");
var inputPassword2 = document.getElementById("inputPassword2");
var btnLogin = document.getElementById("btnLogin2");
var getUsername = localStorage.getItem("userName");
var getPassword = localStorage.getItem("Password");
var textWrong = document.querySelector(".textWrong");
var getGmail = localStorage.getItem("Gmail");
btnLogin.addEventListener('click', function (r) {
    r.preventDefault();
    console.log(456)
    var username = inputUserName2.value;
    var password = inputPassword2.value;
    if (username === "" || password === "") {
        alert("The data is wrong")
    } else {
        if ((getGmail && getGmail.trim() || getUsername == username && getPassword && getPassword.trim() == password)) {
            setTimeout(() => {
                window.location = "index.html"
            }, 1500)
        } else {
            textWrong.classList.remove("d-none");
            inputUserName2.classList.add("borderRed");
            inputPassword2.classList.add("borderRed");
            inputUserName2.addEventListener('keyup', function () {
                inputUserName2.classList.remove("borderRed");
                inputPassword2.classList.remove("borderRed");
            })
        }
    }
});
var ntAcc = document.querySelector(".ntAcc");
ntAcc.addEventListener('click' , function(e){
    e.preventDefault();
    window.location = "register.html"
})


