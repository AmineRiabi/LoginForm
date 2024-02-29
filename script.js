const container = document.getElementById("container");
const btnSignUp = document.getElementById("btn-Sign-Up");
const btnSignIn = document.getElementById("btn-Sign-In");

btnSignUp.onclick = function(){
    container.classList.add("active");
}
btnSignIn.onclick = function(){
    if(container.classList.contains("active")){
        container.classList.remove("active");
    }
}
const showPass = document.querySelectorAll(".fa-eye");
const hiddPass = document.querySelectorAll(".fa-eye-slash");
const inputPass = document.querySelectorAll(".input-pass");
hiddPass.forEach(function(Elm,index){
    Elm.onclick = function(){
        if(showPass[index].classList.contains("active")){
            if(inputPass[index].getAttribute("type") === "password"){
                inputPass[index].setAttribute("type","text");
            }
            showPass[index].classList.remove("active");
            this.classList.add("active");
        }
    }
});
showPass.forEach(function(Elm,index){
    Elm.onclick = function(){
        if(hiddPass[index].classList.contains("active")){
            if(inputPass[index].getAttribute("type") === "text"){
                inputPass[index].setAttribute("type","password");
            }
            hiddPass[index].classList.remove("active");
            this.classList.add("active");
        }
    }
});