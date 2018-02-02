$(document).ready(function () {

    $("form").submit(function(){
        var city = $("#searchbar").val();
        console.log(city);
        var appid = "&&APPID=7ed369ce258fa860bf0b40c039dbd96b"
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + appid;

        $.get(url, function(res){
            console.log(res);
            var kelvin = res.main.temp;
            var fahr = (9/5)*(kelvin -273) +32
            $("#results").html("<h1>" + city + "</h1>");
            $("#results").append("<h3>Temperature</h3>")
            $("#results").append(fahr)
            }, "json");
            return false;
        
    })
});