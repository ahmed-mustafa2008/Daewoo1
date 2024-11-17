var inputUserName = document.getElementById("inputUserName");
var inputGmail = document.getElementById("inputGmail");
var inputPassword = document.getElementById("inputPassword");
var btnRegister = document.getElementById("btnRegister");
btnRegister.addEventListener('click' , function(r){
    r.preventDefault();
    var username = inputUserName.value;
    var gmail = inputGmail.value;
    var password = inputPassword.value;
    if(username === "" || gmail === "" || password === ""){
        alert("Please fill the data");
    }else{
        localStorage.setItem("userName" , username);
        localStorage.setItem("Gmail" , gmail);
        localStorage.setItem("Password" , password);
        setTimeout(function(){
            window.location = "login.html"
        });
    };
});
var ysAcc = document.querySelector(".ysAcc");
ysAcc.addEventListener('click' , function(e){
    e.preventDefault();
    window.location = "login.html"
})





