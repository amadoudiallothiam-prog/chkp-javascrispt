//exercices 1

function somme( a , b ) {
    return a + b 
}
//---------------------------------------
//exercices 2

function produit(a,b) {
    return a * b
}

//-----------------------------------------

//exercices 3

function verifierage(age) {
    if (age >= 18)
        console.log("majeur")
    else
        console.log("mineur")
}


//exercices 4

function verifierNombre(nombre) {
    if (nombre > 0) {
        console.log("Positif");
    } else if (nombre < 0) {
        console.log("Négatif");
    } else {
        console.log("Zéro");
    }
}

// Exercices 5
function jourDeLaSemaine(num) {
    switch (num) {
        case 1:
            return "Lundi";
        case 2:
            return "Mardi";
        case 3:
            return "Mercredi";
        case 4:
            return "Jeudi";
        case 5:
            return "Vendredi";
        case 6:
            return "Samedi";
        case 7:
            return "Dimanche";
        default:
            return "Jour invalide";
    }
}

//Exercices 6
function appreciation(note) {
    switch (note) {
        case "A":
            return "Excellent";
        case "B":
            return "Bien";
        case "C":
            return "Passable";
        case "D":
            return "Insuffisant";
        default:
            return "Note invalide";} }

//exercices 7
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//--------------------------------------------------
//exercices 8
for (let i = 1; i <= 5; i++) {
    console.log(i);}
//--------------------------------------------------
//exercices 9
let compteur = 5;

while (compteur >= 1) {
    console.log(compteur);
    compteur--;
}

console.log("Décollage !");
//-----------------------------------------------------
// exercice 10
let compteur = 1;

while (compteur <= 3) {
    console.log(compteur);
    compteur++;
}