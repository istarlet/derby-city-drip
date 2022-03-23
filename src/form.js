const form = document.getElementById("form");
const log = document.getElementById("log");

form.addEventListener("submit", (e) => {
  log.textContent = "Form submitted successfully!";
  form.reset();
  e.preventDefault();
});
