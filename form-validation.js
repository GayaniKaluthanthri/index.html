const usernameField = document.getElementById("username");
usernameField.addEventListener("blur", () => {
  if (usernameField.value === "") {
    usernameField.classList.add("is-invalid");
    document.getElementById("username-error").textContent = "Please enter a username.";
  } else {
    usernameField.classList.remove("is-invalid");
    document.getElementById("username-error").textContent = "";
  }
});