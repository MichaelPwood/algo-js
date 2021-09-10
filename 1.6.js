function nombreEntier() {
  let nbrEntier01 = Number(document.getElementById("nbrEntier01").value);
  let nbrEntier02 = Number(document.getElementById("nbrEntier02").value);
  let totalDivision;
  totalDivision = nbrEntier01 % nbrEntier02;
  document.getElementById("division").innerHTML =
    "Le reste de la division de vos deux nombres est : " + totalDivision + " !";
}
