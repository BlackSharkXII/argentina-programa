const $calcular = document.querySelector('#boton-calcular');

$calcular.onclick = function () {
    cambiarClaseError();

    eliminarMensajesErroresRepetidos();

    const edades = [...document.querySelectorAll('.input-creado')].map(
        (element) => Number(element.value)
    );
    manejarErrorEdades(edades);
};
