let NomeUsuario
let modeloEscolhido
let golaEscolhida
let tecidoEscolhido


PerguntarNome();
BuscarPedidos();


// Ao entrar no sistema, deve ser perguntado o nome da pessoa

function PerguntarNome() {
    NomeUsuario = prompt('Qual o seu nome?')
    console.log(NomeUsuario)
}


//O usuário deve selecionar obrigatoriamente e somente 1 tipo de modelo
function SelecionarModelo(select) {
    const botaoSelecionadoAntes = document.querySelector('.modelo .bordaAzul');
    if (botaoSelecionadoAntes !== null) {
        botaoSelecionadoAntes.classList.remove('bordaAzul');
    }

    select.classList.toggle('bordaAzul');

    modeloEscolhido = select.innerHTML
    habilitabotao();
    console.log(modeloEscolhido);
}



//O usuário deve selecionar obrigatoriamente e somente 1 tipo de gola
function SelecionarGola(select) {
    const botaoSelecionadoAntes = document.querySelector('.gola .bordaAzul');
    if (botaoSelecionadoAntes !== null) {
        botaoSelecionadoAntes.classList.remove('bordaAzul');
    }

    select.classList.toggle('bordaAzul');

    golaEscolhida = select.innerHTML;
    habilitabotao();
    console.log(golaEscolhida)
}

//O usuário deve selecionar obrigatoriamente e somente 1 tipo de tecido 
function SelecionarTecido(select) {
    const botaoSelecionadoAntes = document.querySelector('.tecido .bordaAzul');
    if (botaoSelecionadoAntes !== null) {
        botaoSelecionadoAntes.classList.remove('bordaAzul');
    }

    select.classList.toggle('bordaAzul');

    tecidoEscolhido = select.innerHTML;
    habilitabotao();
    console.log(tecidoEscolhido)
}

//O usuário deve preencher obrigatoriamente um campo de texto para colocar um link para uma imagem de referencia. 
// let inputPreenchido; 
// function PreencherInput(){
// inputPreenchido = (input.value !== undefined) 
// habilitabotao();
// }


//Somente após preencher todas as informações acima o botão "confirmar" deve ficar clicável.
function habilitabotao() {
    //Se o modelo foi selecionado for diferente de nada
    if (modeloEscolhido !== undefined) {

        // Se a gola foi selecionada for diferente de nada
        if (golaEscolhida !== undefined) {

            // Se o tecido foi selecionado for diferente de nada
            if (tecidoEscolhido !== undefined) {

                // Se o link inserido for diferente de nada
                //  if (input.value !== undefined) {



                //Botao cinza some
                const ocultarcinza = document.querySelector('.ConfirmarPedidoCinza');
                ocultarcinza.classList.add('esconder')

                //Botao azul aparece
                const exibirazul = document.querySelector('.ConfirmarPedidoAzul');
                exibirazul.classList.remove('esconder')
            }
        }
    }
}
//  }


let pedidos = {}
function MontarPedido() {

    pedidos = {
        "model": "",
        "neck": "",
        "material": "",
        "image": "",
        "owner": "",
        "author": "",
    }

    if(selecionarModelo1){

    }
}

//Encomendar Blusa
function EncomendarBlusa() {
    const requisição = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', pedidos);

    requisição.then(EncomendaFeita);
    requisição.catch(ErroEncomenda);
}

//Após clicar no botão deve mostrar um alert() confirmando a encomenda.
//Caso a requisição seja de sucesso a encomenda é confirmada
function EncomendaFeita() {
    alert('Sua encomenda foi realizada!')
//Assim que uma blusa for criada pelo usuário, deve atualizar a lista de últimos pedidos
    BuscarPedidos();
}

//Caso a requisição seja com erro deve mostrar a mensagem "Ops, não conseguimos processar sua encomenda
function ErroEncomenda() {
    alert('Ops, não conseguimos processar sua encomenda!');
}






// Buscar pedidos no servidor
function BuscarPedidos() {

    const promessa = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
    promessa.then((resposta) => RenderizarPedidos(resposta.data));
}

function RenderizarPedidos(resposta) {
    console.log(resposta)
    for (let i = 0; i < resposta.length; i++) {

        const ListaPedidos = document.querySelector('.ultimosPedidos')
        ListaPedidos.innerHTML +=
            `
            
        <div class="Pedido" onclick="EncomendarBlusaClicada()">  
    <img src="${resposta[i].image}"  class="imgPedidos">
    <span class="textoPedido">Criador: ${resposta[i].owner}
    </span>          
        </div>    
    
`
    }

}


//Ao clicar em uma blusa na lista "últimos pedidos" deve aparecer um confirm() e caso o usuário aceite. Deve fazer uma encomenda com os dados da blusa clicada. 
function EncomendarBlusaClicada(pedido) {
    confirm('Você gostaria de realizar um pedido com as caracteristicas da blusa selecionada?');
}