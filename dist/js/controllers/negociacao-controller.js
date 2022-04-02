import Negociacao from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacaoView } from "../views/negociacoes-views.js";
const $ = window.document.querySelector.bind(document);
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacaoView("#negociacoesView");
        this.inputData = $("#data");
        this.inputQuantidade = $("#quantidade");
        this.inputValor = $("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    adicionar() {
        const negociacao = this.criarNegociacao();
        this.negociacoes.adicionarNegociacao(negociacao);
        console.log(this.negociacoes.listar());
        this.negociacoesView.update(this.negociacoes);
        this.limparFormulario();
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
