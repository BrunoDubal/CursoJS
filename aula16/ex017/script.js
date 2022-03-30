var lista = []
var ress = document.getElementById('ress')


function adicionar(){
    let num = document.getElementById('txtn')
    let n = Number(num.value)
    let verf = lista.indexOf(n)
    let res = document.getElementById('res')

    ress.innerHTML = ''
    if (n < 1){
        alert('Numero invalido ou ja consta na lista.')
    } else if (n > 100) {
        alert('Numero invalido ou ja consta na lista.')
    } else if (verf != -1) {
        alert('Numero invalido ou ja consta na lista.')
    } else {
        let item = document.createElement('option')
        lista.push(n)
        item.text = `Número ${n} adicionado.`
        res.appendChild(item)
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    let soma = 0
    for (let c in lista){
        soma += lista[c]
    }
    let media = soma/lista.length
    ress.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`
    ress.innerHTML += `<p>O maior valor informado foi ${Math.max.apply(null, lista)}</p>`
    ress.innerHTML += `<p>O menor valor informado foi ${Math.min.apply(null, lista)}</p>`
    ress.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
    ress.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}</p>`
}