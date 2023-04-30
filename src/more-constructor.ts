export {};

class Person {
    constructor (public name: string, protected age: number){}
}

const me = new Person("Tomoko", 89);

console.log(me);
