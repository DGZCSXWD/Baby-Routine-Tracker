document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("logout-btn")
    .addEventListener("click", async function (event) {
      event.preventDefault();

      // Send a POST request to the API endpoint
      const response = await fetch("/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        window.location.href = "/";
      } else {
        alert("Failed to log out");
      }
    });

  document
    .getElementById("home-btn")
    .addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "/";
    });
});
