const pizza = new Image();
pizza.src = "assets/images/PizzaGameWithoutBG.png";

let pizzaCountElement = document.getElementById("pizzaCount");
let sliceCountElement = document.getElementById("sliceCount");

export function updateUI(pizzaCount, remainingSlices) {
    pizzaCountElement.textContent = pizzaCount;
    sliceCountElement.textContent = remainingSlices;
}