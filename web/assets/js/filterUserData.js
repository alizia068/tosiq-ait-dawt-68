$(document).ready(function (){

    $("#myInput").on("input", function () {
        // console.log($(this).val())
        let value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function (){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        })
    })

})