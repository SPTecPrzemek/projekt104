/**
 * Created by stasiakprzemyslaw on 20.03.2017.
 */

function Telefon(marka,cena,kolor) {
    this.marka = marka;
    this.cena = cena;
    this.kolor = kolor;
}
Telefon.prototype.printInfo = function () {
    console.log("Marka telefonu to " + this.marka + " kolor to " + this.kolor + "a cena to " +
                this.cena + ".");
}


var iPhone6S = new Telefon("Apple", 2250, "czarny");
iPhone6S.printInfo();

var HuaweiShotX = new Telefon("HuwaeiShotX", 1500, "Schwarz");
HuaweiShotX.printInfo();

function Smartphone(markaS, cenaS, kolorS) {
    this.markaS = markaS;
    this.cenaS = cenaS;
    this.kolorS = kolorS;
    this.logPrint = function () {
        console.log(this.markaS + " " + this.cenaS + " " + this.kolorS + " ");
    }
}

var iPhone7S = new Smartphone("iPhone7S", 3000, "silver");
iPhone7S.logPrint();