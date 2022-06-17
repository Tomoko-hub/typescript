export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = "Hello";

const example1 = {
    name: "Tomoko",
    age: 42
};

type Profile = {
    name: String;
    age: number;
};

const example2: Profile = {
    name: "Topi",
    age: 12
};

type profile2 = typeof example1;
