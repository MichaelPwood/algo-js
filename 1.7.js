function ExercicePointure() {
  let pointure = Number(document.getElementById("pointure").value);
  let naissance = Number(document.getElementById("naissance").value);

  let multiPointure;
  multiPointure = pointure * 2;
  let multiPointurePlus;
  multiPointurePlus = multiPointure + 5;
  let multiPointureFois;
  multiPointureFois = multiPointurePlus * 50;
  let moinAnnéeDeNaissance;
  moinAnnéeDeNaissance = multiPointureFois - naissance;
  let add;
  add = moinAnnéeDeNaissance + 1766;
  document.getElementById("resultaE7").innerHTML =
    "La multiplacation de votre pointure par deux vaut : " +
    multiPointure +
    " ! <br>Si j'ajoute 5 le résultat est : " +
    multiPointurePlus +
    " ! <br> Je multiplie le résultat par 50 : " +
    multiPointureFois +
    " ! <br>je soustrais le résutlat par votre année de naissance : " +
    moinAnnéeDeNaissance +
    " ! <br>Plus 1755 : " +
    add +
    " !";
}
