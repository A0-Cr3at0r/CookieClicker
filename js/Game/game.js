import { Game } from "./GameClass.js";
import {PizzaUI} from "../UI/PizzaUI.js";
import { AudioManager } from "../Managers/AudioManager.js";

const totalSlices = 8; // Total number of slices in the pizza
const initialPizzaCount = 0; // Initial number of pizzas

const pizzaCanvas = document.getElementById("pizzaCanvas");

const game = new Game(initialPizzaCount, totalSlices);
const ui = new PizzaUI(pizzaCanvas);
const audioManager = new AudioManager();

const pizzaButton = document.getElementById("pizzaCanvas");
const cookButton = document.getElementById("cookButton");

ui.update(game); // Initial UI update
// audioManager.playBackgroundMusic(); // Start background music

pizzaButton.addEventListener("click", click);
cookButton.addEventListener("click", click);

function click() {
    game.cook();
    ui.update(game);
    ui.pizzaClickAnimation();
    if (game.remainingSlices() === 8) {
        audioManager.cook();
    } else {
        audioManager.click();
    }
}



