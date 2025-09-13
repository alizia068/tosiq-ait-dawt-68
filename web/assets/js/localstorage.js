run();
function run(){
    let bg_color = localStorage.getItem("bg_color");
    let txt_color = localStorage.getItem("txt_color");

    document.body.style.backgroundColor = bg_color;
    document.body.style.color = txt_color;
}
function getBgColor(){
    let clr = document.getElementById("bg_clr").value;

    document.body.style.backgroundColor = clr;
    localStorage.setItem("bg_color", clr);
}
function getTxtColor(){
    let clr = document.getElementById("txt_clr").value;

    document.body.style.color = clr;
    localStorage.setItem("txt_color", clr);
}