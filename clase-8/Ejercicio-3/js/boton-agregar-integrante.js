const $agregarIntegrante = document.querySelector('#boton-agregar-integrante');

$agregarIntegrante.onclick = function () {
    const $seccionSalario = document.querySelector('#div-salario');
    $seccionSalario.className = '';

    const seccionIntegrante = document.createElement('label');
    seccionIntegrante.className = 'label-creado-integrante';

    const $textoIntegrante = document.querySelector('#label-integrantes');
    $textoIntegrante.appendChild(seccionIntegrante);

    const espaciadoIntegrante = document.createElement('br');

    const entradaIntegrante = document.createElement('input');
    entradaIntegrante.className = 'input-creado-integrante';

    const integrantesCreados = [
        ...document.querySelectorAll('.label-creado-integrante'),
    ].map((element) => element);
    for (i = 0; i <= integrantesCreados.length; i++) {
        seccionIntegrante.textContent = `Ingresa el salario anual del integrante ${i}: `;
        seccionIntegrante.appendChild(entradaIntegrante);
        seccionIntegrante.appendChild(espaciadoIntegrante);
    }
};
