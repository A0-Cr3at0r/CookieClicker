import {Metric} from "./Metric"

export default class TotalSlices extends Metric {

    #total = 0;
    #name = "Total slices"

    recordSlices(amount) {
        this.#total += amount;
    }

    getValue() {
        return this.#total;
    }

    getName() {
        return this.#name;
    }

}
