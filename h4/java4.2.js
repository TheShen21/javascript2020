var teller = 1;
var slideholder= document.getElementById("slideholder");
slideholder.style.backgroundImage = " url('../h3/img/aap1.jpg')";

slideholder.addEventListener("click",function(){
    slideholder.style.backgroundImage = " url('../h3/img/aap"+getAap() +".jpg')";
    if(teller == 9){
        teller = 0;
    }
});

function getAap() {
teller++;
return teller;
}