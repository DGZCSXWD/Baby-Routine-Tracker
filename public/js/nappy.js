document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("new-nappychange-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      const feedingData = {
        type: document.getElementById("nappy-type").value,
      };

      // Send a POST request to the API endpoint
      const response = await fetch("/nappy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedingData),
      });

      if (response.ok) {
        // Refresh the page to show the new feeding record
        location.reload();
      } else {
        alert("Failed to add nappy record");
      }
    });
});
