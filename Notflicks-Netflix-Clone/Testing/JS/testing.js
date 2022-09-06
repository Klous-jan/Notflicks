let x = Math.floor((Math.random() * 4) + 1);
document.getElementById("demo").style.left = x;

function test() {
    if (x == 4) {
        document.getElementById("demo").style.color = "blue";
        document.getElementById("demo").innerHTML = x;
    }
}

document.getElementById("demo").style.left = "10";
document.getElementById("demo").innerHTML = x;
if (x == 4) {
    document.getElementById("demo").style.color = "blue";
    document.getElementById("demo").innerHTML = x;
} else if (x == 3) {
    document.getElementById("demo").style.color = "green";
    document.getElementById("demo").innerHTML = x;
} else if (x == 2) {
    document.getElementById("demo").style.color = "pink";
    document.getElementById("demo").innerHTML = x;
} else if (x == 1) {
    document.getElementById("demo").style.color = "yellow";
    document.getElementById("demo").innerHTML = x;
}
console.log(x)