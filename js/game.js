import { Game } from "./GameClass.js";
import {UI} from "./UIClass.js";

const totalSlices = 8; // Total number of slices in the pizza
const initialPizzaCount = 0; // Initial number of pizzas

const pizzaCanvas = document.getElementById("pizzaCanvas");

const game = new Game(initialPizzaCount, totalSlices);
const ui = new UI(pizzaCanvas);

const pizzaButton = document.getElementById("pizzaCanvas");
const cookButton = document.getElementById("cookButton");

ui.update(game); // Initial UI update

pizzaButton.addEventListener("click", click);
cookButton.addEventListener("click", click);

function click() {
    game.cook();
    ui.update(game);
    ui.pizzaClickAnimation();
}



