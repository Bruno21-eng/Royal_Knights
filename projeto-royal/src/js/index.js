/*
   OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto e mostrar o cartão correspondente ao que foi selecionado na listagem
       PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
       PASSO 2 - Identificar o evento de clique no elemento da listagem
       PASSO 3 - remover a classe aberto só do cartão que tá aberto
       PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual cartão abrir
       PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
       PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
*/
//criacao de variavel ( passo 1 )
const listaSelecaoDigimon = document.querySelectorAll(".digimon");
//n necessariamente precisa do ponto e virgula, mas é bom usa
//criacao de evento (passo2)
listaSelecaoDigimon.forEach(digimon =>{
    digimon.addEventListener("click", () =>{
        //remover a classe aberto  só do cartão q ta aberto     (passo 3 )
        esconderCartaoDigimon();
        //pegar o id do pokedev selecionado (passo 4)
        const iddigimonSelecionado = mostrarCartaoDigimon(digimon);
        //remoção da classe aberto doq esta aberto (passo5)
        desativarDigimonNaListagem();
        //add a classe ativo no selecionado ( passo 6)
        ativarDigimonNaListagem(iddigimonSelecionado);
    })
})
function ativarDigimonNaListagem(iddigimonSelecionado) {
    const digimonSelecionadoNaListagem = document.getElementById(iddigimonSelecionado);
    digimonSelecionadoNaListagem.classList.add("ativo");
}

function desativarDigimonNaListagem() {
    const digiAtivoNaListagem = document.querySelector(".ativo");
    digiAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoDigimon(digimon) {
    const iddigimonSelecionado = digimon.attributes.id.value;
    const idDoCartaodigiParaAbrir = "cartao-" + iddigimonSelecionado;
    const cartaodigiParaAbrir = document.getElementById(idDoCartaodigiParaAbrir);
    cartaodigiParaAbrir.classList.add("aberto");
    return iddigimonSelecionado;
}

function esconderCartaoDigimon() {
    const cartaodigiAberto = document.querySelector(".aberto");
    cartaodigiAberto.classList.remove("aberto");
}

