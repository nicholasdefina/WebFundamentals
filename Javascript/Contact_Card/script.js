$(document).ready(function () {

    $(document.body).on("click", function () {

    });

    $("#btn").click(function () {
        var name = $("#data_first").val();
        var surname = $("#data_last").val();
        var desc = $("#data_desc").val();
        var bCard = "<div class='bCard'>" + "<h2>" + name + " " + surname + "</h2>" + "<h4>Click me for description</h4><h4 hidden>" + desc + "</h4" + "</div>";
        $("#right_side").append(bCard);
        $("form").trigger("reset");
    });

    $(document).on("click", ".bCard", function () {
        $(this).children("h2,h4").toggle();
    });
});
