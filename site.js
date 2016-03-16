
var c = 10;
var t;

function timedCount() {
    document.getElementById("time-txt").value = c;
    c -= 1;
    t = setTimeout(function(){ timedCount() }, 1000);
    if( c == 0) {
        window.location.assign("http://nnduc.github.io/?utm_campaign=redirect&utm_medium=email&utm_source=newsletter&utm_content=toplink")
    }
}