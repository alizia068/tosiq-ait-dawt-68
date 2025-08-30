// ******* LOOP *****
// 1- inital value
// 2- condition/requirement
// 3- increament/descreament (++, --)

var fruits = ["Apple1", "Bnana", "Orange", "Grapes"];
fruits.push("Kiwi");
console.log(fruits.length);
var i;
var fruitList = document.getElementById("fruit-list")
for(i = 0; i < fruits.length; i++){
    // console.log(fruits[i] + " is Fruit");

    fruitList.innerHTML += "<li>" + fruits[i] + " is Fruit" + "</li>";
}
// for(i = 1; i <= 10; i++){
//     fruitList.innerHTML += "<li>" + "I love Fruits" + "</li>";
// }
