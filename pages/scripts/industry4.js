function func() {
    let arr = document.getElementsByTagName("li") ;
    while (arr[0]!==undefined) {
    alert(arr[0].innerHTML);
    arr[0].remove();
    };
    document.getElementById("list").innerHTML  = "<li><img src='https://www.3xcorp.com/industry-4-0-become-reality-manufacturers-2018/#iLightbox[gallery10237]/0' alt='Industry 4.0' height='15' width='15'></li>";

};

function col(color) {
    let tgt = document.getElementById("first");
    tgt.style.color = color;
    let div = document.getElementsByTagName("div");
    for(let i=0; i<div.length; i++){
    div[i].style.color = color;
    div[i].style.backgroundColor = color;
    };
    let head = document.getElementById ("head");
    head.style.fontSize ="30px";
    head.style.backgroundColor ="silver";
    head.style.color = "white";
    document.getElementById("b").style.backgroundColor = "goldenrod";
};

function txt() {
    let li = document.getElementsByTagName("li");
    li[8].innerHTML = "<li>QUANTUUM COMPUTERS!!!</li>";
}