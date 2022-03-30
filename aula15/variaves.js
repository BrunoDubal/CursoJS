/*
let num  = []
num.push(7, 5, 3)
num.sort()
console.log(num)
*/

/*
let num = []
num.push(1, 7, 6, 2 ,4)
for(let c = 0; c <= num.length - 1; c++){
    console.log(`Numero ${num[c]} está no indice ${c}.`)
}
*/

let num = [5, 7, 1, 3, 9]
for(let c in num){
    console.log(`Numero ${num[c]} está no indice ${c}`)
}

console.log(`O valor 9 está na posição ${num.indexOf(9)}`)