class Pokemon{
    constructor(name,attack,defense,hp,luck){
        this.name=name
        this.attack=attack
        this.defense=defense
        this.hp=hp
        this.luck=luck
    }
    attackPokemon(pokemon){
        if(this.isLucky()){
            let damage=this.attack-pokemon.defense
            pokemon.hp-=damage
            console.log(this.name+' a attqué '+pokemon.name+' pour '+damage+' de degat il lui reste '+pokemon.hp+" points de vie");
        }else {
            console.log(this.name+" a raté son attaque");
        }
    }
    isLucky(){
        return this.luck>Math.random()
    }
}
let dracofeu = new Pokemon('Dracofeu',14,8,100,0.5);
let boulbi = new Pokemon('Boulbi',18,4,70,0.8);

while(dracofeu.hp >0 && boulbi.hp>0){
    dracofeu.attackPokemon(boulbi)
    if(boulbi.hp<=0){
        console.log(boulbi.name+" is dead !");
        break;
    }
    boulbi.attackPokemon(dracofeu)
    if(dracofeu.hp<=0){
        console.log(dracofeu.name+" is Dead !");
        break
    }
}