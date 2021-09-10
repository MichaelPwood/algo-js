function bonjour() {
  let prenom = document.getElementById("prenomDeux").value;
  let nom = document.getElementById("nom").value;
  let ville = document.getElementById("ville").value;

  document.getElementById("reponseFinal").innerHTML =
    "Bonjour " + prenom + " " + nom + " vous habitez " + ville + " !";
}
