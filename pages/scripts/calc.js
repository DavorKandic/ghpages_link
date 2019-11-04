function add() {
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    let res = Number(a) + Number(b);
    document.getElementById("result").innerHTML= res;
}

function subtract() {
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    let res = Number(a) - Number(b);

document.getElementById("result").innerHTML= res;

}

function multiply() {
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    let res = Number(a) * Number(b);

document.getElementById("result").innerHTML= res;
}

function divide() {
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    let res = Number(a) / Number(b);

document.getElementById("result").innerHTML= res;
}

function clear() {
    document.getElementById("first").empty();
}