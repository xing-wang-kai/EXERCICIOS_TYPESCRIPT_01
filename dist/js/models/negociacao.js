class Negociacao {
    constructor(valor, data, quantidade) {
        this._valor = valor;
        this._data = data;
        this._quantidade = quantidade;
        Object.freeze(this);
    }
    get valor() {
        return this._valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
export default Negociacao;
