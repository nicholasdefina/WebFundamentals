$(document).ready(function(){
    
    $(".ghost").click(function(){
        $(this).css("opacity", "0")
    });

    $("#Restore").click(function(){
        $(".ghost").css("opacity","100");
    });

});
