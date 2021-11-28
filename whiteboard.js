// I'm just going to log the random exercises that I do on Youtube here.

// https://www.youtube.com/watch?v=I2CdrKlPdAY
// Using the 'new' Keyword in JavaScript

log = console.log;

function Car(make, model) {
        log(this);
        const props = {
                make,
                model,
        };
        const info = function () {
                return this.props;
        };
}

const c1 = Car('Honda', 'Accord');
const c2 = new Car('Tesla', 'Model 3');
