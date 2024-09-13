const urlbasica= 'https://jsonplaceholder.typicode.com/posts'

function teste(){
fetch(urlbasica+'/1')
  .then((response) => response.json())
  .then((json) => {
    const titulo = document.getElementById ("titulo");
    const corpo = document.getElementById ("corpo");
    titulo.innerHTML=json.title;
    corpo.innerHTML=json.body;
});
}
teste();

function enviar(){
    const titulo=document.getElementById ('exampleFormControlInput1');
    const post=document.getElementById ('exampleFormControlTextarea1')
    fetch(urlbasica, {
        method: 'POST',
        body: JSON.stringify({
          title: titulo,
          body: post,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

}
enviar();