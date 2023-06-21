/**
 * @template T
 * @callback comparator
 * @param {T} a
 * @param {T} b
 * @returns {Boolean}
 */

/**
 * Compara dous numeros
 * @type {comparator<Number>}
 */
function numeroAmenorQueNumeroB(a,b){
    return a < b
}

/**
 * Buscar seguinte elemento a mover
 * @template T
 * @callback buscadorDeElementoAMover
 * @param {T[]} lista - Lista de elementos a ordear
 * @param {comparator<T>} comparador - Funcion comparadora de elementos
 * @returns {Number} - Indice do elemento a mover
 */
function seguinteElementoAmover(lista, comparador) {
    let valorMinimo = lista [0]
    let posicion = 0

    for (let i=1; i < lista.length; i++) {

        let resultComparacion = comparador(valorMinimo, lista[i])

            if (resultComparacion) {
                valorMinimo = valorMinimo
                posicion = posicion
            } else {
                valorMinimo = lista[i]
                posicion = i
            } 
            
    }
    return posicion
}

/**
 * Move ordenadamente os elementos a un novo array
 * @template T
 * @callback ordenarTodo
 * @param {T[]} lista - Lista de elementos a ordear
 * @param {buscadorDeElementoAMover<T>} selectorElementoAmover - Funcion buscar elemento a mover
 * @param {comparator<T>} comparador - Funcion comparadora de elementos
 * @returns {T[]} - Array con elementos ordenados
 */

function ordenarElementos(lista, selectorElementoAmover, comparador){ 

    let arrayOrdenado = [] 

    while (lista.length) {
        let elementoAMover = selectorElementoAmover (lista, comparador) 
        arrayOrdenado.push(lista[elementoAMover])
        lista.splice (elementoAMover, 1)
    }
    
   return arrayOrdenado
}

export {
    numeroAmenorQueNumeroB,
    seguinteElementoAmover,
    ordenarElementos
}