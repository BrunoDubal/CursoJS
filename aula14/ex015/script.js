function contar(){
    var inicio = document.getElementById('inicio')
    var i = Number(inicio.value)
    var fim = document.getElementById('fim')
    var f = Number(fim.value)
    var passo = document.getElementById('passo')
    var p = Number(passo.value)
    var res = document.getElementById('resultado')

    res.innerHTML = ''

    if (i > f){
        if(Math.sign(p) == -1){
            alert('Passo invalido, por favor preencha todos os campos corretamente.')
        } else{
            for(i; i >= f; i -= p){
                res.innerHTML += `${i} => `
            }
        }
    } else if (i.length == 0 || f.length == 0){
        alert('Passo invalido, por favor preencha todos os campos corretamente.')
    } else if(Math.sign(p) == -1 && i < f){
        alert('Passo invalido, por favor preencha todos os campos corretamente.')
    } else if(p == 0 || p.length == 0){
        alert('[ERRO] Valor do passo inválido. Será considerado 1.')
        var p = 1
        if (i > f){
            for(i; i >= f; i -= p){
                res.innerHTML += `${i} => `
            }
        } else{
            for(i; i <= f; i += p){
                res.innerHTML += `${i} => `
            }
        }
    } else{
        for(i; i <= f; i += p){
            res.innerHTML += `${i} => `
        }
    }
    res.innerHTML += 'Fim'
}