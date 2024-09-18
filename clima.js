const url='http://localhost:3000/weather/'
fuction clima(){
    const cidade=document.getElementById("exampleInputEmail1").value;
    const tempo=url+cidade+'/json'
    console.log (cidade)
    fetch (cidade)
    .then ((response) => response.json())
    .then((data)=>{
        document.getElementById ('temperatura').value = data.temperature;
    })

}