
// ADIVINA EL NUMERO PERDIDO    

let nombre = prompt('ingresa tu nombre')

let edad = prompt('ingrese tu edad ')

const ADIVINA = 2

let contador = 0 

let num

while(edad>=18){

    num = Number(prompt('ingresa el numero perdido'))

    contador = contador + 1

    if(num == 2){
        alert('Felicitaciones ' + nombre + ' haz econtrado el numero perdido, Te mereces la recompensa')
        console.log('Adivinaste en el tiro ' + contador)
        if(contador<=20){
            alert(nombre + ' por adivinar el numero antes del tiro 20 o en el tiro 20 te ganaste un millon de pesos')
        }
        break;
    }

}
console.log('Gracias por participar')