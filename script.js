import {barcelona, roma, paris, londres} from './ciudades.js';

//Obtenemos los elementos del DOM (Documento HTML)
let enlaces = document.querySelectorAll('a');   //selecciona todos los elementos (valores) <a>
let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');

//Agregar un evento click a cada enlace
enlaces.forEach(function(enlace) {

    enlace.addEventListener('click', function(){
        //Remover activo
        enlaces.forEach(function(enlace) {
            enlace.classList.remove('active');
        });

        //Agregar la clase "active" al enlace actual
        this.classList.add('active');

        //Obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent);

        //Mostrar el contenido en el DOM
        tituloElemento.innerHTML = contenido.titulo;
        subTituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
        precioElemento.innerHTML = contenido.precio;

    });

 }
);

//Funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    }
    return contenido[enlace];
}