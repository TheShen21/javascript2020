var tellerhead = 1;
var tellerbody = 1;
var tellerlegs = 1;
var slideholderhead= document.getElementById("slideholderhead");
slideholderhead.style.backgroundImage = " url('../h4/img/face1.png')";

var slideholderbody= document.getElementById("slideholderbody");
slideholderbody.style.backgroundImage = " url('../h4/img/body1.png')";

var slideholderlegs= document.getElementById("slideholderlegs");
slideholderlegs.style.backgroundImage = " url('../h4/img/legs1.png')";


slideholderhead.addEventListener("click",function(){
    slideholderhead.style.backgroundImage = " url('../h4/img/face"+getFace() +".png')";
    if(tellerhead == 3){
        tellerhead = 0;
    }
});
slideholderbody.addEventListener("click",function(){
    slideholderbody.style.backgroundImage = " url('../h4/img/body"+getBody() +".png')";
    if(tellerbody == 3){
        tellerbody = 0;
    }
});
slideholderlegs.addEventListener("click",function(){
    slideholderlegs.style.backgroundImage = " url('../h4/img/legs"+getLegs() +".png')";
    if(tellerlegs == 3){
        tellerlegs = 0;
    }
});

function getFace() {
    tellerhead++;
    return tellerhead;
}
function getBody() {
    tellerbody++;
    return tellerbody;
}
function getLegs() {
    tellerlegs++;
    return tellerlegs;
}