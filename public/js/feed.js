document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("new-feeding-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      const feedingData = {
        type: document.getElementById("feeding-type").value,
        quantity_ml: document.getElementById("feeding-quantity").value,
      };

      // Send a POST request to the API endpoint
      const response = await fetch("/feed", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedingData),
      });

      if (response.ok) {
        // Refresh the page to show the new feeding record
        location.reload();
      } else {
        alert("Failed to add feeding record");
      }
    });
});
