export {};

// owner
// 所有者
// 初期化時に設定出来る
// 途中で変更出来ない
// 参照出来る

// secretNumber
// 個人番号
// 初期化時に設定できる
// 途中で変更可能
// 参照出来ない

class MyNumberCard {
    private _owner: string;
    private _secretNumber: number;

    constructor(owner:string, secretNumber:number){
        this._owner = owner;
        this._secretNumber = secretNumber;
    }

    // getter （参照専用のメソッド）
    get owner (){
        return this._owner;
    }

    // setter （値を設定するときのみ使われる）
    set secretNumber(secretNumber:number){
        this._secretNumber = secretNumber;
    }

    debugPrint(){
        return `sercretNumber : ${this._secretNumber}`;
    }
}

let card = new MyNumberCard("Tomoko", 1235456);
//card.owner = "Tomomann";
console.log(card.owner);
console.log(card.debugPrint());
card.secretNumber = 123456789123456;
console.log(card.debugPrint());
console.log(card.secretNumber);


class usersNumber {
    private _userNumber : number;
    private _userId : number;

    constructor(userNumber:number, userId:number){
        this._userNumber = userNumber;
        this._userId = userId;
    }

    get userNumber (){
        return this._userNumber;
    }

    set userId(userId:number){
        this._userId = userId;
    }

    debugPrint(){
        return `userId : ${this._userId}`
    }
}

let userInfo = new usersNumber(1, 5478962);
console.log(userInfo.userNumber);
console.log(userInfo.debugPrint());
userInfo.userId = 8;
console.log(userInfo.debugPrint());
