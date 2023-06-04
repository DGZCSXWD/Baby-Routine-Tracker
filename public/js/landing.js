document.addEventListener("DOMContentLoaded", function () {
  const feedingBtn = document.getElementById("feeding-btn");
  const nappyChangeBtn = document.getElementById("nappy-change-btn");
  const loginBtn = document.getElementById("login-btn");
  const registerBtn = document.getElementById("register-btn");

  if (feedingBtn) {
    feedingBtn.addEventListener("click", function () {
      window.location.href = "/feed";
    });
  }

  if (nappyChangeBtn) {
    nappyChangeBtn.addEventListener("click", function () {
      window.location.href = "/nappy";
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      window.location.href = "/login";
    });
  }

  if (registerBtn) {
    registerBtn.addEventListener("click", function () {
      window.location.href = "/register";
    });
  }
});
