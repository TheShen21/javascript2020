var mijnauto = {
    kleur:"blauw",
    snelheid:0,

    gasgeven: function(){
        this.snelheid += 10;
        console.log(this.snelheid);
    },
    toeteren: function () {
        console.log("toet");

    }
}
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.toeteren();
