import { updateUI } from "./ui.js";

const totalSlices = 8; // Total number of slices in the pizza
const initialPizzaCount = 0; // Initial number of pizzas

let pizzaCount = initialPizzaCount;
let remainingSlices = totalSlices;

const pizzaButton = document.getElementById("pizzaButton");
const cookButton = document.getElementById("cookButton");

updateUI(pizzaCount, remainingSlices); // Initial UI update

pizzaButton.addEventListener("click", incrementPizzaCount);
cookButton.addEventListener("click", incrementPizzaCount);

function incrementPizzaCount() {
    if (remainingSlices > 1) {
        remainingSlices--;
    }
    else {
        remainingSlices = totalSlices;
        pizzaCount++;
    }

    updateUI(pizzaCount, remainingSlices); // Update the UI after incrementing
}


