const jsonMenu = "src/menu.json";
let coffeeItems = document.querySelector("#coffeeItems");
let nonCoffeeItems = document.querySelector("#nonCoffeeItems");
let teaItems = document.querySelector("#teaItems");
let pastryItems = document.querySelector("#pastryItems");

fetch(jsonMenu)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.coffee);
    const coffee = data.coffee
      .map((coffeeType) => {
        return `
        <div>
        <div class="coffee-item">
            <h3>${coffeeType.menuItem}</h3>
            <h3>${coffeeType.price}</h3>
          </div>
          <p>${coffeeType.description}</p>
          </div>
        `;
      })
      .join("");

    const noncoffee = data.noncoffee
      .map((nonCoffeeType) => {
        return `
        <div>
        <div class="noncoffee-item">
            <h3>${nonCoffeeType.menuItem}</h3>
            <h3>${nonCoffeeType.price}</h3>
          </div>
          <p>${nonCoffeeType.description}</p>
        </div>
        `;
      })
      .join("");

    const tea = data.tea
      .map((teaType) => {
        return `
        <div>
        <div class="tea-item">
            <h3>${teaType.menuItem}</h3>
            <h3>${teaType.price}</h3>
          </div>
          <p>${teaType.description}</p>
        </div>
        `;
      })
      .join("");

    const food = data.food
      .map((pastryType) => {
        return `
        <div>
        <div class="pastry-item">
            <h3>${pastryType.menuItem}</h3>
            <h3>${pastryType.price}</h3>
          </div>
          <p>${pastryType.description}</p>
        </div>
        `;
      })
      .join("");

    console.log(coffee);
    coffeeItems.insertAdjacentHTML("beforeend", coffee);

    console.log(noncoffee);
    nonCoffeeItems.insertAdjacentHTML("beforeend", noncoffee);

    console.log(tea);
    teaItems.insertAdjacentHTML("beforeend", tea);

    console.log(food);
    pastryItems.insertAdjacentHTML("beforeend", food);
  });
