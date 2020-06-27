// @ts-nocheck
const nombre = document.getElementById('name')
const edad = document.getElementById('age')
const femenino = document.getElementById('F')
const masculino = document.getElementById('M')
const texto = document.getElementById('texto')
const button = document.getElementById('button')

console.log('bienvenidos')

const ingreso = ()=>{
    if(femenino.checked && edad.value >= 18){
        texto.innerText = `Bienvenida ${nombre.value} Por favor cancela $10.000 COP`
        console.log('Ingresa Mujer')
    }
    else if(masculino.checked && edad.value >= 18){
        texto.innerText = `Bienvenido ${nombre.value} Por favor cancela $15.000 COP`
        console.log('Ingresa Hombre')
    }
    else if(edad.value > 0 && edad.value < 18){
        alert('NO SE PERMITE EL INGRESO DE MENORES DE EDAD')
        console.log('ACCESO DENEGADO')
    }
    else if(nombre.value == '' || edad.value == '' ){
        alert('Ingresa todos los datos')
        console.log('Datos vacios')
    }
}
button.addEventListener('click',ingreso)


