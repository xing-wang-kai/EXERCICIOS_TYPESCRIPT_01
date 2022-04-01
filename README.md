# EXERCICIOS_TYPESCRIPT_02
Estudo da linguagem typescript curso alura.

Methods para informar novas tipagem no typescript

basta colocar : e o tipo do valor que podem ser number, string, Date, any etc;

quando uma função não retorna nada o tipo é void 

funções podem retornar objetos ou valores em seu return então tipamos com o : valor retornado.

importante colocar .js depois do import do arquivo para que o copilador possa entender.

em Objetos podemos colocar o tipo private public para declarar o acesso ao objeto com typescript.

arquivos de retorno de formulários html podem retornar com o formato do tipo HTMLFormElement.

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

