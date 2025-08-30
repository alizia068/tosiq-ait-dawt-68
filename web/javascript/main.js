//***** Data types *****/
// number: 1234, 2.3, 55.67, 23488880000000
// string: "This is my Homeland"
// array : myarray = ["Apple", "Orange", "Bnana"] // myarray[1]
// object: user= { name: "Asad", email: "abc@gmail.com"} // user.name
// document.getElementById("box").innerText = "This is my Homeland";
// var text = "This is JavaSCRIPT";
// console.log(text);
// alert(text);
// var a = 10;
// var b = 30;
// var sum = a+b;
// var x = 5;
// var y = 10;
// // x + y + 3 + (x+y)
// document.getElementById("box").innerText = x + y + 3 + (x+y)

// ***************************
// Assignment: calculate electricity bill
// Requirements: 1- 200, 2- 250, 3- 300 and above (else if (unit > 300))
function calcBill() {
  var unit = document.getElementById("units").value;
  var output = document.getElementById("unit-output");
  var unitPrice = 14;
  var tax = 355;
  var fuelTax = 298;
  if (unit <= 200) {
    output.innerText = unit * unitPrice + tax + fuelTax;
  } else if (unit > 200 && unit <= 250) {
    // defined range
    var unitPrice = 28;
    output.innerText = unit * unitPrice + tax + fuelTax;
  } else if (unit > 250 && unit < 300) {
    // defined range
    var unitPrice = 44;
    output.innerText = unit * unitPrice + tax + fuelTax;
  }
}
// write a JS program that tells wheater number is EVEN or ODD
function getResult() {
  var no = document.getElementById("no").value;
  var output = document.getElementById("output");
  // aert(no);
  if (no > 0) {
    // if TRUE
    output.innerText = "The given number is positive";
  } else {
    // if FALSE
    output.innerText = "The given number is negative";
  }
}
// find day
function getDay() {
  var no = document.getElementById("no-day").value;
  var output = document.getElementById("day-output");
  //   alert(no);
  if (no == 1) {
    // if TRUE
    output.innerText = "The day is Monday";
  } else if (no == 2) {
    // if TRUE
    output.innerText = "The day is Tuesday";
  } else if (no == 3) {
    // if TRUE
    output.innerText = "The day is Wednesday";
  } else if (no == 4) {
    // if TRUE
    output.innerText = "The day is Thursday";
  } else if (no == 5) {
    // if TRUE
    output.innerText = "The day is Friday";
  } else if (no == 6) {
    // if TRUE
    output.innerText = "The day is Saturday";
  } else if (no == 7) {
    // if TRUE
    output.innerText = "The day is Sunday";
  } else {
    output.innerText = "The given is Invalid!";
  }
}

// find percentage
function findPercentage(){
  var totalMarks = 500;
  var output = document.getElementById("percent-out");
  var eng = document.getElementById("eng").value;
  var math = document.getElementById("math").value;
  var urdu = document.getElementById("urdu").value;
  var com = document.getElementById("com").value;
  var islam = document.getElementById("islam").value;
  var obtainedMarks = parseInt(eng) + parseInt(math) + parseInt(urdu) + parseInt(com) + parseInt(islam);
  // console.log(sum);
  var percent = (obtainedMarks/totalMarks) * 100;
  output.innerText = "The Percentage is " + percent + "%";
}