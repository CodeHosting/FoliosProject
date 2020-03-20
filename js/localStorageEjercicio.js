'use strict'


//agrega un elemento a la lista de peliculas.
var formulario = document.querySelector("#formpeliculas");
formulario.addEventListener('submit', function() {
    console.log("Entra");
    var titulo = document.querySelector('#addPelicula').value;
    if (titulo.length >= 1) {
        localStorage.setItem(titulo, titulo);
    }

});

var ul = document.querySelector('#peliculas-list');
for (var i in localStorage) {

    if (typeof localStorage[i] == 'string') {
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
        console.log("Mensaje de prueba de GIT!!!!!");
        console.log("Mensaje de prueba de GIT2!!!!!");
        console.log("Mensaje de prueba de GIT3!!!!!");   
        console.log("Mensaje de prueba de GIT4!!!!!");       
    }
}

//borra pelicula de la lista

var formulariob = document.querySelector("#formborrarpeliculas");
formulariob.addEventListener('submit', function() {
    console.log("Entra");
    var titulo = document.querySelector('#delPelicula').value;
    if (titulo.length >= 1) {
        localStorage.removeItem(titulo);
    }

});