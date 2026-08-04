function login() {

    alert("Function Working");

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    console.log(username, password);

    if (username === "shobha" && password === "0131") {

        alert("Login Success");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid username or password");

    }
}