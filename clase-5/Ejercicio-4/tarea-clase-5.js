// Obtenemos los valores de los li y lo ponemos en un array.

// Obtener número el promedio

function numeroPromedio(array) {
    let valorSuma = 0;
    for (let i = 0; i < array.length; i++) {
        valorSuma += array[i];
    }
    const promedio = valorSuma / array.length;
    return promedio;
}

// Obtener el número más pequeño

function numeroMasChico(array) {
    let valorMenor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (valorMenor >= array[i]) {
            valorMenor = array[i];
        }
    }
    return valorMenor;
}

// Obtener el número más grande

function numeroMasGrande(array) {
    let valorMayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (valorMayor <= array[i]) {
            valorMayor = array[i];
        }
    }
    return valorMayor;
}

// Obtener el número que más se repite

function numeroQueMasRepite(array) {
    let numeroQueRepite = 0;
    let contador = 0;
    let cuenta = 0;

    array.map((p) => {
        cuenta = 0;
        array.map((x) => {
            if (p == x) {
                cuenta++;
            }
        });
        if (cuenta > contador) {
            contador = cuenta;
            numeroQueRepite = p;
        }
    });
    return numeroQueRepite;
}

const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function () {
    const arrayLi = [...document.querySelectorAll('li')].map((element) =>
        Number(element.innerText)
    );

    const $numeroPromedio = document.querySelector('#numero-promedio');
    $numeroPromedio.innerText = Math.trunc(numeroPromedio(arrayLi));

    const $numeroPequeno = document.querySelector('#numero-pequeno');
    $numeroPequeno.innerText = numeroMasChico(arrayLi);

    const $numeroGrande = document.querySelector('#numero-grande');
    $numeroGrande.innerText = numeroMasGrande(arrayLi);

    const $numeroFrecuente = document.querySelector('#numero-frecuente');
    $numeroFrecuente.innerText = numeroQueMasRepite(arrayLi);
};
