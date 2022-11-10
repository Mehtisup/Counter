<script>
var id = setInterval(myFunction, 1000);
var x = 0;

function myFunction() {
    document.getElementById("number").innerHTML = ++x;
    if (x > 9) {
        clearInterval(id);
    }
}
</script><script>
var id = setInterval(myFunction, 1000);
var x = 0;

function myFunction() {
    document.getElementById("number").innerHTML = ++x;
    if (x > 9) {
        clearInterval(id);
    }
}
</script>
