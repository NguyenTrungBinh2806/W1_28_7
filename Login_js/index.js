// document.querySelector('.image').src="garena.png";
let image = document.querySelector('.image');
image.src = "garena.png";
let imageStyle = {
    marginTop: "5px",
    width: "130px",
    height: "40px",
}
Object.assign(image.style, imageStyle);

let title = document.querySelector('.title');
title.innerHTML = "Login";
let titleStyle ={
    fontSize: "30px",
    textAlign: "center",
    paddingTop: "50px"
}
Object.assign(title.style, titleStyle);

let username = document.querySelector(".username");
username.placeholder = "Garena UserName, Email or Phone";
let usernameStyle = {
    width:" 400px",
    height: "40px",
    paddingLeft: "10px"
}
Object.assign(username.style, usernameStyle);

let password = document.querySelector(".password");
password.placeholder = "Password";
let passwordStyle = {
    width:" 400px",
    height: "40px",
    paddingLeft: "10px"
}
Object.assign(password.style,passwordStyle);

let login = document.querySelector(".login");
login.innerHTML = "Login Now";
let loginStyle = {
    height:"40px",
    width: "400px",
    backgroundColor: "red",
    border: "none",
    color: "white"
}
Object.assign(login.style, loginStyle);

let or = document.querySelector(".or");
or.innerHTML = "______________ or ______________";
let orStyle = {
    width: "400px",
    color:	"#808080",
    paddingBottom: " 20px",
    margin: "20px auto",
    fontSize: "20px"
}
Object.assign(or.style, orStyle);

let register = document.querySelector(".register");
register.innerHTML ="Register A New Account";
let registerStyle = {
    height:"40px",
    width: "400px",
    backgroundColor: "#002200",
    border: "none",
    color: "white"
}
Object.assign(register.style, registerStyle);

let forgot = document.querySelector(".forgot");
forgot.innerHTML ="forgot password?";
let forgotStyle = {
    color: "blue",
    paddingTop: "30px",
    paddingBottom: "50px"
}
Object.assign(forgot.style, forgotStyle);
