import { Imprimivel } from "../utils/imprimivel.js";
import { IComparavel } from "./Icomparavel.js";

export interface IObjeto<T> extends Imprimivel, IComparavel<T> {

}