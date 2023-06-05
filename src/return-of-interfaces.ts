export {};

class Wizard {
    
}

class Monk {

}

//TypeScriptでは、ひとつのクラスしか継承出来ない（単一継承）
//Classes can only extend a single class
class Naoko extends Wizard {

}

interface Sage {
    ionazun(): void;
}

interface Warrior {
    attack():void;
}

class Tomoko implements Sage, Warrior {
    ionazun():void{
        console.log('aiaiaiaiaiai');
    };
    attack():void{
        console.log('ooooooooo');
    };
}

const tomoko = new Tomoko();
tomoko.ionazun();
tomoko.attack();