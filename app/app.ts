import Negociacao from "./models/negociacao.js";
import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { EventEmitter } from "stream";

const $ = window.document.querySelector.bind(document);

const controller = new NegociacaoController();

const form = $(".form") as Element;

form.addEventListener('submit', event => {
    event.preventDefault();
    event.stopPropagation();
    controller.adicionar();
})
