const arguments = process.argv.slice(2);
function DaireAlanHesapla(r){
    const PI = 355/113;
    console.log("Pi değerini "+PI+" olarak aldım");
    var Result =PI*r*r;
    console.log("Yarı çapı "+r+" olan dairenin alanı "+Result.toFixed(2)+" olarak hesaplanmıştır");
}
DaireAlanHesapla(arguments[0]*1);
