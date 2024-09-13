function teste(){
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => {
    const titulo = document.getElementById ("titulo");
    const corpo = document.getElementById ("corpo");
    titulo.innerHTML=json.title;
    corpo.innerHTML=json.body;
});
}
teste();

