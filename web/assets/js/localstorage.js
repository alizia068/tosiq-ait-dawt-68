run();
function run(){
    let clr = localStorage.getItem("heading_color");
    let heading = document.getElementById("myheading");

    heading.style.color = clr;
    
    // console.log("Stored color: " + clr);
}
function getColor(){
    let clr = document.getElementById("clr").value;
    let heading = document.getElementById("myheading");
    console.log(clr);

    // document.body.style.backgroundColor = clr;
    heading.style.color = clr;

    // localstorage
    localStorage.setItem("heading_color", clr);

}