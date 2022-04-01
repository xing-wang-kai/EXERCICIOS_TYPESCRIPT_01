import Negociacao from "../models/negociacao.js";
const $ = window.document.querySelector.bind(document);
export class NegociacaoController {
    constructor() {
        this.inputData = $("#data");
        this.inputQuantidade = $("#quantidade");
        this.inputValor = $("#valor");
    }
    adicionar() {
        const negociacao = this.criarNegociacao;
        console.log(negociacao);
        this.limparFormulario;
    }
    criarNegociacao() {
        const regex = /-/g;
        const date = new Date(this.inputData.value.replace(regex, ","));
        const valor = Number.parseInt(this.inputValor.value);
        const quantidade = Number.parseFloat(this.inputQuantidade.value);
        return new Negociacao(valor, date, quantidade);
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
