const $botonRestablecer = document.querySelector('#boton-restablecer');
const $divSeccionPregunta = document.querySelector('#seccion-pregunta');
const $divSeccionEdades = document.querySelector('#seccion-edades');

$botonRestablecer.onclick = function () {
    eliminarLabel();

    $divSeccionPregunta.className = '';
    $divSeccionEdades.className = 'oculto';

    $labelResultadoMayor = document.querySelector('#resultado-mayor');
    $labelResultadoMayor.innerText = '';

    $labelResultadoMenor = document.querySelector('#resultado-menor');
    $labelResultadoMenor.innerText = '';

    $labelResultadoPromedio = document.querySelector('#resultado-promedio');
    $labelResultadoPromedio.innerText = '';
};
