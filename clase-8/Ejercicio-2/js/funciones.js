// Obtener número el promedio

function numeroPromedio(array) {
    let valorSuma = 0;
    for (let i = 0; i < array.length; i++) {
        valorSuma += array[i];
    }
    const promedio = valorSuma / array.length;
    return Math.trunc(promedio);
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

// Eliminar label input br

function eliminarLabel(labelCreado, inputCreado, brCreado) {
    labelCreado = [...document.querySelectorAll('.label-creado')].map(
        (element) => element.remove()
    );

    inputCreado = [...document.querySelectorAll('.pregunta-edad-input')].map(
        (element) => element.remove()
    );

    brCreado = [...document.querySelectorAll('.br-creado')].map((element) =>
        element.remove()
    );
}
