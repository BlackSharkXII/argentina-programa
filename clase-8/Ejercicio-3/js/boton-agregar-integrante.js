const $botonAgregarIntegrante = document.querySelector(
    '#boton-agregar-integrante'
);

$botonAgregarIntegrante.onclick = function (
    inputCreadoIntegrante,
    labelCreadoIntegrante,
    brCreadoIntegrante
) {
    $divSalario = document.querySelector('#div-salario');
    $divSalario.className = '';

    labelCreadoIntegrante = document.createElement('label');
    labelCreadoIntegrante.className = 'label-creado-integrante';

    $labelIntegrantes = document.querySelector('#label-integrantes');
    $labelIntegrantes.appendChild(labelCreadoIntegrante);

    brCreadoIntegrante = document.createElement('br');

    inputCreadoIntegrante = document.createElement('input');
    inputCreadoIntegrante.className = 'input-creado-integrante';
    inputCreadoIntegrante.type = 'number';

    arrayDeLabelCreados = [
        ...document.querySelectorAll('.label-creado-integrante'),
    ].map((element) => element);
    for (i = 0; i <= arrayDeLabelCreados.length; i++) {
        labelCreadoIntegrante.textContent = `Ingresa el salario anual del integrante ${i}: `;
        labelCreadoIntegrante.appendChild(inputCreadoIntegrante);
        labelCreadoIntegrante.appendChild(brCreadoIntegrante);
    }
};
