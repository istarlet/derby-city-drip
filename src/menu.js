const jsonMenu = "src/menu.json";
let coffeeItems = document.querySelector("#coffeeItems");
let nonCoffeeItems = document.querySelector("#nonCoffeeItems");
let teaItems = document.querySelector("#teaItems");
let pastryItems = document.querySelector("#pastryItems");

fetch(jsonMenu)
  .then((response) => response.json())
  .then((data) => {
    const coffee = data.coffee
      .map((typeCoffee) => {
        return `
        <div>
        <div class="coffee-item">
            <h3>${typeCoffee.menuItem}</h3>
            <h3>${typeCoffee.price}</h3>
          </div>
          <p>${typeCoffee.description}</p>
          </div>
        `;
      })
      .join("");

    const noncoffee = data.noncoffee
      .map((typeNonCoffee) => {
        return `
        <div>
        <div class="noncoffee-item">
            <h3>${typeNonCoffee.menuItem}</h3>
            <h3>${typeNonCoffee.price}</h3>
          </div>
          <p>${typeNonCoffee.description}</p>
        </div>
        `;
      })
      .join("");

    const tea = data.tea
      .map((typeTea) => {
        return `
        <div>
        <div class="tea-item">
            <h3>${typeTea.menuItem}</h3>
            <h3>${typeTea.price}</h3>
          </div>
          <p>${typeTea.description}</p>
        </div>
        `;
      })
      .join("");

    const food = data.food
      .map((typePastry) => {
        return `
        <div>
        <div class="pastry-item">
            <h3>${typePastry.menuItem}</h3>
            <h3>${typePastry.price}</h3>
          </div>
          <p>${typePastry.description}</p>
        </div>
        `;
      })
      .join("");

    coffeeItems.insertAdjacentHTML("beforeend", coffee);
    nonCoffeeItems.insertAdjacentHTML("beforeend", noncoffee);
    teaItems.insertAdjacentHTML("beforeend", tea);
    pastryItems.insertAdjacentHTML("beforeend", food);
  });
