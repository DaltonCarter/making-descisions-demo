/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Obiwan Kenobi and
    Anakin Skywalker.
*/ //GO TEAM STARK!!!

let kenobiAttack = 25
let skywalkerAttack = 35

if(kenobiAttack > skywalkerAttack){
    console.log('Obiwan has a better attack.')
} else if(kenobiAttack < skywalkerAttack) {
    console.log('Anakin has the better attack.')
} else {
    console.log('Obiwan and Anakin are equally matched.')
}

let kenobiHp = 100
let kenobiDefense = 0

if(skywalkerAttack >= kenobiHp){
    console.log('Obiwan was slain!')
} else {
    kenobiHp = kenobiHp - skywalkerAttack
    console.log("Obiwan's health is now " + kenobiHp)
}

kenobiDefense += 30
console.log("R2-D2 throws Obiwan a medpack!")
if((kenobiHp + 50) >= 100){
    kenobiHp = 100
    console.log("Obiwan is fully healed!")
} else {
    kenobiHp += 50
    console.log("Obiwans' health is now " + kenobiHp)
}

for(let i = 0; i < 5; i++){
    kenobiHp -= (skywalkerAttack - kenobiDefense)
    console.log(`Anakin attacks! Obiwans' health is now ${kenobiHp} `)
}

while(kenobiHp >= 0){
    kenobiHp -= (skywalkerAttack - kenobiDefense)
    console.log("Anakin barrages Obiwan with blows! Obiwans' health is now " + kenobiHp)
    if(kenobiHp <= 0){
        console.log('Obiwan has been slain!')
    }
}