import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoView {

    protected elemento: HTMLElement;
    constructor( selector: string) {
        this.elemento = document.querySelector(selector) as HTMLElement;

    }
    template( modelo: Negociacoes): string{
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                    ${modelo.listar().map(negociacao => {
                        return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>
                        `
                    }).join('')}
            </tbody>
        </table>
        `;
    }
    update( modelo: Negociacoes): void{
        const template = this.template(modelo);
        console.log(template)
        this.elemento.innerHTML = this.template( modelo );
    }
}