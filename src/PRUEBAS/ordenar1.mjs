let datos = [4, 30, 28, 11, 9, 7, 22, 46, 1, 3, 2]

// console.log (datos)

let comparaDosNumeros = function (a, b) {
    if (a < b) {
        return true
    } else {
        return false
    }
};

/* let indice
let valorMinimo */

function buscarElementoMover (lista, comparador) {

    let indice
    let valorMinimo   

    valorMinimo = lista [0]

    for (let i=0; i < lista.length; i++) {

        resultComparación = comparador(valorMinimo, lista[i])

            if (resultComparación === true) {
                valorMinimo = valorMinimo
            } else {
                valorMinimo = lista[i]
            } 
            console.log (valorMinimo)
    }

    indice = lista.indexOf(valorMinimo)

    console.log (indice)
    console.log (valorMinimo)

    return indice
}

console.log (buscarElementoMover (datos, comparaDosNumeros))