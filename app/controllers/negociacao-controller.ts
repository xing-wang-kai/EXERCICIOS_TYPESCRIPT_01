import Negociacao from "../models/negociacao.js";

const $ = window.document.querySelector.bind(document);

export class NegociacaoController {
    private inputData: HTMLFormElement;
    private inputQuantidade: HTMLFormElement;
    private inputValor: HTMLFormElement;

    constructor(){
        this.inputData = $("#data") as HTMLFormElement;
        this.inputQuantidade = $("#quantidade")as HTMLFormElement;
        this.inputValor = $("#valor")as HTMLFormElement;
    }
    adicionar(): void{
        const negociacao = this.criarNegociacao;
        console.log(negociacao);

    }
    criarNegociacao():Negociacao {
        const regex = /-/g;
        const date = new Date(this.inputData.value.replace(regex, ","));
        const valor = Number.parseInt(this.inputValor.value);
        const quantidade = Number.parseFloat(this.inputQuantidade.value);

        return new Negociacao( valor, date, quantidade );
    }
}