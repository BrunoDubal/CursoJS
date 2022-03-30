function fatorial(n){
    for(let c = n-1; c >= 1; c--){
        n *= c
    }
    console.log(n)
}

fatorial(4)