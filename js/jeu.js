var Perso={
	init:function(nom, sante, force, or, cle, xp){
	this.nom=nom;
	this.sante=sante;
	this.force=force;
	this.or=or;
	this.cle=cle;
	this.xp=xp
	},

decrire: function() {
	var description= this.nom + " a " + this.sante + " en santé et "
	 + this.force + " en force. " + this.nom + " possède " + this.or 
	 + " pièces d'or et " + this.cle + " clés.";
	 return description;
	},

attaquer: function (cible) {
	if (this.sante>0){
		var degats= this.force;
		console.log(this.nom + " attaque " + cible.nom + 
			" et lui fait " + degats + " points de dégâts");
		cible.sante=cible.sante-degats
		if(cible.sante>0){
			console.log(cible.nom + " a encore " + cible.sante + 
				" points de vie");
		}
		else{
			cible.sante=0;
			console.log(cible.nom + " est mort !");
			console.log(this.nom + " a tué " + cible.nom + 
				" et gagne " + cible.xp + " points d'expérience et" + cible.or
				 + " d'or ainsi que"+ cible.cle+ " clé(s)");
        this.xp += cible.xp;
        this.cle += cible.cle;
        this.or += cible.or;
		}
	}
	else{
		console.log(this.nom + " ne peut pas attaquer : il est mort...");
	}
}
}

var hero1= Object.create(Perso);
hero1.init("Minilum", 150, 25, 10, 1, 0);

var hero2= Object.create(Perso);
hero2.init("Miniboy", 150, 35, 10, 0, 0);

var monstre= Object.create(Perso);
monstre.init("Le grand méchant", 50, 50, 10, 1, 10);

console.log(hero1.decrire());
console.log(hero2.decrire());


var lanceDeDes= prompt("Appuyer sur A pour lancer le dé")
lanceDeDes=lanceDeDes.toLowerCase()
var start=true
while(start===true){
if (lanceDeDes === "a"){
	var deRoule=Math.round(Math.floor(Math.random()*20))
	console.log(deRoule)
	start=false
}
else{
	console.log("Appuyer sur A pour lancer le dé")
	lanceDeDes= prompt("Appuyer sur A pour lancer le dé")
	start=true
}
if (deRoule%2===0){
	hero1.attaquer(monstre)
}
else if (deRoule%3===0){
	hero2.attaquer(monstre)
}
else{
	monstre.attaquer(hero1)
	monstre.attaquer(hero2)
	
}
}

console.log(hero1.decrire());
console.log(hero2.decrire());


var lanceDeDes= prompt("Appuyer sur A pour lancer le dé")
lanceDeDes=lanceDeDes.toLowerCase()
var start=true
while(start===true){
if (lanceDeDes === "a"){
	var deRoule=Math.round(Math.floor(Math.random()*20))
	console.log(deRoule)
	start=false
}
else{
	console.log("Appuyer sur A pour lancer le dé")
	lanceDeDes= prompt("Appuyer sur A pour lancer le dé")
	start=true
}
if (deRoule%2===0){
	hero1.attaquer(monstre)
}
else if (deRoule%3===0){
	hero2.attaquer(monstre)
}
else{
	monstre.attaquer(hero1)
	monstre.attaquer(hero2)
	
}
}

console.log(hero1.decrire());
console.log(hero2.decrire());