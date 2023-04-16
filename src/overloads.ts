export {};

function double(value:number):number; //singnature
function double(value:string):string; //singnature

function double(value:any):any{
    if(typeof value === 'number'){
        return value*2;
    } else {   // else if で定義しなくてもよい
        return value + value
    }
}

console.log(double(2));
console.log(double("Hello "));