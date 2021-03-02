

function myFunction() {
    var x = document.getElementById("myText").value;
    if (x === ""){
        return false;
    } else {
        document.getElementById("demo").innerHTML = x;

    }
}