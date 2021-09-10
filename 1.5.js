function nombreD() {
  let nbreUser01 = Number(document.getElementById("nbreUser01").value);
  let nbreUser02 = Number(document.getElementById("nbreUser02").value);
  let total;
  total = nbreUser01 * nbreUser02;

  document.getElementById("reponseCalcul").innerHTML =
    "La multiplication de " +
    Math.floor(nbreUser01) +
    " et " +
    nbreUser02 +
    " est : " +
    total +
    " !" ;
}
