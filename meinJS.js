

var headline = document.getElementById('div1').firstChild;
var p1 = document.getElementById('div1').firstChild.nextSibling;
var p2 = document.getElementById('div1').lastChild;

//console ist nicht ausreichend definiert, es könnte eine andere Variable/Methode/Funktion vorliegen, die ebenfalls console benutzt
//Lösung: genauer definieren: window.console.log();
console.log(p2);
window.console.log(p1);

document.getElementById('button1').addEventListener("click",listE);

var pp = document.createElement("ul");
function listE(){
    'use strict';
    var ppp = document.createElement("li");
    var text = document.createTextNode("Listenelement!");
    pp.appendChild(ppp);
    ppp.appendChild(text);

    document.getElementById('one').appendChild(pp);
}
