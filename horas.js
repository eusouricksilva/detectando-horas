function carregar() {
    var mensagem = window.document.getElementById ('mensagem')
    
    var foto = window.document.getElementById ('imagem')
    
    var data = new Date()
    
    var hora = data.getHours()
    
    mensagem.innerHTML = `Agora São ${hora} horas`
    if (hora >= 0 && hora < 12) {
        foto.src = 'imagens/fotomanha.png'
        document.body.style.background = '#ffdb58'
        
    } else if (hora >= 12 && hora <= 18) {
        foto.src = 'imagens/fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        foto.src = 'imagens/fotonoite.png'
        document.body.style.background = '#515154'
    }
}