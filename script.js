//animation des secondes
const secondDiv = document.querySelector('.second-needle');
const minDiv = document.querySelector('.min-needle');
const hourDiv = document.querySelector('.hour-needle');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secDeg = ((seconds/60)*360 + 90);
    //déterminer la position des secondes
    //comme j'ai mis dans le css 'transform = rotate(90deg)', l'aiguille des sécondes
    // je dois changer la proprieté rotate
    secondDiv.style.transform = `rotate(${secDeg}deg)`;

    const min = now.getMinutes();
    const minDeg =  ((min/60)*360) + ((seconds/60)*6) + 90;
    //ou sont les seconde dans la minutes ((seconds/60)*6)
    minDiv.style.transform = `rotate(${minDeg}deg)`;

    const hour = now.getHours();
    const hourDeg = ((hour/12)*360) + ((min/60)*30) + 90;
    hourDiv.style.transform = `rotate(${hourDeg}deg)`
}
setInterval(setDate, 1000);

//==========================================Change the color


var btn1 = document.getElementById('btn1');
var btn = document.getElementById('btn');

function changeBackgroundColor() {
    var backgr = document.getElementsByTagName('body');
    var x = Math.floor(Math.random()* 256);
    var y = Math.floor(Math.random()* 256);
    var z = Math.floor(Math.random()* 256);
    document.body.style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
}