var currentTab = 0; // L'onglet actuel est défini comme étant le premier onglet (0)
showTab(currentTab); // Affiche l'onglet courant

function showTab(n) {
 // Cette fonction affichera l'onglet spécifié du formulaire ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
 // ... et corrige les boutons Précédent/Suivant :
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
 // ... et exécutez une fonction qui affiche le bon indicateur d'étape :
  fixStepIndicator(n)
}

function nextPrev(n) {
  // Cette fonction déterminera quel onglet afficher
  var x = document.getElementsByClassName("tab");
 // Quitte la fonction si un champ de l'onglet courant est invalide :
  if (n == 1 && !validateForm()) return false;
 // Masque l'onglet courant :
  x[currentTab].style.display = "none";
  // Augmente ou diminue l'onglet courant de 1 :
  currentTab = currentTab + n;
 // si vous avez atteint la fin du formulaire... :
  if (currentTab >= x.length) {
    //...le formulaire est soumis :
    document.getElementById("regForm").submit();
    return false;
  }
  // Sinon, affichez le bon onglet :
  showTab(currentTab);
}

function validateForm() {
// Cette fonction s'occupe de la validation des champs du formulaire
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // Une boucle qui vérifie chaque champ d'entrée dans l'onglet actuel :
  for (i = 0; i < y.length; i++) {
    // Si un champ est vide...
    if (y[i].value == "") {
      // ajoute une classe "invalide" au champ
      y[i].className += " invalid";
     // et définissez le statut valide actuel sur false :
      valid = false;
    }
  }
  // Si le statut valide est vrai, marque l'étape comme terminée et valide :
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // renvoie le statut valide
}

function fixStepIndicator(n) {
  // Cette fonction supprime la classe "active" de toutes les étapes...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... et ajoute la classe "active" à l'étape en cours :
  x[n].className += " active";
}

