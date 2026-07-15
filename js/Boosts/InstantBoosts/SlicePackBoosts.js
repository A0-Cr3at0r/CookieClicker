import InstantBoost  from "./InstantBoosts"

export default class SlicePackBoost extends InstantBoost {

    constructor(icon) {
        super("+100 slices", 100, icon, "add 100 slices");
    }

    apply(game){
        game.state.addSlices(100);
    }

}