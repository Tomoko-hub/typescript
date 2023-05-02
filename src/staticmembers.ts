export {};

class Me {
    static isProgrammer: boolean = true;
    static firstName: string = "Tomoko";
    static lastName: string = "Uehara";

    static work (){
        // "Hello, are you interested in TypeScript?"
        return `Hello, ${this.firstName},are you interested in TypeScript?`
    }
}

//let me = new Me();
console.log(Me.isProgrammer);
console.log(Me.work());