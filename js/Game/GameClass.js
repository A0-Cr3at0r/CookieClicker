export class Game {
    #pizzaCount;
    #remainingSlices;
    #totalSlices; // Total number of slices in the pizza
    #totalClicks = 0;
    #slicesPerSeconds = 0;
    #clicksPerseconds = 0;
    #multiplicator = 1;


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
        this.#totalClicks++;
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

    addSlices(nSlices) {
        this.#pizzaCount += Math.floor(nSlices/this.#totalSlices);
        this.#remainingSlices = this.#totalSlices - nSlices%this.#totalSlices;
    }

    addMultiplicator(multiplicator) {
        this.#multiplicator *= multiplicator;        
    }

    #click() {
        if (this.#remainingSlices > 0) {
            this.#remainingSlices--;
        } else {
            this.#remainingSlices = this.#totalSlices;
            this.#pizzaCount++;
        }
        this.#totalClicks++;
    }
}
