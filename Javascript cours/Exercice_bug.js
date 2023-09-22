"use strict"

let users = ["Stéphanie","Gaïa", "Etienne", "Michel", "Roberto", "Julie"]

/*function CountCharacter(value){
    return value.length
}
*/
users.forEach(user => {
    if (user.length > 5){
        console.log("c'est un prénom long de plus de 5 lettres.")
    } else {
        console.log("ce n'est pas du tout un prénom long.")
    }
});