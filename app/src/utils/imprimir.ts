import { Imprimivel } from "./imprimivel.js";

export function imprimirLog(...objetos: Imprimivel[]) {
  for (let objeto of objetos) {
    console.log(objeto.paraTextoLog());
  }
}