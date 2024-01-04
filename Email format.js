const emailField = document.getElementById("email");
emailField.addEventListener("blur", () => {
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!validEmail.test(emailField.value)) {
    emailField.classList.add("is-invalid");
    document.getElementById("email-error").textContent = "Please enter a valid email address.";
  } else {
    emailField.classList.remove("is-invalid");
    document.getElementById("email-error").textContent = "";
  }
});