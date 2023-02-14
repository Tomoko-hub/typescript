export {};

type Pitcher1 = {
    throwingSpeed: number;
};

type Batter1 = {
    battingAvarage: number;
};

const Daimajin: Pitcher1 = {
    throwingSpeed: 154
};

const Ochiai: Batter1 = {
    battingAvarage: 0.367
};

//type TwoWayPlayer = {
//    throwingSpeed: number;
//    battingAvarage: number;
//}

type TwoWayPlayer = Pitcher1 & Batter1;

const Otani: TwoWayPlayer = {
    throwingSpeed: 165,
    battingAvarage: 0.286
};

console.log(Otani);