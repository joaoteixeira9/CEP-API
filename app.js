let botao = document.getElementById("botao")
botao.addEventListener("click", function(){
    let cep = document.getElementById("cep").value;
    CarregarCep(cep)
})

function CarregarCep(cep){
    const url = `https://cep.awesomeapi.com.br/json/${cep}`;
    fetch(url)
    .then(resposta=>{
        return resposta.json();
    })
    .then(dados=>{
        return MostrarDados(dados.address, dados.district, dados.city, dados.state);
    })
    
}

function MostrarDados(rua, bairro, cidade, estado){
    document.getElementById("rua").value = rua;
    document.getElementById("bairro").value = bairro;
    document.getElementById("cidade").value = cidade;
    document.getElementById("estado").value = estado;
}