var n;
var x;
var no = 0;
var may = 0;

n=prompt("Dijite cant de #")

var x = [n]

for (i=0; i<=n-1; i++){
    no=prompt("Ingrese #")
    x[i] = no;
    if (no>may) {
        may = no;  

    } 
document.write(x[n])
document.write(" ")
}

