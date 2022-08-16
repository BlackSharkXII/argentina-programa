// Obtenemos los valores de los li y lo ponemos en un array.

function convertirEnArray(elemento) {
    const arrayLi = [...document.querySelectorAll(elemento)].map((element) =>
        Number(element.innerText)
    );
    return arrayLi;
}

// Obtener número el promedio

function numeroPromedio(array) {
    let valorSuma = 0;
    for (let i = 0; i < array.length; i++) {
        valorSuma += array[i];
    }
    const promedio = valorSuma / array.length;
}

// Obtener el número más pequeño

function numeroMasChico(array) {
    let valorMenor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (valorMenor >= array[i]) {
            valorMenor = array[i];
        }
    }
}

// Obtener el número más grande

function numeroMasGrande(array) {
    let valorMayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (valorMayor <= array[i]) {
            valorMayor = array[i];
        }
    }
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

    console.log(numeroQueRepite);
}
