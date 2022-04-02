export class NegociacaoView {
    constructor(selector) {
        this.elemento = document.querySelector(selector);
    }
    template(modelo) {
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
                        `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    update(modelo) {
        const template = this.template(modelo);
        console.log(template);
        this.elemento.innerHTML = this.template(modelo);
    }
}
