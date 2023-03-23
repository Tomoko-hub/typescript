export {};

let bmi:(height: number, weight: number, printable: boolean) => number=(
    height:number, 
    weight:number,
    printable?: boolean
    ):number=>{
        if (printable){
            console.log('bmi');
        }
      return  weight/(height*height)
    };

    bmi(1.52, 57, true);