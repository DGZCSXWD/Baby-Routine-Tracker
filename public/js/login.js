document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("login-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      const userData = {
        email: document.getElementById("email").value.trim(),
        password: document.getElementById("password").value.trim(),
      };

      if (!userData.email || !userData.password) {
        return;
      }

      // Send a POST request to the API endpoint
      const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        window.location.href = "/";
      } else {
        alert("Failed to log in");
      }
    });
});
