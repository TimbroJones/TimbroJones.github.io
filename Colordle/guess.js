
let r = 0;
let g = 0;
let b = 0;
let rgbs = rgb(r,g,b);

window.onload = function onLoad() {
    setBackground();
}

function setBackground() {
    r = Math.random() * 256;
    g = Math.random() * 256;
    b = Math.random() * 256;

    rgbs = rgb(r,g,b);
    document.body.style.backgroundColor = rgbs;
}

function wildGuess() {
    document.getElementById("content").innerHTML = "yes"
    var red = document.getElementById("input_red").value
    var green = document.getElementById("input_green").value
    var blue = document.getElementById("input_blue").value

    if (rgb(red, green, blue) == rgbs){
        document.getElementById("content").innerHTML = "Bingo Bongo"
    } else {
        document.getElementById("content").innerHTML = "Wop wop"
    }

    document.getElementById("content").innerHTML = "lol"
}