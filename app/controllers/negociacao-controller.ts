import Negociacao from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacaoView } from "../views/negociacoes-views.js";

const $ = window.document.querySelector.bind(document);

export class NegociacaoController {
    private inputData: HTMLFormElement;
    private inputQuantidade: HTMLFormElement;
    private inputValor: HTMLFormElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView = new NegociacaoView("#negociacoesView");

    constructor(){
        this.inputData = $("#data") as HTMLFormElement;
        this.inputQuantidade = $("#quantidade")as HTMLFormElement;
        this.inputValor = $("#valor")as HTMLFormElement;
        this.negociacoesView.update(this.negociacoes);
    }
    adicionar(): void{
        const negociacao: Negociacao = this.criarNegociacao();
        this.negociacoes.adicionarNegociacao(negociacao)
        console.log(this.negociacoes.listar())
        this.negociacoesView.update(this.negociacoes);
        this.limparFormulario();

    }
    criarNegociacao(): Negociacao {
        const regex = /-/g;
        const date = new Date(this.inputData.value.replace(regex, ","));
        const valor = Number.parseInt(this.inputValor.value);
        const quantidade = Number.parseFloat(this.inputQuantidade.value);
        return new Negociacao( valor, date, quantidade );
    }
    limparFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}