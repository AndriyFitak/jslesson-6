/*let parseArrToStr = (arr) => {
    let str = ''
    arr.forEach((symbol) => {
        str += symbol
    })
    return str
}

let alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
            'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
            'w', 'x', 'y', 'z']

let cipherSet =(str,key) => {
    let cipherText = []
    for (let i = 0; i < str.length; i++){
        let symbolIndex = 0
        alph.forEach((s,index) => {
            if (s == str[i].toLowerCase()){
                symbolIndex = index
            }
        })
        if (symbolIndex + key > alph.length-1) {
            symbolIndex = symbolIndex + key - alph.length-1
        }
        cipherText.push(alph[symbolIndex+key])
    }
    return parseArrToStr(cipherText)
}


let str = prompt(`Enter text`)
let key = 2

console.log(cipherSet(`${str}`, 3))*/

let names = prompt('Enter name: ')
let age = prompt('Enter age:')
let password = prompt('Enter password:')
let date = prompt('Enter date:')
let user = {
    name: `${names}`,
    age: `${age}`,
    login : `${password}`,
    date : `${date}`,
}

for (key in user ){
    console.log(user[key])
}