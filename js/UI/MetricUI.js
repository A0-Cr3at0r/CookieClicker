export default class MetricUI {

    #elements = new Map();

    constructor() {
        this.#elements.set("Total Clicks", document.getElementById("totalClicks"));
        this.#elements.set("Total Slices", document.getElementById("totalSlices"));
        this.#elements.set("Clicks Per Second", document.getElementById("clicksPerSecond"));
        this.#elements.set("Slices Per Second", document.getElementById("slicesPerSecond"));
        this.#elements.set("Pizzas Per Second", document.getElementById("pizzasPerSecond"));
    }

    render(metricManager) {
        for (const metric of metricManager.getMetrics()) {
            const element = this.#elements.get(metric.getName());

            if (element) {
                element.textContent = metric.getValue();
            }
        }
    }
}