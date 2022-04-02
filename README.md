# EXERCICIOS_TYPESCRIPT_02

----------------------------------------------------------------------------

### Estudo da linguagem typescript curso alura.

----------------------------------------------------------------------------

Quando desejamos declarar a tipagem dos elementos envocados em uma variavel
colocamos o sinal de " : " depois o type da váriaval que pode ser [ string, number, date, boolean, etc]

EX.:

```javascript

const nome: string = 'Jose Maria';
const idade: number = 30;
const nascimento: Date = new Date('1980, 12, 07');
const empregado: boolean = true;


```

----------------------------------------------------------------------------

### RETORNO DE FUNÇÕES

----------------------------------------------------------------------------

Funções em typescript devem ter um retorno que depende do valor que retorna ex.

```javascript

class Pessoa{
    public nome: string;
    public idade: number;
    publica nascimento: Date;
    public empregado: boolean;
    constructor( nome: string, idade: number, nacimento: string, empregado: boolean){
        this.nome = nome;
        this.idade = idade;
        this.nascimento = new Date( nacimento );
        this.empregado = empregago 
    }

    fazerAniversário(): number {
        return this.idade ++;
    }
    falar(): void {
        console.log('Bom dia!!')
    }
}

```

----------------------------------------------------------------------------

### TIPAGENS PARA CLASS

----------------------------------------------------------------------------

Assim como existe em outras linguagens de programações, podemos modificar a abstração de um atributo 
da class dando as determinadas permisões de acessos a mesma

- public
- private
- protected

- abstract 

A class abstract não pode ser instanciada soment herdada.

------------------------------------------------------------------------------

### ELEMENTOS DE HTML

------------------------------------------------------------------------------

Existe algumas tipagems especificas para Elementos de Html como ex.

```javascript
const $ = window.document.querySelector.bind(document);

const form: Element = $(".form") as Element;
const elemento: HTMLElement = $("#Elemento") as HTMLElement;
const inputData: HTMLFormElement = $("#data") as HTMLFormElement;
const inputQuantidade: HTMLFormElement = $("#quantidade")as HTMLFormElement;
const inputValor: HTMLFormElement = $("#valor")as HTMLFormElement;

```

-------------------------------------------------------------------------------

### PARA CONVERTER DATAS EM typescript

-------------------------------------------------------------------------------


para converter datas usamos a tecnicas com REGEX (Regular expression)

```javascript

const $ = window.document.querySelector.bind(document);

const regex = /-/g;
const imputDate = $("#data");
const date = new Date(this.imputDate.value.replace(regex, ',')) //desta forma o valor de 2022-02-12 vira 2022,02,12 e o DATE converte para data.

```
Para invocar um array em typscript tipamos a váriavel como : Array<number> ou Array<string> dependendo do tipo ou somente string[] ou number[] etc.
É possivel proteger Array com a tipagem ReadOnlyArray, Esta tipagem impede que alguém modifique um array invocado em typscript.
para o method tipo ReadOnlyArray podemos usar ReadOnly string[];

---------------------------------------------------------------------------

### TIPOS GENÉRICOS
--------------------------------------------------------------------------

É possivel envocar um type genérico com o typo <T> e então passar para os paramentros :T

