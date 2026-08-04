
 function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log(username, password);
 
 if (username == "admin" && password == "123456") {
   window.location.href = "dashboard.html";
 } else {
   alert("Invalid username or password");
 }
}