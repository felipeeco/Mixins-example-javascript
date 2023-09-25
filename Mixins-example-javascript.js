const Tracer = (SuperClass) => class extends SuperClass {
    trace(msg) {
        console.info(`Message: ${msg}`);    
    }
}

class Widget {
    draw() {
        return 'drawing';
    }
}

class NiceWidget extends Tracer(Widget) {
    drawingNicely() {
        this.trace('Invoking...');
        return `Nicely ${this.draw()}`;
    }
}

const widget = new NiceWidget();
const result = widget.drawingNicely();
console.log(result);