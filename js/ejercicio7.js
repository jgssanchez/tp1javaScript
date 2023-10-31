let num3 = parseInt(prompt('ingrese el primero de 3 numeros para saber cual es mayor:'));
let num4 = parseInt(prompt('ingrese el segundo numero'))
let num5 =parseInt(prompt('ingrese el tercer numero'))

if (num3 > num4 && num3 > num5){ 
    console.log('El numero '+num3+' es el mayor de los 3 ' );
}else if (num4 > num3 && num4 > num5){
    console.log('El numero '+num4+' es el mayor de los 3 ' );
} else{
    console.log('El numero '+num5+' es el mayor de los 3 ' );
}