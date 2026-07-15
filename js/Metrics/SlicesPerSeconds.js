export default class SlicesPerSeconds extends Metric {

    #elapsed = 0;
    #slices = 0;
    #value = 0;
    #name = "Slices Per Seconds";

    recordSlice() {
        this.#slices++;
    }

    update(dt) {

        this.#elapsed += dt;

        if (this.#elapsed >= 1) {
            this.#value = this.#slices;
            this.#slices = 0;
            this.#elapsed = 0;
        }

    }

    getValue() {
        return this.#value;
    }

    getName() {
        return this.#name;
    }

}
