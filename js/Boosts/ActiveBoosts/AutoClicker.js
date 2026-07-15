import ActiveBoost  from "./ActiveBoosts"
import  BoostAction from "../BoostActions";

export default class AutoClickerBoost extends ActiveBoost {

    #clicksPerSecond;
    #timer;

    constructor(clicksPerSecond = 1) {
        this.#clicksPerSecond = clicksPerSecond;
        this.#timer = 0;
    }

    update(deltaTime) {

        this.#timer += deltaTime;
        const actions = [];

        while (this.#timer >= 1) {
            actions.push({
                type: BoostAction.AUTO_CLICK,
                count: this.#clicksPerSecond
            });

            this.#timer -= 1;
        }

        return actions;
    }

}