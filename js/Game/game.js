import { Game } from "./GameClass.js";

import { PizzaUI } from "../UI/PizzaUI.js";
import MetricUI from "../UI/MetricUI.js";

import { AudioManager } from "../Managers/AudioManager.js";
import MetricManager from "../Managers/MetricManager.js";

import TotalClicks from "../Metrics/TotalClicks.js";
import TotalSlices from "../Metrics/TotalSlices.js";
import ClicksPerSecond from "../Metrics/ClicksPerSecond.js";
import SlicesPerSecond from "../Metrics/SlicesPerSecond.js";
import PizzasPerSecond from "../Metrics/PizzasPerSecond.js";

const TOTAL_SLICES = 8;

const game = new Game(0, TOTAL_SLICES);

const pizzaCanvas = document.getElementById("pizzaCanvas");

const pizzaUI = new PizzaUI(pizzaCanvas);
const metricUI = new MetricUI();

const audioManager = new AudioManager();

const metricManager = new MetricManager();

metricManager.addMetric(new TotalClicks());
metricManager.addMetric(new TotalSlices());
metricManager.addMetric(new ClicksPerSecond());
metricManager.addMetric(new SlicesPerSecond());
metricManager.addMetric(new PizzasPerSecond());

pizzaUI.update(game);
metricUI.render(metricManager);

// audioManager.playBackgroundMusic();

const pizzaButton = document.getElementById("pizzaCanvas");
const cookButton = document.getElementById("cookButton");

pizzaButton.addEventListener("click", click);
cookButton.addEventListener("click", click);

function click() {
    const result = game.cook();
    metricManager.recordClick();

    if (result.sliceSold) {
        metricManager.recordSlice(result.slicesSold);
        audioManager.click();
    }

    if (result.pizzaCooked) {
        metricManager.recordPizza();
        audioManager.cook();
    }

    pizzaUI.update(game);
    pizzaUI.pizzaClickAnimation();

    metricUI.render(metricManager);
}

let previousTime = performance.now();
requestAnimationFrame(gameLoop);

function gameLoop(currentTime) {
    const deltaTime = (currentTime - previousTime) / 1000;
    previousTime = currentTime;
    metricManager.update(deltaTime);
    metricUI.render(metricManager);
    requestAnimationFrame(gameLoop);
}