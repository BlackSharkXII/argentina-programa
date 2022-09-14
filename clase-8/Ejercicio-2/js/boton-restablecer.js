const $botonRestablecer = document.querySelector('#boton-restablecer');

$botonRestablecer.onclick = function () {
    eliminarLabel();
    $divSeccionPregunta.className = '';
    $divSeccionEdades.className = 'oculto';
};
