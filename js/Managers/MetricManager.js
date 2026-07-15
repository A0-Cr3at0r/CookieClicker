export default class MetricManager {

    #metrics = new Map();

    addMetric(metric) {
        this.#metrics.set(metric.getName(), metric);
    }

    update(deltaTime) {
        for (const metric of this.#metrics.values()) {
            metric.update(deltaTime);
        }
    }

    recordClick() {
        for (const metric of this.#metrics.values()) {
            metric.recordClick();
        }
    }

    recordSlice(amount = 1) {
        for (const metric of this.#metrics.values()) {
            metric.recordSlice(amount);
        }
    }

    recordPizza(amount = 1) {
        for (const metric of this.#metrics.values()) {
            metric.recordPizza(amount);
        }
    }

    getMetric(name) {
        return this.#metrics.get(name);
    }

    getMetrics() {
        return this.#metrics.values();
    }

}