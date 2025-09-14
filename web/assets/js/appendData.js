$(document).ready(function(){

    $("#insertItem").on("click", function (){
        let item = $("#text-field").val();
        $("ol").append(`<li>${item}</li>`);
        $("#text-field").val("");
    });

});