const imageSrc = "assets/images/PizzaGameWithoutBG.png";

export class PizzaUI {
    #pizzaCountElement;
    #sliceCountElement;

    #pizzaCanvas; 
    #ctx; // Canvas rendering context
    #pizzaImage; // Image object for the pizza

    constructor(pizzaCanvas) {
        this.#pizzaCountElement = document.getElementById("pizzaCount");
        this.#sliceCountElement = document.getElementById("sliceCount");

        this.#pizzaCanvas = pizzaCanvas;
        this.#ctx = this.#pizzaCanvas.getContext("2d");

        this.#pizzaImage = new Image();
        this.#pizzaImage.src = imageSrc;
    }

    update(game) {
        this.#pizzaCountElement.textContent = game.pizzaCount();
        this.#sliceCountElement.textContent = game.remainingSlices();
        this.#drawPizzaSlices(game);
    }

    #drawPizzaSlices(game) {
        const ctx = this.#ctx;
        const canvas = this.#pizzaCanvas;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const visibleSlices = game.totalSlices() - game.remainingSlices();

        const visibleAngle = (2 * Math.PI) * visibleSlices / game.totalSlices();
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(centerX, centerY) * 0.9;

        ctx.save();

        ctx.beginPath();

        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, -Math.PI / 2, visibleAngle - Math.PI / 2);

        ctx.closePath();

        ctx.clip();
        ctx.drawImage(this.#pizzaImage, 0, 0, canvas.width, canvas.height);

        ctx.restore();

    } 

    pizzaClickAnimation() {
        this.#pizzaCanvas.classList.remove("click-animation");
        void this.#pizzaCanvas.offsetWidth;
        this.#pizzaCanvas.classList.add("click-animation");
        
    }
}

