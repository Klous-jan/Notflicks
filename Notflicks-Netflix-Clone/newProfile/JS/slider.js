var ratings = ["", "TV-Y", "TV-Y7", "TV-G", "TV-PG", "PG-13", "TV-14", "TV-R", "TV-MA", "NC-17"];
var val = $('#slider').slider("option", "value");

$("#circles-slider")
    .slider({
        min: 0,
        max: 10,
        value: 1,
        labels: ratings,
        slide: function(event, ui) {
            $("#slider-value").html(ui.value);
        }
    })
    .slider("pips", {
        rest: "label",
        labels: ratings,
    })


.on("slidechange", function(e, ui) {
    $("#labels-ratings-output").text("You selected " + ratings[ui.value] + " (" + ui.value + ")");
});