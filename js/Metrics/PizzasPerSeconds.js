export default class PizzasPerSeconds extends Metric {

    #elapsed = 0;
    #pizzas = 0;
    #value = 0;
    #name = "Pizzas Per Seconds";

    recordPizza() {
        this.#pizzas++;
    }

    update(dt) {
        this.#elapsed += dt;

        if (this.#elapsed >= 1) {
            this.#value = this.#pizzas;
            this.#pizzas = 0;
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
