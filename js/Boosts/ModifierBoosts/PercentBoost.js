import {ModifierBoost} from "./ModifierBoost";

export default class PercentBoost extends ModifierBoost {
    #percent;

    constructor(name, price, icon, description, percent) {
        super(name, price, icon, description);
        this.#percent = percent;
    }

    modify(value){
        return value*this.#percent/100;
    }

}