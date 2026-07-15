export default class BoostManager {
    #modifierBoosts;
    #activeBoosts;

    constructor() {
        this.#modifierBoosts = [];
        this.#activeBoosts = [];

    }

    addModifierBoost(boost) {
        this.#modifierBoosts.push(boost);
    }

    addActiveBoost(boost) {
        this.#activeBoosts.push(boost);
    }

    computeGain(baseValue) {
        let value = baseValue;

        for (const boost of this.#modifierBoosts) {
            value = boost.modify(value);
        }

        return value;
    }

    update(deltaTime) {
        const actions = [];

        for (const boost of this.#activeBoosts) {
            actions.push(...boost.update(deltaTime));

        }

        return actions;
    }

}