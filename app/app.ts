import { NegociacaoController } from "./controllers/negociacao-controller.js";

const $ = window.document.querySelector.bind(document);

const controller = new NegociacaoController();

const form = $(".form") as Element;

form.addEventListener('submit', event => {
    event.preventDefault();
    event.stopPropagation();
    controller.adicionar();
})
