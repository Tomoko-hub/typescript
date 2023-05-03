export {};

namespace Japanese {
    export namespace Tokyo {
        export class Person {
            constructor(public name: string){
            }
        }
    }
    export namespace Osaka {
        export class Person {
            constructor(public name: string){
            }
        }
    }

}

namespace EuropeStyle {
    export class Person {
        constructor(
            public firstName:string,
            public middleName: string,
            public lastName: string
            ) {}
    }
}

const me = new Japanese.Tokyo.Person("Tomoko");
console.log(me.name);
const meOsaka = new Japanese.Osaka.Person("Tomochin");
console.log(meOsaka);

const taavi = new EuropeStyle.Person("Taavi", "Yasuhiro", "Peisa");
console.log(taavi);
