var sueldoBase
var montoMensualVentas
var bono3eraEdad = 0;
var ingresoVendedor ;
var edadVendedor ;
var sexoVendedor ;
var porcentajeComisionVentas = 1;
var comisionPorVenta = 1;
var cantidadvendedores 
var sueldoTotal;

while ( cantidadvendedores <= 0 ||  isNaN(cantidadvendedores) ) {
    cantidadvendedores = parseFloat(prompt('Indique la cantidad de vendedores'))
    if ( cantidadvendedores <= 0 ||  isNaN(cantidadvendedores)) {
        alert('Debe Introducir un numero positivo y mayor a Cero')
    }
}

for (let index = 1; index <= cantidadvendedores; index++) {

    edadVendedor = parseFloat(prompt('Ingrese la Edad del vendedor'))
    
    while (edadVendedor <= 0 ||  isNaN(edadVendedor)) {
        alert('Debe introducir una edad mayor a cero')
        edadVendedor = parseFloat(prompt('Ingrese la Edad del vendedor'))
    }
    
    sexoVendedor = prompt('Indique el sexo del vendedor "H"Hombre o "M"Mujer').toUpperCase()
    
    while (sexoVendedor !== "H" && sexoVendedor !=="M") {
        alert('Debe indicar un el sexo correcto con: \n una H si es hombre o una M si es mujer')
        sexoVendedor = prompt('Indique el sexo del vendedor "H"Hombre o "M"Mujer').toUpperCase()
    }

    if (sexoVendedor == 'H' && edadVendedor >= 60 || sexoVendedor == 'M' && edadVendedor >= 55 ) {
        bono3eraEdad = 40000;
    } 

    sueldoBase = parseFloat(prompt('Ingrese el sueldo Base Mensual:'))
    while ( sueldoBase <= 0 || isNaN(sueldoBase)) {
        alert('Debe indicar un Sueldo Base')
        sueldoBase = parseFloat(prompt('Ingrese el sueldo Base Mensual:'))
    }
    montoMensualVentas = parseFloat(prompt('Ingrese el Monto Mensual de Ventas:'))
    while ( montoMensualVentas < 0 || isNaN(montoMensualVentas)) {
        alert('Debe indicar un Monto mensual de ventas numerico')
        montoMensualVentas = parseFloat(prompt('Ingrese el Monto mensual de ventas:'))
    }


    switch (true) {
        case (sueldoBase <= 75000) :
            comisionPorVenta = 5;  
            break;
        case (sueldoBase >= 90000 && sueldoBase < 200000) :
            comisionPorVenta = 7;  
            break;
        case (sueldoBase >= 300000 && sueldoBase < 1000000) :
            comisionPorVenta = 8;  
            break;
        case (sueldoBase > 1500000) :
            comisionPorVenta = 10;  
            break;
        default:
            comisionPorVenta = 6;
            break;
    }
    montoComision = (montoMensualVentas * comisionPorVenta / 100);

    sueldoTotal = sueldoBase + montoComision + bono3eraEdad;

    alert(`El vendedor numero ${index} \n
        Vendedor de Sexo ${sexoVendedor} \n
        El vendedor tiene ${edadVendedor} \n
        El vendedor tiene un sueldo base de : ${sueldoBase} \n
        El vendedor tiene un monto mensual de ventas de : ${montoMensualVentas} \n
        El porcentaje de comision de ventas es del : ${comisionPorVenta} \n
        La comision por venta es ${montoComision}\n
        Tiene un bono por ser tercera edad de: ${bono3eraEdad}\n
        El monto total a cobrar del vendedor es de : ${sueldoTotal}
        `)
}
