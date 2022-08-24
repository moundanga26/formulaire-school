// La méthode addEventListener() attache une fonction
// à appeler chaque fois que l'évènement spécifié est envoyé à la cible.

window.addEventListener('load', () => {
    eleves = JSON.parse(localStorage.getItem('lists')) || [];
    viewer() // La méthode JSON.parse() analyse une chaîne de caractères JSON 
    //et construit la valeur JavaScript ou l'objet décrit par cette chaîne  
})

// La méthode getItem() de l'interface Storage renvoie la valeur associée à la clé passée en paramètre. 
let eleves = []
let stockEleve = JSON.parse(localStorage.getItem('eleves')) 


// La méthode getElementById() de Document renvoie un objet Element 
// représentant l'élément dont la propriété id correspond à la chaîne de caractères spécifiée.

function recuperer(){

    
let nom = document.getElementById('nom').value
let prenom = document.getElementById('prenom').value //L' attribut value en HTML est utilisé pour
let genre = document.getElementById('genre').value  // spécifier la valeur de l'élément avec lequel il est utilisé. 
let date = document.getElementById('date').value
let lieu = document.getElementById('lieu').value
let classe = document.getElementById('classe').value
let profession = document.getElementById('profession').value
let numero = document.getElementById('numero').value
let email = document.getElementById('email').value

let eleve = {
    nom : nom,
    prenom : prenom,
    genre : genre,
    date : date,
    lieu : lieu,
    classe : classe,
    profession : profession,
    numero : numero,
    email : email,
}


// Ici c'est la creation du tableau montrant les resultats des infos du formulaire

eleves.push(eleve)
localStorage.setItem("eleves", JSON.stringify(eleves));
 let tableau = document.getElementById('tableau')
 tableau.innerHTML += `
 <tr>
    <td>${nom}</td>
    <td>${prenom}</td>
    <td>${genre}</td>
    <td>${date}</td>
    <td>${lieu}</td>
    <td>${classe}</td>
    <td>${nom}</td>
    <td>${prenom}</td>
    <td>${profession}</td>
    <td>${numero}</td>
    <td>${email}</td>
 </tr>
 `

}
// ici c'est ou le tableau stocke les infos du formulaire quand on appuie sur le bouton voir


function viewer() {
    for (let index = 0; index < stockEleve.length; index++) {
        let tableau = document.getElementById('tableau')
    
 // innerHTML On l'utilise pour lire pour insérer dynamiquement un contenu dans une page.  

    tableau.innerHTML += `
    <tr>
       <td>${stockEleve[index].nom}</td>
       <td>${stockEleve[index].prenom}</td>
       <td>${stockEleve[index].genre}</td>
       <td>${stockEleve[index].date}</td>
       <td>${stockEleve[index].lieu}</td>
       <td>${stockEleve[index].classe}</td>
       <td>${stockEleve[index].nom}</td>
       <td>${stockEleve[index].prenom}</td>
       <td>${stockEleve[index].profession}</td>
       <td>${stockEleve[index].numero}</td>
       <td>${stockEleve[index].email}</td>
    </tr>
    `
       
    }
}


