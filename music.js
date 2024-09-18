const apikey ='14ad6375dd12742f92e8f3613a6ed76f'
const apiUrl= 'https://api.vagalume.com.br/search.php?'
function getMusicLyrics(){
    let artista=document.getElementById('nome-artista').value;
    let musica=document.getElementById('nome-musica').value;
    let containerMusica=document.getElementById('musica-container');

    fetch(`${apiUrl}art=${artista}&mus=${musica}&apikey${apikey}`)
        .then(response=> response.json())
        .then(data=>{
            let elementoTitulo=document.createElement('h1');
            let elementoTexto=document.createElement('p');
            
            elementoTitulo.innerHTML=`${data.mus[0].name}`;
            elementoTexto.innerHTML=`${data.mus[0].text}`;
            
            containerMusica.appendChild(elementoTitulo);
            containerMusica.appendChild(elementoTexto);

            if (data.mus[0].translate[0]){
                alert('existe tradução')
            }

            
        })

}