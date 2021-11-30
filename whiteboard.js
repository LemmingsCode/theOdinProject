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

const user = {
  name: 'John',
  age: 30,
  'likes birds': true, // multiword property name must be quoted
};

user.isAdmin = true;

// console.log(user);

delete user.isAdmin;

console.log(user);

const { name, age, ...test } = {
  name: 'John',
  age: 30,
  'likes birds': true, // multiword property name must be quoted
};

console.log(test);
