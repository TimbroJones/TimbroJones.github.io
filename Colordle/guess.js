
let r = 0;
let g = 0;
let b = 0;
let rgbs = `rgb(${r},${g},${b})`;

function onLoad() {
    document.getElementById("content").innerHTML = "onload"
    setBackground();
}

function setBackground() {
    document.getElementById("content").innerHTML = "r"
    r = Math.random() * 256;
    document.getElementById("content").innerHTML = "g"
    g = Math.random() * 256;
    document.getElementById("content").innerHTML = "b"
    b = Math.random() * 256;

    document.getElementById("content").innerHTML = "rgb"
    rgbs = `rgb(${r},${g},${b})`;
    document.getElementById("content").innerHTML = "background"
    document.body.style.backgroundColor = rgbs;
}

function wildGuess() {
    var red = document.getElementById("input_red").value
    var green = document.getElementById("input_green").value
    var blue = document.getElementById("input_blue").value

    if (`rgb(${red},${green},${blue})` === rgbs){
        document.getElementById("content").innerHTML = "Bingo Bongo"
    } else {
        document.getElementById("content").innerHTML = "Wop wop"
    }

    document.getElementById("content").innerHTML = "lol"
}

window.onload = onload;