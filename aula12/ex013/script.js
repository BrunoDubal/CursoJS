function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 15//data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 1 && hora < 12){
        document.body.style.backgroundColor = 'rgb(238, 202, 124)'
        img.scr = 'imagens/manha.png'
    } else if (hora >= 12 && hora < 19){
        document.body.style.backgroundColor = 'rgb(218, 134, 55)'
        img.src = 'imagens/tarde.png'
    } else {
        document.body.style.backgroundColor = '#473c3cd3'
        img.src = 'imagens/noite.png'
    }
}