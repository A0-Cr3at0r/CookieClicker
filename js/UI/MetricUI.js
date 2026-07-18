export default class MetricUI {


    #elements = new Map();



    constructor() {

        this.#elements.set(
            "Total Clicks",
            document.getElementById("totalClicks")
        );


        this.#elements.set(
            "Total Slices",
            document.getElementById("totalSlices")
        );


        this.#elements.set(
            "Clicks Per Second",
            document.getElementById("clicksPerSecond")
        );


        this.#elements.set(
            "Slices Per Second",
            document.getElementById("slicesPerSecond")
        );


        this.#elements.set(
            "Pizzas Per Second",
            document.getElementById("pizzasPerSecond")
        );


        this.#elements.set(
            "Slice Multiplier",
            document.getElementById("sliceMultiplier")
        );


        this.#elements.set(
            "Money Multiplier",
            document.getElementById("moneyMultiplier")
        );

    }




    render(metrics) {


        for(
            const [name,value]
            of Object.entries(metrics)
        ) {


            const element =
                this.#elements.get(name);



            if(element) {


                if(
                    name.includes("Multiplier")
                ) {

                    element.textContent =
                        "x" + value;

                }

                else {

                    element.textContent =
                        this.#formatNumber(value);

                }

            }

        }

    }




    #formatNumber(value) {


        if(value >= 1_000_000) {

            return (
                value / 1_000_000
            ).toFixed(2) + "M";

        }



        if(value >= 1_000) {

            return (
                value / 1_000
            ).toFixed(1) + "K";

        }


        return Number(value).toFixed(
            value % 1 === 0 ? 0 : 1
        );

    }


}