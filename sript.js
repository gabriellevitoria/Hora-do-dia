function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById ('imagem')
    var data = new Date()
    var hora = data.getHours()

    

    msg.innerHTML = `Agora são ${hora} horas.`
    if( hora >=0 && hora < 12 ) {
        //Bom dia
        img.src = 'manhã.png'
        document.body.style.background = '#d8d0c5'

    } else if ( hora >= 12 && hora < 19){
        //Boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#B56154'
        
    }else{
        //Boa noite
        img.src = 'noite.jpg'
        document.body.style.background = '#375D68'
    }
}
