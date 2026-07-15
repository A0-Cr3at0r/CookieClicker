export default class MetricManager {

    #metrics = [];

    addMetric(metric) {
        this.#metrics.push(metric);
    }

    update(dt) {
        for (const metric of this.#metrics)
            metric.update(dt);
    }

    recordClick() {
        for(const metric of this.#metrics)
            if(metric.recordClick)
                metric.recordClick();
    }

    recordSlices() {
        for(const metric of this.#metrics)
            if(metric.record)
                metric.recordClick();
    }

}