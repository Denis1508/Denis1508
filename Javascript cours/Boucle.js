let aBis=4;
for(let i=0;i<aBis;i++){
    console.log('OKLM');
}

let aT=3;
while(aT<9){
    aT++
    if(aT==7){
        continue
    }
    if(aT==8){
        break
    }
    console.log(aT);
}
console.log('Jai cassé la boucle au bout de '+aT+" tours");
