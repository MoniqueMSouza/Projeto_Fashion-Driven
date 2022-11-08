BuscarPedidos();


// Buscar pedidos no servidor
function BuscarPedidos(){

    const promessa =axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
    promessa.then(BuscouPedidos);
}

function BuscouPedidos(resposta){
    alert('deu Certoooo!')
    console.log(resposta.data)
}

