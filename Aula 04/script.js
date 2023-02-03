function adicionarFilme(){
    var filmeFavorito = document.getElementById('filme').value
    var elementoListaFilmes = document.getElementById('listaFilmes')
    
    if(filmeFavorito.indexOf("jpg") !==-1){
        elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML +'<img src=' + filmeFavorito +'>'
        document.getElementById('filme').value = ''
        return
    }
    
    else if(filmeFavorito.indexOf("png") !==-1){
        elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<img src=' + filmeFavorito + '>'
        document.getElementById('filme').value = ''
        return
    }
        alert("Link não suportado!!")
        document.getElementById('filme').value = ''

 }


function removerFilme(){
    var element = document.getElementById("listaFilmes");
    element.remove();
}