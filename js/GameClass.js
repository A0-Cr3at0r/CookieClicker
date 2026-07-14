export class Game {
    #pizzaCount;
    #remainingSlices;
    #totalSlices; // Total number of slices in the pizza

    constructor(pizzaCount = 0, totalSlices = 8) {
        this.#pizzaCount = pizzaCount;
        this.#totalSlices = totalSlices;
        this.#remainingSlices = totalSlices;
    }

    cook() {
        if (this.#remainingSlices > 0) {
            this.#remainingSlices--;
        } else {
            this.#remainingSlices = this.#totalSlices;
            this.#pizzaCount++;
        }
    }

    pizzaCount() { 
        return this.#pizzaCount;
    }

    remainingSlices() {
        return this.#remainingSlices;
    }

    totalSlices() {
        return this.#totalSlices;
    }
}
