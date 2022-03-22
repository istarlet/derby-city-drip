const form = document.getElementById("form");
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);

form.addEventListener('submit', function(e) {
    log.textContent = "Form Submitted!";
    e.preventDefault();
});