var cubo=0;
var cuarta=0;
var quinta=0;
var n;
var x;
var i=1;

n=prompt("Dijite numero")

while (i<=n) {
    x=prompt("Dijite numero para elevarlo")
    cubo= x * x * x;
    cuarta= x * x * x * x;
    quinta= x * x * x * x * x;
    i++;

document.write(" El cubo: ")
document.write(cubo)
document.write(" la cuarta son: ")
document.write(cuarta)
document.write(" la quinta son: ")
document.write(quinta)
}


