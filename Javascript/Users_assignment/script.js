$(document).ready(function(){

    $(document.body).on("click",function(){
        
    });
    
    $("button").click(function(){
        var name = $("#data_first").val();
        var surname = $("#data_last").val();
        var email = $("#data_email").val();
        var contact = $("#data_contact").val()
        var markup = "<tr><td>" + name + "</td><td>" + surname + "</td><td>" +  email + "</td><td>" + contact + "</td></tr>";
        $("table tbody").append(markup);
    })


});
