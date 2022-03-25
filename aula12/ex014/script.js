function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var txt = document.getElementById('p3')
    var img = document.getElementById('imagem')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique se os campos foram marcados corretamente.')
    } else {
        var radsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        if (radsex[0].checked){
            gen = 'Homem'
        } else {
            gen = 'Mulher'
        }
        txt.innerHTML = `Identificamos ${gen} de ${idade} ano.`
        if (gen == 'Homem') {
            if (idade >= 0 && idade < 4) {
                img.src='imagens/bebem.png'
            } else if (idade > 3 && idade < 14) {
                img.src='imagens/criancam.png'
            } else if (idade > 13 && idade < 18) {
                img.src='imagens/jovemm.png'
            } else if (idade > 17 && idade < 60) {
                img.src='imagens/adultom.png'
            } else {
                img.src='imagens/idosom.png'
            }
        } else {
            if (idade >= 0 && idade < 4) {
                img.src='imagens/bebef.png'
            } else if (idade > 3 && idade < 14) {
                img.src='imagens/criancaf.png'
            } else if (idade > 13 && idade < 18) {
                img.src='imagens/jovemf.png'
            } else if (idade > 17 && idade < 60) {
                img.src='imagens/adultof.png'
            } else {
                img.src='imagens/idosof.png'
            }
        }
    }
}