var i = 65

if (i < 16){
    console.log('Você ainda não pode votar!')
} else if (i >= 16 && i < 18){
    console.log('Seu voto é opcional!')
} else if (i >= 18 && i < 65){
    console.log('Seu voto é obrigatorio!')
} else {
    console.log('Seu voto é opcional')
}