document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var username = usernameInput.value.trim(); 
    var password = passwordInput.value.trim(); 
    var decodedPassword = atob("ZmluZG1lMTIz"); 
    if (username === "admin" && password === decodedPassword) {
        alert("Login successful!"); 
       
        window.location.href = "LoginPage/loggedin.html"; 
    } else {
        if (username !== "admin") {
            alert("Invalid username. Please try again.");
          
            usernameInput.value = "";
            passwordInput.value = "";
        } else {
            alert("Invalid password. Please try again.");
            passwordInput.value = "";
        }
    }
});