export default class ClicksPerSeconds extends Metric {

    #elapsed = 0;
    #clicks = 0;
    #value = 0;
    #name = "Clicks Per Seconds";

    recordClick() {
        this.#clicks++;
    }

    update(dt) {

        this.#elapsed += dt;

        if (this.#elapsed >= 1) {

            this.#value = this.#clicks;
            this.#clicks = 0;
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
