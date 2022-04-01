export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionarNegociacao(negociacao) {
        this.negociacoes.push(negociacao);
    }
    listar() {
        return [...this.negociacoes];
    }
}
