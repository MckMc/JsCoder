
let numero;
function obtenerValor() {
    while (true) {
    let valor = prompt("Por favor, ingresa un valor para aplicarle las cuotas:");


    numero = parseInt(valor, 10);
    if (!isNaN(numero)) {
    break;
    } else {
    alert("Eso no es un valor numerico. Por favor intente de nuevo");
    }
}
return numero;
}

function elijaCuotas(obtenerValor, valor) {
    let cuota = prompt("Elija la cantidad de cuotas");
        switch(cuota){
        case "3":
            alert("son 3 cuotas de $"+(numero / 3));
            break;
        case "6":
            alert("son 6 cuotas de $"+(numero / 6));
            break;
        case "9":
            alert("son 9 cuotas de $"+(numero / 9));
            break;
        case "12":
            alert("son 12 cuotas de $"+ (numero / 12));
            break;
        default:
            alert("No esta disponible esa cantidad de cuotas, solo 3, 6, 9 y 12")
    }
}
obtenerValor();
elijaCuotas();

