window.onload = function () { //Il faut pense à attendre que la page soit chargée avant d'exécuter le script


var d = new Date('09 dec 2019');
var time = d.getSeconds() + 60 * d.getMinutes() + 360 * d.getHours();

var aigS = document.getElementById('aigS');
var aigM = document.getElementById('aigM');
var aigH = document.getElementById('aigH');

aigS.style.transform = 'rotate( ' + (time * 6) + 'deg)';
aigM.style.transform = 'rotate(' + Math.round(time / 10) + 'deg)';
aigH.style.transform = 'rotate(' + Math.round(time /120) + 'deg)';

setInterval(function () {
    time++;
    aigS.style.transform = 'rotate( ' + (time * 6) + 'deg)';
    aigM.style.transform = 'rotate(' + Math.round(time / 10) + 'deg)';
    aigH.style.transform = 'rotate(' + Math.round(time /120) + 'deg)';
}, 1000);
};

//------------------------------------------


var btn1 = document.getElementById('btn1');
var btn = document.getElementById('btn');


/**function getColor() {
    var x = Math.floor(Math.random()* 256);
    var y = Math.floor(Math.random()* 256);
    var z = Math.floor(Math.random()* 256);
    var chColor = "rgb(" + x + "," + y + ","+ z + ")";
}*/

function changeHorlogeColor() {
    var horloge = document.getElementById('horloge');
    var x = Math.floor(Math.random()* 256);
    var y = Math.floor(Math.random()* 256);
    var z = Math.floor(Math.random()* 256);
    var chColor = "rgb(" + x + "," + y + "," + z +")";
    horloge.style.backgroundColor = chColor;
}
 function changeBackgroundColor() {
     var backgr = document.getElementsByTagName('body');
     var x = Math.floor(Math.random()* 256);
     var y = Math.floor(Math.random()* 256);
     var z = Math.floor(Math.random()* 256);
     var chColor1 = "rgb(" + x + "," + y + "," + z +")";
     document.body.style.backgroundColor = chColor1;
 }

var ladate = new Date();
document.write("Heure brute : ");
document.write(ladate.getHours()+":"+ ladate.getMinutes()+":"+ ladate.getSeconds());

document.write("<BR>");

var h = ladate.getHours();
if (h < 10) {h = "0" + h}
var m=ladate.getMinutes();
if (m < 10) {m = "0" + m}
var s = ladate.getSeconds();
if ( s <10) {s = "0" + s}
document.write("Heure formatée : ");
document.write(h +":"+ m +":"+ s);





