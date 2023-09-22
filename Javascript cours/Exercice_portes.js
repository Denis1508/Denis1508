class Joueur {
    constructor(sante) {
      this.sante = sante;
      this.nbEssais = 0; // Initialisation du compteur d'essais.
    }
  
    choisirPorte() {
      this.nbEssais++; // Incrémentation du compteur d'essais.
      
      // Générer un nombre aléatoire entre 1 et 3 pour choisir une porte.
      const porteChoisie = Math.floor(Math.random() * 3) + 1;
  
      // Simuler les effets de chaque porte.
      if (porteChoisie === 1) {
        this.sante += 5; // La porte 1 améliore la santé mentale.
      } else if (porteChoisie === 2) {
        this.sante -= 3; // La porte 2 détériore la santé mentale.
      } // Pas d'effet sur la santé mentale pour la porte 3.
  
      return porteChoisie; // Retourne le numéro de la porte choisie.
    }
  }
  
  // Création d'un joueur avec une santé mentale initiale de 10.
  let joueur = new Joueur(10);
  
  while (joueur.sante > 0 && joueur.nbEssais < 30) {
    let porte = joueur.choisirPorte();
    console.log(`Le joueur a choisi la porte ${porte}. Santé mentale actuelle : ${joueur.sante}`);
  }
  
  if (joueur.sante <= 0) {
    console.log("Le joueur a épuisé sa santé mentale.");
  } else {
    console.log("Le joueur a terminé l'aventure avec une santé mentale finale de : " + joueur.sante);
  }
  
  console.log(`Nombre d'essais effectués : ${joueur.nbEssais}`);