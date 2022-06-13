var no = 0;
var may = 0;

var x = [n]

var n=prompt("Dijite cant de #")

for (i=0; i<=n-1; i++){
    no=prompt("Ingrese #")
    x[i] = no;
    if (no>may) {
        may = no;  

    } 
}

document.write("La edad mayor es: ")
document.write(may)
document.write(" ")
