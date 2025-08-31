function insertItems(){
    var newItem = document.getElementById("new-item").value;
    var itemList = document.getElementById("item-list");

    itemList.innerHTML += `<li>`+ newItem +`</li>`

}