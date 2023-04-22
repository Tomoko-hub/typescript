export {};

class Person {
    name: String; 
    age: Number;

    constructor(name:String, age:Number){
        this.name=name;
        this.age=age;
    }

    profile():string{
        return `name:${this.name}, age:${this.age}`;
    }
}

let taro = new Person('Tomoko', 25);
console.log(taro);
console.log(taro.profile());

class Book {
    title: String;
    author: String;
    type: String;
    year: Number;

    constructor(title: String, author: String, type: String, year: Number){
        this.title=title;
        this.author=author;
        this.type=type;
        this.year=year;
    }

    profile():string{
        return `title:${this.title}, author:${this.author}, type:${this.type}, year:${this.year}`;
    }
}

let book1 = new Book("ねないこだれだ", "Keiko Sena", "Child Book", 1969);
console.log(book1);

class User {
    name: String;
    email: String;
    password: String;

    constructor(name: String, email: String, password: String){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    profile():string {
        return `name: ${this.name}, email: ${this.email}, password: ${this.password}`
    }
}
let userA = new User("Tomoko Uehara", "tomoco@email.com", "password")
console.log(userA);