export {};

class VisaCard {
    constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard("Tomoko");

console.log(myVisaCard.owner);

//myVisaCard.owner = "Naoko";

// publicは省略可で、read onlyという事はアクセス可能ということ
//　だが、省略しない方がコードとしては分かりやすい

class userInfo {
    constructor(public readonly userInfo : string) {}
}

let tomokosUserInfo = new userInfo("This user has a dog.");

console.log(tomokosUserInfo.userInfo);

//tomokosUserInfo.userInfo = "Also cat.";