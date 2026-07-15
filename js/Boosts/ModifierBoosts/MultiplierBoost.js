import ModifierBoost from "./ModifierBoost";

export default class MultiplierBoost extends ModifierBoost {
    #multiplier
    #duration

    constructor(name, price, icon, description, multiplier, duration) {
        super(name, price, icon, description);
        this.#multiplier = multiplier;
        this.#duration = duration;
    }

    modify(value){
        return value*this.#multiplier;
    } 

    finish(dt) {
        this.#duration -= dt;
        if (this.#duration <= 0) {
            return false;
        }

        return true;
    }

}