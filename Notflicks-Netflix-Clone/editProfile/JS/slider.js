// var ratings = ["", "TV-Y", "TV-Y7", "TV-G", "TV-PG", "PG-13", "TV-14", "TV-R", "TV-MA", "NC-17"];
// var val = $('#slider').slider("option", "value");

// $("#circles-slider")
//     .slider({
//         min: 0,
//         max: 10,
//         null: 0,
//         value: 1,
//         labels: ratings,
//         slide: function(event, ui) {
//             $("#slider-value").html(ui.value);
//         }
//     })
//     .slider("pips", {
//         rest: "label",
//         labels: ratings,
//     })


// .on("slidechange", function(e, ui) {
//     $("#labels-ratings-output").text("You selected " + ratings[ui.value] + " (" + ui.value + ")");
// });


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

var span = document.getElementById("demo");

function testthis() {
    var fact = span.innerHTML = span.textContent;
    return fact.innerHTML = ("runtest");
}
console.log(span.textContent)