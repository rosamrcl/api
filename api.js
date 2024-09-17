const url='https://viacep.com.br/ws/';
function consultacep(){
    const cep=document.getElementById("inputPassword2").value;
    const viaCepUrl=url+cep+'/json'
    console.log (viaCepUrl)
    fetch (viaCepUrl)
    .then ((response) => response.json())
    .then((data)=>{
        document.getElementById ('logradouro').value = data.logradouro;
        document.getElementById ('bairro').value = data.bairro;
        document.getElementById ('cidade').value = data.localidade;
        document.getElementById ('uf').value = data.uf;
        document.getElementById ('regiao').value = data.regiao;
        document.getElementById ('ddd').value = data.ddd;
    })
}