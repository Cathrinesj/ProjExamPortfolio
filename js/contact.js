const form = document.querySelector("form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");
const messageSuccess = document.querySelector(".message-success");
const button = document.querySelector("button");

function validateForm(event) {
  event.preventDefault();
  if (checkLength(name.value, 6) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(subject.value, 16) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkLength(message.value, 26) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
  if (
    checkLength(name.value, 6) &&
    validateEmail(email.value) &&
    checkLength(subject.value, 16) &&
    checkLength(message.value, 26) === true
  ) {
    messageSuccess.innerHTML =
      "Thank you for your message, I will get back to you shortly!";
    form.reset();
  } else {
    messageSuccess.innerHTML = "";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
