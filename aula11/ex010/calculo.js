function calcular(){
    var txtv = window.document.getElementById('txtvel')
    var vel = Number(txtv.value)
    var res = window.document.getElementById('res')
    res.innerHTML = `Sua velocidade é de ${vel}km/h </br>`
    if(vel > 60) {
        res.innerHTML += `<p>Você será <strong>multado</strong> por excesso de velocidade!</p>`
    } else {
        res.innerHTML += `Continue dirigindo com segurança!`
    }
}