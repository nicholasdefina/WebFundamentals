console.log("Are we linked, dammit?")

$(document).ready(function(){

    $("#slide").hide();
    $("#ghost_pic").hide();
    $("#now").hide();

    $(".ticketbutton").click(function(){
    alert("No tickets available")
    });

    
    $("#houdini_button1").click(function(){
        $("#houdini1").hide(2000)

    });

    $("#houdini_button2").click(function(){
        $("#houdini1").show(2000)

    });

    $("#jekyll_hyde").click(function(){
        $(".jekyll").toggle();
    });

    $("#slideToggle").click(function(){
        $("#now").slideToggle();
    });

    $("#slideDown").click(function(){
        $("#slide").slideDown();
    });

    $("#slideUp").click(function(){
        $("#slide_Up").slideUp();
    });

    $("#ghost").click(function(){
        $("#ghost_pic").fadeIn(2000);
    });

    $("#ghost").click(function(){
        $("#ghost_pic").fadeOut(2000);
    });

    $("h5").append("<p>Has no fear!</p>");


    $("#adding_class").click(function(){
        $("#red").addClass("dates");
    });
    
    $("h6").after("<p>Then after!</p>");

    $("#before").before("<p>Then before!</p>");

});