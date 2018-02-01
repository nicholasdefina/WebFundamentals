$(document).ready(function(){
    
    $(".pics").click(function(){
        $(this).attr("src",$(this).attr("data-alt-src"));
    });

});
