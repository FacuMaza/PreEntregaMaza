do{
let primeraNota = parseInt(prompt("ingrese la primer nota"))
console.log (primeraNota)

let segundaNota = parseInt(prompt("ingrese la segunda nota"))
console.log (segundaNota)

promedio = parseInt((primeraNota + segundaNota) / 2)

if(primeraNota < 0 && segundaNota <0 ){
    console.log ("Ingrese una nota valida.")
}else if (promedio >0 && promedio <=5){
    console.log ("El alumno esta Desaprobado" + " " + promedio)
}else if(promedio >=6 && promedio <=8){
    console.log ("El alumno esta Regular" +" "+ promedio)
}else if (promedio > 8 && promedio <=10) {
    console.log ("El alumno esta Promocionado" +" "+ promedio)
}else{
    console.log ("Datos incorrectos, ingrese nuevamente.")
}

}while(isNaN(promedio))













    
