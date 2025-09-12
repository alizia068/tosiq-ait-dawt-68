var arr = ["Pakistan", "Fruits", "Sports"];
arr.splice(1, 1, "Computer", "Gaming Chair", "CPU");
// console.log(arr);
var arr2 = ["Adil", "Usman", "Ahmad"];
var arr3 = [...arr, ...arr2];
console.log(arr3);
var myarray = [2, 3, 4, 5, 6, 7, 8, 9];
var myarray_result = myarray.map((element) => element * 3);
console.log(myarray_result);

