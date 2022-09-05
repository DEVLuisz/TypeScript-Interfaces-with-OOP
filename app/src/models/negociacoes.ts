import { IObjeto } from '../interfaces/Iobjeto.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements IObjeto<Negociacoes>{
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public paraTextoLog(): string{
        return JSON.stringify(this.negociacoes, null, 2);
    };

    public ehIgual(negociacoes: Negociacoes): boolean{
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }
}
