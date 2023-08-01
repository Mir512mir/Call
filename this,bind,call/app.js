const person = {
    name: 'Miroslaw',
    age: 36,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

person.greet(); // Output: Hello, my name is Miroslaw and I am 36 years old.

// Пример использования call:

const car1 = {
    marka: 'Skoda',
    model: 'Octavia',
    mileage: 'Mileage:256000',
    description() {
        console.log(`My car is ${this.marka} ${this.model} ${this.mileage} km`);
    }
};

const car2 = {
    marka: 'Skoda',
    model: 'Fabia',
    mileage: 'Mileage:123560'
};

car1.description.call(car2); // Output: My car is Skoda Fabia Mileage:123560 km

//Пример использования apply:

const name1 = {
    country: 'Canada',
    size: 9985000 + 'km2',

    name_(capital) {
        console.log(`Country ${this.country}, ${this.size}, ${capital}`);
    }
};

const name2 = {
    country: 'USA',
    size: 19985000 + 'km2',
};

name1.name_.apply(name2, ['Washington']);
//   //Пример использования bind:

const person1 = {
    name: 'John',
    age: 25,
    greet(city) {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I live in ${city}.`);
    }
};

const person2 = {
    name: 'Alice',
    age: 30
};

const greetFunc = person1.greet.bind(person2, 'New York');
greetFunc(); // Output: Hello, my name is Alice and I am 30 years old. I live in New York.

let serverURL = "http://65.109.13.139:9191";

let token = "";
token = localStorage.getItem("jwt")
