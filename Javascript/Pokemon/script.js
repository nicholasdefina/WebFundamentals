$(document).ready(function () {

    
        var pic = " ";
        var string = " ";
        for (var i=1; i<152; i++){
            pic = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i +".png";
            string += '<img src=' + pic + '>';
        
            console.log(pic);
            console.log(string);
        } 

        $("body").append(string);

        

});