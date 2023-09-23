"use strict";

const Musics = ["Anissa","Turi ip ip ip","Turi ip ip ip2","Turi ip ip ip3","Turi ip ip ip4"]

class Create_character{
    constructor(Name,Mental_health,Max_red_lights){
        this.Name = Name;
        this.Mental_health = Mental_health;
        this.Max_red_lights = Max_red_lights;
        this.Red_lights_taken = 0;
        this.Change_taxi = 0;
    }

    Take_taxi(){

        this.Red_lights_taken += 1;

        const Music = Musics[Math.floor(Math.random() * Musics.length)]
        if (Music == "Anissa"){
            this.Mental_health -= 1;
            this.Change_taxi += 1;
            console.log("Musique : Anissa, il change de taxi, santé mentale : "+this.Mental_health)
        }else{
            console.log("Musique : "+Music)
        }
    }
}

let John = new Create_character("John",10,30)

while (John.Mental_health > 0 && John.Red_lights_taken < John.Max_red_lights) {
    John.Take_taxi();
}

if (John.Mental_health == 0){
    console.log("EXPLOSION")
}else{
    console.log(John.Name+" est bien arrivé, il a pris : "+John.Change_taxi+" taxis.")
}