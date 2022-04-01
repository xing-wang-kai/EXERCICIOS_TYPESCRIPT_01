import { NegociacaoController } from "./controllers/negociacao-controller.js";
const $ = window.document.querySelector.bind(document);
const controller = new NegociacaoController();
const form = $(".form");
form === null || form === void 0 ? void 0 : form.addEventListener('submit', event => {
    event.preventDefault;
    event.stopPropagation;
    controller.adicionar();
});
