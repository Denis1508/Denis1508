"use strict";

const Number_of_survivors = 50;
const Names = ["Noob","Pro","Canard","Ratio","Porte","Voiture","Piano","Chaise","Table","Helicoptere"]

let Killer_HP = 100
let Survivors = []

class CreateSurvivor{
    constructor(Dead_chance,Damage_chance,Sacrifice_chance){
        this.Alive = true;
        const New_name_index = Math.floor(Math.random() * Names.length)
        this.Name = Names[New_name_index];
        Names.splice(New_name_index,1)
        this.Dead_chance = Dead_chance;
        this.Damage_chance = Damage_chance;
        this.Sacrifice_chance = Sacrifice_chance;
    }

    Action(){
        //mourir
        if (Math.random() < this.Dead_chance) {
            this.Alive = false
            console.log("Jason a tué "+this.Name)
            return;
        }

        //esquive et fait des degats
        if (Math.random() < this.Damage_chance) {
            Killer_HP -= 10
            console.log(this.Name+" a attaqué, HP restant : "+Killer_HP)
            return;
        }

        if (Killer_HP <= 0){
            return;
        }
        
        //sacrifice
        if (Math.random() < this.Sacrifice_chance) {
            Killer_HP -= 15
            this.Alive = false
            console.log(this.Name+" est mort mais a attaqué, HP restant : "+Killer_HP)
        }

    }
}

let Survivors_names = ""

for (let i = 0; i < Number_of_survivors ;i++){
    let Survivor = new CreateSurvivor(Math.random(),Math.random(),Math.random())
    Survivors.push(Survivor)
    Survivors_names += Survivor.Name + " "
}

console.log("Equipe : "+Survivors_names)
console.log("____")

Survivors.forEach(Survivor =>{
    while (Killer_HP > 0 && Survivor.Alive) {
        Survivor.Action()
    }
})

if (Killer_HP <= 0){
    let Someone_dead = false
    Survivors.forEach(Survivor =>{
        if (Survivor.Alive == false){
            Someone_dead = true
            return
        }
    })
    if (Someone_dead == true){
        console.log("Les survivants ont gagné mais...")
        for (let i = 0; i < Number_of_survivors ;i++){
            if (Survivors[i].Alive == false){
                console.log(Survivors[i].Name+" est decedé.")
            }
        }
    }else{
        console.log("Les survivants ont gagné et personne n'est mort !")
    }
}else{
    console.log("Jason a tué tout les survivants, HP restant : "+Killer_HP)
}