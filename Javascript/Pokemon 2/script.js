$(document).ready(function () {


    
    var pic = " ";
    var string = " ";
    for (var i=1; i<20; i++){
        pic = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i +".png";
        string += '<img id="'+ i +  '"src=' + pic + '>';
    } 

    $("#pokemon").append(string); //populates pokemon to left div

    $(document.body).on("click", "img", function () {
        console.log(pic)
        
    });


    $("img").on("click", function(){
        var picLink = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +  $(this).attr('id') +".png";
        $("#pokedex").html('<img src="'+picLink+'" />');
        $.get("https://pokeapi.co/api/v2/pokemon/" + $(this).attr("id") + "/", function(res){
            console.log(res);
            $("#pokedex").append("<h3>Name:</h3><h4>" + res.name + "</h4>");
            $("#pokedex").append("<h3>Types:</h3>"); 
            for( var i = 0; i<res.types.length;i++){
            $("#pokedex").append("<h4>" + res.types[i].type.name + "</h4>");}
            $("#pokedex").append("<h3>Height:</h3><h4>" + res.height + "</h4>");
            $("#pokedex").append("<h3>Weight:</h3><h4>" + res.weight + "</h4>");
            

        }, "json")});

    

});