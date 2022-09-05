export function imprimirLog(...objetos) {
    for (let objeto of objetos) {
        console.log(objeto.pataTextoLog());
    }
}
