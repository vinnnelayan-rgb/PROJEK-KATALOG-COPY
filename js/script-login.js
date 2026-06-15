const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const adminUsername = "admin";
    const adminPassword = "123";

    if (username === adminUsername && password === adminPassword) {

        localStorage.setItem("isLogin", "true");
        localStorage.setItem("username", username);

        loginMessage.style.color = "#22c55e";
        loginMessage.textContent = "Login berhasil...";

        setTimeout(() => {
            window.location.href = "admin-home.html";
        }, 1000);

    } else {

        loginMessage.style.color = "#ef4444";
        loginMessage.textContent = "Username atau password salah!";
    }
});