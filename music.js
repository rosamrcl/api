    const apikey ='14ad6375dd12742f92e8f3613a6ed76f'
    const apiUrl= 'https://api.vagalume.com.br/search.php?'
    function getMusicLyrics(){
        let artista=document.getElementById('nome-artista').value;
        let musica=document.getElementById('nome-musica').value;
        let containerMusica=document.getElementById('musica-container');
        let containerTrans=document.getElementById('traducao-container');

        fetch(`${apiUrl}art=${artista}&mus=${musica}&apikey${apikey}`)
            .then(response=> response.json())
            .then(data=>{
                console.log (data)
                if(data.type===`notfound`){
                    throw new Error("Erro na requisição");
                     
                }
                if (data.type===`exact`){
                    let elementoTitulo=document.createElement('h1');
                    let elementoTexto=document.createElement('p');
                    
                    elementoTitulo.innerHTML=`${data.mus[0].name}`;
                    elementoTexto.innerHTML=`${data.mus[0].text}`;
                    
                    containerMusica.appendChild(elementoTitulo);
                    containerMusica.appendChild(elementoTexto);

                    if (data.mus[0].translate[0]){
                    
                    let elementoTituloTraducao=document.createElement('h1');
                    let elementoTextoTraducao=document.createElement('p');
                    
                    elementoTituloTraducao.innerHTML=`Tradução`;
                    elementoTextoTraducao.innerHTML=`${data.mus[0].translate[0].text}`;
                    
                    containerTrans.appendChild(elementoTituloTraducao);
                    containerTrans.appendChild(elementoTextoTraducao);

                        }
                }

                
            })
            .catch(error=>{
                console.log(`ERRO:${error.message}`)
            })

    }