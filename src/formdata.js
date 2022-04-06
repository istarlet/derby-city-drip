let successMsg = document.getElementById("button");
const dcdForm = document.getElementById("dcdform");

// Hold the timeout
let timeout;

async function postFormDataAsJson({ url, formData }) {
  const plainFormData = Object.fromEntries(formData.entries());
  const formDataJsonString = JSON.stringify(plainFormData);

  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: formDataJsonString,
  };

  const response = await fetch(url, fetchOptions);

  // This is where I add things once form is submitted

  successMsg.classList.add("spin");
  successMsg.disabled = true;

  // successMsg.textContent = "Form is submitting";

  clearTimeout(timeout);

  timeout = setTimeout(function () {
    successMsg.classList.remove("spin");

    successMsg.textContent = "Form submission success!";
    dcdForm.reset();
  }, 4000);

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  return response.json();
}

async function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const url = form.action;

  try {
    const formData = new FormData(form);
    const responseData = await postFormDataAsJson({ url, formData });
    console.log({ responseData });
  } catch (error) {
    console.log(error);
  }
}

dcdForm.addEventListener("submit", handleFormSubmit);
