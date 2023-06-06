document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("register-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      const userData = {
        email: document.getElementById("register-email").value.trim(),
        password: document.getElementById("register-password").value.trim(),
      };

      if (!userData.email || !userData.password) {
        return;
      }

      // Send a POST request to the API endpoint
      const response = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        window.location.href = "/";
      } else {
        alert(
          "Please enter a valid email address and password length of 8 characters or more"
        );
      }
    });
});
