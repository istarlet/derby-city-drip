var form = document.querySelector("form");
var data = new FormData(form);

document.addEventListener("submit", function (event) {
  event.preventDefault();

  fetch("/", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(new FormData(event.target))),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.warn(error);
    });
});

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   fetch("/", {
//     method: "POST",
//     body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then(function (response) {
//       if (response.ok) {
//         return response.json();
//       }
//       return Promise.reject(response);
//     })
//     .then(function (data) {
//       console.log(data);
//     })
//     .catch(function (error) {
//       console.warn(error);
//     });
// });

//   e.preventDefault();

//   fetch("/", {
//     method: "POST",
//     body: new FormData(e.target),
//   })
//     .then((res) => {
//       if (response.ok) {
//         return res.json();
//       }
//       return Promise.reject(response);
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch(function (error) {
//       console.warn(error);
//     });
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   async () => {
//     const res = await fetch("/", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify("test"),
//     });
//     const message = await res.json().then((text) => {
//       return text;
//     });

//     console.log(message);
//   };
//   log.textContent = "Form submitted successfully!";
//   form.reset();
// });
