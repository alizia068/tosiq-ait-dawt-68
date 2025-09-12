var text1 = "This                  is my text 1";
var text2 = text1.trim();

console.log("Text 1 length: " + text1.length);
console.log("Text 2 trim: " + text2.length);

var str1 = "First heading";
var str2 = "Second heading";
var str3 = str1.concat(" , " + str2);
console.log("Text Concat: " + str3);

var mytext =
  "This is a book, this is my book, it has 6 chapters and 800 pages, this is very old book";
// var mytext_result = mytext.replace("book", "News paper");
var mytext_result = mytext.replaceAll("book", "News paper");
console.log(mytext_result);

var myemail = "abc@gmail.com";
var validateAt = myemail.indexOf("@");
var validateDot = myemail.indexOf(".");
 if (validateAt == -1 || validateDot == -1) {
    console.log("Please enter valid email");
 } else{
    console.log("Your email is correct");
 }
 
var chartAt = myemail.charAt(0);
console.log("Chart At 0: " + chartAt);
var split_text = "Today is the day of celebration";
var split_text_result = split_text.split(" ");
console.log(split_text_result[1]);

