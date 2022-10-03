const $quitarIntegrante = document.querySelector('#boton-quitar-integrante');

$quitarIntegrante.onclick = function () {
    const $seccionSalario = document.querySelector('#div-salario');
    const integrantesCreados = [
        ...document.querySelectorAll('.label-creado-integrante', 'br'),
    ];
    const $mensajesError = [...document.querySelectorAll('li')];

    integrantesCreados.pop().remove();
    $mensajesError.pop().remove();

    if (integrantesCreados.length === 0) {
        $seccionSalario.className = 'oculto';
    } else {
        return '';
    }
};
