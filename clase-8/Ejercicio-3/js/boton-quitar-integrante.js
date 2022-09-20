$botonQuitarIntegrante = document.querySelector('#boton-quitar-integrante');

$botonQuitarIntegrante.onclick = function (arrayDeLabelCreados) {
    $divSalario = document.querySelector('#div-salario');

    arrayDeLabelCreados = [
        ...document.querySelectorAll('.label-creado-integrante', 'br'),
    ].map((element) => element);
    arrayDeLabelCreados.pop().remove();

    if (arrayDeLabelCreados.length === 0) {
        $divSalario.className = 'oculto';
    } else {
        return '';
    }
};
