let datos = [4, 5, 1, 11, 9, 7, 22, 46, 4, 3, 8]




function numeroAmenorQueNumeroB (a, b) {
    return a < b
};

function seguinteElementoAmover (lista, comparador) {

    let valorMinimo = lista [0]
    let posicion = 0

    for (let i=1; i < lista.length; i++) {

        let resultComparación = comparador(valorMinimo, lista[i])

            if (resultComparación) {
                valorMinimo = valorMinimo
                posicion = posicion
            } else {
                valorMinimo = lista[i]
                posicion = i
            } 
            
    }
    console.log (valorMinimo)
    console.log (posicion)

    return posicion
}

console.log (seguinteElementoAmover (datos, numeroAmenorQueNumeroB))



function ordenarElementos (lista, comparador, selectorElementoAmover) {

    let arrayOrdenado = []   

    while (lista.length) {
        let elementoAMover = selectorElementoAmover (lista, comparador) 
        console.log (elementoAMover)
        arrayOrdenado.push(lista[elementoAMover])
        console.log (lista.splice (elementoAMover, 1))
        console.log (arrayOrdenado)
    }
    

   return arrayOrdenado
}

console.log (ordenarElementos(datos, numeroAmenorQueNumeroB, seguinteElementoAmover))

