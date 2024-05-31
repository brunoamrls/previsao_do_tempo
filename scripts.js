/*
Diferente do Python devemos declarar se um determinado
termo é uma variável. Para isso escrevemos em sua frente "let", a partir daí
sempre que precisar escreva somente o termo 'convertido' em variável para
usar o valor armazenado nele.
*/

// Variável -> Pedacinho de memória que guardamos o que quisermos
// Função -> Um trecho de código, que só executa, quando a chamamos

let chave = "cebcd482eda57fa9a6714c1c2ba91885" // Variável com a chave de API

function colocarNaTela(dados) { // Recebe "dados" como argumento
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name // Atualiza o conteúdo de elementos HTML com as classes abaixo
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
}

async function buscarCidade(cidade) { // Busca informações sobre o tempo para uma determinada cidade

    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + // Conclui a chamada à API

        "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric").then(resposta => resposta.json()) // Converte a resposta em formato JSON

    // AWAIT -> Espere.
    // FETCH -> Acesse. Ferramenta do JavaScript para acessar servidores
    // THEN -> Então, faça algo.
    // JSON -> JavaScript Object Notation (O formato que JavaScript entende)



    colocarNaTela(dados) // Função para exibir os dados na tela
}

function cliqueiNoBotao() { // Essa função é chamada quando o botão é clicado
    let cidade = document.querySelector(".input-cidade").value



    buscarCidade(cidade) // Busca informações sobre o tempo para a cidade solicitada
}

let inputCidade = document.querySelector(".input-cidade"); // Declara a variável "inputCidade" e define o elemento HTML com a classe .input-cidade

inputCidade.addEventListener('keypress', function (e) { // Atende ao pressionamento do botão "Enter" na entrada de texto
    if (e.key === 'Enter') {
        cliqueiNoBotao(); // A função "cliqueiNoBotao()" é chamada quando a tecla "Enter" pressionada
    }
});


/*
Clica no Botão
    -> CHAMA A FUNÇÃO cliqueNoBotao()
    -> Vai no INPUT e pega o que está lá dentro
    -> Passar a cidade para o servidor
*/

/* Math.floor -> Ferramenta do JavaScript para arredondar valores 
*/
